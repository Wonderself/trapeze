// Extrait le <script> d'un fichier HTML de jeu, le verifie syntaxiquement,
// puis l'execute dans un DOM minimal pour attraper les erreurs au chargement.
const fs=require('fs'),vm=require('vm');
const file=process.argv[2];
const html=fs.readFileSync(file,'utf8');
const m=html.match(/<script>([\s\S]*?)<\/script>/);
if(!m){console.error('AUCUN SCRIPT TROUVE');process.exit(1);}
const code=m[1];
try{new vm.Script(code,{filename:file});}
catch(e){console.error('ERREUR DE SYNTAXE: '+e.message);process.exit(1);}
console.log('syntaxe OK ('+code.split('\n').length+' lignes de JS)');

// DOM minimal : suffisant pour que le script s'initialise sans navigateur.
const ids=[...html.matchAll(/id="([^"]+)"/g)].map(x=>x[1]);
const listeners={};
let ctxProto;
function mkEl(id){
  const el={id,style:{},textContent:'',title:'',width:800,height:450,
    classList:{add(){},remove(){},toggle(){},contains(){return false;}},
    addEventListener(t,f){(listeners[id+':'+t]=listeners[id+':'+t]||[]).push(f);},
    removeEventListener(){},
    getBoundingClientRect:()=>({left:0,top:0,width:800,height:450}),
    offsetWidth:800,offsetHeight:450,clientWidth:800,clientHeight:450,
    focus(){},click(){},appendChild(){},
    requestFullscreen:()=>Promise.resolve()};
  el.getContext=()=>ctxProto;
  return el;
}
const els={};ids.forEach(i=>els[i]=mkEl(i));
// Canvas 2D : chaque methode est un no-op, chaque getter renvoie un objet plausible.
ctxProto=new Proxy({},{get:(t,k)=>{
  if(k==='canvas')return null;
  if(k==='filter'||k==='font'||k==='fillStyle'||k==='strokeStyle')return '';
  if(k==='globalAlpha'||k==='lineWidth')return 1;
  if(k==='measureText')return()=>({width:10});
  if(k==='createLinearGradient'||k==='createRadialGradient'||k==='createPattern')
    return()=>({addColorStop(){}});
  if(k==='getImageData'||k==='createImageData')
    return(w,h)=>({data:new Uint8ClampedArray(4*(w||1)*(h||1)),width:w||1,height:h||1});
  if(typeof k==='string')return()=>{};
  return undefined;
},set:()=>true});
function mkCanvas(){const c=mkEl('canvas');c.getContext=()=>ctxProto;c.width=800;c.height=450;return c;}
if(els['c'])els['c'].getContext=()=>ctxProto;

const errors=[];
const sandbox={
  console:{log(){},warn(){},error(...a){errors.push(a.join(' '));}},
  document:{
    getElementById:id=>els[id]||null,
    createElement:t=>t==='canvas'?mkCanvas():mkEl(t),
    addEventListener(t,f){(listeners['doc:'+t]=listeners['doc:'+t]||[]).push(f);},
    removeEventListener(){},documentElement:mkEl('html'),body:mkEl('body'),querySelector:()=>null,hidden:false,
    fullscreenElement:null,webkitFullscreenElement:null,exitFullscreen:null,
  },
  navigator:{userAgent:'Mozilla/5.0 (Macintosh) Chrome/120',language:'fr-FR',vibrate(){},standalone:false},
  location:{hash:'',href:'http://localhost/'},
  localStorage:{_d:{},getItem(k){return this._d[k]||null;},setItem(k,v){this._d[k]=''+v;},removeItem(k){delete this._d[k];}},
  requestAnimationFrame(){return 1;},cancelAnimationFrame(){},
  setTimeout(f,d){return 0;},clearTimeout(){},setInterval(){return 0;},clearInterval(){},
  addEventListener(t,f){(listeners['win:'+t]=listeners['win:'+t]||[]).push(f);},
  removeEventListener(){},
  matchMedia:()=>({matches:false,addEventListener(){},addListener(){}}),
  screen:{orientation:{lock:()=>Promise.resolve(),unlock(){}}},
  AudioContext:function(){return{state:'running',currentTime:0,destination:{},
    resume:()=>Promise.resolve(),
    createOscillator:()=>({connect(){},start(){},stop(){},frequency:{setValueAtTime(){},linearRampToValueAtTime(){},value:0},type:'sine',detune:{value:0}}),
    createGain:()=>({connect(){},gain:{value:0,setValueAtTime(){},exponentialRampToValueAtTime(){},setTargetAtTime(){},linearRampToValueAtTime(){}}}),
    createBuffer:(ch,len,sr)=>({getChannelData:()=>new Float32Array(Math.max(1,len)),length:len,sampleRate:sr}),
    createBufferSource:()=>({connect(){},start(){},stop(){},buffer:null}),
    sampleRate:44100,
    createBiquadFilter:()=>({connect(){},frequency:{value:0},Q:{value:0},type:'lowpass'}),
    createDynamicsCompressor:()=>({connect(){},threshold:{value:0},ratio:{value:0},knee:{value:0},attack:{value:0},release:{value:0}}),
  };},
  CanvasRenderingContext2D:function(){},
  Image:function(){return mkEl('img');},
  performance:{now:()=>0},
  Math,Date,JSON,Object,Array,String,Number,Boolean,Error,Map,Set,Promise,
  Uint8ClampedArray,Float32Array,Float64Array,Int32Array,isNaN,isFinite,parseInt,parseFloat,
};
sandbox.window=sandbox;sandbox.globalThis=sandbox;sandbox.self=sandbox;
sandbox.webkitAudioContext=sandbox.AudioContext;
sandbox.CanvasRenderingContext2D.prototype={};
sandbox.document.documentElement.requestFullscreen=()=>Promise.resolve();

