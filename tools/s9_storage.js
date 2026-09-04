const { chromium } = require('playwright-core');
(async()=>{
  const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
    args:['--no-sandbox','--disable-dev-shm-usage','--use-gl=swiftshader','--enable-unsafe-swiftshader']});
  const errors=[];
  for(const file of ['trapeze-stars-v1.html','trapeze-stars-v2.html']){
    const ctx=await b.newContext({viewport:{width:1000,height:620}});
    const p=await ctx.newPage();
    p.on('pageerror',e=>errors.push('['+file+'] '+e.message));
    await p.addInitScript(()=>{
      const boom=()=>{throw new DOMException('QuotaExceededError: mode prive simule','QuotaExceededError');};
      Object.defineProperty(window,'localStorage',{get(){return {getItem:boom,setItem:boom,removeItem:boom,clear:boom};}});
    });
    await p.goto('file:///home/user/trapeze/'+file);
    await p.waitForTimeout(700);
    const fn=file.includes('v1')?'startGame':'startRun';
    await p.evaluate((fn)=>{ window[fn](); },fn);
    await p.waitForTimeout(300);
    // Force un nouveau record : declenche le chemin d'ecriture qui plantait.
    await p.evaluate(()=>{ score=999999; if(typeof addScore==='function')addScore(1,10,10); });
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
