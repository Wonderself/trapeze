// Fait tourner V2 sur un temps simule long (equivalent ~30 min de jeu a
// 60 fps) en avancant l'horloge de la boucle a pas fixe directement,
// plutot que d'attendre en temps reel. Verifie que le tas JS ne derive
// pas de facon monotone (indice de fuite) et que la boucle reste vivante.
const { chromium } = require('playwright-core');
(async()=>{
  const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
    args:['--no-sandbox','--disable-dev-shm-usage','--use-gl=swiftshader','--enable-unsafe-swiftshader',
          '--js-flags=--expose-gc']});
  const ctx=await b.newContext({viewport:{width:1000,height:620}});
  const p=await ctx.newPage();
  const errors=[];
  p.on('pageerror',e=>errors.push(e.message));
  await p.goto('file:///home/user/trapeze/trapeze-stars-v2.html');
  await p.waitForTimeout(700);
  await p.evaluate(()=>{ startRun(); });

  const samples=[];
  const MINUTES=30, STEPS_PER_MIN=60*60; // 60fps * 60s
  for(let m=0;m<MINUTES;m+=3){
    await p.evaluate((n)=>{
      // Simule le joueur (saute/saisit/pompe) pendant n pas, sans passer
      // par de vrais evenements DOM : on pousse directement l'etat d'entree.
      for(let i=0;i<n;i++){
        if(P.state==='air'){const f=nearestBar();if(f&&f.dist<CFG.GRAB_R*1.2)P.jumpBuf=CFG.JUMP_BUF;}
        else if(P.state==='run')P.jumpBuf=CFG.JUMP_BUF;
        else if(P.state==='swing'){
          const amp=Math.abs(P.angV)*CFG.ROPE;
          if(Math.abs(P.ang)<CFG.PUMP_WIN*0.85&&amp<16)P.trickBuf=CFG.GRAB_BUF;
          if(amp>=14&&P.ang>0.48&&P.ang<0.92&&P.angV>0)P.jumpBuf=CFG.JUMP_BUF;
        }
        step();
        if(gs!=='play'){ if(gs==='levelend')nextLevel(); else if(gs==='gameover'||gs==='finale')startRun(); }
      }
    }, STEPS_PER_MIN*3);
    if(global.gc){}
    await p.evaluate(()=>new Promise(r=>{ if(window.gc)window.gc(); r(); }));
    const mem=await p.evaluate(()=>performance.memory?performance.memory.usedJSHeapSize:-1);
    const pc=await p.evaluate(()=>typeof pCount!=='undefined'?pCount:-1);
    samples.push({m:m+3,mem,pc});
    console.log('  minute simulee '+(m+3)+' : tas='+(mem>0?(mem/1048576).toFixed(1)+' Mo':'indisponible')+', particules vivantes='+pc);
  }
  const alive=await p.evaluate(()=>frame>0);
  console.log('boucle vivante apres 30 min simulees : '+alive);

  const withMem=samples.filter(s=>s.mem>0);
  if(withMem.length>=3){
    const first=withMem[0].mem, last=withMem[withMem.length-1].mem;
    const growth=(last-first)/1048576;
    console.log('croissance du tas sur la session : '+growth.toFixed(1)+' Mo ('+first/1048576|0+' -> '+(last/1048576|0)+' Mo)');
  }
  const pcGrowth=samples[samples.length-1].pc - samples[0].pc;
  console.log('derive du compteur de particules : '+pcGrowth+' (doit rester borne, plafond QUAL.parts)');

  await ctx.close();await b.close();
  if(errors.length){console.log('ERREURS:\n'+errors.join('\n'));process.exit(1);}
  if(!alive){console.log('ECHEC : boucle morte');process.exit(1);}
})();