// Les declarations `let`/`const` de haut niveau ne deviennent pas des proprietes
// du sandbox. On expose ce dont le test a besoin via un pont explicite.
const bridge=`\n;globalThis.__t={
  get gs(){return gs;}, set gs(v){gs=v;},
  get lives(){return lives;}, set lives(v){lives=v;},
  get score(){return score;}, set score(v){score=v;},
  get level(){return level;}, set level(v){level=v;},
  get paused(){return paused;},
  P:(typeof P!=='undefined'?P:null),
  startGame:(typeof startGame!=='undefined'?startGame:(typeof startRun!=='undefined'?startRun:null)),
  loseLife:(typeof loseLife!=='undefined'?loseLife:(typeof hurt!=='undefined'?hurt:null)),
  startFinale:(typeof startFinale!=='undefined'?startFinale:null),
  togglePause:(typeof togglePause!=='undefined'?togglePause:null),
  loop:(typeof loop!=='undefined'?loop:(typeof frameLoop!=='undefined'?frameLoop:null)),
  step:(typeof step!=='undefined'?step:null),
  toMenu:(typeof toMenu!=='undefined'?toMenu:null),
};`;
try{vm.createContext(sandbox);new vm.Script(code+bridge,{filename:file}).runInContext(sandbox,{timeout:10000});}
catch(e){console.error('ERREUR AU CHARGEMENT: '+e.message+'\n'+(e.stack||'').split('\n').slice(0,4).join('\n'));process.exit(1);}
console.log('chargement OK');

// Fait tourner la boucle et traverse les etats du jeu.
const T=sandbox.__t;
if(!T){console.error('pont de test absent');process.exit(1);}
let frames=0;
const queue=[];
sandbox.requestAnimationFrame=f=>{if(frames++<20000)queue.push(f);return frames;};
if(T.loop)queue.push(T.loop);
const states=[];
let vt=0;
function pump(n,label){for(let i=0;i<n&&queue.length;i++){const f=queue.shift();vt+=16.7;
  try{f(vt);}catch(e){
    console.error('ERREUR EN BOUCLE ['+label+'] frame '+frames+', gs='+T.gs+': '+e.message);
    console.error((e.stack||'').split('\n').slice(1,4).join('\n'));process.exit(1);}
  if(!states.includes(T.gs))states.push(T.gs);}}

pump(90,'menu');
if(T.startGame){T.startGame();pump(1200,'jeu');}
if(T.togglePause){T.togglePause();pump(60,'pause');T.togglePause();pump(60,'reprise');}
// Regression B1 : l'ecran Game Over tuait la boucle de rendu.
T.lives=1;if(T.loseLife)T.loseLife();
pump(30,'perte de vie');
if(T.gs!=='gameover'){T.gs='gameover';}
const before=frames;pump(240,'game over');
if(frames-before<200){console.error('REGRESSION B1 : la boucle s\'est arretee sur Game Over ('+(frames-before)+' frames)');process.exit(1);}
console.log('  Game Over : '+(frames-before)+' frames rendues, boucle vivante');
T.gs='levelcomplete';pump(200,'fin de niveau');
if(T.startFinale){T.startFinale();pump(300,'final');}
console.log('boucle OK — '+frames+' frames, etats traverses: '+states.filter(Boolean).join(', '));
if(errors.length)console.log('console.error captures: '+errors.length);
