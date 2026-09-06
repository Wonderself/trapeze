// Captures de controle pour Trapeze City.
//
// Le rendu ne se verifie pas en lisant du code : il se verifie en
// regardant. Ce script pilote un vrai Chromium, place le jeu dans des
// situations choisies et ecrit des PNG, qu'il faut ensuite OUVRIR.
//
//   node tools/shot_v3.js [dossier]
//
// La capture la plus importante est "mur" : la camera y est collee contre
// une facade, ce qui est exactement le cas ou un pipeline 3D sans
// decoupage au plan proche etale un polygone en travers de tout l'ecran.
const path=require('path'), fs=require('fs');
const {chromium}=require('playwright-core');
const ROOT=path.resolve(__dirname,'..');
const OUT=path.resolve(process.argv[2]||path.join(ROOT,'shots'));
const EXE=process.env.CHROME_EXE||'/opt/pw-browsers/chromium-1194/chrome-linux/chrome';

const SHOTS=[
  {name:'01-titre', w:1280,h:720, run:v=>{v.sim(900);}},
  {name:'01b-cinematique', w:1280,h:720, run:v=>{v.start();v.sim(150);}},
  {name:'01c-cinematique-fin', w:1280,h:720, run:v=>{v.start();v.sim(400);}},
  {name:'02-repos', w:1280,h:720, run:v=>{v.start();v.goRig(0);v.sim(60);}},
  {name:'03-balance', w:1280,h:720, run:v=>{v.start();v.goRig(0);v.setAmp(1.6);v.sim(94);}},
  {name:'04-grand-soleil', w:1280,h:720, run:v=>{v.start();v.goRig(1);v.setAmp(2.6);v.sim(120);}},
  {name:'05-vol', w:1280,h:720, run:v=>{
      v.start();v.goRig(0);v.setAmp(2.0);
      // lache pres du sommet de la remontee avant : c'est la que le vol part
      for(let i=0;i<900;i++){v.sim(1);const s=v.state;if(s.angV>0&&s.ang>0.95){v.release();break;}}
      v.sim(46);}},
  {name:'06-vide', w:1280,h:720, run:v=>{
      v.start();v.goRig(1);v.sim(4);
      const p=v.state;v.freeze(p.x+9,p.y+3,p.z-6,Math.PI*0.75,-0.85);}},
  {name:'07-mur', w:1280,h:720, run:v=>{
      // Camera collee contre une facade : test du decoupage au plan proche.
      v.start();v.goRig(0);v.sim(4);
      const p=v.state;const t=v.nearestTower(p.x,p.z+60);
      v.freeze(t.x, t.h*0.6, t.z-t.d-0.25, 0, 0);}},
  {name:'08-mur-rasant', w:1280,h:720, run:v=>{
      // Meme mur, vu en rasant : le polygone traverse le plan de la camera.
      v.start();v.goRig(0);v.sim(4);
      const p=v.state;const t=v.nearestTower(p.x,p.z+60);
      v.freeze(t.x-t.w-0.15, t.h*0.5, t.z, 0.05, 0.15);}},
  {name:'09-skyline', w:1280,h:720, run:v=>{
      v.start();v.goRig(6);v.sim(4);
      const p=v.state;v.freeze(p.x-70,p.y+34,p.z-95,Math.atan2(70,95),-0.12);}},
  {name:'10-portrait', w:414,h:896, run:v=>{v.start();v.goRig(0);v.setAmp(1.9);v.sim(88);}},
  {name:'11-qualite-basse', w:1280,h:720, run:v=>{v.quality('low');v.start();v.goRig(1);v.setAmp(2.2);v.sim(100);}},
  {name:'12-qualite-moyenne',w:1280,h:720, run:v=>{v.quality('med');v.start();v.goRig(1);v.setAmp(2.2);v.sim(100);}},

  /* ── Session 2 ─────────────────────────────────────────────────────
     Les trois situations que la verification exige de REGARDER : une
     prise ratee, un passage au porteur, le drone en action. Chacune est
     mise en place par la physique du jeu, jamais par un etat pose a la
     main : sinon la capture ne prouve rien. */
  {name:'14-prise-ratee', w:1280,h:720, run:v=>{
      v.start();v.goRig(3);v.setHype(70);v.setAmp(1.9);
      for(let i=0;i<900;i++){v.sim(1);const s=v.state;if(s.angV<0&&s.ang<-0.9)break;}
      v.release();
      for(let i=0;i<260;i++){v.figure();v.sim(1);}
      v.figureEnd();
      for(let i=0;i<900;i++){v.sim(1);if(v.state.pstate==='net')break;}
      v.sim(14);}},
  {name:'15-porteur', w:1280,h:720, run:v=>{
      v.start();v.goRig(4);v.setHype(60);
      const C=v.CFG,R=v.RIGS,P=v.P,DT=1/120;
      const miss=n=>{const rig=R[n],tgt=R[n+1];
        const c=Math.cos(P.ang),s2=Math.sin(P.ang),vv=P.angV*rig.rope;
        if(vv<=0)return 1e9;
        let x=P.x,y=P.y,z=P.z,vx=vv*rig.dx*c,vy=vv*s2,vz=vv*rig.dz*c;
        const tx=tgt.ax,ty=tgt.ay-tgt.rope,tz=tgt.az;let b=1e9;
        for(let i=0;i<1400;i++){vy-=C.G_FLIGHT*DT;vx*=C.AIR_DRAG;vy*=C.AIR_DRAG;vz*=C.AIR_DRAG;
          x+=vx*DT;y+=vy*DT;z+=vz*DT;const d=Math.hypot(x-tx,y-ty,z-tz);
          if(d<b)b=d;if(y<ty-40)break;}
        return b;};
      for(const pat of [0.55,0.35,0.75,0.95,0.45]){
        v.start();v.goRig(4);v.setHype(60);
        let armed=true,last=1;
        for(let i=0;i<9000;i++){
          if(P.state!=='hang')break;
          const sg=P.ang>=0?1:-1;if(sg!==last){last=sg;armed=true;}
          if(P.amp<C.PUMP_MIN)armed=true;
          if(miss(4)<C.GRAB_R*pat){v.release();break;}
          if(armed&&!(P.angV>0&&P.ang>0.25)&&(P.amp<C.PUMP_MIN||Math.abs(P.ang)>0.60*P.amp)){
            v.action();armed=false;}
          v.sim(1);}
        let held=false;
        for(let i=0;i<600;i++){v.sim(1);if(v.state.pstate==='held'){held=true;break;}}
        if(held){v.sim(2);return;}
      }}},
  {name:'16-drone', w:1280,h:720, run:v=>{
      v.start();v.goRig(2);v.setHype(100);v.setAmp(2.5);v.sim(560);}},
  {name:'17-carton-acte', w:1280,h:720, run:v=>{
      v.start();v.goRig(4);v.setHype(100);v.setAmp(2.2);v.sim(30);}},
  {name:'18-resultats', w:1280,h:720, run:v=>{
      v.start();v.goRig(6);v.setHype(88);v.sim(60);v.finale();
      for(let i=0;i<400;i++)v.sim(1);}},
  {name:'19-tour-finale', w:1280,h:720, run:v=>{
      v.start();v.goRig(5);v.setHype(70);v.sim(6);
      const p=v.state;v.freeze(p.x-24,p.y+26,p.z-30,Math.atan2(24,30),-0.10);}},

  /* ── Session 4 : menus, HUD, portrait/paysage ────────────────────── */
  {name:'20-menu-principal', w:1280,h:720, run:v=>{v.sim(4);}},
  {name:'21-reglages', w:1280,h:720, run:v=>{v.openSettings();v.settingsSel=4;}},
  {name:'22-pause', w:1280,h:720, run:v=>{v.start();v.goRig(2);v.setAmp(2.0);v.sim(60);v.pause();}},
  {name:'23-hud-vol', w:1280,h:720, run:v=>{
      v.start();v.goRig(2);v.setHype(72);v.setAmp(2.2);v.sim(30);
      for(let i=0;i<900;i++){v.sim(1);const s=v.state;if(s.angV>0&&s.ang>0.95){v.release();break;}}
      v.sim(20);}},
  {name:'24-portrait-hud', w:414,h:896, run:v=>{v.start();v.goRig(2);v.setHype(64);v.setAmp(2.0);v.sim(80);}},
  {name:'25-portrait-menu', w:414,h:896, run:v=>{v.sim(4);}},
  {name:'26-portrait-reglages', w:414,h:896, run:v=>{v.openSettings();}},
  {name:'27-radar-detail', w:1280,h:720, run:v=>{
      v.start();v.goRig(4);v.setHype(80);v.setAmp(2.3);v.sim(50);}},
];

