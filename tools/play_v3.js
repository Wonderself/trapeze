// Test de jouabilite de Trapeze City : un joueur automatique doit franchir
// les SEPT rigs et terminer la traversee, sans intervention.
//
//   node tools/play_v3.js [nombre de parties]
//
// Il ne triche pas : il passe par action() / release() / figure(), c'est a
// dire exactement les fonctions que les touches du clavier appellent. Il ne
// lit l'etat que par le pont __v3, comme un joueur lit son ecran.
//
// C'est ce type d'outil qui avait revele, en Deluxe, des barres tout
// simplement hors de portee. Aucune relecture de code ne trouve ca.
const fs=require('fs'),vm=require('vm'),path=require('path');
const {makeSandbox}=require(path.join(__dirname,'sandbox.js'));
const file=path.join(__dirname,'..','trapeze-city-v3.html');
const html=fs.readFileSync(file,'utf8');
const code=html.match(/<script>([\s\S]*?)<\/script>/)[1];

const RUNS=Math.max(1,parseInt(process.argv[2]||'4',10));
const DT=1/120;

// Le jeu est deterministe : rejouer le MEME pilote quatre fois ne prouve
// rien de plus qu'une fois. On fait donc varier le pilote — c'est le
// parcours qu'on teste, pas une seule maniere de le jouer.
//
//   patience : a quel point il attend une trajectoire propre avant de lacher
//   figures  : jusqu'ou il enchaine les figures avant de se redresser
//   rate     : proportion de pompages qu'il laisse passer (timing imparfait)
const PROFILS=[
  {nom:'applique   ',patience:0.75,figures:13,rate:0.00},
  {nom:'presse     ',patience:0.95,figures:16,rate:0.00},
  {nom:'brouillon  ',patience:0.95,figures:20,rate:0.35},
  {nom:'prudent    ',patience:0.55,figures: 6,rate:0.15},
  {nom:'casse-cou  ',patience:0.99,figures:24,rate:0.45},
];
// Aleatoire a graine : deux executions donnent le meme verdict.
function rng(seed){let a=seed>>>0;return function(){a=(a+0x6D2B79F5)>>>0;let t=a;
  t=Math.imul(t^(t>>>15),t|1);t^=t+Math.imul(t^(t>>>7),t|61);
  return ((t^(t>>>14))>>>0)/4294967296;};}

// Rejoue la balistique du jeu DEPUIS L ETAT COURANT du pendule et renvoie
// l'approche minimale de la barre visee. C'est ce que fait un joueur qui
// « sent » son lacher, en plus honnete : l'angle n'est jamais code en dur,
// puisqu'un angle juste pour une amplitude est faux pour une autre.
function flyMiss(V,n,wind){
  const C=V.CFG,R=V.RIGS,P=V.P;
  const rig=R[n],tgt=R[n+1];
  if(!tgt)return 1e9;
  const c=Math.cos(P.ang),s=Math.sin(P.ang),v=P.angV*rig.rope;
  if(v<=0)return 1e9;                      // on ne lache que sur la montee avant
  const px=rig.dz,pz=-rig.dx;
  let x=P.x,y=P.y,z=P.z;
  let vx=v*rig.dx*c,vy=v*s,vz=v*rig.dz*c;
  const tx=tgt.ax,ty=tgt.ay-tgt.rope,tz=tgt.az;
  let best=1e9;
  for(let i=0;i<1400;i++){
    vy-=C.G_FLIGHT*DT;
    if(wind){vx+=px*wind*DT;vz+=pz*wind*DT;}
    vx*=C.AIR_DRAG;vy*=C.AIR_DRAG;vz*=C.AIR_DRAG;
    x+=vx*DT;y+=vy*DT;z+=vz*DT;
    const d=Math.hypot(x-tx,y-ty,z-tz);
    if(d<best)best=d;
    if(y<ty-40)break;
  }
  return best;
}
function barDist(V,n){
  const R=V.RIGS,P=V.P,r=R[n];
  if(!r)return 1e9;
  const s=Math.sin(r.ang),c=Math.cos(r.ang);
  return Math.hypot(P.x-(r.ax+r.dx*s*r.rope),P.y-(r.ay-c*r.rope),P.z-(r.az+r.dz*s*r.rope));
}

