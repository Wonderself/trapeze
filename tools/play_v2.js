// Test de jouabilite V2 : un joueur automatique doit franchir un niveau.
// Il ne triche pas — il passe par les memes entrees que le joueur humain.
const fs=require('fs'),vm=require('vm'),path=require('path');
// Chemins relatifs au script : l'outil pointait vers un dossier temporaire
// d'une session passee, qui n'existe plus. Il ne demarrait plus du tout.
const base=require(path.join(__dirname,'sandbox.js'));
const file=path.join(__dirname,'..','trapeze-stars-v2.html');
const html=fs.readFileSync(file,'utf8');
const code=html.match(/<script>([\s\S]*?)<\/script>/)[1];

const bridge=`
;globalThis.__g={
  get gs(){return gs;}, set gs(v){gs=v;},
  get score(){return score;}, get lives(){return lives;}, set lives(v){lives=v;},
  get heat(){return heat;}, get heatTier(){return heatTier;},
  get bank(){return bank;}, get level(){return level;},
  get goalZ(){return goalZ;}, get frame(){return frame;},
  get bars(){return bars;}, get catchers(){return catchers;}, get hoops(){return hoops;},
  get plats(){return plats;}, get stars(){return stars;},
  P, CFG, step, startRun, nearestBar, grabQuality, spawnPlayer, nextLevel,
  get world(){return world;}, get TH(){return TH;},
  get KEY(){return KEY;}, get hazards(){return hazards;},
  press(){P.jumpHeld=true;P.jumpBuf=CFG.JUMP_BUF;},
  releaseA(){P.jumpHeld=false;},
  trick(){P.trickHeld=true;P.trickBuf=CFG.GRAB_BUF;},
  untrick(){P.trickHeld=false;},
};`;

const sb=base.makeSandbox(html);
vm.createContext(sb);
new vm.Script(code+bridge,{filename:file}).runInContext(sb,{timeout:15000});
const G=sb.__g;
if(!G){console.error('pont absent');process.exit(1);}


function dodge(G){
  const P=G.P;
  G.KEY['arrowleft']=false;G.KEY['arrowright']=false;
  let threat=null,bd=1e9;
  for(const h of G.hazards){
    const dz=h.z-P.z;
    if(dz<-40||dz>430)continue;
    if(Math.abs(P.x-h.x)>96)continue;
    if(dz<bd){bd=dz;threat=h;}
  }
  if(threat){
    // S'ecarter du cote ou il reste de la place
    const away=(threat.x>=0)?-1:1;
    if(away<0)G.KEY['arrowleft']=true;else G.KEY['arrowright']=true;
    return;
  }
  // Sinon, se recentrer sur la prochaine barre
  let nb=null;
  for(const b of G.bars){if(b.z>P.z+30){nb=b;break;}}
  if(nb){
    if(nb.x-P.x>18)G.KEY['arrowright']=true;
    else if(nb.x-P.x<-18)G.KEY['arrowleft']=true;
  }
}

G.startRun();
const start={z:G.P.z,goal:G.goalZ};
console.log('niveau 1 : depart z='+start.z.toFixed(0)+', arrivee z='+start.goal.toFixed(0));

let grabs=0,perfect=0,pumps=0,releases=0,catches=0,nets=0,maxHeat=0,maxZ=-1e9;
let prevState=G.P.state;

