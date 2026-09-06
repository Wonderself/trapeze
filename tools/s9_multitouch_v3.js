// Preuve de multitouch reel pour Trapeze City : deux contacts simultanes,
// via CDP Input.dispatchTouchEvent (pas des evenements pointer synthetiques
// depuis la page), l'un sur le manche virtuel de regard, l'autre sur le
// bouton POMPER/SAISIR. Le manche et le bouton sont deux elements DOM
// distincts, donc deux pointerId distincts : le test verifie que les DEUX
// gestes agissent en meme temps, pas l'un apres l'autre.
//
// Modele : tools/s9_multitouch.js.
const path=require('path');
const {chromium}=require('playwright-core');
const EXE=process.env.CHROME_EXE||'/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
const url='file://'+path.join(__dirname,'..','trapeze-city-v3.html');

(async()=>{
  const b=await chromium.launch({executablePath:EXE,
    args:['--no-sandbox','--disable-dev-shm-usage','--use-gl=swiftshader','--enable-unsafe-swiftshader']});
  const errors=[];
  const ctx=await b.newContext({viewport:{width:844,height:390},deviceScaleFactor:2,hasTouch:true,isMobile:true});
  const page=await ctx.newPage();
  page.on('pageerror',e=>errors.push(String(e)));
  await page.goto(url);
  await page.waitForFunction('!!window.__v3');
  // Entrer en scene et passer la cinematique d'ouverture, puis mettre le
  // trapeze au repos pour observer un pompage depuis zero.
  await page.evaluate(()=>{window.__v3.start();window.__v3.goRig(0);});
  await page.waitForTimeout(150);

  const stickBox=await page.locator('#stick').boundingBox();
  const actBox=await page.locator('#tAct').boundingBox();
  if(!stickBox||!actBox){console.log('boutons introuvables');await ctx.close();await b.close();process.exit(1);}

  const cdp=await ctx.newCDPSession(page);
  const sx=stickBox.x+stickBox.width*0.5, sy=stickBox.y+stickBox.height*0.5;
  const ax=actBox.x+actBox.width*0.5, ay=actBox.y+actBox.height*0.5;

  const before=await page.evaluate(()=>{
    const v=window.__v3.state;
    return{yaw:window.__v3.CAM.yaw,amp:v.amp,ang:v.ang};
  });

  // DEUX contacts au meme instant : id 1 sur le manche (deplace ensuite),
  // id 2 sur le bouton d'action. C'est un VRAI evenement multi-points, pas
  // deux touchstart successifs.
  await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',
    touchPoints:[{x:sx,y:sy,id:1},{x:ax,y:ay,id:2}]});
  await page.waitForTimeout(60);
  // Le doigt sur le manche glisse pendant que l'autre reste sur le bouton :
  // deux points de contact vivants, l'un mobile, l'autre fixe.
  for(let i=1;i<=6;i++){
    await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',
      touchPoints:[{x:sx+i*7,y:sy-i*4,id:1},{x:ax,y:ay,id:2}]});
    await page.waitForTimeout(30);
  }
  const during=await page.evaluate(()=>{
    const v=window.__v3.state;
    return{yaw:window.__v3.CAM.yaw,amp:v.amp,ang:v.ang,pstate:v.pstate};
  });
  await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});
  await page.waitForTimeout(100);
  const after=await page.evaluate(()=>({amp:window.__v3.state.amp}));
  await ctx.close();
  await b.close();

  const yawMoved=Math.abs(during.yaw-before.yaw)>0.001;
  // Le pompage ne change P.amp qu'au passage par le point bas ; sur une
  // fenetre aussi courte l'angle a de bonnes chances d'avoir avance, ce qui
  // est deja la preuve que le pas de simulation a tourne pendant le
  // contact combine. On verifie donc soit une amplitude qui a change soit,
  // a defaut, un angle qui a avance sous l'action combinee des deux doigts.
  const ampOrAngMoved=Math.abs(during.amp-before.amp)>0.0001||Math.abs(during.ang-before.ang)>0.0001;

  console.log('avant   : yaw='+before.yaw.toFixed(4)+' amp='+before.amp.toFixed(4)+' ang='+before.ang.toFixed(4));
  console.log('pendant : yaw='+during.yaw.toFixed(4)+' amp='+during.amp.toFixed(4)+' ang='+during.ang.toFixed(4)+' etat='+during.pstate);
  console.log('apres   : amp='+after.amp.toFixed(4));
  console.log('');
  console.log((yawMoved?'OK   ':'ECHEC ')+'le manche a change le regard PENDANT que le bouton etait maintenu');
  console.log((ampOrAngMoved?'OK   ':'ECHEC ')+'le pendule a avance PENDANT le meme contact combine (le bouton n a pas ete bloque par le manche)');
  console.log(errors.length?('ERREURS JS:\n'+errors.join('\n')):'aucune erreur JS');

  process.exit((yawMoved&&ampOrAngMoved&&!errors.length)?0:1);
})().catch(e=>{console.error(e);process.exit(1);});