function playOne(idx){
  const prof=PROFILS[idx%PROFILS.length];
  const rnd=rng(0x5EED+idx*7919);
  const sb=makeSandbox(html);
  vm.createContext(sb);
  new vm.Script(code,{filename:file}).runInContext(sb);
  const V=sb.window.__v3;
  if(!V){console.error('pont __v3 absent');process.exit(1);}
  const C=V.CFG,P=V.P;
  const N=V.RIGS.length;

  V.action();                                   // entrer en scene
  const log={pumps:0,releases:0,grabs:0,perfect:0,tricks:0,ports:0,falls:0,
             stuck:null,reached:0,gateStep:0};
  let prevRig=0, prevState=P.state, stuckAt=0, lastProgress=0;
  // Pompage : UN appui par demi-arc, arme au passage par le point bas, et
  // jamais pendant la montee avant. Ces deux regles sont observables a
  // l'oeil (le signe de l'angle, le sens du mouvement) : le pilote ne lit
  // aucun compteur interne que le joueur n'aurait pas sous les yeux.
  //
  // Marteler la touche a bien un cout, et il est plus severe qu'un simple
  // ralentissement : l'amplitude s'installe dans un cycle qui oscille entre
  // 1,7 et 2,8 rad sans jamais tenir le maximum, et un appui juste avant le
  // lacher casse la vitesse au pire moment. Le vol final en demande 2,52 :
  // il n'est pas franchissable en martelant.
  let armed=true, lastSign=1;

  for(let f=0;f<90000;f++){
    const st=V.state;
    if(st.gs==='levelcomplete'||st.gs==='gameover')break;

    if(P.state==='hang'){
      const n=P.rig;
      const sign=P.ang>=0?1:-1;
      // Rearmement au passage par le point bas — ou des que le trapeze est
      // a l'arret, sinon un appui saute laisse le pilote fige devant un
      // pendule mort qui ne repassera jamais par le bas.
      if(sign!==lastSign){lastSign=sign;armed=true;}
      if(P.amp<C.PUMP_MIN)armed=true;
      // Acte 1 : la traversee n'est pas ouverte tant que la hype n'a pas
      // deux etoiles. On monte donc l'amplitude, ce qui est exactement le
      // tutoriel que le carton annonce.
      const gateBlocked=(!st.gate&&n===0);
      const miss=gateBlocked?1e9:flyMiss(V,n,st.windNow);
      const onRise=(P.angV>0&&P.ang>0.25);            // montee avant : on ne touche a rien
      if(miss<C.GRAB_R*prof.patience){V.release();log.releases++;}
      else if(armed&&!onRise&&(P.amp<C.PUMP_MIN||Math.abs(P.ang)>0.60*P.amp)){
        // Un pompage manque de temps en temps : c'est ce qui fait tomber,
        // donc ce qui met le filet et la reprise a l'epreuve.
        if(P.amp<C.PUMP_MIN||rnd()>=prof.rate){V.action();log.pumps++;}
        armed=false;
      }
    } else if(P.state==='fly'){
      const d=barDist(V,P.dst);
      // Figures tant qu'on est loin, puis on se redresse : la sortie propre
      // se merite en ARRETANT la rotation, pas en la prolongeant.
      if(d>prof.figures)V.figure();else V.figureEnd();
      if(d<C.GRAB_R*1.6)V.action();
    } else {
      V.figureEnd();                            // porteur ou filet : on attend
    }

    V.sim(1);

    const s2=P.state;
    if(s2!==prevState){
      if(s2==='hang'&&prevState!=='net')log.grabs++;
      if(s2==='held')log.ports++;
      if(s2==='net')log.falls++;
      prevState=s2;
    }
    if(P.rig>prevRig){prevRig=P.rig;lastProgress=f;}
    if(P.rig>log.reached)log.reached=P.rig;
    if(!log.gateStep&&V.state.gate)log.gateStep=f;
    // Blocage : plus aucun rig franchi depuis 24 000 pas (200 s de jeu).
    if(f-lastProgress>24000){log.stuck='rig '+(P.rig+1)+', etat '+P.state;stuckAt=f;break;}
  }
  const fin=V.state;
  log.tricks=fin.bestChain;
  log.done=(fin.gs==='levelcomplete'||fin.gs==='finale')&&P.rig>=N-1;
  log.fin=fin;
  console.log('  '+prof.nom+' : '
    +(log.done?'TRAVERSEE BOUCLEE':'ECHEC'+(log.stuck?' ('+log.stuck+')':''))
    +'  rig '+(log.reached+1)+'/'+N
    +'  temps '+fin.time.toFixed(1)+' s'
    +'  chutes '+fin.falls
    +'  etoiles max '+fin.maxStars
    +'  meilleur enchainement '+fin.bestChain
    +'  cagnotte '+fin.totalBank
    +'  score '+fin.score
    +'  note '+fin.grade+'/3');
  console.log('       pompages '+log.pumps+'  lachers '+log.releases+'  prises '+log.grabs
    +'  porteurs '+log.ports+'  porte ouverte au pas '+log.gateStep);
  return log;
}

console.log('TRAPEZE CITY — pilote automatique, '+RUNS+' parties');
const all=[];
for(let i=0;i<RUNS;i++)all.push(playOne(i));

/* ── Phase 2 : le desordre ──────────────────────────────────────────
   Les defauts de V1 et V2 ne sont pas sortis d'une partie propre : ils
   sont sortis d'entrees dans le desordre. On tire donc des actions au
   hasard — lacher a l'instant exact d'une prise, chute pendant un carton
   d'acte, retour au menu en plein vol — et on exige deux choses : aucune
   exception, et une machine a etats qui repart. */
