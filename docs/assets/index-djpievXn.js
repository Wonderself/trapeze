(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oo="160",Gu=0,Rl=1,Hu=2,vh=1,xh=2,In=3,ri=0,We=1,ge=2,Gn=0,ls=1,pn=2,Cl=3,Pl=4,Vu=5,Si=100,ku=101,Wu=102,Ll=103,Dl=104,Xu=200,qu=201,Yu=202,Ju=203,vo=204,xo=205,Ku=206,Zu=207,ju=208,$u=209,Qu=210,tf=211,ef=212,nf=213,sf=214,rf=0,af=1,of=2,ea=3,lf=4,cf=5,hf=6,uf=7,Mh=0,ff=1,df=2,ti=0,pf=1,mf=2,gf=3,Sh=4,_f=5,vf=6,yh=300,fs=301,ds=302,Mo=303,So=304,va=306,Ui=1e3,mn=1001,yo=1002,Ve=1003,Ul=1004,Ua=1005,rn=1006,xf=1007,Ys=1008,ei=1009,Mf=1010,Sf=1011,Bo=1012,Eh=1013,jn=1014,$n=1015,Hn=1016,Th=1017,bh=1018,Ri=1020,yf=1021,gn=1023,Ef=1024,Tf=1025,Ci=1026,ps=1027,bf=1028,wh=1029,wf=1030,Ah=1031,Rh=1033,Ia=33776,Na=33777,Fa=33778,Oa=33779,Il=35840,Nl=35841,Fl=35842,Ol=35843,Ch=36196,Bl=37492,zl=37496,Gl=37808,Hl=37809,Vl=37810,kl=37811,Wl=37812,Xl=37813,ql=37814,Yl=37815,Jl=37816,Kl=37817,Zl=37818,jl=37819,$l=37820,Ql=37821,Ba=36492,tc=36494,ec=36495,Af=36283,nc=36284,ic=36285,sc=36286,Ph=3e3,Pi=3001,Rf=3200,Cf=3201,Lh=0,Pf=1,on="",Se="srgb",kn="srgb-linear",zo="display-p3",xa="display-p3-linear",na="linear",le="srgb",ia="rec709",sa="p3",zi=7680,rc=519,Lf=512,Df=513,Uf=514,Dh=515,If=516,Nf=517,Ff=518,Of=519,ac=35044,oc="300 es",Eo=1035,Bn=2e3,ra=2001;class Ts{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let lc=1234567;const Hs=Math.PI/180,ms=180/Math.PI;function bs(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]).toLowerCase()}function Re(n,t,e){return Math.max(t,Math.min(e,n))}function Go(n,t){return(n%t+t)%t}function Bf(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function zf(n,t,e){return n!==t?(e-n)/(t-n):0}function Vs(n,t,e){return(1-e)*n+e*t}function Gf(n,t,e,i){return Vs(n,t,1-Math.exp(-e*i))}function Hf(n,t=1){return t-Math.abs(Go(n,t*2)-t)}function Vf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function kf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Wf(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Xf(n,t){return n+Math.random()*(t-n)}function qf(n){return n*(.5-Math.random())}function Yf(n){n!==void 0&&(lc=n);let t=lc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Jf(n){return n*Hs}function Kf(n){return n*ms}function To(n){return(n&n-1)===0&&n!==0}function Zf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function aa(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function jf(n,t,e,i,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),h=a((t+i)/2),u=r((t-i)/2),d=a((t-i)/2),p=r((i-t)/2),_=a((i-t)/2);switch(s){case"XYX":n.set(o*h,l*u,l*d,o*c);break;case"YZY":n.set(l*d,o*h,l*u,o*c);break;case"ZXZ":n.set(l*u,l*d,o*h,o*c);break;case"XZX":n.set(o*h,l*_,l*p,o*c);break;case"YXY":n.set(l*p,o*h,l*_,o*c);break;case"ZYZ":n.set(l*_,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function is(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ze(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const $f={DEG2RAD:Hs,RAD2DEG:ms,generateUUID:bs,clamp:Re,euclideanModulo:Go,mapLinear:Bf,inverseLerp:zf,lerp:Vs,damp:Gf,pingpong:Hf,smoothstep:Vf,smootherstep:kf,randInt:Wf,randFloat:Xf,randFloatSpread:qf,seededRandom:Yf,degToRad:Jf,radToDeg:Kf,isPowerOfTwo:To,ceilPowerOfTwo:Zf,floorPowerOfTwo:aa,setQuaternionFromProperEuler:jf,normalize:ze,denormalize:is};class ut{constructor(t=0,e=0){ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kt{constructor(t,e,i,s,r,a,o,l,c){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],_=i[8],v=s[0],m=s[3],f=s[6],y=s[1],S=s[4],T=s[7],C=s[2],A=s[5],R=s[8];return r[0]=a*v+o*y+l*C,r[3]=a*m+o*S+l*A,r[6]=a*f+o*T+l*R,r[1]=c*v+h*y+u*C,r[4]=c*m+h*S+u*A,r[7]=c*f+h*T+u*R,r[2]=d*v+p*y+_*C,r[5]=d*m+p*S+_*A,r[8]=d*f+p*T+_*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,_=e*u+i*d+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return t[0]=u*v,t[1]=(s*c-h*i)*v,t[2]=(o*i-s*a)*v,t[3]=d*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=p*v,t[7]=(i*l-c*e)*v,t[8]=(a*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(za.makeScale(t,e)),this}rotate(t){return this.premultiply(za.makeRotation(-t)),this}translate(t,e){return this.premultiply(za.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const za=new Kt;function Uh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function oa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Qf(){const n=oa("canvas");return n.style.display="block",n}const cc={};function ks(n){n in cc||(cc[n]=!0,console.warn(n))}const hc=new Kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),uc=new Kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),_r={[kn]:{transfer:na,primaries:ia,toReference:n=>n,fromReference:n=>n},[Se]:{transfer:le,primaries:ia,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[xa]:{transfer:na,primaries:sa,toReference:n=>n.applyMatrix3(uc),fromReference:n=>n.applyMatrix3(hc)},[zo]:{transfer:le,primaries:sa,toReference:n=>n.convertSRGBToLinear().applyMatrix3(uc),fromReference:n=>n.applyMatrix3(hc).convertLinearToSRGB()}},td=new Set([kn,xa]),te={enabled:!0,_workingColorSpace:kn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!td.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=_r[t].toReference,s=_r[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return _r[n].primaries},getTransfer:function(n){return n===on?na:_r[n].transfer}};function cs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ga(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Gi;class Ih{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Gi===void 0&&(Gi=oa("canvas")),Gi.width=t.width,Gi.height=t.height;const i=Gi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Gi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=oa("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=cs(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(cs(e[i]/255)*255):e[i]=cs(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ed=0;class Nh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=bs(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ha(s[a].image)):r.push(Ha(s[a]))}else r=Ha(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Ha(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ih.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nd=0;class Ye extends Ts{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,i=mn,s=mn,r=rn,a=Ys,o=gn,l=ei,c=Ye.DEFAULT_ANISOTROPY,h=on){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=bs(),this.name="",this.source=new Nh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Pi?Se:on),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ui:t.x=t.x-Math.floor(t.x);break;case mn:t.x=t.x<0?0:1;break;case yo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ui:t.y=t.y-Math.floor(t.y);break;case mn:t.y=t.y<0?0:1;break;case yo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Se?Pi:Ph}set encoding(t){ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Pi?Se:on}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=yh;Ye.DEFAULT_ANISOTROPY=1;class Le{constructor(t=0,e=0,i=0,s=1){Le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],_=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,T=(p+1)/2,C=(f+1)/2,A=(h+d)/4,R=(u+v)/4,I=(_+m)/4;return S>T&&S>C?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=A/i,r=R/i):T>C?T<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),i=A/s,r=I/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=R/r,s=I/r),this.set(i,s,r,e),this}let y=Math.sqrt((m-_)*(m-_)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(u-v)/y,this.z=(d-h)/y,this.w=Math.acos((c+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class id extends Ts{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e);const s={width:t,height:e,depth:1};i.encoding!==void 0&&(ks("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Pi?Se:on),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Ye(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Nh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _n extends id{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Fh extends Ye{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sd extends Ye{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class er{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const d=r[a+0],p=r[a+1],_=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=_,t[e+3]=v;return}if(u!==v||l!==d||c!==p||h!==_){let m=1-o;const f=l*d+c*p+h*_+u*v,y=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const C=Math.sqrt(S),A=Math.atan2(C,f*y);m=Math.sin(m*A)/C,o=Math.sin(o*A)/C}const T=o*y;if(l=l*m+d*T,c=c*m+p*T,h=h*m+_*T,u=u*m+v*T,m===1-o){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],d=r[a+1],p=r[a+2],_=r[a+3];return t[e]=o*_+h*u+l*p-c*d,t[e+1]=l*_+h*d+c*u-o*p,t[e+2]=c*_+h*p+o*d-l*u,t[e+3]=h*_-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),d=l(i/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*_,this._y=c*p*u-d*h*_,this._z=c*h*_+d*p*u,this._w=c*h*u-d*p*_;break;case"YXZ":this._x=d*h*u+c*p*_,this._y=c*p*u-d*h*_,this._z=c*h*_-d*p*u,this._w=c*h*u+d*p*_;break;case"ZXY":this._x=d*h*u-c*p*_,this._y=c*p*u+d*h*_,this._z=c*h*_+d*p*u,this._w=c*h*u-d*p*_;break;case"ZYX":this._x=d*h*u-c*p*_,this._y=c*p*u+d*h*_,this._z=c*h*_-d*p*u,this._w=c*h*u+d*p*_;break;case"YZX":this._x=d*h*u+c*p*_,this._y=c*p*u+d*h*_,this._z=c*h*_-d*p*u,this._w=c*h*u-d*p*_;break;case"XZY":this._x=d*h*u-c*p*_,this._y=c*p*u-d*h*_,this._z=c*h*_+d*p*u,this._w=c*h*u+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>u){const p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-i-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),i*Math.sin(r),i*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,i=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),u=2*(r*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Va.copy(this).projectOnVector(t),this.sub(Va)}reflect(t){return this.sub(Va.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Va=new P,fc=new er;class Oi{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,hn):hn.fromBufferAttribute(r,a),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vr.copy(i.boundingBox)),vr.applyMatrix4(t.matrixWorld),this.union(vr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ds),xr.subVectors(this.max,Ds),Hi.subVectors(t.a,Ds),Vi.subVectors(t.b,Ds),ki.subVectors(t.c,Ds),Xn.subVectors(Vi,Hi),qn.subVectors(ki,Vi),fi.subVectors(Hi,ki);let e=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-fi.z,fi.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,fi.z,0,-fi.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-fi.y,fi.x,0];return!ka(e,Hi,Vi,ki,xr)||(e=[1,0,0,0,1,0,0,0,1],!ka(e,Hi,Vi,ki,xr))?!1:(Mr.crossVectors(Xn,qn),e=[Mr.x,Mr.y,Mr.z],ka(e,Hi,Vi,ki,xr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Cn=[new P,new P,new P,new P,new P,new P,new P,new P],hn=new P,vr=new Oi,Hi=new P,Vi=new P,ki=new P,Xn=new P,qn=new P,fi=new P,Ds=new P,xr=new P,Mr=new P,di=new P;function ka(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){di.fromArray(n,r);const o=s.x*Math.abs(di.x)+s.y*Math.abs(di.y)+s.z*Math.abs(di.z),l=t.dot(di),c=e.dot(di),h=i.dot(di);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const rd=new Oi,Us=new P,Wa=new P;class ws{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):rd.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Us.subVectors(t,this.center);const e=Us.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Us,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Us.copy(t.center).add(Wa)),this.expandByPoint(Us.copy(t.center).sub(Wa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pn=new P,Xa=new P,Sr=new P,Yn=new P,qa=new P,yr=new P,Ya=new P;class Oh{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pn.copy(this.origin).addScaledVector(this.direction,e),Pn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Xa.copy(t).add(e).multiplyScalar(.5),Sr.copy(e).sub(t).normalize(),Yn.copy(this.origin).sub(Xa);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Sr),o=Yn.dot(this.direction),l=-Yn.dot(Sr),c=Yn.lengthSq(),h=Math.abs(1-a*a);let u,d,p,_;if(h>0)if(u=a*l-o,d=a*o-l,_=r*h,u>=0)if(d>=-_)if(d<=_){const v=1/h;u*=v,d*=v,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Xa).addScaledVector(Sr,d),p}intersectSphere(t,e){Pn.subVectors(t.center,this.origin);const i=Pn.dot(this.direction),s=Pn.dot(Pn)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Pn)!==null}intersectTriangle(t,e,i,s,r){qa.subVectors(e,t),yr.subVectors(i,t),Ya.crossVectors(qa,yr);let a=this.direction.dot(Ya),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Yn.subVectors(this.origin,t);const l=o*this.direction.dot(yr.crossVectors(Yn,yr));if(l<0)return null;const c=o*this.direction.dot(qa.cross(Yn));if(c<0||l+c>a)return null;const h=-o*Yn.dot(Ya);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class he{constructor(t,e,i,s,r,a,o,l,c,h,u,d,p,_,v,m){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,u,d,p,_,v,m)}set(t,e,i,s,r,a,o,l,c,h,u,d,p,_,v,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=_,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Wi.setFromMatrixColumn(t,0).length(),r=1/Wi.setFromMatrixColumn(t,1).length(),a=1/Wi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,p=a*u,_=o*h,v=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+_*c,e[5]=d-v*c,e[9]=-o*l,e[2]=v-d*c,e[6]=_+p*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,_=c*h,v=c*u;e[0]=d+v*o,e[4]=_*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-_,e[6]=v+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,_=c*h,v=c*u;e[0]=d-v*o,e[4]=-a*u,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*h,e[9]=v-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,p=a*u,_=o*h,v=o*u;e[0]=l*h,e[4]=_*c-p,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=p*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,p=a*c,_=o*l,v=o*c;e[0]=l*h,e[4]=v-d*u,e[8]=_*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+_,e[10]=d-v*u}else if(t.order==="XZY"){const d=a*l,p=a*c,_=o*l,v=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=a*h,e[9]=p*u-_,e[2]=_*u-p,e[6]=o*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ad,t,od)}lookAt(t,e,i){const s=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),Jn.crossVectors(i,Ze),Jn.lengthSq()===0&&(Math.abs(i.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),Jn.crossVectors(i,Ze)),Jn.normalize(),Er.crossVectors(Ze,Jn),s[0]=Jn.x,s[4]=Er.x,s[8]=Ze.x,s[1]=Jn.y,s[5]=Er.y,s[9]=Ze.y,s[2]=Jn.z,s[6]=Er.z,s[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],_=i[2],v=i[6],m=i[10],f=i[14],y=i[3],S=i[7],T=i[11],C=i[15],A=s[0],R=s[4],I=s[8],x=s[12],b=s[1],H=s[5],W=s[9],nt=s[13],D=s[2],O=s[6],q=s[10],j=s[14],J=s[3],$=s[7],Q=s[11],at=s[15];return r[0]=a*A+o*b+l*D+c*J,r[4]=a*R+o*H+l*O+c*$,r[8]=a*I+o*W+l*q+c*Q,r[12]=a*x+o*nt+l*j+c*at,r[1]=h*A+u*b+d*D+p*J,r[5]=h*R+u*H+d*O+p*$,r[9]=h*I+u*W+d*q+p*Q,r[13]=h*x+u*nt+d*j+p*at,r[2]=_*A+v*b+m*D+f*J,r[6]=_*R+v*H+m*O+f*$,r[10]=_*I+v*W+m*q+f*Q,r[14]=_*x+v*nt+m*j+f*at,r[3]=y*A+S*b+T*D+C*J,r[7]=y*R+S*H+T*O+C*$,r[11]=y*I+S*W+T*q+C*Q,r[15]=y*x+S*nt+T*j+C*at,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],_=t[3],v=t[7],m=t[11],f=t[15];return _*(+r*l*u-s*c*u-r*o*d+i*c*d+s*o*p-i*l*p)+v*(+e*l*p-e*c*d+r*a*d-s*a*p+s*c*h-r*l*h)+m*(+e*c*u-e*o*p-r*a*u+i*a*p+r*o*h-i*c*h)+f*(-s*o*h-e*l*u+e*o*d+s*a*u-i*a*d+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],_=t[12],v=t[13],m=t[14],f=t[15],y=u*m*c-v*d*c+v*l*p-o*m*p-u*l*f+o*d*f,S=_*d*c-h*m*c-_*l*p+a*m*p+h*l*f-a*d*f,T=h*v*c-_*u*c+_*o*p-a*v*p-h*o*f+a*u*f,C=_*u*l-h*v*l-_*o*d+a*v*d+h*o*m-a*u*m,A=e*y+i*S+s*T+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return t[0]=y*R,t[1]=(v*d*r-u*m*r-v*s*p+i*m*p+u*s*f-i*d*f)*R,t[2]=(o*m*r-v*l*r+v*s*c-i*m*c-o*s*f+i*l*f)*R,t[3]=(u*l*r-o*d*r-u*s*c+i*d*c+o*s*p-i*l*p)*R,t[4]=S*R,t[5]=(h*m*r-_*d*r+_*s*p-e*m*p-h*s*f+e*d*f)*R,t[6]=(_*l*r-a*m*r-_*s*c+e*m*c+a*s*f-e*l*f)*R,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*p+e*l*p)*R,t[8]=T*R,t[9]=(_*u*r-h*v*r-_*i*p+e*v*p+h*i*f-e*u*f)*R,t[10]=(a*v*r-_*o*r+_*i*c-e*v*c-a*i*f+e*o*f)*R,t[11]=(h*o*r-a*u*r-h*i*c+e*u*c+a*i*p-e*o*p)*R,t[12]=C*R,t[13]=(h*v*s-_*u*s+_*i*d-e*v*d-h*i*m+e*u*m)*R,t[14]=(_*o*s-a*v*s-_*i*l+e*v*l+a*i*m-e*o*m)*R,t[15]=(a*u*s-h*o*s+h*i*l-e*u*l-a*i*d+e*o*d)*R,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,_=r*u,v=a*h,m=a*u,f=o*u,y=l*c,S=l*h,T=l*u,C=i.x,A=i.y,R=i.z;return s[0]=(1-(v+f))*C,s[1]=(p+T)*C,s[2]=(_-S)*C,s[3]=0,s[4]=(p-T)*A,s[5]=(1-(d+f))*A,s[6]=(m+y)*A,s[7]=0,s[8]=(_+S)*R,s[9]=(m-y)*R,s[10]=(1-(d+v))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Wi.set(s[0],s[1],s[2]).length();const a=Wi.set(s[4],s[5],s[6]).length(),o=Wi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],un.copy(this);const c=1/r,h=1/a,u=1/o;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=u,un.elements[9]*=u,un.elements[10]*=u,e.setFromRotationMatrix(un),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=Bn){const l=this.elements,c=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s);let p,_;if(o===Bn)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===ra)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Bn){const l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(a-r),d=(e+t)*c,p=(i+s)*h;let _,v;if(o===Bn)_=(a+r)*u,v=-2*u;else if(o===ra)_=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Wi=new P,un=new he,ad=new P(0,0,0),od=new P(1,1,1),Jn=new P,Er=new P,Ze=new P,dc=new he,pc=new er;class Ma{constructor(t=0,e=0,i=0,s=Ma.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Re(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Re(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return dc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(dc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return pc.setFromEuler(this),this.setFromQuaternion(pc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ma.DEFAULT_ORDER="XYZ";class Bh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ld=0;const mc=new P,Xi=new er,Ln=new he,Tr=new P,Is=new P,cd=new P,hd=new er,gc=new P(1,0,0),_c=new P(0,1,0),vc=new P(0,0,1),ud={type:"added"},fd={type:"removed"};class ue extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ue.DEFAULT_UP.clone();const t=new P,e=new Ma,i=new er,s=new P(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new Kt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xi.setFromAxisAngle(t,e),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(t,e){return Xi.setFromAxisAngle(t,e),this.quaternion.premultiply(Xi),this}rotateX(t){return this.rotateOnAxis(gc,t)}rotateY(t){return this.rotateOnAxis(_c,t)}rotateZ(t){return this.rotateOnAxis(vc,t)}translateOnAxis(t,e){return mc.copy(t).applyQuaternion(this.quaternion),this.position.add(mc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gc,t)}translateY(t){return this.translateOnAxis(_c,t)}translateZ(t){return this.translateOnAxis(vc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Tr.copy(t):Tr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(Is,Tr,this.up):Ln.lookAt(Tr,Is,this.up),this.quaternion.setFromRotationMatrix(Ln),s&&(Ln.extractRotation(s.matrixWorld),Xi.setFromRotationMatrix(Ln),this.quaternion.premultiply(Xi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(ud)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(fd)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ln),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,t,cd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,hd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++){const r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}ue.DEFAULT_UP=new P(0,1,0);ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new P,Dn=new P,Ja=new P,Un=new P,qi=new P,Yi=new P,xc=new P,Ka=new P,Za=new P,ja=new P;let br=!1;class dn{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),fn.subVectors(t,e),s.cross(fn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){fn.subVectors(s,e),Dn.subVectors(i,e),Ja.subVectors(t,e);const a=fn.dot(fn),o=fn.dot(Dn),l=fn.dot(Ja),c=Dn.dot(Dn),h=Dn.dot(Ja),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,_=(a*h-o*l)*d;return r.set(1-p-_,_,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getUV(t,e,i,s,r,a,o,l){return br===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),br=!0),this.getInterpolation(t,e,i,s,r,a,o,l)}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Un.x),l.addScaledVector(a,Un.y),l.addScaledVector(o,Un.z),l)}static isFrontFacing(t,e,i,s){return fn.subVectors(i,e),Dn.subVectors(t,e),fn.cross(Dn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fn.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),fn.cross(Dn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return dn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return dn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,s,r){return br===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),br=!0),dn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}getInterpolation(t,e,i,s,r){return dn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return dn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return dn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;qi.subVectors(s,i),Yi.subVectors(r,i),Ka.subVectors(t,i);const l=qi.dot(Ka),c=Yi.dot(Ka);if(l<=0&&c<=0)return e.copy(i);Za.subVectors(t,s);const h=qi.dot(Za),u=Yi.dot(Za);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(qi,a);ja.subVectors(t,r);const p=qi.dot(ja),_=Yi.dot(ja);if(_>=0&&p<=_)return e.copy(r);const v=p*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(i).addScaledVector(Yi,o);const m=h*_-p*u;if(m<=0&&u-h>=0&&p-_>=0)return xc.subVectors(r,s),o=(u-h)/(u-h+(p-_)),e.copy(s).addScaledVector(xc,o);const f=1/(m+v+d);return a=v*f,o=d*f,e.copy(i).addScaledVector(qi,a).addScaledVector(Yi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const zh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},wr={h:0,s:0,l:0};function $a(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class At{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Se){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=te.workingColorSpace){if(t=Go(t,1),e=Re(e,0,1),i=Re(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=$a(a,r,t+1/3),this.g=$a(a,r,t),this.b=$a(a,r,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=Se){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Se){const i=zh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=cs(t.r),this.g=cs(t.g),this.b=cs(t.b),this}copyLinearToSRGB(t){return this.r=Ga(t.r),this.g=Ga(t.g),this.b=Ga(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Se){return te.fromWorkingColorSpace(Ne.copy(this),t),Math.round(Re(Ne.r*255,0,255))*65536+Math.round(Re(Ne.g*255,0,255))*256+Math.round(Re(Ne.b*255,0,255))}getHexString(t=Se){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Ne.copy(this),e);const i=Ne.r,s=Ne.g,r=Ne.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=Se){te.fromWorkingColorSpace(Ne.copy(this),t);const e=Ne.r,i=Ne.g,s=Ne.b;return t!==Se?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Kn),this.setHSL(Kn.h+t,Kn.s+e,Kn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Kn),t.getHSL(wr);const i=Vs(Kn.h,wr.h,e),s=Vs(Kn.s,wr.s,e),r=Vs(Kn.l,wr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ne=new At;At.NAMES=zh;let dd=0;class As extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=bs(),this.name="",this.type="Material",this.blending=ls,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vo,this.blendDst=xo,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=ea,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zi,this.stencilZFail=zi,this.stencilZPass=zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ls&&(i.blending=this.blending),this.side!==ri&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==vo&&(i.blendSrc=this.blendSrc),this.blendDst!==xo&&(i.blendDst=this.blendDst),this.blendEquation!==Si&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ea&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==zi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==zi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Nn extends As{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Mh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ve=new P,Ar=new ut;class _e{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ac,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ar.fromBufferAttribute(this,e),Ar.applyMatrix3(t),this.setXY(e,Ar.x,Ar.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=is(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ze(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=is(e,this.array)),e}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=is(e,this.array)),e}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=is(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=is(e,this.array)),e}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array),s=ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array),s=ze(s,this.array),r=ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ac&&(t.usage=this.usage),t}}class Gh extends _e{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Hh extends _e{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ie extends _e{constructor(t,e,i){super(new Float32Array(t),e,i)}}let pd=0;const sn=new he,Qa=new ue,Ji=new P,je=new Oi,Ns=new Oi,Ae=new P;class pe extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=bs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Uh(t)?Hh:Gh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,i){return sn.makeTranslation(t,e,i),this.applyMatrix4(sn),this}scale(t,e,i){return sn.makeScale(t,e,i),this.applyMatrix4(sn),this}lookAt(t){return Qa.lookAt(t),Qa.updateMatrix(),this.applyMatrix4(Qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ie(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];je.setFromBufferAttribute(r),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ws);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(t){const i=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ns.setFromBufferAttribute(o),this.morphTargetsRelative?(Ae.addVectors(je.min,Ns.min),je.expandByPoint(Ae),Ae.addVectors(je.max,Ns.max),je.expandByPoint(Ae)):(je.expandByPoint(Ns.min),je.expandByPoint(Ns.max))}je.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Ae.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ae));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ae.fromBufferAttribute(o,c),l&&(Ji.fromBufferAttribute(t,c),Ae.add(Ji)),s=Math.max(s,i.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _e(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let b=0;b<o;b++)c[b]=new P,h[b]=new P;const u=new P,d=new P,p=new P,_=new ut,v=new ut,m=new ut,f=new P,y=new P;function S(b,H,W){u.fromArray(s,b*3),d.fromArray(s,H*3),p.fromArray(s,W*3),_.fromArray(a,b*2),v.fromArray(a,H*2),m.fromArray(a,W*2),d.sub(u),p.sub(u),v.sub(_),m.sub(_);const nt=1/(v.x*m.y-m.x*v.y);isFinite(nt)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(nt),y.copy(p).multiplyScalar(v.x).addScaledVector(d,-m.x).multiplyScalar(nt),c[b].add(f),c[H].add(f),c[W].add(f),h[b].add(y),h[H].add(y),h[W].add(y))}let T=this.groups;T.length===0&&(T=[{start:0,count:i.length}]);for(let b=0,H=T.length;b<H;++b){const W=T[b],nt=W.start,D=W.count;for(let O=nt,q=nt+D;O<q;O+=3)S(i[O+0],i[O+1],i[O+2])}const C=new P,A=new P,R=new P,I=new P;function x(b){R.fromArray(r,b*3),I.copy(R);const H=c[b];C.copy(H),C.sub(R.multiplyScalar(R.dot(H))).normalize(),A.crossVectors(I,H);const nt=A.dot(h[b])<0?-1:1;l[b*4]=C.x,l[b*4+1]=C.y,l[b*4+2]=C.z,l[b*4+3]=nt}for(let b=0,H=T.length;b<H;++b){const W=T[b],nt=W.start,D=W.count;for(let O=nt,q=nt+D;O<q;O+=3)x(i[O+0]),x(i[O+1]),x(i[O+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _e(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let d=0,p=t.count;d<p;d+=3){const _=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,_=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*h;for(let f=0;f<h;f++)d[_++]=c[p++]}return new _e(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new pe,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,i);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mc=new he,pi=new Oh,Rr=new ws,Sc=new P,Ki=new P,Zi=new P,ji=new P,to=new P,Cr=new P,Pr=new ut,Lr=new ut,Dr=new ut,yc=new P,Ec=new P,Tc=new P,Ur=new P,Ir=new P;class vt extends ue{constructor(t=new pe,e=new Nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Cr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(to.fromBufferAttribute(u,t),a?Cr.addScaledVector(to,h):Cr.addScaledVector(to.sub(e),h))}e.add(Cr)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Rr.copy(i.boundingSphere),Rr.applyMatrix4(r),pi.copy(t.ray).recast(t.near),!(Rr.containsPoint(pi.origin)===!1&&(pi.intersectSphere(Rr,Sc)===null||pi.origin.distanceToSquared(Sc)>(t.far-t.near)**2))&&(Mc.copy(r).invert(),pi.copy(t.ray).applyMatrix4(Mc),!(i.boundingBox!==null&&pi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,pi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=d.length;_<v;_++){const m=d[_],f=a[m.materialIndex],y=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let T=y,C=S;T<C;T+=3){const A=o.getX(T),R=o.getX(T+1),I=o.getX(T+2);s=Nr(this,f,t,i,c,h,u,A,R,I),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=_,f=v;m<f;m+=3){const y=o.getX(m),S=o.getX(m+1),T=o.getX(m+2);s=Nr(this,a,t,i,c,h,u,y,S,T),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=d.length;_<v;_++){const m=d[_],f=a[m.materialIndex],y=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let T=y,C=S;T<C;T+=3){const A=T,R=T+1,I=T+2;s=Nr(this,f,t,i,c,h,u,A,R,I),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=_,f=v;m<f;m+=3){const y=m,S=m+1,T=m+2;s=Nr(this,a,t,i,c,h,u,y,S,T),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function md(n,t,e,i,s,r,a,o){let l;if(t.side===We?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===ri,o),l===null)return null;Ir.copy(o),Ir.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Ir);return c<e.near||c>e.far?null:{distance:c,point:Ir.clone(),object:n}}function Nr(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,Ki),n.getVertexPosition(l,Zi),n.getVertexPosition(c,ji);const h=md(n,t,e,i,Ki,Zi,ji,Ur);if(h){s&&(Pr.fromBufferAttribute(s,o),Lr.fromBufferAttribute(s,l),Dr.fromBufferAttribute(s,c),h.uv=dn.getInterpolation(Ur,Ki,Zi,ji,Pr,Lr,Dr,new ut)),r&&(Pr.fromBufferAttribute(r,o),Lr.fromBufferAttribute(r,l),Dr.fromBufferAttribute(r,c),h.uv1=dn.getInterpolation(Ur,Ki,Zi,ji,Pr,Lr,Dr,new ut),h.uv2=h.uv1),a&&(yc.fromBufferAttribute(a,o),Ec.fromBufferAttribute(a,l),Tc.fromBufferAttribute(a,c),h.normal=dn.getInterpolation(Ur,Ki,Zi,ji,yc,Ec,Tc,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new P,materialIndex:0};dn.getNormal(Ki,Zi,ji,u.normal),h.face=u}return h}class Wn extends pe{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;_("z","y","x",-1,-1,i,e,t,a,r,0),_("z","y","x",1,-1,i,e,-t,a,r,1),_("x","z","y",1,1,t,i,e,s,a,2),_("x","z","y",1,-1,t,i,-e,s,a,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(u,2));function _(v,m,f,y,S,T,C,A,R,I,x){const b=T/R,H=C/I,W=T/2,nt=C/2,D=A/2,O=R+1,q=I+1;let j=0,J=0;const $=new P;for(let Q=0;Q<q;Q++){const at=Q*H-nt;for(let it=0;it<O;it++){const X=it*b-W;$[v]=X*y,$[m]=at*S,$[f]=D,c.push($.x,$.y,$.z),$[v]=0,$[m]=0,$[f]=A>0?1:-1,h.push($.x,$.y,$.z),u.push(it/R),u.push(1-Q/I),j+=1}}for(let Q=0;Q<I;Q++)for(let at=0;at<R;at++){const it=d+at+O*Q,X=d+at+O*(Q+1),Z=d+(at+1)+O*(Q+1),mt=d+(at+1)+O*Q;l.push(it,X,mt),l.push(X,Z,mt),J+=6}o.addGroup(p,J,x),p+=J,d+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function gs(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ge(n){const t={};for(let e=0;e<n.length;e++){const i=gs(n[e]);for(const s in i)t[s]=i[s]}return t}function gd(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Vh(n){return n.getRenderTarget()===null?n.outputColorSpace:te.workingColorSpace}const la={clone:gs,merge:Ge};var _d=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tn extends As{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_d,this.fragmentShader=vd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gs(t.uniforms),this.uniformsGroups=gd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class kh extends ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=Bn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Qe extends kh{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ms*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Hs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(Hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Hs*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const $i=-90,Qi=1;class xd extends ue{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qe($i,Qi,t,e);s.layers=this.layers,this.add(s);const r=new Qe($i,Qi,t,e);r.layers=this.layers,this.add(r);const a=new Qe($i,Qi,t,e);a.layers=this.layers,this.add(a);const o=new Qe($i,Qi,t,e);o.layers=this.layers,this.add(o);const l=new Qe($i,Qi,t,e);l.layers=this.layers,this.add(l);const c=new Qe($i,Qi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Bn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ra)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Wh extends Ye{constructor(t,e,i,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:fs,super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Md extends _n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];e.encoding!==void 0&&(ks("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Pi?Se:on),this.texture=new Wh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:rn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Wn(5,5,5),r=new tn({name:"CubemapFromEquirect",uniforms:gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:We,blending:Gn});r.uniforms.tEquirect.value=e;const a=new vt(s,r),o=e.minFilter;return e.minFilter===Ys&&(e.minFilter=rn),new xd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}const eo=new P,Sd=new P,yd=new Kt;class _i{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=eo.subVectors(i,e).cross(Sd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(eo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||yd.getNormalMatrix(t),s=this.coplanarPoint(eo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mi=new ws,Fr=new P;class Ho{constructor(t=new _i,e=new _i,i=new _i,s=new _i,r=new _i,a=new _i){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Bn){const i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],_=s[9],v=s[10],m=s[11],f=s[12],y=s[13],S=s[14],T=s[15];if(i[0].setComponents(l-r,d-c,m-p,T-f).normalize(),i[1].setComponents(l+r,d+c,m+p,T+f).normalize(),i[2].setComponents(l+a,d+h,m+_,T+y).normalize(),i[3].setComponents(l-a,d-h,m-_,T-y).normalize(),i[4].setComponents(l-o,d-u,m-v,T-S).normalize(),e===Bn)i[5].setComponents(l+o,d+u,m+v,T+S).normalize();else if(e===ra)i[5].setComponents(o,u,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(t){return mi.center.set(0,0,0),mi.radius=.7071067811865476,mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Fr.x=s.normal.x>0?t.max.x:t.min.x,Fr.y=s.normal.y>0?t.max.y:t.min.y,Fr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Fr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xh(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Ed(n,t){const e=t.isWebGL2,i=new WeakMap;function s(c,h){const u=c.array,d=c.usage,p=u.byteLength,_=n.createBuffer();n.bindBuffer(h,_),n.bufferData(h,u,d),c.onUploadCallback();let v;if(u instanceof Float32Array)v=n.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=n.SHORT;else if(u instanceof Uint32Array)v=n.UNSIGNED_INT;else if(u instanceof Int32Array)v=n.INT;else if(u instanceof Int8Array)v=n.BYTE;else if(u instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:_,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,u){const d=h.array,p=h._updateRange,_=h.updateRanges;if(n.bindBuffer(u,c),p.count===-1&&_.length===0&&n.bufferSubData(u,0,d),_.length!==0){for(let v=0,m=_.length;v<m;v++){const f=_[v];e?n.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):n.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(e?n.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);if(u===void 0)i.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}class Li extends pe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,p=[],_=[],v=[],m=[];for(let f=0;f<h;f++){const y=f*d-a;for(let S=0;S<c;S++){const T=S*u-r;_.push(T,-y,0),v.push(0,0,1),m.push(S/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){const S=y+c*f,T=y+c*(f+1),C=y+1+c*(f+1),A=y+1+c*f;p.push(S,T,A),p.push(T,C,A)}this.setIndex(p),this.setAttribute("position",new ie(_,3)),this.setAttribute("normal",new ie(v,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Li(t.width,t.height,t.widthSegments,t.heightSegments)}}var Td=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ad=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Cd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ld=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dd=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ud=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Id=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Od=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,qd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Yd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Jd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Kd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Zd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$d=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tp="gl_FragColor = linearToOutputTexel( gl_FragColor );",ep=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,np=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ip=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ap=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,op=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,up=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,dp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_p=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ep=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Tp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ap=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Pp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Lp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Up=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ip=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Np=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Op=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,zp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Gp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Hp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Vp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Yp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$p=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Qp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,em=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,im=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,am=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,om=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,lm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,um=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_m=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ym=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Em=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Pm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Lm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Dm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Im=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Om=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Bm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Vm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,km=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Wm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Xm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ym=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Jm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Km=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$m=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,eg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ng=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wt={alphahash_fragment:Td,alphahash_pars_fragment:bd,alphamap_fragment:wd,alphamap_pars_fragment:Ad,alphatest_fragment:Rd,alphatest_pars_fragment:Cd,aomap_fragment:Pd,aomap_pars_fragment:Ld,batching_pars_vertex:Dd,batching_vertex:Ud,begin_vertex:Id,beginnormal_vertex:Nd,bsdfs:Fd,iridescence_fragment:Od,bumpmap_pars_fragment:Bd,clipping_planes_fragment:zd,clipping_planes_pars_fragment:Gd,clipping_planes_pars_vertex:Hd,clipping_planes_vertex:Vd,color_fragment:kd,color_pars_fragment:Wd,color_pars_vertex:Xd,color_vertex:qd,common:Yd,cube_uv_reflection_fragment:Jd,defaultnormal_vertex:Kd,displacementmap_pars_vertex:Zd,displacementmap_vertex:jd,emissivemap_fragment:$d,emissivemap_pars_fragment:Qd,colorspace_fragment:tp,colorspace_pars_fragment:ep,envmap_fragment:np,envmap_common_pars_fragment:ip,envmap_pars_fragment:sp,envmap_pars_vertex:rp,envmap_physical_pars_fragment:_p,envmap_vertex:ap,fog_vertex:op,fog_pars_vertex:lp,fog_fragment:cp,fog_pars_fragment:hp,gradientmap_pars_fragment:up,lightmap_fragment:fp,lightmap_pars_fragment:dp,lights_lambert_fragment:pp,lights_lambert_pars_fragment:mp,lights_pars_begin:gp,lights_toon_fragment:vp,lights_toon_pars_fragment:xp,lights_phong_fragment:Mp,lights_phong_pars_fragment:Sp,lights_physical_fragment:yp,lights_physical_pars_fragment:Ep,lights_fragment_begin:Tp,lights_fragment_maps:bp,lights_fragment_end:wp,logdepthbuf_fragment:Ap,logdepthbuf_pars_fragment:Rp,logdepthbuf_pars_vertex:Cp,logdepthbuf_vertex:Pp,map_fragment:Lp,map_pars_fragment:Dp,map_particle_fragment:Up,map_particle_pars_fragment:Ip,metalnessmap_fragment:Np,metalnessmap_pars_fragment:Fp,morphcolor_vertex:Op,morphnormal_vertex:Bp,morphtarget_pars_vertex:zp,morphtarget_vertex:Gp,normal_fragment_begin:Hp,normal_fragment_maps:Vp,normal_pars_fragment:kp,normal_pars_vertex:Wp,normal_vertex:Xp,normalmap_pars_fragment:qp,clearcoat_normal_fragment_begin:Yp,clearcoat_normal_fragment_maps:Jp,clearcoat_pars_fragment:Kp,iridescence_pars_fragment:Zp,opaque_fragment:jp,packing:$p,premultiplied_alpha_fragment:Qp,project_vertex:tm,dithering_fragment:em,dithering_pars_fragment:nm,roughnessmap_fragment:im,roughnessmap_pars_fragment:sm,shadowmap_pars_fragment:rm,shadowmap_pars_vertex:am,shadowmap_vertex:om,shadowmask_pars_fragment:lm,skinbase_vertex:cm,skinning_pars_vertex:hm,skinning_vertex:um,skinnormal_vertex:fm,specularmap_fragment:dm,specularmap_pars_fragment:pm,tonemapping_fragment:mm,tonemapping_pars_fragment:gm,transmission_fragment:_m,transmission_pars_fragment:vm,uv_pars_fragment:xm,uv_pars_vertex:Mm,uv_vertex:Sm,worldpos_vertex:ym,background_vert:Em,background_frag:Tm,backgroundCube_vert:bm,backgroundCube_frag:wm,cube_vert:Am,cube_frag:Rm,depth_vert:Cm,depth_frag:Pm,distanceRGBA_vert:Lm,distanceRGBA_frag:Dm,equirect_vert:Um,equirect_frag:Im,linedashed_vert:Nm,linedashed_frag:Fm,meshbasic_vert:Om,meshbasic_frag:Bm,meshlambert_vert:zm,meshlambert_frag:Gm,meshmatcap_vert:Hm,meshmatcap_frag:Vm,meshnormal_vert:km,meshnormal_frag:Wm,meshphong_vert:Xm,meshphong_frag:qm,meshphysical_vert:Ym,meshphysical_frag:Jm,meshtoon_vert:Km,meshtoon_frag:Zm,points_vert:jm,points_frag:$m,shadow_vert:Qm,shadow_frag:tg,sprite_vert:eg,sprite_frag:ng},ct={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},Sn={basic:{uniforms:Ge([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Ge([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new At(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Ge([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Ge([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Ge([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new At(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Ge([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Ge([ct.points,ct.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Ge([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Ge([ct.common,ct.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Ge([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Ge([ct.sprite,ct.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Ge([ct.common,ct.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Ge([ct.lights,ct.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};Sn.physical={uniforms:Ge([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const Or={r:0,b:0,g:0};function ig(n,t,e,i,s,r,a){const o=new At(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function _(m,f){let y=!1,S=f.isScene===!0?f.background:null;S&&S.isTexture&&(S=(f.backgroundBlurriness>0?e:t).get(S)),S===null?v(o,l):S&&S.isColor&&(v(S,1),y=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),S&&(S.isCubeTexture||S.mapping===va)?(h===void 0&&(h=new vt(new Wn(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:gs(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=te.getTransfer(S.colorSpace)!==le,(u!==S||d!==S.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=S,d=S.version,p=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new vt(new Li(2,2),new tn({name:"BackgroundMaterial",uniforms:gs(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=te.getTransfer(S.colorSpace)!==le,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,f){m.getRGB(Or,Vh(n)),i.buffers.color.setClear(Or.r,Or.g,Or.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),l=f,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(o,l)},render:_}}function sg(n,t,e,i){const s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=m(null);let c=l,h=!1;function u(D,O,q,j,J){let $=!1;if(a){const Q=v(j,q,O);c!==Q&&(c=Q,p(c.object)),$=f(D,j,q,J),$&&y(D,j,q,J)}else{const Q=O.wireframe===!0;(c.geometry!==j.id||c.program!==q.id||c.wireframe!==Q)&&(c.geometry=j.id,c.program=q.id,c.wireframe=Q,$=!0)}J!==null&&e.update(J,n.ELEMENT_ARRAY_BUFFER),($||h)&&(h=!1,I(D,O,q,j),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function p(D){return i.isWebGL2?n.bindVertexArray(D):r.bindVertexArrayOES(D)}function _(D){return i.isWebGL2?n.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function v(D,O,q){const j=q.wireframe===!0;let J=o[D.id];J===void 0&&(J={},o[D.id]=J);let $=J[O.id];$===void 0&&($={},J[O.id]=$);let Q=$[j];return Q===void 0&&(Q=m(d()),$[j]=Q),Q}function m(D){const O=[],q=[],j=[];for(let J=0;J<s;J++)O[J]=0,q[J]=0,j[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:q,attributeDivisors:j,object:D,attributes:{},index:null}}function f(D,O,q,j){const J=c.attributes,$=O.attributes;let Q=0;const at=q.getAttributes();for(const it in at)if(at[it].location>=0){const Z=J[it];let mt=$[it];if(mt===void 0&&(it==="instanceMatrix"&&D.instanceMatrix&&(mt=D.instanceMatrix),it==="instanceColor"&&D.instanceColor&&(mt=D.instanceColor)),Z===void 0||Z.attribute!==mt||mt&&Z.data!==mt.data)return!0;Q++}return c.attributesNum!==Q||c.index!==j}function y(D,O,q,j){const J={},$=O.attributes;let Q=0;const at=q.getAttributes();for(const it in at)if(at[it].location>=0){let Z=$[it];Z===void 0&&(it==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),it==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor));const mt={};mt.attribute=Z,Z&&Z.data&&(mt.data=Z.data),J[it]=mt,Q++}c.attributes=J,c.attributesNum=Q,c.index=j}function S(){const D=c.newAttributes;for(let O=0,q=D.length;O<q;O++)D[O]=0}function T(D){C(D,0)}function C(D,O){const q=c.newAttributes,j=c.enabledAttributes,J=c.attributeDivisors;q[D]=1,j[D]===0&&(n.enableVertexAttribArray(D),j[D]=1),J[D]!==O&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,O),J[D]=O)}function A(){const D=c.newAttributes,O=c.enabledAttributes;for(let q=0,j=O.length;q<j;q++)O[q]!==D[q]&&(n.disableVertexAttribArray(q),O[q]=0)}function R(D,O,q,j,J,$,Q){Q===!0?n.vertexAttribIPointer(D,O,q,J,$):n.vertexAttribPointer(D,O,q,j,J,$)}function I(D,O,q,j){if(i.isWebGL2===!1&&(D.isInstancedMesh||j.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;S();const J=j.attributes,$=q.getAttributes(),Q=O.defaultAttributeValues;for(const at in $){const it=$[at];if(it.location>=0){let X=J[at];if(X===void 0&&(at==="instanceMatrix"&&D.instanceMatrix&&(X=D.instanceMatrix),at==="instanceColor"&&D.instanceColor&&(X=D.instanceColor)),X!==void 0){const Z=X.normalized,mt=X.itemSize,yt=e.get(X);if(yt===void 0)continue;const Et=yt.buffer,Nt=yt.type,Ot=yt.bytesPerElement,Pt=i.isWebGL2===!0&&(Nt===n.INT||Nt===n.UNSIGNED_INT||X.gpuType===Eh);if(X.isInterleavedBufferAttribute){const kt=X.data,F=kt.stride,De=X.offset;if(kt.isInstancedInterleavedBuffer){for(let wt=0;wt<it.locationSize;wt++)C(it.location+wt,kt.meshPerAttribute);D.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=kt.meshPerAttribute*kt.count)}else for(let wt=0;wt<it.locationSize;wt++)T(it.location+wt);n.bindBuffer(n.ARRAY_BUFFER,Et);for(let wt=0;wt<it.locationSize;wt++)R(it.location+wt,mt/it.locationSize,Nt,Z,F*Ot,(De+mt/it.locationSize*wt)*Ot,Pt)}else{if(X.isInstancedBufferAttribute){for(let kt=0;kt<it.locationSize;kt++)C(it.location+kt,X.meshPerAttribute);D.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let kt=0;kt<it.locationSize;kt++)T(it.location+kt);n.bindBuffer(n.ARRAY_BUFFER,Et);for(let kt=0;kt<it.locationSize;kt++)R(it.location+kt,mt/it.locationSize,Nt,Z,mt*Ot,mt/it.locationSize*kt*Ot,Pt)}}else if(Q!==void 0){const Z=Q[at];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(it.location,Z);break;case 3:n.vertexAttrib3fv(it.location,Z);break;case 4:n.vertexAttrib4fv(it.location,Z);break;default:n.vertexAttrib1fv(it.location,Z)}}}}A()}function x(){W();for(const D in o){const O=o[D];for(const q in O){const j=O[q];for(const J in j)_(j[J].object),delete j[J];delete O[q]}delete o[D]}}function b(D){if(o[D.id]===void 0)return;const O=o[D.id];for(const q in O){const j=O[q];for(const J in j)_(j[J].object),delete j[J];delete O[q]}delete o[D.id]}function H(D){for(const O in o){const q=o[O];if(q[D.id]===void 0)continue;const j=q[D.id];for(const J in j)_(j[J].object),delete j[J];delete q[D.id]}}function W(){nt(),h=!0,c!==l&&(c=l,p(c.object))}function nt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:W,resetDefaultState:nt,dispose:x,releaseStatesOfGeometry:b,releaseStatesOfProgram:H,initAttributes:S,enableAttribute:T,disableUnusedAttributes:A}}function rg(n,t,e,i){const s=i.isWebGL2;let r;function a(h){r=h}function o(h,u){n.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,d){if(d===0)return;let p,_;if(s)p=n,_="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](r,h,u,d),e.update(u,r,d)}function c(h,u,d){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<d;_++)this.render(h[_],u[_]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,d);let _=0;for(let v=0;v<d;v++)_+=u[v];e.update(_,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function ag(n,t,e){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=d>0,T=a||t.has("OES_texture_float"),C=S&&T,A=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:y,vertexTextures:S,floatFragmentTextures:T,floatVertexTextures:C,maxSamples:A}}function og(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new _i,o=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||i!==0||s;return s=d,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const _=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,f=n.get(u);if(!s||_===null||_.length===0||r&&!m)r?h(null):c();else{const y=r?0:i,S=y*4;let T=f.clippingState||null;l.value=T,T=h(_,d,S,p);for(let C=0;C!==S;++C)T[C]=e[C];f.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,p,_){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const f=p+v*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,T=p;S!==v;++S,T+=4)a.copy(u[S]).applyMatrix4(y,o),a.normal.toArray(m,T),m[T+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function lg(n){let t=new WeakMap;function e(a,o){return o===Mo?a.mapping=fs:o===So&&(a.mapping=ds),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Mo||o===So)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Md(l.height/2);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Vo extends kh{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ss=4,bc=[.125,.215,.35,.446,.526,.582],yi=20,no=new Vo,wc=new At;let io=null,so=0,ro=0;const vi=(1+Math.sqrt(5))/2,ts=1/vi,Ac=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,vi,ts),new P(0,vi,-ts),new P(ts,0,vi),new P(-ts,0,vi),new P(vi,ts,0),new P(-vi,ts,0)];class Rc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){io=this._renderer.getRenderTarget(),so=this._renderer.getActiveCubeFace(),ro=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(io,so,ro),t.scissorTest=!1,Br(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===fs||t.mapping===ds?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),io=this._renderer.getRenderTarget(),so=this._renderer.getActiveCubeFace(),ro=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Hn,format:gn,colorSpace:kn,depthBuffer:!1},s=Cc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cc(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cg(r)),this._blurMaterial=hg(r,t,e)}return s}_compileMaterial(t){const e=new vt(this._lodPlanes[0],t);this._renderer.compile(e,no)}_sceneToCubeUV(t,e,i,s){const o=new Qe(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(wc),h.toneMapping=ti,h.autoClear=!1;const p=new Nn({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),_=new vt(new Wn,p);let v=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(wc),v=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):y===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const S=this._cubeSize;Br(s,y*S,f>2?S:0,S,S),h.setRenderTarget(s),v&&h.render(_,o),h.render(t,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===fs||t.mapping===ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new vt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Br(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,no)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ac[(s-1)%Ac.length];this._blur(t,s-1,s,r,a)}e.autoClear=i}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new vt(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*yi-1),v=r/_,m=isFinite(r)?1+Math.floor(h*v):yi;m>yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${yi}`);const f=[];let y=0;for(let R=0;R<yi;++R){const I=R/v,x=Math.exp(-I*I/2);f.push(x),R===0?y+=x:R<m&&(y+=2*x)}for(let R=0;R<f.length;R++)f[R]=f[R]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=_,d.mipInt.value=S-i;const T=this._sizeLods[s],C=3*T*(s>S-ss?s-S+ss:0),A=4*(this._cubeSize-T);Br(e,C,A,3*T,2*T),l.setRenderTarget(e),l.render(u,no)}}function cg(n){const t=[],e=[],i=[];let s=n;const r=n-ss+1+bc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>n-ss?l=bc[a-n+ss-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,_=6,v=3,m=2,f=1,y=new Float32Array(v*_*p),S=new Float32Array(m*_*p),T=new Float32Array(f*_*p);for(let A=0;A<p;A++){const R=A%3*2/3-1,I=A>2?0:-1,x=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];y.set(x,v*_*A),S.set(d,m*_*A);const b=[A,A,A,A,A,A];T.set(b,f*_*A)}const C=new pe;C.setAttribute("position",new _e(y,v)),C.setAttribute("uv",new _e(S,m)),C.setAttribute("faceIndex",new _e(T,f)),t.push(C),s>ss&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Cc(n,t,e){const i=new _n(n,t,e);return i.texture.mapping=va,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Br(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function hg(n,t,e){const i=new Float32Array(yi),s=new P(0,1,0);return new tn({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Pc(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Lc(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function ko(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ug(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Mo||l===So,h=l===fs||l===ds;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new Rc(n)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new Rc(n));const d=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function fg(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const s=e(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function dg(n,t,e,i){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);for(const _ in d.morphAttributes){const v=d.morphAttributes[_];for(let m=0,f=v.length;m<f;m++)t.remove(v[m])}d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const _ in d)t.update(d[_],n.ARRAY_BUFFER);const p=u.morphAttributes;for(const _ in p){const v=p[_];for(let m=0,f=v.length;m<f;m++)t.update(v[m],n.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,_=u.attributes.position;let v=0;if(p!==null){const y=p.array;v=p.version;for(let S=0,T=y.length;S<T;S+=3){const C=y[S+0],A=y[S+1],R=y[S+2];d.push(C,A,A,R,R,C)}}else if(_!==void 0){const y=_.array;v=_.version;for(let S=0,T=y.length/3-1;S<T;S+=3){const C=S+0,A=S+1,R=S+2;d.push(C,A,A,R,R,C)}}else return;const m=new(Uh(d)?Hh:Gh)(d,1);m.version=v;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function pg(n,t,e,i){const s=i.isWebGL2;let r;function a(p){r=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function h(p,_){n.drawElements(r,_,o,p*l),e.update(_,r,1)}function u(p,_,v){if(v===0)return;let m,f;if(s)m=n,f="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,_,o,p*l,v),e.update(_,r,v)}function d(p,_,v){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<v;f++)this.render(p[f]/l,_[f]);else{m.multiDrawElementsWEBGL(r,_,0,o,p,0,v);let f=0;for(let y=0;y<v;y++)f+=_[y];e.update(f,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function mg(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function gg(n,t){return n[0]-t[0]}function _g(n,t){return Math.abs(t[1])-Math.abs(n[1])}function vg(n,t,e){const i={},s=new Float32Array(8),r=new WeakMap,a=new Le,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=_!==void 0?_.length:0;let m=r.get(h);if(m===void 0||m.count!==v){let O=function(){nt.dispose(),r.delete(h),h.removeEventListener("dispose",O)};var p=O;m!==void 0&&m.texture.dispose();const S=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,C=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],I=h.morphAttributes.color||[];let x=0;S===!0&&(x=1),T===!0&&(x=2),C===!0&&(x=3);let b=h.attributes.position.count*x,H=1;b>t.maxTextureSize&&(H=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const W=new Float32Array(b*H*4*v),nt=new Fh(W,b,H,v);nt.type=$n,nt.needsUpdate=!0;const D=x*4;for(let q=0;q<v;q++){const j=A[q],J=R[q],$=I[q],Q=b*H*4*q;for(let at=0;at<j.count;at++){const it=at*D;S===!0&&(a.fromBufferAttribute(j,at),W[Q+it+0]=a.x,W[Q+it+1]=a.y,W[Q+it+2]=a.z,W[Q+it+3]=0),T===!0&&(a.fromBufferAttribute(J,at),W[Q+it+4]=a.x,W[Q+it+5]=a.y,W[Q+it+6]=a.z,W[Q+it+7]=0),C===!0&&(a.fromBufferAttribute($,at),W[Q+it+8]=a.x,W[Q+it+9]=a.y,W[Q+it+10]=a.z,W[Q+it+11]=$.itemSize===4?a.w:1)}}m={count:v,texture:nt,size:new ut(b,H)},r.set(h,m),h.addEventListener("dispose",O)}let f=0;for(let S=0;S<d.length;S++)f+=d[S];const y=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(n,"morphTargetBaseInfluence",y),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",m.texture,e),u.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const _=d===void 0?0:d.length;let v=i[h.id];if(v===void 0||v.length!==_){v=[];for(let T=0;T<_;T++)v[T]=[T,0];i[h.id]=v}for(let T=0;T<_;T++){const C=v[T];C[0]=T,C[1]=d[T]}v.sort(_g);for(let T=0;T<8;T++)T<_&&v[T][1]?(o[T][0]=v[T][0],o[T][1]=v[T][1]):(o[T][0]=Number.MAX_SAFE_INTEGER,o[T][1]=0);o.sort(gg);const m=h.morphAttributes.position,f=h.morphAttributes.normal;let y=0;for(let T=0;T<8;T++){const C=o[T],A=C[0],R=C[1];A!==Number.MAX_SAFE_INTEGER&&R?(m&&h.getAttribute("morphTarget"+T)!==m[A]&&h.setAttribute("morphTarget"+T,m[A]),f&&h.getAttribute("morphNormal"+T)!==f[A]&&h.setAttribute("morphNormal"+T,f[A]),s[T]=R,y+=R):(m&&h.hasAttribute("morphTarget"+T)===!0&&h.deleteAttribute("morphTarget"+T),f&&h.hasAttribute("morphNormal"+T)===!0&&h.deleteAttribute("morphNormal"+T),s[T]=0)}const S=h.morphTargetsRelative?1:1-y;u.getUniforms().setValue(n,"morphTargetBaseInfluence",S),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function xg(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class qh extends Ye{constructor(t,e,i,s,r,a,o,l,c,h){if(h=h!==void 0?h:Ci,h!==Ci&&h!==ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ci&&(i=jn),i===void 0&&h===ps&&(i=Ri),super(null,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ve,this.minFilter=l!==void 0?l:Ve,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Yh=new Ye,Jh=new qh(1,1);Jh.compareFunction=Dh;const Kh=new Fh,Zh=new sd,jh=new Wh,Dc=[],Uc=[],Ic=new Float32Array(16),Nc=new Float32Array(9),Fc=new Float32Array(4);function Rs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Dc[s];if(r===void 0&&(r=new Float32Array(s),Dc[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Ee(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Te(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Sa(n,t){let e=Uc[t];e===void 0&&(e=new Int32Array(t),Uc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Mg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Sg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2fv(this.addr,t),Te(e,t)}}function yg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;n.uniform3fv(this.addr,t),Te(e,t)}}function Eg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4fv(this.addr,t),Te(e,t)}}function Tg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,i))return;Fc.set(i),n.uniformMatrix2fv(this.addr,!1,Fc),Te(e,i)}}function bg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,i))return;Nc.set(i),n.uniformMatrix3fv(this.addr,!1,Nc),Te(e,i)}}function wg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,i))return;Ic.set(i),n.uniformMatrix4fv(this.addr,!1,Ic),Te(e,i)}}function Ag(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Rg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2iv(this.addr,t),Te(e,t)}}function Cg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;n.uniform3iv(this.addr,t),Te(e,t)}}function Pg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4iv(this.addr,t),Te(e,t)}}function Lg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Dg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2uiv(this.addr,t),Te(e,t)}}function Ug(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;n.uniform3uiv(this.addr,t),Te(e,t)}}function Ig(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4uiv(this.addr,t),Te(e,t)}}function Ng(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);const r=this.type===n.SAMPLER_2D_SHADOW?Jh:Yh;e.setTexture2D(t||r,s)}function Fg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Zh,s)}function Og(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||jh,s)}function Bg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Kh,s)}function zg(n){switch(n){case 5126:return Mg;case 35664:return Sg;case 35665:return yg;case 35666:return Eg;case 35674:return Tg;case 35675:return bg;case 35676:return wg;case 5124:case 35670:return Ag;case 35667:case 35671:return Rg;case 35668:case 35672:return Cg;case 35669:case 35673:return Pg;case 5125:return Lg;case 36294:return Dg;case 36295:return Ug;case 36296:return Ig;case 35678:case 36198:case 36298:case 36306:case 35682:return Ng;case 35679:case 36299:case 36307:return Fg;case 35680:case 36300:case 36308:case 36293:return Og;case 36289:case 36303:case 36311:case 36292:return Bg}}function Gg(n,t){n.uniform1fv(this.addr,t)}function Hg(n,t){const e=Rs(t,this.size,2);n.uniform2fv(this.addr,e)}function Vg(n,t){const e=Rs(t,this.size,3);n.uniform3fv(this.addr,e)}function kg(n,t){const e=Rs(t,this.size,4);n.uniform4fv(this.addr,e)}function Wg(n,t){const e=Rs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Xg(n,t){const e=Rs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function qg(n,t){const e=Rs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Yg(n,t){n.uniform1iv(this.addr,t)}function Jg(n,t){n.uniform2iv(this.addr,t)}function Kg(n,t){n.uniform3iv(this.addr,t)}function Zg(n,t){n.uniform4iv(this.addr,t)}function jg(n,t){n.uniform1uiv(this.addr,t)}function $g(n,t){n.uniform2uiv(this.addr,t)}function Qg(n,t){n.uniform3uiv(this.addr,t)}function t0(n,t){n.uniform4uiv(this.addr,t)}function e0(n,t,e){const i=this.cache,s=t.length,r=Sa(e,s);Ee(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Yh,r[a])}function n0(n,t,e){const i=this.cache,s=t.length,r=Sa(e,s);Ee(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Zh,r[a])}function i0(n,t,e){const i=this.cache,s=t.length,r=Sa(e,s);Ee(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||jh,r[a])}function s0(n,t,e){const i=this.cache,s=t.length,r=Sa(e,s);Ee(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Kh,r[a])}function r0(n){switch(n){case 5126:return Gg;case 35664:return Hg;case 35665:return Vg;case 35666:return kg;case 35674:return Wg;case 35675:return Xg;case 35676:return qg;case 5124:case 35670:return Yg;case 35667:case 35671:return Jg;case 35668:case 35672:return Kg;case 35669:case 35673:return Zg;case 5125:return jg;case 36294:return $g;case 36295:return Qg;case 36296:return t0;case 35678:case 36198:case 36298:case 36306:case 35682:return e0;case 35679:case 36299:case 36307:return n0;case 35680:case 36300:case 36308:case 36293:return i0;case 36289:case 36303:case 36311:case 36292:return s0}}class a0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=zg(e.type)}}class o0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=r0(e.type)}}class l0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const ao=/(\w+)(\])?(\[|\.)?/g;function Oc(n,t){n.seq.push(t),n.map[t.id]=t}function c0(n,t,e){const i=n.name,s=i.length;for(ao.lastIndex=0;;){const r=ao.exec(i),a=ao.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Oc(e,c===void 0?new a0(o,n,t):new o0(o,n,t));break}else{let u=e.map[o];u===void 0&&(u=new l0(o),Oc(e,u)),e=u}}}class qr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);c0(r,a,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function Bc(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const h0=37297;let u0=0;function f0(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function d0(n){const t=te.getPrimaries(te.workingColorSpace),e=te.getPrimaries(n);let i;switch(t===e?i="":t===sa&&e===ia?i="LinearDisplayP3ToLinearSRGB":t===ia&&e===sa&&(i="LinearSRGBToLinearDisplayP3"),n){case kn:case xa:return[i,"LinearTransferOETF"];case Se:case zo:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function zc(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+f0(n.getShaderSource(t),a)}else return s}function p0(n,t){const e=d0(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function m0(n,t){let e;switch(t){case pf:e="Linear";break;case mf:e="Reinhard";break;case gf:e="OptimizedCineon";break;case Sh:e="ACESFilmic";break;case vf:e="AgX";break;case _f:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function g0(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(rs).join(`
`)}function _0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(rs).join(`
`)}function v0(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function x0(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function rs(n){return n!==""}function Gc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const M0=/^[ \t]*#include +<([\w\d./]+)>/gm;function bo(n){return n.replace(M0,y0)}const S0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function y0(n,t){let e=Wt[t];if(e===void 0){const i=S0.get(t);if(i!==void 0)e=Wt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return bo(e)}const E0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vc(n){return n.replace(E0,T0)}function T0(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function kc(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function b0(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===vh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===xh?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===In&&(t="SHADOWMAP_TYPE_VSM"),t}function w0(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case fs:case ds:t="ENVMAP_TYPE_CUBE";break;case va:t="ENVMAP_TYPE_CUBE_UV";break}return t}function A0(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ds:t="ENVMAP_MODE_REFRACTION";break}return t}function R0(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Mh:t="ENVMAP_BLENDING_MULTIPLY";break;case ff:t="ENVMAP_BLENDING_MIX";break;case df:t="ENVMAP_BLENDING_ADD";break}return t}function C0(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function P0(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=b0(e),c=w0(e),h=A0(e),u=R0(e),d=C0(e),p=e.isWebGL2?"":g0(e),_=_0(e),v=v0(r),m=s.createProgram();let f,y,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(rs).join(`
`),f.length>0&&(f+=`
`),y=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(rs).join(`
`),y.length>0&&(y+=`
`)):(f=[kc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rs).join(`
`),y=[p,kc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ti?"#define TONE_MAPPING":"",e.toneMapping!==ti?Wt.tonemapping_pars_fragment:"",e.toneMapping!==ti?m0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,p0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(rs).join(`
`)),a=bo(a),a=Gc(a,e),a=Hc(a,e),o=bo(o),o=Gc(o,e),o=Hc(o,e),a=Vc(a),o=Vc(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,f=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const T=S+f+a,C=S+y+o,A=Bc(s,s.VERTEX_SHADER,T),R=Bc(s,s.FRAGMENT_SHADER,C);s.attachShader(m,A),s.attachShader(m,R),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function I(W){if(n.debug.checkShaderErrors){const nt=s.getProgramInfoLog(m).trim(),D=s.getShaderInfoLog(A).trim(),O=s.getShaderInfoLog(R).trim();let q=!0,j=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,A,R);else{const J=zc(s,A,"vertex"),$=zc(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+nt+`
`+J+`
`+$)}else nt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",nt):(D===""||O==="")&&(j=!1);j&&(W.diagnostics={runnable:q,programLog:nt,vertexShader:{log:D,prefix:f},fragmentShader:{log:O,prefix:y}})}s.deleteShader(A),s.deleteShader(R),x=new qr(s,m),b=x0(s,m)}let x;this.getUniforms=function(){return x===void 0&&I(this),x};let b;this.getAttributes=function(){return b===void 0&&I(this),b};let H=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=s.getProgramParameter(m,h0)),H},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=u0++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=R,this}let L0=0;class D0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new U0(t),e.set(t,i)),i}}class U0{constructor(t){this.id=L0++,this.code=t,this.usedTimes=0}}function I0(n,t,e,i,s,r,a){const o=new Bh,l=new D0,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return x===0?"uv":`uv${x}`}function m(x,b,H,W,nt){const D=W.fog,O=nt.geometry,q=x.isMeshStandardMaterial?W.environment:null,j=(x.isMeshStandardMaterial?e:t).get(x.envMap||q),J=j&&j.mapping===va?j.image.height:null,$=_[x.type];x.precision!==null&&(p=s.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const Q=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,at=Q!==void 0?Q.length:0;let it=0;O.morphAttributes.position!==void 0&&(it=1),O.morphAttributes.normal!==void 0&&(it=2),O.morphAttributes.color!==void 0&&(it=3);let X,Z,mt,yt;if($){const Oe=Sn[$];X=Oe.vertexShader,Z=Oe.fragmentShader}else X=x.vertexShader,Z=x.fragmentShader,l.update(x),mt=l.getVertexShaderID(x),yt=l.getFragmentShaderID(x);const Et=n.getRenderTarget(),Nt=nt.isInstancedMesh===!0,Ot=nt.isBatchedMesh===!0,Pt=!!x.map,kt=!!x.matcap,F=!!j,De=!!x.aoMap,wt=!!x.lightMap,Ft=!!x.bumpMap,Mt=!!x.normalMap,se=!!x.displacementMap,Bt=!!x.emissiveMap,w=!!x.metalnessMap,M=!!x.roughnessMap,B=x.anisotropy>0,N=x.clearcoat>0,G=x.iridescence>0,Y=x.sheen>0,ht=x.transmission>0,et=B&&!!x.anisotropyMap,st=N&&!!x.clearcoatMap,xt=N&&!!x.clearcoatNormalMap,Tt=N&&!!x.clearcoatRoughnessMap,K=G&&!!x.iridescenceMap,Rt=G&&!!x.iridescenceThicknessMap,ft=Y&&!!x.sheenColorMap,gt=Y&&!!x.sheenRoughnessMap,rt=!!x.specularMap,ot=!!x.specularColorMap,St=!!x.specularIntensityMap,Zt=ht&&!!x.transmissionMap,ee=ht&&!!x.thicknessMap,Yt=!!x.gradientMap,lt=!!x.alphaMap,L=x.alphaTest>0,dt=!!x.alphaHash,pt=!!x.extensions,Dt=!!O.attributes.uv1,Ct=!!O.attributes.uv2,re=!!O.attributes.uv3;let ae=ti;return x.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(ae=n.toneMapping),{isWebGL2:h,shaderID:$,shaderType:x.type,shaderName:x.name,vertexShader:X,fragmentShader:Z,defines:x.defines,customVertexShaderID:mt,customFragmentShaderID:yt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:Ot,instancing:Nt,instancingColor:Nt&&nt.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Et===null?n.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:kn,map:Pt,matcap:kt,envMap:F,envMapMode:F&&j.mapping,envMapCubeUVHeight:J,aoMap:De,lightMap:wt,bumpMap:Ft,normalMap:Mt,displacementMap:d&&se,emissiveMap:Bt,normalMapObjectSpace:Mt&&x.normalMapType===Pf,normalMapTangentSpace:Mt&&x.normalMapType===Lh,metalnessMap:w,roughnessMap:M,anisotropy:B,anisotropyMap:et,clearcoat:N,clearcoatMap:st,clearcoatNormalMap:xt,clearcoatRoughnessMap:Tt,iridescence:G,iridescenceMap:K,iridescenceThicknessMap:Rt,sheen:Y,sheenColorMap:ft,sheenRoughnessMap:gt,specularMap:rt,specularColorMap:ot,specularIntensityMap:St,transmission:ht,transmissionMap:Zt,thicknessMap:ee,gradientMap:Yt,opaque:x.transparent===!1&&x.blending===ls,alphaMap:lt,alphaTest:L,alphaHash:dt,combine:x.combine,mapUv:Pt&&v(x.map.channel),aoMapUv:De&&v(x.aoMap.channel),lightMapUv:wt&&v(x.lightMap.channel),bumpMapUv:Ft&&v(x.bumpMap.channel),normalMapUv:Mt&&v(x.normalMap.channel),displacementMapUv:se&&v(x.displacementMap.channel),emissiveMapUv:Bt&&v(x.emissiveMap.channel),metalnessMapUv:w&&v(x.metalnessMap.channel),roughnessMapUv:M&&v(x.roughnessMap.channel),anisotropyMapUv:et&&v(x.anisotropyMap.channel),clearcoatMapUv:st&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:xt&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:gt&&v(x.sheenRoughnessMap.channel),specularMapUv:rt&&v(x.specularMap.channel),specularColorMapUv:ot&&v(x.specularColorMap.channel),specularIntensityMapUv:St&&v(x.specularIntensityMap.channel),transmissionMapUv:Zt&&v(x.transmissionMap.channel),thicknessMapUv:ee&&v(x.thicknessMap.channel),alphaMapUv:lt&&v(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Mt||B),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Dt,vertexUv2s:Ct,vertexUv3s:re,pointsUvs:nt.isPoints===!0&&!!O.attributes.uv&&(Pt||lt),fog:!!D,useFog:x.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:nt.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:it,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:ae,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Pt&&x.map.isVideoTexture===!0&&te.getTransfer(x.map.colorSpace)===le,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ge,flipSided:x.side===We,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:pt&&x.extensions.derivatives===!0,extensionFragDepth:pt&&x.extensions.fragDepth===!0,extensionDrawBuffers:pt&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:pt&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pt&&x.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function f(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const H in x.defines)b.push(H),b.push(x.defines[H]);return x.isRawShaderMaterial===!1&&(y(b,x),S(b,x),b.push(n.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function y(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function S(x,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),x.push(o.mask)}function T(x){const b=_[x.type];let H;if(b){const W=Sn[b];H=la.clone(W.uniforms)}else H=x.uniforms;return H}function C(x,b){let H;for(let W=0,nt=c.length;W<nt;W++){const D=c[W];if(D.cacheKey===b){H=D,++H.usedTimes;break}}return H===void 0&&(H=new P0(n,b,x,r),c.push(H)),H}function A(x){if(--x.usedTimes===0){const b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),x.destroy()}}function R(x){l.remove(x)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:T,acquireProgram:C,releaseProgram:A,releaseShaderCache:R,programs:c,dispose:I}}function N0(){let n=new WeakMap;function t(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function e(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function F0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Wc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Xc(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u,d,p,_,v,m){let f=n[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:_,renderOrder:u.renderOrder,z:v,group:m},n[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=u.renderOrder,f.z=v,f.group=m),t++,f}function o(u,d,p,_,v,m){const f=a(u,d,p,_,v,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,_,v,m){const f=a(u,d,p,_,v,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||F0),i.length>1&&i.sort(d||Wc),s.length>1&&s.sort(d||Wc)}function h(){for(let u=t,d=n.length;u<d;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function O0(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new Xc,n.set(i,[a])):s>=r.length?(a=new Xc,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function B0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new At};break;case"SpotLight":e={position:new P,direction:new P,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new At,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new At,groundColor:new At};break;case"RectAreaLight":e={color:new At,position:new P,halfWidth:new P,halfHeight:new P};break}return n[t.id]=e,e}}}function z0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let G0=0;function H0(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function V0(n,t){const e=new B0,i=z0(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new P);const r=new P,a=new he,o=new he;function l(h,u){let d=0,p=0,_=0;for(let W=0;W<9;W++)s.probe[W].set(0,0,0);let v=0,m=0,f=0,y=0,S=0,T=0,C=0,A=0,R=0,I=0,x=0;h.sort(H0);const b=u===!0?Math.PI:1;for(let W=0,nt=h.length;W<nt;W++){const D=h[W],O=D.color,q=D.intensity,j=D.distance,J=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=O.r*q*b,p+=O.g*q*b,_+=O.b*q*b;else if(D.isLightProbe){for(let $=0;$<9;$++)s.probe[$].addScaledVector(D.sh.coefficients[$],q);x++}else if(D.isDirectionalLight){const $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity*b),D.castShadow){const Q=D.shadow,at=i.get(D);at.shadowBias=Q.bias,at.shadowNormalBias=Q.normalBias,at.shadowRadius=Q.radius,at.shadowMapSize=Q.mapSize,s.directionalShadow[v]=at,s.directionalShadowMap[v]=J,s.directionalShadowMatrix[v]=D.shadow.matrix,T++}s.directional[v]=$,v++}else if(D.isSpotLight){const $=e.get(D);$.position.setFromMatrixPosition(D.matrixWorld),$.color.copy(O).multiplyScalar(q*b),$.distance=j,$.coneCos=Math.cos(D.angle),$.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),$.decay=D.decay,s.spot[f]=$;const Q=D.shadow;if(D.map&&(s.spotLightMap[R]=D.map,R++,Q.updateMatrices(D),D.castShadow&&I++),s.spotLightMatrix[f]=Q.matrix,D.castShadow){const at=i.get(D);at.shadowBias=Q.bias,at.shadowNormalBias=Q.normalBias,at.shadowRadius=Q.radius,at.shadowMapSize=Q.mapSize,s.spotShadow[f]=at,s.spotShadowMap[f]=J,A++}f++}else if(D.isRectAreaLight){const $=e.get(D);$.color.copy(O).multiplyScalar(q),$.halfWidth.set(D.width*.5,0,0),$.halfHeight.set(0,D.height*.5,0),s.rectArea[y]=$,y++}else if(D.isPointLight){const $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity*b),$.distance=D.distance,$.decay=D.decay,D.castShadow){const Q=D.shadow,at=i.get(D);at.shadowBias=Q.bias,at.shadowNormalBias=Q.normalBias,at.shadowRadius=Q.radius,at.shadowMapSize=Q.mapSize,at.shadowCameraNear=Q.camera.near,at.shadowCameraFar=Q.camera.far,s.pointShadow[m]=at,s.pointShadowMap[m]=J,s.pointShadowMatrix[m]=D.shadow.matrix,C++}s.point[m]=$,m++}else if(D.isHemisphereLight){const $=e.get(D);$.skyColor.copy(D.color).multiplyScalar(q*b),$.groundColor.copy(D.groundColor).multiplyScalar(q*b),s.hemi[S]=$,S++}}y>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ct.LTC_FLOAT_1,s.rectAreaLTC2=ct.LTC_FLOAT_2):(s.rectAreaLTC1=ct.LTC_HALF_1,s.rectAreaLTC2=ct.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ct.LTC_FLOAT_1,s.rectAreaLTC2=ct.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ct.LTC_HALF_1,s.rectAreaLTC2=ct.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=_;const H=s.hash;(H.directionalLength!==v||H.pointLength!==m||H.spotLength!==f||H.rectAreaLength!==y||H.hemiLength!==S||H.numDirectionalShadows!==T||H.numPointShadows!==C||H.numSpotShadows!==A||H.numSpotMaps!==R||H.numLightProbes!==x)&&(s.directional.length=v,s.spot.length=f,s.rectArea.length=y,s.point.length=m,s.hemi.length=S,s.directionalShadow.length=T,s.directionalShadowMap.length=T,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=T,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=A+R-I,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=x,H.directionalLength=v,H.pointLength=m,H.spotLength=f,H.rectAreaLength=y,H.hemiLength=S,H.numDirectionalShadows=T,H.numPointShadows=C,H.numSpotShadows=A,H.numSpotMaps=R,H.numLightProbes=x,s.version=G0++)}function c(h,u){let d=0,p=0,_=0,v=0,m=0;const f=u.matrixWorldInverse;for(let y=0,S=h.length;y<S;y++){const T=h[y];if(T.isDirectionalLight){const C=s.directional[d];C.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(f),d++}else if(T.isSpotLight){const C=s.spot[_];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(f),C.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(f),_++}else if(T.isRectAreaLight){const C=s.rectArea[v];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(f),o.identity(),a.copy(T.matrixWorld),a.premultiply(f),o.extractRotation(a),C.halfWidth.set(T.width*.5,0,0),C.halfHeight.set(0,T.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),v++}else if(T.isPointLight){const C=s.point[p];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(f),p++}else if(T.isHemisphereLight){const C=s.hemi[m];C.direction.setFromMatrixPosition(T.matrixWorld),C.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:s}}function qc(n,t){const e=new V0(n,t),i=[],s=[];function r(){i.length=0,s.length=0}function a(u){i.push(u)}function o(u){s.push(u)}function l(u){e.setup(i,u)}function c(u){e.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function k0(n,t){let e=new WeakMap;function i(r,a=0){const o=e.get(r);let l;return o===void 0?(l=new qc(n,t),e.set(r,[l])):a>=o.length?(l=new qc(n,t),o.push(l)):l=o[a],l}function s(){e=new WeakMap}return{get:i,dispose:s}}class W0 extends As{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class X0 extends As{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const q0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Y0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function J0(n,t,e){let i=new Ho;const s=new ut,r=new ut,a=new Le,o=new W0({depthPacking:Cf}),l=new X0,c={},h=e.maxTextureSize,u={[ri]:We,[We]:ri,[ge]:ge},d=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:q0,fragmentShader:Y0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new pe;_.setAttribute("position",new _e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new vt(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vh;let f=this.type;this.render=function(A,R,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const x=n.getRenderTarget(),b=n.getActiveCubeFace(),H=n.getActiveMipmapLevel(),W=n.state;W.setBlending(Gn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const nt=f!==In&&this.type===In,D=f===In&&this.type!==In;for(let O=0,q=A.length;O<q;O++){const j=A[O],J=j.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);const $=J.getFrameExtents();if(s.multiply($),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,J.mapSize.y=r.y)),J.map===null||nt===!0||D===!0){const at=this.type!==In?{minFilter:Ve,magFilter:Ve}:{};J.map!==null&&J.map.dispose(),J.map=new _n(s.x,s.y,at),J.map.texture.name=j.name+".shadowMap",J.camera.updateProjectionMatrix()}n.setRenderTarget(J.map),n.clear();const Q=J.getViewportCount();for(let at=0;at<Q;at++){const it=J.getViewport(at);a.set(r.x*it.x,r.y*it.y,r.x*it.z,r.y*it.w),W.viewport(a),J.updateMatrices(j,at),i=J.getFrustum(),T(R,I,J.camera,j,this.type)}J.isPointLightShadow!==!0&&this.type===In&&y(J,I),J.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(x,b,H)};function y(A,R){const I=t.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new _n(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(R,null,I,d,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(R,null,I,p,v,null)}function S(A,R,I,x){let b=null;const H=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(H!==void 0)b=H;else if(b=I.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const W=b.uuid,nt=R.uuid;let D=c[W];D===void 0&&(D={},c[W]=D);let O=D[nt];O===void 0&&(O=b.clone(),D[nt]=O,R.addEventListener("dispose",C)),b=O}if(b.visible=R.visible,b.wireframe=R.wireframe,x===In?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:u[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const W=n.properties.get(b);W.light=I}return b}function T(A,R,I,x,b){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===In)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const nt=t.update(A),D=A.material;if(Array.isArray(D)){const O=nt.groups;for(let q=0,j=O.length;q<j;q++){const J=O[q],$=D[J.materialIndex];if($&&$.visible){const Q=S(A,$,x,b);A.onBeforeShadow(n,A,R,I,nt,Q,J),n.renderBufferDirect(I,null,nt,Q,A,J),A.onAfterShadow(n,A,R,I,nt,Q,J)}}}else if(D.visible){const O=S(A,D,x,b);A.onBeforeShadow(n,A,R,I,nt,O,null),n.renderBufferDirect(I,null,nt,O,A,null),A.onAfterShadow(n,A,R,I,nt,O,null)}}const W=A.children;for(let nt=0,D=W.length;nt<D;nt++)T(W[nt],R,I,x,b)}function C(A){A.target.removeEventListener("dispose",C);for(const I in c){const x=c[I],b=A.target.uuid;b in x&&(x[b].dispose(),delete x[b])}}}function K0(n,t,e){const i=e.isWebGL2;function s(){let L=!1;const dt=new Le;let pt=null;const Dt=new Le(0,0,0,0);return{setMask:function(Ct){pt!==Ct&&!L&&(n.colorMask(Ct,Ct,Ct,Ct),pt=Ct)},setLocked:function(Ct){L=Ct},setClear:function(Ct,re,ae,be,Oe){Oe===!0&&(Ct*=be,re*=be,ae*=be),dt.set(Ct,re,ae,be),Dt.equals(dt)===!1&&(n.clearColor(Ct,re,ae,be),Dt.copy(dt))},reset:function(){L=!1,pt=null,Dt.set(-1,0,0,0)}}}function r(){let L=!1,dt=null,pt=null,Dt=null;return{setTest:function(Ct){Ct?Ot(n.DEPTH_TEST):Pt(n.DEPTH_TEST)},setMask:function(Ct){dt!==Ct&&!L&&(n.depthMask(Ct),dt=Ct)},setFunc:function(Ct){if(pt!==Ct){switch(Ct){case rf:n.depthFunc(n.NEVER);break;case af:n.depthFunc(n.ALWAYS);break;case of:n.depthFunc(n.LESS);break;case ea:n.depthFunc(n.LEQUAL);break;case lf:n.depthFunc(n.EQUAL);break;case cf:n.depthFunc(n.GEQUAL);break;case hf:n.depthFunc(n.GREATER);break;case uf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pt=Ct}},setLocked:function(Ct){L=Ct},setClear:function(Ct){Dt!==Ct&&(n.clearDepth(Ct),Dt=Ct)},reset:function(){L=!1,dt=null,pt=null,Dt=null}}}function a(){let L=!1,dt=null,pt=null,Dt=null,Ct=null,re=null,ae=null,be=null,Oe=null;return{setTest:function(oe){L||(oe?Ot(n.STENCIL_TEST):Pt(n.STENCIL_TEST))},setMask:function(oe){dt!==oe&&!L&&(n.stencilMask(oe),dt=oe)},setFunc:function(oe,Be,Mn){(pt!==oe||Dt!==Be||Ct!==Mn)&&(n.stencilFunc(oe,Be,Mn),pt=oe,Dt=Be,Ct=Mn)},setOp:function(oe,Be,Mn){(re!==oe||ae!==Be||be!==Mn)&&(n.stencilOp(oe,Be,Mn),re=oe,ae=Be,be=Mn)},setLocked:function(oe){L=oe},setClear:function(oe){Oe!==oe&&(n.clearStencil(oe),Oe=oe)},reset:function(){L=!1,dt=null,pt=null,Dt=null,Ct=null,re=null,ae=null,be=null,Oe=null}}}const o=new s,l=new r,c=new a,h=new WeakMap,u=new WeakMap;let d={},p={},_=new WeakMap,v=[],m=null,f=!1,y=null,S=null,T=null,C=null,A=null,R=null,I=null,x=new At(0,0,0),b=0,H=!1,W=null,nt=null,D=null,O=null,q=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,$=0;const Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(Q)[1]),J=$>=1):Q.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),J=$>=2);let at=null,it={};const X=n.getParameter(n.SCISSOR_BOX),Z=n.getParameter(n.VIEWPORT),mt=new Le().fromArray(X),yt=new Le().fromArray(Z);function Et(L,dt,pt,Dt){const Ct=new Uint8Array(4),re=n.createTexture();n.bindTexture(L,re),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ae=0;ae<pt;ae++)i&&(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)?n.texImage3D(dt,0,n.RGBA,1,1,Dt,0,n.RGBA,n.UNSIGNED_BYTE,Ct):n.texImage2D(dt+ae,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ct);return re}const Nt={};Nt[n.TEXTURE_2D]=Et(n.TEXTURE_2D,n.TEXTURE_2D,1),Nt[n.TEXTURE_CUBE_MAP]=Et(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Nt[n.TEXTURE_2D_ARRAY]=Et(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Nt[n.TEXTURE_3D]=Et(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ot(n.DEPTH_TEST),l.setFunc(ea),Bt(!1),w(Rl),Ot(n.CULL_FACE),Mt(Gn);function Ot(L){d[L]!==!0&&(n.enable(L),d[L]=!0)}function Pt(L){d[L]!==!1&&(n.disable(L),d[L]=!1)}function kt(L,dt){return p[L]!==dt?(n.bindFramebuffer(L,dt),p[L]=dt,i&&(L===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=dt),L===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=dt)),!0):!1}function F(L,dt){let pt=v,Dt=!1;if(L)if(pt=_.get(dt),pt===void 0&&(pt=[],_.set(dt,pt)),L.isWebGLMultipleRenderTargets){const Ct=L.texture;if(pt.length!==Ct.length||pt[0]!==n.COLOR_ATTACHMENT0){for(let re=0,ae=Ct.length;re<ae;re++)pt[re]=n.COLOR_ATTACHMENT0+re;pt.length=Ct.length,Dt=!0}}else pt[0]!==n.COLOR_ATTACHMENT0&&(pt[0]=n.COLOR_ATTACHMENT0,Dt=!0);else pt[0]!==n.BACK&&(pt[0]=n.BACK,Dt=!0);Dt&&(e.isWebGL2?n.drawBuffers(pt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(pt))}function De(L){return m!==L?(n.useProgram(L),m=L,!0):!1}const wt={[Si]:n.FUNC_ADD,[ku]:n.FUNC_SUBTRACT,[Wu]:n.FUNC_REVERSE_SUBTRACT};if(i)wt[Ll]=n.MIN,wt[Dl]=n.MAX;else{const L=t.get("EXT_blend_minmax");L!==null&&(wt[Ll]=L.MIN_EXT,wt[Dl]=L.MAX_EXT)}const Ft={[Xu]:n.ZERO,[qu]:n.ONE,[Yu]:n.SRC_COLOR,[vo]:n.SRC_ALPHA,[Qu]:n.SRC_ALPHA_SATURATE,[ju]:n.DST_COLOR,[Ku]:n.DST_ALPHA,[Ju]:n.ONE_MINUS_SRC_COLOR,[xo]:n.ONE_MINUS_SRC_ALPHA,[$u]:n.ONE_MINUS_DST_COLOR,[Zu]:n.ONE_MINUS_DST_ALPHA,[tf]:n.CONSTANT_COLOR,[ef]:n.ONE_MINUS_CONSTANT_COLOR,[nf]:n.CONSTANT_ALPHA,[sf]:n.ONE_MINUS_CONSTANT_ALPHA};function Mt(L,dt,pt,Dt,Ct,re,ae,be,Oe,oe){if(L===Gn){f===!0&&(Pt(n.BLEND),f=!1);return}if(f===!1&&(Ot(n.BLEND),f=!0),L!==Vu){if(L!==y||oe!==H){if((S!==Si||A!==Si)&&(n.blendEquation(n.FUNC_ADD),S=Si,A=Si),oe)switch(L){case ls:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case pn:n.blendFunc(n.ONE,n.ONE);break;case Cl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Pl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ls:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case pn:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Cl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Pl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}T=null,C=null,R=null,I=null,x.set(0,0,0),b=0,y=L,H=oe}return}Ct=Ct||dt,re=re||pt,ae=ae||Dt,(dt!==S||Ct!==A)&&(n.blendEquationSeparate(wt[dt],wt[Ct]),S=dt,A=Ct),(pt!==T||Dt!==C||re!==R||ae!==I)&&(n.blendFuncSeparate(Ft[pt],Ft[Dt],Ft[re],Ft[ae]),T=pt,C=Dt,R=re,I=ae),(be.equals(x)===!1||Oe!==b)&&(n.blendColor(be.r,be.g,be.b,Oe),x.copy(be),b=Oe),y=L,H=!1}function se(L,dt){L.side===ge?Pt(n.CULL_FACE):Ot(n.CULL_FACE);let pt=L.side===We;dt&&(pt=!pt),Bt(pt),L.blending===ls&&L.transparent===!1?Mt(Gn):Mt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const Dt=L.stencilWrite;c.setTest(Dt),Dt&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),B(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ot(n.SAMPLE_ALPHA_TO_COVERAGE):Pt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(L){W!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),W=L)}function w(L){L!==Gu?(Ot(n.CULL_FACE),L!==nt&&(L===Rl?n.cullFace(n.BACK):L===Hu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pt(n.CULL_FACE),nt=L}function M(L){L!==D&&(J&&n.lineWidth(L),D=L)}function B(L,dt,pt){L?(Ot(n.POLYGON_OFFSET_FILL),(O!==dt||q!==pt)&&(n.polygonOffset(dt,pt),O=dt,q=pt)):Pt(n.POLYGON_OFFSET_FILL)}function N(L){L?Ot(n.SCISSOR_TEST):Pt(n.SCISSOR_TEST)}function G(L){L===void 0&&(L=n.TEXTURE0+j-1),at!==L&&(n.activeTexture(L),at=L)}function Y(L,dt,pt){pt===void 0&&(at===null?pt=n.TEXTURE0+j-1:pt=at);let Dt=it[pt];Dt===void 0&&(Dt={type:void 0,texture:void 0},it[pt]=Dt),(Dt.type!==L||Dt.texture!==dt)&&(at!==pt&&(n.activeTexture(pt),at=pt),n.bindTexture(L,dt||Nt[L]),Dt.type=L,Dt.texture=dt)}function ht(){const L=it[at];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function et(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function st(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Tt(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Rt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function gt(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function rt(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function St(L){mt.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),mt.copy(L))}function Zt(L){yt.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),yt.copy(L))}function ee(L,dt){let pt=u.get(dt);pt===void 0&&(pt=new WeakMap,u.set(dt,pt));let Dt=pt.get(L);Dt===void 0&&(Dt=n.getUniformBlockIndex(dt,L.name),pt.set(L,Dt))}function Yt(L,dt){const Dt=u.get(dt).get(L);h.get(dt)!==Dt&&(n.uniformBlockBinding(dt,Dt,L.__bindingPointIndex),h.set(dt,Dt))}function lt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},at=null,it={},p={},_=new WeakMap,v=[],m=null,f=!1,y=null,S=null,T=null,C=null,A=null,R=null,I=null,x=new At(0,0,0),b=0,H=!1,W=null,nt=null,D=null,O=null,q=null,mt.set(0,0,n.canvas.width,n.canvas.height),yt.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ot,disable:Pt,bindFramebuffer:kt,drawBuffers:F,useProgram:De,setBlending:Mt,setMaterial:se,setFlipSided:Bt,setCullFace:w,setLineWidth:M,setPolygonOffset:B,setScissorTest:N,activeTexture:G,bindTexture:Y,unbindTexture:ht,compressedTexImage2D:et,compressedTexImage3D:st,texImage2D:rt,texImage3D:ot,updateUBOMapping:ee,uniformBlockBinding:Yt,texStorage2D:ft,texStorage3D:gt,texSubImage2D:xt,texSubImage3D:Tt,compressedTexSubImage2D:K,compressedTexSubImage3D:Rt,scissor:St,viewport:Zt,reset:lt}}function Z0(n,t,e,i,s,r,a){const o=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,M){return p?new OffscreenCanvas(w,M):oa("canvas")}function v(w,M,B,N){let G=1;if((w.width>N||w.height>N)&&(G=N/Math.max(w.width,w.height)),G<1||M===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const Y=M?aa:Math.floor,ht=Y(G*w.width),et=Y(G*w.height);u===void 0&&(u=_(ht,et));const st=B?_(ht,et):u;return st.width=ht,st.height=et,st.getContext("2d").drawImage(w,0,0,ht,et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+ht+"x"+et+")."),st}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function m(w){return To(w.width)&&To(w.height)}function f(w){return o?!1:w.wrapS!==mn||w.wrapT!==mn||w.minFilter!==Ve&&w.minFilter!==rn}function y(w,M){return w.generateMipmaps&&M&&w.minFilter!==Ve&&w.minFilter!==rn}function S(w){n.generateMipmap(w)}function T(w,M,B,N,G=!1){if(o===!1)return M;if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Y=M;if(M===n.RED&&(B===n.FLOAT&&(Y=n.R32F),B===n.HALF_FLOAT&&(Y=n.R16F),B===n.UNSIGNED_BYTE&&(Y=n.R8)),M===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(Y=n.R8UI),B===n.UNSIGNED_SHORT&&(Y=n.R16UI),B===n.UNSIGNED_INT&&(Y=n.R32UI),B===n.BYTE&&(Y=n.R8I),B===n.SHORT&&(Y=n.R16I),B===n.INT&&(Y=n.R32I)),M===n.RG&&(B===n.FLOAT&&(Y=n.RG32F),B===n.HALF_FLOAT&&(Y=n.RG16F),B===n.UNSIGNED_BYTE&&(Y=n.RG8)),M===n.RGBA){const ht=G?na:te.getTransfer(N);B===n.FLOAT&&(Y=n.RGBA32F),B===n.HALF_FLOAT&&(Y=n.RGBA16F),B===n.UNSIGNED_BYTE&&(Y=ht===le?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function C(w,M,B){return y(w,B)===!0||w.isFramebufferTexture&&w.minFilter!==Ve&&w.minFilter!==rn?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function A(w){return w===Ve||w===Ul||w===Ua?n.NEAREST:n.LINEAR}function R(w){const M=w.target;M.removeEventListener("dispose",R),x(M),M.isVideoTexture&&h.delete(M)}function I(w){const M=w.target;M.removeEventListener("dispose",I),H(M)}function x(w){const M=i.get(w);if(M.__webglInit===void 0)return;const B=w.source,N=d.get(B);if(N){const G=N[M.__cacheKey];G.usedTimes--,G.usedTimes===0&&b(w),Object.keys(N).length===0&&d.delete(B)}i.remove(w)}function b(w){const M=i.get(w);n.deleteTexture(M.__webglTexture);const B=w.source,N=d.get(B);delete N[M.__cacheKey],a.memory.textures--}function H(w){const M=w.texture,B=i.get(w),N=i.get(M);if(N.__webglTexture!==void 0&&(n.deleteTexture(N.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(B.__webglFramebuffer[G]))for(let Y=0;Y<B.__webglFramebuffer[G].length;Y++)n.deleteFramebuffer(B.__webglFramebuffer[G][Y]);else n.deleteFramebuffer(B.__webglFramebuffer[G]);B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer[G])}else{if(Array.isArray(B.__webglFramebuffer))for(let G=0;G<B.__webglFramebuffer.length;G++)n.deleteFramebuffer(B.__webglFramebuffer[G]);else n.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&n.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let G=0;G<B.__webglColorRenderbuffer.length;G++)B.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(B.__webglColorRenderbuffer[G]);B.__webglDepthRenderbuffer&&n.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let G=0,Y=M.length;G<Y;G++){const ht=i.get(M[G]);ht.__webglTexture&&(n.deleteTexture(ht.__webglTexture),a.memory.textures--),i.remove(M[G])}i.remove(M),i.remove(w)}let W=0;function nt(){W=0}function D(){const w=W;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),W+=1,w}function O(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function q(w,M){const B=i.get(w);if(w.isVideoTexture&&se(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){const N=w.image;if(N===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(N.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{mt(B,w,M);return}}e.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+M)}function j(w,M){const B=i.get(w);if(w.version>0&&B.__version!==w.version){mt(B,w,M);return}e.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+M)}function J(w,M){const B=i.get(w);if(w.version>0&&B.__version!==w.version){mt(B,w,M);return}e.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+M)}function $(w,M){const B=i.get(w);if(w.version>0&&B.__version!==w.version){yt(B,w,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+M)}const Q={[Ui]:n.REPEAT,[mn]:n.CLAMP_TO_EDGE,[yo]:n.MIRRORED_REPEAT},at={[Ve]:n.NEAREST,[Ul]:n.NEAREST_MIPMAP_NEAREST,[Ua]:n.NEAREST_MIPMAP_LINEAR,[rn]:n.LINEAR,[xf]:n.LINEAR_MIPMAP_NEAREST,[Ys]:n.LINEAR_MIPMAP_LINEAR},it={[Lf]:n.NEVER,[Of]:n.ALWAYS,[Df]:n.LESS,[Dh]:n.LEQUAL,[Uf]:n.EQUAL,[Ff]:n.GEQUAL,[If]:n.GREATER,[Nf]:n.NOTEQUAL};function X(w,M,B){if(B?(n.texParameteri(w,n.TEXTURE_WRAP_S,Q[M.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,Q[M.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,Q[M.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,at[M.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,at[M.minFilter])):(n.texParameteri(w,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(w,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(M.wrapS!==mn||M.wrapT!==mn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(w,n.TEXTURE_MAG_FILTER,A(M.magFilter)),n.texParameteri(w,n.TEXTURE_MIN_FILTER,A(M.minFilter)),M.minFilter!==Ve&&M.minFilter!==rn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,it[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const N=t.get("EXT_texture_filter_anisotropic");if(M.magFilter===Ve||M.minFilter!==Ua&&M.minFilter!==Ys||M.type===$n&&t.has("OES_texture_float_linear")===!1||o===!1&&M.type===Hn&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(n.texParameterf(w,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function Z(w,M){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",R));const N=M.source;let G=d.get(N);G===void 0&&(G={},d.set(N,G));const Y=O(M);if(Y!==w.__cacheKey){G[Y]===void 0&&(G[Y]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),G[Y].usedTimes++;const ht=G[w.__cacheKey];ht!==void 0&&(G[w.__cacheKey].usedTimes--,ht.usedTimes===0&&b(M)),w.__cacheKey=Y,w.__webglTexture=G[Y].texture}return B}function mt(w,M,B){let N=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(N=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(N=n.TEXTURE_3D);const G=Z(w,M),Y=M.source;e.bindTexture(N,w.__webglTexture,n.TEXTURE0+B);const ht=i.get(Y);if(Y.version!==ht.__version||G===!0){e.activeTexture(n.TEXTURE0+B);const et=te.getPrimaries(te.workingColorSpace),st=M.colorSpace===on?null:te.getPrimaries(M.colorSpace),xt=M.colorSpace===on||et===st?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const Tt=f(M)&&m(M.image)===!1;let K=v(M.image,Tt,!1,s.maxTextureSize);K=Bt(M,K);const Rt=m(K)||o,ft=r.convert(M.format,M.colorSpace);let gt=r.convert(M.type),rt=T(M.internalFormat,ft,gt,M.colorSpace,M.isVideoTexture);X(N,M,Rt);let ot;const St=M.mipmaps,Zt=o&&M.isVideoTexture!==!0&&rt!==Ch,ee=ht.__version===void 0||G===!0,Yt=C(M,K,Rt);if(M.isDepthTexture)rt=n.DEPTH_COMPONENT,o?M.type===$n?rt=n.DEPTH_COMPONENT32F:M.type===jn?rt=n.DEPTH_COMPONENT24:M.type===Ri?rt=n.DEPTH24_STENCIL8:rt=n.DEPTH_COMPONENT16:M.type===$n&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Ci&&rt===n.DEPTH_COMPONENT&&M.type!==Bo&&M.type!==jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=jn,gt=r.convert(M.type)),M.format===ps&&rt===n.DEPTH_COMPONENT&&(rt=n.DEPTH_STENCIL,M.type!==Ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Ri,gt=r.convert(M.type))),ee&&(Zt?e.texStorage2D(n.TEXTURE_2D,1,rt,K.width,K.height):e.texImage2D(n.TEXTURE_2D,0,rt,K.width,K.height,0,ft,gt,null));else if(M.isDataTexture)if(St.length>0&&Rt){Zt&&ee&&e.texStorage2D(n.TEXTURE_2D,Yt,rt,St[0].width,St[0].height);for(let lt=0,L=St.length;lt<L;lt++)ot=St[lt],Zt?e.texSubImage2D(n.TEXTURE_2D,lt,0,0,ot.width,ot.height,ft,gt,ot.data):e.texImage2D(n.TEXTURE_2D,lt,rt,ot.width,ot.height,0,ft,gt,ot.data);M.generateMipmaps=!1}else Zt?(ee&&e.texStorage2D(n.TEXTURE_2D,Yt,rt,K.width,K.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,K.width,K.height,ft,gt,K.data)):e.texImage2D(n.TEXTURE_2D,0,rt,K.width,K.height,0,ft,gt,K.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Zt&&ee&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Yt,rt,St[0].width,St[0].height,K.depth);for(let lt=0,L=St.length;lt<L;lt++)ot=St[lt],M.format!==gn?ft!==null?Zt?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,0,ot.width,ot.height,K.depth,ft,ot.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,lt,rt,ot.width,ot.height,K.depth,0,ot.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?e.texSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,0,ot.width,ot.height,K.depth,ft,gt,ot.data):e.texImage3D(n.TEXTURE_2D_ARRAY,lt,rt,ot.width,ot.height,K.depth,0,ft,gt,ot.data)}else{Zt&&ee&&e.texStorage2D(n.TEXTURE_2D,Yt,rt,St[0].width,St[0].height);for(let lt=0,L=St.length;lt<L;lt++)ot=St[lt],M.format!==gn?ft!==null?Zt?e.compressedTexSubImage2D(n.TEXTURE_2D,lt,0,0,ot.width,ot.height,ft,ot.data):e.compressedTexImage2D(n.TEXTURE_2D,lt,rt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?e.texSubImage2D(n.TEXTURE_2D,lt,0,0,ot.width,ot.height,ft,gt,ot.data):e.texImage2D(n.TEXTURE_2D,lt,rt,ot.width,ot.height,0,ft,gt,ot.data)}else if(M.isDataArrayTexture)Zt?(ee&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Yt,rt,K.width,K.height,K.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ft,gt,K.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,rt,K.width,K.height,K.depth,0,ft,gt,K.data);else if(M.isData3DTexture)Zt?(ee&&e.texStorage3D(n.TEXTURE_3D,Yt,rt,K.width,K.height,K.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ft,gt,K.data)):e.texImage3D(n.TEXTURE_3D,0,rt,K.width,K.height,K.depth,0,ft,gt,K.data);else if(M.isFramebufferTexture){if(ee)if(Zt)e.texStorage2D(n.TEXTURE_2D,Yt,rt,K.width,K.height);else{let lt=K.width,L=K.height;for(let dt=0;dt<Yt;dt++)e.texImage2D(n.TEXTURE_2D,dt,rt,lt,L,0,ft,gt,null),lt>>=1,L>>=1}}else if(St.length>0&&Rt){Zt&&ee&&e.texStorage2D(n.TEXTURE_2D,Yt,rt,St[0].width,St[0].height);for(let lt=0,L=St.length;lt<L;lt++)ot=St[lt],Zt?e.texSubImage2D(n.TEXTURE_2D,lt,0,0,ft,gt,ot):e.texImage2D(n.TEXTURE_2D,lt,rt,ft,gt,ot);M.generateMipmaps=!1}else Zt?(ee&&e.texStorage2D(n.TEXTURE_2D,Yt,rt,K.width,K.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,ft,gt,K)):e.texImage2D(n.TEXTURE_2D,0,rt,ft,gt,K);y(M,Rt)&&S(N),ht.__version=Y.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function yt(w,M,B){if(M.image.length!==6)return;const N=Z(w,M),G=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+B);const Y=i.get(G);if(G.version!==Y.__version||N===!0){e.activeTexture(n.TEXTURE0+B);const ht=te.getPrimaries(te.workingColorSpace),et=M.colorSpace===on?null:te.getPrimaries(M.colorSpace),st=M.colorSpace===on||ht===et?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);const xt=M.isCompressedTexture||M.image[0].isCompressedTexture,Tt=M.image[0]&&M.image[0].isDataTexture,K=[];for(let lt=0;lt<6;lt++)!xt&&!Tt?K[lt]=v(M.image[lt],!1,!0,s.maxCubemapSize):K[lt]=Tt?M.image[lt].image:M.image[lt],K[lt]=Bt(M,K[lt]);const Rt=K[0],ft=m(Rt)||o,gt=r.convert(M.format,M.colorSpace),rt=r.convert(M.type),ot=T(M.internalFormat,gt,rt,M.colorSpace),St=o&&M.isVideoTexture!==!0,Zt=Y.__version===void 0||N===!0;let ee=C(M,Rt,ft);X(n.TEXTURE_CUBE_MAP,M,ft);let Yt;if(xt){St&&Zt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ee,ot,Rt.width,Rt.height);for(let lt=0;lt<6;lt++){Yt=K[lt].mipmaps;for(let L=0;L<Yt.length;L++){const dt=Yt[L];M.format!==gn?gt!==null?St?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,L,0,0,dt.width,dt.height,gt,dt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,L,ot,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):St?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,L,0,0,dt.width,dt.height,gt,rt,dt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,L,ot,dt.width,dt.height,0,gt,rt,dt.data)}}}else{Yt=M.mipmaps,St&&Zt&&(Yt.length>0&&ee++,e.texStorage2D(n.TEXTURE_CUBE_MAP,ee,ot,K[0].width,K[0].height));for(let lt=0;lt<6;lt++)if(Tt){St?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,K[lt].width,K[lt].height,gt,rt,K[lt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,ot,K[lt].width,K[lt].height,0,gt,rt,K[lt].data);for(let L=0;L<Yt.length;L++){const pt=Yt[L].image[lt].image;St?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,L+1,0,0,pt.width,pt.height,gt,rt,pt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,L+1,ot,pt.width,pt.height,0,gt,rt,pt.data)}}else{St?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,gt,rt,K[lt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,ot,gt,rt,K[lt]);for(let L=0;L<Yt.length;L++){const dt=Yt[L];St?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,L+1,0,0,gt,rt,dt.image[lt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,L+1,ot,gt,rt,dt.image[lt])}}}y(M,ft)&&S(n.TEXTURE_CUBE_MAP),Y.__version=G.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function Et(w,M,B,N,G,Y){const ht=r.convert(B.format,B.colorSpace),et=r.convert(B.type),st=T(B.internalFormat,ht,et,B.colorSpace);if(!i.get(M).__hasExternalTextures){const Tt=Math.max(1,M.width>>Y),K=Math.max(1,M.height>>Y);G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?e.texImage3D(G,Y,st,Tt,K,M.depth,0,ht,et,null):e.texImage2D(G,Y,st,Tt,K,0,ht,et,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),Mt(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,N,G,i.get(B).__webglTexture,0,Ft(M)):(G===n.TEXTURE_2D||G>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,N,G,i.get(B).__webglTexture,Y),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Nt(w,M,B){if(n.bindRenderbuffer(n.RENDERBUFFER,w),M.depthBuffer&&!M.stencilBuffer){let N=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(B||Mt(M)){const G=M.depthTexture;G&&G.isDepthTexture&&(G.type===$n?N=n.DEPTH_COMPONENT32F:G.type===jn&&(N=n.DEPTH_COMPONENT24));const Y=Ft(M);Mt(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Y,N,M.width,M.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,Y,N,M.width,M.height)}else n.renderbufferStorage(n.RENDERBUFFER,N,M.width,M.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,w)}else if(M.depthBuffer&&M.stencilBuffer){const N=Ft(M);B&&Mt(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,N,n.DEPTH24_STENCIL8,M.width,M.height):Mt(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,N,n.DEPTH24_STENCIL8,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,w)}else{const N=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let G=0;G<N.length;G++){const Y=N[G],ht=r.convert(Y.format,Y.colorSpace),et=r.convert(Y.type),st=T(Y.internalFormat,ht,et,Y.colorSpace),xt=Ft(M);B&&Mt(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,xt,st,M.width,M.height):Mt(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xt,st,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,st,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ot(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);const N=i.get(M.depthTexture).__webglTexture,G=Ft(M);if(M.depthTexture.format===Ci)Mt(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,N,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,N,0);else if(M.depthTexture.format===ps)Mt(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,N,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,N,0);else throw new Error("Unknown depthTexture format")}function Pt(w){const M=i.get(w),B=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ot(M.__webglFramebuffer,w)}else if(B){M.__webglDepthbuffer=[];for(let N=0;N<6;N++)e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[N]),M.__webglDepthbuffer[N]=n.createRenderbuffer(),Nt(M.__webglDepthbuffer[N],w,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),Nt(M.__webglDepthbuffer,w,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function kt(w,M,B){const N=i.get(w);M!==void 0&&Et(N.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Pt(w)}function F(w){const M=w.texture,B=i.get(w),N=i.get(M);w.addEventListener("dispose",I),w.isWebGLMultipleRenderTargets!==!0&&(N.__webglTexture===void 0&&(N.__webglTexture=n.createTexture()),N.__version=M.version,a.memory.textures++);const G=w.isWebGLCubeRenderTarget===!0,Y=w.isWebGLMultipleRenderTargets===!0,ht=m(w)||o;if(G){B.__webglFramebuffer=[];for(let et=0;et<6;et++)if(o&&M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[et]=[];for(let st=0;st<M.mipmaps.length;st++)B.__webglFramebuffer[et][st]=n.createFramebuffer()}else B.__webglFramebuffer[et]=n.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let et=0;et<M.mipmaps.length;et++)B.__webglFramebuffer[et]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(Y)if(s.drawBuffers){const et=w.texture;for(let st=0,xt=et.length;st<xt;st++){const Tt=i.get(et[st]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&Mt(w)===!1){const et=Y?M:[M];B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let st=0;st<et.length;st++){const xt=et[st];B.__webglColorRenderbuffer[st]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[st]);const Tt=r.convert(xt.format,xt.colorSpace),K=r.convert(xt.type),Rt=T(xt.internalFormat,Tt,K,xt.colorSpace,w.isXRRenderTarget===!0),ft=Ft(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,ft,Rt,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+st,n.RENDERBUFFER,B.__webglColorRenderbuffer[st])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Nt(B.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(G){e.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture),X(n.TEXTURE_CUBE_MAP,M,ht);for(let et=0;et<6;et++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let st=0;st<M.mipmaps.length;st++)Et(B.__webglFramebuffer[et][st],w,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+et,st);else Et(B.__webglFramebuffer[et],w,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);y(M,ht)&&S(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Y){const et=w.texture;for(let st=0,xt=et.length;st<xt;st++){const Tt=et[st],K=i.get(Tt);e.bindTexture(n.TEXTURE_2D,K.__webglTexture),X(n.TEXTURE_2D,Tt,ht),Et(B.__webglFramebuffer,w,Tt,n.COLOR_ATTACHMENT0+st,n.TEXTURE_2D,0),y(Tt,ht)&&S(n.TEXTURE_2D)}e.unbindTexture()}else{let et=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?et=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(et,N.__webglTexture),X(et,M,ht),o&&M.mipmaps&&M.mipmaps.length>0)for(let st=0;st<M.mipmaps.length;st++)Et(B.__webglFramebuffer[st],w,M,n.COLOR_ATTACHMENT0,et,st);else Et(B.__webglFramebuffer,w,M,n.COLOR_ATTACHMENT0,et,0);y(M,ht)&&S(et),e.unbindTexture()}w.depthBuffer&&Pt(w)}function De(w){const M=m(w)||o,B=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let N=0,G=B.length;N<G;N++){const Y=B[N];if(y(Y,M)){const ht=w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,et=i.get(Y).__webglTexture;e.bindTexture(ht,et),S(ht),e.unbindTexture()}}}function wt(w){if(o&&w.samples>0&&Mt(w)===!1){const M=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],B=w.width,N=w.height;let G=n.COLOR_BUFFER_BIT;const Y=[],ht=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,et=i.get(w),st=w.isWebGLMultipleRenderTargets===!0;if(st)for(let xt=0;xt<M.length;xt++)e.bindFramebuffer(n.FRAMEBUFFER,et.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,et.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,et.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,et.__webglFramebuffer);for(let xt=0;xt<M.length;xt++){Y.push(n.COLOR_ATTACHMENT0+xt),w.depthBuffer&&Y.push(ht);const Tt=et.__ignoreDepthValues!==void 0?et.__ignoreDepthValues:!1;if(Tt===!1&&(w.depthBuffer&&(G|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&(G|=n.STENCIL_BUFFER_BIT)),st&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,et.__webglColorRenderbuffer[xt]),Tt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ht]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ht])),st){const K=i.get(M[xt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,K,0)}n.blitFramebuffer(0,0,B,N,0,0,B,N,G,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Y)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),st)for(let xt=0;xt<M.length;xt++){e.bindFramebuffer(n.FRAMEBUFFER,et.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,et.__webglColorRenderbuffer[xt]);const Tt=i.get(M[xt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,et.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,Tt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,et.__webglMultisampledFramebuffer)}}function Ft(w){return Math.min(s.maxSamples,w.samples)}function Mt(w){const M=i.get(w);return o&&w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function se(w){const M=a.render.frame;h.get(w)!==M&&(h.set(w,M),w.update())}function Bt(w,M){const B=w.colorSpace,N=w.format,G=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Eo||B!==kn&&B!==on&&(te.getTransfer(B)===le?o===!1?t.has("EXT_sRGB")===!0&&N===gn?(w.format=Eo,w.minFilter=rn,w.generateMipmaps=!1):M=Ih.sRGBToLinear(M):(N!==gn||G!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}this.allocateTextureUnit=D,this.resetTextureUnits=nt,this.setTexture2D=q,this.setTexture2DArray=j,this.setTexture3D=J,this.setTextureCube=$,this.rebindTextures=kt,this.setupRenderTarget=F,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=Mt}function j0(n,t,e){const i=e.isWebGL2;function s(r,a=on){let o;const l=te.getTransfer(a);if(r===ei)return n.UNSIGNED_BYTE;if(r===Th)return n.UNSIGNED_SHORT_4_4_4_4;if(r===bh)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Mf)return n.BYTE;if(r===Sf)return n.SHORT;if(r===Bo)return n.UNSIGNED_SHORT;if(r===Eh)return n.INT;if(r===jn)return n.UNSIGNED_INT;if(r===$n)return n.FLOAT;if(r===Hn)return i?n.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===yf)return n.ALPHA;if(r===gn)return n.RGBA;if(r===Ef)return n.LUMINANCE;if(r===Tf)return n.LUMINANCE_ALPHA;if(r===Ci)return n.DEPTH_COMPONENT;if(r===ps)return n.DEPTH_STENCIL;if(r===Eo)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===bf)return n.RED;if(r===wh)return n.RED_INTEGER;if(r===wf)return n.RG;if(r===Ah)return n.RG_INTEGER;if(r===Rh)return n.RGBA_INTEGER;if(r===Ia||r===Na||r===Fa||r===Oa)if(l===le)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Ia)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Na)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Fa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Oa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Ia)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Na)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Fa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Oa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Il||r===Nl||r===Fl||r===Ol)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Il)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Nl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Fl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ol)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ch)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Bl||r===zl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Bl)return l===le?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===zl)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Gl||r===Hl||r===Vl||r===kl||r===Wl||r===Xl||r===ql||r===Yl||r===Jl||r===Kl||r===Zl||r===jl||r===$l||r===Ql)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Gl)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Hl)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Vl)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===kl)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Wl)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Xl)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ql)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Yl)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Jl)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Kl)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Zl)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===jl)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===$l)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ql)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ba||r===tc||r===ec)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Ba)return l===le?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===tc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ec)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Af||r===nc||r===ic||r===sc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Ba)return o.COMPRESSED_RED_RGTC1_EXT;if(r===nc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ic)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===sc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ri?i?n.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class $0 extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ce extends ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Q0={type:"move"};class oo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,i),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Q0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ce;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class t_ extends Ts{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,_=null;const v=e.getContextAttributes();let m=null,f=null;const y=[],S=[],T=new ut;let C=null;const A=new Qe;A.layers.enable(1),A.viewport=new Le;const R=new Qe;R.layers.enable(2),R.viewport=new Le;const I=[A,R],x=new $0;x.layers.enable(1),x.layers.enable(2);let b=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Z=y[X];return Z===void 0&&(Z=new oo,y[X]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(X){let Z=y[X];return Z===void 0&&(Z=new oo,y[X]=Z),Z.getGripSpace()},this.getHand=function(X){let Z=y[X];return Z===void 0&&(Z=new oo,y[X]=Z),Z.getHandSpace()};function W(X){const Z=S.indexOf(X.inputSource);if(Z===-1)return;const mt=y[Z];mt!==void 0&&(mt.update(X.inputSource,X.frame,c||a),mt.dispatchEvent({type:X.type,data:X.inputSource}))}function nt(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",nt),s.removeEventListener("inputsourceschange",D);for(let X=0;X<y.length;X++){const Z=S[X];Z!==null&&(S[X]=null,y[X].disconnect(Z))}b=null,H=null,t.setRenderTarget(m),p=null,d=null,u=null,s=null,f=null,it.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",nt),s.addEventListener("inputsourceschange",D),v.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Z={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,Z),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new _n(p.framebufferWidth,p.framebufferHeight,{format:gn,type:ei,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let Z=null,mt=null,yt=null;v.depth&&(yt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=v.stencil?ps:Ci,mt=v.stencil?Ri:jn);const Et={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Et),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),f=new _n(d.textureWidth,d.textureHeight,{format:gn,type:ei,depthTexture:new qh(d.textureWidth,d.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});const Nt=t.properties.get(f);Nt.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),it.setContext(s),it.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function D(X){for(let Z=0;Z<X.removed.length;Z++){const mt=X.removed[Z],yt=S.indexOf(mt);yt>=0&&(S[yt]=null,y[yt].disconnect(mt))}for(let Z=0;Z<X.added.length;Z++){const mt=X.added[Z];let yt=S.indexOf(mt);if(yt===-1){for(let Nt=0;Nt<y.length;Nt++)if(Nt>=S.length){S.push(mt),yt=Nt;break}else if(S[Nt]===null){S[Nt]=mt,yt=Nt;break}if(yt===-1)break}const Et=y[yt];Et&&Et.connect(mt)}}const O=new P,q=new P;function j(X,Z,mt){O.setFromMatrixPosition(Z.matrixWorld),q.setFromMatrixPosition(mt.matrixWorld);const yt=O.distanceTo(q),Et=Z.projectionMatrix.elements,Nt=mt.projectionMatrix.elements,Ot=Et[14]/(Et[10]-1),Pt=Et[14]/(Et[10]+1),kt=(Et[9]+1)/Et[5],F=(Et[9]-1)/Et[5],De=(Et[8]-1)/Et[0],wt=(Nt[8]+1)/Nt[0],Ft=Ot*De,Mt=Ot*wt,se=yt/(-De+wt),Bt=se*-De;Z.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Bt),X.translateZ(se),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const w=Ot+se,M=Pt+se,B=Ft-Bt,N=Mt+(yt-Bt),G=kt*Pt/M*w,Y=F*Pt/M*w;X.projectionMatrix.makePerspective(B,N,G,Y,w,M),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function J(X,Z){Z===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Z.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;x.near=R.near=A.near=X.near,x.far=R.far=A.far=X.far,(b!==x.near||H!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),b=x.near,H=x.far);const Z=X.parent,mt=x.cameras;J(x,Z);for(let yt=0;yt<mt.length;yt++)J(mt[yt],Z);mt.length===2?j(x,A,R):x.projectionMatrix.copy(A.projectionMatrix),$(X,x,Z)};function $(X,Z,mt){mt===null?X.matrix.copy(Z.matrixWorld):(X.matrix.copy(mt.matrixWorld),X.matrix.invert(),X.matrix.multiply(Z.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Z.projectionMatrix),X.projectionMatrixInverse.copy(Z.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ms*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)};let Q=null;function at(X,Z){if(h=Z.getViewerPose(c||a),_=Z,h!==null){const mt=h.views;p!==null&&(t.setRenderTargetFramebuffer(f,p.framebuffer),t.setRenderTarget(f));let yt=!1;mt.length!==x.cameras.length&&(x.cameras.length=0,yt=!0);for(let Et=0;Et<mt.length;Et++){const Nt=mt[Et];let Ot=null;if(p!==null)Ot=p.getViewport(Nt);else{const kt=u.getViewSubImage(d,Nt);Ot=kt.viewport,Et===0&&(t.setRenderTargetTextures(f,kt.colorTexture,d.ignoreDepthValues?void 0:kt.depthStencilTexture),t.setRenderTarget(f))}let Pt=I[Et];Pt===void 0&&(Pt=new Qe,Pt.layers.enable(Et),Pt.viewport=new Le,I[Et]=Pt),Pt.matrix.fromArray(Nt.transform.matrix),Pt.matrix.decompose(Pt.position,Pt.quaternion,Pt.scale),Pt.projectionMatrix.fromArray(Nt.projectionMatrix),Pt.projectionMatrixInverse.copy(Pt.projectionMatrix).invert(),Pt.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),Et===0&&(x.matrix.copy(Pt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),yt===!0&&x.cameras.push(Pt)}}for(let mt=0;mt<y.length;mt++){const yt=S[mt],Et=y[mt];yt!==null&&Et!==void 0&&Et.update(yt,Z,c||a)}Q&&Q(X,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),_=null}const it=new Xh;it.setAnimationLoop(at),this.setAnimationLoop=function(X){Q=X},this.dispose=function(){}}}function e_(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Vh(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,y,S,T){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,T)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,y,S):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===We&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===We&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=t.get(f).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const S=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*S,e(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=S*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===We&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const y=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function n_(n,t,e,i){let s={},r={},a=[];const o=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,S){const T=S.program;i.uniformBlockBinding(y,T)}function c(y,S){let T=s[y.id];T===void 0&&(_(y),T=h(y),s[y.id]=T,y.addEventListener("dispose",m));const C=S.program;i.updateUBOMapping(y,C);const A=t.render.frame;r[y.id]!==A&&(d(y),r[y.id]=A)}function h(y){const S=u();y.__bindingPointIndex=S;const T=n.createBuffer(),C=y.__size,A=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,C,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,T),T}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const S=s[y.id],T=y.uniforms,C=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let A=0,R=T.length;A<R;A++){const I=Array.isArray(T[A])?T[A]:[T[A]];for(let x=0,b=I.length;x<b;x++){const H=I[x];if(p(H,A,x,C)===!0){const W=H.__offset,nt=Array.isArray(H.value)?H.value:[H.value];let D=0;for(let O=0;O<nt.length;O++){const q=nt[O],j=v(q);typeof q=="number"||typeof q=="boolean"?(H.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,W+D,H.__data)):q.isMatrix3?(H.__data[0]=q.elements[0],H.__data[1]=q.elements[1],H.__data[2]=q.elements[2],H.__data[3]=0,H.__data[4]=q.elements[3],H.__data[5]=q.elements[4],H.__data[6]=q.elements[5],H.__data[7]=0,H.__data[8]=q.elements[6],H.__data[9]=q.elements[7],H.__data[10]=q.elements[8],H.__data[11]=0):(q.toArray(H.__data,D),D+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,H.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,S,T,C){const A=y.value,R=S+"_"+T;if(C[R]===void 0)return typeof A=="number"||typeof A=="boolean"?C[R]=A:C[R]=A.clone(),!0;{const I=C[R];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return C[R]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function _(y){const S=y.uniforms;let T=0;const C=16;for(let R=0,I=S.length;R<I;R++){const x=Array.isArray(S[R])?S[R]:[S[R]];for(let b=0,H=x.length;b<H;b++){const W=x[b],nt=Array.isArray(W.value)?W.value:[W.value];for(let D=0,O=nt.length;D<O;D++){const q=nt[D],j=v(q),J=T%C;J!==0&&C-J<j.boundary&&(T+=C-J),W.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=T,T+=j.storage}}}const A=T%C;return A>0&&(T+=C-A),y.__size=T,y.__cache={},this}function v(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){const S=y.target;S.removeEventListener("dispose",m);const T=a.indexOf(S.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function f(){for(const y in s)n.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class $h{constructor(t={}){const{canvas:e=Qf(),context:i=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;const p=new Uint32Array(4),_=new Int32Array(4);let v=null,m=null;const f=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Se,this._useLegacyLights=!1,this.toneMapping=ti,this.toneMappingExposure=1;const S=this;let T=!1,C=0,A=0,R=null,I=-1,x=null;const b=new Le,H=new Le;let W=null;const nt=new At(0);let D=0,O=e.width,q=e.height,j=1,J=null,$=null;const Q=new Le(0,0,O,q),at=new Le(0,0,O,q);let it=!1;const X=new Ho;let Z=!1,mt=!1,yt=null;const Et=new he,Nt=new ut,Ot=new P,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function kt(){return R===null?j:1}let F=i;function De(E,U){for(let V=0;V<E.length;V++){const k=E[V],z=e.getContext(k,U);if(z!==null)return z}return null}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Oo}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",L,!1),e.addEventListener("webglcontextcreationerror",dt,!1),F===null){const U=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&U.shift(),F=De(U,E),F===null)throw De(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let wt,Ft,Mt,se,Bt,w,M,B,N,G,Y,ht,et,st,xt,Tt,K,Rt,ft,gt,rt,ot,St,Zt;function ee(){wt=new fg(F),Ft=new ag(F,wt,t),wt.init(Ft),ot=new j0(F,wt,Ft),Mt=new K0(F,wt,Ft),se=new mg(F),Bt=new N0,w=new Z0(F,wt,Mt,Bt,Ft,ot,se),M=new lg(S),B=new ug(S),N=new Ed(F,Ft),St=new sg(F,wt,N,Ft),G=new dg(F,N,se,St),Y=new xg(F,G,N,se),ft=new vg(F,Ft,w),Tt=new og(Bt),ht=new I0(S,M,B,wt,Ft,St,Tt),et=new e_(S,Bt),st=new O0,xt=new k0(wt,Ft),Rt=new ig(S,M,B,Mt,Y,d,l),K=new J0(S,Y,Ft),Zt=new n_(F,se,Ft,Mt),gt=new rg(F,wt,se,Ft),rt=new pg(F,wt,se,Ft),se.programs=ht.programs,S.capabilities=Ft,S.extensions=wt,S.properties=Bt,S.renderLists=st,S.shadowMap=K,S.state=Mt,S.info=se}ee();const Yt=new t_(S,F);this.xr=Yt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=wt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=wt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(E){E!==void 0&&(j=E,this.setSize(O,q,!1))},this.getSize=function(E){return E.set(O,q)},this.setSize=function(E,U,V=!0){if(Yt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=E,q=U,e.width=Math.floor(E*j),e.height=Math.floor(U*j),V===!0&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(O*j,q*j).floor()},this.setDrawingBufferSize=function(E,U,V){O=E,q=U,j=V,e.width=Math.floor(E*V),e.height=Math.floor(U*V),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(b)},this.getViewport=function(E){return E.copy(Q)},this.setViewport=function(E,U,V,k){E.isVector4?Q.set(E.x,E.y,E.z,E.w):Q.set(E,U,V,k),Mt.viewport(b.copy(Q).multiplyScalar(j).floor())},this.getScissor=function(E){return E.copy(at)},this.setScissor=function(E,U,V,k){E.isVector4?at.set(E.x,E.y,E.z,E.w):at.set(E,U,V,k),Mt.scissor(H.copy(at).multiplyScalar(j).floor())},this.getScissorTest=function(){return it},this.setScissorTest=function(E){Mt.setScissorTest(it=E)},this.setOpaqueSort=function(E){J=E},this.setTransparentSort=function(E){$=E},this.getClearColor=function(E){return E.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor.apply(Rt,arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha.apply(Rt,arguments)},this.clear=function(E=!0,U=!0,V=!0){let k=0;if(E){let z=!1;if(R!==null){const _t=R.texture.format;z=_t===Rh||_t===Ah||_t===wh}if(z){const _t=R.texture.type,bt=_t===ei||_t===jn||_t===Bo||_t===Ri||_t===Th||_t===bh,Lt=Rt.getClearColor(),Ut=Rt.getClearAlpha(),qt=Lt.r,zt=Lt.g,Ht=Lt.b;bt?(p[0]=qt,p[1]=zt,p[2]=Ht,p[3]=Ut,F.clearBufferuiv(F.COLOR,0,p)):(_[0]=qt,_[1]=zt,_[2]=Ht,_[3]=Ut,F.clearBufferiv(F.COLOR,0,_))}else k|=F.COLOR_BUFFER_BIT}U&&(k|=F.DEPTH_BUFFER_BIT),V&&(k|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",L,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),st.dispose(),xt.dispose(),Bt.dispose(),M.dispose(),B.dispose(),Y.dispose(),St.dispose(),Zt.dispose(),ht.dispose(),Yt.dispose(),Yt.removeEventListener("sessionstart",Oe),Yt.removeEventListener("sessionend",oe),yt&&(yt.dispose(),yt=null),Be.stop()};function lt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const E=se.autoReset,U=K.enabled,V=K.autoUpdate,k=K.needsUpdate,z=K.type;ee(),se.autoReset=E,K.enabled=U,K.autoUpdate=V,K.needsUpdate=k,K.type=z}function dt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function pt(E){const U=E.target;U.removeEventListener("dispose",pt),Dt(U)}function Dt(E){Ct(E),Bt.remove(E)}function Ct(E){const U=Bt.get(E).programs;U!==void 0&&(U.forEach(function(V){ht.releaseProgram(V)}),E.isShaderMaterial&&ht.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,V,k,z,_t){U===null&&(U=Pt);const bt=z.isMesh&&z.matrixWorld.determinant()<0,Lt=Fu(E,U,V,k,z);Mt.setMaterial(k,bt);let Ut=V.index,qt=1;if(k.wireframe===!0){if(Ut=G.getWireframeAttribute(V),Ut===void 0)return;qt=2}const zt=V.drawRange,Ht=V.attributes.position;let me=zt.start*qt,Ke=(zt.start+zt.count)*qt;_t!==null&&(me=Math.max(me,_t.start*qt),Ke=Math.min(Ke,(_t.start+_t.count)*qt)),Ut!==null?(me=Math.max(me,0),Ke=Math.min(Ke,Ut.count)):Ht!=null&&(me=Math.max(me,0),Ke=Math.min(Ke,Ht.count));const we=Ke-me;if(we<0||we===1/0)return;St.setup(z,k,Lt,V,Ut);let Rn,fe=gt;if(Ut!==null&&(Rn=N.get(Ut),fe=rt,fe.setIndex(Rn)),z.isMesh)k.wireframe===!0?(Mt.setLineWidth(k.wireframeLinewidth*kt()),fe.setMode(F.LINES)):fe.setMode(F.TRIANGLES);else if(z.isLine){let Jt=k.linewidth;Jt===void 0&&(Jt=1),Mt.setLineWidth(Jt*kt()),z.isLineSegments?fe.setMode(F.LINES):z.isLineLoop?fe.setMode(F.LINE_LOOP):fe.setMode(F.LINE_STRIP)}else z.isPoints?fe.setMode(F.POINTS):z.isSprite&&fe.setMode(F.TRIANGLES);if(z.isBatchedMesh)fe.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)fe.renderInstances(me,we,z.count);else if(V.isInstancedBufferGeometry){const Jt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ca=Math.min(V.instanceCount,Jt);fe.renderInstances(me,we,Ca)}else fe.render(me,we)};function re(E,U,V){E.transparent===!0&&E.side===ge&&E.forceSinglePass===!1?(E.side=We,E.needsUpdate=!0,gr(E,U,V),E.side=ri,E.needsUpdate=!0,gr(E,U,V),E.side=ge):gr(E,U,V)}this.compile=function(E,U,V=null){V===null&&(V=E),m=xt.get(V),m.init(),y.push(m),V.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),E!==V&&E.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights(S._useLegacyLights);const k=new Set;return E.traverse(function(z){const _t=z.material;if(_t)if(Array.isArray(_t))for(let bt=0;bt<_t.length;bt++){const Lt=_t[bt];re(Lt,V,z),k.add(Lt)}else re(_t,V,z),k.add(_t)}),y.pop(),m=null,k},this.compileAsync=function(E,U,V=null){const k=this.compile(E,U,V);return new Promise(z=>{function _t(){if(k.forEach(function(bt){Bt.get(bt).currentProgram.isReady()&&k.delete(bt)}),k.size===0){z(E);return}setTimeout(_t,10)}wt.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let ae=null;function be(E){ae&&ae(E)}function Oe(){Be.stop()}function oe(){Be.start()}const Be=new Xh;Be.setAnimationLoop(be),typeof self<"u"&&Be.setContext(self),this.setAnimationLoop=function(E){ae=E,Yt.setAnimationLoop(E),E===null?Be.stop():Be.start()},Yt.addEventListener("sessionstart",Oe),Yt.addEventListener("sessionend",oe),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Yt.enabled===!0&&Yt.isPresenting===!0&&(Yt.cameraAutoUpdate===!0&&Yt.updateCamera(U),U=Yt.getCamera()),E.isScene===!0&&E.onBeforeRender(S,E,U,R),m=xt.get(E,y.length),m.init(),y.push(m),Et.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),X.setFromProjectionMatrix(Et),mt=this.localClippingEnabled,Z=Tt.init(this.clippingPlanes,mt),v=st.get(E,f.length),v.init(),f.push(v),Mn(E,U,0,S.sortObjects),v.finish(),S.sortObjects===!0&&v.sort(J,$),this.info.render.frame++,Z===!0&&Tt.beginShadows();const V=m.state.shadowsArray;if(K.render(V,E,U),Z===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Rt.render(v,E),m.setupLights(S._useLegacyLights),U.isArrayCamera){const k=U.cameras;for(let z=0,_t=k.length;z<_t;z++){const bt=k[z];yl(v,E,bt,bt.viewport)}}else yl(v,E,U);R!==null&&(w.updateMultisampleRenderTarget(R),w.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(S,E,U),St.resetDefaultState(),I=-1,x=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function Mn(E,U,V,k){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||X.intersectsSprite(E)){k&&Ot.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Et);const bt=Y.update(E),Lt=E.material;Lt.visible&&v.push(E,bt,Lt,V,Ot.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||X.intersectsObject(E))){const bt=Y.update(E),Lt=E.material;if(k&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ot.copy(E.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Ot.copy(bt.boundingSphere.center)),Ot.applyMatrix4(E.matrixWorld).applyMatrix4(Et)),Array.isArray(Lt)){const Ut=bt.groups;for(let qt=0,zt=Ut.length;qt<zt;qt++){const Ht=Ut[qt],me=Lt[Ht.materialIndex];me&&me.visible&&v.push(E,bt,me,V,Ot.z,Ht)}}else Lt.visible&&v.push(E,bt,Lt,V,Ot.z,null)}}const _t=E.children;for(let bt=0,Lt=_t.length;bt<Lt;bt++)Mn(_t[bt],U,V,k)}function yl(E,U,V,k){const z=E.opaque,_t=E.transmissive,bt=E.transparent;m.setupLightsView(V),Z===!0&&Tt.setGlobalState(S.clippingPlanes,V),_t.length>0&&Nu(z,_t,U,V),k&&Mt.viewport(b.copy(k)),z.length>0&&mr(z,U,V),_t.length>0&&mr(_t,U,V),bt.length>0&&mr(bt,U,V),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function Nu(E,U,V,k){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const _t=Ft.isWebGL2;yt===null&&(yt=new _n(1,1,{generateMipmaps:!0,type:wt.has("EXT_color_buffer_half_float")?Hn:ei,minFilter:Ys,samples:_t?4:0})),S.getDrawingBufferSize(Nt),_t?yt.setSize(Nt.x,Nt.y):yt.setSize(aa(Nt.x),aa(Nt.y));const bt=S.getRenderTarget();S.setRenderTarget(yt),S.getClearColor(nt),D=S.getClearAlpha(),D<1&&S.setClearColor(16777215,.5),S.clear();const Lt=S.toneMapping;S.toneMapping=ti,mr(E,V,k),w.updateMultisampleRenderTarget(yt),w.updateRenderTargetMipmap(yt);let Ut=!1;for(let qt=0,zt=U.length;qt<zt;qt++){const Ht=U[qt],me=Ht.object,Ke=Ht.geometry,we=Ht.material,Rn=Ht.group;if(we.side===ge&&me.layers.test(k.layers)){const fe=we.side;we.side=We,we.needsUpdate=!0,El(me,V,k,Ke,we,Rn),we.side=fe,we.needsUpdate=!0,Ut=!0}}Ut===!0&&(w.updateMultisampleRenderTarget(yt),w.updateRenderTargetMipmap(yt)),S.setRenderTarget(bt),S.setClearColor(nt,D),S.toneMapping=Lt}function mr(E,U,V){const k=U.isScene===!0?U.overrideMaterial:null;for(let z=0,_t=E.length;z<_t;z++){const bt=E[z],Lt=bt.object,Ut=bt.geometry,qt=k===null?bt.material:k,zt=bt.group;Lt.layers.test(V.layers)&&El(Lt,U,V,Ut,qt,zt)}}function El(E,U,V,k,z,_t){E.onBeforeRender(S,U,V,k,z,_t),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(S,U,V,k,E,_t),z.transparent===!0&&z.side===ge&&z.forceSinglePass===!1?(z.side=We,z.needsUpdate=!0,S.renderBufferDirect(V,U,k,z,E,_t),z.side=ri,z.needsUpdate=!0,S.renderBufferDirect(V,U,k,z,E,_t),z.side=ge):S.renderBufferDirect(V,U,k,z,E,_t),E.onAfterRender(S,U,V,k,z,_t)}function gr(E,U,V){U.isScene!==!0&&(U=Pt);const k=Bt.get(E),z=m.state.lights,_t=m.state.shadowsArray,bt=z.state.version,Lt=ht.getParameters(E,z.state,_t,U,V),Ut=ht.getProgramCacheKey(Lt);let qt=k.programs;k.environment=E.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(E.isMeshStandardMaterial?B:M).get(E.envMap||k.environment),qt===void 0&&(E.addEventListener("dispose",pt),qt=new Map,k.programs=qt);let zt=qt.get(Ut);if(zt!==void 0){if(k.currentProgram===zt&&k.lightsStateVersion===bt)return bl(E,Lt),zt}else Lt.uniforms=ht.getUniforms(E),E.onBuild(V,Lt,S),E.onBeforeCompile(Lt,S),zt=ht.acquireProgram(Lt,Ut),qt.set(Ut,zt),k.uniforms=Lt.uniforms;const Ht=k.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ht.clippingPlanes=Tt.uniform),bl(E,Lt),k.needsLights=Bu(E),k.lightsStateVersion=bt,k.needsLights&&(Ht.ambientLightColor.value=z.state.ambient,Ht.lightProbe.value=z.state.probe,Ht.directionalLights.value=z.state.directional,Ht.directionalLightShadows.value=z.state.directionalShadow,Ht.spotLights.value=z.state.spot,Ht.spotLightShadows.value=z.state.spotShadow,Ht.rectAreaLights.value=z.state.rectArea,Ht.ltc_1.value=z.state.rectAreaLTC1,Ht.ltc_2.value=z.state.rectAreaLTC2,Ht.pointLights.value=z.state.point,Ht.pointLightShadows.value=z.state.pointShadow,Ht.hemisphereLights.value=z.state.hemi,Ht.directionalShadowMap.value=z.state.directionalShadowMap,Ht.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ht.spotShadowMap.value=z.state.spotShadowMap,Ht.spotLightMatrix.value=z.state.spotLightMatrix,Ht.spotLightMap.value=z.state.spotLightMap,Ht.pointShadowMap.value=z.state.pointShadowMap,Ht.pointShadowMatrix.value=z.state.pointShadowMatrix),k.currentProgram=zt,k.uniformsList=null,zt}function Tl(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=qr.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function bl(E,U){const V=Bt.get(E);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function Fu(E,U,V,k,z){U.isScene!==!0&&(U=Pt),w.resetTextureUnits();const _t=U.fog,bt=k.isMeshStandardMaterial?U.environment:null,Lt=R===null?S.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:kn,Ut=(k.isMeshStandardMaterial?B:M).get(k.envMap||bt),qt=k.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,zt=!!V.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ht=!!V.morphAttributes.position,me=!!V.morphAttributes.normal,Ke=!!V.morphAttributes.color;let we=ti;k.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(we=S.toneMapping);const Rn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,fe=Rn!==void 0?Rn.length:0,Jt=Bt.get(k),Ca=m.state.lights;if(Z===!0&&(mt===!0||E!==x)){const nn=E===x&&k.id===I;Tt.setState(k,E,nn)}let de=!1;k.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Ca.state.version||Jt.outputColorSpace!==Lt||z.isBatchedMesh&&Jt.batching===!1||!z.isBatchedMesh&&Jt.batching===!0||z.isInstancedMesh&&Jt.instancing===!1||!z.isInstancedMesh&&Jt.instancing===!0||z.isSkinnedMesh&&Jt.skinning===!1||!z.isSkinnedMesh&&Jt.skinning===!0||z.isInstancedMesh&&Jt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Jt.instancingColor===!1&&z.instanceColor!==null||Jt.envMap!==Ut||k.fog===!0&&Jt.fog!==_t||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==Tt.numPlanes||Jt.numIntersection!==Tt.numIntersection)||Jt.vertexAlphas!==qt||Jt.vertexTangents!==zt||Jt.morphTargets!==Ht||Jt.morphNormals!==me||Jt.morphColors!==Ke||Jt.toneMapping!==we||Ft.isWebGL2===!0&&Jt.morphTargetsCount!==fe)&&(de=!0):(de=!0,Jt.__version=k.version);let hi=Jt.currentProgram;de===!0&&(hi=gr(k,U,z));let wl=!1,Ls=!1,Pa=!1;const Ue=hi.getUniforms(),ui=Jt.uniforms;if(Mt.useProgram(hi.program)&&(wl=!0,Ls=!0,Pa=!0),k.id!==I&&(I=k.id,Ls=!0),wl||x!==E){Ue.setValue(F,"projectionMatrix",E.projectionMatrix),Ue.setValue(F,"viewMatrix",E.matrixWorldInverse);const nn=Ue.map.cameraPosition;nn!==void 0&&nn.setValue(F,Ot.setFromMatrixPosition(E.matrixWorld)),Ft.logarithmicDepthBuffer&&Ue.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Ue.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),x!==E&&(x=E,Ls=!0,Pa=!0)}if(z.isSkinnedMesh){Ue.setOptional(F,z,"bindMatrix"),Ue.setOptional(F,z,"bindMatrixInverse");const nn=z.skeleton;nn&&(Ft.floatVertexTextures?(nn.boneTexture===null&&nn.computeBoneTexture(),Ue.setValue(F,"boneTexture",nn.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(Ue.setOptional(F,z,"batchingTexture"),Ue.setValue(F,"batchingTexture",z._matricesTexture,w));const La=V.morphAttributes;if((La.position!==void 0||La.normal!==void 0||La.color!==void 0&&Ft.isWebGL2===!0)&&ft.update(z,V,hi),(Ls||Jt.receiveShadow!==z.receiveShadow)&&(Jt.receiveShadow=z.receiveShadow,Ue.setValue(F,"receiveShadow",z.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(ui.envMap.value=Ut,ui.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),Ls&&(Ue.setValue(F,"toneMappingExposure",S.toneMappingExposure),Jt.needsLights&&Ou(ui,Pa),_t&&k.fog===!0&&et.refreshFogUniforms(ui,_t),et.refreshMaterialUniforms(ui,k,j,q,yt),qr.upload(F,Tl(Jt),ui,w)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(qr.upload(F,Tl(Jt),ui,w),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Ue.setValue(F,"center",z.center),Ue.setValue(F,"modelViewMatrix",z.modelViewMatrix),Ue.setValue(F,"normalMatrix",z.normalMatrix),Ue.setValue(F,"modelMatrix",z.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const nn=k.uniformsGroups;for(let Da=0,zu=nn.length;Da<zu;Da++)if(Ft.isWebGL2){const Al=nn[Da];Zt.update(Al,hi),Zt.bind(Al,hi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return hi}function Ou(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Bu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,U,V){Bt.get(E.texture).__webglTexture=U,Bt.get(E.depthTexture).__webglTexture=V;const k=Bt.get(E);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=V===void 0,k.__autoAllocateDepthBuffer||wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,U){const V=Bt.get(E);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,V=0){R=E,C=U,A=V;let k=!0,z=null,_t=!1,bt=!1;if(E){const Ut=Bt.get(E);Ut.__useDefaultFramebuffer!==void 0?(Mt.bindFramebuffer(F.FRAMEBUFFER,null),k=!1):Ut.__webglFramebuffer===void 0?w.setupRenderTarget(E):Ut.__hasExternalTextures&&w.rebindTextures(E,Bt.get(E.texture).__webglTexture,Bt.get(E.depthTexture).__webglTexture);const qt=E.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(bt=!0);const zt=Bt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(zt[U])?z=zt[U][V]:z=zt[U],_t=!0):Ft.isWebGL2&&E.samples>0&&w.useMultisampledRTT(E)===!1?z=Bt.get(E).__webglMultisampledFramebuffer:Array.isArray(zt)?z=zt[V]:z=zt,b.copy(E.viewport),H.copy(E.scissor),W=E.scissorTest}else b.copy(Q).multiplyScalar(j).floor(),H.copy(at).multiplyScalar(j).floor(),W=it;if(Mt.bindFramebuffer(F.FRAMEBUFFER,z)&&Ft.drawBuffers&&k&&Mt.drawBuffers(E,z),Mt.viewport(b),Mt.scissor(H),Mt.setScissorTest(W),_t){const Ut=Bt.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ut.__webglTexture,V)}else if(bt){const Ut=Bt.get(E.texture),qt=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ut.__webglTexture,V||0,qt)}I=-1},this.readRenderTargetPixels=function(E,U,V,k,z,_t,bt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Bt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&bt!==void 0&&(Lt=Lt[bt]),Lt){Mt.bindFramebuffer(F.FRAMEBUFFER,Lt);try{const Ut=E.texture,qt=Ut.format,zt=Ut.type;if(qt!==gn&&ot.convert(qt)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ht=zt===Hn&&(wt.has("EXT_color_buffer_half_float")||Ft.isWebGL2&&wt.has("EXT_color_buffer_float"));if(zt!==ei&&ot.convert(zt)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(zt===$n&&(Ft.isWebGL2||wt.has("OES_texture_float")||wt.has("WEBGL_color_buffer_float")))&&!Ht){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-k&&V>=0&&V<=E.height-z&&F.readPixels(U,V,k,z,ot.convert(qt),ot.convert(zt),_t)}finally{const Ut=R!==null?Bt.get(R).__webglFramebuffer:null;Mt.bindFramebuffer(F.FRAMEBUFFER,Ut)}}},this.copyFramebufferToTexture=function(E,U,V=0){const k=Math.pow(2,-V),z=Math.floor(U.image.width*k),_t=Math.floor(U.image.height*k);w.setTexture2D(U,0),F.copyTexSubImage2D(F.TEXTURE_2D,V,0,0,E.x,E.y,z,_t),Mt.unbindTexture()},this.copyTextureToTexture=function(E,U,V,k=0){const z=U.image.width,_t=U.image.height,bt=ot.convert(V.format),Lt=ot.convert(V.type);w.setTexture2D(V,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,V.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,V.unpackAlignment),U.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,k,E.x,E.y,z,_t,bt,Lt,U.image.data):U.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,k,E.x,E.y,U.mipmaps[0].width,U.mipmaps[0].height,bt,U.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,k,E.x,E.y,bt,Lt,U.image),k===0&&V.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Mt.unbindTexture()},this.copyTextureToTexture3D=function(E,U,V,k,z=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _t=E.max.x-E.min.x+1,bt=E.max.y-E.min.y+1,Lt=E.max.z-E.min.z+1,Ut=ot.convert(k.format),qt=ot.convert(k.type);let zt;if(k.isData3DTexture)w.setTexture3D(k,0),zt=F.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)w.setTexture2DArray(k,0),zt=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment);const Ht=F.getParameter(F.UNPACK_ROW_LENGTH),me=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ke=F.getParameter(F.UNPACK_SKIP_PIXELS),we=F.getParameter(F.UNPACK_SKIP_ROWS),Rn=F.getParameter(F.UNPACK_SKIP_IMAGES),fe=V.isCompressedTexture?V.mipmaps[z]:V.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,fe.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,fe.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,E.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,E.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,E.min.z),V.isDataTexture||V.isData3DTexture?F.texSubImage3D(zt,z,U.x,U.y,U.z,_t,bt,Lt,Ut,qt,fe.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(zt,z,U.x,U.y,U.z,_t,bt,Lt,Ut,fe.data)):F.texSubImage3D(zt,z,U.x,U.y,U.z,_t,bt,Lt,Ut,qt,fe),F.pixelStorei(F.UNPACK_ROW_LENGTH,Ht),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,me),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ke),F.pixelStorei(F.UNPACK_SKIP_ROWS,we),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Rn),z===0&&k.generateMipmaps&&F.generateMipmap(zt),Mt.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?w.setTextureCube(E,0):E.isData3DTexture?w.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?w.setTexture2DArray(E,0):w.setTexture2D(E,0),Mt.unbindTexture()},this.resetState=function(){C=0,A=0,R=null,Mt.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===zo?"display-p3":"srgb",e.unpackColorSpace=te.workingColorSpace===xa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Se?Pi:Ph}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Pi?Se:kn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class i_ extends $h{}i_.prototype.isWebGL1Renderer=!0;class Wo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new At(t),this.density=e}clone(){return new Wo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class s_ extends ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Yc extends _e{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const es=new he,Jc=new he,zr=[],Kc=new Oi,r_=new he,Fs=new vt,Os=new ws;class Zc extends vt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Yc(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,r_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Oi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,es),Kc.copy(t.boundingBox).applyMatrix4(es),this.boundingBox.union(Kc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ws),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,es),Os.copy(t.boundingSphere).applyMatrix4(es),this.boundingSphere.union(Os)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Fs.geometry=this.geometry,Fs.material=this.material,Fs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Os.copy(this.boundingSphere),Os.applyMatrix4(i),t.ray.intersectsSphere(Os)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,es),Jc.multiplyMatrices(i,es),Fs.matrixWorld=Jc,Fs.raycast(t,zr);for(let a=0,o=zr.length;a<o;a++){const l=zr[a];l.instanceId=r,l.object=this,e.push(l)}zr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Yc(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends As{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const jc=new he,wo=new Oh,Gr=new ws,Hr=new P;class Di extends ue{constructor(t=new pe,e=new ni){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Gr.copy(i.boundingSphere),Gr.applyMatrix4(s),Gr.radius+=r,t.ray.intersectsSphere(Gr)===!1)return;jc.copy(s).invert(),wo.copy(t.ray).applyMatrix4(jc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=d,v=p;_<v;_++){const m=c.getX(_);Hr.fromBufferAttribute(u,m),$c(Hr,m,l,s,t,e,this)}}else{const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let _=d,v=p;_<v;_++)Hr.fromBufferAttribute(u,_),$c(Hr,_,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function $c(n,t,e,i,s,r,a){const o=wo.distanceSqToPoint(n);if(o<e){const l=new P;wo.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}class Xo extends Ye{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class An{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);const h=i[s],d=i[s+1]-h,p=(a-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new ut:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new P,s=[],r=[],a=[],o=new P,l=new he;for(let p=0;p<=t;p++){const _=p/t;s[p]=this.getTangentAt(_,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Re(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,_))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Re(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],p*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class qo extends An{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){const i=e||new ut,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class a_ extends qo{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Yo(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,s(a,o,d,p)},calc:function(r){const a=r*r,o=a*r;return n+t*r+e*a+i*o}}}const Vr=new P,lo=new Yo,co=new Yo,ho=new Yo;class o_ extends An{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new P){const i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Vr.subVectors(s[0],s[1]).add(s[0]),c=Vr);const u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Vr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Vr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);v<1e-4&&(v=1),_<1e-4&&(_=v),m<1e-4&&(m=v),lo.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,_,v,m),co.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,_,v,m),ho.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,_,v,m)}else this.curveType==="catmullrom"&&(lo.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),co.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ho.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(lo.calc(l),co.calc(l),ho.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Qc(n,t,e,i,s){const r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function l_(n,t){const e=1-n;return e*e*t}function c_(n,t){return 2*(1-n)*n*t}function h_(n,t){return n*n*t}function Ws(n,t,e,i){return l_(n,t)+c_(n,e)+h_(n,i)}function u_(n,t){const e=1-n;return e*e*e*t}function f_(n,t){const e=1-n;return 3*e*e*n*t}function d_(n,t){return 3*(1-n)*n*n*t}function p_(n,t){return n*n*n*t}function Xs(n,t,e,i,s){return u_(n,t)+f_(n,e)+d_(n,i)+p_(n,s)}class Qh extends An{constructor(t=new ut,e=new ut,i=new ut,s=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ut){const i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Xs(t,s.x,r.x,a.x,o.x),Xs(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class m_ extends An{constructor(t=new P,e=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new P){const i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Xs(t,s.x,r.x,a.x,o.x),Xs(t,s.y,r.y,a.y,o.y),Xs(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class tu extends An{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class g_ extends An{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class eu extends An{constructor(t=new ut,e=new ut,i=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ut){const i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Ws(t,s.x,r.x,a.x),Ws(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class __ extends An{constructor(t=new P,e=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new P){const i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Ws(t,s.x,r.x,a.x),Ws(t,s.y,r.y,a.y),Ws(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class nu extends An{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){const i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(Qc(o,l.x,c.x,h.x,u.x),Qc(o,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new ut().fromArray(s))}return this}}var th=Object.freeze({__proto__:null,ArcCurve:a_,CatmullRomCurve3:o_,CubicBezierCurve:Qh,CubicBezierCurve3:m_,EllipseCurve:qo,LineCurve:tu,LineCurve3:g_,QuadraticBezierCurve:eu,QuadraticBezierCurve3:__,SplineCurve:nu});class v_ extends An{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new th[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new th[s.type]().fromJSON(s))}return this}}class x_ extends v_{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new tu(this.currentPoint.clone(),new ut(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new eu(this.currentPoint.clone(),new ut(t,e),new ut(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){const o=new Qh(this.currentPoint.clone(),new ut(t,e),new ut(i,s),new ut(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new nu(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,a,o,l),this}absellipse(t,e,i,s,r,a,o,l){const c=new qo(t,e,i,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Jo extends pe{constructor(t=[new ut(0,-.5),new ut(.5,0),new ut(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=Re(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/e,u=new P,d=new ut,p=new P,_=new P,v=new P;let m=0,f=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,f=t[y+1].y-t[y].y,p.x=f*1,p.y=-m,p.z=f*0,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[y+1].x-t[y].x,f=t[y+1].y-t[y].y,p.x=f*1,p.y=-m,p.z=f*0,_.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(_)}for(let y=0;y<=e;y++){const S=i+y*h*s,T=Math.sin(S),C=Math.cos(S);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*T,u.y=t[A].y,u.z=t[A].x*C,a.push(u.x,u.y,u.z),d.x=y/e,d.y=A/(t.length-1),o.push(d.x,d.y);const R=l[3*A+0]*T,I=l[3*A+1],x=l[3*A+0]*C;c.push(R,I,x)}}for(let y=0;y<e;y++)for(let S=0;S<t.length-1;S++){const T=S+y*t.length,C=T,A=T+t.length,R=T+t.length+1,I=T+1;r.push(C,A,I),r.push(R,I,A)}this.setIndex(r),this.setAttribute("position",new ie(a,3)),this.setAttribute("uv",new ie(o,2)),this.setAttribute("normal",new ie(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jo(t.points,t.segments,t.phiStart,t.phiLength)}}class Zn extends Jo{constructor(t=1,e=1,i=4,s=8){const r=new x_;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new Zn(t.radius,t.length,t.capSegments,t.radialSegments)}}class ii extends pe{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new P,h=new ut;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=i+u/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(o,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ii(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class an extends pe{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],p=[];let _=0;const v=[],m=i/2;let f=0;y(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new ie(u,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(p,2));function y(){const T=new P,C=new P;let A=0;const R=(e-t)/i;for(let I=0;I<=r;I++){const x=[],b=I/r,H=b*(e-t)+t;for(let W=0;W<=s;W++){const nt=W/s,D=nt*l+o,O=Math.sin(D),q=Math.cos(D);C.x=H*O,C.y=-b*i+m,C.z=H*q,u.push(C.x,C.y,C.z),T.set(O,R,q).normalize(),d.push(T.x,T.y,T.z),p.push(nt,1-b),x.push(_++)}v.push(x)}for(let I=0;I<s;I++)for(let x=0;x<r;x++){const b=v[x][I],H=v[x+1][I],W=v[x+1][I+1],nt=v[x][I+1];h.push(b,H,nt),h.push(H,W,nt),A+=6}c.addGroup(f,A,0),f+=A}function S(T){const C=_,A=new ut,R=new P;let I=0;const x=T===!0?t:e,b=T===!0?1:-1;for(let W=1;W<=s;W++)u.push(0,m*b,0),d.push(0,b,0),p.push(.5,.5),_++;const H=_;for(let W=0;W<=s;W++){const D=W/s*l+o,O=Math.cos(D),q=Math.sin(D);R.x=x*q,R.y=m*b,R.z=x*O,u.push(R.x,R.y,R.z),d.push(0,b,0),A.x=O*.5+.5,A.y=q*.5*b+.5,p.push(A.x,A.y),_++}for(let W=0;W<s;W++){const nt=C+W,D=H+W;T===!0?h.push(D,D+1,nt):h.push(D+1,D,nt),I+=3}c.addGroup(f,I,T===!0?1:2),f+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new an(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Qn extends an{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Qn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ko extends pe{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new ie(r,3)),this.setAttribute("normal",new ie(r.slice(),3)),this.setAttribute("uv",new ie(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const S=new P,T=new P,C=new P;for(let A=0;A<e.length;A+=3)p(e[A+0],S),p(e[A+1],T),p(e[A+2],C),l(S,T,C,y)}function l(y,S,T,C){const A=C+1,R=[];for(let I=0;I<=A;I++){R[I]=[];const x=y.clone().lerp(T,I/A),b=S.clone().lerp(T,I/A),H=A-I;for(let W=0;W<=H;W++)W===0&&I===A?R[I][W]=x:R[I][W]=x.clone().lerp(b,W/H)}for(let I=0;I<A;I++)for(let x=0;x<2*(A-I)-1;x++){const b=Math.floor(x/2);x%2===0?(d(R[I][b+1]),d(R[I+1][b]),d(R[I][b])):(d(R[I][b+1]),d(R[I+1][b+1]),d(R[I+1][b]))}}function c(y){const S=new P;for(let T=0;T<r.length;T+=3)S.x=r[T+0],S.y=r[T+1],S.z=r[T+2],S.normalize().multiplyScalar(y),r[T+0]=S.x,r[T+1]=S.y,r[T+2]=S.z}function h(){const y=new P;for(let S=0;S<r.length;S+=3){y.x=r[S+0],y.y=r[S+1],y.z=r[S+2];const T=m(y)/2/Math.PI+.5,C=f(y)/Math.PI+.5;a.push(T,1-C)}_(),u()}function u(){for(let y=0;y<a.length;y+=6){const S=a[y+0],T=a[y+2],C=a[y+4],A=Math.max(S,T,C),R=Math.min(S,T,C);A>.9&&R<.1&&(S<.2&&(a[y+0]+=1),T<.2&&(a[y+2]+=1),C<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function p(y,S){const T=y*3;S.x=t[T+0],S.y=t[T+1],S.z=t[T+2]}function _(){const y=new P,S=new P,T=new P,C=new P,A=new ut,R=new ut,I=new ut;for(let x=0,b=0;x<r.length;x+=9,b+=6){y.set(r[x+0],r[x+1],r[x+2]),S.set(r[x+3],r[x+4],r[x+5]),T.set(r[x+6],r[x+7],r[x+8]),A.set(a[b+0],a[b+1]),R.set(a[b+2],a[b+3]),I.set(a[b+4],a[b+5]),C.copy(y).add(S).add(T).divideScalar(3);const H=m(C);v(A,b+0,y,H),v(R,b+2,S,H),v(I,b+4,T,H)}}function v(y,S,T,C){C<0&&y.x===1&&(a[S]=y.x-1),T.x===0&&T.z===0&&(a[S]=C/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ko(t.vertices,t.indices,t.radius,t.details)}}class Zo extends Ko{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Zo(t.radius,t.detail)}}class qe extends pe{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new P,d=new P,p=[],_=[],v=[],m=[];for(let f=0;f<=i;f++){const y=[],S=f/i;let T=0;f===0&&a===0?T=.5/e:f===i&&l===Math.PI&&(T=-.5/e);for(let C=0;C<=e;C++){const A=C/e;u.x=-t*Math.cos(s+A*r)*Math.sin(a+S*o),u.y=t*Math.cos(a+S*o),u.z=t*Math.sin(s+A*r)*Math.sin(a+S*o),_.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(A+T,1-S),y.push(c++)}h.push(y)}for(let f=0;f<i;f++)for(let y=0;y<e;y++){const S=h[f][y+1],T=h[f][y],C=h[f+1][y],A=h[f+1][y+1];(f!==0||a>0)&&p.push(S,T,A),(f!==i-1||l<Math.PI)&&p.push(T,C,A)}this.setIndex(p),this.setAttribute("position",new ie(_,3)),this.setAttribute("normal",new ie(v,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ln extends pe{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new P,u=new P,d=new P;for(let p=0;p<=i;p++)for(let _=0;_<=s;_++){const v=_/s*r,m=p/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(_/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let _=1;_<=s;_++){const v=(s+1)*p+_-1,m=(s+1)*(p-1)+_-1,f=(s+1)*(p-1)+_,y=(s+1)*p+_;a.push(v,m,y),a.push(m,f,y)}this.setIndex(a),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ln(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class It extends As{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lh,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class jo extends ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new At(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class M_ extends jo{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new At(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const uo=new he,eh=new P,nh=new P;class iu{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ho,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;eh.setFromMatrixPosition(t.matrixWorld),e.position.copy(eh),nh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(nh),e.updateMatrixWorld(),uo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(uo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class S_ extends iu{constructor(){super(new Qe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,i=ms*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(i!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class su extends jo{constructor(t,e,i=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.target=new ue,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new S_}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class y_ extends iu{constructor(){super(new Vo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fo extends jo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.target=new ue,this.shadow=new y_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class E_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ih(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ih();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ih(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oo);const ru={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class nr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const T_=new Vo(-1,1,1,-1,0,1);class b_ extends pe{constructor(){super(),this.setAttribute("position",new ie([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ie([0,2,0,0,2,0],2))}}const w_=new b_;class au{constructor(t){this._mesh=new vt(w_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,T_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class A_ extends nr{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof tn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=la.clone(t.uniforms),this.material=new tn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new au(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class sh extends nr{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class R_ extends nr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class C_{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new ut);this._width=i.width,this._height=i.height,e=new _n(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Hn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new A_(ru),this.copyPass.material.blending=Gn,this.clock=new E_}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}sh!==void 0&&(a instanceof sh?i=!0:a instanceof R_&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new ut);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class P_ extends nr{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new At}render(t,e,i){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const L_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new At(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class _s extends nr{constructor(t,e,i,s){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new ut(t.x,t.y):new ut(256,256),this.clearColor=new At(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new _n(r,a,{type:Hn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new _n(r,a,{type:Hn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new _n(r,a,{type:Hn});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),a=Math.round(a/2)}const o=L_;this.highPassUniforms=la.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new tn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ut(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=ru;this.copyUniforms=la.clone(h.uniforms),this.blendMaterial=new tn({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:pn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new At,this.oldClearAlpha=1,this.basic=new Nn,this.fsQuad=new au(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ut(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=_s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=_s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new tn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ut(.5,.5)},direction:{value:new ut(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new tn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}_s.BlurDirectionX=new ut(1,0);_s.BlurDirectionY=new ut(0,1);function D_(n){const t=new $h({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0});t.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),t.setSize(window.innerWidth,window.innerHeight),t.outputColorSpace=Se,t.toneMapping=Sh,t.toneMappingExposure=1.15,t.shadowMap.enabled=!0,t.shadowMap.type=xh,n.appendChild(t.domElement);const e=new s_;e.background=new At(393487),e.fog=new Wo(393487,.018);const i=new Qe(58,window.innerWidth/window.innerHeight,.1,400);i.position.set(-8,6,12);const s=new M_(10123007,1444398,.55);e.add(s);const r=new fo(16773328,.7);r.position.set(-12,26,10),r.castShadow=!0,r.shadow.mapSize.set(1024,1024),r.shadow.camera.near=1,r.shadow.camera.far=90,r.shadow.camera.left=-40,r.shadow.camera.right=40,r.shadow.camera.top=40,r.shadow.camera.bottom=-40,r.shadow.bias=-8e-4,e.add(r),e.add(r.target);const a=new fo(8376575,.5);a.position.set(16,12,-16),e.add(a);const o=new fo(16756832,.25);o.position.set(6,-4,14),e.add(o);const l=new C_(t);l.addPass(new P_(e,i));const c=new _s(new ut(window.innerWidth,window.innerHeight),.7,.85,.82);l.addPass(c);function h(){const p=window.innerWidth,_=window.innerHeight;i.aspect=p/_,i.updateProjectionMatrix(),t.setSize(p,_),l.setSize(p,_)}window.addEventListener("resize",h);const d=new URLSearchParams(location.search).has("lowfx")?()=>t.render(e,i):()=>l.render();return{renderer:t,scene:e,camera:i,composer:l,key:r,ambient:s,rim:a,fill:o,render:d}}function rh(n="#d4293a",t="#f6e9cf",e=2){const i=document.createElement("canvas");i.width=128,i.height=8;const s=i.getContext("2d");for(let a=0;a<e*2;a++)s.fillStyle=a%2?t:n,s.fillRect(a/(e*2)*i.width,0,i.width/(e*2),i.height);const r=new Xo(i);return r.wrapS=Ui,r.wrapT=Ui,r.colorSpace=Se,r}function U_(n="#20e0ff"){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d");e.strokeStyle=n,e.lineWidth=2,e.strokeRect(1,1,62,62);const i=new Xo(t);return i.wrapS=i.wrapT=Ui,i}const ah=[{bg:393487,fd:.018,hs:10123007,hg:1444398,key:16773328,ki:.7},{bg:267014,fd:.024,hs:9437087,hg:467723,key:15269840,ki:.75},{bg:3805222,fd:.012,hs:16756848,hg:3481642,key:16763024,ki:.85},{bg:66056,fd:.008,hs:7307263,hg:263180,key:12571903,ki:.55}].map(n=>({bg:new At(n.bg),fd:n.fd,hs:new At(n.hs),hg:new At(n.hg),key:new At(n.key),ki:n.ki}));function I_(n,t){const e=new Ce;n.add(e);const i=[],s=[],[r,a,o,l]=t,c=r.x0,u=l.x1-c,d=[{c:1837612,rough:.42,metal:.45},{c:795664,rough:.85,metal:.05},{c:14728308,rough:.95,metal:0},{c:592148,rough:.5,metal:.6}];t.forEach((N,G)=>{const Y=G===0?20:0,ht=G===3?20:0,et=N.x1-N.x0+Y+ht,st=new vt(new Wn(et,1,40),new It({color:d[G].c,roughness:d[G].rough,metalness:d[G].metal}));st.position.set(N.x0-Y+et/2,-8.5,0),st.receiveShadow=!0,e.add(st)});const p=(r.x0+r.x1)/2,_=r.x1-r.x0,v=new vt(new ii(13,48),new It({color:9048880,roughness:.3,metalness:.55,emissive:2753552,emissiveIntensity:.5}));v.rotation.x=-Math.PI/2,v.position.set(p,-7.97,0),v.receiveShadow=!0,e.add(v);const m=new vt(new ln(13,.28,8,64),new It({color:16764735,emissive:16747008,emissiveIntensity:1.1,roughness:.4}));m.rotation.x=-Math.PI/2,m.position.set(p,-7.9,0),e.add(m);const f=new It({color:16764735,emissive:16747008,emissiveIntensity:1.2,roughness:.5});for(const N of[-9,9]){const G=new vt(new Wn(_+16,.25,.5),f);G.position.set(p,-7.9,N),e.add(G)}const y=_/2+18,S=13,T=33,C=rh("#5a1420","#3a2a1e",26);C.repeat.set(26,1);const A=new vt(new an(y,y,S+8.5,48,1,!0),new It({map:C,side:We,roughness:.95,emissive:1182228,emissiveIntensity:.35}));A.position.set(p,(S-8.5)/2,0),e.add(A);const R=rh("#d4293a","#f6e9cf",1);R.repeat.set(24,1);const I=new vt(new an(6,y,T-S,48,1,!0),new It({map:R,side:ge,roughness:.8,emissive:2755856,emissiveIntensity:.5}));I.position.set(p,(S+T)/2,0),e.add(I);const x=new vt(new ln(6,.4,8,40),new It({color:16764735,emissive:16755456,emissiveIntensity:1.3,roughness:.4}));x.rotation.x=Math.PI/2,x.position.set(p,T,0),e.add(x);const b=new vt(new an(.3,.36,T+12,10),new It({color:15260088,roughness:.7,metalness:.2}));b.position.set(p,(T+12)/2-8.5,0),e.add(b);const H=new vt(new Qn(.5,1.6,3),new It({color:16735354,emissive:16723285,emissiveIntensity:.7,side:ge}));H.position.set(p+.8,T+3.2,0),H.rotation.z=-Math.PI/2,e.add(H);const W=new vt(new ln(3.4,.45,10,32,Math.PI),new It({color:16769162,emissive:16755504,emissiveIntensity:1.4,roughness:.4}));W.position.set(r.x1,-4.6,0),e.add(W);const nt=new pe,D=700,O=new Float32Array(D*3);for(let N=0;N<D;N++)O[N*3]=c-30+Math.random()*(u+90),O[N*3+1]=24+Math.random()*46,O[N*3+2]=(Math.random()-.5)*50;nt.setAttribute("position",new _e(O,3));const q=new Di(nt,new ni({color:16773824,size:.5,sizeAttenuation:!0,transparent:!0,opacity:.9}));e.add(q);const j=3,J=Math.ceil(_/2.2)+6,$=j*J*2,Q=new qe(.5,10,10),at=new It({roughness:.7,vertexColors:!1}),it=new Zc(Q,at,$),X=[5556479,16739760,16764735,9109441,12160255,16747100],Z=new ue,mt=[];let yt=0;for(const N of[-1,1])for(let G=0;G<j;G++)for(let Y=0;Y<J;Y++){const ht=r.x0+4+Y*2.2+G%2*1.1,et=N*(12+G*2.2),st=-6.5+G*1.4;Z.position.set(ht,st,et),Z.scale.setScalar(.8+Math.random()*.5),Z.updateMatrix(),it.setMatrixAt(yt,Z.matrix),it.setColorAt(yt,new At(X[Math.random()*X.length|0]).multiplyScalar(.6)),mt.push({x:ht,y:st,z:et}),yt++}it.instanceMatrix.needsUpdate=!0,it.instanceColor&&(it.instanceColor.needsUpdate=!0),e.add(it),s.push(N=>{for(let G=0;G<mt.length;G++){const Y=mt[G];Z.position.set(Y.x,Y.y+Math.sin(N*2+G*.7)*.12,Y.z),Z.updateMatrix(),it.setMatrixAt(G,Z.matrix)}it.instanceMatrix.needsUpdate=!0});const Et=[16735354,16764735,5556479,9109441,12160255],Nt=Math.floor(_/3),Ot=new Qn(.5,1.1,4),Pt=new It({emissive:0,roughness:.6,side:ge,vertexColors:!1}),kt=new Zc(Ot,Pt,Nt),F=new ue;for(let N=0;N<Nt;N++){const G=new At(Et[N%Et.length]);F.position.set(r.x0+4+N*3,13+Math.sin(N*.6)*.4,-6),F.rotation.set(Math.PI,Math.PI/4,0),F.scale.setScalar(1),F.updateMatrix(),kt.setMatrixAt(N,F.matrix),kt.setColorAt(N,G)}kt.instanceMatrix.needsUpdate=!0,kt.instanceColor&&(kt.instanceColor.needsUpdate=!0),e.add(kt);const De=[{x:r.x0+12,col:16739760},{x:p,col:5556479},{x:r.x1-6,col:16764735}];for(const N of De){const G=new su(N.col,120,60,Math.PI/9,.5,1.4);G.position.set(N.x,20,6);const Y=new ue;Y.position.set(N.x,0,0),e.add(Y),G.target=Y,e.add(G);const ht=new vt(new Qn(2.5,26,24,1,!0),new Nn({color:N.col,transparent:!0,opacity:.03,side:ge,depthWrite:!1,blending:pn}));ht.position.copy(G.position),e.add(ht),i.push({sp:G,beam:ht,tgt:Y,x:N.x,phase:Math.random()*6})}s.push(N=>{for(const G of i){const Y=Math.sin(N*.7+G.phase)*7;G.tgt.position.x=G.x+Y,G.beam.rotation.z=-Math.atan2(Y,26)}H.rotation.z=-Math.PI/2+Math.sin(N*3)*.2});{const N=a.x1-a.x0,G=new It({color:2062892,roughness:.85}),Y=new It({color:3120184,roughness:.85}),ht=new It({color:4861976,roughness:.9});for(let ft=0;ft<8;ft++){const gt=a.x0+2+Math.random()*(N-4),rt=(ft%2?1:-1)*(9+Math.random()*5),ot=4+Math.random()*3,St=new vt(new an(.35,.5,ot,7),ht);St.position.set(gt,-8+ot/2,rt),e.add(St);const Zt=new vt(new qe(1.6+Math.random(),9,9),ft%2?G:Y);Zt.position.set(gt,-8+ot+.8,rt),Zt.scale.y=.8,e.add(Zt)}const et=new It({color:4033075,roughness:.9});for(let ft=0;ft<7;ft++){const gt=4+Math.random()*4,rt=new vt(new an(.05,.08,gt,5),et);rt.position.set(a.x0+2+Math.random()*(N-4),13-gt/2,(ft%2?1:-1)*(4+Math.random()*3)),e.add(rt)}const st=60,xt=new Float32Array(st*3),Tt=[];for(let ft=0;ft<st;ft++)Tt.push({x:a.x0+Math.random()*N,y:-6+Math.random()*14,z:(Math.random()-.5)*18,p:Math.random()*6.28});const K=new pe;K.setAttribute("position",new _e(xt,3));const Rt=new Di(K,new ni({color:14221168,size:.28,transparent:!0,opacity:.9,blending:pn,depthWrite:!1}));e.add(Rt),s.push(ft=>{for(let gt=0;gt<st;gt++){const rt=Tt[gt];xt[gt*3]=rt.x+Math.sin(ft*.7+rt.p)*1.4,xt[gt*3+1]=rt.y+Math.sin(ft*1.1+rt.p*2)*.9,xt[gt*3+2]=rt.z+Math.cos(ft*.5+rt.p)*1.2}K.attributes.position.needsUpdate=!0})}{const N=o.x1-o.x0,G=(o.x0+o.x1)/2,Y=new vt(new ii(8,32),new Nn({color:16752704}));Y.position.set(G,9,-38),e.add(Y);const ht=new vt(new ii(12,32),new Nn({color:16740400,transparent:!0,opacity:.25,blending:pn,depthWrite:!1}));ht.position.set(G,9,-38.5),e.add(ht);const et=new vt(new Li(N+34,20),new It({color:1731210,roughness:.25,metalness:.6,emissive:670282,emissiveIntensity:.5}));et.rotation.x=-Math.PI/2,et.position.set(G,-7.95,-22),e.add(et);const st=new It({color:9068596,roughness:.9}),xt=new It({color:2792010,roughness:.8,side:ge});for(let Rt=0;Rt<5;Rt++){const ft=o.x0+3+Rt/5*(N-6)+Math.random()*2,gt=(Rt%2?1:-1)*(9+Math.random()*4),rt=5+Math.random()*2,ot=new vt(new an(.22,.34,rt,7),st);ot.position.set(ft,-8+rt/2,gt),ot.rotation.z=(Math.random()-.5)*.25,e.add(ot);for(let St=0;St<5;St++){const Zt=new vt(new Qn(.35,2.6,4),xt),ee=St/5*Math.PI*2;Zt.position.set(ft+Math.cos(ee)*1.1,-8+rt+.3,gt+Math.sin(ee)*1.1),Zt.rotation.set(Math.sin(ee)*1.9,0,-Math.cos(ee)*1.9),e.add(Zt)}}const Tt=new Nn({color:16774368,side:ge}),K=[];for(let Rt=0;Rt<3;Rt++){const ft=new Ce,gt=[];for(const rt of[-1,1]){const ot=new vt(new Li(.9,.28),Tt);ot.position.x=rt*.45,ft.add(ot),gt.push(ot)}ft.position.set(o.x0+4+Rt*N/3,8+Rt*2,-12-Rt*4),e.add(ft),K.push({gull:ft,wings:gt,bx:ft.position.x,ph:Rt*2.1})}s.push(Rt=>{for(const ft of K){const gt=Math.sin(Rt*7+ft.ph)*.6;ft.wings[0].rotation.y=gt,ft.wings[1].rotation.y=-gt,ft.gull.position.x=ft.bx+Math.sin(Rt*.22+ft.ph)*5,ft.gull.position.y+=Math.sin(Rt*1.3+ft.ph)*.004}})}{const N=l.x1-l.x0,G=(l.x0+l.x1)/2,Y=U_("#20e0ff");Y.repeat.set(N/2.4,16);const ht=new vt(new Li(N+16,40),new Nn({map:Y,transparent:!0,opacity:.35,blending:pn,depthWrite:!1}));ht.rotation.x=-Math.PI/2,ht.position.set(G,-7.9,0),e.add(ht);for(let rt=0;rt<5;rt++){const ot=new vt(new ln(6,.14,8,40),new It({color:rt%2?16732120:3205375,emissive:rt%2?11540634:563392,emissiveIntensity:1.6,roughness:.3}));ot.rotation.y=Math.PI/2,ot.position.set(l.x0+3+(rt+.5)*(N-6)/5,0,0),e.add(ot)}const et=new vt(new qe(4,20,20),new It({color:10119935,emissive:3674730,emissiveIntensity:.8,roughness:.6}));et.position.set(G+10,20,-34),e.add(et);const st=new vt(new ln(6,.35,8,40),new It({color:16767392,emissive:10512928,emissiveIntensity:.9,roughness:.5}));st.rotation.x=Math.PI/2.6,st.position.copy(et.position),e.add(st);const xt=6,Tt=new Float32Array(xt*3),K=[];for(let rt=0;rt<xt;rt++)Tt[rt*3]=l.x0+Math.random()*N,Tt[rt*3+1]=20+Math.random()*25,Tt[rt*3+2]=-20-Math.random()*15,K.push({vx:-14-Math.random()*10,vy:-6-Math.random()*5});const Rt=new pe;Rt.setAttribute("position",new _e(Tt,3));const ft=new Di(Rt,new ni({color:13693183,size:.7,transparent:!0,opacity:.95,blending:pn,depthWrite:!1}));e.add(ft);let gt=0;s.push(rt=>{const ot=Math.min(.05,rt-gt);gt=rt;for(let St=0;St<xt;St++)Tt[St*3]+=K[St].vx*ot,Tt[St*3+1]+=K[St].vy*ot,(Tt[St*3+1]<5||Tt[St*3]<l.x0-10)&&(Tt[St*3]=l.x0+10+Math.random()*(N+10),Tt[St*3+1]=26+Math.random()*20);Rt.attributes.position.needsUpdate=!0})}const wt=[a.x0,o.x0,l.x0],Ft=N=>(N=Math.max(0,Math.min(1,N)),N*N*(3-2*N)),Mt=new At,se=new At,Bt=new At,w=new At;function M(N,G){let Y=0;for(const Tt of wt)Y+=Ft((G-(Tt-4))/8);const ht=Math.min(2,Math.floor(Y)),et=Y-ht,st=ah[ht],xt=ah[Math.min(3,ht+1)];Mt.lerpColors(st.bg,xt.bg,et),se.lerpColors(st.hs,xt.hs,et),Bt.lerpColors(st.hg,xt.hg,et),w.lerpColors(st.key,xt.key,et),N.scene.background.copy(Mt),N.scene.fog.color.copy(Mt),N.scene.fog.density=st.fd+(xt.fd-st.fd)*et,N.ambient.color.copy(se),N.ambient.groundColor.copy(Bt),N.key.color.copy(w),N.key.intensity=st.ki+(xt.ki-st.ki)*et}function B(N){for(const G of s)G(N)}return{group:e,update:B,applyMood:M,spots:i}}const N_=1.92;function $o(n){const t=n==="claire",e=new Ce,i=new Ce,s=16239008,r=t?16735142:3112928,a=t?16765503:8380671,o=t?16242808:15780944,l=(C,A={})=>new It({color:C,roughness:.55,metalness:0,...A}),c=()=>l(o,{roughness:.45});if(!t){const C=new vt(new Qn(.62,1.1,12,1,!0,0,Math.PI),new It({color:13904698,emissive:5901587,emissiveIntensity:.35,roughness:.6,side:ge}));C.position.set(0,.7,-.34),C.rotation.x=-.35,i.add(C),e.userData.cape=C}const h=new vt(new Zn(.42,.7,6,12),l(r));if(h.position.y=.55,h.castShadow=!0,i.add(h),t){const C=new vt(new Qn(.66,.42,16,1,!0),new It({color:16769520,emissive:16739760,emissiveIntensity:.5,roughness:.5,side:ge}));C.position.y=.34,C.rotation.x=Math.PI,i.add(C)}const u=new vt(new ii(.18,5),new It({color:16773808,emissive:a,emissiveIntensity:1.6,side:ge}));u.position.set(0,.72,.43),i.add(u);const d=new vt(new qe(.34,16,16),l(s));d.position.y=1.28,d.castShadow=!0,i.add(d);const p=new vt(new qe(.37,16,16,0,Math.PI*2,0,Math.PI*(t?.7:.62)),c());if(p.position.y=t?1.33:1.37,i.add(p),t){const C=new vt(new Zn(.22,.6,4,10),c());C.scale.set(1.5,1,.55),C.position.set(0,.95,-.26),i.add(C);for(const R of[-1,1]){const I=new vt(new Zn(.11,.62,4,8),c());I.position.set(R*.33,.98,-.06),I.rotation.z=R*-.08,i.add(I)}const A=new vt(new ii(.09,5),new It({color:16773808,emissive:16765503,emissiveIntensity:1.4,side:ge}));A.position.set(-.24,1.52,.24),A.rotation.y=-.4,i.add(A)}else{const C=new vt(new qe(.2,10,10),c());C.scale.set(1.2,.6,.6),C.position.set(-.1,1.5,.22),i.add(C);for(const I of[-1,1]){const x=new vt(new Zn(.09,.34,4,8),c());x.position.set(I*.31,1.16,.02),x.rotation.z=I*-.1,i.add(x)}const A=new Ce;A.position.set(0,1.42,-.3);let R=0;for(let I=0;I<5;I++){const x=.13-I*.017,b=new vt(new qe(x,10,10),c());if(R-=x*1.55,b.position.set(0,R,-.02*I),A.add(b),I===4){const H=new vt(new ln(.055,.022,6,10),new It({color:15216720,emissive:10489888,emissiveIntensity:.5}));H.position.set(0,R+x*.6,-.08),H.rotation.x=Math.PI/2,A.add(H)}}i.add(A),e.userData.braid=A}const _=new It({color:2101280});for(const C of[-.12,.12]){const A=new vt(new qe(.055,8,8),_);A.position.set(C,1.31,.3),i.add(A);const R=new vt(new qe(.02,6,6),new It({color:16777215,emissive:16777215,emissiveIntensity:1}));R.position.set(C+.02,1.33,.35),i.add(R)}const v=new It({color:16752324,transparent:!0,opacity:.7});for(const C of[-.21,.21]){const A=new vt(new ii(.07,10),v);A.position.set(C,1.22,.3),i.add(A)}const m=new vt(new ln(.11,.022,6,14,Math.PI),new It({color:8003632}));m.position.set(0,1.16,.3),m.rotation.z=Math.PI,i.add(m);const f=[];for(const C of[-1,1]){const A=new Ce;A.position.set(C*.34,1.02,0);const R=new vt(new Zn(.13,.72,4,8),l(s));R.position.y=.45,R.castShadow=!0,A.add(R);const I=new vt(new qe(.15,10,10),l(s));I.position.y=.9,A.add(I);const x=new vt(new ln(.14,.045,6,12),l(a,{emissive:a,emissiveIntensity:.4}));x.position.y=.72,x.rotation.x=Math.PI/2,A.add(x),i.add(A),f.push(A)}const y=l(a),S=[];for(const C of[-1,1]){const A=new Ce;A.position.set(C*.18,.2,0);const R=new vt(new Zn(.15,.8,4,8),y);R.position.y=-.45,R.castShadow=!0,A.add(R);const I=new vt(new qe(.17,8,8),l(2757939));I.position.set(0,-.9,.05),A.add(I),i.add(A),S.push(A)}const T=t?1.06:.92;return i.scale.setScalar(T),i.position.y=N_*(1-T),e.add(i),e.userData.legs=S,e.userData.arms=f,e.userData.char=n,e}function Ao(n,t,e,i){const{legs:s,arms:r,cape:a,braid:o}=n.userData;if(e==="fly")s[0].rotation.x=-1.15,s[1].rotation.x=-1.15,r[0].rotation.z=1.15,r[1].rotation.z=-1.15,r[0].rotation.x=0,r[1].rotation.x=0;else if(e==="salute"){s[0].rotation.x=.15,s[1].rotation.x=-.15;const l=Math.sin(t*9)*.35;r[0].rotation.z=.15,r[0].rotation.x=0,r[1].rotation.z=-.15+l,r[1].rotation.x=-.2}else if(e==="idle"){const l=Math.sin(t*2)*.06;s[0].rotation.x=l,s[1].rotation.x=-l,r[0].rotation.z=.35,r[1].rotation.z=-.35,r[0].rotation.x=.1,r[1].rotation.x=.1}else{const l=Math.sin(t*3)*.25;s[0].rotation.x=l,s[1].rotation.x=-l,r[0].rotation.z=.05,r[1].rotation.z=-.05,r[0].rotation.x=0,r[1].rotation.x=0}a&&(a.rotation.x=-.35+Math.sin(t*4)*.12+(e==="fly"?.5:0)),o&&(e==="fly"?(o.rotation.x=-1.25+Math.sin(t*10)*.08,o.rotation.z=Math.sin(t*7)*.15):e==="swing"?(o.rotation.x=-.25+Math.sin(t*3)*.3,o.rotation.z=0):(o.rotation.x=-.12+Math.sin(t*2.2)*.08,o.rotation.z=Math.sin(t*1.7)*.1))}let Qt=null,Ei=null,Me=null,yn=null,Ro=null,ir=!1,po=0,gi=0,ca=0;const F_=()=>window.AudioContext||window.webkitAudioContext,He=n=>440*Math.pow(2,(n-69)/12);function bn(){if(!Qt)try{Qt=new(F_()),Ei=Qt.createGain(),Ei.gain.value=ir?0:.9,Ei.connect(Qt.destination),Me=Qt.createGain(),Me.gain.value=0,Me.connect(Ei),yn=Qt.createGain(),yn.gain.value=.5,yn.connect(Ei),Ro=Qt.createBuffer(1,Qt.sampleRate,Qt.sampleRate);const n=Ro.getChannelData(0);for(let t=0;t<n.length;t++)n[t]=Math.random()*2-1;Qt.state==="suspended"&&Qt.resume().catch(()=>{})}catch{Qt=null}}function Qo(n){ir=n,Ei&&(Ei.gain.value=n?0:.9)}function O_(){return{ready:!!Qt,running:Qt?Qt.state:"none",muted:ir}}function ce(n,t,e,i,s,r,a){const o=Qt.createOscillator(),l=Qt.createGain();o.type=n,o.frequency.setValueAtTime(t,e),a&&o.frequency.exponentialRampToValueAtTime(Math.max(20,a),e+i),l.gain.setValueAtTime(s,e),l.gain.exponentialRampToValueAtTime(.001,e+i),o.connect(l),l.connect(r||yn),o.start(e),o.stop(e+i+.02)}function xi(n,t,e,i,s,r){const a=Qt.createBufferSource();a.buffer=Ro,a.loop=!0;const o=Qt.createBiquadFilter();o.type="bandpass",o.frequency.value=(i+s)/2,o.Q.value=(i+s)/2/Math.max(60,s-i);const l=Qt.createGain();l.gain.setValueAtTime(e,n),l.gain.exponentialRampToValueAtTime(.001,n+t),a.connect(o),o.connect(l),l.connect(r||yn),a.start(n),a.stop(n+t+.02)}const B_=[132,116,92,124],z_=[[57,62,57,64],[55,55,53,50],[60,57,53,55],[57,53,60,55]],kr=[[12,-1,16,-1,19,-1,16,12,14,-1,17,-1,21,19,17,14],[0,-1,3,5,-1,7,-1,10,7,-1,5,3,-1,0,-1,-1],[12,-1,-1,16,-1,-1,19,-1,-1,23,-1,19,-1,16,-1,-1],[0,12,7,12,3,12,7,15,0,12,7,12,5,12,7,19]];function G_(n,t){const e=ca,i=(n>>4)%4,s=n%16,r=z_[e][i];if(e===0){s%8===0&&ce("triangle",He(r-24),t,.22,.3,Me),s%8===4&&ce("triangle",He(r-17),t,.2,.26,Me),s%4===2&&(ce("square",He(r),t,.1,.045,Me),ce("square",He(r+4),t,.1,.04,Me));const a=kr[0][s];a>=0&&ce("square",He(r+a),t,.16,.055,Me)}else if(e===1){[0,3,6,8,11,14].includes(s)&&ce("sine",150,t,.22,.5,Me,42),s%2===1&&xi(t,.05,.05,3500,7e3,Me);const a=kr[1][s];a>=0&&ce("triangle",He(r+12+a),t,.2,.1,Me)}else if(e===2){if(s===0)for(const o of[0,4,7])ce("sine",He(r+o),t,2.4,.055,Me),ce("triangle",He(r+o-12),t,2.4,.03,Me);const a=kr[2][s];a>=0&&ce("sine",He(r+a),t,.5,.07,Me)}else{if(s%2===0){const o=Qt.createOscillator(),l=Qt.createBiquadFilter(),c=Qt.createGain();o.type="sawtooth",o.frequency.value=He(r-24),l.type="lowpass",l.frequency.value=300+900*Math.abs(Math.sin(n*.5)),l.Q.value=6,c.gain.setValueAtTime(.1,t),c.gain.exponentialRampToValueAtTime(.001,t+.2),o.connect(l),l.connect(c),c.connect(Me),o.start(t),o.stop(t+.22)}const a=kr[3][s];a>=0&&s%2===0&&ce("sine",He(r+12+a),t,.18,.05,Me),s===10&&ce("sine",He(r+36),t,.35,.05,Me,He(r+24))}}function tl(n){n!==ca&&(ca=n)}function H_(n){if(!Qt)return;if(Qt.state==="suspended")try{Qt.resume()}catch{}const t=n==="playing"&&!ir?.16:0;if(Me.gain.value+=(t-Me.gain.value)*.08,n!=="playing"){gi=0;return}const e=Qt.currentTime;(!gi||gi<e-.5)&&(gi=e+.08,po=0);const i=60/B_[ca]/2;for(;gi<e+.3;)G_(po,gi),gi+=i,po++}const Xe=n=>(...t)=>{if(Qt&&!ir)try{n(Qt.currentTime,...t)}catch{}},jt={whoosh:Xe(n=>xi(n,.28,.5,500,2400)),catch:Xe((n,t)=>{const e=1+Math.min(12,t)*.045;ce("sine",660*e,n,.16,.3),ce("triangle",1320*e,n,.12,.14)}),perfect:Xe(n=>{[69,73,76].forEach((t,e)=>ce("square",He(t+12),n+e*.07,.16,.18)),xi(n+.2,.3,.1,5e3,9500)}),flip:Xe(n=>ce("triangle",520,n,.12,.2,yn,980)),star:Xe(n=>ce("sine",1420,n,.09,.18)),ring:Xe(n=>{ce("sine",988,n,.1,.2),ce("sine",1319,n+.07,.14,.18)}),net:Xe(n=>ce("triangle",150,n,.34,.32,yn,460)),fumble:Xe(n=>ce("sawtooth",220,n,.42,.16,yn,82)),fanfare:Xe(n=>[60,64,67,72].forEach((t,e)=>ce("square",He(t+12),n+e*.09,.2,.14))),applause:Xe(n=>{for(let t=0;t<34;t++)xi(n+t*.045+Math.random()*.03,.05,.06*(1-t/40),900,4200)}),click:Xe(n=>ce("sine",700,n,.05,.12)),spot:Xe(n=>{ce("sine",90,n,.5,.35,yn,55),xi(n,.25,.1,2200,6500)}),firework:Xe(n=>{xi(n,.5,.45,150,900),ce("sine",880,n,.7,.09,yn,110)}),ovation:Xe(n=>{for(let t=0;t<70;t++){const e=.02+.085*Math.min(1,t/25)*(1-Math.max(0,t-46)/26);xi(n+t*.05+Math.random()*.04,.055,Math.max(.006,e),800,4500)}})},V_="",k_="",ou=5e5,W_=3500;let hs={url:V_,key:k_};function Bi(){return!!(hs.url&&hs.key)}function X_(n,t){hs={url:n||"",key:t||""}}async function el(n,t={},e=0){const i=new AbortController,s=setTimeout(()=>i.abort(),W_);try{const r=await fetch(hs.url.replace(/\/$/,"")+"/rest/v1/scores"+n,{...t,headers:{apikey:hs.key,Authorization:"Bearer "+hs.key,"Content-Type":"application/json",...t.headers||{}},signal:i.signal});if(!r.ok)throw new Error("http "+r.status);return r}catch(r){if(e>0)return el(n,t,e-1);throw r}finally{clearTimeout(s)}}const lu=n=>(String(n||"").toUpperCase().replace(/[^A-Z0-9]/g,"")+"AAA").slice(0,3),cu=n=>Math.max(0,Math.min(ou,Math.round(+n||0)));async function q_(n=10){if(!Bi())return null;try{const e=await(await el("?select=initials,score,world,lap&order=score.desc&limit="+n,{},1)).json();return Array.isArray(e)?e.slice(0,n).map(i=>({i:lu(i.initials),s:cu(i.score),w:Math.max(0,Math.min(3,i.world|0)),l:Math.max(0,Math.min(999,i.lap|0))})):null}catch{return null}}let Co=!1;function Y_(){Co=!1}async function J_({initials:n,score:t,world:e=0,lap:i=0}){if(!Bi()||Co)return!1;Co=!0;try{return await el("",{method:"POST",body:JSON.stringify({initials:lu(n),score:cu(t),world:Math.max(0,Math.min(3,e|0)),lap:Math.max(0,Math.min(999,i|0))})}),!0}catch{return!1}}const Po=6.2,Je=3.3,oh=19,lh=15,Lo=.85,hu=1.25,uu=.42,zn=12,vs=4,en=zn*vs,xs=["Circus","Jungle","Beach","Space"],K_=1,fu=2,nl=3,ha=-3.6,Z_=-7,il=6,sr=1.55,j_=[800,1800,3500,6e3],sl=["·","🥉","🥈","🥇","💎"],rl=["🎪","🌴","🏖","🚀"],$_=n=>{let t=0;for(let e=0;e<4;e++)n>=j_[e]&&(t=e+1);return t};function du(){try{return{high:+localStorage.getItem("ts3d_high")||0,combo:+localStorage.getItem("ts3d_combo")||0,medals:JSON.parse(localStorage.getItem("ts3d_medals")||"[0,0,0,0]"),mute:localStorage.getItem("ts3d_mute")==="1",reduceFx:localStorage.getItem("ts3d_reducefx")==="1"}}catch{return{high:0,combo:0,medals:[0,0,0,0],mute:!1,reduceFx:!1}}}let Xt=du();function Js(){try{localStorage.setItem("ts3d_high",String(Xt.high)),localStorage.setItem("ts3d_combo",String(Xt.combo)),localStorage.setItem("ts3d_medals",JSON.stringify(Xt.medals)),localStorage.setItem("ts3d_mute",Xt.mute?"1":"0"),localStorage.setItem("ts3d_reducefx",Xt.reduceFx?"1":"0")}catch{}}Qo(Xt.mute);const ya=()=>{const n=new Date;return n.getUTCFullYear()*1e4+(n.getUTCMonth()+1)*100+n.getUTCDate()};function rr(){try{const n=JSON.parse(localStorage.getItem("ts3d_daily")||"null");return n&&n.d===ya()?n:null}catch{return null}}function Q_(n){try{const t=rr();(!t||n>t.s)&&localStorage.setItem("ts3d_daily",JSON.stringify({d:ya(),s:n}))}catch{}}let ua=!1;try{const n=matchMedia("(prefers-reduced-motion: reduce)");ua=n.matches;const t=e=>{ua=e.matches};n.addEventListener?n.addEventListener("change",t):n.addListener&&n.addListener(t)}catch{}const Ea=()=>ua||Xt.reduceFx,Ta=()=>Xt.reduceFx;function pu(){try{const n=JSON.parse(localStorage.getItem("ts3d_board")||"[]");return Array.isArray(n)?n:[]}catch{return[]}}let cn=pu();function tv(){try{localStorage.setItem("ts3d_board",JSON.stringify(cn))}catch{}}const mu=10;function ev(n){if(n<=0)return-1;const t=cn.filter(e=>e.s>=n).length;return t<mu?t:-1}function nv(n,t,e,i){const s={i:n,s:t,m:e,l:i};return cn.push(s),cn.sort((r,a)=>a.s-r.s),cn=cn.slice(0,mu),tv(),cn.indexOf(s)}const Ms="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";let Ii=[0,0,0],vn=0,Ni=-1,Ti="local",En=null,Ks=!1,Bs=null,us=null,mo=20260718;const Mi=()=>(mo=mo*1103515245+12345&2147483647,mo/2147483647),Pe=[];{const n=[[4.5,7.5],[4.2,5.6],[4.5,6.5],[4.5,7.5]];let t=0;for(let e=0;e<en;e++){const i=Math.floor(e/zn),s=e%zn===0;if(e>0){const[o,l]=n[i];t+=e<4?4.5+Mi()*1:o+Mi()*(l-o)}const r=Po+(e===0||s?0:Mi()*2.4-1.2),a={x:t,py:r,w:i};i===K_&&!s&&(a.mv=.6+Mi()*.4,a.mvSpd=.45+Mi()*.3,a.mvPh=Mi()*6.28),Pe.push(a)}}const iv=Pe[en-1].x,al=[];for(let n=0;n<vs;n++){const t=n===0?-16:(Pe[n*zn-1].x+Pe[n*zn].x)/2,e=n===vs-1?iv+14:(Pe[(n+1)*zn-1].x+Pe[(n+1)*zn].x)/2;al.push({x0:t,x1:e})}const gu=document.getElementById("app"),xe=D_(gu),{scene:Fe,camera:ye}=xe,ch=I_(Fe,al),Do=new Ce;Fe.add(Do);const $t=[],sv=[new It({color:12160255,emissive:5910176,emissiveIntensity:.4,roughness:.5}),new It({color:5615683,emissive:1985042,emissiveIntensity:.5,roughness:.8}),new It({color:14200938,emissive:6965786,emissiveIntensity:.35,roughness:.85}),new It({color:6744831,emissive:43224,emissiveIntensity:1,roughness:.35})],_u=new It({color:16764735,emissive:16747008,emissiveIntensity:.8,roughness:.4,metalness:.2}),rv=new It({color:16777215,emissive:9109441,emissiveIntensity:1.6,roughness:.3});for(let n=0;n<en;n++){const{x:t,py:e,w:i,mv:s,mvSpd:r,mvPh:a}=Pe[n],o=new Ce,l=new vt(new an(.035,.035,Je,6),sv[i]),c=new vt(new an(.09,.09,1.5,10),_u);c.rotation.x=Math.PI/2,c.castShadow=!0,o.add(l),o.add(c),Do.add(o);const h=new vt(new qe(.18,8,8),new It({color:2757939}));h.position.set(t,e,0),Do.add(h),$t.push({x:t,bx:t,py:e,w:i,mv:s,mvSpd:r,mvPh:a,theta:(n%2?1:-1)*uu*Mi(),omega:0,g:o,rope:l,bar:c,anchor:h})}const vu=n=>new P(n.x+Je*Math.sin(n.theta),n.py-Je*Math.cos(n.theta),0),av=n=>vu(n).add(new P(0,-sr,0));function ov(n){n.mv&&(n.x=n.bx+Math.sin(g.t*n.mvSpd+n.mvPh)*n.mv,n.anchor.position.x=n.x);const t=vu(n);n.bar.position.copy(t),n.rope.position.set((n.x+t.x)/2,(n.py+t.y)/2,0),n.rope.rotation.z=-n.theta}const xu=new Ce;Fe.add(xu);const ar=[],lv=new It({color:16773808,emissive:16764735,emissiveIntensity:1.8,roughness:.3}),cv=new Zo(.34,0);for(let n=0;n<en-1;n++){const t=Pe[n],e=Pe[n+1];for(let i=0;i<2;i++){const s=(i+1)/3,r=t.x+s*(e.x-t.x),a=(t.py+e.py)/2-Je+1.4+Math.sin(s*Math.PI)*2.2,o=new vt(cv,lv);o.position.set(r,a,0),xu.add(o),ar.push({m:o,got:!1})}}const Ss=[];{const n=new It({color:16773808,emissive:16739760,emissiveIntensity:1.5,roughness:.35}),t=[];for(let e=0;e<vs;e++)for(const i of[2,6,9])t.push(e*zn+i);for(const e of t){if(e+1>=en)continue;const i=Pe[e],s=Pe[e+1],r=new vt(new ln(1,.09,10,40),n.clone());r.position.set((i.x+s.x)/2,(i.py+s.py)/2-Je*.88-sr+1.9,0),Fe.add(r),Ss.push({m:r,got:!1,gi:e,baseX:r.position.x,baseY:r.position.y,mvY:i.w===nl})}}function hv(n){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d");e.strokeStyle="#cfe8ff",e.lineWidth=3,e.beginPath();for(let s=0;s<=64;s+=16)e.moveTo(s,0),e.lineTo(s,64),e.moveTo(0,s),e.lineTo(64,s);e.stroke();const i=new Xo(t);return i.wrapS=i.wrapT=Ui,i.repeat.set(n,5),i}const ol=new Ce;Fe.add(ol);const or=[];for(let n=0;n<vs;n++){const t=al[n],e=t.x1-t.x0-3,i=new vt(new Li(e,7),new Nn({map:hv(e/1.4),transparent:!0,opacity:.3,side:ge,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.position.set((t.x0+t.x1)/2,ha,0),ol.add(i),or.push({m:i,used:!1,flashT:0})}const Wr=Pe.map(n=>({py:n.py,mv:n.mv,mvSpd:n.mvSpd,mvPh:n.mvPh}));function uv(n){let t=n?ya()*2654435761%2147483647:0;const e=()=>(t=t*1103515245+12345&2147483647,t/2147483647);for(let s=0;s<en;s++){const r=Pe[s],a=s%zn===0,o=$t[s];n?(r.py=s===0||a?Po:Po+e()*2.4-1.2,r.mv!==void 0&&(r.mv=.6+e()*.4,r.mvSpd=.45+e()*.3,r.mvPh=e()*6.28)):(r.py=Wr[s].py,r.mv=Wr[s].mv,r.mvSpd=Wr[s].mvSpd,r.mvPh=Wr[s].mvPh),o.py=r.py,o.mv=r.mv,o.mvSpd=r.mvSpd,o.mvPh=r.mvPh,o.anchor.position.y=r.py}let i=0;for(let s=0;s<en-1;s++){const r=Pe[s],a=Pe[s+1];for(let o=0;o<2;o++){const l=(o+1)/3;ar[i].m.position.y=(r.py+a.py)/2-Je+1.4+Math.sin(l*Math.PI)*2.2,i++}}for(const s of Ss){const r=Pe[s.gi],a=Pe[s.gi+1];s.baseY=(r.py+a.py)/2-Je*.88-sr+1.9,s.m.position.y=s.baseY}}const lr=260,zs=new Float32Array(lr*3).fill(-999),Yr=new Float32Array(lr*3),Zs=new pe;Zs.setAttribute("position",new _e(zs,3));Zs.setAttribute("color",new _e(Yr,3));const fv=new Di(Zs,new ni({size:.3,vertexColors:!0,transparent:!0,opacity:.95,blending:pn,depthWrite:!1}));Fe.add(fv);const ll=[];for(let n=0;n<lr;n++)ll.push({life:0,max:1,x:0,y:-999,z:0,vx:0,vy:0,vz:0});let as=[];const Xr=new At;function dv(n,t,e){const i=Math.random();let s=0;for(let r=0;r<lr&&s<52;r++){const a=ll[r];if(a.life>0)continue;a.max=a.life=1.1+Math.random()*.6,a.x=n,a.y=t,a.z=e;const o=Math.random()*Math.PI*2,l=Math.acos(Math.random()*2-1),c=4.5+Math.random()*2.5;a.vx=Math.sin(l)*Math.cos(o)*c,a.vy=Math.cos(l)*c,a.vz=Math.sin(l)*Math.sin(o)*c*.4,Xr.setHSL((i+Math.random()*.08)%1,1,.6),Yr[r*3]=Xr.r,Yr[r*3+1]=Xr.g,Yr[r*3+2]=Xr.b,s++}Ta()||ci(.12),jt.firework()}function pv(n){as=[];const t=Gt.position.x,e=Math.max(Gt.position.y,0);for(let i=0;i<n;i++)as.push({t:g.t+.3+i*.6,x:t+(Math.random()*12-6),y:e+4+Math.random()*3.5,z:-2+Math.random()*4});jt.ovation()}function mv(n){for(let e=as.length-1;e>=0;e--)if(g.t>=as[e].t){const i=as[e];dv(i.x,i.y,i.z),as.splice(e,1)}let t=!1;for(let e=0;e<lr;e++){const i=ll[e];if(i.life<=0){zs[e*3+1]=-999;continue}t=!0,i.life-=n,i.vy-=3.2*n,i.vx*=1-n*.8,i.vz*=1-n*.8,i.x+=i.vx*n,i.y+=i.vy*n,i.z+=i.vz*n,zs[e*3]=i.x,zs[e*3+1]=i.y,zs[e*3+2]=i.z}t&&(Zs.attributes.position.needsUpdate=!0,Zs.attributes.color.needsUpdate=!0)}const bi=36,$e=new Float32Array(bi*3),Jr=new Float32Array(bi*3),ys=new pe;ys.setAttribute("position",new _e($e,3));ys.setAttribute("color",new _e(Jr,3));const xn=new Di(ys,new ni({size:.45,vertexColors:!0,transparent:!0,opacity:1,blending:pn,depthWrite:!1,sizeAttenuation:!0}));xn.visible=!1;Fe.add(xn);const Fn=new At;function hh(n){for(let t=0;t<bi;t++)$e[t*3]=n.x,$e[t*3+1]=n.y,$e[t*3+2]=n.z;ys.attributes.position.needsUpdate=!0}function uh(n,t,e){for(let s=0;s<bi-1;s++)$e[s*3]=$e[(s+1)*3],$e[s*3+1]=$e[(s+1)*3+1],$e[s*3+2]=$e[(s+1)*3+2];const i=(bi-1)*3;$e[i]=n.x,$e[i+1]=n.y,$e[i+2]=n.z;for(let s=0;s<bi;s++){const r=s/bi;t?Fn.setHSL((e*.6+r*.9)%1,1,.55):Fn.setHSL(.12,1,.5+r*.2),Jr[s*3]=Fn.r*r,Jr[s*3+1]=Fn.g*r,Jr[s*3+2]=Fn.b*r}ys.attributes.position.needsUpdate=!0,ys.attributes.color.needsUpdate=!0}const cr=240,Gs=new Float32Array(cr*3).fill(-999),Kr=new Float32Array(cr*3),js=new pe;js.setAttribute("position",new _e(Gs,3));js.setAttribute("color",new _e(Kr,3));const gv=new Di(js,new ni({size:.22,vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!1}));Fe.add(gv);const cl=[];for(let n=0;n<cr;n++)cl.push({life:0,x:0,y:-999,z:0,vx:0,vy:0,vz:0});const fh=[16735354,16764735,5556479,9109441,12160255];function qs(n,t,e,i=5){let s=0;for(let r=0;r<cr&&s<t;r++){const a=cl[r];if(a.life>0)continue;a.life=.8+Math.random()*.6,a.x=n.x,a.y=n.y,a.z=n.z;const o=Math.random()*Math.PI*2,l=Math.random()*Math.PI-Math.PI/2,c=i*(.4+Math.random()*.8);a.vx=Math.cos(o)*Math.cos(l)*c,a.vy=Math.sin(l)*c+2.5,a.vz=Math.sin(o)*Math.cos(l)*c*.5,Fn.setHex(e?16764735:fh[Math.random()*fh.length|0]),Kr[r*3]=Fn.r,Kr[r*3+1]=Fn.g,Kr[r*3+2]=Fn.b,s++}}function _v(n){let t=!1;for(let e=0;e<cr;e++){const i=cl[e];if(i.life<=0){Gs[e*3+1]=-999;continue}t=!0,i.life-=n,i.vy-=9*n,i.x+=i.vx*n,i.y+=i.vy*n,i.z+=i.vz*n,Gs[e*3]=i.x,Gs[e*3+1]=i.y,Gs[e*3+2]=i.z}t&&(js.attributes.position.needsUpdate=!0,js.attributes.color.needsUpdate=!0)}const hl=70,Zr=new Float32Array(hl*3),ul=new pe;ul.setAttribute("position",new _e(Zr,3));const jr=new Di(ul,new ni({color:13626111,size:.16,transparent:!0,opacity:0,blending:pn,depthWrite:!1}));Fe.add(jr);const Mu=[];for(let n=0;n<hl;n++)Mu.push({ox:Math.random()*28-14,y:Math.random()*14-6,z:Math.random()*12-6});function vv(n){const t=g.mode==="playing"&&Math.abs(g.wind)>.2,e=jr.material;if(e.opacity+=((t?.55:0)-e.opacity)*Math.min(1,n*5),jr.visible=e.opacity>.02,!!jr.visible){for(let i=0;i<hl;i++){const s=Mu[i];s.ox+=g.wind*9*n,s.ox>14?s.ox-=28:s.ox<-14&&(s.ox+=28),Zr[i*3]=Gt.position.x+s.ox,Zr[i*3+1]=s.y+Math.sin(g.t*2+i)*.4,Zr[i*3+2]=s.z}ul.attributes.position.needsUpdate=!0}}let Gt=$o("marc");Fe.add(Gt);const g={mode:"menu",char:"marc",active:0,state:"swing",score:0,combo:0,comboT:0,lives:3,t:0,spin:0,pumpAmp:1,holding:!1,armed:!1,grade:"",lastFlips:0,lastFlipBonus:0,trick:!1,flipRot:0,salute:0,world:0,wind:0,windOff:0,netBounce:!1,netSaves:0,lap:0,diffN:0,wScore:[0,0,0,0],runMedals:[0,0,0,0],starsGot:0,flipsTot:0,maxCombo:0,flyFrom:new P,flyTo:new P,flyT:0,flyDur:.72,arcH:2.4,flyNext:-1,flyMode:"catch",vel:new P,timeScale:1,slowmo:0,fovKick:0,shake:0,attract:!1,daily:!1},wn=-7,hr=-7.65,Es=new Ce;Fe.add(Es);const Cs=new Ce;Cs.position.set(wn,0,0);Es.add(Cs);const fl=new vt(new an(3.1,3.5,.7,40),new It({color:6950950,roughness:.4,metalness:.5,emissive:1704456,emissiveIntensity:.4}));fl.position.y=hr-.35;fl.receiveShadow=!0;Cs.add(fl);const dl=new vt(new ln(3.28,.15,8,48),new It({color:16764735,emissive:16755456,emissiveIntensity:1.1,roughness:.4}));dl.rotation.x=Math.PI/2;dl.position.y=hr;Cs.add(dl);const si={};for(const[n,t]of[["marc",-1.4],["claire",1.4]]){const e=$o(n);e.position.set(t,hr+.7,.1),Cs.add(e),si[n]=e}const ur=new su(16777215,110,24,Math.PI/6.5,.4,1.2);ur.position.set(wn,7,7);const pl=new ue;pl.position.set(wn,hr,0);Fe.add(pl);ur.target=pl;Fe.add(ur);const fr=new Ce;Fe.add(fr);const xv=new It({color:9375522,roughness:.7,emissive:2753032,emissiveIntensity:.45,side:ge}),Su=[];for(const n of[-1,1]){const t=new vt(new Wn(3.8,8.4,.3),xv),e=wn+n*1.9;t.position.set(e,-3.4,4.2),fr.add(t),Su.push({mesh:t,side:n,x0:e})}const yu=new vt(new Wn(8.4,1.5,.5),new It({color:16764735,emissive:16755456,emissiveIntensity:.9,roughness:.4}));yu.position.set(wn,1.1,4.3);fr.add(yu);let wi=0,fa=!1,dh=!1,ph=0;const Mv=new URLSearchParams(location.search).has("lowfx"),ne={active:!1,done:!1,t:0,lit:0};let ke=null;const mh=3.6,Sv=[.7,1.3,1.9];function ml(){ne.active||g.mode!=="menu"||(ke||(ke={key:xe.key.intensity,rim:xe.rim.intensity,fill:xe.fill.intensity,amb:xe.ambient.intensity}),ne.active=!0,ne.t=0,ne.lit=0,xe.key.intensity=ke.key*.06,xe.rim.intensity=ke.rim*.06,xe.fill.intensity=ke.fill*.06,xe.ambient.intensity=ke.amb*.25,tt.menu.classList.add("hidden"),tt.introLogo.classList.remove("show"))}function gl(){ne.active=!1,ne.done=!0,ke&&(xe.key.intensity=ke.key,xe.rim.intensity=ke.rim,xe.fill.intensity=ke.fill,xe.ambient.intensity=ke.amb),tt.introLogo.classList.remove("show"),g.mode==="menu"&&tt.menu.classList.remove("hidden"),wi<1&&(fa=!0),Ps=g.t}function yv(n){ne.t+=n;const t=ne.t,e=Math.min(1,t/mh);for(;ne.lit<3&&t>Sv[ne.lit];)ne.lit++,ne.lit===1?xe.key.intensity=ke.key:ne.lit===2?(xe.rim.intensity=ke.rim,xe.fill.intensity=ke.fill):xe.ambient.intensity=ke.amb,Ta()||ci(.1),jt.spot();const i=1-Math.pow(1-e,3);ye.position.set(wn+(1-i)*36,-3.4+(1-i)*12.5,8.8+(1-i)*15+Math.sin(e*Math.PI)*3);const s=new P(wn+(1-i)*16,-5+(1-i)*7,0);ye.lookAt(s),ye.fov!==55&&(ye.fov=55,ye.updateProjectionMatrix()),t>2.2&&tt.introLogo.classList.add("show"),t>=mh&&(jt.fanfare(),gl())}function _l(){for(const n in si){const t=n===g.char;si[n].position.y=hr+.7+(t?.4:0)}}function Eu(){if(Xt.high<=0){tt.best.classList.add("hidden");return}const n=Xt.medals.map((t,e)=>rl[e]+sl[t]).join("  ");tt.best.innerHTML="BEST "+Xt.high.toLocaleString("en")+" ⭐ · COMBO x"+Xt.combo+'<span class="medals">'+n+"</span>",tt.best.classList.remove("hidden")}function vl(){tt.muteBtn.textContent=Xt.mute?"🔇":"🔊"}function xl(){tt.fxBtn.textContent=Xt.reduceFx?"🌙":"✨",tt.fxBtn.classList.toggle("on",Xt.reduceFx),tt.fxBtn.setAttribute("aria-pressed",String(Xt.reduceFx)),tt.fxBtn.setAttribute("aria-label",Xt.reduceFx?"Flashes reduced — tap to restore":"Reduce flashes")}function Uo(n,t){const e=Bi(),i=e?Ti:"local";let s='<div class="bTitle">🏆 HIGH SCORES</div>';if(e&&(s+='<div class="bTabs"><span class="bTab'+(i==="local"?" sel":"")+'" data-tab="local">LOCAL</span><span class="bTab'+(i==="world"?" sel":"")+'" data-tab="world">WORLD</span></div>'),i==="world")if(Ks&&!En)s+='<div class="bEmpty">…</div>';else if(!En||!En.length)s+='<div class="bEmpty">No world scores yet —<br>be the first to fly!</div>';else for(let r=0;r<En.length;r++){const a=En[r],o=us&&a.i===us.i&&a.s===us.s;s+='<div class="bRow'+(o?" hl":"")+'"><span class="bRk">'+(r+1)+'</span><span class="bIn">'+a.i+'</span><span class="bMe">'+(a.l>0?"🔁":rl[a.w])+'</span><span class="bSc">'+a.s.toLocaleString("en")+"</span></div>"}else if(!cn.length)s+='<div class="bEmpty">No scores yet —<br>be the first to fly!</div>';else for(let r=0;r<cn.length;r++){const a=cn[r],o=a.m>0?sl[a.m]:"";s+='<div class="bRow'+(r===t?" hl":"")+'"><span class="bRk">'+(r+1)+'</span><span class="bIn">'+a.i+'</span><span class="bMe">'+o+'</span><span class="bSc">'+a.s.toLocaleString("en")+"</span></div>"}n.innerHTML=s,n.querySelectorAll(".bTab").forEach(r=>r.addEventListener("click",a=>{a.stopPropagation(),Ti!==r.dataset.tab&&(Ti=r.dataset.tab,Ti==="world"&&ba(),da(),jt.click())}))}function da(){Uo(tt.menuBoard,Ni),!tt.over.classList.contains("hidden")&&!tt.overBoard.classList.contains("hidden")&&Uo(tt.overBoard,Ni)}function ba(n){if(!Bi()||Bs&&!n)return;Ks=!0,da();const t=q_(10).then(e=>{Bs===t&&(Ks=!1,Bs=null,e?En=e:En||(Ti="local"),da())});Bs=t}function dr(){for(let n=0;n<3;n++)Io[n].querySelector(".lch").textContent=Ms[Ii[n]],Io[n].classList.toggle("active",n===vn)}function $s(n){vn=(vn+n+3)%3,dr(),jt.click()}function Fi(n,t){vn=n,Ii[n]=(Ii[n]+t+Ms.length)%Ms.length,dr(),jt.click()}function Ev(n){Ii=[0,0,0],vn=0,tt.entryRank.textContent="#"+(n+1)+" place",tt.entryScore.textContent="Score "+g.score.toLocaleString("en"),dr(),tt.over.classList.add("hidden"),tt.entry.classList.remove("hidden"),jt.fanfare()}function wa(){if(tt.entry.classList.contains("hidden"))return;const n=Ii.map(t=>Ms[t]).join("");Ni=nv(n,g.score,Math.max(...g.runMedals),g.lap),Bi()&&!g.daily&&(us={i:n,s:Math.max(0,Math.min(ou,Math.round(g.score)))},J_({initials:n,score:g.score,world:g.world,lap:g.lap}).then(t=>{t&&ba(!0)})),tt.entry.classList.add("hidden"),jt.click(),Au()}function Tu(){const n=rr();tt.dailyBest.textContent=n?"Today's best: "+n.s.toLocaleString("en"):"New rail every day — same for everyone!"}function Aa(){g.mode="menu",Gt.visible=!1,Es.visible=!0,fr.visible=!0,ur.visible=!0,tt.attractBar.classList.remove("show"),tt.hud.style.display="none",pr.classList.remove("on"),xn.visible=!1,dh||(dh=!0,wi=0,!ne.done&&!Mv&&!Ea()?ml():(ne.done=!0,fa=!0)),tt.over.classList.add("hidden"),tt.entry.classList.add("hidden"),ne.active||tt.menu.classList.remove("hidden"),Ps=g.t,_l(),Eu(),da(),Bi()&&ba(),Tu()}function Ml(){Fe.remove(Gt),Gt=$o(g.char),Gt.visible=g.mode!=="menu",Fe.add(Gt)}function Sl(n){const t=av(n);Gt.position.copy(t),Gt.rotation.z=-n.theta}function Vn(n){if(navigator.vibrate)try{navigator.vibrate(n)}catch{}}const Vt=n=>document.getElementById(n),tt={menu:Vt("menu"),over:Vt("over"),hud:Vt("hud"),score:Vt("score"),lives:Vt("lives"),combo:Vt("combo"),grade:Vt("grade"),comboHold:Vt("comboHold"),comboFill:Vt("comboFill"),big:Vt("bigmsg"),bigsub:Vt("bigsub"),flash:Vt("flash"),banner:Vt("banner"),bannerTxt:Vt("bannerTxt"),worldTag:Vt("worldTag"),wind:Vt("windTag"),best:Vt("best"),newBest:Vt("newBest"),overStats:Vt("overStats"),overMedals:Vt("overMedals"),muteBtn:Vt("muteBtn"),fxBtn:Vt("fxBtn"),gpBadge:Vt("gpBadge"),menuBoard:Vt("menuBoard"),overBoard:Vt("overBoard"),entry:Vt("entry"),entryRank:Vt("entryRank"),entryScore:Vt("entryScore"),photoWrap:Vt("photoWrap"),photoImg:Vt("photoImg"),shareBtn:Vt("shareBtn"),introLogo:Vt("introLogo"),attractBar:Vt("attractBar"),dailyBest:Vt("dailyBest")},Io=[...document.querySelectorAll("#entryRow .letter")];let No=-1;function Qs(){g.score!==No&&(tt.score.firstChild.textContent=String(g.score),tt.score.classList.remove("pop"),tt.score.offsetWidth,tt.score.classList.add("pop"),No=g.score),tt.lives.textContent="❤".repeat(Math.max(0,g.lives))||"—"}let $r=0,Qr=0;function Fo(n){tt.combo.textContent=n,tt.combo.style.opacity="1",$r=1.1}function Ai(n,t){tt.grade.textContent=n,tt.grade.style.color=t||"#fff",tt.grade.style.opacity="1",tt.grade.classList.remove("zoom"),tt.grade.offsetWidth,tt.grade.classList.add("zoom"),Qr=.9}let os=0;function ci(n){os=Math.max(os,Ta()?n*.35:n)}const pr=Vt("tapBtn");Vt("playBtn").addEventListener("click",()=>{bn(),jt.click(),ai(!1)});Vt("dailyBtn").addEventListener("click",()=>{bn(),jt.click(),ai(!0)});Vt("introBtn").addEventListener("click",()=>{bn(),jt.click(),ml()});Vt("againBtn").addEventListener("click",()=>{jt.click(),Aa()});Vt("replayBtn").addEventListener("click",()=>{bn(),jt.click(),ai(g.daily)});tt.muteBtn.addEventListener("pointerdown",n=>{n.stopPropagation()});tt.muteBtn.addEventListener("click",n=>{n.stopPropagation(),bn(),Xt.mute=!Xt.mute,Qo(Xt.mute),Js(),vl(),Xt.mute||jt.click()});vl();tt.fxBtn.addEventListener("pointerdown",n=>{n.stopPropagation()});tt.fxBtn.addEventListener("click",n=>{n.stopPropagation(),bn(),Xt.reduceFx=!Xt.reduceFx,Js(),xl(),jt.click()});xl();function pa(n){n!=="marc"&&n!=="claire"||(document.querySelectorAll(".pick").forEach(t=>{t.classList.toggle("sel",t.dataset.char===n),t.setAttribute("aria-pressed",String(t.dataset.char===n))}),g.char=n,Ml(),_l())}document.querySelectorAll(".pick").forEach(n=>{n.addEventListener("click",()=>pa(n.dataset.char)),n.addEventListener("keydown",t=>{(t.code==="Enter"||t.code==="Space")&&(t.preventDefault(),pa(n.dataset.char))})});Io.forEach(n=>{const t=+n.dataset.slot;n.querySelector(".lup").addEventListener("click",e=>{e.stopPropagation(),Fi(t,1)}),n.querySelector(".ldn").addEventListener("click",e=>{e.stopPropagation(),Fi(t,-1)}),n.querySelector(".lch").addEventListener("click",()=>{vn=t,dr()})});Vt("entryOk").addEventListener("click",()=>wa());addEventListener("keydown",n=>{tt.entry.classList.contains("hidden")||(n.code==="ArrowUp"?(Fi(vn,1),n.preventDefault()):n.code==="ArrowDown"?(Fi(vn,-1),n.preventDefault()):n.code==="ArrowLeft"?($s(-1),n.preventDefault()):n.code==="ArrowRight"?($s(1),n.preventDefault()):n.code==="Enter"&&(wa(),n.preventDefault()))});function ai(n){bn(),g.daily=!!n,uv(g.daily),g.mode="playing",g.state="swing",g.active=0,g.score=0,No=-1,g.combo=0,g.comboT=0,g.lives=3,g.spin=0,g.pumpAmp=1,g.holding=!1,g.armed=!1,g.grade="",g.lastFlips=0,g.lastFlipBonus=0,g.trick=!1,g.flipRot=0,g.salute=0,g.timeScale=1,g.slowmo=0,g.fovKick=0,g.shake=0,g.world=0,g.wind=0,g.windOff=0,g.netBounce=!1,g.netSaves=0,g.lap=0,g.diffN=0,g.wScore=[0,0,0,0],g.runMedals=[0,0,0,0],g.starsGot=0,g.flipsTot=0,g.maxCombo=0,Ni=-1,Y_(),_a=!1,Tn&&(URL.revokeObjectURL(Tn),Tn=null,On=null),tt.entry.classList.add("hidden"),tt.worldTag.textContent=xs[0].toUpperCase(),tt.wind.style.opacity="0";for(const t of or)t.used=!1,t.flashT=0;$t[0].theta=-1,$t[0].omega=0;for(const t of ar)t.got=!1,t.m.visible=!0;for(const t of Ss)t.got=!1,t.m.visible=!0;Ml(),Gt.visible=!0,Es.visible=!1,fr.visible=!1,ur.visible=!1,tt.menu.classList.add("hidden"),tt.over.classList.add("hidden"),tt.hud.style.display="flex",pr.classList.add("on"),Qs()}function bu(){for(let n=0;n<vs;n++){const t=$_(g.wScore[n]);t>g.runMedals[n]&&(g.runMedals[n]=t),t>Xt.medals[n]&&(Xt.medals[n]=t)}}let ma=!1;function wu(){if(g.mode="over",tt.hud.style.display="none",tt.comboHold.style.opacity="0",tt.wind.style.opacity="0",pr.classList.remove("on"),xn.visible=!1,g.attract){Lu();return}bu(),ma=g.score>Xt.high,ma&&(Xt.high=g.score),g.maxCombo>Xt.combo&&(Xt.combo=g.maxCombo),Js();let n=!1;if(g.daily){const e=rr();n=!e||g.score>e.s,Q_(g.score)}const t=g.daily?-1:ev(g.score);(g.lap>0||t===0&&g.score>0||n)&&pv(Ta()?2:4),t>=0?Ev(t):Au()}function Au(){tt.big.textContent=g.lap>0?"🎉 What a run!":"Nice flying!",tt.bigsub.textContent=(g.daily?"📅 DAILY · ":"")+"Score "+g.score.toLocaleString("en")+" · Best "+(g.daily?(rr()||{s:g.score}).s:Xt.high).toLocaleString("en"),tt.newBest.classList.toggle("hidden",!ma),tt.overStats.innerHTML="<div><b>"+g.starsGot+"</b>⭐ stars</div><div><b>"+g.flipsTot+"</b>🌀 flips</div><div><b>x"+g.maxCombo+"</b>🔥 best combo</div><div><b>"+(g.lap>0?g.lap+(g.lap>1?" laps":" lap"):xs[g.world])+"</b>🌍 "+(g.lap>0?"endless!":"reached")+"</div>",tt.overMedals.textContent=g.runMedals.map((n,t)=>rl[t]+sl[n]).join("  "),Ni>=0?(Uo(tt.overBoard,Ni),tt.overBoard.classList.remove("hidden")):tt.overBoard.classList.add("hidden"),Tn?(tt.photoImg.src=Tn,tt.photoWrap.classList.add("show"),tt.shareBtn.classList.remove("hidden")):(tt.photoWrap.classList.remove("show"),tt.shareBtn.classList.add("hidden")),tt.over.classList.remove("hidden"),ma?jt.applause():jt.fanfare()}function oi(){bn(),g.mode==="playing"&&(g.state==="swing"?(g.holding=!0,g.armed=!0):g.state==="fly"&&!g.trick&&(g.trick=!0,jt.flip()))}function li(){if(g.mode!=="playing"){g.holding=!1;return}g.holding=!1,g.state==="swing"&&g.armed&&(g.armed=!1,Av())}addEventListener("keydown",n=>{n.code==="Space"&&!n.repeat&&(n.preventDefault(),oi())});addEventListener("keyup",n=>{n.code==="Space"&&(n.preventDefault(),li())});gu.addEventListener("pointerdown",n=>{n.preventDefault(),oi()});addEventListener("pointerup",li);addEventListener("pointercancel",li);pr.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),oi()});pr.addEventListener("pointerup",n=>{n.stopPropagation(),li()});let tr=!1,go=!1;const gh={};function Ru(){tt.gpBadge.style.display=tr?"inline-block":"none"}function ns(n){if(ne.active||g.attract){Ra();return}tt.entry.classList.contains("hidden")?g.mode==="menu"&&(n==="left"?pa("marc"):n==="right"&&pa("claire")):n==="up"?Fi(vn,1):n==="down"?Fi(vn,-1):n==="left"?$s(-1):n==="right"&&$s(1)}function Tv(n){if(n&&(ne.active||g.attract)){Ra();return}n?(Ps=g.t,g.mode==="playing"?oi():tt.entry.classList.contains("hidden")?g.mode==="menu"?(bn(),jt.click(),ai(!1)):g.mode==="over"&&(bn(),jt.click(),ai(g.daily)):wa()):g.mode==="playing"&&li()}let _o=!0;function Cu(){const n=navigator.getGamepads?navigator.getGamepads():[];let t=null;for(const a of n)if(a){t=a;break}if(!!t!==tr&&(tr=!!t,Ru()),!t){go=!1;return}const e=!!(t.buttons[0]&&t.buttons[0].pressed);e!==go&&(Tv(e),go=e);const i=a=>{const o=!!(t.buttons[a]&&t.buttons[a].pressed),l=gh[a];return gh[a]=o,o&&!l};i(12)&&ns("up"),i(13)&&ns("down"),i(14)&&ns("left"),i(15)&&ns("right");const s=t.axes[0]||0,r=t.axes[1]||0;Math.abs(s)<.3&&Math.abs(r)<.3?_o=!0:_o&&(Math.abs(s)>.65||Math.abs(r)>.65)&&(_o=!1,Math.abs(s)>Math.abs(r)?ns(s>0?"right":"left"):ns(r>0?"down":"up"))}addEventListener("gamepadconnected",()=>{tr=!0,Ru()});addEventListener("gamepaddisconnected",()=>Cu());const bv=20;let Ps=0;const ta={flipped:!1};function Pu(){g.mode!=="menu"||ne.active||g.attract||(g.attract=!0,ta.flipped=!1,g.char=Math.random()<.5?"marc":"claire",ai(!1),tt.attractBar.classList.add("show"))}function Lu(){g.attract&&(g.attract=!1,tt.attractBar.classList.remove("show"),Aa())}function wv(){if(g.state==="swing")if(ta.flipped=!1,!g.holding)oi();else{const n=$t[g.active];n.omega>0&&Math.abs(n.theta-.45*g.pumpAmp)<.2*g.pumpAmp&&g.pumpAmp>1.18&&li()}else g.state==="fly"&&g.world===fu&&!ta.flipped&&(oi(),ta.flipped=!0)}function Ra(){Ps=g.t,ne.active?gl():g.attract&&Lu()}addEventListener("keydown",Ra,!0);addEventListener("pointerdown",Ra,!0);function Av(){const n=$t[g.active],t=g.active+1;if(n.omega<=.15||t>=en){const v=Je*n.omega;g.vel.set(Math.cos(n.theta)*v*.5+1,Math.sin(n.theta)*v*.5,0),g.state="fumble",g.spin=0,g.grade="fumble",xn.visible=!0,hh(Gt.position),Ai("WHOOPS!","#ff7d7d"),Vn(20),jt.fumble();return}const e=g.pumpAmp,i=.45*e,s=Math.abs(n.theta-i)/e,r=Math.pow(.95,g.diffN),a=Math.max(.065,.12*r),o=Math.max(.2,.35*r);let l,c,h;s<a?(g.grade="perfect",l=.6,c=2.8,h=5,Ai("PERFECT!","#ffcf3f")):s<o?(g.grade="good",l=.75,c=2.4,h=4.2,Ai("GOOD!","#d8ffef")):(g.grade="ok",l=.95,c=1.5,h=3,Ai("OK","#9a8fc5")),h*=.85+(e-Lo)/(hu-Lo)*.3,n.w===nl&&(l*=1.25,h*=1.12),g.windOff=0;const u=$t[t],d=Gt.position.clone(),p=new P(u.x+Je*Math.sin(-.5),u.py-Je*Math.cos(-.5)-sr,0),_=p.x-d.x;g.flyFrom.copy(d),g.flyT=0,g.arcH=c,g.trick=!1,g.flipRot=0,g.lastFlips=0,g.lastFlipBonus=0,_<=h?(g.flyMode="catch",g.flyTo.copy(p),g.flyNext=t,g.flyDur=l):(g.flyMode="short",g.flyTo.copy(d.clone().lerp(p,Math.max(.55,h/_))),g.flyNext=-1,g.flyDur=l*.9),g.state="fly",g.spin=0,g.fovKick=1,xn.visible=!0,hh(d),ci(g.grade==="perfect"?.28:.15),Vn(12),jt.whoosh()}function Rv(n){g.world=n,g.lap>0&&g.diffN++,tt.bannerTxt.textContent="World "+(n+1)+" — "+xs[n],tt.banner.classList.remove("show"),tt.banner.offsetWidth,tt.banner.classList.add("show"),tt.worldTag.textContent=xs[n].toUpperCase()+(g.lap>0?" · LAP "+(g.lap+1):""),ci(.3),Vn(18),tl(n),jt.fanfare(),jt.applause()}function Cv(){g.lap++,g.diffN++,bu(),g.wScore=[0,0,0,0];for(const t of ar)t.got=!1,t.m.visible=!0;for(const t of Ss)t.got=!1,t.m.visible=!0;for(const t of or)t.used=!1,t.flashT=0;g.state="swing",g.active=0,g.armed=!1,g.holding=!1,g.windOff=0,g.netBounce=!1,g.world=0,g.comboT=il;const n=$t[0];n.theta=-.8,n.omega=1.4,Sl(n),Gt.rotation.z=0,xn.visible=!1,ye.position.set(Gt.position.x-7.5,Math.max(Gt.position.y+4,3),12),ga.set(Gt.position.x+2.5,Gt.position.y-.5,0),tt.worldTag.textContent="CIRCUS · LAP "+(g.lap+1),tt.bannerTxt.textContent=g.lap===1?"🎉 TOUR COMPLETE — ENDLESS MODE!":"LAP "+(g.lap+1)+" — FASTER!",tt.banner.classList.remove("show"),tt.banner.offsetWidth,tt.banner.classList.add("show"),qs(Gt.position,60,!0,8),ci(.35),Vn(25),tl(0),jt.applause(),jt.fanfare()}function Pv(n){const t=Math.floor(g.flipRot/(Math.PI*2)),e=$t[g.active].w;g.active=n,g.state="swing",$t[n].theta=-.5,$t[n].omega=g.grade==="perfect"?2:1.7,Gt.rotation.z=0,g.spin=0,g.armed=!1,xn.visible=!1,g.combo++,g.comboT=il,g.combo>g.maxCombo&&(g.maxCombo=g.combo);let i=(100+(g.combo-1)*25)*(g.grade==="perfect"?2:1),s=t>0?50*t*Math.max(1,g.combo):0;if(g.lastFlips=t,g.lastFlipBonus=s,g.flipsTot+=t,g.score+=i+s,g.wScore[$t[n].w]+=i+s,Fo((g.combo>1?`x${g.combo}  `:"")+`+${i+s}`),t>0&&setTimeout(()=>Ai(`FLIP +${s}`,"#ff6db0"),120),qs(Gt.position,g.grade==="perfect"?40:22,!1,g.grade==="perfect"?7:5),g.grade==="perfect"?(g.slowmo=Ea()?.15:.4,g.salute=.7,jt.perfect(),g.combo===g.maxCombo&&Fv()):jt.catch(g.combo),ci(.25),Vn(16),Qs(),n>=en-1){Cv();return}$t[n].w!==e&&Rv($t[n].w)}function Lv(){if(g.lives--,g.combo=0,g.comboT=0,g.netBounce=!1,g.windOff=0,g.shake=.15,ci(.5),Vn(30),jt.fumble(),xn.visible=!1,Qs(),g.lives<=0){wu();return}g.state="swing",g.armed=!1;const n=$t[g.active];n.theta=-g.pumpAmp*.6,n.omega=0}function Du(n,t,e){const i=e?g.pumpAmp:uu;n.omega+=-5.757575757575758*Math.sin(n.theta)*t;const s=.5*n.omega*n.omega+oh/Je*(1-Math.cos(n.theta)),r=oh/Je*(1-Math.cos(i));n.omega*=1+(r-s)*.02*(e?1:.4),n.theta+=n.omega*t}function Dv(n){if(g.world=$t[g.active].w,g.world===fu){const e=Math.sin(g.t*.8);g.wind=Math.abs(e)>.55?Math.sign(e)*1.6*((Math.abs(e)-.55)/.45):0}else g.wind=0;tt.wind.textContent=g.wind>0?"💨 »»":"«« 💨",tt.wind.style.opacity=Math.abs(g.wind)>.25?"1":"0",g.pumpAmp+=((g.holding&&g.state==="swing"?hu:Lo)-g.pumpAmp)*Math.min(1,n*1.7);const t=Math.min(1.4,1+.05*g.diffN);for(let e=0;e<en;e++)Du($t[e],n*(e===g.active?t:1),e===g.active&&g.state==="swing");if(g.state==="swing")Sl($t[g.active]);else if(g.state==="fly"){g.flyT+=n;const e=Math.min(1,g.flyT/g.flyDur);if(g.flyMode==="catch"&&g.flyNext>=0){const r=$t[g.flyNext];g.flyTo.set(r.x+Je*Math.sin(-.5),r.py-Je*Math.cos(-.5)-sr,0)}g.wind!==0&&(g.windOff+=g.wind*n*(g.trick?.3:1));const i=g.flyFrom.clone().lerp(g.flyTo,e);i.y+=Math.sin(e*Math.PI)*g.arcH,i.x+=g.windOff,Gt.position.copy(i);const s=g.trick?16:6.5;g.spin+=n*s,g.trick&&(g.flipRot+=n*s),Gt.rotation.z=g.spin,uh(Gt.position,g.trick,g.t);for(const r of Ss)r.got||Gt.position.distanceTo(r.m.position)<1&&(r.got=!0,r.m.visible=!1,g.score+=75,g.wScore[g.world]+=75,Fo("+75 ◎"),qs(r.m.position,26,!0,6),Qs(),Vn(10),jt.ring());e>=1&&(g.flyMode==="catch"&&Math.abs(g.windOff)<=1.35?Pv(g.flyNext):(g.vel.set(g.flyMode==="catch"?1:2.2,0,0),g.state="fumble",Ai(g.flyMode==="catch"?"GUSTED!":"TOO FAR!","#ff9d5c")))}else if(g.state==="fumble"){g.vel.y-=(g.world===nl?lh*.8:lh)*n,Gt.position.addScaledVector(g.vel,n),g.spin+=n*4,Gt.rotation.z=g.spin,uh(Gt.position,!1,g.t);const e=or[g.world];if(!g.netBounce&&g.vel.y<0&&Gt.position.y<ha+.3&&e&&!e.used)e.used=!0,e.flashT=1,g.netBounce=!0,g.netSaves++,g.vel.y=9.5,g.vel.x=$f.clamp($t[g.active].x-Gt.position.x,-3,3)*.6,Ai("SAVED BY THE NET!","#8affc1"),qs(Gt.position,26,!1,6),ci(.2),Vn(20),jt.net();else if(g.netBounce&&g.vel.y<=0){g.netBounce=!1,g.state="swing",g.armed=!1,xn.visible=!1;const i=$t[g.active];i.theta=-g.pumpAmp*.6,i.omega=0}else Gt.position.y<Z_&&Lv()}g.combo>0&&(g.comboT-=n,g.comboT<=0&&(g.combo=0)),g.combo>=2?(tt.comboHold.style.opacity="1",tt.comboHold.firstChild.textContent="COMBO x"+g.combo,tt.comboFill.style.width=Math.max(0,g.comboT/il*100)+"%"):tt.comboHold.style.opacity="0";for(const e of ar)e.got||(e.m.rotation.y+=n*2,e.m.rotation.x+=n*1.3,Gt.position.distanceTo(e.m.position)<1.25&&(e.got=!0,e.m.visible=!1,g.score+=25,g.wScore[g.world]+=25,g.starsGot++,Fo("+25 ⭐"),qs(e.m.position,12,!0,4),Qs(),Vn(8),jt.star()));for(const e of Ss){if(e.got)continue;e.m.rotation.y+=n*1.4;const i=1+Math.sin(g.t*4)*.05;e.m.scale.setScalar(i),e.mvY&&(e.m.position.y=e.baseY+Math.sin(g.t*1.3+e.baseX)*1.2)}}const ga=new P;function Uv(n){const t=Gt.position,e=Ea(),i=!e&&g.timeScale<.9?.9:1,s=new P(t.x-7.5*i,Math.max(t.y+4*i,3),12*i);ye.position.lerp(s,1-Math.pow(.001,n)),g.shake>0&&(g.shake-=n,e||(ye.position.x+=(Math.random()-.5)*.3,ye.position.y+=(Math.random()-.5)*.3)),ga.lerp(new P(t.x+2.5,t.y-.5,0),1-Math.pow(.0015,n)),ye.lookAt(ga);const r=58+g.fovKick*(e?3:7);Math.abs(ye.fov-r)>.05&&(ye.fov=r,ye.updateProjectionMatrix()),g.fovKick=Math.max(0,g.fovKick-n*2.2)}function Iv(){ye.position.lerp(new P(wn+Math.sin(g.t*.25)*2,-3.4,8.8),.04),ye.lookAt(wn,-5.7,0),ye.fov!==55&&(ye.fov=55,ye.updateProjectionMatrix())}function Nv(n){ph+=n,Cs.rotation.y=ph*.5,Ao(si[g.char],g.t,"salute");const t=g.char==="marc"?"claire":"marc";if(Ao(si[t],g.t,"idle"),fa){wi=Math.min(1,wi+n*.8),wi>=1&&(fa=!1);const e=1-Math.pow(1-wi,3);for(const i of Su)i.mesh.position.x=i.x0+i.side*e*4.4}}let On=null,Tn=null,_a=!1;function Fv(){_a=!0}function Ov(){const n=xe.renderer.domElement;n.toBlob&&n.toBlob(t=>{t&&(Tn&&URL.revokeObjectURL(Tn),On=t,Tn=URL.createObjectURL(t))},"image/png")}async function Uu(){if(!On)return;try{const t=new File([On],"trapeze-stars-photo-finish.png",{type:"image/png"});if(navigator.canShare&&navigator.canShare({files:[t]})){await navigator.share({files:[t],title:"Trapeze Stars 3D",text:"My best catch — score "+g.score.toLocaleString("en")+"!"});return}}catch{}const n=document.createElement("a");n.href=Tn,n.download="trapeze-stars-photo-finish.png",document.body.appendChild(n),n.click(),n.remove()}tt.shareBtn.addEventListener("click",()=>{jt.click(),Uu()});window.__game={start:n=>{n&&(g.char=n),ai()},down:oi,up:li,action:()=>{oi(),li()},state:()=>({mode:g.mode,state:g.state,active:g.active,score:g.score,lives:g.lives,combo:g.combo,grade:g.grade,flips:g.lastFlips,flipBonus:g.lastFlipBonus,theta:$t[g.active]?$t[g.active].theta:0,omega:$t[g.active]?$t[g.active].omega:0,amp:g.pumpAmp,timeScale:g.timeScale,hero:Gt.position.toArray(),world:g.world,worldName:xs[g.world],netSaves:g.netSaves,wind:+g.wind.toFixed(2),windOff:+g.windOff.toFixed(2),lap:g.lap,diffN:g.diffN,starsGot:g.starsGot,flipsTot:g.flipsTot,maxCombo:g.maxCombo}),records:()=>({high:Xt.high,bestCombo:Xt.combo,medals:[...Xt.medals],mute:Xt.mute,reduceFx:Xt.reduceFx}),a11y:()=>({osReducedMotion:ua,reduceFx:Xt.reduceFx,effective:Ea()}),setReduceFx:n=>{Xt.reduceFx=!!n,Js(),xl()},photo:()=>({hasPhoto:!!On,size:On?On.size:0,type:On?On.type:null,url:!!Tn}),sharePhoto:()=>Uu(),over:()=>{g.mode==="playing"&&wu()},wipe:()=>{try{["ts3d_high","ts3d_combo","ts3d_medals","ts3d_mute","ts3d_board","ts3d_daily"].forEach(n=>localStorage.removeItem(n))}catch{}Xt=du(),cn=pu(),Ni=-1,Eu(),Tu()},board:()=>cn.map(n=>({...n})),entry:()=>({open:!tt.entry.classList.contains("hidden"),slot:vn,chars:Ii.map(n=>Ms[n]).join("")}),setEntry:n=>{for(let t=0;t<3;t++){const e=Ms.indexOf((n[t]||"A").toUpperCase());Ii[t]=e<0?0:e}dr()},entrySpin:(n,t)=>Fi(n,t),entryMove:n=>$s(n),entryConfirm:()=>wa(),gp:()=>({active:tr}),net:()=>({configured:Bi(),tab:Ti,loading:Ks,rows:En?En.map(n=>({...n})):null,lastSubmit:us?{...us}:null}),netTest:(n,t)=>{X_(n,t),Ti="world",En=null,Ks=!1,Bs=null,ba(!0)},intro:()=>({active:ne.active,done:ne.done,t:+ne.t.toFixed(2)}),skipIntro:()=>{ne.active?gl():ne.done=!0},playIntro:()=>ml(),attract:()=>({active:g.attract,idle:+(g.t-Ps).toFixed(1)}),startAttract:()=>Pu(),toMenu:()=>Aa(),daily:()=>({active:g.daily,seed:ya(),best:(rr()||{s:0}).s,bars:Pe.slice(0,3).map(n=>[+n.x.toFixed(3),+n.py.toFixed(3)])}),startDaily:()=>ai(!0),audio:()=>O_(),mute:n=>{Xt.mute=!!n,Qo(Xt.mute),Js(),vl()},warp:n=>{if(g.mode!=="playing")return;n=Math.max(0,Math.min(en-1,n)),g.active=n,g.state="swing",g.armed=!1,g.holding=!1,g.netBounce=!1,g.windOff=0,g.world=$t[n].w,xn.visible=!1;const t=$t[n];t.theta=-.6,t.omega=1.2,Sl(t),ye.position.set(Gt.position.x-7.5,Math.max(Gt.position.y+4,3),12),ga.set(Gt.position.x+2.5,Gt.position.y-.5,0),tt.worldTag.textContent=xs[g.world].toUpperCase(),tl(g.world)},pick:n=>{si[n]&&(g.char=n,Ml(),_l())},menu:()=>({podium:Es.visible,heroes:Es.visible&&si.marc.visible&&si.claire.visible?2:0,curtainOpen:+wi.toFixed(2),char:g.char})};Aa();let _h=performance.now();function Iu(n){let t=(n-_h)/1e3;_h=n,t=Math.min(t,.05),g.t+=t,Cu(),g.slowmo>0?(g.slowmo-=t,g.timeScale=.35):g.timeScale+=(1-g.timeScale)*Math.min(1,t*6);const e=t*g.timeScale;ch.update(g.t),ch.applyMood(xe,g.mode==="playing"?Gt.position.x:wn);for(const i of $t)ov(i);ol.visible=g.mode==="playing";for(const i of or)i.flashT>0?(i.flashT-=t,i.m.material.opacity=.3+Math.max(0,i.flashT)*.5,i.m.position.y=ha-Math.sin(Math.max(0,i.flashT)*Math.PI)*.6):(i.m.material.opacity=i.used?.1:.3,i.m.position.y=ha);if(g.mode==="playing"){g.attract&&wv(),Dv(e);let i="swing";g.state==="fly"?i="fly":g.salute>0&&(i="salute",g.salute-=t),Ao(Gt,g.t,i),Uv(t)}else{for(let i=0;i<en;i++)Du($t[i],t,!1);g.mode==="menu"&&Nv(t),ne.active?yv(t):Iv(),g.mode==="menu"&&!ne.active&&!navigator.webdriver&&g.t-Ps>bv&&Pu()}_v(t),mv(t),vv(t),H_(g.mode);for(let i=0;i<en;i++){const s=g.mode==="playing"&&(g.state==="swing"||g.state==="fly")&&i===g.active+1;$t[i].bar.material=s?rv:_u}$r>0&&($r-=t,$r<=0&&(tt.combo.style.opacity="0")),Qr>0&&(Qr-=t,Qr<=0&&(tt.grade.style.opacity="0")),os>0&&(os=Math.max(0,os-t*1.4),tt.flash.style.opacity=String(os)),xe.render(),_a&&(_a=!1,Ov()),requestAnimationFrame(Iu)}requestAnimationFrame(Iu);"serviceWorker"in navigator&&location.protocol.startsWith("http")&&window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
