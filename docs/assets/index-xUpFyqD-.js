(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Po="160",Nu=0,Sc=1,Fu=2,uh=1,fh=2,Un=3,si=0,We=1,ge=2,zn=0,rs=1,pn=2,yc=3,Ec=4,Ou=5,Mi=100,Bu=101,zu=102,Tc=103,bc=104,Gu=200,Hu=201,Vu=202,ku=203,uo=204,fo=205,Wu=206,Xu=207,qu=208,Yu=209,Ju=210,Ku=211,Zu=212,ju=213,$u=214,Qu=0,tf=1,ef=2,Kr=3,nf=4,sf=5,rf=6,af=7,dh=0,of=1,cf=2,Qn=0,lf=1,hf=2,uf=3,ph=4,ff=5,df=6,mh=300,ls=301,hs=302,po=303,mo=304,fa=306,Di=1e3,mn=1001,go=1002,Ve=1003,wc=1004,Aa=1005,rn=1006,pf=1007,ks=1008,ti=1009,mf=1010,gf=1011,Lo=1012,gh=1013,Zn=1014,jn=1015,Gn=1016,_h=1017,vh=1018,Ai=1020,_f=1021,gn=1023,vf=1024,xf=1025,Ri=1026,us=1027,Mf=1028,xh=1029,Sf=1030,Mh=1031,Sh=1033,Ra=33776,Ca=33777,Pa=33778,La=33779,Ac=35840,Rc=35841,Cc=35842,Pc=35843,yh=36196,Lc=37492,Dc=37496,Uc=37808,Ic=37809,Nc=37810,Fc=37811,Oc=37812,Bc=37813,zc=37814,Gc=37815,Hc=37816,Vc=37817,kc=37818,Wc=37819,Xc=37820,qc=37821,Da=36492,Yc=36494,Jc=36495,yf=36283,Kc=36284,Zc=36285,jc=36286,Eh=3e3,Ci=3001,Ef=3200,Tf=3201,Th=0,bf=1,on="",Se="srgb",Vn="srgb-linear",Do="display-p3",da="display-p3-linear",Zr="linear",ce="srgb",jr="rec709",$r="p3",Fi=7680,$c=519,wf=512,Af=513,Rf=514,bh=515,Cf=516,Pf=517,Lf=518,Df=519,Qc=35044,tl="300 es",_o=1035,On=2e3,Qr=2001;class Ms{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let el=1234567;const Os=Math.PI/180,fs=180/Math.PI;function Ss(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]).toLowerCase()}function Re(n,t,e){return Math.max(t,Math.min(e,n))}function Uo(n,t){return(n%t+t)%t}function Uf(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function If(n,t,e){return n!==t?(e-n)/(t-n):0}function Bs(n,t,e){return(1-e)*n+e*t}function Nf(n,t,e,i){return Bs(n,t,1-Math.exp(-e*i))}function Ff(n,t=1){return t-Math.abs(Uo(n,t*2)-t)}function Of(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Bf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function zf(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Gf(n,t){return n+Math.random()*(t-n)}function Hf(n){return n*(.5-Math.random())}function Vf(n){n!==void 0&&(el=n);let t=el+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function kf(n){return n*Os}function Wf(n){return n*fs}function vo(n){return(n&n-1)===0&&n!==0}function Xf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ta(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function qf(n,t,e,i,s){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+i)/2),h=a((t+i)/2),u=r((t-i)/2),d=a((t-i)/2),p=r((i-t)/2),_=a((i-t)/2);switch(s){case"XYX":n.set(o*h,c*u,c*d,o*l);break;case"YZY":n.set(c*d,o*h,c*u,o*l);break;case"ZXZ":n.set(c*u,c*d,o*h,o*l);break;case"XZX":n.set(o*h,c*_,c*p,o*l);break;case"YXY":n.set(c*p,o*h,c*_,o*l);break;case"ZYZ":n.set(c*_,c*p,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ts(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ze(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Yf={DEG2RAD:Os,RAD2DEG:fs,generateUUID:Ss,clamp:Re,euclideanModulo:Uo,mapLinear:Uf,inverseLerp:If,lerp:Bs,damp:Nf,pingpong:Ff,smoothstep:Of,smootherstep:Bf,randInt:zf,randFloat:Gf,randFloatSpread:Hf,seededRandom:Vf,degToRad:kf,radToDeg:Wf,isPowerOfTwo:vo,ceilPowerOfTwo:Xf,floorPowerOfTwo:ta,setQuaternionFromProperEuler:qf,normalize:ze,denormalize:ts};class ut{constructor(t=0,e=0){ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kt{constructor(t,e,i,s,r,a,o,c,l){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l)}set(t,e,i,s,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],p=i[5],_=i[8],v=s[0],m=s[3],f=s[6],y=s[1],S=s[4],T=s[7],C=s[2],A=s[5],R=s[8];return r[0]=a*v+o*y+c*C,r[3]=a*m+o*S+c*A,r[6]=a*f+o*T+c*R,r[1]=l*v+h*y+u*C,r[4]=l*m+h*S+u*A,r[7]=l*f+h*T+u*R,r[2]=d*v+p*y+_*C,r[5]=d*m+p*S+_*A,r[8]=d*f+p*T+_*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,p=l*r-a*c,_=e*u+i*d+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return t[0]=u*v,t[1]=(s*l-h*i)*v,t[2]=(o*i-s*a)*v,t[3]=d*v,t[4]=(h*e-s*c)*v,t[5]=(s*r-o*e)*v,t[6]=p*v,t[7]=(i*c-l*e)*v,t[8]=(a*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ua.makeScale(t,e)),this}rotate(t){return this.premultiply(Ua.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ua.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ua=new Kt;function wh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ea(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Jf(){const n=ea("canvas");return n.style.display="block",n}const nl={};function zs(n){n in nl||(nl[n]=!0,console.warn(n))}const il=new Kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),sl=new Kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ur={[Vn]:{transfer:Zr,primaries:jr,toReference:n=>n,fromReference:n=>n},[Se]:{transfer:ce,primaries:jr,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[da]:{transfer:Zr,primaries:$r,toReference:n=>n.applyMatrix3(sl),fromReference:n=>n.applyMatrix3(il)},[Do]:{transfer:ce,primaries:$r,toReference:n=>n.convertSRGBToLinear().applyMatrix3(sl),fromReference:n=>n.applyMatrix3(il).convertLinearToSRGB()}},Kf=new Set([Vn,da]),te={enabled:!0,_workingColorSpace:Vn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Kf.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=ur[t].toReference,s=ur[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return ur[n].primaries},getTransfer:function(n){return n===on?Zr:ur[n].transfer}};function as(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ia(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Oi;class Ah{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Oi===void 0&&(Oi=ea("canvas")),Oi.width=t.width,Oi.height=t.height;const i=Oi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Oi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ea("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=as(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(as(e[i]/255)*255):e[i]=as(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Zf=0;class Rh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=Ss(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Na(s[a].image)):r.push(Na(s[a]))}else r=Na(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Na(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ah.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jf=0;class Ye extends Ms{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,i=mn,s=mn,r=rn,a=ks,o=gn,c=ti,l=Ye.DEFAULT_ANISOTROPY,h=on){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=Ss(),this.name="",this.source=new Rh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ci?Se:on),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==mh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Di:t.x=t.x-Math.floor(t.x);break;case mn:t.x=t.x<0?0:1;break;case go:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Di:t.y=t.y-Math.floor(t.y);break;case mn:t.y=t.y<0?0:1;break;case go:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Se?Ci:Eh}set encoding(t){zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ci?Se:on}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=mh;Ye.DEFAULT_ANISOTROPY=1;class Le{constructor(t=0,e=0,i=0,s=1){Le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],_=c[9],v=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,T=(p+1)/2,C=(f+1)/2,A=(h+d)/4,R=(u+v)/4,I=(_+m)/4;return S>T&&S>C?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=A/i,r=R/i):T>C?T<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),i=A/s,r=I/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=R/r,s=I/r),this.set(i,s,r,e),this}let y=Math.sqrt((m-_)*(m-_)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(u-v)/y,this.z=(d-h)/y,this.w=Math.acos((l+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $f extends Ms{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e);const s={width:t,height:e,depth:1};i.encoding!==void 0&&(zs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ci?Se:on),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Ye(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Rh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _n extends $f{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Ch extends Ye{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qf extends Ye{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zs{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3];const d=r[a+0],p=r[a+1],_=r[a+2],v=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=_,t[e+3]=v;return}if(u!==v||c!==d||l!==p||h!==_){let m=1-o;const f=c*d+l*p+h*_+u*v,y=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const C=Math.sqrt(S),A=Math.atan2(C,f*y);m=Math.sin(m*A)/C,o=Math.sin(o*A)/C}const T=o*y;if(c=c*m+d*T,l=l*m+p*T,h=h*m+_*T,u=u*m+v*T,m===1-o){const C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[a],d=r[a+1],p=r[a+2],_=r[a+3];return t[e]=o*_+h*u+c*p-l*d,t[e+1]=c*_+h*d+l*u-o*p,t[e+2]=l*_+h*p+o*d-c*u,t[e+3]=h*_-o*u-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),u=o(r/2),d=c(i/2),p=c(s/2),_=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*p*_,this._y=l*p*u-d*h*_,this._z=l*h*_+d*p*u,this._w=l*h*u-d*p*_;break;case"YXZ":this._x=d*h*u+l*p*_,this._y=l*p*u-d*h*_,this._z=l*h*_-d*p*u,this._w=l*h*u+d*p*_;break;case"ZXY":this._x=d*h*u-l*p*_,this._y=l*p*u+d*h*_,this._z=l*h*_+d*p*u,this._w=l*h*u-d*p*_;break;case"ZYX":this._x=d*h*u-l*p*_,this._y=l*p*u+d*h*_,this._z=l*h*_-d*p*u,this._w=l*h*u+d*p*_;break;case"YZX":this._x=d*h*u+l*p*_,this._y=l*p*u+d*h*_,this._z=l*h*_-d*p*u,this._w=l*h*u-d*p*_;break;case"XZY":this._x=d*h*u-l*p*_,this._y=l*p*u-d*h*_,this._z=l*h*_+d*p*u,this._w=l*h*u+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=i+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(i>o&&i>u){const p=2*Math.sqrt(1+i-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>u){const p=2*Math.sqrt(1+o-i-u);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-i-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),i*Math.sin(r),i*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,i=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(rl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(rl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*i),h=2*(o*e-r*s),u=2*(r*i-a*e);return this.x=e+c*l+a*u-o*h,this.y=i+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Fa.copy(this).projectOnVector(t),this.sub(Fa)}reflect(t){return this.sub(Fa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fa=new P,rl=new Zs;class Ii{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,hn):hn.fromBufferAttribute(r,a),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fr.copy(i.boundingBox)),fr.applyMatrix4(t.matrixWorld),this.union(fr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Rs),dr.subVectors(this.max,Rs),Bi.subVectors(t.a,Rs),zi.subVectors(t.b,Rs),Gi.subVectors(t.c,Rs),Wn.subVectors(zi,Bi),Xn.subVectors(Gi,zi),ui.subVectors(Bi,Gi);let e=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-ui.z,ui.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,ui.z,0,-ui.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-ui.y,ui.x,0];return!Oa(e,Bi,zi,Gi,dr)||(e=[1,0,0,0,1,0,0,0,1],!Oa(e,Bi,zi,Gi,dr))?!1:(pr.crossVectors(Wn,Xn),e=[pr.x,pr.y,pr.z],Oa(e,Bi,zi,Gi,dr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Rn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Rn=[new P,new P,new P,new P,new P,new P,new P,new P],hn=new P,fr=new Ii,Bi=new P,zi=new P,Gi=new P,Wn=new P,Xn=new P,ui=new P,Rs=new P,dr=new P,pr=new P,fi=new P;function Oa(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){fi.fromArray(n,r);const o=s.x*Math.abs(fi.x)+s.y*Math.abs(fi.y)+s.z*Math.abs(fi.z),c=t.dot(fi),l=e.dot(fi),h=i.dot(fi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const td=new Ii,Cs=new P,Ba=new P;class ys{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):td.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Cs.subVectors(t,this.center);const e=Cs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Cs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ba.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Cs.copy(t.center).add(Ba)),this.expandByPoint(Cs.copy(t.center).sub(Ba))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Cn=new P,za=new P,mr=new P,qn=new P,Ga=new P,gr=new P,Ha=new P;class Ph{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Cn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Cn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Cn.copy(this.origin).addScaledVector(this.direction,e),Cn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){za.copy(t).add(e).multiplyScalar(.5),mr.copy(e).sub(t).normalize(),qn.copy(this.origin).sub(za);const r=t.distanceTo(e)*.5,a=-this.direction.dot(mr),o=qn.dot(this.direction),c=-qn.dot(mr),l=qn.lengthSq(),h=Math.abs(1-a*a);let u,d,p,_;if(h>0)if(u=a*c-o,d=a*o-c,_=r*h,u>=0)if(d>=-_)if(d<=_){const v=1/h;u*=v,d*=v,p=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d<=-_?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=_?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(za).addScaledVector(mr,d),p}intersectSphere(t,e){Cn.subVectors(t.center,this.origin);const i=Cn.dot(this.direction),s=Cn.dot(Cn)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Cn)!==null}intersectTriangle(t,e,i,s,r){Ga.subVectors(e,t),gr.subVectors(i,t),Ha.crossVectors(Ga,gr);let a=this.direction.dot(Ha),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qn.subVectors(this.origin,t);const c=o*this.direction.dot(gr.crossVectors(qn,gr));if(c<0)return null;const l=o*this.direction.dot(Ga.cross(qn));if(l<0||c+l>a)return null;const h=-o*qn.dot(Ha);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class he{constructor(t,e,i,s,r,a,o,c,l,h,u,d,p,_,v,m){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l,h,u,d,p,_,v,m)}set(t,e,i,s,r,a,o,c,l,h,u,d,p,_,v,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=_,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Hi.setFromMatrixColumn(t,0).length(),r=1/Hi.setFromMatrixColumn(t,1).length(),a=1/Hi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,p=a*u,_=o*h,v=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+_*l,e[5]=d-v*l,e[9]=-o*c,e[2]=v-d*l,e[6]=_+p*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*h,p=c*u,_=l*h,v=l*u;e[0]=d+v*o,e[4]=_*o-p,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-_,e[6]=v+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*h,p=c*u,_=l*h,v=l*u;e[0]=d-v*o,e[4]=-a*u,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*h,e[9]=v-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*h,p=a*u,_=o*h,v=o*u;e[0]=c*h,e[4]=_*l-p,e[8]=d*l+v,e[1]=c*u,e[5]=v*l+d,e[9]=p*l-_,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,p=a*l,_=o*c,v=o*l;e[0]=c*h,e[4]=v-d*u,e[8]=_*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=p*u+_,e[10]=d-v*u}else if(t.order==="XZY"){const d=a*c,p=a*l,_=o*c,v=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+v,e[5]=a*h,e[9]=p*u-_,e[2]=_*u-p,e[6]=o*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ed,t,nd)}lookAt(t,e,i){const s=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),Yn.crossVectors(i,Ze),Yn.lengthSq()===0&&(Math.abs(i.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),Yn.crossVectors(i,Ze)),Yn.normalize(),_r.crossVectors(Ze,Yn),s[0]=Yn.x,s[4]=_r.x,s[8]=Ze.x,s[1]=Yn.y,s[5]=_r.y,s[9]=Ze.y,s[2]=Yn.z,s[6]=_r.z,s[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],p=i[13],_=i[2],v=i[6],m=i[10],f=i[14],y=i[3],S=i[7],T=i[11],C=i[15],A=s[0],R=s[4],I=s[8],x=s[12],b=s[1],H=s[5],W=s[9],nt=s[13],D=s[2],O=s[6],q=s[10],$=s[14],K=s[3],Q=s[7],tt=s[11],at=s[15];return r[0]=a*A+o*b+c*D+l*K,r[4]=a*R+o*H+c*O+l*Q,r[8]=a*I+o*W+c*q+l*tt,r[12]=a*x+o*nt+c*$+l*at,r[1]=h*A+u*b+d*D+p*K,r[5]=h*R+u*H+d*O+p*Q,r[9]=h*I+u*W+d*q+p*tt,r[13]=h*x+u*nt+d*$+p*at,r[2]=_*A+v*b+m*D+f*K,r[6]=_*R+v*H+m*O+f*Q,r[10]=_*I+v*W+m*q+f*tt,r[14]=_*x+v*nt+m*$+f*at,r[3]=y*A+S*b+T*D+C*K,r[7]=y*R+S*H+T*O+C*Q,r[11]=y*I+S*W+T*q+C*tt,r[15]=y*x+S*nt+T*$+C*at,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],p=t[14],_=t[3],v=t[7],m=t[11],f=t[15];return _*(+r*c*u-s*l*u-r*o*d+i*l*d+s*o*p-i*c*p)+v*(+e*c*p-e*l*d+r*a*d-s*a*p+s*l*h-r*c*h)+m*(+e*l*u-e*o*p-r*a*u+i*a*p+r*o*h-i*l*h)+f*(-s*o*h-e*c*u+e*o*d+s*a*u-i*a*d+i*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],p=t[11],_=t[12],v=t[13],m=t[14],f=t[15],y=u*m*l-v*d*l+v*c*p-o*m*p-u*c*f+o*d*f,S=_*d*l-h*m*l-_*c*p+a*m*p+h*c*f-a*d*f,T=h*v*l-_*u*l+_*o*p-a*v*p-h*o*f+a*u*f,C=_*u*c-h*v*c-_*o*d+a*v*d+h*o*m-a*u*m,A=e*y+i*S+s*T+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return t[0]=y*R,t[1]=(v*d*r-u*m*r-v*s*p+i*m*p+u*s*f-i*d*f)*R,t[2]=(o*m*r-v*c*r+v*s*l-i*m*l-o*s*f+i*c*f)*R,t[3]=(u*c*r-o*d*r-u*s*l+i*d*l+o*s*p-i*c*p)*R,t[4]=S*R,t[5]=(h*m*r-_*d*r+_*s*p-e*m*p-h*s*f+e*d*f)*R,t[6]=(_*c*r-a*m*r-_*s*l+e*m*l+a*s*f-e*c*f)*R,t[7]=(a*d*r-h*c*r+h*s*l-e*d*l-a*s*p+e*c*p)*R,t[8]=T*R,t[9]=(_*u*r-h*v*r-_*i*p+e*v*p+h*i*f-e*u*f)*R,t[10]=(a*v*r-_*o*r+_*i*l-e*v*l-a*i*f+e*o*f)*R,t[11]=(h*o*r-a*u*r-h*i*l+e*u*l+a*i*p-e*o*p)*R,t[12]=C*R,t[13]=(h*v*s-_*u*s+_*i*d-e*v*d-h*i*m+e*u*m)*R,t[14]=(_*o*s-a*v*s-_*i*c+e*v*c+a*i*m-e*o*m)*R,t[15]=(a*u*s-h*o*s+h*i*c-e*u*c-a*i*d+e*o*d)*R,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,d=r*l,p=r*h,_=r*u,v=a*h,m=a*u,f=o*u,y=c*l,S=c*h,T=c*u,C=i.x,A=i.y,R=i.z;return s[0]=(1-(v+f))*C,s[1]=(p+T)*C,s[2]=(_-S)*C,s[3]=0,s[4]=(p-T)*A,s[5]=(1-(d+f))*A,s[6]=(m+y)*A,s[7]=0,s[8]=(_+S)*R,s[9]=(m-y)*R,s[10]=(1-(d+v))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Hi.set(s[0],s[1],s[2]).length();const a=Hi.set(s[4],s[5],s[6]).length(),o=Hi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],un.copy(this);const l=1/r,h=1/a,u=1/o;return un.elements[0]*=l,un.elements[1]*=l,un.elements[2]*=l,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=u,un.elements[9]*=u,un.elements[10]*=u,e.setFromRotationMatrix(un),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=On){const c=this.elements,l=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s);let p,_;if(o===On)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Qr)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=On){const c=this.elements,l=1/(e-t),h=1/(i-s),u=1/(a-r),d=(e+t)*l,p=(i+s)*h;let _,v;if(o===On)_=(a+r)*u,v=-2*u;else if(o===Qr)_=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=v,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Hi=new P,un=new he,ed=new P(0,0,0),nd=new P(1,1,1),Yn=new P,_r=new P,Ze=new P,al=new he,ol=new Zs;class pa{constructor(t=0,e=0,i=0,s=pa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Re(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Re(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Re(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return al.makeRotationFromQuaternion(t),this.setFromRotationMatrix(al,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ol.setFromEuler(this),this.setFromQuaternion(ol,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pa.DEFAULT_ORDER="XYZ";class Lh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let id=0;const cl=new P,Vi=new Zs,Pn=new he,vr=new P,Ps=new P,sd=new P,rd=new Zs,ll=new P(1,0,0),hl=new P(0,1,0),ul=new P(0,0,1),ad={type:"added"},od={type:"removed"};class ue extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=Ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ue.DEFAULT_UP.clone();const t=new P,e=new pa,i=new Zs,s=new P(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new Kt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.premultiply(Vi),this}rotateX(t){return this.rotateOnAxis(ll,t)}rotateY(t){return this.rotateOnAxis(hl,t)}rotateZ(t){return this.rotateOnAxis(ul,t)}translateOnAxis(t,e){return cl.copy(t).applyQuaternion(this.quaternion),this.position.add(cl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ll,t)}translateY(t){return this.translateOnAxis(hl,t)}translateZ(t){return this.translateOnAxis(ul,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?vr.copy(t):vr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(Ps,vr,this.up):Pn.lookAt(vr,Ps,this.up),this.quaternion.setFromRotationMatrix(Pn),s&&(Pn.extractRotation(s.matrixWorld),Vi.setFromRotationMatrix(Pn),this.quaternion.premultiply(Vi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(ad)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(od)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,t,sd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,rd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++){const r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}ue.DEFAULT_UP=new P(0,1,0);ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new P,Ln=new P,Va=new P,Dn=new P,ki=new P,Wi=new P,fl=new P,ka=new P,Wa=new P,Xa=new P;let xr=!1;class dn{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),fn.subVectors(t,e),s.cross(fn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){fn.subVectors(s,e),Ln.subVectors(i,e),Va.subVectors(t,e);const a=fn.dot(fn),o=fn.dot(Ln),c=fn.dot(Va),l=Ln.dot(Ln),h=Ln.dot(Va),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(l*c-o*h)*d,_=(a*h-o*c)*d;return r.set(1-p-_,_,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getUV(t,e,i,s,r,a,o,c){return xr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xr=!0),this.getInterpolation(t,e,i,s,r,a,o,c)}static getInterpolation(t,e,i,s,r,a,o,c){return this.getBarycoord(t,e,i,s,Dn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Dn.x),c.addScaledVector(a,Dn.y),c.addScaledVector(o,Dn.z),c)}static isFrontFacing(t,e,i,s){return fn.subVectors(i,e),Ln.subVectors(t,e),fn.cross(Ln).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),fn.cross(Ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return dn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return dn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,s,r){return xr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xr=!0),dn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}getInterpolation(t,e,i,s,r){return dn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return dn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return dn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;ki.subVectors(s,i),Wi.subVectors(r,i),ka.subVectors(t,i);const c=ki.dot(ka),l=Wi.dot(ka);if(c<=0&&l<=0)return e.copy(i);Wa.subVectors(t,s);const h=ki.dot(Wa),u=Wi.dot(Wa);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(i).addScaledVector(ki,a);Xa.subVectors(t,r);const p=ki.dot(Xa),_=Wi.dot(Xa);if(_>=0&&p<=_)return e.copy(r);const v=p*l-c*_;if(v<=0&&l>=0&&_<=0)return o=l/(l-_),e.copy(i).addScaledVector(Wi,o);const m=h*_-p*u;if(m<=0&&u-h>=0&&p-_>=0)return fl.subVectors(r,s),o=(u-h)/(u-h+(p-_)),e.copy(s).addScaledVector(fl,o);const f=1/(m+v+d);return a=v*f,o=d*f,e.copy(i).addScaledVector(ki,a).addScaledVector(Wi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Dh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},Mr={h:0,s:0,l:0};function qa(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class At{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Se){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=te.workingColorSpace){if(t=Uo(t,1),e=Re(e,0,1),i=Re(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=qa(a,r,t+1/3),this.g=qa(a,r,t),this.b=qa(a,r,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=Se){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Se){const i=Dh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=as(t.r),this.g=as(t.g),this.b=as(t.b),this}copyLinearToSRGB(t){return this.r=Ia(t.r),this.g=Ia(t.g),this.b=Ia(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Se){return te.fromWorkingColorSpace(Ne.copy(this),t),Math.round(Re(Ne.r*255,0,255))*65536+Math.round(Re(Ne.g*255,0,255))*256+Math.round(Re(Ne.b*255,0,255))}getHexString(t=Se){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Ne.copy(this),e);const i=Ne.r,s=Ne.g,r=Ne.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=Se){te.fromWorkingColorSpace(Ne.copy(this),t);const e=Ne.r,i=Ne.g,s=Ne.b;return t!==Se?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Jn),this.setHSL(Jn.h+t,Jn.s+e,Jn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Jn),t.getHSL(Mr);const i=Bs(Jn.h,Mr.h,e),s=Bs(Jn.s,Mr.s,e),r=Bs(Jn.l,Mr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ne=new At;At.NAMES=Dh;let cd=0;class Es extends Ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=Ss(),this.name="",this.type="Material",this.blending=rs,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uo,this.blendDst=fo,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$c,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fi,this.stencilZFail=Fi,this.stencilZPass=Fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==rs&&(i.blending=this.blending),this.side!==si&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==uo&&(i.blendSrc=this.blendSrc),this.blendDst!==fo&&(i.blendDst=this.blendDst),this.blendEquation!==Mi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Kr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$c&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class In extends Es{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=dh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ve=new P,Sr=new ut;class _e{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Qc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Sr.fromBufferAttribute(this,e),Sr.applyMatrix3(t),this.setXY(e,Sr.x,Sr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ts(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ze(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ts(e,this.array)),e}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ts(e,this.array)),e}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ts(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ts(e,this.array)),e}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array),s=ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array),s=ze(s,this.array),r=ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qc&&(t.usage=this.usage),t}}class Uh extends _e{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Ih extends _e{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ie extends _e{constructor(t,e,i){super(new Float32Array(t),e,i)}}let ld=0;const sn=new he,Ya=new ue,Xi=new P,je=new Ii,Ls=new Ii,Ae=new P;class pe extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=Ss(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wh(t)?Ih:Uh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,i){return sn.makeTranslation(t,e,i),this.applyMatrix4(sn),this}scale(t,e,i){return sn.makeScale(t,e,i),this.applyMatrix4(sn),this}lookAt(t){return Ya.lookAt(t),Ya.updateMatrix(),this.applyMatrix4(Ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ie(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];je.setFromBufferAttribute(r),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ys);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(t){const i=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ls.setFromBufferAttribute(o),this.morphTargetsRelative?(Ae.addVectors(je.min,Ls.min),je.expandByPoint(Ae),Ae.addVectors(je.max,Ls.max),je.expandByPoint(Ae)):(je.expandByPoint(Ls.min),je.expandByPoint(Ls.max))}je.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Ae.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ae));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ae.fromBufferAttribute(o,l),c&&(Xi.fromBufferAttribute(t,l),Ae.add(Xi)),s=Math.max(s,i.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _e(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let b=0;b<o;b++)l[b]=new P,h[b]=new P;const u=new P,d=new P,p=new P,_=new ut,v=new ut,m=new ut,f=new P,y=new P;function S(b,H,W){u.fromArray(s,b*3),d.fromArray(s,H*3),p.fromArray(s,W*3),_.fromArray(a,b*2),v.fromArray(a,H*2),m.fromArray(a,W*2),d.sub(u),p.sub(u),v.sub(_),m.sub(_);const nt=1/(v.x*m.y-m.x*v.y);isFinite(nt)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(nt),y.copy(p).multiplyScalar(v.x).addScaledVector(d,-m.x).multiplyScalar(nt),l[b].add(f),l[H].add(f),l[W].add(f),h[b].add(y),h[H].add(y),h[W].add(y))}let T=this.groups;T.length===0&&(T=[{start:0,count:i.length}]);for(let b=0,H=T.length;b<H;++b){const W=T[b],nt=W.start,D=W.count;for(let O=nt,q=nt+D;O<q;O+=3)S(i[O+0],i[O+1],i[O+2])}const C=new P,A=new P,R=new P,I=new P;function x(b){R.fromArray(r,b*3),I.copy(R);const H=l[b];C.copy(H),C.sub(R.multiplyScalar(R.dot(H))).normalize(),A.crossVectors(I,H);const nt=A.dot(h[b])<0?-1:1;c[b*4]=C.x,c[b*4+1]=C.y,c[b*4+2]=C.z,c[b*4+3]=nt}for(let b=0,H=T.length;b<H;++b){const W=T[b],nt=W.start,D=W.count;for(let O=nt,q=nt+D;O<q;O+=3)x(i[O+0]),x(i[O+1]),x(i[O+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _e(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new P,r=new P,a=new P,o=new P,c=new P,l=new P,h=new P,u=new P;if(t)for(let d=0,p=t.count;d<p;d+=3){const _=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,_),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let p=0,_=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?p=c[v]*o.data.stride+o.offset:p=c[v]*h;for(let f=0;f<h;f++)d[_++]=l[p++]}return new _e(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new pe,i=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,i);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],p=t(d,i);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dl=new he,di=new Ph,yr=new ys,pl=new P,qi=new P,Yi=new P,Ji=new P,Ja=new P,Er=new P,Tr=new ut,br=new ut,wr=new ut,ml=new P,gl=new P,_l=new P,Ar=new P,Rr=new P;class vt extends ue{constructor(t=new pe,e=new In){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Er.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(Ja.fromBufferAttribute(u,t),a?Er.addScaledVector(Ja,h):Er.addScaledVector(Ja.sub(e),h))}e.add(Er)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yr.copy(i.boundingSphere),yr.applyMatrix4(r),di.copy(t.ray).recast(t.near),!(yr.containsPoint(di.origin)===!1&&(di.intersectSphere(yr,pl)===null||di.origin.distanceToSquared(pl)>(t.far-t.near)**2))&&(dl.copy(r).invert(),di.copy(t.ray).applyMatrix4(dl),!(i.boundingBox!==null&&di.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,di)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=d.length;_<v;_++){const m=d[_],f=a[m.materialIndex],y=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let T=y,C=S;T<C;T+=3){const A=o.getX(T),R=o.getX(T+1),I=o.getX(T+2);s=Cr(this,f,t,i,l,h,u,A,R,I),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=_,f=v;m<f;m+=3){const y=o.getX(m),S=o.getX(m+1),T=o.getX(m+2);s=Cr(this,a,t,i,l,h,u,y,S,T),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,v=d.length;_<v;_++){const m=d[_],f=a[m.materialIndex],y=Math.max(m.start,p.start),S=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let T=y,C=S;T<C;T+=3){const A=T,R=T+1,I=T+2;s=Cr(this,f,t,i,l,h,u,A,R,I),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=_,f=v;m<f;m+=3){const y=m,S=m+1,T=m+2;s=Cr(this,a,t,i,l,h,u,y,S,T),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function hd(n,t,e,i,s,r,a,o){let c;if(t.side===We?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,t.side===si,o),c===null)return null;Rr.copy(o),Rr.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Rr);return l<e.near||l>e.far?null:{distance:l,point:Rr.clone(),object:n}}function Cr(n,t,e,i,s,r,a,o,c,l){n.getVertexPosition(o,qi),n.getVertexPosition(c,Yi),n.getVertexPosition(l,Ji);const h=hd(n,t,e,i,qi,Yi,Ji,Ar);if(h){s&&(Tr.fromBufferAttribute(s,o),br.fromBufferAttribute(s,c),wr.fromBufferAttribute(s,l),h.uv=dn.getInterpolation(Ar,qi,Yi,Ji,Tr,br,wr,new ut)),r&&(Tr.fromBufferAttribute(r,o),br.fromBufferAttribute(r,c),wr.fromBufferAttribute(r,l),h.uv1=dn.getInterpolation(Ar,qi,Yi,Ji,Tr,br,wr,new ut),h.uv2=h.uv1),a&&(ml.fromBufferAttribute(a,o),gl.fromBufferAttribute(a,c),_l.fromBufferAttribute(a,l),h.normal=dn.getInterpolation(Ar,qi,Yi,Ji,ml,gl,_l,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new P,materialIndex:0};dn.getNormal(qi,Yi,Ji,u.normal),h.face=u}return h}class kn extends pe{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,p=0;_("z","y","x",-1,-1,i,e,t,a,r,0),_("z","y","x",1,-1,i,e,-t,a,r,1),_("x","z","y",1,1,t,i,e,s,a,2),_("x","z","y",1,-1,t,i,-e,s,a,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(u,2));function _(v,m,f,y,S,T,C,A,R,I,x){const b=T/R,H=C/I,W=T/2,nt=C/2,D=A/2,O=R+1,q=I+1;let $=0,K=0;const Q=new P;for(let tt=0;tt<q;tt++){const at=tt*H-nt;for(let it=0;it<O;it++){const X=it*b-W;Q[v]=X*y,Q[m]=at*S,Q[f]=D,l.push(Q.x,Q.y,Q.z),Q[v]=0,Q[m]=0,Q[f]=A>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(it/R),u.push(1-tt/I),$+=1}}for(let tt=0;tt<I;tt++)for(let at=0;at<R;at++){const it=d+at+O*tt,X=d+at+O*(tt+1),j=d+(at+1)+O*(tt+1),mt=d+(at+1)+O*tt;c.push(it,X,mt),c.push(X,j,mt),K+=6}o.addGroup(p,K,x),p+=K,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ds(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ge(n){const t={};for(let e=0;e<n.length;e++){const i=ds(n[e]);for(const s in i)t[s]=i[s]}return t}function ud(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Nh(n){return n.getRenderTarget()===null?n.outputColorSpace:te.workingColorSpace}const na={clone:ds,merge:Ge};var fd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tn extends Es{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fd,this.fragmentShader=dd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ds(t.uniforms),this.uniformsGroups=ud(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Fh extends ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=On}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Qe extends Fh{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=fs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Os*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fs*2*Math.atan(Math.tan(Os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Os*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ki=-90,Zi=1;class pd extends ue{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qe(Ki,Zi,t,e);s.layers=this.layers,this.add(s);const r=new Qe(Ki,Zi,t,e);r.layers=this.layers,this.add(r);const a=new Qe(Ki,Zi,t,e);a.layers=this.layers,this.add(a);const o=new Qe(Ki,Zi,t,e);o.layers=this.layers,this.add(o);const c=new Qe(Ki,Zi,t,e);c.layers=this.layers,this.add(c);const l=new Qe(Ki,Zi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===On)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Qr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Oh extends Ye{constructor(t,e,i,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ls,super(t,e,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class md extends _n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];e.encoding!==void 0&&(zs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ci?Se:on),this.texture=new Oh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:rn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new kn(5,5,5),r=new tn({name:"CubemapFromEquirect",uniforms:ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:We,blending:zn});r.uniforms.tEquirect.value=e;const a=new vt(s,r),o=e.minFilter;return e.minFilter===ks&&(e.minFilter=rn),new pd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}const Ka=new P,gd=new P,_d=new Kt;class gi{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Ka.subVectors(i,e).cross(gd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ka),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||_d.getNormalMatrix(t),s=this.coplanarPoint(Ka).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pi=new ys,Pr=new P;class Io{constructor(t=new gi,e=new gi,i=new gi,s=new gi,r=new gi,a=new gi){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=On){const i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],p=s[8],_=s[9],v=s[10],m=s[11],f=s[12],y=s[13],S=s[14],T=s[15];if(i[0].setComponents(c-r,d-l,m-p,T-f).normalize(),i[1].setComponents(c+r,d+l,m+p,T+f).normalize(),i[2].setComponents(c+a,d+h,m+_,T+y).normalize(),i[3].setComponents(c-a,d-h,m-_,T-y).normalize(),i[4].setComponents(c-o,d-u,m-v,T-S).normalize(),e===On)i[5].setComponents(c+o,d+u,m+v,T+S).normalize();else if(e===Qr)i[5].setComponents(o,u,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(t){return pi.center.set(0,0,0),pi.radius=.7071067811865476,pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Pr.x=s.normal.x>0?t.max.x:t.min.x,Pr.y=s.normal.y>0?t.max.y:t.min.y,Pr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Pr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bh(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function vd(n,t){const e=t.isWebGL2,i=new WeakMap;function s(l,h){const u=l.array,d=l.usage,p=u.byteLength,_=n.createBuffer();n.bindBuffer(h,_),n.bufferData(h,u,d),l.onUploadCallback();let v;if(u instanceof Float32Array)v=n.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=n.SHORT;else if(u instanceof Uint32Array)v=n.UNSIGNED_INT;else if(u instanceof Int32Array)v=n.INT;else if(u instanceof Int8Array)v=n.BYTE;else if(u instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:_,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:p}}function r(l,h,u){const d=h.array,p=h._updateRange,_=h.updateRanges;if(n.bindBuffer(u,l),p.count===-1&&_.length===0&&n.bufferSubData(u,0,d),_.length!==0){for(let v=0,m=_.length;v<m;v++){const f=_[v];e?n.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):n.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(e?n.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=i.get(l);h&&(n.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);if(u===void 0)i.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:a,remove:o,update:c}}class Pi extends pe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,u=t/o,d=e/c,p=[],_=[],v=[],m=[];for(let f=0;f<h;f++){const y=f*d-a;for(let S=0;S<l;S++){const T=S*u-r;_.push(T,-y,0),v.push(0,0,1),m.push(S/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let y=0;y<o;y++){const S=y+l*f,T=y+l*(f+1),C=y+1+l*(f+1),A=y+1+l*f;p.push(S,T,A),p.push(T,C,A)}this.setIndex(p),this.setAttribute("position",new ie(_,3)),this.setAttribute("normal",new ie(v,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pi(t.width,t.height,t.widthSegments,t.heightSegments)}}var xd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Md=`#ifdef USE_ALPHAHASH
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
#endif`,Sd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ed=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Td=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bd=`#ifdef USE_AOMAP
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
#endif`,wd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ad=`#ifdef USE_BATCHING
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
#endif`,Rd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Cd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ld=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dd=`#ifdef USE_IRIDESCENCE
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
#endif`,Ud=`#ifdef USE_BUMPMAP
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
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Od=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Hd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Vd=`#define PI 3.141592653589793
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
} // validated`,kd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wd=`vec3 transformedNormal = objectNormal;
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
#endif`,Xd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zd=`
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
}`,jd=`#ifdef USE_ENVMAP
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
#endif`,$d=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qd=`#ifdef USE_ENVMAP
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
#endif`,tp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ep=`#ifdef USE_ENVMAP
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
#endif`,np=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ip=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ap=`#ifdef USE_GRADIENTMAP
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
}`,op=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,cp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,up=`uniform bool receiveShadow;
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
#endif`,fp=`#ifdef USE_ENVMAP
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
#endif`,dp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_p=`PhysicalMaterial material;
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
#endif`,vp=`struct PhysicalMaterial {
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
}`,xp=`
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
#endif`,Mp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ep=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,bp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,wp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ap=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cp=`#if defined( USE_POINTS_UV )
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
#endif`,Pp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Up=`#ifdef USE_MORPHNORMALS
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
#endif`,Ip=`#ifdef USE_MORPHTARGETS
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
#endif`,Np=`#ifdef USE_MORPHTARGETS
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
#endif`,Fp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Op=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hp=`#ifdef USE_NORMALMAP
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
#endif`,Vp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$p=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,im=`float getShadowMask() {
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
}`,sm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rm=`#ifdef USE_SKINNING
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
#endif`,am=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,om=`#ifdef USE_SKINNING
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
#endif`,cm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,um=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fm=`#ifdef USE_TRANSMISSION
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
#endif`,dm=`#ifdef USE_TRANSMISSION
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
#endif`,pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_m=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xm=`uniform sampler2D t2D;
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
}`,Mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Em=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tm=`#include <common>
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
}`,bm=`#if DEPTH_PACKING == 3200
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
}`,wm=`#define DISTANCE
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
}`,Am=`#define DISTANCE
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
}`,Rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pm=`uniform float scale;
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
}`,Lm=`uniform vec3 diffuse;
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
}`,Dm=`#include <common>
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
}`,Um=`uniform vec3 diffuse;
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
}`,Im=`#define LAMBERT
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
}`,Nm=`#define LAMBERT
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
}`,Fm=`#define MATCAP
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
}`,Om=`#define MATCAP
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
}`,Bm=`#define NORMAL
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
}`,zm=`#define NORMAL
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
}`,Gm=`#define PHONG
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
}`,Hm=`#define PHONG
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
}`,Vm=`#define STANDARD
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
}`,km=`#define STANDARD
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
}`,Wm=`#define TOON
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
}`,Xm=`#define TOON
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
}`,qm=`uniform float size;
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
}`,Ym=`uniform vec3 diffuse;
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
}`,Jm=`#include <common>
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
}`,Km=`uniform vec3 color;
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
}`,Zm=`uniform float rotation;
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
}`,jm=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:xd,alphahash_pars_fragment:Md,alphamap_fragment:Sd,alphamap_pars_fragment:yd,alphatest_fragment:Ed,alphatest_pars_fragment:Td,aomap_fragment:bd,aomap_pars_fragment:wd,batching_pars_vertex:Ad,batching_vertex:Rd,begin_vertex:Cd,beginnormal_vertex:Pd,bsdfs:Ld,iridescence_fragment:Dd,bumpmap_pars_fragment:Ud,clipping_planes_fragment:Id,clipping_planes_pars_fragment:Nd,clipping_planes_pars_vertex:Fd,clipping_planes_vertex:Od,color_fragment:Bd,color_pars_fragment:zd,color_pars_vertex:Gd,color_vertex:Hd,common:Vd,cube_uv_reflection_fragment:kd,defaultnormal_vertex:Wd,displacementmap_pars_vertex:Xd,displacementmap_vertex:qd,emissivemap_fragment:Yd,emissivemap_pars_fragment:Jd,colorspace_fragment:Kd,colorspace_pars_fragment:Zd,envmap_fragment:jd,envmap_common_pars_fragment:$d,envmap_pars_fragment:Qd,envmap_pars_vertex:tp,envmap_physical_pars_fragment:fp,envmap_vertex:ep,fog_vertex:np,fog_pars_vertex:ip,fog_fragment:sp,fog_pars_fragment:rp,gradientmap_pars_fragment:ap,lightmap_fragment:op,lightmap_pars_fragment:cp,lights_lambert_fragment:lp,lights_lambert_pars_fragment:hp,lights_pars_begin:up,lights_toon_fragment:dp,lights_toon_pars_fragment:pp,lights_phong_fragment:mp,lights_phong_pars_fragment:gp,lights_physical_fragment:_p,lights_physical_pars_fragment:vp,lights_fragment_begin:xp,lights_fragment_maps:Mp,lights_fragment_end:Sp,logdepthbuf_fragment:yp,logdepthbuf_pars_fragment:Ep,logdepthbuf_pars_vertex:Tp,logdepthbuf_vertex:bp,map_fragment:wp,map_pars_fragment:Ap,map_particle_fragment:Rp,map_particle_pars_fragment:Cp,metalnessmap_fragment:Pp,metalnessmap_pars_fragment:Lp,morphcolor_vertex:Dp,morphnormal_vertex:Up,morphtarget_pars_vertex:Ip,morphtarget_vertex:Np,normal_fragment_begin:Fp,normal_fragment_maps:Op,normal_pars_fragment:Bp,normal_pars_vertex:zp,normal_vertex:Gp,normalmap_pars_fragment:Hp,clearcoat_normal_fragment_begin:Vp,clearcoat_normal_fragment_maps:kp,clearcoat_pars_fragment:Wp,iridescence_pars_fragment:Xp,opaque_fragment:qp,packing:Yp,premultiplied_alpha_fragment:Jp,project_vertex:Kp,dithering_fragment:Zp,dithering_pars_fragment:jp,roughnessmap_fragment:$p,roughnessmap_pars_fragment:Qp,shadowmap_pars_fragment:tm,shadowmap_pars_vertex:em,shadowmap_vertex:nm,shadowmask_pars_fragment:im,skinbase_vertex:sm,skinning_pars_vertex:rm,skinning_vertex:am,skinnormal_vertex:om,specularmap_fragment:cm,specularmap_pars_fragment:lm,tonemapping_fragment:hm,tonemapping_pars_fragment:um,transmission_fragment:fm,transmission_pars_fragment:dm,uv_pars_fragment:pm,uv_pars_vertex:mm,uv_vertex:gm,worldpos_vertex:_m,background_vert:vm,background_frag:xm,backgroundCube_vert:Mm,backgroundCube_frag:Sm,cube_vert:ym,cube_frag:Em,depth_vert:Tm,depth_frag:bm,distanceRGBA_vert:wm,distanceRGBA_frag:Am,equirect_vert:Rm,equirect_frag:Cm,linedashed_vert:Pm,linedashed_frag:Lm,meshbasic_vert:Dm,meshbasic_frag:Um,meshlambert_vert:Im,meshlambert_frag:Nm,meshmatcap_vert:Fm,meshmatcap_frag:Om,meshnormal_vert:Bm,meshnormal_frag:zm,meshphong_vert:Gm,meshphong_frag:Hm,meshphysical_vert:Vm,meshphysical_frag:km,meshtoon_vert:Wm,meshtoon_frag:Xm,points_vert:qm,points_frag:Ym,shadow_vert:Jm,shadow_frag:Km,sprite_vert:Zm,sprite_frag:jm},lt={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},Mn={basic:{uniforms:Ge([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Ge([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new At(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Ge([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Ge([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Ge([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new At(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Ge([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Ge([lt.points,lt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Ge([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Ge([lt.common,lt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Ge([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Ge([lt.sprite,lt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Ge([lt.common,lt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Ge([lt.lights,lt.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};Mn.physical={uniforms:Ge([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const Lr={r:0,b:0,g:0};function $m(n,t,e,i,s,r,a){const o=new At(0);let c=r===!0?0:1,l,h,u=null,d=0,p=null;function _(m,f){let y=!1,S=f.isScene===!0?f.background:null;S&&S.isTexture&&(S=(f.backgroundBlurriness>0?e:t).get(S)),S===null?v(o,c):S&&S.isColor&&(v(S,1),y=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),S&&(S.isCubeTexture||S.mapping===fa)?(h===void 0&&(h=new vt(new kn(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:ds(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=te.getTransfer(S.colorSpace)!==ce,(u!==S||d!==S.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=S,d=S.version,p=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new vt(new Pi(2,2),new tn({name:"BackgroundMaterial",uniforms:ds(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=te.getTransfer(S.colorSpace)!==ce,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,u=S,d=S.version,p=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function v(m,f){m.getRGB(Lr,Nh(n)),i.buffers.color.setClear(Lr.r,Lr.g,Lr.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),c=f,v(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,v(o,c)},render:_}}function Qm(n,t,e,i){const s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},c=m(null);let l=c,h=!1;function u(D,O,q,$,K){let Q=!1;if(a){const tt=v($,q,O);l!==tt&&(l=tt,p(l.object)),Q=f(D,$,q,K),Q&&y(D,$,q,K)}else{const tt=O.wireframe===!0;(l.geometry!==$.id||l.program!==q.id||l.wireframe!==tt)&&(l.geometry=$.id,l.program=q.id,l.wireframe=tt,Q=!0)}K!==null&&e.update(K,n.ELEMENT_ARRAY_BUFFER),(Q||h)&&(h=!1,I(D,O,q,$),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function p(D){return i.isWebGL2?n.bindVertexArray(D):r.bindVertexArrayOES(D)}function _(D){return i.isWebGL2?n.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function v(D,O,q){const $=q.wireframe===!0;let K=o[D.id];K===void 0&&(K={},o[D.id]=K);let Q=K[O.id];Q===void 0&&(Q={},K[O.id]=Q);let tt=Q[$];return tt===void 0&&(tt=m(d()),Q[$]=tt),tt}function m(D){const O=[],q=[],$=[];for(let K=0;K<s;K++)O[K]=0,q[K]=0,$[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:q,attributeDivisors:$,object:D,attributes:{},index:null}}function f(D,O,q,$){const K=l.attributes,Q=O.attributes;let tt=0;const at=q.getAttributes();for(const it in at)if(at[it].location>=0){const j=K[it];let mt=Q[it];if(mt===void 0&&(it==="instanceMatrix"&&D.instanceMatrix&&(mt=D.instanceMatrix),it==="instanceColor"&&D.instanceColor&&(mt=D.instanceColor)),j===void 0||j.attribute!==mt||mt&&j.data!==mt.data)return!0;tt++}return l.attributesNum!==tt||l.index!==$}function y(D,O,q,$){const K={},Q=O.attributes;let tt=0;const at=q.getAttributes();for(const it in at)if(at[it].location>=0){let j=Q[it];j===void 0&&(it==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),it==="instanceColor"&&D.instanceColor&&(j=D.instanceColor));const mt={};mt.attribute=j,j&&j.data&&(mt.data=j.data),K[it]=mt,tt++}l.attributes=K,l.attributesNum=tt,l.index=$}function S(){const D=l.newAttributes;for(let O=0,q=D.length;O<q;O++)D[O]=0}function T(D){C(D,0)}function C(D,O){const q=l.newAttributes,$=l.enabledAttributes,K=l.attributeDivisors;q[D]=1,$[D]===0&&(n.enableVertexAttribArray(D),$[D]=1),K[D]!==O&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,O),K[D]=O)}function A(){const D=l.newAttributes,O=l.enabledAttributes;for(let q=0,$=O.length;q<$;q++)O[q]!==D[q]&&(n.disableVertexAttribArray(q),O[q]=0)}function R(D,O,q,$,K,Q,tt){tt===!0?n.vertexAttribIPointer(D,O,q,K,Q):n.vertexAttribPointer(D,O,q,$,K,Q)}function I(D,O,q,$){if(i.isWebGL2===!1&&(D.isInstancedMesh||$.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;S();const K=$.attributes,Q=q.getAttributes(),tt=O.defaultAttributeValues;for(const at in Q){const it=Q[at];if(it.location>=0){let X=K[at];if(X===void 0&&(at==="instanceMatrix"&&D.instanceMatrix&&(X=D.instanceMatrix),at==="instanceColor"&&D.instanceColor&&(X=D.instanceColor)),X!==void 0){const j=X.normalized,mt=X.itemSize,yt=e.get(X);if(yt===void 0)continue;const Et=yt.buffer,Nt=yt.type,Ot=yt.bytesPerElement,Pt=i.isWebGL2===!0&&(Nt===n.INT||Nt===n.UNSIGNED_INT||X.gpuType===gh);if(X.isInterleavedBufferAttribute){const kt=X.data,F=kt.stride,De=X.offset;if(kt.isInstancedInterleavedBuffer){for(let wt=0;wt<it.locationSize;wt++)C(it.location+wt,kt.meshPerAttribute);D.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=kt.meshPerAttribute*kt.count)}else for(let wt=0;wt<it.locationSize;wt++)T(it.location+wt);n.bindBuffer(n.ARRAY_BUFFER,Et);for(let wt=0;wt<it.locationSize;wt++)R(it.location+wt,mt/it.locationSize,Nt,j,F*Ot,(De+mt/it.locationSize*wt)*Ot,Pt)}else{if(X.isInstancedBufferAttribute){for(let kt=0;kt<it.locationSize;kt++)C(it.location+kt,X.meshPerAttribute);D.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let kt=0;kt<it.locationSize;kt++)T(it.location+kt);n.bindBuffer(n.ARRAY_BUFFER,Et);for(let kt=0;kt<it.locationSize;kt++)R(it.location+kt,mt/it.locationSize,Nt,j,mt*Ot,mt/it.locationSize*kt*Ot,Pt)}}else if(tt!==void 0){const j=tt[at];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(it.location,j);break;case 3:n.vertexAttrib3fv(it.location,j);break;case 4:n.vertexAttrib4fv(it.location,j);break;default:n.vertexAttrib1fv(it.location,j)}}}}A()}function x(){W();for(const D in o){const O=o[D];for(const q in O){const $=O[q];for(const K in $)_($[K].object),delete $[K];delete O[q]}delete o[D]}}function b(D){if(o[D.id]===void 0)return;const O=o[D.id];for(const q in O){const $=O[q];for(const K in $)_($[K].object),delete $[K];delete O[q]}delete o[D.id]}function H(D){for(const O in o){const q=o[O];if(q[D.id]===void 0)continue;const $=q[D.id];for(const K in $)_($[K].object),delete $[K];delete q[D.id]}}function W(){nt(),h=!0,l!==c&&(l=c,p(l.object))}function nt(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:W,resetDefaultState:nt,dispose:x,releaseStatesOfGeometry:b,releaseStatesOfProgram:H,initAttributes:S,enableAttribute:T,disableUnusedAttributes:A}}function tg(n,t,e,i){const s=i.isWebGL2;let r;function a(h){r=h}function o(h,u){n.drawArrays(r,h,u),e.update(u,r,1)}function c(h,u,d){if(d===0)return;let p,_;if(s)p=n,_="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](r,h,u,d),e.update(u,r,d)}function l(h,u,d){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<d;_++)this.render(h[_],u[_]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,d);let _=0;for(let v=0;v<d;v++)_+=u[v];e.update(_,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function eg(n,t,e){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=d>0,T=a||t.has("OES_texture_float"),C=S&&T,A=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:y,vertexTextures:S,floatFragmentTextures:T,floatVertexTextures:C,maxSamples:A}}function ng(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new gi,o=new Kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||i!==0||s;return s=d,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const _=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,f=n.get(u);if(!s||_===null||_.length===0||r&&!m)r?h(null):l();else{const y=r?0:i,S=y*4;let T=f.clippingState||null;c.value=T,T=h(_,d,S,p);for(let C=0;C!==S;++C)T[C]=e[C];f.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,p,_){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,_!==!0||m===null){const f=p+v*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,T=p;S!==v;++S,T+=4)a.copy(u[S]).applyMatrix4(y,o),a.normal.toArray(m,T),m[T+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function ig(n){let t=new WeakMap;function e(a,o){return o===po?a.mapping=ls:o===mo&&(a.mapping=hs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===po||o===mo)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new md(c.height/2);return l.fromEquirectangularTexture(n,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class No extends Fh{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const es=4,vl=[.125,.215,.35,.446,.526,.582],Si=20,Za=new No,xl=new At;let ja=null,$a=0,Qa=0;const _i=(1+Math.sqrt(5))/2,ji=1/_i,Ml=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,_i,ji),new P(0,_i,-ji),new P(ji,0,_i),new P(-ji,0,_i),new P(_i,ji,0),new P(-_i,ji,0)];class Sl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){ja=this._renderer.getRenderTarget(),$a=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=El(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ja,$a,Qa),t.scissorTest=!1,Dr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ls||t.mapping===hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ja=this._renderer.getRenderTarget(),$a=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Gn,format:gn,colorSpace:Vn,depthBuffer:!1},s=yl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yl(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sg(r)),this._blurMaterial=rg(r,t,e)}return s}_compileMaterial(t){const e=new vt(this._lodPlanes[0],t);this._renderer.compile(e,Za)}_sceneToCubeUV(t,e,i,s){const o=new Qe(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(xl),h.toneMapping=Qn,h.autoClear=!1;const p=new In({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),_=new vt(new kn,p);let v=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(xl),v=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):y===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));const S=this._cubeSize;Dr(s,y*S,f>2?S:0,S,S),h.setRenderTarget(s),v&&h.render(_,o),h.render(t,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===ls||t.mapping===hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=El());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new vt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Dr(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,Za)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ml[(s-1)%Ml.length];this._blur(t,s-1,s,r,a)}e.autoClear=i}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new vt(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Si-1),v=r/_,m=isFinite(r)?1+Math.floor(h*v):Si;m>Si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Si}`);const f=[];let y=0;for(let R=0;R<Si;++R){const I=R/v,x=Math.exp(-I*I/2);f.push(x),R===0?y+=x:R<m&&(y+=2*x)}for(let R=0;R<f.length;R++)f[R]=f[R]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=_,d.mipInt.value=S-i;const T=this._sizeLods[s],C=3*T*(s>S-es?s-S+es:0),A=4*(this._cubeSize-T);Dr(e,C,A,3*T,2*T),c.setRenderTarget(e),c.render(u,Za)}}function sg(n){const t=[],e=[],i=[];let s=n;const r=n-es+1+vl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>n-es?c=vl[a-n+es-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,_=6,v=3,m=2,f=1,y=new Float32Array(v*_*p),S=new Float32Array(m*_*p),T=new Float32Array(f*_*p);for(let A=0;A<p;A++){const R=A%3*2/3-1,I=A>2?0:-1,x=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];y.set(x,v*_*A),S.set(d,m*_*A);const b=[A,A,A,A,A,A];T.set(b,f*_*A)}const C=new pe;C.setAttribute("position",new _e(y,v)),C.setAttribute("uv",new _e(S,m)),C.setAttribute("faceIndex",new _e(T,f)),t.push(C),s>es&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function yl(n,t,e){const i=new _n(n,t,e);return i.texture.mapping=fa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Dr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function rg(n,t,e){const i=new Float32Array(Si),s=new P(0,1,0);return new tn({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fo(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function El(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fo(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Tl(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Fo(){return`

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
	`}function ag(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===po||c===mo,h=c===ls||c===hs;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new Sl(n)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{const u=o.image;if(l&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new Sl(n));const d=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function og(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const s=e(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function cg(n,t,e,i){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);for(const _ in d.morphAttributes){const v=d.morphAttributes[_];for(let m=0,f=v.length;m<f;m++)t.remove(v[m])}d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const _ in d)t.update(d[_],n.ARRAY_BUFFER);const p=u.morphAttributes;for(const _ in p){const v=p[_];for(let m=0,f=v.length;m<f;m++)t.update(v[m],n.ARRAY_BUFFER)}}function l(u){const d=[],p=u.index,_=u.attributes.position;let v=0;if(p!==null){const y=p.array;v=p.version;for(let S=0,T=y.length;S<T;S+=3){const C=y[S+0],A=y[S+1],R=y[S+2];d.push(C,A,A,R,R,C)}}else if(_!==void 0){const y=_.array;v=_.version;for(let S=0,T=y.length/3-1;S<T;S+=3){const C=S+0,A=S+1,R=S+2;d.push(C,A,A,R,R,C)}}else return;const m=new(wh(d)?Ih:Uh)(d,1);m.version=v;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function lg(n,t,e,i){const s=i.isWebGL2;let r;function a(p){r=p}let o,c;function l(p){o=p.type,c=p.bytesPerElement}function h(p,_){n.drawElements(r,_,o,p*c),e.update(_,r,1)}function u(p,_,v){if(v===0)return;let m,f;if(s)m=n,f="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,_,o,p*c,v),e.update(_,r,v)}function d(p,_,v){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<v;f++)this.render(p[f]/c,_[f]);else{m.multiDrawElementsWEBGL(r,_,0,o,p,0,v);let f=0;for(let y=0;y<v;y++)f+=_[y];e.update(f,r,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function hg(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function ug(n,t){return n[0]-t[0]}function fg(n,t){return Math.abs(t[1])-Math.abs(n[1])}function dg(n,t,e){const i={},s=new Float32Array(8),r=new WeakMap,a=new Le,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u){const d=l.morphTargetInfluences;if(t.isWebGL2===!0){const _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=_!==void 0?_.length:0;let m=r.get(h);if(m===void 0||m.count!==v){let O=function(){nt.dispose(),r.delete(h),h.removeEventListener("dispose",O)};var p=O;m!==void 0&&m.texture.dispose();const S=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,C=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],I=h.morphAttributes.color||[];let x=0;S===!0&&(x=1),T===!0&&(x=2),C===!0&&(x=3);let b=h.attributes.position.count*x,H=1;b>t.maxTextureSize&&(H=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const W=new Float32Array(b*H*4*v),nt=new Ch(W,b,H,v);nt.type=jn,nt.needsUpdate=!0;const D=x*4;for(let q=0;q<v;q++){const $=A[q],K=R[q],Q=I[q],tt=b*H*4*q;for(let at=0;at<$.count;at++){const it=at*D;S===!0&&(a.fromBufferAttribute($,at),W[tt+it+0]=a.x,W[tt+it+1]=a.y,W[tt+it+2]=a.z,W[tt+it+3]=0),T===!0&&(a.fromBufferAttribute(K,at),W[tt+it+4]=a.x,W[tt+it+5]=a.y,W[tt+it+6]=a.z,W[tt+it+7]=0),C===!0&&(a.fromBufferAttribute(Q,at),W[tt+it+8]=a.x,W[tt+it+9]=a.y,W[tt+it+10]=a.z,W[tt+it+11]=Q.itemSize===4?a.w:1)}}m={count:v,texture:nt,size:new ut(b,H)},r.set(h,m),h.addEventListener("dispose",O)}let f=0;for(let S=0;S<d.length;S++)f+=d[S];const y=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(n,"morphTargetBaseInfluence",y),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",m.texture,e),u.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const _=d===void 0?0:d.length;let v=i[h.id];if(v===void 0||v.length!==_){v=[];for(let T=0;T<_;T++)v[T]=[T,0];i[h.id]=v}for(let T=0;T<_;T++){const C=v[T];C[0]=T,C[1]=d[T]}v.sort(fg);for(let T=0;T<8;T++)T<_&&v[T][1]?(o[T][0]=v[T][0],o[T][1]=v[T][1]):(o[T][0]=Number.MAX_SAFE_INTEGER,o[T][1]=0);o.sort(ug);const m=h.morphAttributes.position,f=h.morphAttributes.normal;let y=0;for(let T=0;T<8;T++){const C=o[T],A=C[0],R=C[1];A!==Number.MAX_SAFE_INTEGER&&R?(m&&h.getAttribute("morphTarget"+T)!==m[A]&&h.setAttribute("morphTarget"+T,m[A]),f&&h.getAttribute("morphNormal"+T)!==f[A]&&h.setAttribute("morphNormal"+T,f[A]),s[T]=R,y+=R):(m&&h.hasAttribute("morphTarget"+T)===!0&&h.deleteAttribute("morphTarget"+T),f&&h.hasAttribute("morphNormal"+T)===!0&&h.deleteAttribute("morphNormal"+T),s[T]=0)}const S=h.morphTargetsRelative?1:1-y;u.getUniforms().setValue(n,"morphTargetBaseInfluence",S),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:c}}function pg(n,t,e,i){let s=new WeakMap;function r(c){const l=i.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class zh extends Ye{constructor(t,e,i,s,r,a,o,c,l,h){if(h=h!==void 0?h:Ri,h!==Ri&&h!==us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ri&&(i=Zn),i===void 0&&h===us&&(i=Ai),super(null,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ve,this.minFilter=c!==void 0?c:Ve,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Gh=new Ye,Hh=new zh(1,1);Hh.compareFunction=bh;const Vh=new Ch,kh=new Qf,Wh=new Oh,bl=[],wl=[],Al=new Float32Array(16),Rl=new Float32Array(9),Cl=new Float32Array(4);function Ts(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=bl[s];if(r===void 0&&(r=new Float32Array(s),bl[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Ee(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Te(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ma(n,t){let e=wl[t];e===void 0&&(e=new Int32Array(t),wl[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function mg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function gg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2fv(this.addr,t),Te(e,t)}}function _g(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;n.uniform3fv(this.addr,t),Te(e,t)}}function vg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4fv(this.addr,t),Te(e,t)}}function xg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,i))return;Cl.set(i),n.uniformMatrix2fv(this.addr,!1,Cl),Te(e,i)}}function Mg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,i))return;Rl.set(i),n.uniformMatrix3fv(this.addr,!1,Rl),Te(e,i)}}function Sg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,i))return;Al.set(i),n.uniformMatrix4fv(this.addr,!1,Al),Te(e,i)}}function yg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Eg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2iv(this.addr,t),Te(e,t)}}function Tg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;n.uniform3iv(this.addr,t),Te(e,t)}}function bg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4iv(this.addr,t),Te(e,t)}}function wg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Ag(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2uiv(this.addr,t),Te(e,t)}}function Rg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;n.uniform3uiv(this.addr,t),Te(e,t)}}function Cg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4uiv(this.addr,t),Te(e,t)}}function Pg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);const r=this.type===n.SAMPLER_2D_SHADOW?Hh:Gh;e.setTexture2D(t||r,s)}function Lg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||kh,s)}function Dg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Wh,s)}function Ug(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Vh,s)}function Ig(n){switch(n){case 5126:return mg;case 35664:return gg;case 35665:return _g;case 35666:return vg;case 35674:return xg;case 35675:return Mg;case 35676:return Sg;case 5124:case 35670:return yg;case 35667:case 35671:return Eg;case 35668:case 35672:return Tg;case 35669:case 35673:return bg;case 5125:return wg;case 36294:return Ag;case 36295:return Rg;case 36296:return Cg;case 35678:case 36198:case 36298:case 36306:case 35682:return Pg;case 35679:case 36299:case 36307:return Lg;case 35680:case 36300:case 36308:case 36293:return Dg;case 36289:case 36303:case 36311:case 36292:return Ug}}function Ng(n,t){n.uniform1fv(this.addr,t)}function Fg(n,t){const e=Ts(t,this.size,2);n.uniform2fv(this.addr,e)}function Og(n,t){const e=Ts(t,this.size,3);n.uniform3fv(this.addr,e)}function Bg(n,t){const e=Ts(t,this.size,4);n.uniform4fv(this.addr,e)}function zg(n,t){const e=Ts(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Gg(n,t){const e=Ts(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Hg(n,t){const e=Ts(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Vg(n,t){n.uniform1iv(this.addr,t)}function kg(n,t){n.uniform2iv(this.addr,t)}function Wg(n,t){n.uniform3iv(this.addr,t)}function Xg(n,t){n.uniform4iv(this.addr,t)}function qg(n,t){n.uniform1uiv(this.addr,t)}function Yg(n,t){n.uniform2uiv(this.addr,t)}function Jg(n,t){n.uniform3uiv(this.addr,t)}function Kg(n,t){n.uniform4uiv(this.addr,t)}function Zg(n,t,e){const i=this.cache,s=t.length,r=ma(e,s);Ee(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Gh,r[a])}function jg(n,t,e){const i=this.cache,s=t.length,r=ma(e,s);Ee(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||kh,r[a])}function $g(n,t,e){const i=this.cache,s=t.length,r=ma(e,s);Ee(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Wh,r[a])}function Qg(n,t,e){const i=this.cache,s=t.length,r=ma(e,s);Ee(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Vh,r[a])}function t0(n){switch(n){case 5126:return Ng;case 35664:return Fg;case 35665:return Og;case 35666:return Bg;case 35674:return zg;case 35675:return Gg;case 35676:return Hg;case 5124:case 35670:return Vg;case 35667:case 35671:return kg;case 35668:case 35672:return Wg;case 35669:case 35673:return Xg;case 5125:return qg;case 36294:return Yg;case 36295:return Jg;case 36296:return Kg;case 35678:case 36198:case 36298:case 36306:case 35682:return Zg;case 35679:case 36299:case 36307:return jg;case 35680:case 36300:case 36308:case 36293:return $g;case 36289:case 36303:case 36311:case 36292:return Qg}}class e0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Ig(e.type)}}class n0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=t0(e.type)}}class i0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const to=/(\w+)(\])?(\[|\.)?/g;function Pl(n,t){n.seq.push(t),n.map[t.id]=t}function s0(n,t,e){const i=n.name,s=i.length;for(to.lastIndex=0;;){const r=to.exec(i),a=to.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Pl(e,l===void 0?new e0(o,n,t):new n0(o,n,t));break}else{let u=e.map[o];u===void 0&&(u=new i0(o),Pl(e,u)),e=u}}}class Gr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);s0(r,a,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function Ll(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const r0=37297;let a0=0;function o0(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function c0(n){const t=te.getPrimaries(te.workingColorSpace),e=te.getPrimaries(n);let i;switch(t===e?i="":t===$r&&e===jr?i="LinearDisplayP3ToLinearSRGB":t===jr&&e===$r&&(i="LinearSRGBToLinearDisplayP3"),n){case Vn:case da:return[i,"LinearTransferOETF"];case Se:case Do:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Dl(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+o0(n.getShaderSource(t),a)}else return s}function l0(n,t){const e=c0(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function h0(n,t){let e;switch(t){case lf:e="Linear";break;case hf:e="Reinhard";break;case uf:e="OptimizedCineon";break;case ph:e="ACESFilmic";break;case df:e="AgX";break;case ff:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function u0(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ns).join(`
`)}function f0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ns).join(`
`)}function d0(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function p0(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function ns(n){return n!==""}function Ul(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Il(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const m0=/^[ \t]*#include +<([\w\d./]+)>/gm;function xo(n){return n.replace(m0,_0)}const g0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function _0(n,t){let e=Wt[t];if(e===void 0){const i=g0.get(t);if(i!==void 0)e=Wt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return xo(e)}const v0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nl(n){return n.replace(v0,x0)}function x0(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fl(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function M0(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===uh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===fh?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Un&&(t="SHADOWMAP_TYPE_VSM"),t}function S0(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ls:case hs:t="ENVMAP_TYPE_CUBE";break;case fa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function y0(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case hs:t="ENVMAP_MODE_REFRACTION";break}return t}function E0(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case dh:t="ENVMAP_BLENDING_MULTIPLY";break;case of:t="ENVMAP_BLENDING_MIX";break;case cf:t="ENVMAP_BLENDING_ADD";break}return t}function T0(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function b0(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=M0(e),l=S0(e),h=y0(e),u=E0(e),d=T0(e),p=e.isWebGL2?"":u0(e),_=f0(e),v=d0(r),m=s.createProgram();let f,y,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(ns).join(`
`),f.length>0&&(f+=`
`),y=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(ns).join(`
`),y.length>0&&(y+=`
`)):(f=[Fl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ns).join(`
`),y=[p,Fl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qn?"#define TONE_MAPPING":"",e.toneMapping!==Qn?Wt.tonemapping_pars_fragment:"",e.toneMapping!==Qn?h0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,l0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ns).join(`
`)),a=xo(a),a=Ul(a,e),a=Il(a,e),o=xo(o),o=Ul(o,e),o=Il(o,e),a=Nl(a),o=Nl(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,f=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===tl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===tl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const T=S+f+a,C=S+y+o,A=Ll(s,s.VERTEX_SHADER,T),R=Ll(s,s.FRAGMENT_SHADER,C);s.attachShader(m,A),s.attachShader(m,R),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function I(W){if(n.debug.checkShaderErrors){const nt=s.getProgramInfoLog(m).trim(),D=s.getShaderInfoLog(A).trim(),O=s.getShaderInfoLog(R).trim();let q=!0,$=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,A,R);else{const K=Dl(s,A,"vertex"),Q=Dl(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+nt+`
`+K+`
`+Q)}else nt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",nt):(D===""||O==="")&&($=!1);$&&(W.diagnostics={runnable:q,programLog:nt,vertexShader:{log:D,prefix:f},fragmentShader:{log:O,prefix:y}})}s.deleteShader(A),s.deleteShader(R),x=new Gr(s,m),b=p0(s,m)}let x;this.getUniforms=function(){return x===void 0&&I(this),x};let b;this.getAttributes=function(){return b===void 0&&I(this),b};let H=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=s.getProgramParameter(m,r0)),H},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=a0++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=R,this}let w0=0;class A0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new R0(t),e.set(t,i)),i}}class R0{constructor(t){this.id=w0++,this.code=t,this.usedTimes=0}}function C0(n,t,e,i,s,r,a){const o=new Lh,c=new A0,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return x===0?"uv":`uv${x}`}function m(x,b,H,W,nt){const D=W.fog,O=nt.geometry,q=x.isMeshStandardMaterial?W.environment:null,$=(x.isMeshStandardMaterial?e:t).get(x.envMap||q),K=$&&$.mapping===fa?$.image.height:null,Q=_[x.type];x.precision!==null&&(p=s.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const tt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,at=tt!==void 0?tt.length:0;let it=0;O.morphAttributes.position!==void 0&&(it=1),O.morphAttributes.normal!==void 0&&(it=2),O.morphAttributes.color!==void 0&&(it=3);let X,j,mt,yt;if(Q){const Oe=Mn[Q];X=Oe.vertexShader,j=Oe.fragmentShader}else X=x.vertexShader,j=x.fragmentShader,c.update(x),mt=c.getVertexShaderID(x),yt=c.getFragmentShaderID(x);const Et=n.getRenderTarget(),Nt=nt.isInstancedMesh===!0,Ot=nt.isBatchedMesh===!0,Pt=!!x.map,kt=!!x.matcap,F=!!$,De=!!x.aoMap,wt=!!x.lightMap,Ft=!!x.bumpMap,Mt=!!x.normalMap,se=!!x.displacementMap,Bt=!!x.emissiveMap,w=!!x.metalnessMap,M=!!x.roughnessMap,B=x.anisotropy>0,N=x.clearcoat>0,G=x.iridescence>0,Y=x.sheen>0,ht=x.transmission>0,et=B&&!!x.anisotropyMap,st=N&&!!x.clearcoatMap,xt=N&&!!x.clearcoatNormalMap,Tt=N&&!!x.clearcoatRoughnessMap,Z=G&&!!x.iridescenceMap,Rt=G&&!!x.iridescenceThicknessMap,ft=Y&&!!x.sheenColorMap,gt=Y&&!!x.sheenRoughnessMap,rt=!!x.specularMap,ot=!!x.specularColorMap,St=!!x.specularIntensityMap,Zt=ht&&!!x.transmissionMap,ee=ht&&!!x.thicknessMap,Yt=!!x.gradientMap,ct=!!x.alphaMap,L=x.alphaTest>0,dt=!!x.alphaHash,pt=!!x.extensions,Dt=!!O.attributes.uv1,Ct=!!O.attributes.uv2,re=!!O.attributes.uv3;let ae=Qn;return x.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(ae=n.toneMapping),{isWebGL2:h,shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:X,fragmentShader:j,defines:x.defines,customVertexShaderID:mt,customFragmentShaderID:yt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:Ot,instancing:Nt,instancingColor:Nt&&nt.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Et===null?n.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:Vn,map:Pt,matcap:kt,envMap:F,envMapMode:F&&$.mapping,envMapCubeUVHeight:K,aoMap:De,lightMap:wt,bumpMap:Ft,normalMap:Mt,displacementMap:d&&se,emissiveMap:Bt,normalMapObjectSpace:Mt&&x.normalMapType===bf,normalMapTangentSpace:Mt&&x.normalMapType===Th,metalnessMap:w,roughnessMap:M,anisotropy:B,anisotropyMap:et,clearcoat:N,clearcoatMap:st,clearcoatNormalMap:xt,clearcoatRoughnessMap:Tt,iridescence:G,iridescenceMap:Z,iridescenceThicknessMap:Rt,sheen:Y,sheenColorMap:ft,sheenRoughnessMap:gt,specularMap:rt,specularColorMap:ot,specularIntensityMap:St,transmission:ht,transmissionMap:Zt,thicknessMap:ee,gradientMap:Yt,opaque:x.transparent===!1&&x.blending===rs,alphaMap:ct,alphaTest:L,alphaHash:dt,combine:x.combine,mapUv:Pt&&v(x.map.channel),aoMapUv:De&&v(x.aoMap.channel),lightMapUv:wt&&v(x.lightMap.channel),bumpMapUv:Ft&&v(x.bumpMap.channel),normalMapUv:Mt&&v(x.normalMap.channel),displacementMapUv:se&&v(x.displacementMap.channel),emissiveMapUv:Bt&&v(x.emissiveMap.channel),metalnessMapUv:w&&v(x.metalnessMap.channel),roughnessMapUv:M&&v(x.roughnessMap.channel),anisotropyMapUv:et&&v(x.anisotropyMap.channel),clearcoatMapUv:st&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:xt&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:gt&&v(x.sheenRoughnessMap.channel),specularMapUv:rt&&v(x.specularMap.channel),specularColorMapUv:ot&&v(x.specularColorMap.channel),specularIntensityMapUv:St&&v(x.specularIntensityMap.channel),transmissionMapUv:Zt&&v(x.transmissionMap.channel),thicknessMapUv:ee&&v(x.thicknessMap.channel),alphaMapUv:ct&&v(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Mt||B),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Dt,vertexUv2s:Ct,vertexUv3s:re,pointsUvs:nt.isPoints===!0&&!!O.attributes.uv&&(Pt||ct),fog:!!D,useFog:x.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:nt.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:it,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:ae,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Pt&&x.map.isVideoTexture===!0&&te.getTransfer(x.map.colorSpace)===ce,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ge,flipSided:x.side===We,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:pt&&x.extensions.derivatives===!0,extensionFragDepth:pt&&x.extensions.fragDepth===!0,extensionDrawBuffers:pt&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:pt&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pt&&x.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function f(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const H in x.defines)b.push(H),b.push(x.defines[H]);return x.isRawShaderMaterial===!1&&(y(b,x),S(b,x),b.push(n.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function y(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function S(x,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),x.push(o.mask)}function T(x){const b=_[x.type];let H;if(b){const W=Mn[b];H=na.clone(W.uniforms)}else H=x.uniforms;return H}function C(x,b){let H;for(let W=0,nt=l.length;W<nt;W++){const D=l[W];if(D.cacheKey===b){H=D,++H.usedTimes;break}}return H===void 0&&(H=new b0(n,b,x,r),l.push(H)),H}function A(x){if(--x.usedTimes===0){const b=l.indexOf(x);l[b]=l[l.length-1],l.pop(),x.destroy()}}function R(x){c.remove(x)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:T,acquireProgram:C,releaseProgram:A,releaseShaderCache:R,programs:l,dispose:I}}function P0(){let n=new WeakMap;function t(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function e(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function L0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Ol(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Bl(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u,d,p,_,v,m){let f=n[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:_,renderOrder:u.renderOrder,z:v,group:m},n[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=u.renderOrder,f.z=v,f.group=m),t++,f}function o(u,d,p,_,v,m){const f=a(u,d,p,_,v,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(u,d,p,_,v,m){const f=a(u,d,p,_,v,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function l(u,d){e.length>1&&e.sort(u||L0),i.length>1&&i.sort(d||Ol),s.length>1&&s.sort(d||Ol)}function h(){for(let u=t,d=n.length;u<d;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function D0(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new Bl,n.set(i,[a])):s>=r.length?(a=new Bl,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function U0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new At};break;case"SpotLight":e={position:new P,direction:new P,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new At,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new At,groundColor:new At};break;case"RectAreaLight":e={color:new At,position:new P,halfWidth:new P,halfHeight:new P};break}return n[t.id]=e,e}}}function I0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let N0=0;function F0(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function O0(n,t){const e=new U0,i=I0(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new P);const r=new P,a=new he,o=new he;function c(h,u){let d=0,p=0,_=0;for(let W=0;W<9;W++)s.probe[W].set(0,0,0);let v=0,m=0,f=0,y=0,S=0,T=0,C=0,A=0,R=0,I=0,x=0;h.sort(F0);const b=u===!0?Math.PI:1;for(let W=0,nt=h.length;W<nt;W++){const D=h[W],O=D.color,q=D.intensity,$=D.distance,K=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=O.r*q*b,p+=O.g*q*b,_+=O.b*q*b;else if(D.isLightProbe){for(let Q=0;Q<9;Q++)s.probe[Q].addScaledVector(D.sh.coefficients[Q],q);x++}else if(D.isDirectionalLight){const Q=e.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity*b),D.castShadow){const tt=D.shadow,at=i.get(D);at.shadowBias=tt.bias,at.shadowNormalBias=tt.normalBias,at.shadowRadius=tt.radius,at.shadowMapSize=tt.mapSize,s.directionalShadow[v]=at,s.directionalShadowMap[v]=K,s.directionalShadowMatrix[v]=D.shadow.matrix,T++}s.directional[v]=Q,v++}else if(D.isSpotLight){const Q=e.get(D);Q.position.setFromMatrixPosition(D.matrixWorld),Q.color.copy(O).multiplyScalar(q*b),Q.distance=$,Q.coneCos=Math.cos(D.angle),Q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Q.decay=D.decay,s.spot[f]=Q;const tt=D.shadow;if(D.map&&(s.spotLightMap[R]=D.map,R++,tt.updateMatrices(D),D.castShadow&&I++),s.spotLightMatrix[f]=tt.matrix,D.castShadow){const at=i.get(D);at.shadowBias=tt.bias,at.shadowNormalBias=tt.normalBias,at.shadowRadius=tt.radius,at.shadowMapSize=tt.mapSize,s.spotShadow[f]=at,s.spotShadowMap[f]=K,A++}f++}else if(D.isRectAreaLight){const Q=e.get(D);Q.color.copy(O).multiplyScalar(q),Q.halfWidth.set(D.width*.5,0,0),Q.halfHeight.set(0,D.height*.5,0),s.rectArea[y]=Q,y++}else if(D.isPointLight){const Q=e.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity*b),Q.distance=D.distance,Q.decay=D.decay,D.castShadow){const tt=D.shadow,at=i.get(D);at.shadowBias=tt.bias,at.shadowNormalBias=tt.normalBias,at.shadowRadius=tt.radius,at.shadowMapSize=tt.mapSize,at.shadowCameraNear=tt.camera.near,at.shadowCameraFar=tt.camera.far,s.pointShadow[m]=at,s.pointShadowMap[m]=K,s.pointShadowMatrix[m]=D.shadow.matrix,C++}s.point[m]=Q,m++}else if(D.isHemisphereLight){const Q=e.get(D);Q.skyColor.copy(D.color).multiplyScalar(q*b),Q.groundColor.copy(D.groundColor).multiplyScalar(q*b),s.hemi[S]=Q,S++}}y>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=lt.LTC_FLOAT_1,s.rectAreaLTC2=lt.LTC_FLOAT_2):(s.rectAreaLTC1=lt.LTC_HALF_1,s.rectAreaLTC2=lt.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=lt.LTC_FLOAT_1,s.rectAreaLTC2=lt.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=lt.LTC_HALF_1,s.rectAreaLTC2=lt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=_;const H=s.hash;(H.directionalLength!==v||H.pointLength!==m||H.spotLength!==f||H.rectAreaLength!==y||H.hemiLength!==S||H.numDirectionalShadows!==T||H.numPointShadows!==C||H.numSpotShadows!==A||H.numSpotMaps!==R||H.numLightProbes!==x)&&(s.directional.length=v,s.spot.length=f,s.rectArea.length=y,s.point.length=m,s.hemi.length=S,s.directionalShadow.length=T,s.directionalShadowMap.length=T,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=T,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=A+R-I,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=x,H.directionalLength=v,H.pointLength=m,H.spotLength=f,H.rectAreaLength=y,H.hemiLength=S,H.numDirectionalShadows=T,H.numPointShadows=C,H.numSpotShadows=A,H.numSpotMaps=R,H.numLightProbes=x,s.version=N0++)}function l(h,u){let d=0,p=0,_=0,v=0,m=0;const f=u.matrixWorldInverse;for(let y=0,S=h.length;y<S;y++){const T=h[y];if(T.isDirectionalLight){const C=s.directional[d];C.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(f),d++}else if(T.isSpotLight){const C=s.spot[_];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(f),C.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(f),_++}else if(T.isRectAreaLight){const C=s.rectArea[v];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(f),o.identity(),a.copy(T.matrixWorld),a.premultiply(f),o.extractRotation(a),C.halfWidth.set(T.width*.5,0,0),C.halfHeight.set(0,T.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),v++}else if(T.isPointLight){const C=s.point[p];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(f),p++}else if(T.isHemisphereLight){const C=s.hemi[m];C.direction.setFromMatrixPosition(T.matrixWorld),C.direction.transformDirection(f),m++}}}return{setup:c,setupView:l,state:s}}function zl(n,t){const e=new O0(n,t),i=[],s=[];function r(){i.length=0,s.length=0}function a(u){i.push(u)}function o(u){s.push(u)}function c(u){e.setup(i,u)}function l(u){e.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function B0(n,t){let e=new WeakMap;function i(r,a=0){const o=e.get(r);let c;return o===void 0?(c=new zl(n,t),e.set(r,[c])):a>=o.length?(c=new zl(n,t),o.push(c)):c=o[a],c}function s(){e=new WeakMap}return{get:i,dispose:s}}class z0 extends Es{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ef,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class G0 extends Es{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const H0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V0=`uniform sampler2D shadow_pass;
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
}`;function k0(n,t,e){let i=new Io;const s=new ut,r=new ut,a=new Le,o=new z0({depthPacking:Tf}),c=new G0,l={},h=e.maxTextureSize,u={[si]:We,[We]:si,[ge]:ge},d=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:H0,fragmentShader:V0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new pe;_.setAttribute("position",new _e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new vt(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uh;let f=this.type;this.render=function(A,R,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const x=n.getRenderTarget(),b=n.getActiveCubeFace(),H=n.getActiveMipmapLevel(),W=n.state;W.setBlending(zn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const nt=f!==Un&&this.type===Un,D=f===Un&&this.type!==Un;for(let O=0,q=A.length;O<q;O++){const $=A[O],K=$.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);const Q=K.getFrameExtents();if(s.multiply(Q),r.copy(K.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,K.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,K.mapSize.y=r.y)),K.map===null||nt===!0||D===!0){const at=this.type!==Un?{minFilter:Ve,magFilter:Ve}:{};K.map!==null&&K.map.dispose(),K.map=new _n(s.x,s.y,at),K.map.texture.name=$.name+".shadowMap",K.camera.updateProjectionMatrix()}n.setRenderTarget(K.map),n.clear();const tt=K.getViewportCount();for(let at=0;at<tt;at++){const it=K.getViewport(at);a.set(r.x*it.x,r.y*it.y,r.x*it.z,r.y*it.w),W.viewport(a),K.updateMatrices($,at),i=K.getFrustum(),T(R,I,K.camera,$,this.type)}K.isPointLightShadow!==!0&&this.type===Un&&y(K,I),K.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(x,b,H)};function y(A,R){const I=t.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new _n(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(R,null,I,d,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(R,null,I,p,v,null)}function S(A,R,I,x){let b=null;const H=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(H!==void 0)b=H;else if(b=I.isPointLight===!0?c:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const W=b.uuid,nt=R.uuid;let D=l[W];D===void 0&&(D={},l[W]=D);let O=D[nt];O===void 0&&(O=b.clone(),D[nt]=O,R.addEventListener("dispose",C)),b=O}if(b.visible=R.visible,b.wireframe=R.wireframe,x===Un?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:u[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const W=n.properties.get(b);W.light=I}return b}function T(A,R,I,x,b){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===Un)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const nt=t.update(A),D=A.material;if(Array.isArray(D)){const O=nt.groups;for(let q=0,$=O.length;q<$;q++){const K=O[q],Q=D[K.materialIndex];if(Q&&Q.visible){const tt=S(A,Q,x,b);A.onBeforeShadow(n,A,R,I,nt,tt,K),n.renderBufferDirect(I,null,nt,tt,A,K),A.onAfterShadow(n,A,R,I,nt,tt,K)}}}else if(D.visible){const O=S(A,D,x,b);A.onBeforeShadow(n,A,R,I,nt,O,null),n.renderBufferDirect(I,null,nt,O,A,null),A.onAfterShadow(n,A,R,I,nt,O,null)}}const W=A.children;for(let nt=0,D=W.length;nt<D;nt++)T(W[nt],R,I,x,b)}function C(A){A.target.removeEventListener("dispose",C);for(const I in l){const x=l[I],b=A.target.uuid;b in x&&(x[b].dispose(),delete x[b])}}}function W0(n,t,e){const i=e.isWebGL2;function s(){let L=!1;const dt=new Le;let pt=null;const Dt=new Le(0,0,0,0);return{setMask:function(Ct){pt!==Ct&&!L&&(n.colorMask(Ct,Ct,Ct,Ct),pt=Ct)},setLocked:function(Ct){L=Ct},setClear:function(Ct,re,ae,be,Oe){Oe===!0&&(Ct*=be,re*=be,ae*=be),dt.set(Ct,re,ae,be),Dt.equals(dt)===!1&&(n.clearColor(Ct,re,ae,be),Dt.copy(dt))},reset:function(){L=!1,pt=null,Dt.set(-1,0,0,0)}}}function r(){let L=!1,dt=null,pt=null,Dt=null;return{setTest:function(Ct){Ct?Ot(n.DEPTH_TEST):Pt(n.DEPTH_TEST)},setMask:function(Ct){dt!==Ct&&!L&&(n.depthMask(Ct),dt=Ct)},setFunc:function(Ct){if(pt!==Ct){switch(Ct){case Qu:n.depthFunc(n.NEVER);break;case tf:n.depthFunc(n.ALWAYS);break;case ef:n.depthFunc(n.LESS);break;case Kr:n.depthFunc(n.LEQUAL);break;case nf:n.depthFunc(n.EQUAL);break;case sf:n.depthFunc(n.GEQUAL);break;case rf:n.depthFunc(n.GREATER);break;case af:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pt=Ct}},setLocked:function(Ct){L=Ct},setClear:function(Ct){Dt!==Ct&&(n.clearDepth(Ct),Dt=Ct)},reset:function(){L=!1,dt=null,pt=null,Dt=null}}}function a(){let L=!1,dt=null,pt=null,Dt=null,Ct=null,re=null,ae=null,be=null,Oe=null;return{setTest:function(oe){L||(oe?Ot(n.STENCIL_TEST):Pt(n.STENCIL_TEST))},setMask:function(oe){dt!==oe&&!L&&(n.stencilMask(oe),dt=oe)},setFunc:function(oe,Be,xn){(pt!==oe||Dt!==Be||Ct!==xn)&&(n.stencilFunc(oe,Be,xn),pt=oe,Dt=Be,Ct=xn)},setOp:function(oe,Be,xn){(re!==oe||ae!==Be||be!==xn)&&(n.stencilOp(oe,Be,xn),re=oe,ae=Be,be=xn)},setLocked:function(oe){L=oe},setClear:function(oe){Oe!==oe&&(n.clearStencil(oe),Oe=oe)},reset:function(){L=!1,dt=null,pt=null,Dt=null,Ct=null,re=null,ae=null,be=null,Oe=null}}}const o=new s,c=new r,l=new a,h=new WeakMap,u=new WeakMap;let d={},p={},_=new WeakMap,v=[],m=null,f=!1,y=null,S=null,T=null,C=null,A=null,R=null,I=null,x=new At(0,0,0),b=0,H=!1,W=null,nt=null,D=null,O=null,q=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,Q=0;const tt=n.getParameter(n.VERSION);tt.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(tt)[1]),K=Q>=1):tt.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),K=Q>=2);let at=null,it={};const X=n.getParameter(n.SCISSOR_BOX),j=n.getParameter(n.VIEWPORT),mt=new Le().fromArray(X),yt=new Le().fromArray(j);function Et(L,dt,pt,Dt){const Ct=new Uint8Array(4),re=n.createTexture();n.bindTexture(L,re),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ae=0;ae<pt;ae++)i&&(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)?n.texImage3D(dt,0,n.RGBA,1,1,Dt,0,n.RGBA,n.UNSIGNED_BYTE,Ct):n.texImage2D(dt+ae,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ct);return re}const Nt={};Nt[n.TEXTURE_2D]=Et(n.TEXTURE_2D,n.TEXTURE_2D,1),Nt[n.TEXTURE_CUBE_MAP]=Et(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Nt[n.TEXTURE_2D_ARRAY]=Et(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Nt[n.TEXTURE_3D]=Et(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ot(n.DEPTH_TEST),c.setFunc(Kr),Bt(!1),w(Sc),Ot(n.CULL_FACE),Mt(zn);function Ot(L){d[L]!==!0&&(n.enable(L),d[L]=!0)}function Pt(L){d[L]!==!1&&(n.disable(L),d[L]=!1)}function kt(L,dt){return p[L]!==dt?(n.bindFramebuffer(L,dt),p[L]=dt,i&&(L===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=dt),L===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=dt)),!0):!1}function F(L,dt){let pt=v,Dt=!1;if(L)if(pt=_.get(dt),pt===void 0&&(pt=[],_.set(dt,pt)),L.isWebGLMultipleRenderTargets){const Ct=L.texture;if(pt.length!==Ct.length||pt[0]!==n.COLOR_ATTACHMENT0){for(let re=0,ae=Ct.length;re<ae;re++)pt[re]=n.COLOR_ATTACHMENT0+re;pt.length=Ct.length,Dt=!0}}else pt[0]!==n.COLOR_ATTACHMENT0&&(pt[0]=n.COLOR_ATTACHMENT0,Dt=!0);else pt[0]!==n.BACK&&(pt[0]=n.BACK,Dt=!0);Dt&&(e.isWebGL2?n.drawBuffers(pt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(pt))}function De(L){return m!==L?(n.useProgram(L),m=L,!0):!1}const wt={[Mi]:n.FUNC_ADD,[Bu]:n.FUNC_SUBTRACT,[zu]:n.FUNC_REVERSE_SUBTRACT};if(i)wt[Tc]=n.MIN,wt[bc]=n.MAX;else{const L=t.get("EXT_blend_minmax");L!==null&&(wt[Tc]=L.MIN_EXT,wt[bc]=L.MAX_EXT)}const Ft={[Gu]:n.ZERO,[Hu]:n.ONE,[Vu]:n.SRC_COLOR,[uo]:n.SRC_ALPHA,[Ju]:n.SRC_ALPHA_SATURATE,[qu]:n.DST_COLOR,[Wu]:n.DST_ALPHA,[ku]:n.ONE_MINUS_SRC_COLOR,[fo]:n.ONE_MINUS_SRC_ALPHA,[Yu]:n.ONE_MINUS_DST_COLOR,[Xu]:n.ONE_MINUS_DST_ALPHA,[Ku]:n.CONSTANT_COLOR,[Zu]:n.ONE_MINUS_CONSTANT_COLOR,[ju]:n.CONSTANT_ALPHA,[$u]:n.ONE_MINUS_CONSTANT_ALPHA};function Mt(L,dt,pt,Dt,Ct,re,ae,be,Oe,oe){if(L===zn){f===!0&&(Pt(n.BLEND),f=!1);return}if(f===!1&&(Ot(n.BLEND),f=!0),L!==Ou){if(L!==y||oe!==H){if((S!==Mi||A!==Mi)&&(n.blendEquation(n.FUNC_ADD),S=Mi,A=Mi),oe)switch(L){case rs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case pn:n.blendFunc(n.ONE,n.ONE);break;case yc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ec:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case rs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case pn:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case yc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ec:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}T=null,C=null,R=null,I=null,x.set(0,0,0),b=0,y=L,H=oe}return}Ct=Ct||dt,re=re||pt,ae=ae||Dt,(dt!==S||Ct!==A)&&(n.blendEquationSeparate(wt[dt],wt[Ct]),S=dt,A=Ct),(pt!==T||Dt!==C||re!==R||ae!==I)&&(n.blendFuncSeparate(Ft[pt],Ft[Dt],Ft[re],Ft[ae]),T=pt,C=Dt,R=re,I=ae),(be.equals(x)===!1||Oe!==b)&&(n.blendColor(be.r,be.g,be.b,Oe),x.copy(be),b=Oe),y=L,H=!1}function se(L,dt){L.side===ge?Pt(n.CULL_FACE):Ot(n.CULL_FACE);let pt=L.side===We;dt&&(pt=!pt),Bt(pt),L.blending===rs&&L.transparent===!1?Mt(zn):Mt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),o.setMask(L.colorWrite);const Dt=L.stencilWrite;l.setTest(Dt),Dt&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),B(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ot(n.SAMPLE_ALPHA_TO_COVERAGE):Pt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(L){W!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),W=L)}function w(L){L!==Nu?(Ot(n.CULL_FACE),L!==nt&&(L===Sc?n.cullFace(n.BACK):L===Fu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pt(n.CULL_FACE),nt=L}function M(L){L!==D&&(K&&n.lineWidth(L),D=L)}function B(L,dt,pt){L?(Ot(n.POLYGON_OFFSET_FILL),(O!==dt||q!==pt)&&(n.polygonOffset(dt,pt),O=dt,q=pt)):Pt(n.POLYGON_OFFSET_FILL)}function N(L){L?Ot(n.SCISSOR_TEST):Pt(n.SCISSOR_TEST)}function G(L){L===void 0&&(L=n.TEXTURE0+$-1),at!==L&&(n.activeTexture(L),at=L)}function Y(L,dt,pt){pt===void 0&&(at===null?pt=n.TEXTURE0+$-1:pt=at);let Dt=it[pt];Dt===void 0&&(Dt={type:void 0,texture:void 0},it[pt]=Dt),(Dt.type!==L||Dt.texture!==dt)&&(at!==pt&&(n.activeTexture(pt),at=pt),n.bindTexture(L,dt||Nt[L]),Dt.type=L,Dt.texture=dt)}function ht(){const L=it[at];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function et(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function st(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Tt(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Rt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function gt(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function rt(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function St(L){mt.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),mt.copy(L))}function Zt(L){yt.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),yt.copy(L))}function ee(L,dt){let pt=u.get(dt);pt===void 0&&(pt=new WeakMap,u.set(dt,pt));let Dt=pt.get(L);Dt===void 0&&(Dt=n.getUniformBlockIndex(dt,L.name),pt.set(L,Dt))}function Yt(L,dt){const Dt=u.get(dt).get(L);h.get(dt)!==Dt&&(n.uniformBlockBinding(dt,Dt,L.__bindingPointIndex),h.set(dt,Dt))}function ct(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},at=null,it={},p={},_=new WeakMap,v=[],m=null,f=!1,y=null,S=null,T=null,C=null,A=null,R=null,I=null,x=new At(0,0,0),b=0,H=!1,W=null,nt=null,D=null,O=null,q=null,mt.set(0,0,n.canvas.width,n.canvas.height),yt.set(0,0,n.canvas.width,n.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Ot,disable:Pt,bindFramebuffer:kt,drawBuffers:F,useProgram:De,setBlending:Mt,setMaterial:se,setFlipSided:Bt,setCullFace:w,setLineWidth:M,setPolygonOffset:B,setScissorTest:N,activeTexture:G,bindTexture:Y,unbindTexture:ht,compressedTexImage2D:et,compressedTexImage3D:st,texImage2D:rt,texImage3D:ot,updateUBOMapping:ee,uniformBlockBinding:Yt,texStorage2D:ft,texStorage3D:gt,texSubImage2D:xt,texSubImage3D:Tt,compressedTexSubImage2D:Z,compressedTexSubImage3D:Rt,scissor:St,viewport:Zt,reset:ct}}function X0(n,t,e,i,s,r,a){const o=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,M){return p?new OffscreenCanvas(w,M):ea("canvas")}function v(w,M,B,N){let G=1;if((w.width>N||w.height>N)&&(G=N/Math.max(w.width,w.height)),G<1||M===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const Y=M?ta:Math.floor,ht=Y(G*w.width),et=Y(G*w.height);u===void 0&&(u=_(ht,et));const st=B?_(ht,et):u;return st.width=ht,st.height=et,st.getContext("2d").drawImage(w,0,0,ht,et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+ht+"x"+et+")."),st}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function m(w){return vo(w.width)&&vo(w.height)}function f(w){return o?!1:w.wrapS!==mn||w.wrapT!==mn||w.minFilter!==Ve&&w.minFilter!==rn}function y(w,M){return w.generateMipmaps&&M&&w.minFilter!==Ve&&w.minFilter!==rn}function S(w){n.generateMipmap(w)}function T(w,M,B,N,G=!1){if(o===!1)return M;if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Y=M;if(M===n.RED&&(B===n.FLOAT&&(Y=n.R32F),B===n.HALF_FLOAT&&(Y=n.R16F),B===n.UNSIGNED_BYTE&&(Y=n.R8)),M===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(Y=n.R8UI),B===n.UNSIGNED_SHORT&&(Y=n.R16UI),B===n.UNSIGNED_INT&&(Y=n.R32UI),B===n.BYTE&&(Y=n.R8I),B===n.SHORT&&(Y=n.R16I),B===n.INT&&(Y=n.R32I)),M===n.RG&&(B===n.FLOAT&&(Y=n.RG32F),B===n.HALF_FLOAT&&(Y=n.RG16F),B===n.UNSIGNED_BYTE&&(Y=n.RG8)),M===n.RGBA){const ht=G?Zr:te.getTransfer(N);B===n.FLOAT&&(Y=n.RGBA32F),B===n.HALF_FLOAT&&(Y=n.RGBA16F),B===n.UNSIGNED_BYTE&&(Y=ht===ce?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function C(w,M,B){return y(w,B)===!0||w.isFramebufferTexture&&w.minFilter!==Ve&&w.minFilter!==rn?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function A(w){return w===Ve||w===wc||w===Aa?n.NEAREST:n.LINEAR}function R(w){const M=w.target;M.removeEventListener("dispose",R),x(M),M.isVideoTexture&&h.delete(M)}function I(w){const M=w.target;M.removeEventListener("dispose",I),H(M)}function x(w){const M=i.get(w);if(M.__webglInit===void 0)return;const B=w.source,N=d.get(B);if(N){const G=N[M.__cacheKey];G.usedTimes--,G.usedTimes===0&&b(w),Object.keys(N).length===0&&d.delete(B)}i.remove(w)}function b(w){const M=i.get(w);n.deleteTexture(M.__webglTexture);const B=w.source,N=d.get(B);delete N[M.__cacheKey],a.memory.textures--}function H(w){const M=w.texture,B=i.get(w),N=i.get(M);if(N.__webglTexture!==void 0&&(n.deleteTexture(N.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(B.__webglFramebuffer[G]))for(let Y=0;Y<B.__webglFramebuffer[G].length;Y++)n.deleteFramebuffer(B.__webglFramebuffer[G][Y]);else n.deleteFramebuffer(B.__webglFramebuffer[G]);B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer[G])}else{if(Array.isArray(B.__webglFramebuffer))for(let G=0;G<B.__webglFramebuffer.length;G++)n.deleteFramebuffer(B.__webglFramebuffer[G]);else n.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&n.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let G=0;G<B.__webglColorRenderbuffer.length;G++)B.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(B.__webglColorRenderbuffer[G]);B.__webglDepthRenderbuffer&&n.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let G=0,Y=M.length;G<Y;G++){const ht=i.get(M[G]);ht.__webglTexture&&(n.deleteTexture(ht.__webglTexture),a.memory.textures--),i.remove(M[G])}i.remove(M),i.remove(w)}let W=0;function nt(){W=0}function D(){const w=W;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),W+=1,w}function O(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function q(w,M){const B=i.get(w);if(w.isVideoTexture&&se(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){const N=w.image;if(N===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(N.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{mt(B,w,M);return}}e.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+M)}function $(w,M){const B=i.get(w);if(w.version>0&&B.__version!==w.version){mt(B,w,M);return}e.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+M)}function K(w,M){const B=i.get(w);if(w.version>0&&B.__version!==w.version){mt(B,w,M);return}e.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+M)}function Q(w,M){const B=i.get(w);if(w.version>0&&B.__version!==w.version){yt(B,w,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+M)}const tt={[Di]:n.REPEAT,[mn]:n.CLAMP_TO_EDGE,[go]:n.MIRRORED_REPEAT},at={[Ve]:n.NEAREST,[wc]:n.NEAREST_MIPMAP_NEAREST,[Aa]:n.NEAREST_MIPMAP_LINEAR,[rn]:n.LINEAR,[pf]:n.LINEAR_MIPMAP_NEAREST,[ks]:n.LINEAR_MIPMAP_LINEAR},it={[wf]:n.NEVER,[Df]:n.ALWAYS,[Af]:n.LESS,[bh]:n.LEQUAL,[Rf]:n.EQUAL,[Lf]:n.GEQUAL,[Cf]:n.GREATER,[Pf]:n.NOTEQUAL};function X(w,M,B){if(B?(n.texParameteri(w,n.TEXTURE_WRAP_S,tt[M.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,tt[M.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,tt[M.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,at[M.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,at[M.minFilter])):(n.texParameteri(w,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(w,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(M.wrapS!==mn||M.wrapT!==mn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(w,n.TEXTURE_MAG_FILTER,A(M.magFilter)),n.texParameteri(w,n.TEXTURE_MIN_FILTER,A(M.minFilter)),M.minFilter!==Ve&&M.minFilter!==rn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,it[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const N=t.get("EXT_texture_filter_anisotropic");if(M.magFilter===Ve||M.minFilter!==Aa&&M.minFilter!==ks||M.type===jn&&t.has("OES_texture_float_linear")===!1||o===!1&&M.type===Gn&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(n.texParameterf(w,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function j(w,M){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",R));const N=M.source;let G=d.get(N);G===void 0&&(G={},d.set(N,G));const Y=O(M);if(Y!==w.__cacheKey){G[Y]===void 0&&(G[Y]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),G[Y].usedTimes++;const ht=G[w.__cacheKey];ht!==void 0&&(G[w.__cacheKey].usedTimes--,ht.usedTimes===0&&b(M)),w.__cacheKey=Y,w.__webglTexture=G[Y].texture}return B}function mt(w,M,B){let N=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(N=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(N=n.TEXTURE_3D);const G=j(w,M),Y=M.source;e.bindTexture(N,w.__webglTexture,n.TEXTURE0+B);const ht=i.get(Y);if(Y.version!==ht.__version||G===!0){e.activeTexture(n.TEXTURE0+B);const et=te.getPrimaries(te.workingColorSpace),st=M.colorSpace===on?null:te.getPrimaries(M.colorSpace),xt=M.colorSpace===on||et===st?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const Tt=f(M)&&m(M.image)===!1;let Z=v(M.image,Tt,!1,s.maxTextureSize);Z=Bt(M,Z);const Rt=m(Z)||o,ft=r.convert(M.format,M.colorSpace);let gt=r.convert(M.type),rt=T(M.internalFormat,ft,gt,M.colorSpace,M.isVideoTexture);X(N,M,Rt);let ot;const St=M.mipmaps,Zt=o&&M.isVideoTexture!==!0&&rt!==yh,ee=ht.__version===void 0||G===!0,Yt=C(M,Z,Rt);if(M.isDepthTexture)rt=n.DEPTH_COMPONENT,o?M.type===jn?rt=n.DEPTH_COMPONENT32F:M.type===Zn?rt=n.DEPTH_COMPONENT24:M.type===Ai?rt=n.DEPTH24_STENCIL8:rt=n.DEPTH_COMPONENT16:M.type===jn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Ri&&rt===n.DEPTH_COMPONENT&&M.type!==Lo&&M.type!==Zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Zn,gt=r.convert(M.type)),M.format===us&&rt===n.DEPTH_COMPONENT&&(rt=n.DEPTH_STENCIL,M.type!==Ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Ai,gt=r.convert(M.type))),ee&&(Zt?e.texStorage2D(n.TEXTURE_2D,1,rt,Z.width,Z.height):e.texImage2D(n.TEXTURE_2D,0,rt,Z.width,Z.height,0,ft,gt,null));else if(M.isDataTexture)if(St.length>0&&Rt){Zt&&ee&&e.texStorage2D(n.TEXTURE_2D,Yt,rt,St[0].width,St[0].height);for(let ct=0,L=St.length;ct<L;ct++)ot=St[ct],Zt?e.texSubImage2D(n.TEXTURE_2D,ct,0,0,ot.width,ot.height,ft,gt,ot.data):e.texImage2D(n.TEXTURE_2D,ct,rt,ot.width,ot.height,0,ft,gt,ot.data);M.generateMipmaps=!1}else Zt?(ee&&e.texStorage2D(n.TEXTURE_2D,Yt,rt,Z.width,Z.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,Z.width,Z.height,ft,gt,Z.data)):e.texImage2D(n.TEXTURE_2D,0,rt,Z.width,Z.height,0,ft,gt,Z.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Zt&&ee&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Yt,rt,St[0].width,St[0].height,Z.depth);for(let ct=0,L=St.length;ct<L;ct++)ot=St[ct],M.format!==gn?ft!==null?Zt?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,0,ot.width,ot.height,Z.depth,ft,ot.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ct,rt,ot.width,ot.height,Z.depth,0,ot.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?e.texSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,0,ot.width,ot.height,Z.depth,ft,gt,ot.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ct,rt,ot.width,ot.height,Z.depth,0,ft,gt,ot.data)}else{Zt&&ee&&e.texStorage2D(n.TEXTURE_2D,Yt,rt,St[0].width,St[0].height);for(let ct=0,L=St.length;ct<L;ct++)ot=St[ct],M.format!==gn?ft!==null?Zt?e.compressedTexSubImage2D(n.TEXTURE_2D,ct,0,0,ot.width,ot.height,ft,ot.data):e.compressedTexImage2D(n.TEXTURE_2D,ct,rt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?e.texSubImage2D(n.TEXTURE_2D,ct,0,0,ot.width,ot.height,ft,gt,ot.data):e.texImage2D(n.TEXTURE_2D,ct,rt,ot.width,ot.height,0,ft,gt,ot.data)}else if(M.isDataArrayTexture)Zt?(ee&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Yt,rt,Z.width,Z.height,Z.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ft,gt,Z.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,rt,Z.width,Z.height,Z.depth,0,ft,gt,Z.data);else if(M.isData3DTexture)Zt?(ee&&e.texStorage3D(n.TEXTURE_3D,Yt,rt,Z.width,Z.height,Z.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ft,gt,Z.data)):e.texImage3D(n.TEXTURE_3D,0,rt,Z.width,Z.height,Z.depth,0,ft,gt,Z.data);else if(M.isFramebufferTexture){if(ee)if(Zt)e.texStorage2D(n.TEXTURE_2D,Yt,rt,Z.width,Z.height);else{let ct=Z.width,L=Z.height;for(let dt=0;dt<Yt;dt++)e.texImage2D(n.TEXTURE_2D,dt,rt,ct,L,0,ft,gt,null),ct>>=1,L>>=1}}else if(St.length>0&&Rt){Zt&&ee&&e.texStorage2D(n.TEXTURE_2D,Yt,rt,St[0].width,St[0].height);for(let ct=0,L=St.length;ct<L;ct++)ot=St[ct],Zt?e.texSubImage2D(n.TEXTURE_2D,ct,0,0,ft,gt,ot):e.texImage2D(n.TEXTURE_2D,ct,rt,ft,gt,ot);M.generateMipmaps=!1}else Zt?(ee&&e.texStorage2D(n.TEXTURE_2D,Yt,rt,Z.width,Z.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,ft,gt,Z)):e.texImage2D(n.TEXTURE_2D,0,rt,ft,gt,Z);y(M,Rt)&&S(N),ht.__version=Y.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function yt(w,M,B){if(M.image.length!==6)return;const N=j(w,M),G=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+B);const Y=i.get(G);if(G.version!==Y.__version||N===!0){e.activeTexture(n.TEXTURE0+B);const ht=te.getPrimaries(te.workingColorSpace),et=M.colorSpace===on?null:te.getPrimaries(M.colorSpace),st=M.colorSpace===on||ht===et?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);const xt=M.isCompressedTexture||M.image[0].isCompressedTexture,Tt=M.image[0]&&M.image[0].isDataTexture,Z=[];for(let ct=0;ct<6;ct++)!xt&&!Tt?Z[ct]=v(M.image[ct],!1,!0,s.maxCubemapSize):Z[ct]=Tt?M.image[ct].image:M.image[ct],Z[ct]=Bt(M,Z[ct]);const Rt=Z[0],ft=m(Rt)||o,gt=r.convert(M.format,M.colorSpace),rt=r.convert(M.type),ot=T(M.internalFormat,gt,rt,M.colorSpace),St=o&&M.isVideoTexture!==!0,Zt=Y.__version===void 0||N===!0;let ee=C(M,Rt,ft);X(n.TEXTURE_CUBE_MAP,M,ft);let Yt;if(xt){St&&Zt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ee,ot,Rt.width,Rt.height);for(let ct=0;ct<6;ct++){Yt=Z[ct].mipmaps;for(let L=0;L<Yt.length;L++){const dt=Yt[L];M.format!==gn?gt!==null?St?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L,0,0,dt.width,dt.height,gt,dt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L,ot,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):St?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L,0,0,dt.width,dt.height,gt,rt,dt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L,ot,dt.width,dt.height,0,gt,rt,dt.data)}}}else{Yt=M.mipmaps,St&&Zt&&(Yt.length>0&&ee++,e.texStorage2D(n.TEXTURE_CUBE_MAP,ee,ot,Z[0].width,Z[0].height));for(let ct=0;ct<6;ct++)if(Tt){St?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Z[ct].width,Z[ct].height,gt,rt,Z[ct].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ot,Z[ct].width,Z[ct].height,0,gt,rt,Z[ct].data);for(let L=0;L<Yt.length;L++){const pt=Yt[L].image[ct].image;St?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L+1,0,0,pt.width,pt.height,gt,rt,pt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L+1,ot,pt.width,pt.height,0,gt,rt,pt.data)}}else{St?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,gt,rt,Z[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ot,gt,rt,Z[ct]);for(let L=0;L<Yt.length;L++){const dt=Yt[L];St?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L+1,0,0,gt,rt,dt.image[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L+1,ot,gt,rt,dt.image[ct])}}}y(M,ft)&&S(n.TEXTURE_CUBE_MAP),Y.__version=G.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function Et(w,M,B,N,G,Y){const ht=r.convert(B.format,B.colorSpace),et=r.convert(B.type),st=T(B.internalFormat,ht,et,B.colorSpace);if(!i.get(M).__hasExternalTextures){const Tt=Math.max(1,M.width>>Y),Z=Math.max(1,M.height>>Y);G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?e.texImage3D(G,Y,st,Tt,Z,M.depth,0,ht,et,null):e.texImage2D(G,Y,st,Tt,Z,0,ht,et,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),Mt(M)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,N,G,i.get(B).__webglTexture,0,Ft(M)):(G===n.TEXTURE_2D||G>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,N,G,i.get(B).__webglTexture,Y),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Nt(w,M,B){if(n.bindRenderbuffer(n.RENDERBUFFER,w),M.depthBuffer&&!M.stencilBuffer){let N=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(B||Mt(M)){const G=M.depthTexture;G&&G.isDepthTexture&&(G.type===jn?N=n.DEPTH_COMPONENT32F:G.type===Zn&&(N=n.DEPTH_COMPONENT24));const Y=Ft(M);Mt(M)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Y,N,M.width,M.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,Y,N,M.width,M.height)}else n.renderbufferStorage(n.RENDERBUFFER,N,M.width,M.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,w)}else if(M.depthBuffer&&M.stencilBuffer){const N=Ft(M);B&&Mt(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,N,n.DEPTH24_STENCIL8,M.width,M.height):Mt(M)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,N,n.DEPTH24_STENCIL8,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,w)}else{const N=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let G=0;G<N.length;G++){const Y=N[G],ht=r.convert(Y.format,Y.colorSpace),et=r.convert(Y.type),st=T(Y.internalFormat,ht,et,Y.colorSpace),xt=Ft(M);B&&Mt(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,xt,st,M.width,M.height):Mt(M)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xt,st,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,st,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ot(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);const N=i.get(M.depthTexture).__webglTexture,G=Ft(M);if(M.depthTexture.format===Ri)Mt(M)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,N,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,N,0);else if(M.depthTexture.format===us)Mt(M)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,N,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,N,0);else throw new Error("Unknown depthTexture format")}function Pt(w){const M=i.get(w),B=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ot(M.__webglFramebuffer,w)}else if(B){M.__webglDepthbuffer=[];for(let N=0;N<6;N++)e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[N]),M.__webglDepthbuffer[N]=n.createRenderbuffer(),Nt(M.__webglDepthbuffer[N],w,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),Nt(M.__webglDepthbuffer,w,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function kt(w,M,B){const N=i.get(w);M!==void 0&&Et(N.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Pt(w)}function F(w){const M=w.texture,B=i.get(w),N=i.get(M);w.addEventListener("dispose",I),w.isWebGLMultipleRenderTargets!==!0&&(N.__webglTexture===void 0&&(N.__webglTexture=n.createTexture()),N.__version=M.version,a.memory.textures++);const G=w.isWebGLCubeRenderTarget===!0,Y=w.isWebGLMultipleRenderTargets===!0,ht=m(w)||o;if(G){B.__webglFramebuffer=[];for(let et=0;et<6;et++)if(o&&M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[et]=[];for(let st=0;st<M.mipmaps.length;st++)B.__webglFramebuffer[et][st]=n.createFramebuffer()}else B.__webglFramebuffer[et]=n.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let et=0;et<M.mipmaps.length;et++)B.__webglFramebuffer[et]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(Y)if(s.drawBuffers){const et=w.texture;for(let st=0,xt=et.length;st<xt;st++){const Tt=i.get(et[st]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&Mt(w)===!1){const et=Y?M:[M];B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let st=0;st<et.length;st++){const xt=et[st];B.__webglColorRenderbuffer[st]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[st]);const Tt=r.convert(xt.format,xt.colorSpace),Z=r.convert(xt.type),Rt=T(xt.internalFormat,Tt,Z,xt.colorSpace,w.isXRRenderTarget===!0),ft=Ft(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,ft,Rt,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+st,n.RENDERBUFFER,B.__webglColorRenderbuffer[st])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Nt(B.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(G){e.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture),X(n.TEXTURE_CUBE_MAP,M,ht);for(let et=0;et<6;et++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let st=0;st<M.mipmaps.length;st++)Et(B.__webglFramebuffer[et][st],w,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+et,st);else Et(B.__webglFramebuffer[et],w,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);y(M,ht)&&S(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Y){const et=w.texture;for(let st=0,xt=et.length;st<xt;st++){const Tt=et[st],Z=i.get(Tt);e.bindTexture(n.TEXTURE_2D,Z.__webglTexture),X(n.TEXTURE_2D,Tt,ht),Et(B.__webglFramebuffer,w,Tt,n.COLOR_ATTACHMENT0+st,n.TEXTURE_2D,0),y(Tt,ht)&&S(n.TEXTURE_2D)}e.unbindTexture()}else{let et=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?et=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(et,N.__webglTexture),X(et,M,ht),o&&M.mipmaps&&M.mipmaps.length>0)for(let st=0;st<M.mipmaps.length;st++)Et(B.__webglFramebuffer[st],w,M,n.COLOR_ATTACHMENT0,et,st);else Et(B.__webglFramebuffer,w,M,n.COLOR_ATTACHMENT0,et,0);y(M,ht)&&S(et),e.unbindTexture()}w.depthBuffer&&Pt(w)}function De(w){const M=m(w)||o,B=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let N=0,G=B.length;N<G;N++){const Y=B[N];if(y(Y,M)){const ht=w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,et=i.get(Y).__webglTexture;e.bindTexture(ht,et),S(ht),e.unbindTexture()}}}function wt(w){if(o&&w.samples>0&&Mt(w)===!1){const M=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],B=w.width,N=w.height;let G=n.COLOR_BUFFER_BIT;const Y=[],ht=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,et=i.get(w),st=w.isWebGLMultipleRenderTargets===!0;if(st)for(let xt=0;xt<M.length;xt++)e.bindFramebuffer(n.FRAMEBUFFER,et.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,et.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,et.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,et.__webglFramebuffer);for(let xt=0;xt<M.length;xt++){Y.push(n.COLOR_ATTACHMENT0+xt),w.depthBuffer&&Y.push(ht);const Tt=et.__ignoreDepthValues!==void 0?et.__ignoreDepthValues:!1;if(Tt===!1&&(w.depthBuffer&&(G|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&(G|=n.STENCIL_BUFFER_BIT)),st&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,et.__webglColorRenderbuffer[xt]),Tt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ht]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ht])),st){const Z=i.get(M[xt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Z,0)}n.blitFramebuffer(0,0,B,N,0,0,B,N,G,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Y)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),st)for(let xt=0;xt<M.length;xt++){e.bindFramebuffer(n.FRAMEBUFFER,et.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,et.__webglColorRenderbuffer[xt]);const Tt=i.get(M[xt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,et.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,Tt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,et.__webglMultisampledFramebuffer)}}function Ft(w){return Math.min(s.maxSamples,w.samples)}function Mt(w){const M=i.get(w);return o&&w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function se(w){const M=a.render.frame;h.get(w)!==M&&(h.set(w,M),w.update())}function Bt(w,M){const B=w.colorSpace,N=w.format,G=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===_o||B!==Vn&&B!==on&&(te.getTransfer(B)===ce?o===!1?t.has("EXT_sRGB")===!0&&N===gn?(w.format=_o,w.minFilter=rn,w.generateMipmaps=!1):M=Ah.sRGBToLinear(M):(N!==gn||G!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}this.allocateTextureUnit=D,this.resetTextureUnits=nt,this.setTexture2D=q,this.setTexture2DArray=$,this.setTexture3D=K,this.setTextureCube=Q,this.rebindTextures=kt,this.setupRenderTarget=F,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=Mt}function q0(n,t,e){const i=e.isWebGL2;function s(r,a=on){let o;const c=te.getTransfer(a);if(r===ti)return n.UNSIGNED_BYTE;if(r===_h)return n.UNSIGNED_SHORT_4_4_4_4;if(r===vh)return n.UNSIGNED_SHORT_5_5_5_1;if(r===mf)return n.BYTE;if(r===gf)return n.SHORT;if(r===Lo)return n.UNSIGNED_SHORT;if(r===gh)return n.INT;if(r===Zn)return n.UNSIGNED_INT;if(r===jn)return n.FLOAT;if(r===Gn)return i?n.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===_f)return n.ALPHA;if(r===gn)return n.RGBA;if(r===vf)return n.LUMINANCE;if(r===xf)return n.LUMINANCE_ALPHA;if(r===Ri)return n.DEPTH_COMPONENT;if(r===us)return n.DEPTH_STENCIL;if(r===_o)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Mf)return n.RED;if(r===xh)return n.RED_INTEGER;if(r===Sf)return n.RG;if(r===Mh)return n.RG_INTEGER;if(r===Sh)return n.RGBA_INTEGER;if(r===Ra||r===Ca||r===Pa||r===La)if(c===ce)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Ra)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ca)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Pa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===La)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Ra)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ca)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Pa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===La)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ac||r===Rc||r===Cc||r===Pc)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Ac)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Rc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Cc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Pc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===yh)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Lc||r===Dc)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Lc)return c===ce?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Dc)return c===ce?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Uc||r===Ic||r===Nc||r===Fc||r===Oc||r===Bc||r===zc||r===Gc||r===Hc||r===Vc||r===kc||r===Wc||r===Xc||r===qc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Uc)return c===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ic)return c===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Nc)return c===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Fc)return c===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Oc)return c===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Bc)return c===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===zc)return c===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Gc)return c===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Hc)return c===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Vc)return c===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===kc)return c===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Wc)return c===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Xc)return c===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===qc)return c===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Da||r===Yc||r===Jc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Da)return c===ce?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Yc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Jc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===yf||r===Kc||r===Zc||r===jc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Da)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Kc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Zc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===jc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ai?i?n.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class Y0 extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ce extends ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const J0={type:"move"};class eo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,i),f=this._getHandJoint(l,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,_=.005;l.inputState.pinching&&d>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(J0)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ce;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class K0 extends Ms{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,_=null;const v=e.getContextAttributes();let m=null,f=null;const y=[],S=[],T=new ut;let C=null;const A=new Qe;A.layers.enable(1),A.viewport=new Le;const R=new Qe;R.layers.enable(2),R.viewport=new Le;const I=[A,R],x=new Y0;x.layers.enable(1),x.layers.enable(2);let b=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let j=y[X];return j===void 0&&(j=new eo,y[X]=j),j.getTargetRaySpace()},this.getControllerGrip=function(X){let j=y[X];return j===void 0&&(j=new eo,y[X]=j),j.getGripSpace()},this.getHand=function(X){let j=y[X];return j===void 0&&(j=new eo,y[X]=j),j.getHandSpace()};function W(X){const j=S.indexOf(X.inputSource);if(j===-1)return;const mt=y[j];mt!==void 0&&(mt.update(X.inputSource,X.frame,l||a),mt.dispatchEvent({type:X.type,data:X.inputSource}))}function nt(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",nt),s.removeEventListener("inputsourceschange",D);for(let X=0;X<y.length;X++){const j=S[X];j!==null&&(S[X]=null,y[X].disconnect(j))}b=null,H=null,t.setRenderTarget(m),p=null,d=null,u=null,s=null,f=null,it.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",nt),s.addEventListener("inputsourceschange",D),v.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const j={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,j),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new _n(p.framebufferWidth,p.framebufferHeight,{format:gn,type:ti,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let j=null,mt=null,yt=null;v.depth&&(yt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=v.stencil?us:Ri,mt=v.stencil?Ai:Zn);const Et={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Et),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),f=new _n(d.textureWidth,d.textureHeight,{format:gn,type:ti,depthTexture:new zh(d.textureWidth,d.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});const Nt=t.properties.get(f);Nt.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),it.setContext(s),it.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function D(X){for(let j=0;j<X.removed.length;j++){const mt=X.removed[j],yt=S.indexOf(mt);yt>=0&&(S[yt]=null,y[yt].disconnect(mt))}for(let j=0;j<X.added.length;j++){const mt=X.added[j];let yt=S.indexOf(mt);if(yt===-1){for(let Nt=0;Nt<y.length;Nt++)if(Nt>=S.length){S.push(mt),yt=Nt;break}else if(S[Nt]===null){S[Nt]=mt,yt=Nt;break}if(yt===-1)break}const Et=y[yt];Et&&Et.connect(mt)}}const O=new P,q=new P;function $(X,j,mt){O.setFromMatrixPosition(j.matrixWorld),q.setFromMatrixPosition(mt.matrixWorld);const yt=O.distanceTo(q),Et=j.projectionMatrix.elements,Nt=mt.projectionMatrix.elements,Ot=Et[14]/(Et[10]-1),Pt=Et[14]/(Et[10]+1),kt=(Et[9]+1)/Et[5],F=(Et[9]-1)/Et[5],De=(Et[8]-1)/Et[0],wt=(Nt[8]+1)/Nt[0],Ft=Ot*De,Mt=Ot*wt,se=yt/(-De+wt),Bt=se*-De;j.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Bt),X.translateZ(se),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const w=Ot+se,M=Pt+se,B=Ft-Bt,N=Mt+(yt-Bt),G=kt*Pt/M*w,Y=F*Pt/M*w;X.projectionMatrix.makePerspective(B,N,G,Y,w,M),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function K(X,j){j===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(j.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;x.near=R.near=A.near=X.near,x.far=R.far=A.far=X.far,(b!==x.near||H!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),b=x.near,H=x.far);const j=X.parent,mt=x.cameras;K(x,j);for(let yt=0;yt<mt.length;yt++)K(mt[yt],j);mt.length===2?$(x,A,R):x.projectionMatrix.copy(A.projectionMatrix),Q(X,x,j)};function Q(X,j,mt){mt===null?X.matrix.copy(j.matrixWorld):(X.matrix.copy(mt.matrixWorld),X.matrix.invert(),X.matrix.multiply(j.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(j.projectionMatrix),X.projectionMatrixInverse.copy(j.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=fs*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)};let tt=null;function at(X,j){if(h=j.getViewerPose(l||a),_=j,h!==null){const mt=h.views;p!==null&&(t.setRenderTargetFramebuffer(f,p.framebuffer),t.setRenderTarget(f));let yt=!1;mt.length!==x.cameras.length&&(x.cameras.length=0,yt=!0);for(let Et=0;Et<mt.length;Et++){const Nt=mt[Et];let Ot=null;if(p!==null)Ot=p.getViewport(Nt);else{const kt=u.getViewSubImage(d,Nt);Ot=kt.viewport,Et===0&&(t.setRenderTargetTextures(f,kt.colorTexture,d.ignoreDepthValues?void 0:kt.depthStencilTexture),t.setRenderTarget(f))}let Pt=I[Et];Pt===void 0&&(Pt=new Qe,Pt.layers.enable(Et),Pt.viewport=new Le,I[Et]=Pt),Pt.matrix.fromArray(Nt.transform.matrix),Pt.matrix.decompose(Pt.position,Pt.quaternion,Pt.scale),Pt.projectionMatrix.fromArray(Nt.projectionMatrix),Pt.projectionMatrixInverse.copy(Pt.projectionMatrix).invert(),Pt.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),Et===0&&(x.matrix.copy(Pt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),yt===!0&&x.cameras.push(Pt)}}for(let mt=0;mt<y.length;mt++){const yt=S[mt],Et=y[mt];yt!==null&&Et!==void 0&&Et.update(yt,j,l||a)}tt&&tt(X,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),_=null}const it=new Bh;it.setAnimationLoop(at),this.setAnimationLoop=function(X){tt=X},this.dispose=function(){}}}function Z0(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Nh(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,y,S,T){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,T)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,y,S):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===We&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===We&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=t.get(f).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const S=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*S,e(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,y,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=S*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===We&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const y=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function j0(n,t,e,i){let s={},r={},a=[];const o=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,S){const T=S.program;i.uniformBlockBinding(y,T)}function l(y,S){let T=s[y.id];T===void 0&&(_(y),T=h(y),s[y.id]=T,y.addEventListener("dispose",m));const C=S.program;i.updateUBOMapping(y,C);const A=t.render.frame;r[y.id]!==A&&(d(y),r[y.id]=A)}function h(y){const S=u();y.__bindingPointIndex=S;const T=n.createBuffer(),C=y.__size,A=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,C,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,T),T}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const S=s[y.id],T=y.uniforms,C=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let A=0,R=T.length;A<R;A++){const I=Array.isArray(T[A])?T[A]:[T[A]];for(let x=0,b=I.length;x<b;x++){const H=I[x];if(p(H,A,x,C)===!0){const W=H.__offset,nt=Array.isArray(H.value)?H.value:[H.value];let D=0;for(let O=0;O<nt.length;O++){const q=nt[O],$=v(q);typeof q=="number"||typeof q=="boolean"?(H.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,W+D,H.__data)):q.isMatrix3?(H.__data[0]=q.elements[0],H.__data[1]=q.elements[1],H.__data[2]=q.elements[2],H.__data[3]=0,H.__data[4]=q.elements[3],H.__data[5]=q.elements[4],H.__data[6]=q.elements[5],H.__data[7]=0,H.__data[8]=q.elements[6],H.__data[9]=q.elements[7],H.__data[10]=q.elements[8],H.__data[11]=0):(q.toArray(H.__data,D),D+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,H.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,S,T,C){const A=y.value,R=S+"_"+T;if(C[R]===void 0)return typeof A=="number"||typeof A=="boolean"?C[R]=A:C[R]=A.clone(),!0;{const I=C[R];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return C[R]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function _(y){const S=y.uniforms;let T=0;const C=16;for(let R=0,I=S.length;R<I;R++){const x=Array.isArray(S[R])?S[R]:[S[R]];for(let b=0,H=x.length;b<H;b++){const W=x[b],nt=Array.isArray(W.value)?W.value:[W.value];for(let D=0,O=nt.length;D<O;D++){const q=nt[D],$=v(q),K=T%C;K!==0&&C-K<$.boundary&&(T+=C-K),W.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=T,T+=$.storage}}}const A=T%C;return A>0&&(T+=C-A),y.__size=T,y.__cache={},this}function v(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){const S=y.target;S.removeEventListener("dispose",m);const T=a.indexOf(S.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function f(){for(const y in s)n.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:f}}class Xh{constructor(t={}){const{canvas:e=Jf(),context:i=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;const p=new Uint32Array(4),_=new Int32Array(4);let v=null,m=null;const f=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Se,this._useLegacyLights=!1,this.toneMapping=Qn,this.toneMappingExposure=1;const S=this;let T=!1,C=0,A=0,R=null,I=-1,x=null;const b=new Le,H=new Le;let W=null;const nt=new At(0);let D=0,O=e.width,q=e.height,$=1,K=null,Q=null;const tt=new Le(0,0,O,q),at=new Le(0,0,O,q);let it=!1;const X=new Io;let j=!1,mt=!1,yt=null;const Et=new he,Nt=new ut,Ot=new P,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function kt(){return R===null?$:1}let F=i;function De(E,U){for(let V=0;V<E.length;V++){const k=E[V],z=e.getContext(k,U);if(z!==null)return z}return null}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Po}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",L,!1),e.addEventListener("webglcontextcreationerror",dt,!1),F===null){const U=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&U.shift(),F=De(U,E),F===null)throw De(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let wt,Ft,Mt,se,Bt,w,M,B,N,G,Y,ht,et,st,xt,Tt,Z,Rt,ft,gt,rt,ot,St,Zt;function ee(){wt=new og(F),Ft=new eg(F,wt,t),wt.init(Ft),ot=new q0(F,wt,Ft),Mt=new W0(F,wt,Ft),se=new hg(F),Bt=new P0,w=new X0(F,wt,Mt,Bt,Ft,ot,se),M=new ig(S),B=new ag(S),N=new vd(F,Ft),St=new Qm(F,wt,N,Ft),G=new cg(F,N,se,St),Y=new pg(F,G,N,se),ft=new dg(F,Ft,w),Tt=new ng(Bt),ht=new C0(S,M,B,wt,Ft,St,Tt),et=new Z0(S,Bt),st=new D0,xt=new B0(wt,Ft),Rt=new $m(S,M,B,Mt,Y,d,c),Z=new k0(S,Y,Ft),Zt=new j0(F,se,Ft,Mt),gt=new tg(F,wt,se,Ft),rt=new lg(F,wt,se,Ft),se.programs=ht.programs,S.capabilities=Ft,S.extensions=wt,S.properties=Bt,S.renderLists=st,S.shadowMap=Z,S.state=Mt,S.info=se}ee();const Yt=new K0(S,F);this.xr=Yt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=wt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=wt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(E){E!==void 0&&($=E,this.setSize(O,q,!1))},this.getSize=function(E){return E.set(O,q)},this.setSize=function(E,U,V=!0){if(Yt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=E,q=U,e.width=Math.floor(E*$),e.height=Math.floor(U*$),V===!0&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(O*$,q*$).floor()},this.setDrawingBufferSize=function(E,U,V){O=E,q=U,$=V,e.width=Math.floor(E*V),e.height=Math.floor(U*V),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(b)},this.getViewport=function(E){return E.copy(tt)},this.setViewport=function(E,U,V,k){E.isVector4?tt.set(E.x,E.y,E.z,E.w):tt.set(E,U,V,k),Mt.viewport(b.copy(tt).multiplyScalar($).floor())},this.getScissor=function(E){return E.copy(at)},this.setScissor=function(E,U,V,k){E.isVector4?at.set(E.x,E.y,E.z,E.w):at.set(E,U,V,k),Mt.scissor(H.copy(at).multiplyScalar($).floor())},this.getScissorTest=function(){return it},this.setScissorTest=function(E){Mt.setScissorTest(it=E)},this.setOpaqueSort=function(E){K=E},this.setTransparentSort=function(E){Q=E},this.getClearColor=function(E){return E.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor.apply(Rt,arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha.apply(Rt,arguments)},this.clear=function(E=!0,U=!0,V=!0){let k=0;if(E){let z=!1;if(R!==null){const _t=R.texture.format;z=_t===Sh||_t===Mh||_t===xh}if(z){const _t=R.texture.type,bt=_t===ti||_t===Zn||_t===Lo||_t===Ai||_t===_h||_t===vh,Lt=Rt.getClearColor(),Ut=Rt.getClearAlpha(),qt=Lt.r,zt=Lt.g,Vt=Lt.b;bt?(p[0]=qt,p[1]=zt,p[2]=Vt,p[3]=Ut,F.clearBufferuiv(F.COLOR,0,p)):(_[0]=qt,_[1]=zt,_[2]=Vt,_[3]=Ut,F.clearBufferiv(F.COLOR,0,_))}else k|=F.COLOR_BUFFER_BIT}U&&(k|=F.DEPTH_BUFFER_BIT),V&&(k|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",L,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),st.dispose(),xt.dispose(),Bt.dispose(),M.dispose(),B.dispose(),Y.dispose(),St.dispose(),Zt.dispose(),ht.dispose(),Yt.dispose(),Yt.removeEventListener("sessionstart",Oe),Yt.removeEventListener("sessionend",oe),yt&&(yt.dispose(),yt=null),Be.stop()};function ct(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const E=se.autoReset,U=Z.enabled,V=Z.autoUpdate,k=Z.needsUpdate,z=Z.type;ee(),se.autoReset=E,Z.enabled=U,Z.autoUpdate=V,Z.needsUpdate=k,Z.type=z}function dt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function pt(E){const U=E.target;U.removeEventListener("dispose",pt),Dt(U)}function Dt(E){Ct(E),Bt.remove(E)}function Ct(E){const U=Bt.get(E).programs;U!==void 0&&(U.forEach(function(V){ht.releaseProgram(V)}),E.isShaderMaterial&&ht.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,V,k,z,_t){U===null&&(U=Pt);const bt=z.isMesh&&z.matrixWorld.determinant()<0,Lt=Lu(E,U,V,k,z);Mt.setMaterial(k,bt);let Ut=V.index,qt=1;if(k.wireframe===!0){if(Ut=G.getWireframeAttribute(V),Ut===void 0)return;qt=2}const zt=V.drawRange,Vt=V.attributes.position;let me=zt.start*qt,Ke=(zt.start+zt.count)*qt;_t!==null&&(me=Math.max(me,_t.start*qt),Ke=Math.min(Ke,(_t.start+_t.count)*qt)),Ut!==null?(me=Math.max(me,0),Ke=Math.min(Ke,Ut.count)):Vt!=null&&(me=Math.max(me,0),Ke=Math.min(Ke,Vt.count));const we=Ke-me;if(we<0||we===1/0)return;St.setup(z,k,Lt,V,Ut);let An,fe=gt;if(Ut!==null&&(An=N.get(Ut),fe=rt,fe.setIndex(An)),z.isMesh)k.wireframe===!0?(Mt.setLineWidth(k.wireframeLinewidth*kt()),fe.setMode(F.LINES)):fe.setMode(F.TRIANGLES);else if(z.isLine){let Jt=k.linewidth;Jt===void 0&&(Jt=1),Mt.setLineWidth(Jt*kt()),z.isLineSegments?fe.setMode(F.LINES):z.isLineLoop?fe.setMode(F.LINE_LOOP):fe.setMode(F.LINE_STRIP)}else z.isPoints?fe.setMode(F.POINTS):z.isSprite&&fe.setMode(F.TRIANGLES);if(z.isBatchedMesh)fe.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)fe.renderInstances(me,we,z.count);else if(V.isInstancedBufferGeometry){const Jt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ea=Math.min(V.instanceCount,Jt);fe.renderInstances(me,we,Ea)}else fe.render(me,we)};function re(E,U,V){E.transparent===!0&&E.side===ge&&E.forceSinglePass===!1?(E.side=We,E.needsUpdate=!0,hr(E,U,V),E.side=si,E.needsUpdate=!0,hr(E,U,V),E.side=ge):hr(E,U,V)}this.compile=function(E,U,V=null){V===null&&(V=E),m=xt.get(V),m.init(),y.push(m),V.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),E!==V&&E.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights(S._useLegacyLights);const k=new Set;return E.traverse(function(z){const _t=z.material;if(_t)if(Array.isArray(_t))for(let bt=0;bt<_t.length;bt++){const Lt=_t[bt];re(Lt,V,z),k.add(Lt)}else re(_t,V,z),k.add(_t)}),y.pop(),m=null,k},this.compileAsync=function(E,U,V=null){const k=this.compile(E,U,V);return new Promise(z=>{function _t(){if(k.forEach(function(bt){Bt.get(bt).currentProgram.isReady()&&k.delete(bt)}),k.size===0){z(E);return}setTimeout(_t,10)}wt.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let ae=null;function be(E){ae&&ae(E)}function Oe(){Be.stop()}function oe(){Be.start()}const Be=new Bh;Be.setAnimationLoop(be),typeof self<"u"&&Be.setContext(self),this.setAnimationLoop=function(E){ae=E,Yt.setAnimationLoop(E),E===null?Be.stop():Be.start()},Yt.addEventListener("sessionstart",Oe),Yt.addEventListener("sessionend",oe),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Yt.enabled===!0&&Yt.isPresenting===!0&&(Yt.cameraAutoUpdate===!0&&Yt.updateCamera(U),U=Yt.getCamera()),E.isScene===!0&&E.onBeforeRender(S,E,U,R),m=xt.get(E,y.length),m.init(),y.push(m),Et.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),X.setFromProjectionMatrix(Et),mt=this.localClippingEnabled,j=Tt.init(this.clippingPlanes,mt),v=st.get(E,f.length),v.init(),f.push(v),xn(E,U,0,S.sortObjects),v.finish(),S.sortObjects===!0&&v.sort(K,Q),this.info.render.frame++,j===!0&&Tt.beginShadows();const V=m.state.shadowsArray;if(Z.render(V,E,U),j===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Rt.render(v,E),m.setupLights(S._useLegacyLights),U.isArrayCamera){const k=U.cameras;for(let z=0,_t=k.length;z<_t;z++){const bt=k[z];mc(v,E,bt,bt.viewport)}}else mc(v,E,U);R!==null&&(w.updateMultisampleRenderTarget(R),w.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(S,E,U),St.resetDefaultState(),I=-1,x=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function xn(E,U,V,k){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||X.intersectsSprite(E)){k&&Ot.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Et);const bt=Y.update(E),Lt=E.material;Lt.visible&&v.push(E,bt,Lt,V,Ot.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||X.intersectsObject(E))){const bt=Y.update(E),Lt=E.material;if(k&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ot.copy(E.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Ot.copy(bt.boundingSphere.center)),Ot.applyMatrix4(E.matrixWorld).applyMatrix4(Et)),Array.isArray(Lt)){const Ut=bt.groups;for(let qt=0,zt=Ut.length;qt<zt;qt++){const Vt=Ut[qt],me=Lt[Vt.materialIndex];me&&me.visible&&v.push(E,bt,me,V,Ot.z,Vt)}}else Lt.visible&&v.push(E,bt,Lt,V,Ot.z,null)}}const _t=E.children;for(let bt=0,Lt=_t.length;bt<Lt;bt++)xn(_t[bt],U,V,k)}function mc(E,U,V,k){const z=E.opaque,_t=E.transmissive,bt=E.transparent;m.setupLightsView(V),j===!0&&Tt.setGlobalState(S.clippingPlanes,V),_t.length>0&&Pu(z,_t,U,V),k&&Mt.viewport(b.copy(k)),z.length>0&&lr(z,U,V),_t.length>0&&lr(_t,U,V),bt.length>0&&lr(bt,U,V),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function Pu(E,U,V,k){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const _t=Ft.isWebGL2;yt===null&&(yt=new _n(1,1,{generateMipmaps:!0,type:wt.has("EXT_color_buffer_half_float")?Gn:ti,minFilter:ks,samples:_t?4:0})),S.getDrawingBufferSize(Nt),_t?yt.setSize(Nt.x,Nt.y):yt.setSize(ta(Nt.x),ta(Nt.y));const bt=S.getRenderTarget();S.setRenderTarget(yt),S.getClearColor(nt),D=S.getClearAlpha(),D<1&&S.setClearColor(16777215,.5),S.clear();const Lt=S.toneMapping;S.toneMapping=Qn,lr(E,V,k),w.updateMultisampleRenderTarget(yt),w.updateRenderTargetMipmap(yt);let Ut=!1;for(let qt=0,zt=U.length;qt<zt;qt++){const Vt=U[qt],me=Vt.object,Ke=Vt.geometry,we=Vt.material,An=Vt.group;if(we.side===ge&&me.layers.test(k.layers)){const fe=we.side;we.side=We,we.needsUpdate=!0,gc(me,V,k,Ke,we,An),we.side=fe,we.needsUpdate=!0,Ut=!0}}Ut===!0&&(w.updateMultisampleRenderTarget(yt),w.updateRenderTargetMipmap(yt)),S.setRenderTarget(bt),S.setClearColor(nt,D),S.toneMapping=Lt}function lr(E,U,V){const k=U.isScene===!0?U.overrideMaterial:null;for(let z=0,_t=E.length;z<_t;z++){const bt=E[z],Lt=bt.object,Ut=bt.geometry,qt=k===null?bt.material:k,zt=bt.group;Lt.layers.test(V.layers)&&gc(Lt,U,V,Ut,qt,zt)}}function gc(E,U,V,k,z,_t){E.onBeforeRender(S,U,V,k,z,_t),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(S,U,V,k,E,_t),z.transparent===!0&&z.side===ge&&z.forceSinglePass===!1?(z.side=We,z.needsUpdate=!0,S.renderBufferDirect(V,U,k,z,E,_t),z.side=si,z.needsUpdate=!0,S.renderBufferDirect(V,U,k,z,E,_t),z.side=ge):S.renderBufferDirect(V,U,k,z,E,_t),E.onAfterRender(S,U,V,k,z,_t)}function hr(E,U,V){U.isScene!==!0&&(U=Pt);const k=Bt.get(E),z=m.state.lights,_t=m.state.shadowsArray,bt=z.state.version,Lt=ht.getParameters(E,z.state,_t,U,V),Ut=ht.getProgramCacheKey(Lt);let qt=k.programs;k.environment=E.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(E.isMeshStandardMaterial?B:M).get(E.envMap||k.environment),qt===void 0&&(E.addEventListener("dispose",pt),qt=new Map,k.programs=qt);let zt=qt.get(Ut);if(zt!==void 0){if(k.currentProgram===zt&&k.lightsStateVersion===bt)return vc(E,Lt),zt}else Lt.uniforms=ht.getUniforms(E),E.onBuild(V,Lt,S),E.onBeforeCompile(Lt,S),zt=ht.acquireProgram(Lt,Ut),qt.set(Ut,zt),k.uniforms=Lt.uniforms;const Vt=k.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Vt.clippingPlanes=Tt.uniform),vc(E,Lt),k.needsLights=Uu(E),k.lightsStateVersion=bt,k.needsLights&&(Vt.ambientLightColor.value=z.state.ambient,Vt.lightProbe.value=z.state.probe,Vt.directionalLights.value=z.state.directional,Vt.directionalLightShadows.value=z.state.directionalShadow,Vt.spotLights.value=z.state.spot,Vt.spotLightShadows.value=z.state.spotShadow,Vt.rectAreaLights.value=z.state.rectArea,Vt.ltc_1.value=z.state.rectAreaLTC1,Vt.ltc_2.value=z.state.rectAreaLTC2,Vt.pointLights.value=z.state.point,Vt.pointLightShadows.value=z.state.pointShadow,Vt.hemisphereLights.value=z.state.hemi,Vt.directionalShadowMap.value=z.state.directionalShadowMap,Vt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Vt.spotShadowMap.value=z.state.spotShadowMap,Vt.spotLightMatrix.value=z.state.spotLightMatrix,Vt.spotLightMap.value=z.state.spotLightMap,Vt.pointShadowMap.value=z.state.pointShadowMap,Vt.pointShadowMatrix.value=z.state.pointShadowMatrix),k.currentProgram=zt,k.uniformsList=null,zt}function _c(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=Gr.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function vc(E,U){const V=Bt.get(E);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function Lu(E,U,V,k,z){U.isScene!==!0&&(U=Pt),w.resetTextureUnits();const _t=U.fog,bt=k.isMeshStandardMaterial?U.environment:null,Lt=R===null?S.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Vn,Ut=(k.isMeshStandardMaterial?B:M).get(k.envMap||bt),qt=k.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,zt=!!V.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Vt=!!V.morphAttributes.position,me=!!V.morphAttributes.normal,Ke=!!V.morphAttributes.color;let we=Qn;k.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(we=S.toneMapping);const An=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,fe=An!==void 0?An.length:0,Jt=Bt.get(k),Ea=m.state.lights;if(j===!0&&(mt===!0||E!==x)){const nn=E===x&&k.id===I;Tt.setState(k,E,nn)}let de=!1;k.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Ea.state.version||Jt.outputColorSpace!==Lt||z.isBatchedMesh&&Jt.batching===!1||!z.isBatchedMesh&&Jt.batching===!0||z.isInstancedMesh&&Jt.instancing===!1||!z.isInstancedMesh&&Jt.instancing===!0||z.isSkinnedMesh&&Jt.skinning===!1||!z.isSkinnedMesh&&Jt.skinning===!0||z.isInstancedMesh&&Jt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Jt.instancingColor===!1&&z.instanceColor!==null||Jt.envMap!==Ut||k.fog===!0&&Jt.fog!==_t||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==Tt.numPlanes||Jt.numIntersection!==Tt.numIntersection)||Jt.vertexAlphas!==qt||Jt.vertexTangents!==zt||Jt.morphTargets!==Vt||Jt.morphNormals!==me||Jt.morphColors!==Ke||Jt.toneMapping!==we||Ft.isWebGL2===!0&&Jt.morphTargetsCount!==fe)&&(de=!0):(de=!0,Jt.__version=k.version);let li=Jt.currentProgram;de===!0&&(li=hr(k,U,z));let xc=!1,As=!1,Ta=!1;const Ue=li.getUniforms(),hi=Jt.uniforms;if(Mt.useProgram(li.program)&&(xc=!0,As=!0,Ta=!0),k.id!==I&&(I=k.id,As=!0),xc||x!==E){Ue.setValue(F,"projectionMatrix",E.projectionMatrix),Ue.setValue(F,"viewMatrix",E.matrixWorldInverse);const nn=Ue.map.cameraPosition;nn!==void 0&&nn.setValue(F,Ot.setFromMatrixPosition(E.matrixWorld)),Ft.logarithmicDepthBuffer&&Ue.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Ue.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),x!==E&&(x=E,As=!0,Ta=!0)}if(z.isSkinnedMesh){Ue.setOptional(F,z,"bindMatrix"),Ue.setOptional(F,z,"bindMatrixInverse");const nn=z.skeleton;nn&&(Ft.floatVertexTextures?(nn.boneTexture===null&&nn.computeBoneTexture(),Ue.setValue(F,"boneTexture",nn.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(Ue.setOptional(F,z,"batchingTexture"),Ue.setValue(F,"batchingTexture",z._matricesTexture,w));const ba=V.morphAttributes;if((ba.position!==void 0||ba.normal!==void 0||ba.color!==void 0&&Ft.isWebGL2===!0)&&ft.update(z,V,li),(As||Jt.receiveShadow!==z.receiveShadow)&&(Jt.receiveShadow=z.receiveShadow,Ue.setValue(F,"receiveShadow",z.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(hi.envMap.value=Ut,hi.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),As&&(Ue.setValue(F,"toneMappingExposure",S.toneMappingExposure),Jt.needsLights&&Du(hi,Ta),_t&&k.fog===!0&&et.refreshFogUniforms(hi,_t),et.refreshMaterialUniforms(hi,k,$,q,yt),Gr.upload(F,_c(Jt),hi,w)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Gr.upload(F,_c(Jt),hi,w),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Ue.setValue(F,"center",z.center),Ue.setValue(F,"modelViewMatrix",z.modelViewMatrix),Ue.setValue(F,"normalMatrix",z.normalMatrix),Ue.setValue(F,"modelMatrix",z.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const nn=k.uniformsGroups;for(let wa=0,Iu=nn.length;wa<Iu;wa++)if(Ft.isWebGL2){const Mc=nn[wa];Zt.update(Mc,li),Zt.bind(Mc,li)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return li}function Du(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Uu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,U,V){Bt.get(E.texture).__webglTexture=U,Bt.get(E.depthTexture).__webglTexture=V;const k=Bt.get(E);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=V===void 0,k.__autoAllocateDepthBuffer||wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,U){const V=Bt.get(E);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,V=0){R=E,C=U,A=V;let k=!0,z=null,_t=!1,bt=!1;if(E){const Ut=Bt.get(E);Ut.__useDefaultFramebuffer!==void 0?(Mt.bindFramebuffer(F.FRAMEBUFFER,null),k=!1):Ut.__webglFramebuffer===void 0?w.setupRenderTarget(E):Ut.__hasExternalTextures&&w.rebindTextures(E,Bt.get(E.texture).__webglTexture,Bt.get(E.depthTexture).__webglTexture);const qt=E.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(bt=!0);const zt=Bt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(zt[U])?z=zt[U][V]:z=zt[U],_t=!0):Ft.isWebGL2&&E.samples>0&&w.useMultisampledRTT(E)===!1?z=Bt.get(E).__webglMultisampledFramebuffer:Array.isArray(zt)?z=zt[V]:z=zt,b.copy(E.viewport),H.copy(E.scissor),W=E.scissorTest}else b.copy(tt).multiplyScalar($).floor(),H.copy(at).multiplyScalar($).floor(),W=it;if(Mt.bindFramebuffer(F.FRAMEBUFFER,z)&&Ft.drawBuffers&&k&&Mt.drawBuffers(E,z),Mt.viewport(b),Mt.scissor(H),Mt.setScissorTest(W),_t){const Ut=Bt.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ut.__webglTexture,V)}else if(bt){const Ut=Bt.get(E.texture),qt=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ut.__webglTexture,V||0,qt)}I=-1},this.readRenderTargetPixels=function(E,U,V,k,z,_t,bt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Bt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&bt!==void 0&&(Lt=Lt[bt]),Lt){Mt.bindFramebuffer(F.FRAMEBUFFER,Lt);try{const Ut=E.texture,qt=Ut.format,zt=Ut.type;if(qt!==gn&&ot.convert(qt)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Vt=zt===Gn&&(wt.has("EXT_color_buffer_half_float")||Ft.isWebGL2&&wt.has("EXT_color_buffer_float"));if(zt!==ti&&ot.convert(zt)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(zt===jn&&(Ft.isWebGL2||wt.has("OES_texture_float")||wt.has("WEBGL_color_buffer_float")))&&!Vt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-k&&V>=0&&V<=E.height-z&&F.readPixels(U,V,k,z,ot.convert(qt),ot.convert(zt),_t)}finally{const Ut=R!==null?Bt.get(R).__webglFramebuffer:null;Mt.bindFramebuffer(F.FRAMEBUFFER,Ut)}}},this.copyFramebufferToTexture=function(E,U,V=0){const k=Math.pow(2,-V),z=Math.floor(U.image.width*k),_t=Math.floor(U.image.height*k);w.setTexture2D(U,0),F.copyTexSubImage2D(F.TEXTURE_2D,V,0,0,E.x,E.y,z,_t),Mt.unbindTexture()},this.copyTextureToTexture=function(E,U,V,k=0){const z=U.image.width,_t=U.image.height,bt=ot.convert(V.format),Lt=ot.convert(V.type);w.setTexture2D(V,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,V.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,V.unpackAlignment),U.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,k,E.x,E.y,z,_t,bt,Lt,U.image.data):U.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,k,E.x,E.y,U.mipmaps[0].width,U.mipmaps[0].height,bt,U.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,k,E.x,E.y,bt,Lt,U.image),k===0&&V.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Mt.unbindTexture()},this.copyTextureToTexture3D=function(E,U,V,k,z=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _t=E.max.x-E.min.x+1,bt=E.max.y-E.min.y+1,Lt=E.max.z-E.min.z+1,Ut=ot.convert(k.format),qt=ot.convert(k.type);let zt;if(k.isData3DTexture)w.setTexture3D(k,0),zt=F.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)w.setTexture2DArray(k,0),zt=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment);const Vt=F.getParameter(F.UNPACK_ROW_LENGTH),me=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ke=F.getParameter(F.UNPACK_SKIP_PIXELS),we=F.getParameter(F.UNPACK_SKIP_ROWS),An=F.getParameter(F.UNPACK_SKIP_IMAGES),fe=V.isCompressedTexture?V.mipmaps[z]:V.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,fe.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,fe.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,E.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,E.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,E.min.z),V.isDataTexture||V.isData3DTexture?F.texSubImage3D(zt,z,U.x,U.y,U.z,_t,bt,Lt,Ut,qt,fe.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(zt,z,U.x,U.y,U.z,_t,bt,Lt,Ut,fe.data)):F.texSubImage3D(zt,z,U.x,U.y,U.z,_t,bt,Lt,Ut,qt,fe),F.pixelStorei(F.UNPACK_ROW_LENGTH,Vt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,me),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ke),F.pixelStorei(F.UNPACK_SKIP_ROWS,we),F.pixelStorei(F.UNPACK_SKIP_IMAGES,An),z===0&&k.generateMipmaps&&F.generateMipmap(zt),Mt.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?w.setTextureCube(E,0):E.isData3DTexture?w.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?w.setTexture2DArray(E,0):w.setTexture2D(E,0),Mt.unbindTexture()},this.resetState=function(){C=0,A=0,R=null,Mt.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Do?"display-p3":"srgb",e.unpackColorSpace=te.workingColorSpace===da?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Se?Ci:Eh}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ci?Se:Vn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class $0 extends Xh{}$0.prototype.isWebGL1Renderer=!0;class Oo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new At(t),this.density=e}clone(){return new Oo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Q0 extends ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Gl extends _e{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const $i=new he,Hl=new he,Ur=[],Vl=new Ii,t_=new he,Ds=new vt,Us=new ys;class kl extends vt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Gl(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,t_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ii),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,$i),Vl.copy(t.boundingBox).applyMatrix4($i),this.boundingBox.union(Vl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ys),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,$i),Us.copy(t.boundingSphere).applyMatrix4($i),this.boundingSphere.union(Us)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Ds.geometry=this.geometry,Ds.material=this.material,Ds.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Us.copy(this.boundingSphere),Us.applyMatrix4(i),t.ray.intersectsSphere(Us)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,$i),Hl.multiplyMatrices(i,$i),Ds.matrixWorld=Hl,Ds.raycast(t,Ur);for(let a=0,o=Ur.length;a<o;a++){const c=Ur[a];c.instanceId=r,c.object=this,e.push(c)}Ur.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Gl(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class ei extends Es{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Wl=new he,Mo=new Ph,Ir=new ys,Nr=new P;class Li extends ue{constructor(t=new pe,e=new ei){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ir.copy(i.boundingSphere),Ir.applyMatrix4(s),Ir.radius+=r,t.ray.intersectsSphere(Ir)===!1)return;Wl.copy(s).invert(),Mo.copy(t.ray).applyMatrix4(Wl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,u=i.attributes.position;if(l!==null){const d=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let _=d,v=p;_<v;_++){const m=l.getX(_);Nr.fromBufferAttribute(u,m),Xl(Nr,m,c,s,t,e,this)}}else{const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let _=d,v=p;_<v;_++)Nr.fromBufferAttribute(u,_),Xl(Nr,_,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Xl(n,t,e,i,s,r,a){const o=Mo.distanceSqToPoint(n);if(o<e){const c=new P;Mo.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,object:a})}}class Bo extends Ye{constructor(t,e,i,s,r,a,o,c,l){super(t,e,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let a;e?a=e:a=t*i[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=i[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);const h=i[s],d=i[s+1]-h,p=(a-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new ut:new P);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new P,s=[],r=[],a=[],o=new P,c=new he;for(let p=0;p<=t;p++){const _=p/t;s[p]=this.getTangentAt(_,new P)}r[0]=new P,a[0]=new P;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Re(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(o,_))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Re(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let _=1;_<=t;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],p*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class zo extends wn{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e){const i=e||new ut,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class e_ extends zo{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Go(){let n=0,t=0,e=0,i=0;function s(r,a,o,c){n=r,t=o,e=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,p*=h,s(a,o,d,p)},calc:function(r){const a=r*r,o=a*r;return n+t*r+e*a+i*o}}}const Fr=new P,no=new Go,io=new Go,so=new Go;class n_ extends wn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new P){const i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Fr.subVectors(s[0],s[1]).add(s[0]),l=Fr);const u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Fr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Fr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);v<1e-4&&(v=1),_<1e-4&&(_=v),m<1e-4&&(m=v),no.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,_,v,m),io.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,_,v,m),so.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,_,v,m)}else this.curveType==="catmullrom"&&(no.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),io.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),so.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return i.set(no.calc(c),io.calc(c),so.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ql(n,t,e,i,s){const r=(i-t)*.5,a=(s-e)*.5,o=n*n,c=n*o;return(2*e-2*i+r+a)*c+(-3*e+3*i-2*r-a)*o+r*n+e}function i_(n,t){const e=1-n;return e*e*t}function s_(n,t){return 2*(1-n)*n*t}function r_(n,t){return n*n*t}function Gs(n,t,e,i){return i_(n,t)+s_(n,e)+r_(n,i)}function a_(n,t){const e=1-n;return e*e*e*t}function o_(n,t){const e=1-n;return 3*e*e*n*t}function c_(n,t){return 3*(1-n)*n*n*t}function l_(n,t){return n*n*n*t}function Hs(n,t,e,i,s){return a_(n,t)+o_(n,e)+c_(n,i)+l_(n,s)}class qh extends wn{constructor(t=new ut,e=new ut,i=new ut,s=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ut){const i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Hs(t,s.x,r.x,a.x,o.x),Hs(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class h_ extends wn{constructor(t=new P,e=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new P){const i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Hs(t,s.x,r.x,a.x,o.x),Hs(t,s.y,r.y,a.y,o.y),Hs(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Yh extends wn{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class u_ extends wn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Jh extends wn{constructor(t=new ut,e=new ut,i=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ut){const i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Gs(t,s.x,r.x,a.x),Gs(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class f_ extends wn{constructor(t=new P,e=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new P){const i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Gs(t,s.x,r.x,a.x),Gs(t,s.y,r.y,a.y),Gs(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Kh extends wn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){const i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(ql(o,c.x,l.x,h.x,u.x),ql(o,c.y,l.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new ut().fromArray(s))}return this}}var Yl=Object.freeze({__proto__:null,ArcCurve:e_,CatmullRomCurve3:n_,CubicBezierCurve:qh,CubicBezierCurve3:h_,EllipseCurve:zo,LineCurve:Yh,LineCurve3:u_,QuadraticBezierCurve:Jh,QuadraticBezierCurve3:f_,SplineCurve:Kh});class d_ extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Yl[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const a=s[r]-i,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Yl[s.type]().fromJSON(s))}return this}}class p_ extends d_{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Yh(this.currentPoint.clone(),new ut(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new Jh(this.currentPoint.clone(),new ut(t,e),new ut(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){const o=new qh(this.currentPoint.clone(),new ut(t,e),new ut(i,s),new ut(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Kh(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,i,s,r,a,o,c),this}absellipse(t,e,i,s,r,a,o,c){const l=new zo(t,e,i,s,r,a,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ho extends pe{constructor(t=[new ut(0,-.5),new ut(.5,0),new ut(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=Re(s,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],h=1/e,u=new P,d=new ut,p=new P,_=new P,v=new P;let m=0,f=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,f=t[y+1].y-t[y].y,p.x=f*1,p.y=-m,p.z=f*0,v.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:m=t[y+1].x-t[y].x,f=t[y+1].y-t[y].y,p.x=f*1,p.y=-m,p.z=f*0,_.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),c.push(p.x,p.y,p.z),v.copy(_)}for(let y=0;y<=e;y++){const S=i+y*h*s,T=Math.sin(S),C=Math.cos(S);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*T,u.y=t[A].y,u.z=t[A].x*C,a.push(u.x,u.y,u.z),d.x=y/e,d.y=A/(t.length-1),o.push(d.x,d.y);const R=c[3*A+0]*T,I=c[3*A+1],x=c[3*A+0]*C;l.push(R,I,x)}}for(let y=0;y<e;y++)for(let S=0;S<t.length-1;S++){const T=S+y*t.length,C=T,A=T+t.length,R=T+t.length+1,I=T+1;r.push(C,A,I),r.push(R,I,A)}this.setIndex(r),this.setAttribute("position",new ie(a,3)),this.setAttribute("uv",new ie(o,2)),this.setAttribute("normal",new ie(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ho(t.points,t.segments,t.phiStart,t.phiLength)}}class Kn extends Ho{constructor(t=1,e=1,i=4,s=8){const r=new p_;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new Kn(t.radius,t.length,t.capSegments,t.radialSegments)}}class ni extends pe{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new P,h=new ut;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=i+u/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(o,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ni(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class an extends pe{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],p=[];let _=0;const v=[],m=i/2;let f=0;y(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new ie(u,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(p,2));function y(){const T=new P,C=new P;let A=0;const R=(e-t)/i;for(let I=0;I<=r;I++){const x=[],b=I/r,H=b*(e-t)+t;for(let W=0;W<=s;W++){const nt=W/s,D=nt*c+o,O=Math.sin(D),q=Math.cos(D);C.x=H*O,C.y=-b*i+m,C.z=H*q,u.push(C.x,C.y,C.z),T.set(O,R,q).normalize(),d.push(T.x,T.y,T.z),p.push(nt,1-b),x.push(_++)}v.push(x)}for(let I=0;I<s;I++)for(let x=0;x<r;x++){const b=v[x][I],H=v[x+1][I],W=v[x+1][I+1],nt=v[x][I+1];h.push(b,H,nt),h.push(H,W,nt),A+=6}l.addGroup(f,A,0),f+=A}function S(T){const C=_,A=new ut,R=new P;let I=0;const x=T===!0?t:e,b=T===!0?1:-1;for(let W=1;W<=s;W++)u.push(0,m*b,0),d.push(0,b,0),p.push(.5,.5),_++;const H=_;for(let W=0;W<=s;W++){const D=W/s*c+o,O=Math.cos(D),q=Math.sin(D);R.x=x*q,R.y=m*b,R.z=x*O,u.push(R.x,R.y,R.z),d.push(0,b,0),A.x=O*.5+.5,A.y=q*.5*b+.5,p.push(A.x,A.y),_++}for(let W=0;W<s;W++){const nt=C+W,D=H+W;T===!0?h.push(D,D+1,nt):h.push(D+1,D,nt),I+=3}l.addGroup(f,I,T===!0?1:2),f+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new an(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class $n extends an{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new $n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Vo extends pe{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],a=[];o(s),l(i),h(),this.setAttribute("position",new ie(r,3)),this.setAttribute("normal",new ie(r.slice(),3)),this.setAttribute("uv",new ie(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const S=new P,T=new P,C=new P;for(let A=0;A<e.length;A+=3)p(e[A+0],S),p(e[A+1],T),p(e[A+2],C),c(S,T,C,y)}function c(y,S,T,C){const A=C+1,R=[];for(let I=0;I<=A;I++){R[I]=[];const x=y.clone().lerp(T,I/A),b=S.clone().lerp(T,I/A),H=A-I;for(let W=0;W<=H;W++)W===0&&I===A?R[I][W]=x:R[I][W]=x.clone().lerp(b,W/H)}for(let I=0;I<A;I++)for(let x=0;x<2*(A-I)-1;x++){const b=Math.floor(x/2);x%2===0?(d(R[I][b+1]),d(R[I+1][b]),d(R[I][b])):(d(R[I][b+1]),d(R[I+1][b+1]),d(R[I+1][b]))}}function l(y){const S=new P;for(let T=0;T<r.length;T+=3)S.x=r[T+0],S.y=r[T+1],S.z=r[T+2],S.normalize().multiplyScalar(y),r[T+0]=S.x,r[T+1]=S.y,r[T+2]=S.z}function h(){const y=new P;for(let S=0;S<r.length;S+=3){y.x=r[S+0],y.y=r[S+1],y.z=r[S+2];const T=m(y)/2/Math.PI+.5,C=f(y)/Math.PI+.5;a.push(T,1-C)}_(),u()}function u(){for(let y=0;y<a.length;y+=6){const S=a[y+0],T=a[y+2],C=a[y+4],A=Math.max(S,T,C),R=Math.min(S,T,C);A>.9&&R<.1&&(S<.2&&(a[y+0]+=1),T<.2&&(a[y+2]+=1),C<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function p(y,S){const T=y*3;S.x=t[T+0],S.y=t[T+1],S.z=t[T+2]}function _(){const y=new P,S=new P,T=new P,C=new P,A=new ut,R=new ut,I=new ut;for(let x=0,b=0;x<r.length;x+=9,b+=6){y.set(r[x+0],r[x+1],r[x+2]),S.set(r[x+3],r[x+4],r[x+5]),T.set(r[x+6],r[x+7],r[x+8]),A.set(a[b+0],a[b+1]),R.set(a[b+2],a[b+3]),I.set(a[b+4],a[b+5]),C.copy(y).add(S).add(T).divideScalar(3);const H=m(C);v(A,b+0,y,H),v(R,b+2,S,H),v(I,b+4,T,H)}}function v(y,S,T,C){C<0&&y.x===1&&(a[S]=y.x-1),T.x===0&&T.z===0&&(a[S]=C/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vo(t.vertices,t.indices,t.radius,t.details)}}class ko extends Vo{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ko(t.radius,t.detail)}}class qe extends pe{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new P,d=new P,p=[],_=[],v=[],m=[];for(let f=0;f<=i;f++){const y=[],S=f/i;let T=0;f===0&&a===0?T=.5/e:f===i&&c===Math.PI&&(T=-.5/e);for(let C=0;C<=e;C++){const A=C/e;u.x=-t*Math.cos(s+A*r)*Math.sin(a+S*o),u.y=t*Math.cos(a+S*o),u.z=t*Math.sin(s+A*r)*Math.sin(a+S*o),_.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(A+T,1-S),y.push(l++)}h.push(y)}for(let f=0;f<i;f++)for(let y=0;y<e;y++){const S=h[f][y+1],T=h[f][y],C=h[f+1][y],A=h[f+1][y+1];(f!==0||a>0)&&p.push(S,T,A),(f!==i-1||c<Math.PI)&&p.push(T,C,A)}this.setIndex(p),this.setAttribute("position",new ie(_,3)),this.setAttribute("normal",new ie(v,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class cn extends pe{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const a=[],o=[],c=[],l=[],h=new P,u=new P,d=new P;for(let p=0;p<=i;p++)for(let _=0;_<=s;_++){const v=_/s*r,m=p/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(_/s),l.push(p/i)}for(let p=1;p<=i;p++)for(let _=1;_<=s;_++){const v=(s+1)*p+_-1,m=(s+1)*(p-1)+_-1,f=(s+1)*(p-1)+_,y=(s+1)*p+_;a.push(v,m,y),a.push(m,f,y)}this.setIndex(a),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(c,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class It extends Es{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Th,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Wo extends ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new At(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class m_ extends Wo{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new At(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ro=new he,Jl=new P,Kl=new P;class Zh{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Io,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Jl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Jl),Kl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Kl),e.updateMatrixWorld(),ro.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ro),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ro)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class g_ extends Zh{constructor(){super(new Qe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,i=fs*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(i!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class jh extends Wo{constructor(t,e,i=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.target=new ue,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new g_}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class __ extends Zh{constructor(){super(new No(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ao extends Wo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.target=new ue,this.shadow=new __}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class v_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Zl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Zl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Zl(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Po}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Po);const $h={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class js{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const x_=new No(-1,1,1,-1,0,1);class M_ extends pe{constructor(){super(),this.setAttribute("position",new ie([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ie([0,2,0,0,2,0],2))}}const S_=new M_;class Qh{constructor(t){this._mesh=new vt(S_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,x_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class y_ extends js{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof tn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=na.clone(t.uniforms),this.material=new tn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Qh(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class jl extends js{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class E_ extends js{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class T_{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new ut);this._width=i.width,this._height=i.height,e=new _n(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Gn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new y_($h),this.copyPass.material.blending=zn,this.clock=new v_}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}jl!==void 0&&(a instanceof jl?i=!0:a instanceof E_&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new ut);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class b_ extends js{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new At}render(t,e,i){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const w_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new At(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ps extends js{constructor(t,e,i,s){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new ut(t.x,t.y):new ut(256,256),this.clearColor=new At(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new _n(r,a,{type:Gn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new _n(r,a,{type:Gn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new _n(r,a,{type:Gn});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),a=Math.round(a/2)}const o=w_;this.highPassUniforms=na.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new tn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ut(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=$h;this.copyUniforms=na.clone(h.uniforms),this.blendMaterial=new tn({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:pn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new At,this.oldClearAlpha=1,this.basic=new In,this.fsQuad=new Qh(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ut(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=ps.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=ps.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new tn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ut(.5,.5)},direction:{value:new ut(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}}ps.BlurDirectionX=new ut(1,0);ps.BlurDirectionY=new ut(0,1);function A_(n){const t=new Xh({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0});t.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),t.setSize(window.innerWidth,window.innerHeight),t.outputColorSpace=Se,t.toneMapping=ph,t.toneMappingExposure=1.15,t.shadowMap.enabled=!0,t.shadowMap.type=fh,n.appendChild(t.domElement);const e=new Q0;e.background=new At(393487),e.fog=new Oo(393487,.018);const i=new Qe(58,window.innerWidth/window.innerHeight,.1,400);i.position.set(-8,6,12);const s=new m_(10123007,1444398,.55);e.add(s);const r=new ao(16773328,.7);r.position.set(-12,26,10),r.castShadow=!0,r.shadow.mapSize.set(1024,1024),r.shadow.camera.near=1,r.shadow.camera.far=90,r.shadow.camera.left=-40,r.shadow.camera.right=40,r.shadow.camera.top=40,r.shadow.camera.bottom=-40,r.shadow.bias=-8e-4,e.add(r),e.add(r.target);const a=new ao(8376575,.5);a.position.set(16,12,-16),e.add(a);const o=new ao(16756832,.25);o.position.set(6,-4,14),e.add(o);const c=new T_(t);c.addPass(new b_(e,i));const l=new ps(new ut(window.innerWidth,window.innerHeight),.7,.85,.82);c.addPass(l);function h(){const p=window.innerWidth,_=window.innerHeight;i.aspect=p/_,i.updateProjectionMatrix(),t.setSize(p,_),c.setSize(p,_)}window.addEventListener("resize",h);const d=new URLSearchParams(location.search).has("lowfx")?()=>t.render(e,i):()=>c.render();return{renderer:t,scene:e,camera:i,composer:c,key:r,ambient:s,rim:a,fill:o,render:d}}function $l(n="#d4293a",t="#f6e9cf",e=2){const i=document.createElement("canvas");i.width=128,i.height=8;const s=i.getContext("2d");for(let a=0;a<e*2;a++)s.fillStyle=a%2?t:n,s.fillRect(a/(e*2)*i.width,0,i.width/(e*2),i.height);const r=new Bo(i);return r.wrapS=Di,r.wrapT=Di,r.colorSpace=Se,r}function R_(n="#20e0ff"){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d");e.strokeStyle=n,e.lineWidth=2,e.strokeRect(1,1,62,62);const i=new Bo(t);return i.wrapS=i.wrapT=Di,i}const Ql=[{bg:393487,fd:.018,hs:10123007,hg:1444398,key:16773328,ki:.7},{bg:267014,fd:.024,hs:9437087,hg:467723,key:15269840,ki:.75},{bg:3805222,fd:.012,hs:16756848,hg:3481642,key:16763024,ki:.85},{bg:66056,fd:.008,hs:7307263,hg:263180,key:12571903,ki:.55}].map(n=>({bg:new At(n.bg),fd:n.fd,hs:new At(n.hs),hg:new At(n.hg),key:new At(n.key),ki:n.ki}));function C_(n,t){const e=new Ce;n.add(e);const i=[],s=[],[r,a,o,c]=t,l=r.x0,u=c.x1-l,d=[{c:1837612,rough:.42,metal:.45},{c:795664,rough:.85,metal:.05},{c:14728308,rough:.95,metal:0},{c:592148,rough:.5,metal:.6}];t.forEach((N,G)=>{const Y=G===0?20:0,ht=G===3?20:0,et=N.x1-N.x0+Y+ht,st=new vt(new kn(et,1,40),new It({color:d[G].c,roughness:d[G].rough,metalness:d[G].metal}));st.position.set(N.x0-Y+et/2,-8.5,0),st.receiveShadow=!0,e.add(st)});const p=(r.x0+r.x1)/2,_=r.x1-r.x0,v=new vt(new ni(13,48),new It({color:9048880,roughness:.3,metalness:.55,emissive:2753552,emissiveIntensity:.5}));v.rotation.x=-Math.PI/2,v.position.set(p,-7.97,0),v.receiveShadow=!0,e.add(v);const m=new vt(new cn(13,.28,8,64),new It({color:16764735,emissive:16747008,emissiveIntensity:1.1,roughness:.4}));m.rotation.x=-Math.PI/2,m.position.set(p,-7.9,0),e.add(m);const f=new It({color:16764735,emissive:16747008,emissiveIntensity:1.2,roughness:.5});for(const N of[-9,9]){const G=new vt(new kn(_+16,.25,.5),f);G.position.set(p,-7.9,N),e.add(G)}const y=_/2+18,S=13,T=33,C=$l("#5a1420","#3a2a1e",26);C.repeat.set(26,1);const A=new vt(new an(y,y,S+8.5,48,1,!0),new It({map:C,side:We,roughness:.95,emissive:1182228,emissiveIntensity:.35}));A.position.set(p,(S-8.5)/2,0),e.add(A);const R=$l("#d4293a","#f6e9cf",1);R.repeat.set(24,1);const I=new vt(new an(6,y,T-S,48,1,!0),new It({map:R,side:ge,roughness:.8,emissive:2755856,emissiveIntensity:.5}));I.position.set(p,(S+T)/2,0),e.add(I);const x=new vt(new cn(6,.4,8,40),new It({color:16764735,emissive:16755456,emissiveIntensity:1.3,roughness:.4}));x.rotation.x=Math.PI/2,x.position.set(p,T,0),e.add(x);const b=new vt(new an(.3,.36,T+12,10),new It({color:15260088,roughness:.7,metalness:.2}));b.position.set(p,(T+12)/2-8.5,0),e.add(b);const H=new vt(new $n(.5,1.6,3),new It({color:16735354,emissive:16723285,emissiveIntensity:.7,side:ge}));H.position.set(p+.8,T+3.2,0),H.rotation.z=-Math.PI/2,e.add(H);const W=new vt(new cn(3.4,.45,10,32,Math.PI),new It({color:16769162,emissive:16755504,emissiveIntensity:1.4,roughness:.4}));W.position.set(r.x1,-4.6,0),e.add(W);const nt=new pe,D=700,O=new Float32Array(D*3);for(let N=0;N<D;N++)O[N*3]=l-30+Math.random()*(u+90),O[N*3+1]=24+Math.random()*46,O[N*3+2]=(Math.random()-.5)*50;nt.setAttribute("position",new _e(O,3));const q=new Li(nt,new ei({color:16773824,size:.5,sizeAttenuation:!0,transparent:!0,opacity:.9}));e.add(q);const $=3,K=Math.ceil(_/2.2)+6,Q=$*K*2,tt=new qe(.5,10,10),at=new It({roughness:.7,vertexColors:!1}),it=new kl(tt,at,Q),X=[5556479,16739760,16764735,9109441,12160255,16747100],j=new ue,mt=[];let yt=0;for(const N of[-1,1])for(let G=0;G<$;G++)for(let Y=0;Y<K;Y++){const ht=r.x0+4+Y*2.2+G%2*1.1,et=N*(12+G*2.2),st=-6.5+G*1.4;j.position.set(ht,st,et),j.scale.setScalar(.8+Math.random()*.5),j.updateMatrix(),it.setMatrixAt(yt,j.matrix),it.setColorAt(yt,new At(X[Math.random()*X.length|0]).multiplyScalar(.6)),mt.push({x:ht,y:st,z:et}),yt++}it.instanceMatrix.needsUpdate=!0,it.instanceColor&&(it.instanceColor.needsUpdate=!0),e.add(it),s.push(N=>{for(let G=0;G<mt.length;G++){const Y=mt[G];j.position.set(Y.x,Y.y+Math.sin(N*2+G*.7)*.12,Y.z),j.updateMatrix(),it.setMatrixAt(G,j.matrix)}it.instanceMatrix.needsUpdate=!0});const Et=[16735354,16764735,5556479,9109441,12160255],Nt=Math.floor(_/3),Ot=new $n(.5,1.1,4),Pt=new It({emissive:0,roughness:.6,side:ge,vertexColors:!1}),kt=new kl(Ot,Pt,Nt),F=new ue;for(let N=0;N<Nt;N++){const G=new At(Et[N%Et.length]);F.position.set(r.x0+4+N*3,13+Math.sin(N*.6)*.4,-6),F.rotation.set(Math.PI,Math.PI/4,0),F.scale.setScalar(1),F.updateMatrix(),kt.setMatrixAt(N,F.matrix),kt.setColorAt(N,G)}kt.instanceMatrix.needsUpdate=!0,kt.instanceColor&&(kt.instanceColor.needsUpdate=!0),e.add(kt);const De=[{x:r.x0+12,col:16739760},{x:p,col:5556479},{x:r.x1-6,col:16764735}];for(const N of De){const G=new jh(N.col,120,60,Math.PI/9,.5,1.4);G.position.set(N.x,20,6);const Y=new ue;Y.position.set(N.x,0,0),e.add(Y),G.target=Y,e.add(G);const ht=new vt(new $n(2.5,26,24,1,!0),new In({color:N.col,transparent:!0,opacity:.03,side:ge,depthWrite:!1,blending:pn}));ht.position.copy(G.position),e.add(ht),i.push({sp:G,beam:ht,tgt:Y,x:N.x,phase:Math.random()*6})}s.push(N=>{for(const G of i){const Y=Math.sin(N*.7+G.phase)*7;G.tgt.position.x=G.x+Y,G.beam.rotation.z=-Math.atan2(Y,26)}H.rotation.z=-Math.PI/2+Math.sin(N*3)*.2});{const N=a.x1-a.x0,G=new It({color:2062892,roughness:.85}),Y=new It({color:3120184,roughness:.85}),ht=new It({color:4861976,roughness:.9});for(let ft=0;ft<8;ft++){const gt=a.x0+2+Math.random()*(N-4),rt=(ft%2?1:-1)*(9+Math.random()*5),ot=4+Math.random()*3,St=new vt(new an(.35,.5,ot,7),ht);St.position.set(gt,-8+ot/2,rt),e.add(St);const Zt=new vt(new qe(1.6+Math.random(),9,9),ft%2?G:Y);Zt.position.set(gt,-8+ot+.8,rt),Zt.scale.y=.8,e.add(Zt)}const et=new It({color:4033075,roughness:.9});for(let ft=0;ft<7;ft++){const gt=4+Math.random()*4,rt=new vt(new an(.05,.08,gt,5),et);rt.position.set(a.x0+2+Math.random()*(N-4),13-gt/2,(ft%2?1:-1)*(4+Math.random()*3)),e.add(rt)}const st=60,xt=new Float32Array(st*3),Tt=[];for(let ft=0;ft<st;ft++)Tt.push({x:a.x0+Math.random()*N,y:-6+Math.random()*14,z:(Math.random()-.5)*18,p:Math.random()*6.28});const Z=new pe;Z.setAttribute("position",new _e(xt,3));const Rt=new Li(Z,new ei({color:14221168,size:.28,transparent:!0,opacity:.9,blending:pn,depthWrite:!1}));e.add(Rt),s.push(ft=>{for(let gt=0;gt<st;gt++){const rt=Tt[gt];xt[gt*3]=rt.x+Math.sin(ft*.7+rt.p)*1.4,xt[gt*3+1]=rt.y+Math.sin(ft*1.1+rt.p*2)*.9,xt[gt*3+2]=rt.z+Math.cos(ft*.5+rt.p)*1.2}Z.attributes.position.needsUpdate=!0})}{const N=o.x1-o.x0,G=(o.x0+o.x1)/2,Y=new vt(new ni(8,32),new In({color:16752704}));Y.position.set(G,9,-38),e.add(Y);const ht=new vt(new ni(12,32),new In({color:16740400,transparent:!0,opacity:.25,blending:pn,depthWrite:!1}));ht.position.set(G,9,-38.5),e.add(ht);const et=new vt(new Pi(N+34,20),new It({color:1731210,roughness:.25,metalness:.6,emissive:670282,emissiveIntensity:.5}));et.rotation.x=-Math.PI/2,et.position.set(G,-7.95,-22),e.add(et);const st=new It({color:9068596,roughness:.9}),xt=new It({color:2792010,roughness:.8,side:ge});for(let Rt=0;Rt<5;Rt++){const ft=o.x0+3+Rt/5*(N-6)+Math.random()*2,gt=(Rt%2?1:-1)*(9+Math.random()*4),rt=5+Math.random()*2,ot=new vt(new an(.22,.34,rt,7),st);ot.position.set(ft,-8+rt/2,gt),ot.rotation.z=(Math.random()-.5)*.25,e.add(ot);for(let St=0;St<5;St++){const Zt=new vt(new $n(.35,2.6,4),xt),ee=St/5*Math.PI*2;Zt.position.set(ft+Math.cos(ee)*1.1,-8+rt+.3,gt+Math.sin(ee)*1.1),Zt.rotation.set(Math.sin(ee)*1.9,0,-Math.cos(ee)*1.9),e.add(Zt)}}const Tt=new In({color:16774368,side:ge}),Z=[];for(let Rt=0;Rt<3;Rt++){const ft=new Ce,gt=[];for(const rt of[-1,1]){const ot=new vt(new Pi(.9,.28),Tt);ot.position.x=rt*.45,ft.add(ot),gt.push(ot)}ft.position.set(o.x0+4+Rt*N/3,8+Rt*2,-12-Rt*4),e.add(ft),Z.push({gull:ft,wings:gt,bx:ft.position.x,ph:Rt*2.1})}s.push(Rt=>{for(const ft of Z){const gt=Math.sin(Rt*7+ft.ph)*.6;ft.wings[0].rotation.y=gt,ft.wings[1].rotation.y=-gt,ft.gull.position.x=ft.bx+Math.sin(Rt*.22+ft.ph)*5,ft.gull.position.y+=Math.sin(Rt*1.3+ft.ph)*.004}})}{const N=c.x1-c.x0,G=(c.x0+c.x1)/2,Y=R_("#20e0ff");Y.repeat.set(N/2.4,16);const ht=new vt(new Pi(N+16,40),new In({map:Y,transparent:!0,opacity:.35,blending:pn,depthWrite:!1}));ht.rotation.x=-Math.PI/2,ht.position.set(G,-7.9,0),e.add(ht);for(let rt=0;rt<5;rt++){const ot=new vt(new cn(6,.14,8,40),new It({color:rt%2?16732120:3205375,emissive:rt%2?11540634:563392,emissiveIntensity:1.6,roughness:.3}));ot.rotation.y=Math.PI/2,ot.position.set(c.x0+3+(rt+.5)*(N-6)/5,0,0),e.add(ot)}const et=new vt(new qe(4,20,20),new It({color:10119935,emissive:3674730,emissiveIntensity:.8,roughness:.6}));et.position.set(G+10,20,-34),e.add(et);const st=new vt(new cn(6,.35,8,40),new It({color:16767392,emissive:10512928,emissiveIntensity:.9,roughness:.5}));st.rotation.x=Math.PI/2.6,st.position.copy(et.position),e.add(st);const xt=6,Tt=new Float32Array(xt*3),Z=[];for(let rt=0;rt<xt;rt++)Tt[rt*3]=c.x0+Math.random()*N,Tt[rt*3+1]=20+Math.random()*25,Tt[rt*3+2]=-20-Math.random()*15,Z.push({vx:-14-Math.random()*10,vy:-6-Math.random()*5});const Rt=new pe;Rt.setAttribute("position",new _e(Tt,3));const ft=new Li(Rt,new ei({color:13693183,size:.7,transparent:!0,opacity:.95,blending:pn,depthWrite:!1}));e.add(ft);let gt=0;s.push(rt=>{const ot=Math.min(.05,rt-gt);gt=rt;for(let St=0;St<xt;St++)Tt[St*3]+=Z[St].vx*ot,Tt[St*3+1]+=Z[St].vy*ot,(Tt[St*3+1]<5||Tt[St*3]<c.x0-10)&&(Tt[St*3]=c.x0+10+Math.random()*(N+10),Tt[St*3+1]=26+Math.random()*20);Rt.attributes.position.needsUpdate=!0})}const wt=[a.x0,o.x0,c.x0],Ft=N=>(N=Math.max(0,Math.min(1,N)),N*N*(3-2*N)),Mt=new At,se=new At,Bt=new At,w=new At;function M(N,G){let Y=0;for(const Tt of wt)Y+=Ft((G-(Tt-4))/8);const ht=Math.min(2,Math.floor(Y)),et=Y-ht,st=Ql[ht],xt=Ql[Math.min(3,ht+1)];Mt.lerpColors(st.bg,xt.bg,et),se.lerpColors(st.hs,xt.hs,et),Bt.lerpColors(st.hg,xt.hg,et),w.lerpColors(st.key,xt.key,et),N.scene.background.copy(Mt),N.scene.fog.color.copy(Mt),N.scene.fog.density=st.fd+(xt.fd-st.fd)*et,N.ambient.color.copy(se),N.ambient.groundColor.copy(Bt),N.key.color.copy(w),N.key.intensity=st.ki+(xt.ki-st.ki)*et}function B(N){for(const G of s)G(N)}return{group:e,update:B,applyMood:M,spots:i}}const P_=1.92;function Xo(n){const t=n==="claire",e=new Ce,i=new Ce,s=16239008,r=t?16735142:3112928,a=t?16765503:8380671,o=t?16242808:15780944,c=(C,A={})=>new It({color:C,roughness:.55,metalness:0,...A}),l=()=>c(o,{roughness:.45});if(!t){const C=new vt(new $n(.62,1.1,12,1,!0,0,Math.PI),new It({color:13904698,emissive:5901587,emissiveIntensity:.35,roughness:.6,side:ge}));C.position.set(0,.7,-.34),C.rotation.x=-.35,i.add(C),e.userData.cape=C}const h=new vt(new Kn(.42,.7,6,12),c(r));if(h.position.y=.55,h.castShadow=!0,i.add(h),t){const C=new vt(new $n(.66,.42,16,1,!0),new It({color:16769520,emissive:16739760,emissiveIntensity:.5,roughness:.5,side:ge}));C.position.y=.34,C.rotation.x=Math.PI,i.add(C)}const u=new vt(new ni(.18,5),new It({color:16773808,emissive:a,emissiveIntensity:1.6,side:ge}));u.position.set(0,.72,.43),i.add(u);const d=new vt(new qe(.34,16,16),c(s));d.position.y=1.28,d.castShadow=!0,i.add(d);const p=new vt(new qe(.37,16,16,0,Math.PI*2,0,Math.PI*(t?.7:.62)),l());if(p.position.y=t?1.33:1.37,i.add(p),t){const C=new vt(new Kn(.22,.6,4,10),l());C.scale.set(1.5,1,.55),C.position.set(0,.95,-.26),i.add(C);for(const R of[-1,1]){const I=new vt(new Kn(.11,.62,4,8),l());I.position.set(R*.33,.98,-.06),I.rotation.z=R*-.08,i.add(I)}const A=new vt(new ni(.09,5),new It({color:16773808,emissive:16765503,emissiveIntensity:1.4,side:ge}));A.position.set(-.24,1.52,.24),A.rotation.y=-.4,i.add(A)}else{const C=new vt(new qe(.2,10,10),l());C.scale.set(1.2,.6,.6),C.position.set(-.1,1.5,.22),i.add(C);for(const I of[-1,1]){const x=new vt(new Kn(.09,.34,4,8),l());x.position.set(I*.31,1.16,.02),x.rotation.z=I*-.1,i.add(x)}const A=new Ce;A.position.set(0,1.42,-.3);let R=0;for(let I=0;I<5;I++){const x=.13-I*.017,b=new vt(new qe(x,10,10),l());if(R-=x*1.55,b.position.set(0,R,-.02*I),A.add(b),I===4){const H=new vt(new cn(.055,.022,6,10),new It({color:15216720,emissive:10489888,emissiveIntensity:.5}));H.position.set(0,R+x*.6,-.08),H.rotation.x=Math.PI/2,A.add(H)}}i.add(A),e.userData.braid=A}const _=new It({color:2101280});for(const C of[-.12,.12]){const A=new vt(new qe(.055,8,8),_);A.position.set(C,1.31,.3),i.add(A);const R=new vt(new qe(.02,6,6),new It({color:16777215,emissive:16777215,emissiveIntensity:1}));R.position.set(C+.02,1.33,.35),i.add(R)}const v=new It({color:16752324,transparent:!0,opacity:.7});for(const C of[-.21,.21]){const A=new vt(new ni(.07,10),v);A.position.set(C,1.22,.3),i.add(A)}const m=new vt(new cn(.11,.022,6,14,Math.PI),new It({color:8003632}));m.position.set(0,1.16,.3),m.rotation.z=Math.PI,i.add(m);const f=[];for(const C of[-1,1]){const A=new Ce;A.position.set(C*.34,1.02,0);const R=new vt(new Kn(.13,.72,4,8),c(s));R.position.y=.45,R.castShadow=!0,A.add(R);const I=new vt(new qe(.15,10,10),c(s));I.position.y=.9,A.add(I);const x=new vt(new cn(.14,.045,6,12),c(a,{emissive:a,emissiveIntensity:.4}));x.position.y=.72,x.rotation.x=Math.PI/2,A.add(x),i.add(A),f.push(A)}const y=c(a),S=[];for(const C of[-1,1]){const A=new Ce;A.position.set(C*.18,.2,0);const R=new vt(new Kn(.15,.8,4,8),y);R.position.y=-.45,R.castShadow=!0,A.add(R);const I=new vt(new qe(.17,8,8),c(2757939));I.position.set(0,-.9,.05),A.add(I),i.add(A),S.push(A)}const T=t?1.06:.92;return i.scale.setScalar(T),i.position.y=P_*(1-T),e.add(i),e.userData.legs=S,e.userData.arms=f,e.userData.char=n,e}function So(n,t,e,i){const{legs:s,arms:r,cape:a,braid:o}=n.userData;if(e==="fly")s[0].rotation.x=-1.15,s[1].rotation.x=-1.15,r[0].rotation.z=1.15,r[1].rotation.z=-1.15,r[0].rotation.x=0,r[1].rotation.x=0;else if(e==="salute"){s[0].rotation.x=.15,s[1].rotation.x=-.15;const c=Math.sin(t*9)*.35;r[0].rotation.z=.15,r[0].rotation.x=0,r[1].rotation.z=-.15+c,r[1].rotation.x=-.2}else if(e==="idle"){const c=Math.sin(t*2)*.06;s[0].rotation.x=c,s[1].rotation.x=-c,r[0].rotation.z=.35,r[1].rotation.z=-.35,r[0].rotation.x=.1,r[1].rotation.x=.1}else{const c=Math.sin(t*3)*.25;s[0].rotation.x=c,s[1].rotation.x=-c,r[0].rotation.z=.05,r[1].rotation.z=-.05,r[0].rotation.x=0,r[1].rotation.x=0}a&&(a.rotation.x=-.35+Math.sin(t*4)*.12+(e==="fly"?.5:0)),o&&(e==="fly"?(o.rotation.x=-1.25+Math.sin(t*10)*.08,o.rotation.z=Math.sin(t*7)*.15):e==="swing"?(o.rotation.x=-.25+Math.sin(t*3)*.3,o.rotation.z=0):(o.rotation.x=-.12+Math.sin(t*2.2)*.08,o.rotation.z=Math.sin(t*1.7)*.1))}let Qt=null,yi=null,Me=null,Sn=null,yo=null,$s=!1,oo=0,mi=0,ia=0;const L_=()=>window.AudioContext||window.webkitAudioContext,He=n=>440*Math.pow(2,(n-69)/12);function Tn(){if(!Qt)try{Qt=new(L_()),yi=Qt.createGain(),yi.gain.value=$s?0:.9,yi.connect(Qt.destination),Me=Qt.createGain(),Me.gain.value=0,Me.connect(yi),Sn=Qt.createGain(),Sn.gain.value=.5,Sn.connect(yi),yo=Qt.createBuffer(1,Qt.sampleRate,Qt.sampleRate);const n=yo.getChannelData(0);for(let t=0;t<n.length;t++)n[t]=Math.random()*2-1;Qt.state==="suspended"&&Qt.resume().catch(()=>{})}catch{Qt=null}}function qo(n){$s=n,yi&&(yi.gain.value=n?0:.9)}function D_(){return{ready:!!Qt,running:Qt?Qt.state:"none",muted:$s}}function le(n,t,e,i,s,r,a){const o=Qt.createOscillator(),c=Qt.createGain();o.type=n,o.frequency.setValueAtTime(t,e),a&&o.frequency.exponentialRampToValueAtTime(Math.max(20,a),e+i),c.gain.setValueAtTime(s,e),c.gain.exponentialRampToValueAtTime(.001,e+i),o.connect(c),c.connect(r||Sn),o.start(e),o.stop(e+i+.02)}function vi(n,t,e,i,s,r){const a=Qt.createBufferSource();a.buffer=yo,a.loop=!0;const o=Qt.createBiquadFilter();o.type="bandpass",o.frequency.value=(i+s)/2,o.Q.value=(i+s)/2/Math.max(60,s-i);const c=Qt.createGain();c.gain.setValueAtTime(e,n),c.gain.exponentialRampToValueAtTime(.001,n+t),a.connect(o),o.connect(c),c.connect(r||Sn),a.start(n),a.stop(n+t+.02)}const U_=[132,116,92,124],I_=[[57,62,57,64],[55,55,53,50],[60,57,53,55],[57,53,60,55]],Or=[[12,-1,16,-1,19,-1,16,12,14,-1,17,-1,21,19,17,14],[0,-1,3,5,-1,7,-1,10,7,-1,5,3,-1,0,-1,-1],[12,-1,-1,16,-1,-1,19,-1,-1,23,-1,19,-1,16,-1,-1],[0,12,7,12,3,12,7,15,0,12,7,12,5,12,7,19]];function N_(n,t){const e=ia,i=(n>>4)%4,s=n%16,r=I_[e][i];if(e===0){s%8===0&&le("triangle",He(r-24),t,.22,.3,Me),s%8===4&&le("triangle",He(r-17),t,.2,.26,Me),s%4===2&&(le("square",He(r),t,.1,.045,Me),le("square",He(r+4),t,.1,.04,Me));const a=Or[0][s];a>=0&&le("square",He(r+a),t,.16,.055,Me)}else if(e===1){[0,3,6,8,11,14].includes(s)&&le("sine",150,t,.22,.5,Me,42),s%2===1&&vi(t,.05,.05,3500,7e3,Me);const a=Or[1][s];a>=0&&le("triangle",He(r+12+a),t,.2,.1,Me)}else if(e===2){if(s===0)for(const o of[0,4,7])le("sine",He(r+o),t,2.4,.055,Me),le("triangle",He(r+o-12),t,2.4,.03,Me);const a=Or[2][s];a>=0&&le("sine",He(r+a),t,.5,.07,Me)}else{if(s%2===0){const o=Qt.createOscillator(),c=Qt.createBiquadFilter(),l=Qt.createGain();o.type="sawtooth",o.frequency.value=He(r-24),c.type="lowpass",c.frequency.value=300+900*Math.abs(Math.sin(n*.5)),c.Q.value=6,l.gain.setValueAtTime(.1,t),l.gain.exponentialRampToValueAtTime(.001,t+.2),o.connect(c),c.connect(l),l.connect(Me),o.start(t),o.stop(t+.22)}const a=Or[3][s];a>=0&&s%2===0&&le("sine",He(r+12+a),t,.18,.05,Me),s===10&&le("sine",He(r+36),t,.35,.05,Me,He(r+24))}}function Yo(n){n!==ia&&(ia=n)}function F_(n){if(!Qt)return;if(Qt.state==="suspended")try{Qt.resume()}catch{}const t=n==="playing"&&!$s?.16:0;if(Me.gain.value+=(t-Me.gain.value)*.08,n!=="playing"){mi=0;return}const e=Qt.currentTime;(!mi||mi<e-.5)&&(mi=e+.08,oo=0);const i=60/U_[ia]/2;for(;mi<e+.3;)N_(oo,mi),mi+=i,oo++}const Xe=n=>(...t)=>{if(Qt&&!$s)try{n(Qt.currentTime,...t)}catch{}},jt={whoosh:Xe(n=>vi(n,.28,.5,500,2400)),catch:Xe((n,t)=>{const e=1+Math.min(12,t)*.045;le("sine",660*e,n,.16,.3),le("triangle",1320*e,n,.12,.14)}),perfect:Xe(n=>{[69,73,76].forEach((t,e)=>le("square",He(t+12),n+e*.07,.16,.18)),vi(n+.2,.3,.1,5e3,9500)}),flip:Xe(n=>le("triangle",520,n,.12,.2,Sn,980)),star:Xe(n=>le("sine",1420,n,.09,.18)),ring:Xe(n=>{le("sine",988,n,.1,.2),le("sine",1319,n+.07,.14,.18)}),net:Xe(n=>le("triangle",150,n,.34,.32,Sn,460)),fumble:Xe(n=>le("sawtooth",220,n,.42,.16,Sn,82)),fanfare:Xe(n=>[60,64,67,72].forEach((t,e)=>le("square",He(t+12),n+e*.09,.2,.14))),applause:Xe(n=>{for(let t=0;t<34;t++)vi(n+t*.045+Math.random()*.03,.05,.06*(1-t/40),900,4200)}),click:Xe(n=>le("sine",700,n,.05,.12)),spot:Xe(n=>{le("sine",90,n,.5,.35,Sn,55),vi(n,.25,.1,2200,6500)}),firework:Xe(n=>{vi(n,.5,.45,150,900),le("sine",880,n,.7,.09,Sn,110)}),ovation:Xe(n=>{for(let t=0;t<70;t++){const e=.02+.085*Math.min(1,t/25)*(1-Math.max(0,t-46)/26);vi(n+t*.05+Math.random()*.04,.055,Math.max(.006,e),800,4500)}})},O_="",B_="",tu=5e5,z_=3500;let os={url:O_,key:B_};function Ni(){return!!(os.url&&os.key)}function G_(n,t){os={url:n||"",key:t||""}}async function Jo(n,t={},e=0){const i=new AbortController,s=setTimeout(()=>i.abort(),z_);try{const r=await fetch(os.url.replace(/\/$/,"")+"/rest/v1/scores"+n,{...t,headers:{apikey:os.key,Authorization:"Bearer "+os.key,"Content-Type":"application/json",...t.headers||{}},signal:i.signal});if(!r.ok)throw new Error("http "+r.status);return r}catch(r){if(e>0)return Jo(n,t,e-1);throw r}finally{clearTimeout(s)}}const H_=20,eu=n=>String(n||"").replace(/[^\p{L}\p{N} '\-]/gu,"").replace(/\s+/g," ").trim().slice(0,H_).trim()||"PLAYER",nu=n=>Math.max(0,Math.min(tu,Math.round(+n||0)));async function V_(n=10){if(!Ni())return null;try{const e=await(await Jo("?select=initials,score,world,lap&order=score.desc&limit="+n,{},1)).json();return Array.isArray(e)?e.slice(0,n).map(i=>({i:eu(i.initials),s:nu(i.score),w:Math.max(0,Math.min(3,i.world|0)),l:Math.max(0,Math.min(999,i.lap|0))})):null}catch{return null}}let Eo=!1;function k_(){Eo=!1}async function W_({name:n,score:t,world:e=0,lap:i=0}){if(!Ni()||Eo)return!1;Eo=!0;try{return await Jo("",{method:"POST",body:JSON.stringify({initials:eu(n),score:nu(t),world:Math.max(0,Math.min(3,e|0)),lap:Math.max(0,Math.min(999,i|0))})}),!0}catch{return!1}}const To=6.2,Je=3.3,th=19,eh=15,bo=.85,iu=1.25,su=.42,Bn=12,ms=4,en=Bn*ms,gs=["Circus","Jungle","Beach","Space"],X_=1,ru=2,Ko=3,sa=-3.6,q_=-7,Zo=6,Qs=1.55,Y_=[800,1800,3500,6e3],jo=["·","🥉","🥈","🥇","💎"],$o=["🎪","🌴","🏖","🚀"],J_=n=>{let t=0;for(let e=0;e<4;e++)n>=Y_[e]&&(t=e+1);return t};function au(){try{return{high:+localStorage.getItem("ts3d_high")||0,combo:+localStorage.getItem("ts3d_combo")||0,medals:JSON.parse(localStorage.getItem("ts3d_medals")||"[0,0,0,0]"),mute:localStorage.getItem("ts3d_mute")==="1",reduceFx:localStorage.getItem("ts3d_reducefx")==="1"}}catch{return{high:0,combo:0,medals:[0,0,0,0],mute:!1,reduceFx:!1}}}let Xt=au();function Ws(){try{localStorage.setItem("ts3d_high",String(Xt.high)),localStorage.setItem("ts3d_combo",String(Xt.combo)),localStorage.setItem("ts3d_medals",JSON.stringify(Xt.medals)),localStorage.setItem("ts3d_mute",Xt.mute?"1":"0"),localStorage.setItem("ts3d_reducefx",Xt.reduceFx?"1":"0")}catch{}}qo(Xt.mute);const ga=()=>{const n=new Date;return n.getUTCFullYear()*1e4+(n.getUTCMonth()+1)*100+n.getUTCDate()};function tr(){try{const n=JSON.parse(localStorage.getItem("ts3d_daily")||"null");return n&&n.d===ga()?n:null}catch{return null}}function K_(n){try{const t=tr();(!t||n>t.s)&&localStorage.setItem("ts3d_daily",JSON.stringify({d:ga(),s:n}))}catch{}}let ra=!1;try{const n=matchMedia("(prefers-reduced-motion: reduce)");ra=n.matches;const t=e=>{ra=e.matches};n.addEventListener?n.addEventListener("change",t):n.addListener&&n.addListener(t)}catch{}const _a=()=>ra||Xt.reduceFx,va=()=>Xt.reduceFx;function ou(){try{const n=JSON.parse(localStorage.getItem("ts3d_board")||"[]");return Array.isArray(n)?n:[]}catch{return[]}}let ln=ou();function Z_(){try{localStorage.setItem("ts3d_board",JSON.stringify(ln))}catch{}}const cu=10;function j_(n){if(n<=0)return-1;const t=ln.filter(e=>e.s>=n).length;return t<cu?t:-1}function $_(n,t,e,i){const s={i:n,s:t,m:e,l:i};return ln.push(s),ln.sort((r,a)=>a.s-r.s),ln=ln.slice(0,cu),Z_(),ln.indexOf(s)}const lu=20;let Ui=-1;function Q_(n){return String(n||"").replace(/[^\p{L}\p{N} '\-]/gu,"").replace(/\s+/g," ").trim().slice(0,lu).trim()||"PLAYER"}let Ei="local",yn=null,Xs=!1,Is=null,cs=null,co=20260718;const xi=()=>(co=co*1103515245+12345&2147483647,co/2147483647),Pe=[];{const n=[[4.5,7.5],[4.2,5.6],[4.5,6.5],[4.5,7.5]];let t=0;for(let e=0;e<en;e++){const i=Math.floor(e/Bn),s=e%Bn===0;if(e>0){const[o,c]=n[i];t+=e<4?4.5+xi()*1:o+xi()*(c-o)}const r=To+(e===0||s?0:xi()*2.4-1.2),a={x:t,py:r,w:i};i===X_&&!s&&(a.mv=.6+xi()*.4,a.mvSpd=.45+xi()*.3,a.mvPh=xi()*6.28),Pe.push(a)}}const tv=Pe[en-1].x,Qo=[];for(let n=0;n<ms;n++){const t=n===0?-16:(Pe[n*Bn-1].x+Pe[n*Bn].x)/2,e=n===ms-1?tv+14:(Pe[(n+1)*Bn-1].x+Pe[(n+1)*Bn].x)/2;Qo.push({x0:t,x1:e})}const hu=document.getElementById("app"),xe=A_(hu),{scene:Fe,camera:ye}=xe,nh=C_(Fe,Qo),wo=new Ce;Fe.add(wo);const $t=[],ev=[new It({color:12160255,emissive:5910176,emissiveIntensity:.4,roughness:.5}),new It({color:5615683,emissive:1985042,emissiveIntensity:.5,roughness:.8}),new It({color:14200938,emissive:6965786,emissiveIntensity:.35,roughness:.85}),new It({color:6744831,emissive:43224,emissiveIntensity:1,roughness:.35})],uu=new It({color:16764735,emissive:16747008,emissiveIntensity:.8,roughness:.4,metalness:.2}),nv=new It({color:16777215,emissive:9109441,emissiveIntensity:1.6,roughness:.3});for(let n=0;n<en;n++){const{x:t,py:e,w:i,mv:s,mvSpd:r,mvPh:a}=Pe[n],o=new Ce,c=new vt(new an(.035,.035,Je,6),ev[i]),l=new vt(new an(.09,.09,1.5,10),uu);l.rotation.x=Math.PI/2,l.castShadow=!0,o.add(c),o.add(l),wo.add(o);const h=new vt(new qe(.18,8,8),new It({color:2757939}));h.position.set(t,e,0),wo.add(h),$t.push({x:t,bx:t,py:e,w:i,mv:s,mvSpd:r,mvPh:a,theta:(n%2?1:-1)*su*xi(),omega:0,g:o,rope:c,bar:l,anchor:h})}const fu=n=>new P(n.x+Je*Math.sin(n.theta),n.py-Je*Math.cos(n.theta),0),iv=n=>fu(n).add(new P(0,-Qs,0));function sv(n){n.mv&&(n.x=n.bx+Math.sin(g.t*n.mvSpd+n.mvPh)*n.mv,n.anchor.position.x=n.x);const t=fu(n);n.bar.position.copy(t),n.rope.position.set((n.x+t.x)/2,(n.py+t.y)/2,0),n.rope.rotation.z=-n.theta}const du=new Ce;Fe.add(du);const er=[],rv=new It({color:16773808,emissive:16764735,emissiveIntensity:1.8,roughness:.3}),av=new ko(.34,0);for(let n=0;n<en-1;n++){const t=Pe[n],e=Pe[n+1];for(let i=0;i<2;i++){const s=(i+1)/3,r=t.x+s*(e.x-t.x),a=(t.py+e.py)/2-Je+1.4+Math.sin(s*Math.PI)*2.2,o=new vt(av,rv);o.position.set(r,a,0),du.add(o),er.push({m:o,got:!1})}}const _s=[];{const n=new It({color:16773808,emissive:16739760,emissiveIntensity:1.5,roughness:.35}),t=[];for(let e=0;e<ms;e++)for(const i of[2,6,9])t.push(e*Bn+i);for(const e of t){if(e+1>=en)continue;const i=Pe[e],s=Pe[e+1],r=new vt(new cn(1,.09,10,40),n.clone());r.position.set((i.x+s.x)/2,(i.py+s.py)/2-Je*.88-Qs+1.9,0),Fe.add(r),_s.push({m:r,got:!1,gi:e,baseX:r.position.x,baseY:r.position.y,mvY:i.w===Ko})}}function ov(n){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d");e.strokeStyle="#cfe8ff",e.lineWidth=3,e.beginPath();for(let s=0;s<=64;s+=16)e.moveTo(s,0),e.lineTo(s,64),e.moveTo(0,s),e.lineTo(64,s);e.stroke();const i=new Bo(t);return i.wrapS=i.wrapT=Di,i.repeat.set(n,5),i}const tc=new Ce;Fe.add(tc);const nr=[];for(let n=0;n<ms;n++){const t=Qo[n],e=t.x1-t.x0-3,i=new vt(new Pi(e,7),new In({map:ov(e/1.4),transparent:!0,opacity:.3,side:ge,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.position.set((t.x0+t.x1)/2,sa,0),tc.add(i),nr.push({m:i,used:!1,flashT:0})}const Br=Pe.map(n=>({py:n.py,mv:n.mv,mvSpd:n.mvSpd,mvPh:n.mvPh}));function cv(n){let t=n?ga()*2654435761%2147483647:0;const e=()=>(t=t*1103515245+12345&2147483647,t/2147483647);for(let s=0;s<en;s++){const r=Pe[s],a=s%Bn===0,o=$t[s];n?(r.py=s===0||a?To:To+e()*2.4-1.2,r.mv!==void 0&&(r.mv=.6+e()*.4,r.mvSpd=.45+e()*.3,r.mvPh=e()*6.28)):(r.py=Br[s].py,r.mv=Br[s].mv,r.mvSpd=Br[s].mvSpd,r.mvPh=Br[s].mvPh),o.py=r.py,o.mv=r.mv,o.mvSpd=r.mvSpd,o.mvPh=r.mvPh,o.anchor.position.y=r.py}let i=0;for(let s=0;s<en-1;s++){const r=Pe[s],a=Pe[s+1];for(let o=0;o<2;o++){const c=(o+1)/3;er[i].m.position.y=(r.py+a.py)/2-Je+1.4+Math.sin(c*Math.PI)*2.2,i++}}for(const s of _s){const r=Pe[s.gi],a=Pe[s.gi+1];s.baseY=(r.py+a.py)/2-Je*.88-Qs+1.9,s.m.position.y=s.baseY}}const ir=260,Ns=new Float32Array(ir*3).fill(-999),Hr=new Float32Array(ir*3),qs=new pe;qs.setAttribute("position",new _e(Ns,3));qs.setAttribute("color",new _e(Hr,3));const lv=new Li(qs,new ei({size:.3,vertexColors:!0,transparent:!0,opacity:.95,blending:pn,depthWrite:!1}));Fe.add(lv);const ec=[];for(let n=0;n<ir;n++)ec.push({life:0,max:1,x:0,y:-999,z:0,vx:0,vy:0,vz:0});let is=[];const zr=new At;function hv(n,t,e){const i=Math.random();let s=0;for(let r=0;r<ir&&s<52;r++){const a=ec[r];if(a.life>0)continue;a.max=a.life=1.1+Math.random()*.6,a.x=n,a.y=t,a.z=e;const o=Math.random()*Math.PI*2,c=Math.acos(Math.random()*2-1),l=4.5+Math.random()*2.5;a.vx=Math.sin(c)*Math.cos(o)*l,a.vy=Math.cos(c)*l,a.vz=Math.sin(c)*Math.sin(o)*l*.4,zr.setHSL((i+Math.random()*.08)%1,1,.6),Hr[r*3]=zr.r,Hr[r*3+1]=zr.g,Hr[r*3+2]=zr.b,s++}va()||ci(.12),jt.firework()}function uv(n){is=[];const t=Ht.position.x,e=Math.max(Ht.position.y,0);for(let i=0;i<n;i++)is.push({t:g.t+.3+i*.6,x:t+(Math.random()*12-6),y:e+4+Math.random()*3.5,z:-2+Math.random()*4});jt.ovation()}function fv(n){for(let e=is.length-1;e>=0;e--)if(g.t>=is[e].t){const i=is[e];hv(i.x,i.y,i.z),is.splice(e,1)}let t=!1;for(let e=0;e<ir;e++){const i=ec[e];if(i.life<=0){Ns[e*3+1]=-999;continue}t=!0,i.life-=n,i.vy-=3.2*n,i.vx*=1-n*.8,i.vz*=1-n*.8,i.x+=i.vx*n,i.y+=i.vy*n,i.z+=i.vz*n,Ns[e*3]=i.x,Ns[e*3+1]=i.y,Ns[e*3+2]=i.z}t&&(qs.attributes.position.needsUpdate=!0,qs.attributes.color.needsUpdate=!0)}const Ti=36,$e=new Float32Array(Ti*3),Vr=new Float32Array(Ti*3),vs=new pe;vs.setAttribute("position",new _e($e,3));vs.setAttribute("color",new _e(Vr,3));const vn=new Li(vs,new ei({size:.45,vertexColors:!0,transparent:!0,opacity:1,blending:pn,depthWrite:!1,sizeAttenuation:!0}));vn.visible=!1;Fe.add(vn);const Nn=new At;function ih(n){for(let t=0;t<Ti;t++)$e[t*3]=n.x,$e[t*3+1]=n.y,$e[t*3+2]=n.z;vs.attributes.position.needsUpdate=!0}function sh(n,t,e){for(let s=0;s<Ti-1;s++)$e[s*3]=$e[(s+1)*3],$e[s*3+1]=$e[(s+1)*3+1],$e[s*3+2]=$e[(s+1)*3+2];const i=(Ti-1)*3;$e[i]=n.x,$e[i+1]=n.y,$e[i+2]=n.z;for(let s=0;s<Ti;s++){const r=s/Ti;t?Nn.setHSL((e*.6+r*.9)%1,1,.55):Nn.setHSL(.12,1,.5+r*.2),Vr[s*3]=Nn.r*r,Vr[s*3+1]=Nn.g*r,Vr[s*3+2]=Nn.b*r}vs.attributes.position.needsUpdate=!0,vs.attributes.color.needsUpdate=!0}const sr=240,Fs=new Float32Array(sr*3).fill(-999),kr=new Float32Array(sr*3),Ys=new pe;Ys.setAttribute("position",new _e(Fs,3));Ys.setAttribute("color",new _e(kr,3));const dv=new Li(Ys,new ei({size:.22,vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!1}));Fe.add(dv);const nc=[];for(let n=0;n<sr;n++)nc.push({life:0,x:0,y:-999,z:0,vx:0,vy:0,vz:0});const rh=[16735354,16764735,5556479,9109441,12160255];function Vs(n,t,e,i=5){let s=0;for(let r=0;r<sr&&s<t;r++){const a=nc[r];if(a.life>0)continue;a.life=.8+Math.random()*.6,a.x=n.x,a.y=n.y,a.z=n.z;const o=Math.random()*Math.PI*2,c=Math.random()*Math.PI-Math.PI/2,l=i*(.4+Math.random()*.8);a.vx=Math.cos(o)*Math.cos(c)*l,a.vy=Math.sin(c)*l+2.5,a.vz=Math.sin(o)*Math.cos(c)*l*.5,Nn.setHex(e?16764735:rh[Math.random()*rh.length|0]),kr[r*3]=Nn.r,kr[r*3+1]=Nn.g,kr[r*3+2]=Nn.b,s++}}function pv(n){let t=!1;for(let e=0;e<sr;e++){const i=nc[e];if(i.life<=0){Fs[e*3+1]=-999;continue}t=!0,i.life-=n,i.vy-=9*n,i.x+=i.vx*n,i.y+=i.vy*n,i.z+=i.vz*n,Fs[e*3]=i.x,Fs[e*3+1]=i.y,Fs[e*3+2]=i.z}t&&(Ys.attributes.position.needsUpdate=!0,Ys.attributes.color.needsUpdate=!0)}const ic=70,Wr=new Float32Array(ic*3),sc=new pe;sc.setAttribute("position",new _e(Wr,3));const Xr=new Li(sc,new ei({color:13626111,size:.16,transparent:!0,opacity:0,blending:pn,depthWrite:!1}));Fe.add(Xr);const pu=[];for(let n=0;n<ic;n++)pu.push({ox:Math.random()*28-14,y:Math.random()*14-6,z:Math.random()*12-6});function mv(n){const t=g.mode==="playing"&&Math.abs(g.wind)>.2,e=Xr.material;if(e.opacity+=((t?.55:0)-e.opacity)*Math.min(1,n*5),Xr.visible=e.opacity>.02,!!Xr.visible){for(let i=0;i<ic;i++){const s=pu[i];s.ox+=g.wind*9*n,s.ox>14?s.ox-=28:s.ox<-14&&(s.ox+=28),Wr[i*3]=Ht.position.x+s.ox,Wr[i*3+1]=s.y+Math.sin(g.t*2+i)*.4,Wr[i*3+2]=s.z}sc.attributes.position.needsUpdate=!0}}let Ht=Xo("marc");Fe.add(Ht);const g={mode:"menu",char:"marc",active:0,state:"swing",score:0,combo:0,comboT:0,lives:3,t:0,spin:0,pumpAmp:1,holding:!1,armed:!1,grade:"",lastFlips:0,lastFlipBonus:0,trick:!1,flipRot:0,salute:0,world:0,wind:0,windOff:0,netBounce:!1,netSaves:0,lap:0,diffN:0,wScore:[0,0,0,0],runMedals:[0,0,0,0],starsGot:0,flipsTot:0,maxCombo:0,flyFrom:new P,flyTo:new P,flyT:0,flyDur:.72,arcH:2.4,flyNext:-1,flyMode:"catch",vel:new P,timeScale:1,slowmo:0,fovKick:0,shake:0,attract:!1,daily:!1},bn=-7,rr=-7.65,xs=new Ce;Fe.add(xs);const bs=new Ce;bs.position.set(bn,0,0);xs.add(bs);const rc=new vt(new an(3.1,3.5,.7,40),new It({color:6950950,roughness:.4,metalness:.5,emissive:1704456,emissiveIntensity:.4}));rc.position.y=rr-.35;rc.receiveShadow=!0;bs.add(rc);const ac=new vt(new cn(3.28,.15,8,48),new It({color:16764735,emissive:16755456,emissiveIntensity:1.1,roughness:.4}));ac.rotation.x=Math.PI/2;ac.position.y=rr;bs.add(ac);const ii={};for(const[n,t]of[["marc",-1.4],["claire",1.4]]){const e=Xo(n);e.position.set(t,rr+.7,.1),bs.add(e),ii[n]=e}const ar=new jh(16777215,110,24,Math.PI/6.5,.4,1.2);ar.position.set(bn,7,7);const oc=new ue;oc.position.set(bn,rr,0);Fe.add(oc);ar.target=oc;Fe.add(ar);const or=new Ce;Fe.add(or);const gv=new It({color:9375522,roughness:.7,emissive:2753032,emissiveIntensity:.45,side:ge}),mu=[];for(const n of[-1,1]){const t=new vt(new kn(3.8,8.4,.3),gv),e=bn+n*1.9;t.position.set(e,-3.4,4.2),or.add(t),mu.push({mesh:t,side:n,x0:e})}const gu=new vt(new kn(8.4,1.5,.5),new It({color:16764735,emissive:16755456,emissiveIntensity:.9,roughness:.4}));gu.position.set(bn,1.1,4.3);or.add(gu);let bi=0,aa=!1,ah=!1,oh=0;const _v=new URLSearchParams(location.search).has("lowfx"),ne={active:!1,done:!1,t:0,lit:0};let ke=null;const ch=3.6,vv=[.7,1.3,1.9];function cc(){ne.active||g.mode!=="menu"||(ke||(ke={key:xe.key.intensity,rim:xe.rim.intensity,fill:xe.fill.intensity,amb:xe.ambient.intensity}),ne.active=!0,ne.t=0,ne.lit=0,xe.key.intensity=ke.key*.06,xe.rim.intensity=ke.rim*.06,xe.fill.intensity=ke.fill*.06,xe.ambient.intensity=ke.amb*.25,J.menu.classList.add("hidden"),J.introLogo.classList.remove("show"))}function lc(){ne.active=!1,ne.done=!0,ke&&(xe.key.intensity=ke.key,xe.rim.intensity=ke.rim,xe.fill.intensity=ke.fill,xe.ambient.intensity=ke.amb),J.introLogo.classList.remove("show"),g.mode==="menu"&&J.menu.classList.remove("hidden"),bi<1&&(aa=!0),ws=g.t}function xv(n){ne.t+=n;const t=ne.t,e=Math.min(1,t/ch);for(;ne.lit<3&&t>vv[ne.lit];)ne.lit++,ne.lit===1?xe.key.intensity=ke.key:ne.lit===2?(xe.rim.intensity=ke.rim,xe.fill.intensity=ke.fill):xe.ambient.intensity=ke.amb,va()||ci(.1),jt.spot();const i=1-Math.pow(1-e,3);ye.position.set(bn+(1-i)*36,-3.4+(1-i)*12.5,8.8+(1-i)*15+Math.sin(e*Math.PI)*3);const s=new P(bn+(1-i)*16,-5+(1-i)*7,0);ye.lookAt(s),ye.fov!==55&&(ye.fov=55,ye.updateProjectionMatrix()),t>2.2&&J.introLogo.classList.add("show"),t>=ch&&(jt.fanfare(),lc())}function hc(){for(const n in ii){const t=n===g.char;ii[n].position.y=rr+.7+(t?.4:0)}}function _u(){if(Xt.high<=0){J.best.classList.add("hidden");return}const n=Xt.medals.map((t,e)=>$o[e]+jo[t]).join("  ");J.best.innerHTML="BEST "+Xt.high.toLocaleString("en")+" ⭐ · COMBO x"+Xt.combo+'<span class="medals">'+n+"</span>",J.best.classList.remove("hidden")}function uc(){J.muteBtn.textContent=Xt.mute?"🔇":"🔊"}function fc(){J.fxBtn.textContent=Xt.reduceFx?"🌙":"✨",J.fxBtn.classList.toggle("on",Xt.reduceFx),J.fxBtn.setAttribute("aria-pressed",String(Xt.reduceFx)),J.fxBtn.setAttribute("aria-label",Xt.reduceFx?"Flashes reduced — tap to restore":"Reduce flashes")}function Ao(n,t){const e=Ni(),i=e?Ei:"local";let s='<div class="bTitle">🏆 HIGH SCORES</div>';if(e&&(s+='<div class="bTabs"><span class="bTab'+(i==="local"?" sel":"")+'" data-tab="local">LOCAL</span><span class="bTab'+(i==="world"?" sel":"")+'" data-tab="world">WORLD</span></div>'),i==="world")if(Xs&&!yn)s+='<div class="bEmpty">…</div>';else if(!yn||!yn.length)s+='<div class="bEmpty">No world scores yet —<br>be the first to fly!</div>';else for(let r=0;r<yn.length;r++){const a=yn[r],o=cs&&a.i===cs.i&&a.s===cs.s;s+='<div class="bRow'+(o?" hl":"")+'"><span class="bRk">'+(r+1)+'</span><span class="bIn">'+a.i+'</span><span class="bMe">'+(a.l>0?"🔁":$o[a.w])+'</span><span class="bSc">'+a.s.toLocaleString("en")+"</span></div>"}else if(!ln.length)s+='<div class="bEmpty">No scores yet —<br>be the first to fly!</div>';else for(let r=0;r<ln.length;r++){const a=ln[r],o=a.m>0?jo[a.m]:"";s+='<div class="bRow'+(r===t?" hl":"")+'"><span class="bRk">'+(r+1)+'</span><span class="bIn">'+a.i+'</span><span class="bMe">'+o+'</span><span class="bSc">'+a.s.toLocaleString("en")+"</span></div>"}n.innerHTML=s,n.querySelectorAll(".bTab").forEach(r=>r.addEventListener("click",a=>{a.stopPropagation(),Ei!==r.dataset.tab&&(Ei=r.dataset.tab,Ei==="world"&&xa(),oa(),jt.click())}))}function oa(){Ao(J.menuBoard,Ui),!J.over.classList.contains("hidden")&&!J.overBoard.classList.contains("hidden")&&Ao(J.overBoard,Ui)}function xa(n){if(!Ni()||Is&&!n)return;Xs=!0,oa();const t=V_(10).then(e=>{Is===t&&(Xs=!1,Is=null,e?yn=e:yn||(Ei="local"),oa())});Is=t}function Mv(n){J.entryInput.value="",J.entryRank.textContent="#"+(n+1)+" place",J.entryScore.textContent="Score "+g.score.toLocaleString("en"),J.over.classList.add("hidden"),J.entry.classList.remove("hidden"),jt.fanfare(),requestAnimationFrame(()=>{try{J.entryInput.focus({preventScroll:!0})}catch{J.entryInput.focus()}})}function Ma(){if(J.entry.classList.contains("hidden"))return;const n=Q_(J.entryInput.value);Ui=$_(n,g.score,Math.max(...g.runMedals),g.lap),Ni()&&!g.daily&&(cs={i:n,s:Math.max(0,Math.min(tu,Math.round(g.score)))},W_({name:n,score:g.score,world:g.world,lap:g.lap}).then(t=>{t&&xa(!0)})),J.entry.classList.add("hidden"),jt.click(),Su()}function vu(){const n=tr();J.dailyBest.textContent=n?"Today's best: "+n.s.toLocaleString("en"):"New rail every day — same for everyone!"}function Sa(){g.mode="menu",Ht.visible=!1,xs.visible=!0,or.visible=!0,ar.visible=!0,J.attractBar.classList.remove("show"),J.hud.style.display="none",cr.classList.remove("on"),vn.visible=!1,ah||(ah=!0,bi=0,!ne.done&&!_v&&!_a()?cc():(ne.done=!0,aa=!0)),J.over.classList.add("hidden"),J.entry.classList.add("hidden"),ne.active||J.menu.classList.remove("hidden"),ws=g.t,hc(),_u(),oa(),Ni()&&xa(),vu()}function dc(){Fe.remove(Ht),Ht=Xo(g.char),Ht.visible=g.mode!=="menu",Fe.add(Ht)}function pc(n){const t=iv(n);Ht.position.copy(t),Ht.rotation.z=-n.theta}function Hn(n){if(navigator.vibrate)try{navigator.vibrate(n)}catch{}}const Gt=n=>document.getElementById(n),J={menu:Gt("menu"),over:Gt("over"),hud:Gt("hud"),score:Gt("score"),lives:Gt("lives"),combo:Gt("combo"),grade:Gt("grade"),comboHold:Gt("comboHold"),comboFill:Gt("comboFill"),big:Gt("bigmsg"),bigsub:Gt("bigsub"),flash:Gt("flash"),banner:Gt("banner"),bannerTxt:Gt("bannerTxt"),worldTag:Gt("worldTag"),wind:Gt("windTag"),best:Gt("best"),newBest:Gt("newBest"),overStats:Gt("overStats"),overMedals:Gt("overMedals"),muteBtn:Gt("muteBtn"),fxBtn:Gt("fxBtn"),gpBadge:Gt("gpBadge"),menuBoard:Gt("menuBoard"),overBoard:Gt("overBoard"),entry:Gt("entry"),entryRank:Gt("entryRank"),entryScore:Gt("entryScore"),entryInput:Gt("entryInput"),photoWrap:Gt("photoWrap"),photoImg:Gt("photoImg"),shareBtn:Gt("shareBtn"),introLogo:Gt("introLogo"),attractBar:Gt("attractBar"),dailyBest:Gt("dailyBest")};let Ro=-1;function Js(){g.score!==Ro&&(J.score.firstChild.textContent=String(g.score),J.score.classList.remove("pop"),J.score.offsetWidth,J.score.classList.add("pop"),Ro=g.score),J.lives.textContent="❤".repeat(Math.max(0,g.lives))||"—"}let qr=0,Yr=0;function Co(n){J.combo.textContent=n,J.combo.style.opacity="1",qr=1.1}function wi(n,t){J.grade.textContent=n,J.grade.style.color=t||"#fff",J.grade.style.opacity="1",J.grade.classList.remove("zoom"),J.grade.offsetWidth,J.grade.classList.add("zoom"),Yr=.9}let ss=0;function ci(n){ss=Math.max(ss,va()?n*.35:n)}const cr=Gt("tapBtn");Gt("playBtn").addEventListener("click",()=>{Tn(),jt.click(),ri(!1)});Gt("dailyBtn").addEventListener("click",()=>{Tn(),jt.click(),ri(!0)});Gt("introBtn").addEventListener("click",()=>{Tn(),jt.click(),cc()});Gt("againBtn").addEventListener("click",()=>{jt.click(),Sa()});Gt("replayBtn").addEventListener("click",()=>{Tn(),jt.click(),ri(g.daily)});J.muteBtn.addEventListener("pointerdown",n=>{n.stopPropagation()});J.muteBtn.addEventListener("click",n=>{n.stopPropagation(),Tn(),Xt.mute=!Xt.mute,qo(Xt.mute),Ws(),uc(),Xt.mute||jt.click()});uc();J.fxBtn.addEventListener("pointerdown",n=>{n.stopPropagation()});J.fxBtn.addEventListener("click",n=>{n.stopPropagation(),Tn(),Xt.reduceFx=!Xt.reduceFx,Ws(),fc(),jt.click()});fc();function ca(n){n!=="marc"&&n!=="claire"||(document.querySelectorAll(".pick").forEach(t=>{t.classList.toggle("sel",t.dataset.char===n),t.setAttribute("aria-pressed",String(t.dataset.char===n))}),g.char=n,dc(),hc())}document.querySelectorAll(".pick").forEach(n=>{n.addEventListener("click",()=>ca(n.dataset.char)),n.addEventListener("keydown",t=>{(t.code==="Enter"||t.code==="Space")&&(t.preventDefault(),ca(n.dataset.char))})});Gt("entryOk").addEventListener("click",()=>Ma());addEventListener("keydown",n=>{J.entry.classList.contains("hidden")||n.code==="Enter"&&(Ma(),n.preventDefault())});function ri(n){Tn(),g.daily=!!n,cv(g.daily),g.mode="playing",g.state="swing",g.active=0,g.score=0,Ro=-1,g.combo=0,g.comboT=0,g.lives=3,g.spin=0,g.pumpAmp=1,g.holding=!1,g.armed=!1,g.grade="",g.lastFlips=0,g.lastFlipBonus=0,g.trick=!1,g.flipRot=0,g.salute=0,g.timeScale=1,g.slowmo=0,g.fovKick=0,g.shake=0,g.world=0,g.wind=0,g.windOff=0,g.netBounce=!1,g.netSaves=0,g.lap=0,g.diffN=0,g.wScore=[0,0,0,0],g.runMedals=[0,0,0,0],g.starsGot=0,g.flipsTot=0,g.maxCombo=0,Ui=-1,k_(),ua=!1,En&&(URL.revokeObjectURL(En),En=null,Fn=null),J.entry.classList.add("hidden"),J.worldTag.textContent=gs[0].toUpperCase(),J.wind.style.opacity="0";for(const t of nr)t.used=!1,t.flashT=0;$t[0].theta=-1,$t[0].omega=0;for(const t of er)t.got=!1,t.m.visible=!0;for(const t of _s)t.got=!1,t.m.visible=!0;dc(),Ht.visible=!0,xs.visible=!1,or.visible=!1,ar.visible=!1,J.menu.classList.add("hidden"),J.over.classList.add("hidden"),J.hud.style.display="flex",cr.classList.add("on"),Js()}function xu(){for(let n=0;n<ms;n++){const t=J_(g.wScore[n]);t>g.runMedals[n]&&(g.runMedals[n]=t),t>Xt.medals[n]&&(Xt.medals[n]=t)}}let la=!1;function Mu(){if(g.mode="over",J.hud.style.display="none",J.comboHold.style.opacity="0",J.wind.style.opacity="0",cr.classList.remove("on"),vn.visible=!1,g.attract){wu();return}xu(),la=g.score>Xt.high,la&&(Xt.high=g.score),g.maxCombo>Xt.combo&&(Xt.combo=g.maxCombo),Ws();let n=!1;if(g.daily){const e=tr();n=!e||g.score>e.s,K_(g.score)}const t=g.daily?-1:j_(g.score);(g.lap>0||t===0&&g.score>0||n)&&uv(va()?2:4),t>=0?Mv(t):Su()}function Su(){J.big.textContent=g.lap>0?"🎉 What a run!":"Nice flying!",J.bigsub.textContent=(g.daily?"📅 DAILY · ":"")+"Score "+g.score.toLocaleString("en")+" · Best "+(g.daily?(tr()||{s:g.score}).s:Xt.high).toLocaleString("en"),J.newBest.classList.toggle("hidden",!la),J.overStats.innerHTML="<div><b>"+g.starsGot+"</b>⭐ stars</div><div><b>"+g.flipsTot+"</b>🌀 flips</div><div><b>x"+g.maxCombo+"</b>🔥 best combo</div><div><b>"+(g.lap>0?g.lap+(g.lap>1?" laps":" lap"):gs[g.world])+"</b>🌍 "+(g.lap>0?"endless!":"reached")+"</div>",J.overMedals.textContent=g.runMedals.map((n,t)=>$o[t]+jo[n]).join("  "),Ui>=0?(Ao(J.overBoard,Ui),J.overBoard.classList.remove("hidden")):J.overBoard.classList.add("hidden"),En?(J.photoImg.src=En,J.photoWrap.classList.add("show"),J.shareBtn.classList.remove("hidden")):(J.photoWrap.classList.remove("show"),J.shareBtn.classList.add("hidden")),J.over.classList.remove("hidden"),la?jt.applause():jt.fanfare()}function ai(){Tn(),g.mode==="playing"&&(g.state==="swing"?(g.holding=!0,g.armed=!0):g.state==="fly"&&!g.trick&&(g.trick=!0,jt.flip()))}function oi(){if(g.mode!=="playing"){g.holding=!1;return}g.holding=!1,g.state==="swing"&&g.armed&&(g.armed=!1,Tv())}const yu=()=>{const n=document.activeElement;return n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA")};addEventListener("keydown",n=>{n.code==="Space"&&!n.repeat&&!yu()&&(n.preventDefault(),ai())});addEventListener("keyup",n=>{n.code==="Space"&&!yu()&&(n.preventDefault(),oi())});hu.addEventListener("pointerdown",n=>{n.preventDefault(),ai()});addEventListener("pointerup",oi);addEventListener("pointercancel",oi);cr.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),ai()});cr.addEventListener("pointerup",n=>{n.stopPropagation(),oi()});let Ks=!1,lo=!1;const lh={};function Eu(){J.gpBadge.style.display=Ks?"inline-block":"none"}function Qi(n){if(ne.active||g.attract){ya();return}J.entry.classList.contains("hidden")&&g.mode==="menu"&&(n==="left"?ca("marc"):n==="right"&&ca("claire"))}function Sv(n){if(n&&(ne.active||g.attract)){ya();return}if(n)if(ws=g.t,g.mode==="playing")ai();else if(J.entry.classList.contains("hidden"))g.mode==="menu"?(Tn(),jt.click(),ri(!1)):g.mode==="over"&&(Tn(),jt.click(),ri(g.daily));else if(J.entryInput.value.trim())Ma();else{try{J.entryInput.focus({preventScroll:!0})}catch{J.entryInput.focus()}J.entryInput.classList.remove("needsName"),J.entryInput.offsetWidth,J.entryInput.classList.add("needsName"),jt.click()}else g.mode==="playing"&&oi()}let ho=!0;function Tu(){const n=navigator.getGamepads?navigator.getGamepads():[];let t=null;for(const a of n)if(a){t=a;break}if(!!t!==Ks&&(Ks=!!t,Eu()),!t){lo=!1;return}const e=!!(t.buttons[0]&&t.buttons[0].pressed);e!==lo&&(Sv(e),lo=e);const i=a=>{const o=!!(t.buttons[a]&&t.buttons[a].pressed),c=lh[a];return lh[a]=o,o&&!c};i(12)&&Qi("up"),i(13)&&Qi("down"),i(14)&&Qi("left"),i(15)&&Qi("right");const s=t.axes[0]||0,r=t.axes[1]||0;Math.abs(s)<.3&&Math.abs(r)<.3?ho=!0:ho&&(Math.abs(s)>.65||Math.abs(r)>.65)&&(ho=!1,Math.abs(s)>Math.abs(r)?Qi(s>0?"right":"left"):Qi(r>0?"down":"up"))}addEventListener("gamepadconnected",()=>{Ks=!0,Eu()});addEventListener("gamepaddisconnected",()=>Tu());const yv=20;let ws=0;const Jr={flipped:!1};function bu(){g.mode!=="menu"||ne.active||g.attract||(g.attract=!0,Jr.flipped=!1,g.char=Math.random()<.5?"marc":"claire",ri(!1),J.attractBar.classList.add("show"))}function wu(){g.attract&&(g.attract=!1,J.attractBar.classList.remove("show"),Sa())}function Ev(){if(g.state==="swing")if(Jr.flipped=!1,!g.holding)ai();else{const n=$t[g.active];n.omega>0&&Math.abs(n.theta-.45*g.pumpAmp)<.2*g.pumpAmp&&g.pumpAmp>1.18&&oi()}else g.state==="fly"&&g.world===ru&&!Jr.flipped&&(ai(),Jr.flipped=!0)}function ya(){ws=g.t,ne.active?lc():g.attract&&wu()}addEventListener("keydown",ya,!0);addEventListener("pointerdown",ya,!0);function Tv(){const n=$t[g.active],t=g.active+1;if(n.omega<=.15||t>=en){const v=Je*n.omega;g.vel.set(Math.cos(n.theta)*v*.5+1,Math.sin(n.theta)*v*.5,0),g.state="fumble",g.spin=0,g.grade="fumble",vn.visible=!0,ih(Ht.position),wi("WHOOPS!","#ff7d7d"),Hn(20),jt.fumble();return}const e=g.pumpAmp,i=.45*e,s=Math.abs(n.theta-i)/e,r=Math.pow(.95,g.diffN),a=Math.max(.065,.12*r),o=Math.max(.2,.35*r);let c,l,h;s<a?(g.grade="perfect",c=.6,l=2.8,h=5,wi("PERFECT!","#ffcf3f")):s<o?(g.grade="good",c=.75,l=2.4,h=4.2,wi("GOOD!","#d8ffef")):(g.grade="ok",c=.95,l=1.5,h=3,wi("OK","#9a8fc5")),h*=.85+(e-bo)/(iu-bo)*.3,n.w===Ko&&(c*=1.25,h*=1.12),g.windOff=0;const u=$t[t],d=Ht.position.clone(),p=new P(u.x+Je*Math.sin(-.5),u.py-Je*Math.cos(-.5)-Qs,0),_=p.x-d.x;g.flyFrom.copy(d),g.flyT=0,g.arcH=l,g.trick=!1,g.flipRot=0,g.lastFlips=0,g.lastFlipBonus=0,_<=h?(g.flyMode="catch",g.flyTo.copy(p),g.flyNext=t,g.flyDur=c):(g.flyMode="short",g.flyTo.copy(d.clone().lerp(p,Math.max(.55,h/_))),g.flyNext=-1,g.flyDur=c*.9),g.state="fly",g.spin=0,g.fovKick=1,vn.visible=!0,ih(d),ci(g.grade==="perfect"?.28:.15),Hn(12),jt.whoosh()}function bv(n){g.world=n,g.lap>0&&g.diffN++,J.bannerTxt.textContent="World "+(n+1)+" — "+gs[n],J.banner.classList.remove("show"),J.banner.offsetWidth,J.banner.classList.add("show"),J.worldTag.textContent=gs[n].toUpperCase()+(g.lap>0?" · LAP "+(g.lap+1):""),ci(.3),Hn(18),Yo(n),jt.fanfare(),jt.applause()}function wv(){g.lap++,g.diffN++,xu(),g.wScore=[0,0,0,0];for(const t of er)t.got=!1,t.m.visible=!0;for(const t of _s)t.got=!1,t.m.visible=!0;for(const t of nr)t.used=!1,t.flashT=0;g.state="swing",g.active=0,g.armed=!1,g.holding=!1,g.windOff=0,g.netBounce=!1,g.world=0,g.comboT=Zo;const n=$t[0];n.theta=-.8,n.omega=1.4,pc(n),Ht.rotation.z=0,vn.visible=!1,ye.position.set(Ht.position.x-7.5,Math.max(Ht.position.y+4,3),12),ha.set(Ht.position.x+2.5,Ht.position.y-.5,0),J.worldTag.textContent="CIRCUS · LAP "+(g.lap+1),J.bannerTxt.textContent=g.lap===1?"🎉 TOUR COMPLETE — ENDLESS MODE!":"LAP "+(g.lap+1)+" — FASTER!",J.banner.classList.remove("show"),J.banner.offsetWidth,J.banner.classList.add("show"),Vs(Ht.position,60,!0,8),ci(.35),Hn(25),Yo(0),jt.applause(),jt.fanfare()}function Av(n){const t=Math.floor(g.flipRot/(Math.PI*2)),e=$t[g.active].w;g.active=n,g.state="swing",$t[n].theta=-.5,$t[n].omega=g.grade==="perfect"?2:1.7,Ht.rotation.z=0,g.spin=0,g.armed=!1,vn.visible=!1,g.combo++,g.comboT=Zo,g.combo>g.maxCombo&&(g.maxCombo=g.combo);let i=(100+(g.combo-1)*25)*(g.grade==="perfect"?2:1),s=t>0?50*t*Math.max(1,g.combo):0;if(g.lastFlips=t,g.lastFlipBonus=s,g.flipsTot+=t,g.score+=i+s,g.wScore[$t[n].w]+=i+s,Co((g.combo>1?`x${g.combo}  `:"")+`+${i+s}`),t>0&&setTimeout(()=>wi(`FLIP +${s}`,"#ff6db0"),120),Vs(Ht.position,g.grade==="perfect"?40:22,!1,g.grade==="perfect"?7:5),g.grade==="perfect"?(g.slowmo=_a()?.15:.4,g.salute=.7,jt.perfect(),g.combo===g.maxCombo&&Uv()):jt.catch(g.combo),ci(.25),Hn(16),Js(),n>=en-1){wv();return}$t[n].w!==e&&bv($t[n].w)}function Rv(){if(g.lives--,g.combo=0,g.comboT=0,g.netBounce=!1,g.windOff=0,g.shake=.15,ci(.5),Hn(30),jt.fumble(),vn.visible=!1,Js(),g.lives<=0){Mu();return}g.state="swing",g.armed=!1;const n=$t[g.active];n.theta=-g.pumpAmp*.6,n.omega=0}function Au(n,t,e){const i=e?g.pumpAmp:su;n.omega+=-5.757575757575758*Math.sin(n.theta)*t;const s=.5*n.omega*n.omega+th/Je*(1-Math.cos(n.theta)),r=th/Je*(1-Math.cos(i));n.omega*=1+(r-s)*.02*(e?1:.4),n.theta+=n.omega*t}function Cv(n){if(g.world=$t[g.active].w,g.world===ru){const e=Math.sin(g.t*.8);g.wind=Math.abs(e)>.55?Math.sign(e)*1.6*((Math.abs(e)-.55)/.45):0}else g.wind=0;J.wind.textContent=g.wind>0?"💨 »»":"«« 💨",J.wind.style.opacity=Math.abs(g.wind)>.25?"1":"0",g.pumpAmp+=((g.holding&&g.state==="swing"?iu:bo)-g.pumpAmp)*Math.min(1,n*1.7);const t=Math.min(1.4,1+.05*g.diffN);for(let e=0;e<en;e++)Au($t[e],n*(e===g.active?t:1),e===g.active&&g.state==="swing");if(g.state==="swing")pc($t[g.active]);else if(g.state==="fly"){g.flyT+=n;const e=Math.min(1,g.flyT/g.flyDur);if(g.flyMode==="catch"&&g.flyNext>=0){const r=$t[g.flyNext];g.flyTo.set(r.x+Je*Math.sin(-.5),r.py-Je*Math.cos(-.5)-Qs,0)}g.wind!==0&&(g.windOff+=g.wind*n*(g.trick?.3:1));const i=g.flyFrom.clone().lerp(g.flyTo,e);i.y+=Math.sin(e*Math.PI)*g.arcH,i.x+=g.windOff,Ht.position.copy(i);const s=g.trick?16:6.5;g.spin+=n*s,g.trick&&(g.flipRot+=n*s),Ht.rotation.z=g.spin,sh(Ht.position,g.trick,g.t);for(const r of _s)r.got||Ht.position.distanceTo(r.m.position)<1&&(r.got=!0,r.m.visible=!1,g.score+=75,g.wScore[g.world]+=75,Co("+75 ◎"),Vs(r.m.position,26,!0,6),Js(),Hn(10),jt.ring());e>=1&&(g.flyMode==="catch"&&Math.abs(g.windOff)<=1.35?Av(g.flyNext):(g.vel.set(g.flyMode==="catch"?1:2.2,0,0),g.state="fumble",wi(g.flyMode==="catch"?"GUSTED!":"TOO FAR!","#ff9d5c")))}else if(g.state==="fumble"){g.vel.y-=(g.world===Ko?eh*.8:eh)*n,Ht.position.addScaledVector(g.vel,n),g.spin+=n*4,Ht.rotation.z=g.spin,sh(Ht.position,!1,g.t);const e=nr[g.world];if(!g.netBounce&&g.vel.y<0&&Ht.position.y<sa+.3&&e&&!e.used)e.used=!0,e.flashT=1,g.netBounce=!0,g.netSaves++,g.vel.y=9.5,g.vel.x=Yf.clamp($t[g.active].x-Ht.position.x,-3,3)*.6,wi("SAVED BY THE NET!","#8affc1"),Vs(Ht.position,26,!1,6),ci(.2),Hn(20),jt.net();else if(g.netBounce&&g.vel.y<=0){g.netBounce=!1,g.state="swing",g.armed=!1,vn.visible=!1;const i=$t[g.active];i.theta=-g.pumpAmp*.6,i.omega=0}else Ht.position.y<q_&&Rv()}g.combo>0&&(g.comboT-=n,g.comboT<=0&&(g.combo=0)),g.combo>=2?(J.comboHold.style.opacity="1",J.comboHold.firstChild.textContent="COMBO x"+g.combo,J.comboFill.style.width=Math.max(0,g.comboT/Zo*100)+"%"):J.comboHold.style.opacity="0";for(const e of er)e.got||(e.m.rotation.y+=n*2,e.m.rotation.x+=n*1.3,Ht.position.distanceTo(e.m.position)<1.25&&(e.got=!0,e.m.visible=!1,g.score+=25,g.wScore[g.world]+=25,g.starsGot++,Co("+25 ⭐"),Vs(e.m.position,12,!0,4),Js(),Hn(8),jt.star()));for(const e of _s){if(e.got)continue;e.m.rotation.y+=n*1.4;const i=1+Math.sin(g.t*4)*.05;e.m.scale.setScalar(i),e.mvY&&(e.m.position.y=e.baseY+Math.sin(g.t*1.3+e.baseX)*1.2)}}const ha=new P;function Pv(n){const t=Ht.position,e=_a(),i=!e&&g.timeScale<.9?.9:1,s=new P(t.x-7.5*i,Math.max(t.y+4*i,3),12*i);ye.position.lerp(s,1-Math.pow(.001,n)),g.shake>0&&(g.shake-=n,e||(ye.position.x+=(Math.random()-.5)*.3,ye.position.y+=(Math.random()-.5)*.3)),ha.lerp(new P(t.x+2.5,t.y-.5,0),1-Math.pow(.0015,n)),ye.lookAt(ha);const r=58+g.fovKick*(e?3:7);Math.abs(ye.fov-r)>.05&&(ye.fov=r,ye.updateProjectionMatrix()),g.fovKick=Math.max(0,g.fovKick-n*2.2)}function Lv(){ye.position.lerp(new P(bn+Math.sin(g.t*.25)*2,-3.4,8.8),.04),ye.lookAt(bn,-5.7,0),ye.fov!==55&&(ye.fov=55,ye.updateProjectionMatrix())}function Dv(n){oh+=n,bs.rotation.y=oh*.5,So(ii[g.char],g.t,"salute");const t=g.char==="marc"?"claire":"marc";if(So(ii[t],g.t,"idle"),aa){bi=Math.min(1,bi+n*.8),bi>=1&&(aa=!1);const e=1-Math.pow(1-bi,3);for(const i of mu)i.mesh.position.x=i.x0+i.side*e*4.4}}let Fn=null,En=null,ua=!1;function Uv(){ua=!0}function Iv(){const n=xe.renderer.domElement;n.toBlob&&n.toBlob(t=>{t&&(En&&URL.revokeObjectURL(En),Fn=t,En=URL.createObjectURL(t))},"image/png")}async function Ru(){if(!Fn)return;try{const t=new File([Fn],"trapeze-stars-photo-finish.png",{type:"image/png"});if(navigator.canShare&&navigator.canShare({files:[t]})){await navigator.share({files:[t],title:"Trapeze Stars 3D",text:"My best catch — score "+g.score.toLocaleString("en")+"!"});return}}catch{}const n=document.createElement("a");n.href=En,n.download="trapeze-stars-photo-finish.png",document.body.appendChild(n),n.click(),n.remove()}J.shareBtn.addEventListener("click",()=>{jt.click(),Ru()});window.__game={start:n=>{n&&(g.char=n),ri()},down:ai,up:oi,action:()=>{ai(),oi()},state:()=>({mode:g.mode,state:g.state,active:g.active,score:g.score,lives:g.lives,combo:g.combo,grade:g.grade,flips:g.lastFlips,flipBonus:g.lastFlipBonus,theta:$t[g.active]?$t[g.active].theta:0,omega:$t[g.active]?$t[g.active].omega:0,amp:g.pumpAmp,timeScale:g.timeScale,hero:Ht.position.toArray(),world:g.world,worldName:gs[g.world],netSaves:g.netSaves,wind:+g.wind.toFixed(2),windOff:+g.windOff.toFixed(2),lap:g.lap,diffN:g.diffN,starsGot:g.starsGot,flipsTot:g.flipsTot,maxCombo:g.maxCombo}),records:()=>({high:Xt.high,bestCombo:Xt.combo,medals:[...Xt.medals],mute:Xt.mute,reduceFx:Xt.reduceFx}),a11y:()=>({osReducedMotion:ra,reduceFx:Xt.reduceFx,effective:_a()}),setReduceFx:n=>{Xt.reduceFx=!!n,Ws(),fc()},photo:()=>({hasPhoto:!!Fn,size:Fn?Fn.size:0,type:Fn?Fn.type:null,url:!!En}),sharePhoto:()=>Ru(),over:()=>{g.mode==="playing"&&Mu()},wipe:()=>{try{["ts3d_high","ts3d_combo","ts3d_medals","ts3d_mute","ts3d_board","ts3d_daily"].forEach(n=>localStorage.removeItem(n))}catch{}Xt=au(),ln=ou(),Ui=-1,_u(),vu()},board:()=>ln.map(n=>({...n})),entry:()=>({open:!J.entry.classList.contains("hidden"),value:J.entryInput.value}),setEntry:n=>{J.entryInput.value=String(n??"").slice(0,lu)},entryConfirm:()=>Ma(),gp:()=>({active:Ks}),net:()=>({configured:Ni(),tab:Ei,loading:Xs,rows:yn?yn.map(n=>({...n})):null,lastSubmit:cs?{...cs}:null}),netTest:(n,t)=>{G_(n,t),Ei="world",yn=null,Xs=!1,Is=null,xa(!0)},intro:()=>({active:ne.active,done:ne.done,t:+ne.t.toFixed(2)}),skipIntro:()=>{ne.active?lc():ne.done=!0},playIntro:()=>cc(),attract:()=>({active:g.attract,idle:+(g.t-ws).toFixed(1)}),startAttract:()=>bu(),toMenu:()=>Sa(),daily:()=>({active:g.daily,seed:ga(),best:(tr()||{s:0}).s,bars:Pe.slice(0,3).map(n=>[+n.x.toFixed(3),+n.py.toFixed(3)])}),startDaily:()=>ri(!0),audio:()=>D_(),mute:n=>{Xt.mute=!!n,qo(Xt.mute),Ws(),uc()},warp:n=>{if(g.mode!=="playing")return;n=Math.max(0,Math.min(en-1,n)),g.active=n,g.state="swing",g.armed=!1,g.holding=!1,g.netBounce=!1,g.windOff=0,g.world=$t[n].w,vn.visible=!1;const t=$t[n];t.theta=-.6,t.omega=1.2,pc(t),ye.position.set(Ht.position.x-7.5,Math.max(Ht.position.y+4,3),12),ha.set(Ht.position.x+2.5,Ht.position.y-.5,0),J.worldTag.textContent=gs[g.world].toUpperCase(),Yo(g.world)},pick:n=>{ii[n]&&(g.char=n,dc(),hc())},menu:()=>({podium:xs.visible,heroes:xs.visible&&ii.marc.visible&&ii.claire.visible?2:0,curtainOpen:+bi.toFixed(2),char:g.char})};Sa();let hh=performance.now();function Cu(n){let t=(n-hh)/1e3;hh=n,t=Math.min(t,.05),g.t+=t,Tu(),g.slowmo>0?(g.slowmo-=t,g.timeScale=.35):g.timeScale+=(1-g.timeScale)*Math.min(1,t*6);const e=t*g.timeScale;nh.update(g.t),nh.applyMood(xe,g.mode==="playing"?Ht.position.x:bn);for(const i of $t)sv(i);tc.visible=g.mode==="playing";for(const i of nr)i.flashT>0?(i.flashT-=t,i.m.material.opacity=.3+Math.max(0,i.flashT)*.5,i.m.position.y=sa-Math.sin(Math.max(0,i.flashT)*Math.PI)*.6):(i.m.material.opacity=i.used?.1:.3,i.m.position.y=sa);if(g.mode==="playing"){g.attract&&Ev(),Cv(e);let i="swing";g.state==="fly"?i="fly":g.salute>0&&(i="salute",g.salute-=t),So(Ht,g.t,i),Pv(t)}else{for(let i=0;i<en;i++)Au($t[i],t,!1);g.mode==="menu"&&Dv(t),ne.active?xv(t):Lv(),g.mode==="menu"&&!ne.active&&!navigator.webdriver&&g.t-ws>yv&&bu()}pv(t),fv(t),mv(t),F_(g.mode);for(let i=0;i<en;i++){const s=g.mode==="playing"&&(g.state==="swing"||g.state==="fly")&&i===g.active+1;$t[i].bar.material=s?nv:uu}qr>0&&(qr-=t,qr<=0&&(J.combo.style.opacity="0")),Yr>0&&(Yr-=t,Yr<=0&&(J.grade.style.opacity="0")),ss>0&&(ss=Math.max(0,ss-t*1.4),J.flash.style.opacity=String(ss)),xe.render(),ua&&(ua=!1,Iv()),requestAnimationFrame(Cu)}requestAnimationFrame(Cu);"serviceWorker"in navigator&&location.protocol.startsWith("http")&&window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
