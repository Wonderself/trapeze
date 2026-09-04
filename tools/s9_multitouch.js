const { chromium } = require('playwright-core');
(async()=>{
  const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
    args:['--no-sandbox','--disable-dev-shm-usage','--use-gl=swiftshader','--enable-unsafe-swiftshader']});
  const errors=[];
  // V1 exige desormais le paysage sur mobile (correctif de la limitation
  // documentee) ; V2 s'adapte aux deux. On teste chacune dans son
  // orientation naturelle de jeu.
  const CASES=[
    {file:'trapeze-stars-v1.html', w:844, h:390, moveId:'bL', actId:'bJ'},
    {file:'trapeze-stars-v2.html', w:390, h:844, moveId:'bL', actId:'bAct'},
  ];
  for(const c of CASES){
    const ctx=await b.newContext({viewport:{width:c.w,height:c.h},deviceScaleFactor:3,hasTouch:true,isMobile:true});
    const p=await ctx.newPage();
    p.on('pageerror',e=>errors.push('['+c.file+'] '+e.message));
    await p.goto('file:///home/user/trapeze/'+c.file);
    await p.waitForTimeout(700);
    const startFn=c.file.includes('v1')?'startGame':'startRun';
    await p.evaluate((fn)=>{ window[fn](); },startFn);
    await p.waitForTimeout(500);

    const moveBox=await p.locator('#'+c.moveId).boundingBox();
    const actBox=await p.locator('#'+c.actId).boundingBox();
    if(!moveBox||!actBox){console.log(c.file+' : boutons introuvables');await ctx.close();continue;}

    const cdp=await ctx.newCDPSession(p);
    const mx=moveBox.x+moveBox.width/2, my=moveBox.y+moveBox.height/2;
    const ax=actBox.x+actBox.width/2, ay=actBox.y+actBox.height/2;
    await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',
      touchPoints:[{x:mx,y:my,id:1},{x:ax,y:ay,id:2}]});
    await p.waitForTimeout(220);
    const flags=await p.evaluate(()=>({
      mLeft:typeof mLeft!=='undefined'?mLeft:null,
      jBuf:typeof jBuf!=='undefined'?jBuf:null,
      jumpHeld:typeof P!=='undefined'?P.jumpHeld:null,
      state:typeof P!=='undefined'?P.state:null,
      vx:typeof P!=='undefined'?+P.vx.toFixed(2):null,
    }));
    await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});
    await p.waitForTimeout(150);
    const afterRelease=await p.evaluate(()=>({mLeft:typeof mLeft!=='undefined'?mLeft:null}));
    console.log(c.file+' : deux contacts simultanes -> '+JSON.stringify(flags)+' | apres relachement: '+JSON.stringify(afterRelease));
    await ctx.close();
  }
  await b.close();
  console.log(errors.length?('ERREURS:\n'+errors.join('\n')):'aucune erreur JS');
})();
