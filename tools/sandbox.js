// DOM/Audio minimal partage par les tests.
const listeners={};
let ctxProto=new Proxy({},{get:(t,k)=>{
  if(k==='canvas')return null;
  if(k==='measureText')return()=>({width:10});
  if(k==='createLinearGradient'||k==='createRadialGradient'||k==='createPattern')
    return()=>({addColorStop(){}});
  if(k==='getImageData'||k==='createImageData')
    return(w,h)=>({data:new Uint8ClampedArray(4*(w||1)*(h||1)),width:w||1,height:h||1});
  if(k==='filter'||k==='font'||k==='fillStyle'||k==='strokeStyle')return '';
  if(k==='globalAlpha'||k==='lineWidth')return 1;
  if(typeof k==='string')return()=>{};
  return undefined;
},set:()=>true});
function mkEl(id){
  const el={id,style:{},textContent:'',title:'',width:800,height:450,
    classList:{add(){},remove(){},toggle(){},contains(){return false;}},
    addEventListener(t,f){(listeners[id+':'+t]=listeners[id+':'+t]||[]).push(f);},
    removeEventListener(){},
    getBoundingClientRect:()=>({left:0,top:0,width:800,height:450}),
    offsetWidth:800,offsetHeight:450,clientWidth:800,clientHeight:450,
    focus(){},click(){},appendChild(){},requestFullscreen:()=>Promise.resolve()};
  el.getContext=()=>ctxProto;
  return el;
}
exports.makeSandbox=function(html){
  const ids=[...html.matchAll(/id="([^"]+)"/g)].map(x=>x[1]);
  const els={};ids.forEach(i=>els[i]=mkEl(i));
  const sandbox={
    console:{log(){},warn(){},error(){}},
    document:{
      getElementById:id=>els[id]||null,
      createElement:t=>mkEl(t),
      addEventListener(){},removeEventListener(){},querySelector:()=>null,
      documentElement:mkEl('html'),body:mkEl('body'),hidden:false,
      fullscreenElement:null,webkitFullscreenElement:null,exitFullscreen:null,
    },
    navigator:{userAgent:'Mozilla/5.0 Chrome/120',language:'fr-FR',vibrate(){},
      deviceMemory:8,hardwareConcurrency:8,maxTouchPoints:0},
    location:{hash:'',href:'http://localhost/'},
    localStorage:{_d:{},getItem(k){return this._d[k]||null;},setItem(k,v){this._d[k]=''+v;},removeItem(k){delete this._d[k];}},
    requestAnimationFrame(){return 1;},cancelAnimationFrame(){},
    setTimeout(){return 0;},clearTimeout(){},setInterval(){return 0;},clearInterval(){},
    addEventListener(){},removeEventListener(){},
    matchMedia:()=>({matches:false,addEventListener(){},addListener(){}}),
    screen:{orientation:{lock:()=>Promise.resolve(),unlock(){}}},
    devicePixelRatio:2,innerWidth:1280,innerHeight:720,
    AudioContext:function(){return{state:'running',currentTime:0,destination:{},sampleRate:44100,
      resume:()=>Promise.resolve(),
      createOscillator:()=>({connect(){},start(){},stop(){},type:'sine',
        frequency:{setValueAtTime(){},linearRampToValueAtTime(){},exponentialRampToValueAtTime(){},value:0},
        detune:{value:0}}),
      createGain:()=>({connect(){},gain:{value:0,setValueAtTime(){},exponentialRampToValueAtTime(){},setTargetAtTime(){},linearRampToValueAtTime(){}}}),
      createBuffer:(ch,len,sr)=>({getChannelData:()=>new Float32Array(Math.max(1,len))}),
      createBufferSource:()=>({connect(){},start(){},stop(){},buffer:null}),
      createBiquadFilter:()=>({connect(){},frequency:{value:0},Q:{value:0},type:'lowpass'}),
      createDynamicsCompressor:()=>({connect(){},threshold:{value:0},ratio:{value:0},knee:{value:0},attack:{value:0},release:{value:0}}),
    };},
    CanvasRenderingContext2D:function(){},
    performance:{now:()=>0},
    Math,Date,JSON,Object,Array,String,Number,Boolean,Error,Map,Set,Promise,
    Uint8ClampedArray,Float32Array,Float64Array,Int32Array,isNaN,isFinite,parseInt,parseFloat,
  };
  sandbox.window=sandbox;sandbox.globalThis=sandbox;sandbox.self=sandbox;
  sandbox.webkitAudioContext=sandbox.AudioContext;
  sandbox.CanvasRenderingContext2D.prototype={};
  return sandbox;
};