function chaos(){
  const sb=makeSandbox(html);vm.createContext(sb);
  new vm.Script(code,{filename:file}).runInContext(sb);
  const V=sb.window.__v3,P=V.P;
  const rnd=rng(0xC0FFEE);
  const seen={};
  let acts=0;
  V.action();
  for(let f=0;f<60000;f++){
    const r=rnd();
    if(r<0.34){V.action();acts++;}
    else if(r<0.50){V.release();acts++;}
    else if(r<0.66){V.figure();acts++;}
    else if(r<0.68){V.figureEnd();acts++;}
    else if(r<0.685){V.pause();acts++;}
    else if(r<0.690){V.menu();acts++;}
    else if(r<0.700){V.start();acts++;}
    V.sim(1);
    const st=V.state;
    seen[st.gs]=1;seen['p:'+st.pstate]=1;
    if(!isFinite(P.x)||!isFinite(P.y)||!isFinite(P.z)||!isFinite(P.ang))
      throw new Error('etat non fini au pas '+f+' : '+JSON.stringify({x:P.x,y:P.y,ang:P.ang}));
  }
  // La machine doit repartir proprement apres tout ce desordre.
  V.menu();V.action();
  const ok=V.state.gs==='playing';
  return {acts:acts,seen:Object.keys(seen).sort().join(' '),restart:ok};
}
console.log('');
console.log('  desordre : 60 000 pas, actions tirees au hasard');
let ch=null,chErr=null;
try{ch=chaos();}catch(e){chErr=e;}
if(ch)console.log('    '+ch.acts+' actions, etats traverses : '+ch.seen
  +'   redemarrage '+(ch.restart?'OK':'ECHEC'));
else console.log('    EXCEPTION : '+chErr.message);

/* ── Phase 3 : le filet et la reprise au dernier toit ── */
function netTest(){
  const sb=makeSandbox(html);vm.createContext(sb);
  new vm.Script(code,{filename:file}).runInContext(sb);
  const V=sb.window.__v3,P=V.P;
  V.start();V.goRig(3);
  V.setHype(70);
  // Assez d'amplitude pour que des figures aient le temps de tomber dans
  // la cagnotte, mais un lacher VERS L ARRIERE : la barre suivante est
  // hors d'atteinte, la chute est garantie.
  V.setAmp(1.9);
  for(let i=0;i<900&&!(P.angV<0&&P.ang<-0.9);i++)V.sim(1);
  V.release();
  let sawNet=false,bank0=0;
  for(let i=0;i<200&&P.state==='fly';i++){V.figure();V.sim(1);}
  bank0=V.state.bank;
  V.figureEnd();
  for(let i=0;i<1400;i++){V.sim(1);if(P.state==='net')sawNet=true;
    if(sawNet&&P.state==='hang')break;}
  const st=V.state;
  return {sawNet:sawNet,rig:P.rig,state:P.state,falls:st.falls,
          penalty:st.penalty,bank:st.bank,bankBefore:bank0,hype:st.hype};
}
const nt=netTest();
console.log('  filet    : chute '+(nt.sawNet?'rattrapee':'NON RATTRAPEE')
  +', reprise sur le rig '+(nt.rig+1)+' en etat '+nt.state
  +', chutes '+nt.falls+', penalite '+nt.penalty+' s'
  +', cagnotte '+nt.bankBefore+' -> '+nt.bank);

let fail=0;
function want(cond,msg){if(cond)console.log('  OK    '+msg);else{console.log('  ECHEC '+msg);fail++;}}
console.log('');
const done=all.filter(a=>a.done).length;
const N=all[0].fin?7:7;
want(done===all.length,'les '+all.length+' parties bouclent la traversee des 7 rigs ('+done+')');
want(all.every(a=>a.gateStep>0),'la porte des deux etoiles de hype s ouvre');
want(all.every(a=>a.releases>=6),'six lachers au moins par partie');
want(all.every(a=>a.grabs>=6),'six prises au moins par partie');
want(all.every(a=>a.fin.bestChain>=1),'des figures tombent dans la cagnotte');
want(all.every(a=>a.fin.totalBank>0),'la cagnotte est encaissee a la reception');
want(all.every(a=>a.fin.maxStars>=2),'la hype atteint au moins deux etoiles');
want(all.some(a=>a.fin.maxStars>=3),'le drone de television decolle au moins une fois');
want(all.some(a=>a.ports>0),'le porteur recoit au moins une fois');
want(all.every(a=>a.fin.score>0),'le score progresse');
want(!chErr,'60 000 pas d actions au hasard sans une seule exception');
want(ch&&ch.restart,'la machine a etats repart apres le desordre');
want(nt.sawNet,'le filet rattrape la chute');
want(nt.state==='hang'&&nt.rig===3,'la reprise se fait au dernier toit atteint');
want(nt.bankBefore>0&&nt.bank===0,'la chute coute la cagnotte en cours');
want(nt.penalty>0,'la chute coute du temps au chrono');
process.exit(fail?1:0);