for(let f=0;f<9000;f++){
  const P=G.P;
  // ── Politique du joueur automatique ──
  dodge(G);
  if(P.state==='air'){
    G.untrick();
    const found=G.nearestBar();
    // Saisir des qu'une barre est a portee utile
    if(found&&found.dist<G.CFG.GRAB_R*1.2){G.press();}
    else if(P.vy<0&&P.y<120){G.press();}     // tenter un saut si on retombe bas
    else G.releaseA();
  } else if(P.state==='run'){
    G.press();                                // s'elancer
  } else if(P.state==='swing'){
    G.releaseA();
    // Pomper au point bas tant que l'amplitude est insuffisante.
    // On mesure l'amplitude par l'energie du pendule, pas par un compteur.
    const amp=Math.abs(P.angV)*G.CFG.ROPE;
    if(Math.abs(P.ang)<G.CFG.PUMP_WIN*0.85&&amp<16){G.trick();pumps++;}
    else G.untrick();
    // Lacher sur la montee avant, la ou la trajectoire porte le plus loin
    if(amp>=14&&P.ang>0.48&&P.ang<0.92&&P.angV>0){G.press();}
  }

  G.step();

  const s=G.P.state;
  if(s!==prevState){
    if(s==='swing'){grabs++;if(G.P.landQuality==='perfect')perfect++;}
    if(s==='caught')catches++;
    if(s==='net')nets++;
    if(prevState==='swing'&&s==='air')releases++;
    prevState=s;
  }
  maxHeat=Math.max(maxHeat,G.heat);
  maxZ=Math.max(maxZ,G.P.z);
  if(G.gs!=='play')break;
}

const reached=maxZ/start.goal;
console.log('');
console.log('  progression   : '+(reached*100).toFixed(1)+'% du niveau (z max '+maxZ.toFixed(0)+')');
console.log('  prises        : '+grabs+' dont '+perfect+' parfaites');
console.log('  pompages      : '+pumps);
console.log('  lachers       : '+releases);
console.log('  porteurs      : '+catches);
console.log('  chutes filet  : '+nets);
console.log('  chaleur max   : '+maxHeat.toFixed(0)+'/100');
console.log('  score         : '+G.score);
console.log('  vies          : '+G.lives);
console.log('  etat final    : '+G.gs);
console.log('');

let fail=0;
function want(cond,msg){if(cond){console.log('  OK   '+msg);}else{console.log('  ECHEC '+msg);fail++;}}
want(grabs>=3,'le joueur parvient a saisir des barres');
want(releases>=2,'le lacher fonctionne');
want(pumps>=3,'le pompage est atteignable');
want(G.score>0,'le score progresse');
want(maxHeat>10,'la chaleur du public monte');
want(reached>0.5,'plus de la moitie du niveau est franchissable');
want(G.gs==='levelend'||reached>0.95,'le niveau peut etre termine');

// ── Phase 2 : les 12 niveaux, les 4 mondes ──
console.log('parcours complet des 12 niveaux :');
G.startRun();
let cleared=0, lvFails=[];
for(let lv=0;lv<12;lv++){
  let f=0, done=false;
  const goal=G.goalZ;
  for(;f<14000;f++){
    const P=G.P;
    dodge(G);
    if(P.state==='air'){
      G.untrick();
      const found=G.nearestBar();
      if(found&&found.dist<G.CFG.GRAB_R*1.2)G.press();else G.releaseA();
    } else if(P.state==='run'){G.press();}
    else if(P.state==='swing'){
      G.releaseA();
      const amp=Math.abs(P.angV)*G.CFG.ROPE;
      if(Math.abs(P.ang)<G.CFG.PUMP_WIN*0.85&&amp<16)G.trick();else G.untrick();
      if(amp>=14&&P.ang>0.48&&P.ang<0.92&&P.angV>0)G.press();
    }
    G.step();
    if(G.gs!=='play'){done=(G.gs==='levelend');break;}
  }
  const name=['Cirque','Jungle','Plage','Futur'][G.world];
  if(done){cleared++;console.log('  niv '+(lv+1)+' ('+name+') termine en '+f+' pas, score cumule '+G.score);}
  else{lvFails.push(lv+1);console.log('  niv '+(lv+1)+' ('+name+') NON termine (etat '+G.gs+', z '+G.P.z.toFixed(0)+'/'+goal.toFixed(0)+')');}
  if(G.gs==='gameover'){console.log('  partie perdue au niveau '+(lv+1));break;}
  G.nextLevel();
  if(G.gs==='finale'){console.log('  FINAL atteint');break;}
}
console.log('');
want(cleared>=10,'au moins 10 des 12 niveaux sont franchissables ('+cleared+')');
want(G.score>2000,'le score se cumule sur la partie ('+G.score+')');
process.exit(fail?1:0);
