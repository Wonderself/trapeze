// Fait tourner Trapeze City sur un temps simule long (equivalent ~30 min
// de jeu a 120 pas/s, le pas fixe du jeu) en avancant l'horloge de la
// boucle directement via window.__v3.sim(), plutot que d'attendre en
// temps reel. Verifie que le tas JS ne derive pas de facon monotone
// (indice de fuite) et que la boucle reste vivante.
//
// Modele : tools/s9_memory.js (V2). La transposition n'est pas un simple
// changement de nom de fichier : la machine a etats differe entierement
// (hang/fly/held/net contre run/air/swing de V2), et une traversee de
// Trapeze City dure 50 a 90 s de temps simule au lieu d'occuper tout un
// niveau — sur 30 minutes, le bot redemarre donc la traversee des
// dizaines de fois. C'est un test PLUS dur que l'original : il exerce
// aussi le nettoyage d'etat au redemarrage (respawn, remise a zero des
// listes libres), pas seulement une session continue.
const { chromium } = require('playwright-core');
const path = require('path');
(async()=>{
  const b=await chromium.launch({executablePath:process.env.CHROME_EXE||'/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
    args:['--no-sandbox','--disable-dev-shm-usage','--use-gl=swiftshader','--enable-unsafe-swiftshader',
          '--js-flags=--expose-gc']});
  const ctx=await b.newContext({viewport:{width:1280,height:720}});
  const p=await ctx.newPage();
  const errors=[];
  p.on('pageerror',e=>errors.push(e.message));
  await p.goto('file://'+path.join(__dirname,'..','trapeze-city-v3.html'));
  await p.waitForFunction('!!window.__v3');
  await p.evaluate(()=>{ window.__v3.start(); window.__v3.goRig(0); });

  // Politique de pilotage : la meme qu'un profil "applique" de
  // play_v3.js — un pompage par demi-arc, arme au passage par le point
  // bas, jamais pendant la montee avant ; lacher des que la trajectoire
  // predite passe pres de la barre visee ; figures tant qu'on est loin,
  // sortie propre juste avant la prise ; et un redemarrage automatique a
  // la fin de la traversee ou apres une chute prolongee, pour que la
  // boucle ne reste jamais bloquee sur un ecran de resultats pendant les
  // minutes simulees restantes.
  const BOT = () => {
    const V=window.__v3, C=V.CFG, P=V.P;
    let armed=true, last=1, stuckAt=0;
    // Distance a la barre visee : sa position REELLE, au bout du cable
    // qui oscille (ancrage + corde * sin/cos(angle)) — pas l'ancrage lui
    // meme, qui est a une longueur de cable au-dessus d'ou pend la barre.
    // Comparer a l'ancrage a ete la premiere version de ce bot, et le
    // faisait tourner en rond sur le rig 0 sans jamais rattraper la
    // suivante : la "distance" mesuree n'avait aucun rapport avec la
    // vraie fenetre de saisie.
    const barDist=(n)=>{
      const rig=V.RIGS[n]; if(!rig)return 1e9;
      const s=Math.sin(rig.ang), c=Math.cos(rig.ang);
      return Math.hypot(P.x-(rig.ax+rig.dx*s*rig.rope),P.y-(rig.ay-c*rig.rope),P.z-(rig.az+rig.dz*s*rig.rope));
    };
    const miss=(n)=>{
      const rig=V.RIGS[n], tgt=V.RIGS[n+1];
      if(!tgt)return 1e9;
      const c=Math.cos(P.ang), s=Math.sin(P.ang), v=P.angV*rig.rope;
      if(v<=0)return 1e9;
      let x=P.x,y=P.y,z=P.z, vx=v*rig.dx*c, vy=v*s, vz=v*rig.dz*c;
      const tx=tgt.ax, ty=tgt.ay-tgt.rope, tz=tgt.az; let best=1e9;
      for(let i=0;i<1400;i++){
        vy-=C.G_FLIGHT/120; vx*=C.AIR_DRAG; vy*=C.AIR_DRAG; vz*=C.AIR_DRAG;
        x+=vx/120; y+=vy/120; z+=vz/120;
        const d=Math.hypot(x-tx,y-ty,z-tz); if(d<best)best=d;
        if(y<ty-40)break;
      }
      return best;
    };
    return function tick(){
      const st=V.state;
      if(st.gs==='levelcomplete'||st.gs==='gameover'){V.start();V.goRig(0);stuckAt=0;return;}
      if(st.gs==='finale'){/* laisse le salut se terminer tout seul */}
      if(P.state==='hang'){
        const sg=P.ang>=0?1:-1; if(sg!==last){last=sg;armed=true;}
        if(P.amp<C.PUMP_MIN)armed=true;
        const gateBlocked=(!st.gate&&P.rig===0);
        const m=gateBlocked?1e9:miss(P.rig);
        if(m<C.GRAB_R*0.75)V.release();
        else if(armed&&!(P.angV>0&&P.ang>0.25)&&(P.amp<C.PUMP_MIN||Math.abs(P.ang)>=0.60*P.amp)){
          V.action();armed=false;
        }
      } else if(P.state==='fly'){
        const d=barDist(P.dst);
        if(d>13)V.figure();else V.figureEnd();
        if(d<C.GRAB_R*1.6)V.action();
      } else {
        V.figureEnd();
      }
      // Garde-fou : si rien ne progresse pendant trop longtemps (bot
      // coince par un cas limite), on force un redemarrage plutot que de
      // gaspiller le budget de la session sur une boucle immobile.
      if(++stuckAt>14400){V.start();V.goRig(0);stuckAt=0;}
    };
  };

  const samples=[];
  const MINUTES=30, STEPS_PER_MIN=120*60; // 120 pas/s (le pas fixe du jeu) * 60 s
  for(let m=0;m<MINUTES;m+=3){
    await p.evaluate(({n, botSrc})=>{
      if(!window.__botTick){
        window.__botTick=(new Function('return ('+botSrc+')()'))();
      }
      for(let i=0;i<n;i++){ window.__botTick(); window.__v3.sim(1); }
    }, {n:STEPS_PER_MIN*3, botSrc: BOT.toString()});
    await p.evaluate(()=>new Promise(r=>{ if(window.gc)window.gc(); r(); }));
    const mem=await p.evaluate(()=>performance.memory?performance.memory.usedJSHeapSize:-1);
    const st=await p.evaluate(()=>window.__v3.state);
    samples.push({m:m+3,mem,parts:st.parts,faces:st.faces});
    console.log('  minute simulee '+(m+3)+' : tas='+(mem>0?(mem/1048576).toFixed(1)+' Mo':'indisponible')+
      ', particules vivantes='+st.parts+' (pic '+st.partsMax+'/'+st.partsCap+')'+
      ', gs='+st.gs+', rig='+(st.rig+1)+'/7');
  }
  const alive=await p.evaluate(()=>window.__v3.state.gs!==undefined);
  console.log('boucle vivante apres 30 min simulees : '+alive);

  const withMem=samples.filter(s=>s.mem>0);
  let growthMo=0;
  if(withMem.length>=3){
    const first=withMem[0].mem, last=withMem[withMem.length-1].mem;
    growthMo=(last-first)/1048576;
    console.log('croissance du tas sur la session : '+growthMo.toFixed(1)+' Mo ('+
      (first/1048576|0)+' -> '+(last/1048576|0)+' Mo)');
  } else {
    console.log('performance.memory indisponible dans cet environnement : pas de mesure de tas possible');
  }
  const partsGrowth=samples[samples.length-1].parts - samples[0].parts;
  console.log('derive du compteur de particules vivantes : '+partsGrowth+' (doit rester borne, plafond 340)');

  await ctx.close();await b.close();
  if(errors.length){console.log('ERREURS:\n'+errors.join('\n'));process.exit(1);}
  if(!alive){console.log('ECHEC : boucle morte');process.exit(1);}
  if(withMem.length>=3&&growthMo>40){console.log('ECHEC : croissance du tas suspecte ('+growthMo.toFixed(1)+' Mo)');process.exit(1);}
})();