(async()=>{
  fs.mkdirSync(OUT,{recursive:true});
  const browser=await chromium.launch({executablePath:EXE,args:['--no-sandbox','--disable-dev-shm-usage']});
  const url='file://'+path.join(ROOT,'trapeze-city-v3.html');
  for(const s of SHOTS){
    const ctx=await browser.newContext({viewport:{width:s.w,height:s.h},deviceScaleFactor:1});
    const page=await ctx.newPage();
    const errs=[];
    page.on('pageerror',e=>errs.push(String(e)));
    page.on('console',m=>{if(m.type()==='error')errs.push(m.text());});
    await page.goto(url);
    await page.waitForFunction('!!window.__v3');
    await page.evaluate('window.__v3.debug(true)');
    if(s.run)await page.evaluate('('+s.run.toString()+')(window.__v3)');
    await page.waitForTimeout(260);
    const st=await page.evaluate('window.__v3.state');
    await page.screenshot({path:path.join(OUT,s.name+'.png')});
    console.log(s.name.padEnd(20),
      'faces='+String(st.faces).padStart(4),
      'perdues='+st.dropped,
      'fen='+st.winDrawn,
      'qual='+st.qual,
      'etat='+st.pstate,
      'amp='+st.amp.toFixed(2),
      errs.length?('ERREURS: '+errs.join(' | ')):'');
    await ctx.close();
  }

  // Enchainement complet, AU CLAVIER.
  //
  // C'est la seule verification qui traverse toute la chaine : touche ->
  // gestionnaire -> pompage -> lacher -> vol -> saisie. Les evenements sont
  // dispatches depuis une boucle d'animation dans la page, pour etre a la
  // frame pres ; ils passent par le meme gestionnaire keydown qu'un joueur.
  //
  // L'angle de lacher n'est PAS code en dur : il est resolu en rejouant la
  // physique du jeu a l'amplitude reellement atteinte. Un angle fixe ne vaut
  // que pour une amplitude, et faisait echouer ce test.
  {
    const ctx=await browser.newContext({viewport:{width:1280,height:720},deviceScaleFactor:1});
    const page=await ctx.newPage();
    const errs=[];
    page.on('pageerror',e=>errs.push(String(e)));
    await page.goto(url);
    await page.waitForFunction('!!window.__v3');
    await page.evaluate(`
      window.__k=k=>window.dispatchEvent(new KeyboardEvent('keydown',{key:k,bubbles:true}));
      // Predit, DEPUIS L ETAT COURANT, ou passerait un lacher immediat.
      // Resoudre un angle a l'avance ne marche pas : l'amortissement fait
      // deriver l'amplitude entre le calcul et le lacher. On rejoue donc la
      // balistique du jeu a chaque image, avec les valeurs du moment.
      window.__flyMiss=n=>{
        const C=window.__v3.CFG,R=window.__v3.RIGS,P=window.__v3.P,DT=1/120;
        const rig=R[n],tgt=R[n+1];
        const c=Math.cos(P.ang),s2=Math.sin(P.ang),v=P.angV*rig.rope;
        if(v<=0)return 1e9;
        let x=P.x,y=P.y,z=P.z;
        let vx=v*rig.dx*c,vy=v*s2,vz=v*rig.dz*c;
        const tx=tgt.ax,ty=tgt.ay-tgt.rope,tz=tgt.az;let best=1e9;
        for(let i=0;i<1200;i++){
          vy-=C.G_FLIGHT*DT;vx*=C.AIR_DRAG;vy*=C.AIR_DRAG;vz*=C.AIR_DRAG;
          x+=vx*DT;y+=vy*DT;z+=vz*DT;
          const d=Math.hypot(x-tx,y-ty,z-tz);if(d<best)best=d;
          if(y<ty-30)break;}
        return best;
      };
      // Pompage : UN appui par demi-arc, arme au passage par le point bas,
      // et jamais pendant la montee avant. Marteler la touche installe un
      // cycle qui n'atteint jamais l'amplitude maximale — et le dernier vol
      // en demande 2,52 rad sur 2,86 possibles.
      window.__armed=true;window.__lastSign=1;
      window.__pumpStep=s=>{
        const sg=s.ang>=0?1:-1;
        if(sg!==window.__lastSign){window.__lastSign=sg;window.__armed=true;}
        if(s.amp<window.__v3.CFG.PUMP_MIN)window.__armed=true;
        const onRise=(s.angV>0&&s.ang>0.25);
        if(window.__armed&&!onRise&&(s.amp<window.__v3.CFG.PUMP_MIN||Math.abs(s.ang)>0.60*s.amp)){
          window.__k(' ');window.__armed=false;
        }
      };
      // Pompe au bon moment jusqu'a l'amplitude demandee.
      window.__pumpTo=amp=>new Promise(res=>{let n=0;
        (function tick(){const s=window.__v3.state;
          if(s.amp>=amp||n++>2400)return res(s.amp);
          window.__pumpStep(s);
          requestAnimationFrame(tick);})();});
      // Lache exactement a l'angle voulu, en montant vers l'avant.
      window.__releaseAt=rel=>new Promise(res=>{let n=0;
        (function tick(){const s=window.__v3.state;
          if(s.angV>0&&s.ang>=rel){window.__k('s');return res(true);}
          if(n++>2400)return res(false);
          requestAnimationFrame(tick);})();});
      // Martele la saisie pendant tout le vol. Une suspension au porteur
      // n'est PAS une fin de vol : il relance, et le vol reprend. S'arreter
      // a l'etat 'held' faisait passer une reception au porteur — le
      // meilleur cas du jeu — pour un echec.
      window.__catch=()=>new Promise(res=>{let n=0;
        (function tick(){const s=window.__v3.state;
          if(s.pstate!=='fly'&&s.pstate!=='held')return res(s);
          if(s.pstate==='fly')window.__k(' ');
          if(n++>2000)return res(s);
          requestAnimationFrame(tick);})();});
    `);
    await page.evaluate("window.__k(' ')");        // demarrer
    // La traversee ne s'ouvre qu'a deux etoiles de hype. On les gagne en
    // pompant, comme le joueur.
    await page.evaluate(`new Promise(res=>{let n=0;
      (function tick(){const s=window.__v3.state;
        if(s.gate||n++>9000)return res(s.stars);
        window.__pumpStep(s);
        requestAnimationFrame(tick);})();})`);
    let ok=true;
    for(let vol=0;vol<6&&ok;vol++){
      // Pompe et lache des que la trajectoire predite passe assez pres.
      const r=await page.evaluate(`new Promise(res=>{let n=0,best=1e9;
        (function tick(){
          const s=window.__v3.state;
          if(s.pstate!=='hang'){return res({released:true,best:best,amp:s.amp});}
          const m=window.__flyMiss(${vol});
          if(m<best)best=m;
          if(m<window.__v3.CFG.GRAB_R*0.75){window.__k('s');return res({released:true,best:m,amp:s.amp});}
          window.__pumpStep(s);
          if(n++>3000)return res({released:false,best:best,amp:s.amp});
          requestAnimationFrame(tick);})();})`);
      if(!r.released){ok=false;console.log('  vol '+(vol+1)+' : jamais de fenetre de lacher (approche mini '+r.best.toFixed(1)+' m)');break;}
      const st=await page.evaluate('window.__catch()');
      if(st.rig!==vol+1){ok=false;console.log('  vol '+(vol+1)+' : ECHEC, rig='+(st.rig+1)+' etat='+st.pstate+' approche predite '+r.best.toFixed(2)+' m');}
      else console.log('  vol '+(vol+1)+' : amp au lacher '+r.amp.toFixed(2)
        +'  approche predite '+r.best.toFixed(2)+' m  -> rig '+(st.rig+1)+'/7, score '+st.score);
    }
    const fin=await page.evaluate('window.__v3.state');
    console.log('enchainement '+(ok&&fin.rig===6?'REUSSI':'ECHOUE')+'  gs='+fin.gs+'  rig='+(fin.rig+1)+'/7'
      +(errs.length?('  ERREURS: '+errs.join(' | ')):''));
    await page.screenshot({path:path.join(OUT,'13-enchainement.png')});
    await ctx.close();
    if(!ok||fin.rig!==6)process.exitCode=1;
  }

  // Mesure du temps d'image, sur une scene chargee, aux trois qualites.
  //
  // AVEC LE DRONE ET LES PARTICULES : mesurer une scene calme ne dit rien
  // du pire cas. On monte donc la hype au maximum (le drone decolle), on
  // enchaine des figures en vol (la cagnotte crache des particules), et
  // c'est CE cout la qu'on releve.
  for(const q of ['low','med','high']){
    const ctx=await browser.newContext({viewport:{width:1280,height:720},deviceScaleFactor:1});
    const page=await ctx.newPage();
    await page.goto(url);
    await page.waitForFunction('!!window.__v3');
    await page.evaluate(`window.__v3.quality('${q}');window.__v3.start();window.__v3.goRig(2);
      window.__v3.setHype(100);window.__v3.setAmp(2.6);`);
    // Le drone met une seconde a rejoindre l'acrobate ; on lui laisse le temps.
    await page.waitForTimeout(1400);
    // Puis on tourne en boucle : lacher, figures, chute, reprise. Chaque
    // cycle repeuple les particules et les textes flottants.
    await page.evaluate(`window.__load=()=>{let n=0;
      (function tick(){const v=window.__v3,s=v.state;
        // Lacher vers l'arriere : chute garantie, donc gerbe de filet,
        // texte flottant et reprise, en boucle.
        if(s.pstate==='hang'&&s.amp>1.4&&s.angV<0&&s.ang<-0.9)v.release();
        else if(s.pstate==='hang')v.action();
        if(s.pstate==='fly')v.figure();
        v.setHype(100);
        if(n++<6000)requestAnimationFrame(tick);})();};window.__load();`);
    await page.waitForTimeout(600);
    // On laisse tourner, puis on lit le cout REEL de render(), que le
    // temps d image du navigateur masque totalement (synchro verticale).
    await page.waitForTimeout(2600);
    const r=await page.evaluate('window.__v3.state');
    console.log('perf '+q.padEnd(5)
      +' render median '+r.render.p50.toFixed(2)+' ms   p95 '+r.render.p95.toFixed(2)+' ms'
      +'   faces '+r.faces+'   fenetres '+r.winDrawn+' sur '+r.winFaces+' facades'
      +'   drone '+r.drone.toFixed(2)+'   particules '+r.parts+' (pic '+r.partsMax+'/'+r.partsCap+')   ips '+r.fps.toFixed(0));
    await ctx.close();
  }
  await browser.close();
  console.log('\nCaptures dans '+OUT+' — il faut les OUVRIR, pas seulement les generer.');
})().catch(e=>{console.error(e);process.exit(1);});
