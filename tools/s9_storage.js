const { chromium } = require('playwright-core');
(async()=>{
  const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
    args:['--no-sandbox','--disable-dev-shm-usage','--use-gl=swiftshader','--enable-unsafe-swiftshader']});
  const errors=[];
  const FILES=[
    {file:'trapeze-stars-v1.html',start:()=>window.startGame(),
     force:()=>{score=999999;if(typeof addScore==='function')addScore(1,10,10);}},
    {file:'trapeze-stars-v2.html',start:()=>window.startRun(),
     force:()=>{score=999999;if(typeof addScore==='function')addScore(1,10,10);}},
    // Trapeze City : meme chemin d'ecriture (persist() sur un nouveau
    // record), mais startGame() et addScore() ont une signature differente.
    // window.__v3 sert au demarrage ; score/SV/addScore restent des
    // liaisons de script accessibles directement, comme sur V1 et V2.
    {file:'trapeze-city-v3.html',start:()=>window.__v3.start(),
     force:()=>{SV.best=-1;if(typeof addScore==='function')addScore(999999);}},
  ];
  for(const {file,start,force} of FILES){
    const ctx=await b.newContext({viewport:{width:1000,height:620}});
    const p=await ctx.newPage();
    p.on('pageerror',e=>errors.push('['+file+'] '+e.message));
    await p.addInitScript(()=>{
      const boom=()=>{throw new DOMException('QuotaExceededError: mode prive simule','QuotaExceededError');};
      Object.defineProperty(window,'localStorage',{get(){return {getItem:boom,setItem:boom,removeItem:boom,clear:boom};}});
    });
    await p.goto('file:///home/user/trapeze/'+file);
    await p.waitForTimeout(700);
    await p.evaluate(start);
    await p.waitForTimeout(300);
    // Force un nouveau record : declenche le chemin d'ecriture qui plantait.
    await p.evaluate(force);
    const before=await p.evaluate(()=>typeof frameN!=='undefined'?frameN:frame);
    await p.waitForTimeout(500);
    const after=await p.evaluate(()=>typeof frameN!=='undefined'?frameN:frame);
    const alive=after>before+10;
    console.log(file+' : record force -> frames '+before+'->'+after+' ('+(alive?'boucle vivante':'BOUCLE MORTE')+')');
    if(!alive)process.exitCode=1;
    await ctx.close();
  }
  await b.close();
  if(errors.length){console.log('ERREURS:\n'+errors.join('\n'));process.exit(1);}
  console.log(process.exitCode?'ECHEC':'confirme : la boucle survit a un nouveau record en stockage hostile');
})();
