(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pl="160",zf=0,uc=1,Gf=2,sh=1,rh=2,Hn=3,fi=0,Kt=1,yt=2,Yn=0,Es=1,yn=2,hc=3,fc=4,Hf=5,Ri=100,kf=101,Vf=102,dc=103,pc=104,Wf=200,Xf=201,qf=202,Yf=203,Ya=204,Ja=205,Jf=206,Zf=207,Kf=208,jf=209,$f=210,Qf=211,ed=212,td=213,nd=214,id=0,sd=1,rd=2,So=3,od=4,ad=5,ld=6,cd=7,oh=0,ud=1,hd=2,ai=0,fd=1,dd=2,pd=3,ah=4,md=5,gd=6,lh=300,As=301,Rs=302,Eo=303,Za=304,Vo=306,Wi=1e3,Sn=1001,Ka=1002,Jt=1003,mc=1004,aa=1005,hn=1006,_d=1007,ar=1008,li=1009,vd=1010,xd=1011,ml=1012,ch=1013,si=1014,ri=1015,Jn=1016,uh=1017,hh=1018,Bi=1020,Md=1021,En=1023,yd=1024,Sd=1025,zi=1026,Cs=1027,Ed=1028,fh=1029,bd=1030,dh=1031,ph=1033,la=33776,ca=33777,ua=33778,ha=33779,gc=35840,_c=35841,vc=35842,xc=35843,mh=36196,Mc=37492,yc=37496,Sc=37808,Ec=37809,bc=37810,Tc=37811,wc=37812,Ac=37813,Rc=37814,Cc=37815,Pc=37816,Lc=37817,Uc=37818,Dc=37819,Ic=37820,Nc=37821,fa=36492,Fc=36494,Oc=36495,Td=36283,Bc=36284,zc=36285,Gc=36286,gh=3e3,Gi=3001,wd=3200,Ad=3201,_h=0,Rd=1,fn="",Mt="srgb",Kn="srgb-linear",gl="display-p3",Wo="display-p3-linear",bo="linear",ut="srgb",To="rec709",wo="p3",$i=7680,Hc=519,Cd=512,Pd=513,Ld=514,vh=515,Ud=516,Dd=517,Id=518,Nd=519,kc=35044,Vc="300 es",ja=1035,Xn=2e3,Ao=2001;class zs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wc=1234567;const er=Math.PI/180,Ps=180/Math.PI;function Ji(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function Ut(n,e,t){return Math.max(e,Math.min(t,n))}function _l(n,e){return(n%e+e)%e}function Fd(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Od(n,e,t){return n!==e?(t-n)/(e-n):0}function tr(n,e,t){return(1-t)*n+t*e}function Bd(n,e,t,i){return tr(n,e,1-Math.exp(-t*i))}function zd(n,e=1){return e-Math.abs(_l(n,e*2)-e)}function Gd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Hd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function kd(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Vd(n,e){return n+Math.random()*(e-n)}function Wd(n){return n*(.5-Math.random())}function Xd(n){n!==void 0&&(Wc=n);let e=Wc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qd(n){return n*er}function Yd(n){return n*Ps}function $a(n){return(n&n-1)===0&&n!==0}function Jd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ro(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Zd(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),f=o((e-i)/2),p=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function gs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Kd={DEG2RAD:er,RAD2DEG:Ps,generateUUID:Ji,clamp:Ut,euclideanModulo:_l,mapLinear:Fd,inverseLerp:Od,lerp:tr,damp:Bd,pingpong:zd,smoothstep:Gd,smootherstep:Hd,randInt:kd,randFloat:Vd,randFloatSpread:Wd,seededRandom:Xd,degToRad:qd,radToDeg:Yd,isPowerOfTwo:$a,ceilPowerOfTwo:Jd,floorPowerOfTwo:Ro,setQuaternionFromProperEuler:Zd,normalize:Wt,denormalize:gs};class ce{constructor(e=0,t=0){ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,t,i,s,r,o,a,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],g=i[8],v=s[0],m=s[3],d=s[6],E=s[1],x=s[4],S=s[7],C=s[2],w=s[5],R=s[8];return r[0]=o*v+a*E+l*C,r[3]=o*m+a*x+l*w,r[6]=o*d+a*S+l*R,r[1]=c*v+u*E+h*C,r[4]=c*m+u*x+h*w,r[7]=c*d+u*S+h*R,r[2]=f*v+p*E+g*C,r[5]=f*m+p*x+g*w,r[8]=f*d+p*S+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,p=c*r-o*l,g=t*h+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(s*c-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=f*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(da.makeScale(e,t)),this}rotate(e){return this.premultiply(da.makeRotation(-e)),this}translate(e,t){return this.premultiply(da.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const da=new Qe;function xh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function lr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function jd(){const n=lr("canvas");return n.style.display="block",n}const Xc={};function nr(n){n in Xc||(Xc[n]=!0,console.warn(n))}const qc=new Qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Yc=new Qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ir={[Kn]:{transfer:bo,primaries:To,toReference:n=>n,fromReference:n=>n},[Mt]:{transfer:ut,primaries:To,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Wo]:{transfer:bo,primaries:wo,toReference:n=>n.applyMatrix3(Yc),fromReference:n=>n.applyMatrix3(qc)},[gl]:{transfer:ut,primaries:wo,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Yc),fromReference:n=>n.applyMatrix3(qc).convertLinearToSRGB()}},$d=new Set([Kn,Wo]),st={enabled:!0,_workingColorSpace:Kn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!$d.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ir[e].toReference,s=Ir[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ir[n].primaries},getTransfer:function(n){return n===fn?bo:Ir[n].transfer}};function bs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function pa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Qi;class Mh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qi===void 0&&(Qi=lr("canvas")),Qi.width=e.width,Qi.height=e.height;const i=Qi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Qi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=lr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=bs(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(bs(t[i]/255)*255):t[i]=bs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Qd=0;class yh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=Ji(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ma(s[o].image)):r.push(ma(s[o]))}else r=ma(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function ma(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Mh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ep=0;class jt extends zs{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,i=Sn,s=Sn,r=hn,o=ar,a=En,l=li,c=jt.DEFAULT_ANISOTROPY,u=fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=Ji(),this.name="",this.source=new yh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(nr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Gi?Mt:fn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wi:e.x=e.x-Math.floor(e.x);break;case Sn:e.x=e.x<0?0:1;break;case Ka:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wi:e.y=e.y-Math.floor(e.y);break;case Sn:e.y=e.y<0?0:1;break;case Ka:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return nr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Mt?Gi:gh}set encoding(e){nr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Gi?Mt:fn}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=lh;jt.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,t=0,i=0,s=1){Nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,S=(p+1)/2,C=(d+1)/2,w=(u+f)/4,R=(h+v)/4,N=(g+m)/4;return x>S&&x>C?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=w/i,r=R/i):S>C?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=w/s,r=N/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=R/r,s=N/r),this.set(i,s,r,t),this}let E=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(h-v)/E,this.z=(f-u)/E,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tp extends zs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t);const s={width:e,height:t,depth:1};i.encoding!==void 0&&(nr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Gi?Mt:fn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new jt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new yh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bn extends tp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Sh extends jt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class np extends jt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mr{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==f||c!==p||u!==g){let m=1-a;const d=l*f+c*p+u*g+h*v,E=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const C=Math.sqrt(x),w=Math.atan2(C,d*E);m=Math.sin(m*w)/C,a=Math.sin(a*w)/C}const S=a*E;if(l=l*m+f*S,c=c*m+p*S,u=u*m+g*S,h=h*m+v*S,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-a*p,e[t+2]=c*g+u*p+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ga.copy(this).projectOnVector(e),this.sub(ga)}reflect(e){return this.sub(ga.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ga=new D,Jc=new Mr;class Zi{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,gn):gn.fromBufferAttribute(r,o),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Nr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Nr.copy(i.boundingBox)),Nr.applyMatrix4(e.matrixWorld),this.union(Nr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xs),Fr.subVectors(this.max,Xs),es.subVectors(e.a,Xs),ts.subVectors(e.b,Xs),ns.subVectors(e.c,Xs),$n.subVectors(ts,es),Qn.subVectors(ns,ts),Mi.subVectors(es,ns);let t=[0,-$n.z,$n.y,0,-Qn.z,Qn.y,0,-Mi.z,Mi.y,$n.z,0,-$n.x,Qn.z,0,-Qn.x,Mi.z,0,-Mi.x,-$n.y,$n.x,0,-Qn.y,Qn.x,0,-Mi.y,Mi.x,0];return!_a(t,es,ts,ns,Fr)||(t=[1,0,0,0,1,0,0,0,1],!_a(t,es,ts,ns,Fr))?!1:(Or.crossVectors($n,Qn),t=[Or.x,Or.y,Or.z],_a(t,es,ts,ns,Fr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fn=[new D,new D,new D,new D,new D,new D,new D,new D],gn=new D,Nr=new Zi,es=new D,ts=new D,ns=new D,$n=new D,Qn=new D,Mi=new D,Xs=new D,Fr=new D,Or=new D,yi=new D;function _a(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){yi.fromArray(n,r);const a=s.x*Math.abs(yi.x)+s.y*Math.abs(yi.y)+s.z*Math.abs(yi.z),l=e.dot(yi),c=t.dot(yi),u=i.dot(yi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const ip=new Zi,qs=new D,va=new D;class Ki{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ip.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qs.subVectors(e,this.center);const t=qs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(qs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(va.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qs.copy(e.center).add(va)),this.expandByPoint(qs.copy(e.center).sub(va))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const On=new D,xa=new D,Br=new D,ei=new D,Ma=new D,zr=new D,ya=new D;class Eh{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,On)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=On.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(On.copy(this.origin).addScaledVector(this.direction,t),On.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){xa.copy(e).add(t).multiplyScalar(.5),Br.copy(t).sub(e).normalize(),ei.copy(this.origin).sub(xa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Br),a=ei.dot(this.direction),l=-ei.dot(Br),c=ei.lengthSq(),u=Math.abs(1-o*o);let h,f,p,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const v=1/u;h*=v,f*=v,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(xa).addScaledVector(Br,f),p}intersectSphere(e,t){On.subVectors(e.center,this.origin);const i=On.dot(this.direction),s=On.dot(On)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,On)!==null}intersectTriangle(e,t,i,s,r){Ma.subVectors(t,e),zr.subVectors(i,e),ya.crossVectors(Ma,zr);let o=this.direction.dot(ya),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ei.subVectors(this.origin,e);const l=a*this.direction.dot(zr.crossVectors(ei,zr));if(l<0)return null;const c=a*this.direction.dot(Ma.cross(ei));if(c<0||l+c>o)return null;const u=-a*ei.dot(ya);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(e,t,i,s,r,o,a,l,c,u,h,f,p,g,v,m){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,f,p,g,v,m)}set(e,t,i,s,r,o,a,l,c,u,h,f,p,g,v,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/is.setFromMatrixColumn(e,0).length(),r=1/is.setFromMatrixColumn(e,1).length(),o=1/is.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,p=o*h,g=a*u,v=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,g=c*u,v=c*h;t[0]=f+v*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,g=c*u,v=c*h;t[0]=f-v*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*h,g=a*u,v=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+v,t[1]=l*h,t[5]=v*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-f*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-v*h}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+v,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sp,e,rp)}lookAt(e,t,i){const s=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),ti.crossVectors(i,en),ti.lengthSq()===0&&(Math.abs(i.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),ti.crossVectors(i,en)),ti.normalize(),Gr.crossVectors(en,ti),s[0]=ti.x,s[4]=Gr.x,s[8]=en.x,s[1]=ti.y,s[5]=Gr.y,s[9]=en.y,s[2]=ti.z,s[6]=Gr.z,s[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],g=i[2],v=i[6],m=i[10],d=i[14],E=i[3],x=i[7],S=i[11],C=i[15],w=s[0],R=s[4],N=s[8],y=s[12],b=s[1],I=s[5],G=s[9],Q=s[13],U=s[2],B=s[6],z=s[10],V=s[14],K=s[3],ee=s[7],te=s[11],oe=s[15];return r[0]=o*w+a*b+l*U+c*K,r[4]=o*R+a*I+l*B+c*ee,r[8]=o*N+a*G+l*z+c*te,r[12]=o*y+a*Q+l*V+c*oe,r[1]=u*w+h*b+f*U+p*K,r[5]=u*R+h*I+f*B+p*ee,r[9]=u*N+h*G+f*z+p*te,r[13]=u*y+h*Q+f*V+p*oe,r[2]=g*w+v*b+m*U+d*K,r[6]=g*R+v*I+m*B+d*ee,r[10]=g*N+v*G+m*z+d*te,r[14]=g*y+v*Q+m*V+d*oe,r[3]=E*w+x*b+S*U+C*K,r[7]=E*R+x*I+S*B+C*ee,r[11]=E*N+x*G+S*z+C*te,r[15]=E*y+x*Q+S*V+C*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],v=e[7],m=e[11],d=e[15];return g*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*p-i*l*p)+v*(+t*l*p-t*c*f+r*o*f-s*o*p+s*c*u-r*l*u)+m*(+t*c*h-t*a*p-r*o*h+i*o*p+r*a*u-i*c*u)+d*(-s*a*u-t*l*h+t*a*f+s*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],v=e[13],m=e[14],d=e[15],E=h*m*c-v*f*c+v*l*p-a*m*p-h*l*d+a*f*d,x=g*f*c-u*m*c-g*l*p+o*m*p+u*l*d-o*f*d,S=u*v*c-g*h*c+g*a*p-o*v*p-u*a*d+o*h*d,C=g*h*l-u*v*l-g*a*f+o*v*f+u*a*m-o*h*m,w=t*E+i*x+s*S+r*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=E*R,e[1]=(v*f*r-h*m*r-v*s*p+i*m*p+h*s*d-i*f*d)*R,e[2]=(a*m*r-v*l*r+v*s*c-i*m*c-a*s*d+i*l*d)*R,e[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*p-i*l*p)*R,e[4]=x*R,e[5]=(u*m*r-g*f*r+g*s*p-t*m*p-u*s*d+t*f*d)*R,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*d-t*l*d)*R,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*p+t*l*p)*R,e[8]=S*R,e[9]=(g*h*r-u*v*r-g*i*p+t*v*p+u*i*d-t*h*d)*R,e[10]=(o*v*r-g*a*r+g*i*c-t*v*c-o*i*d+t*a*d)*R,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*p-t*a*p)*R,e[12]=C*R,e[13]=(u*v*s-g*h*s+g*i*f-t*v*f-u*i*m+t*h*m)*R,e[14]=(g*a*s-o*v*s-g*i*l+t*v*l+o*i*m-t*a*m)*R,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*f+t*a*f)*R,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,p=r*u,g=r*h,v=o*u,m=o*h,d=a*h,E=l*c,x=l*u,S=l*h,C=i.x,w=i.y,R=i.z;return s[0]=(1-(v+d))*C,s[1]=(p+S)*C,s[2]=(g-x)*C,s[3]=0,s[4]=(p-S)*w,s[5]=(1-(f+d))*w,s[6]=(m+E)*w,s[7]=0,s[8]=(g+x)*R,s[9]=(m-E)*R,s[10]=(1-(f+v))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=is.set(s[0],s[1],s[2]).length();const o=is.set(s[4],s[5],s[6]).length(),a=is.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],_n.copy(this);const c=1/r,u=1/o,h=1/a;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=u,_n.elements[5]*=u,_n.elements[6]*=u,_n.elements[8]*=h,_n.elements[9]*=h,_n.elements[10]*=h,t.setFromRotationMatrix(_n),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Xn){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s);let p,g;if(a===Xn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ao)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Xn){const l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(o-r),f=(t+e)*c,p=(i+s)*u;let g,v;if(a===Xn)g=(o+r)*h,v=-2*h;else if(a===Ao)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const is=new D,_n=new dt,sp=new D(0,0,0),rp=new D(1,1,1),ti=new D,Gr=new D,en=new D,Zc=new dt,Kc=new Mr;class Xo{constructor(e=0,t=0,i=0,s=Xo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ut(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Zc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kc.setFromEuler(this),this.setFromQuaternion(Kc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xo.DEFAULT_ORDER="XYZ";class bh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let op=0;const jc=new D,ss=new Mr,Bn=new dt,Hr=new D,Ys=new D,ap=new D,lp=new Mr,$c=new D(1,0,0),Qc=new D(0,1,0),eu=new D(0,0,1),cp={type:"added"},up={type:"removed"};class ct extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=Ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ct.DEFAULT_UP.clone();const e=new D,t=new Xo,i=new Mr,s=new D(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new dt},normalMatrix:{value:new Qe}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis($c,e)}rotateY(e){return this.rotateOnAxis(Qc,e)}rotateZ(e){return this.rotateOnAxis(eu,e)}translateOnAxis(e,t){return jc.copy(e).applyQuaternion(this.quaternion),this.position.add(jc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($c,e)}translateY(e){return this.translateOnAxis(Qc,e)}translateZ(e){return this.translateOnAxis(eu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Hr.copy(e):Hr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Ys,Hr,this.up):Bn.lookAt(Hr,Ys,this.up),this.quaternion.setFromRotationMatrix(Bn),s&&(Bn.extractRotation(s.matrixWorld),ss.setFromRotationMatrix(Bn),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(cp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(up)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,e,ap),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,lp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}ct.DEFAULT_UP=new D(0,1,0);ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new D,zn=new D,Sa=new D,Gn=new D,rs=new D,os=new D,tu=new D,Ea=new D,ba=new D,Ta=new D;let kr=!1;class xn{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),vn.subVectors(e,t),s.cross(vn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){vn.subVectors(s,t),zn.subVectors(i,t),Sa.subVectors(e,t);const o=vn.dot(vn),a=vn.dot(zn),l=vn.dot(Sa),c=zn.dot(zn),u=zn.dot(Sa),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getUV(e,t,i,s,r,o,a,l){return kr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),kr=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gn.x),l.addScaledVector(o,Gn.y),l.addScaledVector(a,Gn.z),l)}static isFrontFacing(e,t,i,s){return vn.subVectors(i,t),zn.subVectors(e,t),vn.cross(zn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),vn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return kr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),kr=!0),xn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return xn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;rs.subVectors(s,i),os.subVectors(r,i),Ea.subVectors(e,i);const l=rs.dot(Ea),c=os.dot(Ea);if(l<=0&&c<=0)return t.copy(i);ba.subVectors(e,s);const u=rs.dot(ba),h=os.dot(ba);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(rs,o);Ta.subVectors(e,r);const p=rs.dot(Ta),g=os.dot(Ta);if(g>=0&&p<=g)return t.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(os,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return tu.subVectors(r,s),a=(h-u)/(h-u+(p-g)),t.copy(s).addScaledVector(tu,a);const d=1/(m+v+f);return o=v*d,a=f*d,t.copy(i).addScaledVector(rs,o).addScaledVector(os,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Th={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},Vr={h:0,s:0,l:0};function wa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ne{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=st.workingColorSpace){if(e=_l(e,1),t=Ut(t,0,1),i=Ut(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=wa(o,r,e+1/3),this.g=wa(o,r,e),this.b=wa(o,r,e-1/3)}return st.toWorkingColorSpace(this,s),this}setStyle(e,t=Mt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){const i=Th[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}copyLinearToSRGB(e){return this.r=pa(e.r),this.g=pa(e.g),this.b=pa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return st.fromWorkingColorSpace(zt.copy(this),e),Math.round(Ut(zt.r*255,0,255))*65536+Math.round(Ut(zt.g*255,0,255))*256+Math.round(Ut(zt.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(zt.copy(this),t);const i=zt.r,s=zt.g,r=zt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Mt){st.fromWorkingColorSpace(zt.copy(this),e);const t=zt.r,i=zt.g,s=zt.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ni),this.setHSL(ni.h+e,ni.s+t,ni.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ni),e.getHSL(Vr);const i=tr(ni.h,Vr.h,t),s=tr(ni.s,Vr.s,t),r=tr(ni.l,Vr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new Ne;Ne.NAMES=Th;let hp=0;class Gs extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Ji(),this.name="",this.type="Material",this.blending=Es,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ya,this.blendDst=Ja,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=So,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(i.blending=this.blending),this.side!==fi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ya&&(i.blendSrc=this.blendSrc),this.blendDst!==Ja&&(i.blendDst=this.blendDst),this.blendEquation!==Ri&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==So&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class on extends Gs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=oh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new D,Wr=new ce;class _t{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=kc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Wr.fromBufferAttribute(this,t),Wr.applyMatrix3(e),this.setXY(t,Wr.x,Wr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=gs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array),s=Wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array),s=Wt(s,this.array),r=Wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kc&&(e.usage=this.usage),e}}class wh extends _t{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ah extends _t{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class it extends _t{constructor(e,t,i){super(new Float32Array(e),t,i)}}let fp=0;const un=new dt,Aa=new ct,as=new D,tn=new Zi,Js=new Zi,Lt=new D;class pt extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=Ji(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xh(e)?Ah:wh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Qe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,i){return un.makeTranslation(e,t,i),this.applyMatrix4(un),this}scale(e,t,i){return un.makeScale(e,t,i),this.applyMatrix4(un),this}lookAt(e){return Aa.lookAt(e),Aa.updateMatrix(),this.applyMatrix4(Aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new it(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ki);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Js.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(tn.min,Js.min),tn.expandByPoint(Lt),Lt.addVectors(tn.max,Js.max),tn.expandByPoint(Lt)):(tn.expandByPoint(Js.min),tn.expandByPoint(Js.max))}tn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Lt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Lt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Lt.fromBufferAttribute(a,c),l&&(as.fromBufferAttribute(e,c),Lt.add(as)),s=Math.max(s,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _t(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let b=0;b<a;b++)c[b]=new D,u[b]=new D;const h=new D,f=new D,p=new D,g=new ce,v=new ce,m=new ce,d=new D,E=new D;function x(b,I,G){h.fromArray(s,b*3),f.fromArray(s,I*3),p.fromArray(s,G*3),g.fromArray(o,b*2),v.fromArray(o,I*2),m.fromArray(o,G*2),f.sub(h),p.sub(h),v.sub(g),m.sub(g);const Q=1/(v.x*m.y-m.x*v.y);isFinite(Q)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(Q),E.copy(p).multiplyScalar(v.x).addScaledVector(f,-m.x).multiplyScalar(Q),c[b].add(d),c[I].add(d),c[G].add(d),u[b].add(E),u[I].add(E),u[G].add(E))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let b=0,I=S.length;b<I;++b){const G=S[b],Q=G.start,U=G.count;for(let B=Q,z=Q+U;B<z;B+=3)x(i[B+0],i[B+1],i[B+2])}const C=new D,w=new D,R=new D,N=new D;function y(b){R.fromArray(r,b*3),N.copy(R);const I=c[b];C.copy(I),C.sub(R.multiplyScalar(R.dot(I))).normalize(),w.crossVectors(N,I);const Q=w.dot(u[b])<0?-1:1;l[b*4]=C.x,l[b*4+1]=C.y,l[b*4+2]=C.z,l[b*4+3]=Q}for(let b=0,I=S.length;b<I;++b){const G=S[b],Q=G.start,U=G.count;for(let B=Q,z=Q+U;B<z;B+=3)y(i[B+0]),y(i[B+1]),y(i[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _t(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,u=new D,h=new D;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new _t(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pt,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nu=new dt,Si=new Eh,Xr=new Ki,iu=new D,ls=new D,cs=new D,us=new D,Ra=new D,qr=new D,Yr=new ce,Jr=new ce,Zr=new ce,su=new D,ru=new D,ou=new D,Kr=new D,jr=new D;class xe extends ct{constructor(e=new pt,t=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){qr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Ra.fromBufferAttribute(h,e),o?qr.addScaledVector(Ra,u):qr.addScaledVector(Ra.sub(t),u))}t.add(qr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xr.copy(i.boundingSphere),Xr.applyMatrix4(r),Si.copy(e.ray).recast(e.near),!(Xr.containsPoint(Si.origin)===!1&&(Si.intersectSphere(Xr,iu)===null||Si.origin.distanceToSquared(iu)>(e.far-e.near)**2))&&(nu.copy(r).invert(),Si.copy(e.ray).applyMatrix4(nu),!(i.boundingBox!==null&&Si.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Si)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=o[m.materialIndex],E=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=E,C=x;S<C;S+=3){const w=a.getX(S),R=a.getX(S+1),N=a.getX(S+2);s=$r(this,d,e,i,c,u,h,w,R,N),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const E=a.getX(m),x=a.getX(m+1),S=a.getX(m+2);s=$r(this,o,e,i,c,u,h,E,x,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=o[m.materialIndex],E=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=E,C=x;S<C;S+=3){const w=S,R=S+1,N=S+2;s=$r(this,d,e,i,c,u,h,w,R,N),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const E=m,x=m+1,S=m+2;s=$r(this,o,e,i,c,u,h,E,x,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function dp(n,e,t,i,s,r,o,a){let l;if(e.side===Kt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===fi,a),l===null)return null;jr.copy(a),jr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(jr);return c<t.near||c>t.far?null:{distance:c,point:jr.clone(),object:n}}function $r(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,ls),n.getVertexPosition(l,cs),n.getVertexPosition(c,us);const u=dp(n,e,t,i,ls,cs,us,Kr);if(u){s&&(Yr.fromBufferAttribute(s,a),Jr.fromBufferAttribute(s,l),Zr.fromBufferAttribute(s,c),u.uv=xn.getInterpolation(Kr,ls,cs,us,Yr,Jr,Zr,new ce)),r&&(Yr.fromBufferAttribute(r,a),Jr.fromBufferAttribute(r,l),Zr.fromBufferAttribute(r,c),u.uv1=xn.getInterpolation(Kr,ls,cs,us,Yr,Jr,Zr,new ce),u.uv2=u.uv1),o&&(su.fromBufferAttribute(o,a),ru.fromBufferAttribute(o,l),ou.fromBufferAttribute(o,c),u.normal=xn.getInterpolation(Kr,ls,cs,us,su,ru,ou,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new D,materialIndex:0};xn.getNormal(ls,cs,us,h.normal),u.face=h}return u}class mn extends pt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(u,3)),this.setAttribute("uv",new it(h,2));function g(v,m,d,E,x,S,C,w,R,N,y){const b=S/R,I=C/N,G=S/2,Q=C/2,U=w/2,B=R+1,z=N+1;let V=0,K=0;const ee=new D;for(let te=0;te<z;te++){const oe=te*I-Q;for(let he=0;he<B;he++){const q=he*b-G;ee[v]=q*E,ee[m]=oe*x,ee[d]=U,c.push(ee.x,ee.y,ee.z),ee[v]=0,ee[m]=0,ee[d]=w>0?1:-1,u.push(ee.x,ee.y,ee.z),h.push(he/R),h.push(1-te/N),V+=1}}for(let te=0;te<N;te++)for(let oe=0;oe<R;oe++){const he=f+oe+B*te,q=f+oe+B*(te+1),ie=f+(oe+1)+B*(te+1),me=f+(oe+1)+B*te;l.push(he,q,me),l.push(q,ie,me),K+=6}a.addGroup(p,K,y),p+=K,f+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ls(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Xt(n){const e={};for(let t=0;t<n.length;t++){const i=Ls(n[t]);for(const s in i)e[s]=i[s]}return e}function pp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Rh(n){return n.getRenderTarget()===null?n.outputColorSpace:st.workingColorSpace}const Co={clone:Ls,merge:Xt};var mp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class an extends Gs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mp,this.fragmentShader=gp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=pp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ch extends ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=Xn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class rn extends Ch{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(er*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const hs=-90,fs=1;class _p extends ct{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new rn(hs,fs,e,t);s.layers=this.layers,this.add(s);const r=new rn(hs,fs,e,t);r.layers=this.layers,this.add(r);const o=new rn(hs,fs,e,t);o.layers=this.layers,this.add(o);const a=new rn(hs,fs,e,t);a.layers=this.layers,this.add(a);const l=new rn(hs,fs,e,t);l.layers=this.layers,this.add(l);const c=new rn(hs,fs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Xn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ao)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Ph extends jt{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:As,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vp extends bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(nr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Gi?Mt:fn),this.texture=new Ph(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:hn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new mn(5,5,5),r=new an({name:"CubemapFromEquirect",uniforms:Ls(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Kt,blending:Yn});r.uniforms.tEquirect.value=t;const o=new xe(s,r),a=t.minFilter;return t.minFilter===ar&&(t.minFilter=hn),new _p(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const Ca=new D,xp=new D,Mp=new Qe;class Ti{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Ca.subVectors(i,t).cross(xp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ca),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Mp.getNormalMatrix(e),s=this.coplanarPoint(Ca).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ei=new Ki,Qr=new D;class vl{constructor(e=new Ti,t=new Ti,i=new Ti,s=new Ti,r=new Ti,o=new Ti){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Xn){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],p=s[8],g=s[9],v=s[10],m=s[11],d=s[12],E=s[13],x=s[14],S=s[15];if(i[0].setComponents(l-r,f-c,m-p,S-d).normalize(),i[1].setComponents(l+r,f+c,m+p,S+d).normalize(),i[2].setComponents(l+o,f+u,m+g,S+E).normalize(),i[3].setComponents(l-o,f-u,m-g,S-E).normalize(),i[4].setComponents(l-a,f-h,m-v,S-x).normalize(),t===Xn)i[5].setComponents(l+a,f+h,m+v,S+x).normalize();else if(t===Ao)i[5].setComponents(a,h,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(e){return Ei.center.set(0,0,0),Ei.radius=.7071067811865476,Ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Qr.x=s.normal.x>0?e.max.x:e.min.x,Qr.y=s.normal.y>0?e.max.y:e.min.y,Qr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Qr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Lh(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function yp(n,e){const t=e.isWebGL2,i=new WeakMap;function s(c,u){const h=c.array,f=c.usage,p=h.byteLength,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,h,f),c.onUploadCallback();let v;if(h instanceof Float32Array)v=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=n.SHORT;else if(h instanceof Uint32Array)v=n.UNSIGNED_INT;else if(h instanceof Int32Array)v=n.INT;else if(h instanceof Int8Array)v=n.BYTE;else if(h instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,u,h){const f=u.array,p=u._updateRange,g=u.updateRanges;if(n.bindBuffer(h,c),p.count===-1&&g.length===0&&n.bufferSubData(h,0,f),g.length!==0){for(let v=0,m=g.length;v<m;v++){const d=g[v];t?n.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):n.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):n.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,s(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}class Un extends pt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,p=[],g=[],v=[],m=[];for(let d=0;d<u;d++){const E=d*f-o;for(let x=0;x<c;x++){const S=x*h-r;g.push(S,-E,0),v.push(0,0,1),m.push(x/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<a;E++){const x=E+c*d,S=E+c*(d+1),C=E+1+c*(d+1),w=E+1+c*d;p.push(x,S,w),p.push(S,C,w)}this.setIndex(p),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(v,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Un(e.width,e.height,e.widthSegments,e.heightSegments)}}var Sp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ep=`#ifdef USE_ALPHAHASH
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
#endif`,bp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ap=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rp=`#ifdef USE_AOMAP
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
#endif`,Cp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pp=`#ifdef USE_BATCHING
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
#endif`,Lp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Up=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ip=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Np=`#ifdef USE_IRIDESCENCE
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
#endif`,Fp=`#ifdef USE_BUMPMAP
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
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Xp=`#define PI 3.141592653589793
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
} // validated`,qp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Yp=`vec3 transformedNormal = objectNormal;
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
#endif`,Jp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$p="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qp=`
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
}`,em=`#ifdef USE_ENVMAP
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
#endif`,tm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nm=`#ifdef USE_ENVMAP
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
#endif`,im=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sm=`#ifdef USE_ENVMAP
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
#endif`,rm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,om=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,am=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cm=`#ifdef USE_GRADIENTMAP
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
}`,um=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,hm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pm=`uniform bool receiveShadow;
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
#endif`,mm=`#ifdef USE_ENVMAP
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
#endif`,gm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mm=`PhysicalMaterial material;
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
#endif`,ym=`struct PhysicalMaterial {
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
}`,Sm=`
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
#endif`,Em=`#if defined( RE_IndirectDiffuse )
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
#endif`,bm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Am=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Rm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Cm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Um=`#if defined( USE_POINTS_UV )
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
#endif`,Dm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Im=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fm=`#ifdef USE_MORPHNORMALS
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
#endif`,Om=`#ifdef USE_MORPHTARGETS
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
#endif`,Bm=`#ifdef USE_MORPHTARGETS
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
#endif`,zm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wm=`#ifdef USE_NORMALMAP
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
#endif`,Xm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ym=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Km=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$m=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,e0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,t0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,n0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,i0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,s0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,r0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,o0=`float getShadowMask() {
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
}`,a0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,l0=`#ifdef USE_SKINNING
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
#endif`,c0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,u0=`#ifdef USE_SKINNING
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
#endif`,h0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,f0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,d0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,p0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,m0=`#ifdef USE_TRANSMISSION
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
#endif`,g0=`#ifdef USE_TRANSMISSION
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
#endif`,_0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const y0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,S0=`uniform sampler2D t2D;
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
}`,E0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,T0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A0=`#include <common>
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
}`,R0=`#if DEPTH_PACKING == 3200
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
}`,C0=`#define DISTANCE
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
}`,P0=`#define DISTANCE
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
}`,L0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,U0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D0=`uniform float scale;
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
}`,I0=`uniform vec3 diffuse;
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
}`,N0=`#include <common>
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
}`,F0=`uniform vec3 diffuse;
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
}`,O0=`#define LAMBERT
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
}`,B0=`#define LAMBERT
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
}`,z0=`#define MATCAP
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
}`,G0=`#define MATCAP
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
}`,H0=`#define NORMAL
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
}`,k0=`#define NORMAL
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
}`,V0=`#define PHONG
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
}`,W0=`#define PHONG
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
}`,X0=`#define STANDARD
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
}`,q0=`#define STANDARD
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
}`,Y0=`#define TOON
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
}`,J0=`#define TOON
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
}`,Z0=`uniform float size;
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
}`,K0=`uniform vec3 diffuse;
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
}`,j0=`#include <common>
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
}`,$0=`uniform vec3 color;
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
}`,Q0=`uniform float rotation;
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
}`,eg=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:Sp,alphahash_pars_fragment:Ep,alphamap_fragment:bp,alphamap_pars_fragment:Tp,alphatest_fragment:wp,alphatest_pars_fragment:Ap,aomap_fragment:Rp,aomap_pars_fragment:Cp,batching_pars_vertex:Pp,batching_vertex:Lp,begin_vertex:Up,beginnormal_vertex:Dp,bsdfs:Ip,iridescence_fragment:Np,bumpmap_pars_fragment:Fp,clipping_planes_fragment:Op,clipping_planes_pars_fragment:Bp,clipping_planes_pars_vertex:zp,clipping_planes_vertex:Gp,color_fragment:Hp,color_pars_fragment:kp,color_pars_vertex:Vp,color_vertex:Wp,common:Xp,cube_uv_reflection_fragment:qp,defaultnormal_vertex:Yp,displacementmap_pars_vertex:Jp,displacementmap_vertex:Zp,emissivemap_fragment:Kp,emissivemap_pars_fragment:jp,colorspace_fragment:$p,colorspace_pars_fragment:Qp,envmap_fragment:em,envmap_common_pars_fragment:tm,envmap_pars_fragment:nm,envmap_pars_vertex:im,envmap_physical_pars_fragment:mm,envmap_vertex:sm,fog_vertex:rm,fog_pars_vertex:om,fog_fragment:am,fog_pars_fragment:lm,gradientmap_pars_fragment:cm,lightmap_fragment:um,lightmap_pars_fragment:hm,lights_lambert_fragment:fm,lights_lambert_pars_fragment:dm,lights_pars_begin:pm,lights_toon_fragment:gm,lights_toon_pars_fragment:_m,lights_phong_fragment:vm,lights_phong_pars_fragment:xm,lights_physical_fragment:Mm,lights_physical_pars_fragment:ym,lights_fragment_begin:Sm,lights_fragment_maps:Em,lights_fragment_end:bm,logdepthbuf_fragment:Tm,logdepthbuf_pars_fragment:wm,logdepthbuf_pars_vertex:Am,logdepthbuf_vertex:Rm,map_fragment:Cm,map_pars_fragment:Pm,map_particle_fragment:Lm,map_particle_pars_fragment:Um,metalnessmap_fragment:Dm,metalnessmap_pars_fragment:Im,morphcolor_vertex:Nm,morphnormal_vertex:Fm,morphtarget_pars_vertex:Om,morphtarget_vertex:Bm,normal_fragment_begin:zm,normal_fragment_maps:Gm,normal_pars_fragment:Hm,normal_pars_vertex:km,normal_vertex:Vm,normalmap_pars_fragment:Wm,clearcoat_normal_fragment_begin:Xm,clearcoat_normal_fragment_maps:qm,clearcoat_pars_fragment:Ym,iridescence_pars_fragment:Jm,opaque_fragment:Zm,packing:Km,premultiplied_alpha_fragment:jm,project_vertex:$m,dithering_fragment:Qm,dithering_pars_fragment:e0,roughnessmap_fragment:t0,roughnessmap_pars_fragment:n0,shadowmap_pars_fragment:i0,shadowmap_pars_vertex:s0,shadowmap_vertex:r0,shadowmask_pars_fragment:o0,skinbase_vertex:a0,skinning_pars_vertex:l0,skinning_vertex:c0,skinnormal_vertex:u0,specularmap_fragment:h0,specularmap_pars_fragment:f0,tonemapping_fragment:d0,tonemapping_pars_fragment:p0,transmission_fragment:m0,transmission_pars_fragment:g0,uv_pars_fragment:_0,uv_pars_vertex:v0,uv_vertex:x0,worldpos_vertex:M0,background_vert:y0,background_frag:S0,backgroundCube_vert:E0,backgroundCube_frag:b0,cube_vert:T0,cube_frag:w0,depth_vert:A0,depth_frag:R0,distanceRGBA_vert:C0,distanceRGBA_frag:P0,equirect_vert:L0,equirect_frag:U0,linedashed_vert:D0,linedashed_frag:I0,meshbasic_vert:N0,meshbasic_frag:F0,meshlambert_vert:O0,meshlambert_frag:B0,meshmatcap_vert:z0,meshmatcap_frag:G0,meshnormal_vert:H0,meshnormal_frag:k0,meshphong_vert:V0,meshphong_frag:W0,meshphysical_vert:X0,meshphysical_frag:q0,meshtoon_vert:Y0,meshtoon_frag:J0,points_vert:Z0,points_frag:K0,shadow_vert:j0,shadow_frag:$0,sprite_vert:Q0,sprite_frag:eg},ge={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Cn={basic:{uniforms:Xt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Xt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Xt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Xt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Xt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Xt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Xt([ge.points,ge.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Xt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Xt([ge.common,ge.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Xt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Xt([ge.sprite,ge.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Xt([ge.common,ge.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Xt([ge.lights,ge.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Cn.physical={uniforms:Xt([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const eo={r:0,b:0,g:0};function tg(n,e,t,i,s,r,o){const a=new Ne(0);let l=r===!0?0:1,c,u,h=null,f=0,p=null;function g(m,d){let E=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?t:e).get(x)),x===null?v(a,l):x&&x.isColor&&(v(x,1),E=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Vo)?(u===void 0&&(u=new xe(new mn(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:Ls(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=st.getTransfer(x.colorSpace)!==ut,(h!==x||f!==x.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new xe(new Un(2,2),new an({name:"BackgroundMaterial",uniforms:Ls(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=st.getTransfer(x.colorSpace)!==ut,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,d){m.getRGB(eo,Rh(n)),i.buffers.color.setClear(eo.r,eo.g,eo.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(a,l)},render:g}}function ng(n,e,t,i){const s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=m(null);let c=l,u=!1;function h(U,B,z,V,K){let ee=!1;if(o){const te=v(V,z,B);c!==te&&(c=te,p(c.object)),ee=d(U,V,z,K),ee&&E(U,V,z,K)}else{const te=B.wireframe===!0;(c.geometry!==V.id||c.program!==z.id||c.wireframe!==te)&&(c.geometry=V.id,c.program=z.id,c.wireframe=te,ee=!0)}K!==null&&t.update(K,n.ELEMENT_ARRAY_BUFFER),(ee||u)&&(u=!1,N(U,B,z,V),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function p(U){return i.isWebGL2?n.bindVertexArray(U):r.bindVertexArrayOES(U)}function g(U){return i.isWebGL2?n.deleteVertexArray(U):r.deleteVertexArrayOES(U)}function v(U,B,z){const V=z.wireframe===!0;let K=a[U.id];K===void 0&&(K={},a[U.id]=K);let ee=K[B.id];ee===void 0&&(ee={},K[B.id]=ee);let te=ee[V];return te===void 0&&(te=m(f()),ee[V]=te),te}function m(U){const B=[],z=[],V=[];for(let K=0;K<s;K++)B[K]=0,z[K]=0,V[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:z,attributeDivisors:V,object:U,attributes:{},index:null}}function d(U,B,z,V){const K=c.attributes,ee=B.attributes;let te=0;const oe=z.getAttributes();for(const he in oe)if(oe[he].location>=0){const ie=K[he];let me=ee[he];if(me===void 0&&(he==="instanceMatrix"&&U.instanceMatrix&&(me=U.instanceMatrix),he==="instanceColor"&&U.instanceColor&&(me=U.instanceColor)),ie===void 0||ie.attribute!==me||me&&ie.data!==me.data)return!0;te++}return c.attributesNum!==te||c.index!==V}function E(U,B,z,V){const K={},ee=B.attributes;let te=0;const oe=z.getAttributes();for(const he in oe)if(oe[he].location>=0){let ie=ee[he];ie===void 0&&(he==="instanceMatrix"&&U.instanceMatrix&&(ie=U.instanceMatrix),he==="instanceColor"&&U.instanceColor&&(ie=U.instanceColor));const me={};me.attribute=ie,ie&&ie.data&&(me.data=ie.data),K[he]=me,te++}c.attributes=K,c.attributesNum=te,c.index=V}function x(){const U=c.newAttributes;for(let B=0,z=U.length;B<z;B++)U[B]=0}function S(U){C(U,0)}function C(U,B){const z=c.newAttributes,V=c.enabledAttributes,K=c.attributeDivisors;z[U]=1,V[U]===0&&(n.enableVertexAttribArray(U),V[U]=1),K[U]!==B&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,B),K[U]=B)}function w(){const U=c.newAttributes,B=c.enabledAttributes;for(let z=0,V=B.length;z<V;z++)B[z]!==U[z]&&(n.disableVertexAttribArray(z),B[z]=0)}function R(U,B,z,V,K,ee,te){te===!0?n.vertexAttribIPointer(U,B,z,K,ee):n.vertexAttribPointer(U,B,z,V,K,ee)}function N(U,B,z,V){if(i.isWebGL2===!1&&(U.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const K=V.attributes,ee=z.getAttributes(),te=B.defaultAttributeValues;for(const oe in ee){const he=ee[oe];if(he.location>=0){let q=K[oe];if(q===void 0&&(oe==="instanceMatrix"&&U.instanceMatrix&&(q=U.instanceMatrix),oe==="instanceColor"&&U.instanceColor&&(q=U.instanceColor)),q!==void 0){const ie=q.normalized,me=q.itemSize,Re=t.get(q);if(Re===void 0)continue;const ve=Re.buffer,ze=Re.type,Ve=Re.bytesPerElement,Ce=i.isWebGL2===!0&&(ze===n.INT||ze===n.UNSIGNED_INT||q.gpuType===ch);if(q.isInterleavedBufferAttribute){const We=q.data,L=We.stride,fe=q.offset;if(We.isInstancedInterleavedBuffer){for(let J=0;J<he.locationSize;J++)C(he.location+J,We.meshPerAttribute);U.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=We.meshPerAttribute*We.count)}else for(let J=0;J<he.locationSize;J++)S(he.location+J);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let J=0;J<he.locationSize;J++)R(he.location+J,me/he.locationSize,ze,ie,L*Ve,(fe+me/he.locationSize*J)*Ve,Ce)}else{if(q.isInstancedBufferAttribute){for(let We=0;We<he.locationSize;We++)C(he.location+We,q.meshPerAttribute);U.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let We=0;We<he.locationSize;We++)S(he.location+We);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let We=0;We<he.locationSize;We++)R(he.location+We,me/he.locationSize,ze,ie,me*Ve,me/he.locationSize*We*Ve,Ce)}}else if(te!==void 0){const ie=te[oe];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(he.location,ie);break;case 3:n.vertexAttrib3fv(he.location,ie);break;case 4:n.vertexAttrib4fv(he.location,ie);break;default:n.vertexAttrib1fv(he.location,ie)}}}}w()}function y(){G();for(const U in a){const B=a[U];for(const z in B){const V=B[z];for(const K in V)g(V[K].object),delete V[K];delete B[z]}delete a[U]}}function b(U){if(a[U.id]===void 0)return;const B=a[U.id];for(const z in B){const V=B[z];for(const K in V)g(V[K].object),delete V[K];delete B[z]}delete a[U.id]}function I(U){for(const B in a){const z=a[B];if(z[U.id]===void 0)continue;const V=z[U.id];for(const K in V)g(V[K].object),delete V[K];delete z[U.id]}}function G(){Q(),u=!0,c!==l&&(c=l,p(c.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:G,resetDefaultState:Q,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:S,disableUnusedAttributes:w}}function ig(n,e,t,i){const s=i.isWebGL2;let r;function o(u){r=u}function a(u,h){n.drawArrays(r,u,h),t.update(h,r,1)}function l(u,h,f){if(f===0)return;let p,g;if(s)p=n,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,u,h,f),t.update(h,r,f)}function c(u,h,f){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f;g++)this.render(u[g],h[g]);else{p.multiDrawArraysWEBGL(r,u,0,h,0,f);let g=0;for(let v=0;v<f;v++)g+=h[v];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function sg(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,S=o||e.has("OES_texture_float"),C=x&&S,w=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:E,vertexTextures:x,floatFragmentTextures:S,floatVertexTextures:C,maxSamples:w}}function rg(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Ti,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||s;return s=f,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const E=r?0:i,x=E*4;let S=d.clippingState||null;l.value=S,S=u(g,f,x,p);for(let C=0;C!==x;++C)S[C]=t[C];d.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const d=p+v*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,S=p;x!==v;++x,S+=4)o.copy(h[x]).applyMatrix4(E,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function og(n){let e=new WeakMap;function t(o,a){return a===Eo?o.mapping=As:a===Za&&(o.mapping=Rs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Eo||a===Za)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new vp(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class xl extends Ch{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const _s=4,au=[.125,.215,.35,.446,.526,.582],Ci=20,Pa=new xl,lu=new Ne;let La=null,Ua=0,Da=0;const wi=(1+Math.sqrt(5))/2,ds=1/wi,cu=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,wi,ds),new D(0,wi,-ds),new D(ds,0,wi),new D(-ds,0,wi),new D(wi,ds,0),new D(-wi,ds,0)];class uu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){La=this._renderer.getRenderTarget(),Ua=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(La,Ua,Da),e.scissorTest=!1,to(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===As||e.mapping===Rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),La=this._renderer.getRenderTarget(),Ua=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:Jn,format:En,colorSpace:Kn,depthBuffer:!1},s=hu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hu(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ag(r)),this._blurMaterial=lg(r,e,t)}return s}_compileMaterial(e){const t=new xe(this._lodPlanes[0],e);this._renderer.compile(t,Pa)}_sceneToCubeUV(e,t,i,s){const a=new rn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(lu),u.toneMapping=ai,u.autoClear=!1;const p=new on({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),g=new xe(new mn,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(lu),v=!0);for(let d=0;d<6;d++){const E=d%3;E===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):E===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const x=this._cubeSize;to(s,E*x,d>2?x:0,x,x),u.setRenderTarget(s),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===As||e.mapping===Rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=du()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new xe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;to(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Pa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=cu[(s-1)%cu.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new xe(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ci-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):Ci;m>Ci&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ci}`);const d=[];let E=0;for(let R=0;R<Ci;++R){const N=R/v,y=Math.exp(-N*N/2);d.push(y),R===0?E+=y:R<m&&(E+=2*y)}for(let R=0;R<d.length;R++)d[R]=d[R]/E;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const S=this._sizeLods[s],C=3*S*(s>x-_s?s-x+_s:0),w=4*(this._cubeSize-S);to(t,C,w,3*S,2*S),l.setRenderTarget(t),l.render(h,Pa)}}function ag(n){const e=[],t=[],i=[];let s=n;const r=n-_s+1+au.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-_s?l=au[o-n+_s-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,v=3,m=2,d=1,E=new Float32Array(v*g*p),x=new Float32Array(m*g*p),S=new Float32Array(d*g*p);for(let w=0;w<p;w++){const R=w%3*2/3-1,N=w>2?0:-1,y=[R,N,0,R+2/3,N,0,R+2/3,N+1,0,R,N,0,R+2/3,N+1,0,R,N+1,0];E.set(y,v*g*w),x.set(f,m*g*w);const b=[w,w,w,w,w,w];S.set(b,d*g*w)}const C=new pt;C.setAttribute("position",new _t(E,v)),C.setAttribute("uv",new _t(x,m)),C.setAttribute("faceIndex",new _t(S,d)),e.push(C),s>_s&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function hu(n,e,t){const i=new bn(n,e,t);return i.texture.mapping=Vo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function to(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function lg(n,e,t){const i=new Float32Array(Ci),s=new D(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:Ci,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ml(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function fu(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ml(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function du(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Ml(){return`

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
	`}function cg(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Eo||l===Za,u=l===As||l===Rs;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new uu(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&s(h)){t===null&&(t=new uu(n));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function ug(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function hg(n,e,t,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let m=0,d=v.length;m<d;m++)e.remove(v[m])}f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const v=p[g];for(let m=0,d=v.length;m<d;m++)e.update(v[m],n.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let v=0;if(p!==null){const E=p.array;v=p.version;for(let x=0,S=E.length;x<S;x+=3){const C=E[x+0],w=E[x+1],R=E[x+2];f.push(C,w,w,R,R,C)}}else if(g!==void 0){const E=g.array;v=g.version;for(let x=0,S=E.length/3-1;x<S;x+=3){const C=x+0,w=x+1,R=x+2;f.push(C,w,w,R,R,C)}}else return;const m=new(xh(f)?Ah:wh)(f,1);m.version=v;const d=r.get(h);d&&e.remove(d),r.set(h,m)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function fg(n,e,t,i){const s=i.isWebGL2;let r;function o(p){r=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function u(p,g){n.drawElements(r,g,a,p*l),t.update(g,r,1)}function h(p,g,v){if(v===0)return;let m,d;if(s)m=n,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,g,a,p*l,v),t.update(g,r,v)}function f(p,g,v){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<v;d++)this.render(p[d]/l,g[d]);else{m.multiDrawElementsWEBGL(r,g,0,a,p,0,v);let d=0;for(let E=0;E<v;E++)d+=g[E];t.update(d,r,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function dg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function pg(n,e){return n[0]-e[0]}function mg(n,e){return Math.abs(e[1])-Math.abs(n[1])}function gg(n,e,t){const i={},s=new Float32Array(8),r=new WeakMap,o=new Nt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=g!==void 0?g.length:0;let m=r.get(u);if(m===void 0||m.count!==v){let B=function(){Q.dispose(),r.delete(u),u.removeEventListener("dispose",B)};var p=B;m!==void 0&&m.texture.dispose();const x=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],N=u.morphAttributes.color||[];let y=0;x===!0&&(y=1),S===!0&&(y=2),C===!0&&(y=3);let b=u.attributes.position.count*y,I=1;b>e.maxTextureSize&&(I=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const G=new Float32Array(b*I*4*v),Q=new Sh(G,b,I,v);Q.type=ri,Q.needsUpdate=!0;const U=y*4;for(let z=0;z<v;z++){const V=w[z],K=R[z],ee=N[z],te=b*I*4*z;for(let oe=0;oe<V.count;oe++){const he=oe*U;x===!0&&(o.fromBufferAttribute(V,oe),G[te+he+0]=o.x,G[te+he+1]=o.y,G[te+he+2]=o.z,G[te+he+3]=0),S===!0&&(o.fromBufferAttribute(K,oe),G[te+he+4]=o.x,G[te+he+5]=o.y,G[te+he+6]=o.z,G[te+he+7]=0),C===!0&&(o.fromBufferAttribute(ee,oe),G[te+he+8]=o.x,G[te+he+9]=o.y,G[te+he+10]=o.z,G[te+he+11]=ee.itemSize===4?o.w:1)}}m={count:v,texture:Q,size:new ce(b,I)},r.set(u,m),u.addEventListener("dispose",B)}let d=0;for(let x=0;x<f.length;x++)d+=f[x];const E=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(n,"morphTargetBaseInfluence",E),h.getUniforms().setValue(n,"morphTargetInfluences",f),h.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let v=i[u.id];if(v===void 0||v.length!==g){v=[];for(let S=0;S<g;S++)v[S]=[S,0];i[u.id]=v}for(let S=0;S<g;S++){const C=v[S];C[0]=S,C[1]=f[S]}v.sort(mg);for(let S=0;S<8;S++)S<g&&v[S][1]?(a[S][0]=v[S][0],a[S][1]=v[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(pg);const m=u.morphAttributes.position,d=u.morphAttributes.normal;let E=0;for(let S=0;S<8;S++){const C=a[S],w=C[0],R=C[1];w!==Number.MAX_SAFE_INTEGER&&R?(m&&u.getAttribute("morphTarget"+S)!==m[w]&&u.setAttribute("morphTarget"+S,m[w]),d&&u.getAttribute("morphNormal"+S)!==d[w]&&u.setAttribute("morphNormal"+S,d[w]),s[S]=R,E+=R):(m&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),d&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),s[S]=0)}const x=u.morphTargetsRelative?1:1-E;h.getUniforms().setValue(n,"morphTargetBaseInfluence",x),h.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function _g(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class Uh extends jt{constructor(e,t,i,s,r,o,a,l,c,u){if(u=u!==void 0?u:zi,u!==zi&&u!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===zi&&(i=si),i===void 0&&u===Cs&&(i=Bi),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Jt,this.minFilter=l!==void 0?l:Jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Dh=new jt,Ih=new Uh(1,1);Ih.compareFunction=vh;const Nh=new Sh,Fh=new np,Oh=new Ph,pu=[],mu=[],gu=new Float32Array(16),_u=new Float32Array(9),vu=new Float32Array(4);function Hs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=pu[s];if(r===void 0&&(r=new Float32Array(s),pu[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function At(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Rt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function qo(n,e){let t=mu[e];t===void 0&&(t=new Int32Array(e),mu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function vg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function xg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2fv(this.addr,e),Rt(t,e)}}function Mg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;n.uniform3fv(this.addr,e),Rt(t,e)}}function yg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4fv(this.addr,e),Rt(t,e)}}function Sg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,i))return;vu.set(i),n.uniformMatrix2fv(this.addr,!1,vu),Rt(t,i)}}function Eg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,i))return;_u.set(i),n.uniformMatrix3fv(this.addr,!1,_u),Rt(t,i)}}function bg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,i))return;gu.set(i),n.uniformMatrix4fv(this.addr,!1,gu),Rt(t,i)}}function Tg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function wg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2iv(this.addr,e),Rt(t,e)}}function Ag(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3iv(this.addr,e),Rt(t,e)}}function Rg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4iv(this.addr,e),Rt(t,e)}}function Cg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Pg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2uiv(this.addr,e),Rt(t,e)}}function Lg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3uiv(this.addr,e),Rt(t,e)}}function Ug(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4uiv(this.addr,e),Rt(t,e)}}function Dg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);const r=this.type===n.SAMPLER_2D_SHADOW?Ih:Dh;t.setTexture2D(e||r,s)}function Ig(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Fh,s)}function Ng(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Oh,s)}function Fg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Nh,s)}function Og(n){switch(n){case 5126:return vg;case 35664:return xg;case 35665:return Mg;case 35666:return yg;case 35674:return Sg;case 35675:return Eg;case 35676:return bg;case 5124:case 35670:return Tg;case 35667:case 35671:return wg;case 35668:case 35672:return Ag;case 35669:case 35673:return Rg;case 5125:return Cg;case 36294:return Pg;case 36295:return Lg;case 36296:return Ug;case 35678:case 36198:case 36298:case 36306:case 35682:return Dg;case 35679:case 36299:case 36307:return Ig;case 35680:case 36300:case 36308:case 36293:return Ng;case 36289:case 36303:case 36311:case 36292:return Fg}}function Bg(n,e){n.uniform1fv(this.addr,e)}function zg(n,e){const t=Hs(e,this.size,2);n.uniform2fv(this.addr,t)}function Gg(n,e){const t=Hs(e,this.size,3);n.uniform3fv(this.addr,t)}function Hg(n,e){const t=Hs(e,this.size,4);n.uniform4fv(this.addr,t)}function kg(n,e){const t=Hs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Vg(n,e){const t=Hs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Wg(n,e){const t=Hs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Xg(n,e){n.uniform1iv(this.addr,e)}function qg(n,e){n.uniform2iv(this.addr,e)}function Yg(n,e){n.uniform3iv(this.addr,e)}function Jg(n,e){n.uniform4iv(this.addr,e)}function Zg(n,e){n.uniform1uiv(this.addr,e)}function Kg(n,e){n.uniform2uiv(this.addr,e)}function jg(n,e){n.uniform3uiv(this.addr,e)}function $g(n,e){n.uniform4uiv(this.addr,e)}function Qg(n,e,t){const i=this.cache,s=e.length,r=qo(t,s);At(i,r)||(n.uniform1iv(this.addr,r),Rt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Dh,r[o])}function e_(n,e,t){const i=this.cache,s=e.length,r=qo(t,s);At(i,r)||(n.uniform1iv(this.addr,r),Rt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Fh,r[o])}function t_(n,e,t){const i=this.cache,s=e.length,r=qo(t,s);At(i,r)||(n.uniform1iv(this.addr,r),Rt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Oh,r[o])}function n_(n,e,t){const i=this.cache,s=e.length,r=qo(t,s);At(i,r)||(n.uniform1iv(this.addr,r),Rt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Nh,r[o])}function i_(n){switch(n){case 5126:return Bg;case 35664:return zg;case 35665:return Gg;case 35666:return Hg;case 35674:return kg;case 35675:return Vg;case 35676:return Wg;case 5124:case 35670:return Xg;case 35667:case 35671:return qg;case 35668:case 35672:return Yg;case 35669:case 35673:return Jg;case 5125:return Zg;case 36294:return Kg;case 36295:return jg;case 36296:return $g;case 35678:case 36198:case 36298:case 36306:case 35682:return Qg;case 35679:case 36299:case 36307:return e_;case 35680:case 36300:case 36308:case 36293:return t_;case 36289:case 36303:case 36311:case 36292:return n_}}class s_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Og(t.type)}}class r_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=i_(t.type)}}class o_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Ia=/(\w+)(\])?(\[|\.)?/g;function xu(n,e){n.seq.push(e),n.map[e.id]=e}function a_(n,e,t){const i=n.name,s=i.length;for(Ia.lastIndex=0;;){const r=Ia.exec(i),o=Ia.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){xu(t,c===void 0?new s_(a,n,e):new r_(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new o_(a),xu(t,h)),t=h}}}class ho{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);a_(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Mu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const l_=37297;let c_=0;function u_(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function h_(n){const e=st.getPrimaries(st.workingColorSpace),t=st.getPrimaries(n);let i;switch(e===t?i="":e===wo&&t===To?i="LinearDisplayP3ToLinearSRGB":e===To&&t===wo&&(i="LinearSRGBToLinearDisplayP3"),n){case Kn:case Wo:return[i,"LinearTransferOETF"];case Mt:case gl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function yu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+u_(n.getShaderSource(e),o)}else return s}function f_(n,e){const t=h_(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function d_(n,e){let t;switch(e){case fd:t="Linear";break;case dd:t="Reinhard";break;case pd:t="OptimizedCineon";break;case ah:t="ACESFilmic";break;case gd:t="AgX";break;case md:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function p_(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(vs).join(`
`)}function m_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(vs).join(`
`)}function g_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function __(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function vs(n){return n!==""}function Su(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Eu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const v_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qa(n){return n.replace(v_,M_)}const x_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function M_(n,e){let t=Ke[e];if(t===void 0){const i=x_.get(e);if(i!==void 0)t=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Qa(t)}const y_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bu(n){return n.replace(y_,S_)}function S_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Tu(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function E_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===sh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===rh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Hn&&(e="SHADOWMAP_TYPE_VSM"),e}function b_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case As:case Rs:e="ENVMAP_TYPE_CUBE";break;case Vo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function T_(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Rs:e="ENVMAP_MODE_REFRACTION";break}return e}function w_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case oh:e="ENVMAP_BLENDING_MULTIPLY";break;case ud:e="ENVMAP_BLENDING_MIX";break;case hd:e="ENVMAP_BLENDING_ADD";break}return e}function A_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function R_(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=E_(t),c=b_(t),u=T_(t),h=w_(t),f=A_(t),p=t.isWebGL2?"":p_(t),g=m_(t),v=g_(r),m=s.createProgram();let d,E,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(vs).join(`
`),d.length>0&&(d+=`
`),E=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(vs).join(`
`),E.length>0&&(E+=`
`)):(d=[Tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vs).join(`
`),E=[p,Tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ai?"#define TONE_MAPPING":"",t.toneMapping!==ai?Ke.tonemapping_pars_fragment:"",t.toneMapping!==ai?d_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,f_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vs).join(`
`)),o=Qa(o),o=Su(o,t),o=Eu(o,t),a=Qa(a),a=Su(a,t),a=Eu(a,t),o=bu(o),a=bu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,E=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const S=x+d+o,C=x+E+a,w=Mu(s,s.VERTEX_SHADER,S),R=Mu(s,s.FRAGMENT_SHADER,C);s.attachShader(m,w),s.attachShader(m,R),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function N(G){if(n.debug.checkShaderErrors){const Q=s.getProgramInfoLog(m).trim(),U=s.getShaderInfoLog(w).trim(),B=s.getShaderInfoLog(R).trim();let z=!0,V=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,w,R);else{const K=yu(s,w,"vertex"),ee=yu(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+Q+`
`+K+`
`+ee)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(U===""||B==="")&&(V=!1);V&&(G.diagnostics={runnable:z,programLog:Q,vertexShader:{log:U,prefix:d},fragmentShader:{log:B,prefix:E}})}s.deleteShader(w),s.deleteShader(R),y=new ho(s,m),b=__(s,m)}let y;this.getUniforms=function(){return y===void 0&&N(this),y};let b;this.getAttributes=function(){return b===void 0&&N(this),b};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(m,l_)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=c_++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=R,this}let C_=0;class P_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new L_(e),t.set(e,i)),i}}class L_{constructor(e){this.id=C_++,this.code=e,this.usedTimes=0}}function U_(n,e,t,i,s,r,o){const a=new bh,l=new P_,c=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return y===0?"uv":`uv${y}`}function m(y,b,I,G,Q){const U=G.fog,B=Q.geometry,z=y.isMeshStandardMaterial?G.environment:null,V=(y.isMeshStandardMaterial?t:e).get(y.envMap||z),K=V&&V.mapping===Vo?V.image.height:null,ee=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const te=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,oe=te!==void 0?te.length:0;let he=0;B.morphAttributes.position!==void 0&&(he=1),B.morphAttributes.normal!==void 0&&(he=2),B.morphAttributes.color!==void 0&&(he=3);let q,ie,me,Re;if(ee){const kt=Cn[ee];q=kt.vertexShader,ie=kt.fragmentShader}else q=y.vertexShader,ie=y.fragmentShader,l.update(y),me=l.getVertexShaderID(y),Re=l.getFragmentShaderID(y);const ve=n.getRenderTarget(),ze=Q.isInstancedMesh===!0,Ve=Q.isBatchedMesh===!0,Ce=!!y.map,We=!!y.matcap,L=!!V,fe=!!y.aoMap,J=!!y.lightMap,ae=!!y.bumpMap,Z=!!y.normalMap,De=!!y.displacementMap,Me=!!y.emissiveMap,T=!!y.metalnessMap,M=!!y.roughnessMap,F=y.anisotropy>0,se=y.clearcoat>0,re=y.iridescence>0,ne=y.sheen>0,we=y.transmission>0,_e=F&&!!y.anisotropyMap,be=se&&!!y.clearcoatMap,Y=se&&!!y.clearcoatNormalMap,le=se&&!!y.clearcoatRoughnessMap,X=re&&!!y.iridescenceMap,Pe=re&&!!y.iridescenceThicknessMap,Ae=ne&&!!y.sheenColorMap,ye=ne&&!!y.sheenRoughnessMap,Se=!!y.specularMap,de=!!y.specularColorMap,Le=!!y.specularIntensityMap,Oe=we&&!!y.transmissionMap,Ue=we&&!!y.thicknessMap,Te=!!y.gradientMap,$=!!y.alphaMap,P=y.alphaTest>0,ue=!!y.alphaHash,pe=!!y.extensions,Be=!!B.attributes.uv1,Ge=!!B.attributes.uv2,ot=!!B.attributes.uv3;let at=ai;return y.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(at=n.toneMapping),{isWebGL2:u,shaderID:ee,shaderType:y.type,shaderName:y.name,vertexShader:q,fragmentShader:ie,defines:y.defines,customVertexShaderID:me,customFragmentShaderID:Re,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Ve,instancing:ze,instancingColor:ze&&Q.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:ve===null?n.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Kn,map:Ce,matcap:We,envMap:L,envMapMode:L&&V.mapping,envMapCubeUVHeight:K,aoMap:fe,lightMap:J,bumpMap:ae,normalMap:Z,displacementMap:f&&De,emissiveMap:Me,normalMapObjectSpace:Z&&y.normalMapType===Rd,normalMapTangentSpace:Z&&y.normalMapType===_h,metalnessMap:T,roughnessMap:M,anisotropy:F,anisotropyMap:_e,clearcoat:se,clearcoatMap:be,clearcoatNormalMap:Y,clearcoatRoughnessMap:le,iridescence:re,iridescenceMap:X,iridescenceThicknessMap:Pe,sheen:ne,sheenColorMap:Ae,sheenRoughnessMap:ye,specularMap:Se,specularColorMap:de,specularIntensityMap:Le,transmission:we,transmissionMap:Oe,thicknessMap:Ue,gradientMap:Te,opaque:y.transparent===!1&&y.blending===Es,alphaMap:$,alphaTest:P,alphaHash:ue,combine:y.combine,mapUv:Ce&&v(y.map.channel),aoMapUv:fe&&v(y.aoMap.channel),lightMapUv:J&&v(y.lightMap.channel),bumpMapUv:ae&&v(y.bumpMap.channel),normalMapUv:Z&&v(y.normalMap.channel),displacementMapUv:De&&v(y.displacementMap.channel),emissiveMapUv:Me&&v(y.emissiveMap.channel),metalnessMapUv:T&&v(y.metalnessMap.channel),roughnessMapUv:M&&v(y.roughnessMap.channel),anisotropyMapUv:_e&&v(y.anisotropyMap.channel),clearcoatMapUv:be&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:Y&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:X&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:ye&&v(y.sheenRoughnessMap.channel),specularMapUv:Se&&v(y.specularMap.channel),specularColorMapUv:de&&v(y.specularColorMap.channel),specularIntensityMapUv:Le&&v(y.specularIntensityMap.channel),transmissionMapUv:Oe&&v(y.transmissionMap.channel),thicknessMapUv:Ue&&v(y.thicknessMap.channel),alphaMapUv:$&&v(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Z||F),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:Be,vertexUv2s:Ge,vertexUv3s:ot,pointsUvs:Q.isPoints===!0&&!!B.attributes.uv&&(Ce||$),fog:!!U,useFog:y.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:Q.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:he,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:at,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ce&&y.map.isVideoTexture===!0&&st.getTransfer(y.map.colorSpace)===ut,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===yt,flipSided:y.side===Kt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:pe&&y.extensions.derivatives===!0,extensionFragDepth:pe&&y.extensions.fragDepth===!0,extensionDrawBuffers:pe&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:pe&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pe&&y.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function d(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const I in y.defines)b.push(I),b.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(E(b,y),x(b,y),b.push(n.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function E(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function x(y,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function S(y){const b=g[y.type];let I;if(b){const G=Cn[b];I=Co.clone(G.uniforms)}else I=y.uniforms;return I}function C(y,b){let I;for(let G=0,Q=c.length;G<Q;G++){const U=c[G];if(U.cacheKey===b){I=U,++I.usedTimes;break}}return I===void 0&&(I=new R_(n,b,y,r),c.push(I)),I}function w(y){if(--y.usedTimes===0){const b=c.indexOf(y);c[b]=c[c.length-1],c.pop(),y.destroy()}}function R(y){l.remove(y)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:S,acquireProgram:C,releaseProgram:w,releaseShaderCache:R,programs:c,dispose:N}}function D_(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function I_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function wu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Au(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,f,p,g,v,m){let d=n[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},n[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=v,d.group=m),e++,d}function a(h,f,p,g,v,m){const d=o(h,f,p,g,v,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(h,f,p,g,v,m){const d=o(h,f,p,g,v,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||I_),i.length>1&&i.sort(f||wu),s.length>1&&s.sort(f||wu)}function u(){for(let h=e,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function N_(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Au,n.set(i,[o])):s>=r.length?(o=new Au,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function F_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ne};break;case"SpotLight":t={position:new D,direction:new D,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function O_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let B_=0;function z_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function G_(n,e){const t=new F_,i=O_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new D);const r=new D,o=new dt,a=new dt;function l(u,h){let f=0,p=0,g=0;for(let G=0;G<9;G++)s.probe[G].set(0,0,0);let v=0,m=0,d=0,E=0,x=0,S=0,C=0,w=0,R=0,N=0,y=0;u.sort(z_);const b=h===!0?Math.PI:1;for(let G=0,Q=u.length;G<Q;G++){const U=u[G],B=U.color,z=U.intensity,V=U.distance,K=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)f+=B.r*z*b,p+=B.g*z*b,g+=B.b*z*b;else if(U.isLightProbe){for(let ee=0;ee<9;ee++)s.probe[ee].addScaledVector(U.sh.coefficients[ee],z);y++}else if(U.isDirectionalLight){const ee=t.get(U);if(ee.color.copy(U.color).multiplyScalar(U.intensity*b),U.castShadow){const te=U.shadow,oe=i.get(U);oe.shadowBias=te.bias,oe.shadowNormalBias=te.normalBias,oe.shadowRadius=te.radius,oe.shadowMapSize=te.mapSize,s.directionalShadow[v]=oe,s.directionalShadowMap[v]=K,s.directionalShadowMatrix[v]=U.shadow.matrix,S++}s.directional[v]=ee,v++}else if(U.isSpotLight){const ee=t.get(U);ee.position.setFromMatrixPosition(U.matrixWorld),ee.color.copy(B).multiplyScalar(z*b),ee.distance=V,ee.coneCos=Math.cos(U.angle),ee.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),ee.decay=U.decay,s.spot[d]=ee;const te=U.shadow;if(U.map&&(s.spotLightMap[R]=U.map,R++,te.updateMatrices(U),U.castShadow&&N++),s.spotLightMatrix[d]=te.matrix,U.castShadow){const oe=i.get(U);oe.shadowBias=te.bias,oe.shadowNormalBias=te.normalBias,oe.shadowRadius=te.radius,oe.shadowMapSize=te.mapSize,s.spotShadow[d]=oe,s.spotShadowMap[d]=K,w++}d++}else if(U.isRectAreaLight){const ee=t.get(U);ee.color.copy(B).multiplyScalar(z),ee.halfWidth.set(U.width*.5,0,0),ee.halfHeight.set(0,U.height*.5,0),s.rectArea[E]=ee,E++}else if(U.isPointLight){const ee=t.get(U);if(ee.color.copy(U.color).multiplyScalar(U.intensity*b),ee.distance=U.distance,ee.decay=U.decay,U.castShadow){const te=U.shadow,oe=i.get(U);oe.shadowBias=te.bias,oe.shadowNormalBias=te.normalBias,oe.shadowRadius=te.radius,oe.shadowMapSize=te.mapSize,oe.shadowCameraNear=te.camera.near,oe.shadowCameraFar=te.camera.far,s.pointShadow[m]=oe,s.pointShadowMap[m]=K,s.pointShadowMatrix[m]=U.shadow.matrix,C++}s.point[m]=ee,m++}else if(U.isHemisphereLight){const ee=t.get(U);ee.skyColor.copy(U.color).multiplyScalar(z*b),ee.groundColor.copy(U.groundColor).multiplyScalar(z*b),s.hemi[x]=ee,x++}}E>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ge.LTC_FLOAT_1,s.rectAreaLTC2=ge.LTC_FLOAT_2):(s.rectAreaLTC1=ge.LTC_HALF_1,s.rectAreaLTC2=ge.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ge.LTC_FLOAT_1,s.rectAreaLTC2=ge.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ge.LTC_HALF_1,s.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=p,s.ambient[2]=g;const I=s.hash;(I.directionalLength!==v||I.pointLength!==m||I.spotLength!==d||I.rectAreaLength!==E||I.hemiLength!==x||I.numDirectionalShadows!==S||I.numPointShadows!==C||I.numSpotShadows!==w||I.numSpotMaps!==R||I.numLightProbes!==y)&&(s.directional.length=v,s.spot.length=d,s.rectArea.length=E,s.point.length=m,s.hemi.length=x,s.directionalShadow.length=S,s.directionalShadowMap.length=S,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=S,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=w+R-N,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=y,I.directionalLength=v,I.pointLength=m,I.spotLength=d,I.rectAreaLength=E,I.hemiLength=x,I.numDirectionalShadows=S,I.numPointShadows=C,I.numSpotShadows=w,I.numSpotMaps=R,I.numLightProbes=y,s.version=B_++)}function c(u,h){let f=0,p=0,g=0,v=0,m=0;const d=h.matrixWorldInverse;for(let E=0,x=u.length;E<x;E++){const S=u[E];if(S.isDirectionalLight){const C=s.directional[f];C.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(d),f++}else if(S.isSpotLight){const C=s.spot[g];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(d),C.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(d),g++}else if(S.isRectAreaLight){const C=s.rectArea[v];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(d),a.identity(),o.copy(S.matrixWorld),o.premultiply(d),a.extractRotation(o),C.halfWidth.set(S.width*.5,0,0),C.halfHeight.set(0,S.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),v++}else if(S.isPointLight){const C=s.point[p];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(d),p++}else if(S.isHemisphereLight){const C=s.hemi[m];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:s}}function Ru(n,e){const t=new G_(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(h){i.push(h)}function a(h){s.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function H_(n,e){let t=new WeakMap;function i(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new Ru(n,e),t.set(r,[l])):o>=a.length?(l=new Ru(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}class k_ extends Gs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class V_ extends Gs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const W_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,X_=`uniform sampler2D shadow_pass;
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
}`;function q_(n,e,t){let i=new vl;const s=new ce,r=new ce,o=new Nt,a=new k_({depthPacking:Ad}),l=new V_,c={},u=t.maxTextureSize,h={[fi]:Kt,[Kt]:fi,[yt]:yt},f=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:W_,fragmentShader:X_}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new pt;g.setAttribute("position",new _t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new xe(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sh;let d=this.type;this.render=function(w,R,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const y=n.getRenderTarget(),b=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),G=n.state;G.setBlending(Yn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const Q=d!==Hn&&this.type===Hn,U=d===Hn&&this.type!==Hn;for(let B=0,z=w.length;B<z;B++){const V=w[B],K=V.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);const ee=K.getFrameExtents();if(s.multiply(ee),r.copy(K.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ee.x),s.x=r.x*ee.x,K.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ee.y),s.y=r.y*ee.y,K.mapSize.y=r.y)),K.map===null||Q===!0||U===!0){const oe=this.type!==Hn?{minFilter:Jt,magFilter:Jt}:{};K.map!==null&&K.map.dispose(),K.map=new bn(s.x,s.y,oe),K.map.texture.name=V.name+".shadowMap",K.camera.updateProjectionMatrix()}n.setRenderTarget(K.map),n.clear();const te=K.getViewportCount();for(let oe=0;oe<te;oe++){const he=K.getViewport(oe);o.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),G.viewport(o),K.updateMatrices(V,oe),i=K.getFrustum(),S(R,N,K.camera,V,this.type)}K.isPointLightShadow!==!0&&this.type===Hn&&E(K,N),K.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(y,b,I)};function E(w,R){const N=e.update(v);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new bn(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(R,null,N,f,v,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(R,null,N,p,v,null)}function x(w,R,N,y){let b=null;const I=N.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)b=I;else if(b=N.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const G=b.uuid,Q=R.uuid;let U=c[G];U===void 0&&(U={},c[G]=U);let B=U[Q];B===void 0&&(B=b.clone(),U[Q]=B,R.addEventListener("dispose",C)),b=B}if(b.visible=R.visible,b.wireframe=R.wireframe,y===Hn?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:h[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,N.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const G=n.properties.get(b);G.light=N}return b}function S(w,R,N,y,b){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===Hn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,w.matrixWorld);const Q=e.update(w),U=w.material;if(Array.isArray(U)){const B=Q.groups;for(let z=0,V=B.length;z<V;z++){const K=B[z],ee=U[K.materialIndex];if(ee&&ee.visible){const te=x(w,ee,y,b);w.onBeforeShadow(n,w,R,N,Q,te,K),n.renderBufferDirect(N,null,Q,te,w,K),w.onAfterShadow(n,w,R,N,Q,te,K)}}}else if(U.visible){const B=x(w,U,y,b);w.onBeforeShadow(n,w,R,N,Q,B,null),n.renderBufferDirect(N,null,Q,B,w,null),w.onAfterShadow(n,w,R,N,Q,B,null)}}const G=w.children;for(let Q=0,U=G.length;Q<U;Q++)S(G[Q],R,N,y,b)}function C(w){w.target.removeEventListener("dispose",C);for(const N in c){const y=c[N],b=w.target.uuid;b in y&&(y[b].dispose(),delete y[b])}}}function Y_(n,e,t){const i=t.isWebGL2;function s(){let P=!1;const ue=new Nt;let pe=null;const Be=new Nt(0,0,0,0);return{setMask:function(Ge){pe!==Ge&&!P&&(n.colorMask(Ge,Ge,Ge,Ge),pe=Ge)},setLocked:function(Ge){P=Ge},setClear:function(Ge,ot,at,Ct,kt){kt===!0&&(Ge*=Ct,ot*=Ct,at*=Ct),ue.set(Ge,ot,at,Ct),Be.equals(ue)===!1&&(n.clearColor(Ge,ot,at,Ct),Be.copy(ue))},reset:function(){P=!1,pe=null,Be.set(-1,0,0,0)}}}function r(){let P=!1,ue=null,pe=null,Be=null;return{setTest:function(Ge){Ge?Ve(n.DEPTH_TEST):Ce(n.DEPTH_TEST)},setMask:function(Ge){ue!==Ge&&!P&&(n.depthMask(Ge),ue=Ge)},setFunc:function(Ge){if(pe!==Ge){switch(Ge){case id:n.depthFunc(n.NEVER);break;case sd:n.depthFunc(n.ALWAYS);break;case rd:n.depthFunc(n.LESS);break;case So:n.depthFunc(n.LEQUAL);break;case od:n.depthFunc(n.EQUAL);break;case ad:n.depthFunc(n.GEQUAL);break;case ld:n.depthFunc(n.GREATER);break;case cd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pe=Ge}},setLocked:function(Ge){P=Ge},setClear:function(Ge){Be!==Ge&&(n.clearDepth(Ge),Be=Ge)},reset:function(){P=!1,ue=null,pe=null,Be=null}}}function o(){let P=!1,ue=null,pe=null,Be=null,Ge=null,ot=null,at=null,Ct=null,kt=null;return{setTest:function(lt){P||(lt?Ve(n.STENCIL_TEST):Ce(n.STENCIL_TEST))},setMask:function(lt){ue!==lt&&!P&&(n.stencilMask(lt),ue=lt)},setFunc:function(lt,Vt,Rn){(pe!==lt||Be!==Vt||Ge!==Rn)&&(n.stencilFunc(lt,Vt,Rn),pe=lt,Be=Vt,Ge=Rn)},setOp:function(lt,Vt,Rn){(ot!==lt||at!==Vt||Ct!==Rn)&&(n.stencilOp(lt,Vt,Rn),ot=lt,at=Vt,Ct=Rn)},setLocked:function(lt){P=lt},setClear:function(lt){kt!==lt&&(n.clearStencil(lt),kt=lt)},reset:function(){P=!1,ue=null,pe=null,Be=null,Ge=null,ot=null,at=null,Ct=null,kt=null}}}const a=new s,l=new r,c=new o,u=new WeakMap,h=new WeakMap;let f={},p={},g=new WeakMap,v=[],m=null,d=!1,E=null,x=null,S=null,C=null,w=null,R=null,N=null,y=new Ne(0,0,0),b=0,I=!1,G=null,Q=null,U=null,B=null,z=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,ee=0;const te=n.getParameter(n.VERSION);te.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(te)[1]),K=ee>=1):te.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),K=ee>=2);let oe=null,he={};const q=n.getParameter(n.SCISSOR_BOX),ie=n.getParameter(n.VIEWPORT),me=new Nt().fromArray(q),Re=new Nt().fromArray(ie);function ve(P,ue,pe,Be){const Ge=new Uint8Array(4),ot=n.createTexture();n.bindTexture(P,ot),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let at=0;at<pe;at++)i&&(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)?n.texImage3D(ue,0,n.RGBA,1,1,Be,0,n.RGBA,n.UNSIGNED_BYTE,Ge):n.texImage2D(ue+at,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ge);return ot}const ze={};ze[n.TEXTURE_2D]=ve(n.TEXTURE_2D,n.TEXTURE_2D,1),ze[n.TEXTURE_CUBE_MAP]=ve(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ze[n.TEXTURE_2D_ARRAY]=ve(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ze[n.TEXTURE_3D]=ve(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ve(n.DEPTH_TEST),l.setFunc(So),Me(!1),T(uc),Ve(n.CULL_FACE),Z(Yn);function Ve(P){f[P]!==!0&&(n.enable(P),f[P]=!0)}function Ce(P){f[P]!==!1&&(n.disable(P),f[P]=!1)}function We(P,ue){return p[P]!==ue?(n.bindFramebuffer(P,ue),p[P]=ue,i&&(P===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=ue),P===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=ue)),!0):!1}function L(P,ue){let pe=v,Be=!1;if(P)if(pe=g.get(ue),pe===void 0&&(pe=[],g.set(ue,pe)),P.isWebGLMultipleRenderTargets){const Ge=P.texture;if(pe.length!==Ge.length||pe[0]!==n.COLOR_ATTACHMENT0){for(let ot=0,at=Ge.length;ot<at;ot++)pe[ot]=n.COLOR_ATTACHMENT0+ot;pe.length=Ge.length,Be=!0}}else pe[0]!==n.COLOR_ATTACHMENT0&&(pe[0]=n.COLOR_ATTACHMENT0,Be=!0);else pe[0]!==n.BACK&&(pe[0]=n.BACK,Be=!0);Be&&(t.isWebGL2?n.drawBuffers(pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe))}function fe(P){return m!==P?(n.useProgram(P),m=P,!0):!1}const J={[Ri]:n.FUNC_ADD,[kf]:n.FUNC_SUBTRACT,[Vf]:n.FUNC_REVERSE_SUBTRACT};if(i)J[dc]=n.MIN,J[pc]=n.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(J[dc]=P.MIN_EXT,J[pc]=P.MAX_EXT)}const ae={[Wf]:n.ZERO,[Xf]:n.ONE,[qf]:n.SRC_COLOR,[Ya]:n.SRC_ALPHA,[$f]:n.SRC_ALPHA_SATURATE,[Kf]:n.DST_COLOR,[Jf]:n.DST_ALPHA,[Yf]:n.ONE_MINUS_SRC_COLOR,[Ja]:n.ONE_MINUS_SRC_ALPHA,[jf]:n.ONE_MINUS_DST_COLOR,[Zf]:n.ONE_MINUS_DST_ALPHA,[Qf]:n.CONSTANT_COLOR,[ed]:n.ONE_MINUS_CONSTANT_COLOR,[td]:n.CONSTANT_ALPHA,[nd]:n.ONE_MINUS_CONSTANT_ALPHA};function Z(P,ue,pe,Be,Ge,ot,at,Ct,kt,lt){if(P===Yn){d===!0&&(Ce(n.BLEND),d=!1);return}if(d===!1&&(Ve(n.BLEND),d=!0),P!==Hf){if(P!==E||lt!==I){if((x!==Ri||w!==Ri)&&(n.blendEquation(n.FUNC_ADD),x=Ri,w=Ri),lt)switch(P){case Es:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yn:n.blendFunc(n.ONE,n.ONE);break;case hc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Es:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yn:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case hc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,C=null,R=null,N=null,y.set(0,0,0),b=0,E=P,I=lt}return}Ge=Ge||ue,ot=ot||pe,at=at||Be,(ue!==x||Ge!==w)&&(n.blendEquationSeparate(J[ue],J[Ge]),x=ue,w=Ge),(pe!==S||Be!==C||ot!==R||at!==N)&&(n.blendFuncSeparate(ae[pe],ae[Be],ae[ot],ae[at]),S=pe,C=Be,R=ot,N=at),(Ct.equals(y)===!1||kt!==b)&&(n.blendColor(Ct.r,Ct.g,Ct.b,kt),y.copy(Ct),b=kt),E=P,I=!1}function De(P,ue){P.side===yt?Ce(n.CULL_FACE):Ve(n.CULL_FACE);let pe=P.side===Kt;ue&&(pe=!pe),Me(pe),P.blending===Es&&P.transparent===!1?Z(Yn):Z(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const Be=P.stencilWrite;c.setTest(Be),Be&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),F(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Ve(n.SAMPLE_ALPHA_TO_COVERAGE):Ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function Me(P){G!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),G=P)}function T(P){P!==zf?(Ve(n.CULL_FACE),P!==Q&&(P===uc?n.cullFace(n.BACK):P===Gf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ce(n.CULL_FACE),Q=P}function M(P){P!==U&&(K&&n.lineWidth(P),U=P)}function F(P,ue,pe){P?(Ve(n.POLYGON_OFFSET_FILL),(B!==ue||z!==pe)&&(n.polygonOffset(ue,pe),B=ue,z=pe)):Ce(n.POLYGON_OFFSET_FILL)}function se(P){P?Ve(n.SCISSOR_TEST):Ce(n.SCISSOR_TEST)}function re(P){P===void 0&&(P=n.TEXTURE0+V-1),oe!==P&&(n.activeTexture(P),oe=P)}function ne(P,ue,pe){pe===void 0&&(oe===null?pe=n.TEXTURE0+V-1:pe=oe);let Be=he[pe];Be===void 0&&(Be={type:void 0,texture:void 0},he[pe]=Be),(Be.type!==P||Be.texture!==ue)&&(oe!==pe&&(n.activeTexture(pe),oe=pe),n.bindTexture(P,ue||ze[P]),Be.type=P,Be.texture=ue)}function we(){const P=he[oe];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function _e(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function be(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Y(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function le(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function X(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Pe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ae(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Se(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function de(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Le(P){me.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),me.copy(P))}function Oe(P){Re.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),Re.copy(P))}function Ue(P,ue){let pe=h.get(ue);pe===void 0&&(pe=new WeakMap,h.set(ue,pe));let Be=pe.get(P);Be===void 0&&(Be=n.getUniformBlockIndex(ue,P.name),pe.set(P,Be))}function Te(P,ue){const Be=h.get(ue).get(P);u.get(ue)!==Be&&(n.uniformBlockBinding(ue,Be,P.__bindingPointIndex),u.set(ue,Be))}function $(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},oe=null,he={},p={},g=new WeakMap,v=[],m=null,d=!1,E=null,x=null,S=null,C=null,w=null,R=null,N=null,y=new Ne(0,0,0),b=0,I=!1,G=null,Q=null,U=null,B=null,z=null,me.set(0,0,n.canvas.width,n.canvas.height),Re.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ve,disable:Ce,bindFramebuffer:We,drawBuffers:L,useProgram:fe,setBlending:Z,setMaterial:De,setFlipSided:Me,setCullFace:T,setLineWidth:M,setPolygonOffset:F,setScissorTest:se,activeTexture:re,bindTexture:ne,unbindTexture:we,compressedTexImage2D:_e,compressedTexImage3D:be,texImage2D:Se,texImage3D:de,updateUBOMapping:Ue,uniformBlockBinding:Te,texStorage2D:Ae,texStorage3D:ye,texSubImage2D:Y,texSubImage3D:le,compressedTexSubImage2D:X,compressedTexSubImage3D:Pe,scissor:Le,viewport:Oe,reset:$}}function J_(n,e,t,i,s,r,o){const a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,M){return p?new OffscreenCanvas(T,M):lr("canvas")}function v(T,M,F,se){let re=1;if((T.width>se||T.height>se)&&(re=se/Math.max(T.width,T.height)),re<1||M===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const ne=M?Ro:Math.floor,we=ne(re*T.width),_e=ne(re*T.height);h===void 0&&(h=g(we,_e));const be=F?g(we,_e):h;return be.width=we,be.height=_e,be.getContext("2d").drawImage(T,0,0,we,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+we+"x"+_e+")."),be}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function m(T){return $a(T.width)&&$a(T.height)}function d(T){return a?!1:T.wrapS!==Sn||T.wrapT!==Sn||T.minFilter!==Jt&&T.minFilter!==hn}function E(T,M){return T.generateMipmaps&&M&&T.minFilter!==Jt&&T.minFilter!==hn}function x(T){n.generateMipmap(T)}function S(T,M,F,se,re=!1){if(a===!1)return M;if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ne=M;if(M===n.RED&&(F===n.FLOAT&&(ne=n.R32F),F===n.HALF_FLOAT&&(ne=n.R16F),F===n.UNSIGNED_BYTE&&(ne=n.R8)),M===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(ne=n.R8UI),F===n.UNSIGNED_SHORT&&(ne=n.R16UI),F===n.UNSIGNED_INT&&(ne=n.R32UI),F===n.BYTE&&(ne=n.R8I),F===n.SHORT&&(ne=n.R16I),F===n.INT&&(ne=n.R32I)),M===n.RG&&(F===n.FLOAT&&(ne=n.RG32F),F===n.HALF_FLOAT&&(ne=n.RG16F),F===n.UNSIGNED_BYTE&&(ne=n.RG8)),M===n.RGBA){const we=re?bo:st.getTransfer(se);F===n.FLOAT&&(ne=n.RGBA32F),F===n.HALF_FLOAT&&(ne=n.RGBA16F),F===n.UNSIGNED_BYTE&&(ne=we===ut?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function C(T,M,F){return E(T,F)===!0||T.isFramebufferTexture&&T.minFilter!==Jt&&T.minFilter!==hn?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function w(T){return T===Jt||T===mc||T===aa?n.NEAREST:n.LINEAR}function R(T){const M=T.target;M.removeEventListener("dispose",R),y(M),M.isVideoTexture&&u.delete(M)}function N(T){const M=T.target;M.removeEventListener("dispose",N),I(M)}function y(T){const M=i.get(T);if(M.__webglInit===void 0)return;const F=T.source,se=f.get(F);if(se){const re=se[M.__cacheKey];re.usedTimes--,re.usedTimes===0&&b(T),Object.keys(se).length===0&&f.delete(F)}i.remove(T)}function b(T){const M=i.get(T);n.deleteTexture(M.__webglTexture);const F=T.source,se=f.get(F);delete se[M.__cacheKey],o.memory.textures--}function I(T){const M=T.texture,F=i.get(T),se=i.get(M);if(se.__webglTexture!==void 0&&(n.deleteTexture(se.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(F.__webglFramebuffer[re]))for(let ne=0;ne<F.__webglFramebuffer[re].length;ne++)n.deleteFramebuffer(F.__webglFramebuffer[re][ne]);else n.deleteFramebuffer(F.__webglFramebuffer[re]);F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer[re])}else{if(Array.isArray(F.__webglFramebuffer))for(let re=0;re<F.__webglFramebuffer.length;re++)n.deleteFramebuffer(F.__webglFramebuffer[re]);else n.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&n.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let re=0;re<F.__webglColorRenderbuffer.length;re++)F.__webglColorRenderbuffer[re]&&n.deleteRenderbuffer(F.__webglColorRenderbuffer[re]);F.__webglDepthRenderbuffer&&n.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let re=0,ne=M.length;re<ne;re++){const we=i.get(M[re]);we.__webglTexture&&(n.deleteTexture(we.__webglTexture),o.memory.textures--),i.remove(M[re])}i.remove(M),i.remove(T)}let G=0;function Q(){G=0}function U(){const T=G;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),G+=1,T}function B(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function z(T,M){const F=i.get(T);if(T.isVideoTexture&&De(T),T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){const se=T.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(F,T,M);return}}t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+M)}function V(T,M){const F=i.get(T);if(T.version>0&&F.__version!==T.version){me(F,T,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+M)}function K(T,M){const F=i.get(T);if(T.version>0&&F.__version!==T.version){me(F,T,M);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+M)}function ee(T,M){const F=i.get(T);if(T.version>0&&F.__version!==T.version){Re(F,T,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+M)}const te={[Wi]:n.REPEAT,[Sn]:n.CLAMP_TO_EDGE,[Ka]:n.MIRRORED_REPEAT},oe={[Jt]:n.NEAREST,[mc]:n.NEAREST_MIPMAP_NEAREST,[aa]:n.NEAREST_MIPMAP_LINEAR,[hn]:n.LINEAR,[_d]:n.LINEAR_MIPMAP_NEAREST,[ar]:n.LINEAR_MIPMAP_LINEAR},he={[Cd]:n.NEVER,[Nd]:n.ALWAYS,[Pd]:n.LESS,[vh]:n.LEQUAL,[Ld]:n.EQUAL,[Id]:n.GEQUAL,[Ud]:n.GREATER,[Dd]:n.NOTEQUAL};function q(T,M,F){if(F?(n.texParameteri(T,n.TEXTURE_WRAP_S,te[M.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,te[M.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,te[M.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,oe[M.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,oe[M.minFilter])):(n.texParameteri(T,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(T,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(M.wrapS!==Sn||M.wrapT!==Sn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(T,n.TEXTURE_MAG_FILTER,w(M.magFilter)),n.texParameteri(T,n.TEXTURE_MIN_FILTER,w(M.minFilter)),M.minFilter!==Jt&&M.minFilter!==hn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,he[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const se=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Jt||M.minFilter!==aa&&M.minFilter!==ar||M.type===ri&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Jn&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(n.texParameterf(T,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function ie(T,M){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",R));const se=M.source;let re=f.get(se);re===void 0&&(re={},f.set(se,re));const ne=B(M);if(ne!==T.__cacheKey){re[ne]===void 0&&(re[ne]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),re[ne].usedTimes++;const we=re[T.__cacheKey];we!==void 0&&(re[T.__cacheKey].usedTimes--,we.usedTimes===0&&b(M)),T.__cacheKey=ne,T.__webglTexture=re[ne].texture}return F}function me(T,M,F){let se=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(se=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(se=n.TEXTURE_3D);const re=ie(T,M),ne=M.source;t.bindTexture(se,T.__webglTexture,n.TEXTURE0+F);const we=i.get(ne);if(ne.version!==we.__version||re===!0){t.activeTexture(n.TEXTURE0+F);const _e=st.getPrimaries(st.workingColorSpace),be=M.colorSpace===fn?null:st.getPrimaries(M.colorSpace),Y=M.colorSpace===fn||_e===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);const le=d(M)&&m(M.image)===!1;let X=v(M.image,le,!1,s.maxTextureSize);X=Me(M,X);const Pe=m(X)||a,Ae=r.convert(M.format,M.colorSpace);let ye=r.convert(M.type),Se=S(M.internalFormat,Ae,ye,M.colorSpace,M.isVideoTexture);q(se,M,Pe);let de;const Le=M.mipmaps,Oe=a&&M.isVideoTexture!==!0&&Se!==mh,Ue=we.__version===void 0||re===!0,Te=C(M,X,Pe);if(M.isDepthTexture)Se=n.DEPTH_COMPONENT,a?M.type===ri?Se=n.DEPTH_COMPONENT32F:M.type===si?Se=n.DEPTH_COMPONENT24:M.type===Bi?Se=n.DEPTH24_STENCIL8:Se=n.DEPTH_COMPONENT16:M.type===ri&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===zi&&Se===n.DEPTH_COMPONENT&&M.type!==ml&&M.type!==si&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=si,ye=r.convert(M.type)),M.format===Cs&&Se===n.DEPTH_COMPONENT&&(Se=n.DEPTH_STENCIL,M.type!==Bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Bi,ye=r.convert(M.type))),Ue&&(Oe?t.texStorage2D(n.TEXTURE_2D,1,Se,X.width,X.height):t.texImage2D(n.TEXTURE_2D,0,Se,X.width,X.height,0,Ae,ye,null));else if(M.isDataTexture)if(Le.length>0&&Pe){Oe&&Ue&&t.texStorage2D(n.TEXTURE_2D,Te,Se,Le[0].width,Le[0].height);for(let $=0,P=Le.length;$<P;$++)de=Le[$],Oe?t.texSubImage2D(n.TEXTURE_2D,$,0,0,de.width,de.height,Ae,ye,de.data):t.texImage2D(n.TEXTURE_2D,$,Se,de.width,de.height,0,Ae,ye,de.data);M.generateMipmaps=!1}else Oe?(Ue&&t.texStorage2D(n.TEXTURE_2D,Te,Se,X.width,X.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,X.width,X.height,Ae,ye,X.data)):t.texImage2D(n.TEXTURE_2D,0,Se,X.width,X.height,0,Ae,ye,X.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Oe&&Ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,Se,Le[0].width,Le[0].height,X.depth);for(let $=0,P=Le.length;$<P;$++)de=Le[$],M.format!==En?Ae!==null?Oe?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,de.width,de.height,X.depth,Ae,de.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,Se,de.width,de.height,X.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?t.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,de.width,de.height,X.depth,Ae,ye,de.data):t.texImage3D(n.TEXTURE_2D_ARRAY,$,Se,de.width,de.height,X.depth,0,Ae,ye,de.data)}else{Oe&&Ue&&t.texStorage2D(n.TEXTURE_2D,Te,Se,Le[0].width,Le[0].height);for(let $=0,P=Le.length;$<P;$++)de=Le[$],M.format!==En?Ae!==null?Oe?t.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,de.width,de.height,Ae,de.data):t.compressedTexImage2D(n.TEXTURE_2D,$,Se,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?t.texSubImage2D(n.TEXTURE_2D,$,0,0,de.width,de.height,Ae,ye,de.data):t.texImage2D(n.TEXTURE_2D,$,Se,de.width,de.height,0,Ae,ye,de.data)}else if(M.isDataArrayTexture)Oe?(Ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,Se,X.width,X.height,X.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,Ae,ye,X.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Se,X.width,X.height,X.depth,0,Ae,ye,X.data);else if(M.isData3DTexture)Oe?(Ue&&t.texStorage3D(n.TEXTURE_3D,Te,Se,X.width,X.height,X.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,Ae,ye,X.data)):t.texImage3D(n.TEXTURE_3D,0,Se,X.width,X.height,X.depth,0,Ae,ye,X.data);else if(M.isFramebufferTexture){if(Ue)if(Oe)t.texStorage2D(n.TEXTURE_2D,Te,Se,X.width,X.height);else{let $=X.width,P=X.height;for(let ue=0;ue<Te;ue++)t.texImage2D(n.TEXTURE_2D,ue,Se,$,P,0,Ae,ye,null),$>>=1,P>>=1}}else if(Le.length>0&&Pe){Oe&&Ue&&t.texStorage2D(n.TEXTURE_2D,Te,Se,Le[0].width,Le[0].height);for(let $=0,P=Le.length;$<P;$++)de=Le[$],Oe?t.texSubImage2D(n.TEXTURE_2D,$,0,0,Ae,ye,de):t.texImage2D(n.TEXTURE_2D,$,Se,Ae,ye,de);M.generateMipmaps=!1}else Oe?(Ue&&t.texStorage2D(n.TEXTURE_2D,Te,Se,X.width,X.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ae,ye,X)):t.texImage2D(n.TEXTURE_2D,0,Se,Ae,ye,X);E(M,Pe)&&x(se),we.__version=ne.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function Re(T,M,F){if(M.image.length!==6)return;const se=ie(T,M),re=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+F);const ne=i.get(re);if(re.version!==ne.__version||se===!0){t.activeTexture(n.TEXTURE0+F);const we=st.getPrimaries(st.workingColorSpace),_e=M.colorSpace===fn?null:st.getPrimaries(M.colorSpace),be=M.colorSpace===fn||we===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Y=M.isCompressedTexture||M.image[0].isCompressedTexture,le=M.image[0]&&M.image[0].isDataTexture,X=[];for(let $=0;$<6;$++)!Y&&!le?X[$]=v(M.image[$],!1,!0,s.maxCubemapSize):X[$]=le?M.image[$].image:M.image[$],X[$]=Me(M,X[$]);const Pe=X[0],Ae=m(Pe)||a,ye=r.convert(M.format,M.colorSpace),Se=r.convert(M.type),de=S(M.internalFormat,ye,Se,M.colorSpace),Le=a&&M.isVideoTexture!==!0,Oe=ne.__version===void 0||se===!0;let Ue=C(M,Pe,Ae);q(n.TEXTURE_CUBE_MAP,M,Ae);let Te;if(Y){Le&&Oe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ue,de,Pe.width,Pe.height);for(let $=0;$<6;$++){Te=X[$].mipmaps;for(let P=0;P<Te.length;P++){const ue=Te[P];M.format!==En?ye!==null?Le?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,P,0,0,ue.width,ue.height,ye,ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,P,de,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,P,0,0,ue.width,ue.height,ye,Se,ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,P,de,ue.width,ue.height,0,ye,Se,ue.data)}}}else{Te=M.mipmaps,Le&&Oe&&(Te.length>0&&Ue++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Ue,de,X[0].width,X[0].height));for(let $=0;$<6;$++)if(le){Le?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,X[$].width,X[$].height,ye,Se,X[$].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,de,X[$].width,X[$].height,0,ye,Se,X[$].data);for(let P=0;P<Te.length;P++){const pe=Te[P].image[$].image;Le?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,P+1,0,0,pe.width,pe.height,ye,Se,pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,P+1,de,pe.width,pe.height,0,ye,Se,pe.data)}}else{Le?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ye,Se,X[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,de,ye,Se,X[$]);for(let P=0;P<Te.length;P++){const ue=Te[P];Le?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,P+1,0,0,ye,Se,ue.image[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,P+1,de,ye,Se,ue.image[$])}}}E(M,Ae)&&x(n.TEXTURE_CUBE_MAP),ne.__version=re.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function ve(T,M,F,se,re,ne){const we=r.convert(F.format,F.colorSpace),_e=r.convert(F.type),be=S(F.internalFormat,we,_e,F.colorSpace);if(!i.get(M).__hasExternalTextures){const le=Math.max(1,M.width>>ne),X=Math.max(1,M.height>>ne);re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,ne,be,le,X,M.depth,0,we,_e,null):t.texImage2D(re,ne,be,le,X,0,we,_e,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),Z(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,re,i.get(F).__webglTexture,0,ae(M)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,se,re,i.get(F).__webglTexture,ne),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ze(T,M,F){if(n.bindRenderbuffer(n.RENDERBUFFER,T),M.depthBuffer&&!M.stencilBuffer){let se=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(F||Z(M)){const re=M.depthTexture;re&&re.isDepthTexture&&(re.type===ri?se=n.DEPTH_COMPONENT32F:re.type===si&&(se=n.DEPTH_COMPONENT24));const ne=ae(M);Z(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,se,M.width,M.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,se,M.width,M.height)}else n.renderbufferStorage(n.RENDERBUFFER,se,M.width,M.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,T)}else if(M.depthBuffer&&M.stencilBuffer){const se=ae(M);F&&Z(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,se,n.DEPTH24_STENCIL8,M.width,M.height):Z(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,n.DEPTH24_STENCIL8,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,T)}else{const se=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let re=0;re<se.length;re++){const ne=se[re],we=r.convert(ne.format,ne.colorSpace),_e=r.convert(ne.type),be=S(ne.internalFormat,we,_e,ne.colorSpace),Y=ae(M);F&&Z(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Y,be,M.width,M.height):Z(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Y,be,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,be,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ve(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),z(M.depthTexture,0);const se=i.get(M.depthTexture).__webglTexture,re=ae(M);if(M.depthTexture.format===zi)Z(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0);else if(M.depthTexture.format===Cs)Z(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Ce(T){const M=i.get(T),F=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ve(M.__webglFramebuffer,T)}else if(F){M.__webglDepthbuffer=[];for(let se=0;se<6;se++)t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[se]),M.__webglDepthbuffer[se]=n.createRenderbuffer(),ze(M.__webglDepthbuffer[se],T,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),ze(M.__webglDepthbuffer,T,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function We(T,M,F){const se=i.get(T);M!==void 0&&ve(se.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Ce(T)}function L(T){const M=T.texture,F=i.get(T),se=i.get(M);T.addEventListener("dispose",N),T.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture()),se.__version=M.version,o.memory.textures++);const re=T.isWebGLCubeRenderTarget===!0,ne=T.isWebGLMultipleRenderTargets===!0,we=m(T)||a;if(re){F.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(a&&M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[_e]=[];for(let be=0;be<M.mipmaps.length;be++)F.__webglFramebuffer[_e][be]=n.createFramebuffer()}else F.__webglFramebuffer[_e]=n.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let _e=0;_e<M.mipmaps.length;_e++)F.__webglFramebuffer[_e]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(ne)if(s.drawBuffers){const _e=T.texture;for(let be=0,Y=_e.length;be<Y;be++){const le=i.get(_e[be]);le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&Z(T)===!1){const _e=ne?M:[M];F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let be=0;be<_e.length;be++){const Y=_e[be];F.__webglColorRenderbuffer[be]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[be]);const le=r.convert(Y.format,Y.colorSpace),X=r.convert(Y.type),Pe=S(Y.internalFormat,le,X,Y.colorSpace,T.isXRRenderTarget===!0),Ae=ae(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,Pe,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,F.__webglColorRenderbuffer[be])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),ze(F.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(re){t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),q(n.TEXTURE_CUBE_MAP,M,we);for(let _e=0;_e<6;_e++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let be=0;be<M.mipmaps.length;be++)ve(F.__webglFramebuffer[_e][be],T,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,be);else ve(F.__webglFramebuffer[_e],T,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);E(M,we)&&x(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){const _e=T.texture;for(let be=0,Y=_e.length;be<Y;be++){const le=_e[be],X=i.get(le);t.bindTexture(n.TEXTURE_2D,X.__webglTexture),q(n.TEXTURE_2D,le,we),ve(F.__webglFramebuffer,T,le,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,0),E(le,we)&&x(n.TEXTURE_2D)}t.unbindTexture()}else{let _e=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?_e=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(_e,se.__webglTexture),q(_e,M,we),a&&M.mipmaps&&M.mipmaps.length>0)for(let be=0;be<M.mipmaps.length;be++)ve(F.__webglFramebuffer[be],T,M,n.COLOR_ATTACHMENT0,_e,be);else ve(F.__webglFramebuffer,T,M,n.COLOR_ATTACHMENT0,_e,0);E(M,we)&&x(_e),t.unbindTexture()}T.depthBuffer&&Ce(T)}function fe(T){const M=m(T)||a,F=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let se=0,re=F.length;se<re;se++){const ne=F[se];if(E(ne,M)){const we=T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,_e=i.get(ne).__webglTexture;t.bindTexture(we,_e),x(we),t.unbindTexture()}}}function J(T){if(a&&T.samples>0&&Z(T)===!1){const M=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],F=T.width,se=T.height;let re=n.COLOR_BUFFER_BIT;const ne=[],we=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(T),be=T.isWebGLMultipleRenderTargets===!0;if(be)for(let Y=0;Y<M.length;Y++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Y=0;Y<M.length;Y++){ne.push(n.COLOR_ATTACHMENT0+Y),T.depthBuffer&&ne.push(we);const le=_e.__ignoreDepthValues!==void 0?_e.__ignoreDepthValues:!1;if(le===!1&&(T.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),be&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Y]),le===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[we]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[we])),be){const X=i.get(M[Y]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,X,0)}n.blitFramebuffer(0,0,F,se,0,0,F,se,re,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),be)for(let Y=0;Y<M.length;Y++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Y]);const le=i.get(M[Y]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.TEXTURE_2D,le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}}function ae(T){return Math.min(s.maxSamples,T.samples)}function Z(T){const M=i.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function De(T){const M=o.render.frame;u.get(T)!==M&&(u.set(T,M),T.update())}function Me(T,M){const F=T.colorSpace,se=T.format,re=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===ja||F!==Kn&&F!==fn&&(st.getTransfer(F)===ut?a===!1?e.has("EXT_sRGB")===!0&&se===En?(T.format=ja,T.minFilter=hn,T.generateMipmaps=!1):M=Mh.sRGBToLinear(M):(se!==En||re!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),M}this.allocateTextureUnit=U,this.resetTextureUnits=Q,this.setTexture2D=z,this.setTexture2DArray=V,this.setTexture3D=K,this.setTextureCube=ee,this.rebindTextures=We,this.setupRenderTarget=L,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Z}function Z_(n,e,t){const i=t.isWebGL2;function s(r,o=fn){let a;const l=st.getTransfer(o);if(r===li)return n.UNSIGNED_BYTE;if(r===uh)return n.UNSIGNED_SHORT_4_4_4_4;if(r===hh)return n.UNSIGNED_SHORT_5_5_5_1;if(r===vd)return n.BYTE;if(r===xd)return n.SHORT;if(r===ml)return n.UNSIGNED_SHORT;if(r===ch)return n.INT;if(r===si)return n.UNSIGNED_INT;if(r===ri)return n.FLOAT;if(r===Jn)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Md)return n.ALPHA;if(r===En)return n.RGBA;if(r===yd)return n.LUMINANCE;if(r===Sd)return n.LUMINANCE_ALPHA;if(r===zi)return n.DEPTH_COMPONENT;if(r===Cs)return n.DEPTH_STENCIL;if(r===ja)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Ed)return n.RED;if(r===fh)return n.RED_INTEGER;if(r===bd)return n.RG;if(r===dh)return n.RG_INTEGER;if(r===ph)return n.RGBA_INTEGER;if(r===la||r===ca||r===ua||r===ha)if(l===ut)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===la)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ca)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ua)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ha)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===la)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ca)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ua)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ha)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===gc||r===_c||r===vc||r===xc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===gc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===_c)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===vc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===xc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===mh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Mc||r===yc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Mc)return l===ut?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===yc)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Sc||r===Ec||r===bc||r===Tc||r===wc||r===Ac||r===Rc||r===Cc||r===Pc||r===Lc||r===Uc||r===Dc||r===Ic||r===Nc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Sc)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ec)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===bc)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Tc)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===wc)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ac)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Rc)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Cc)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Pc)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Lc)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Uc)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Dc)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ic)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Nc)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===fa||r===Fc||r===Oc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===fa)return l===ut?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Fc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Oc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Td||r===Bc||r===zc||r===Gc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===fa)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Bc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===zc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Gc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Bi?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class K_ extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Dt extends ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const j_={type:"move"};class Na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(j_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Dt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class $_ extends zs{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const v=t.getContextAttributes();let m=null,d=null;const E=[],x=[],S=new ce;let C=null;const w=new rn;w.layers.enable(1),w.viewport=new Nt;const R=new rn;R.layers.enable(2),R.viewport=new Nt;const N=[w,R],y=new K_;y.layers.enable(1),y.layers.enable(2);let b=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ie=E[q];return ie===void 0&&(ie=new Na,E[q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(q){let ie=E[q];return ie===void 0&&(ie=new Na,E[q]=ie),ie.getGripSpace()},this.getHand=function(q){let ie=E[q];return ie===void 0&&(ie=new Na,E[q]=ie),ie.getHandSpace()};function G(q){const ie=x.indexOf(q.inputSource);if(ie===-1)return;const me=E[ie];me!==void 0&&(me.update(q.inputSource,q.frame,c||o),me.dispatchEvent({type:q.type,data:q.inputSource}))}function Q(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",U);for(let q=0;q<E.length;q++){const ie=x[q];ie!==null&&(x[q]=null,E[q].disconnect(ie))}b=null,I=null,e.setRenderTarget(m),p=null,f=null,h=null,s=null,d=null,he.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",U),v.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ie={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new bn(p.framebufferWidth,p.framebufferHeight,{format:En,type:li,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ie=null,me=null,Re=null;v.depth&&(Re=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=v.stencil?Cs:zi,me=v.stencil?Bi:si);const ve={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(ve),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),d=new bn(f.textureWidth,f.textureHeight,{format:En,type:li,depthTexture:new Uh(f.textureWidth,f.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const ze=e.properties.get(d);ze.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),he.setContext(s),he.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function U(q){for(let ie=0;ie<q.removed.length;ie++){const me=q.removed[ie],Re=x.indexOf(me);Re>=0&&(x[Re]=null,E[Re].disconnect(me))}for(let ie=0;ie<q.added.length;ie++){const me=q.added[ie];let Re=x.indexOf(me);if(Re===-1){for(let ze=0;ze<E.length;ze++)if(ze>=x.length){x.push(me),Re=ze;break}else if(x[ze]===null){x[ze]=me,Re=ze;break}if(Re===-1)break}const ve=E[Re];ve&&ve.connect(me)}}const B=new D,z=new D;function V(q,ie,me){B.setFromMatrixPosition(ie.matrixWorld),z.setFromMatrixPosition(me.matrixWorld);const Re=B.distanceTo(z),ve=ie.projectionMatrix.elements,ze=me.projectionMatrix.elements,Ve=ve[14]/(ve[10]-1),Ce=ve[14]/(ve[10]+1),We=(ve[9]+1)/ve[5],L=(ve[9]-1)/ve[5],fe=(ve[8]-1)/ve[0],J=(ze[8]+1)/ze[0],ae=Ve*fe,Z=Ve*J,De=Re/(-fe+J),Me=De*-fe;ie.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Me),q.translateZ(De),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const T=Ve+De,M=Ce+De,F=ae-Me,se=Z+(Re-Me),re=We*Ce/M*T,ne=L*Ce/M*T;q.projectionMatrix.makePerspective(F,se,re,ne,T,M),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function K(q,ie){ie===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ie.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;y.near=R.near=w.near=q.near,y.far=R.far=w.far=q.far,(b!==y.near||I!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),b=y.near,I=y.far);const ie=q.parent,me=y.cameras;K(y,ie);for(let Re=0;Re<me.length;Re++)K(me[Re],ie);me.length===2?V(y,w,R):y.projectionMatrix.copy(w.projectionMatrix),ee(q,y,ie)};function ee(q,ie,me){me===null?q.matrix.copy(ie.matrixWorld):(q.matrix.copy(me.matrixWorld),q.matrix.invert(),q.matrix.multiply(ie.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ps*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)};let te=null;function oe(q,ie){if(u=ie.getViewerPose(c||o),g=ie,u!==null){const me=u.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let Re=!1;me.length!==y.cameras.length&&(y.cameras.length=0,Re=!0);for(let ve=0;ve<me.length;ve++){const ze=me[ve];let Ve=null;if(p!==null)Ve=p.getViewport(ze);else{const We=h.getViewSubImage(f,ze);Ve=We.viewport,ve===0&&(e.setRenderTargetTextures(d,We.colorTexture,f.ignoreDepthValues?void 0:We.depthStencilTexture),e.setRenderTarget(d))}let Ce=N[ve];Ce===void 0&&(Ce=new rn,Ce.layers.enable(ve),Ce.viewport=new Nt,N[ve]=Ce),Ce.matrix.fromArray(ze.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(ze.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),ve===0&&(y.matrix.copy(Ce.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Re===!0&&y.cameras.push(Ce)}}for(let me=0;me<E.length;me++){const Re=x[me],ve=E[me];Re!==null&&ve!==void 0&&ve.update(Re,ie,c||o)}te&&te(q,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),g=null}const he=new Lh;he.setAnimationLoop(oe),this.setAnimationLoop=function(q){te=q},this.dispose=function(){}}}function Q_(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Rh(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,E,x,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),v(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,E,x):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Kt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Kt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const E=e.get(d).envMap;if(E&&(m.envMap.value=E,m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const x=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*x,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,E,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=x*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,E){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Kt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const E=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ev(n,e,t,i){let s={},r={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,x){const S=x.program;i.uniformBlockBinding(E,S)}function c(E,x){let S=s[E.id];S===void 0&&(g(E),S=u(E),s[E.id]=S,E.addEventListener("dispose",m));const C=x.program;i.updateUBOMapping(E,C);const w=e.render.frame;r[E.id]!==w&&(f(E),r[E.id]=w)}function u(E){const x=h();E.__bindingPointIndex=x;const S=n.createBuffer(),C=E.__size,w=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,C,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,S),S}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const x=s[E.id],S=E.uniforms,C=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let w=0,R=S.length;w<R;w++){const N=Array.isArray(S[w])?S[w]:[S[w]];for(let y=0,b=N.length;y<b;y++){const I=N[y];if(p(I,w,y,C)===!0){const G=I.__offset,Q=Array.isArray(I.value)?I.value:[I.value];let U=0;for(let B=0;B<Q.length;B++){const z=Q[B],V=v(z);typeof z=="number"||typeof z=="boolean"?(I.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,G+U,I.__data)):z.isMatrix3?(I.__data[0]=z.elements[0],I.__data[1]=z.elements[1],I.__data[2]=z.elements[2],I.__data[3]=0,I.__data[4]=z.elements[3],I.__data[5]=z.elements[4],I.__data[6]=z.elements[5],I.__data[7]=0,I.__data[8]=z.elements[6],I.__data[9]=z.elements[7],I.__data[10]=z.elements[8],I.__data[11]=0):(z.toArray(I.__data,U),U+=V.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,x,S,C){const w=E.value,R=x+"_"+S;if(C[R]===void 0)return typeof w=="number"||typeof w=="boolean"?C[R]=w:C[R]=w.clone(),!0;{const N=C[R];if(typeof w=="number"||typeof w=="boolean"){if(N!==w)return C[R]=w,!0}else if(N.equals(w)===!1)return N.copy(w),!0}return!1}function g(E){const x=E.uniforms;let S=0;const C=16;for(let R=0,N=x.length;R<N;R++){const y=Array.isArray(x[R])?x[R]:[x[R]];for(let b=0,I=y.length;b<I;b++){const G=y[b],Q=Array.isArray(G.value)?G.value:[G.value];for(let U=0,B=Q.length;U<B;U++){const z=Q[U],V=v(z),K=S%C;K!==0&&C-K<V.boundary&&(S+=C-K),G.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=S,S+=V.storage}}}const w=S%C;return w>0&&(S+=C-w),E.__size=S,E.__cache={},this}function v(E){const x={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),x}function m(E){const x=E.target;x.removeEventListener("dispose",m);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function d(){for(const E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class Bh{constructor(e={}){const{canvas:t=jd(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const d=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mt,this._useLegacyLights=!1,this.toneMapping=ai,this.toneMappingExposure=1;const x=this;let S=!1,C=0,w=0,R=null,N=-1,y=null;const b=new Nt,I=new Nt;let G=null;const Q=new Ne(0);let U=0,B=t.width,z=t.height,V=1,K=null,ee=null;const te=new Nt(0,0,B,z),oe=new Nt(0,0,B,z);let he=!1;const q=new vl;let ie=!1,me=!1,Re=null;const ve=new dt,ze=new ce,Ve=new D,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function We(){return R===null?V:1}let L=i;function fe(A,O){for(let k=0;k<A.length;k++){const W=A[k],H=t.getContext(W,O);if(H!==null)return H}return null}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${pl}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",ue,!1),L===null){const O=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&O.shift(),L=fe(O,A),L===null)throw fe(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&L instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let J,ae,Z,De,Me,T,M,F,se,re,ne,we,_e,be,Y,le,X,Pe,Ae,ye,Se,de,Le,Oe;function Ue(){J=new ug(L),ae=new sg(L,J,e),J.init(ae),de=new Z_(L,J,ae),Z=new Y_(L,J,ae),De=new dg(L),Me=new D_,T=new J_(L,J,Z,Me,ae,de,De),M=new og(x),F=new cg(x),se=new yp(L,ae),Le=new ng(L,J,se,ae),re=new hg(L,se,De,Le),ne=new _g(L,re,se,De),Ae=new gg(L,ae,T),le=new rg(Me),we=new U_(x,M,F,J,ae,Le,le),_e=new Q_(x,Me),be=new N_,Y=new H_(J,ae),Pe=new tg(x,M,F,Z,ne,f,l),X=new q_(x,ne,ae),Oe=new ev(L,De,ae,Z),ye=new ig(L,J,De,ae),Se=new fg(L,J,De,ae),De.programs=we.programs,x.capabilities=ae,x.extensions=J,x.properties=Me,x.renderLists=be,x.shadowMap=X,x.state=Z,x.info=De}Ue();const Te=new $_(x,L);this.xr=Te,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const A=J.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=J.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(A){A!==void 0&&(V=A,this.setSize(B,z,!1))},this.getSize=function(A){return A.set(B,z)},this.setSize=function(A,O,k=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=A,z=O,t.width=Math.floor(A*V),t.height=Math.floor(O*V),k===!0&&(t.style.width=A+"px",t.style.height=O+"px"),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(B*V,z*V).floor()},this.setDrawingBufferSize=function(A,O,k){B=A,z=O,V=k,t.width=Math.floor(A*k),t.height=Math.floor(O*k),this.setViewport(0,0,A,O)},this.getCurrentViewport=function(A){return A.copy(b)},this.getViewport=function(A){return A.copy(te)},this.setViewport=function(A,O,k,W){A.isVector4?te.set(A.x,A.y,A.z,A.w):te.set(A,O,k,W),Z.viewport(b.copy(te).multiplyScalar(V).floor())},this.getScissor=function(A){return A.copy(oe)},this.setScissor=function(A,O,k,W){A.isVector4?oe.set(A.x,A.y,A.z,A.w):oe.set(A,O,k,W),Z.scissor(I.copy(oe).multiplyScalar(V).floor())},this.getScissorTest=function(){return he},this.setScissorTest=function(A){Z.setScissorTest(he=A)},this.setOpaqueSort=function(A){K=A},this.setTransparentSort=function(A){ee=A},this.getClearColor=function(A){return A.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(A=!0,O=!0,k=!0){let W=0;if(A){let H=!1;if(R!==null){const Ee=R.texture.format;H=Ee===ph||Ee===dh||Ee===fh}if(H){const Ee=R.texture.type,Ie=Ee===li||Ee===si||Ee===ml||Ee===Bi||Ee===uh||Ee===hh,ke=Pe.getClearColor(),Xe=Pe.getClearAlpha(),je=ke.r,Je=ke.g,Ze=ke.b;Ie?(p[0]=je,p[1]=Je,p[2]=Ze,p[3]=Xe,L.clearBufferuiv(L.COLOR,0,p)):(g[0]=je,g[1]=Je,g[2]=Ze,g[3]=Xe,L.clearBufferiv(L.COLOR,0,g))}else W|=L.COLOR_BUFFER_BIT}O&&(W|=L.DEPTH_BUFFER_BIT),k&&(W|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),be.dispose(),Y.dispose(),Me.dispose(),M.dispose(),F.dispose(),ne.dispose(),Le.dispose(),Oe.dispose(),we.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",kt),Te.removeEventListener("sessionend",lt),Re&&(Re.dispose(),Re=null),Vt.stop()};function $(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=De.autoReset,O=X.enabled,k=X.autoUpdate,W=X.needsUpdate,H=X.type;Ue(),De.autoReset=A,X.enabled=O,X.autoUpdate=k,X.needsUpdate=W,X.type=H}function ue(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function pe(A){const O=A.target;O.removeEventListener("dispose",pe),Be(O)}function Be(A){Ge(A),Me.remove(A)}function Ge(A){const O=Me.get(A).programs;O!==void 0&&(O.forEach(function(k){we.releaseProgram(k)}),A.isShaderMaterial&&we.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,k,W,H,Ee){O===null&&(O=Ce);const Ie=H.isMesh&&H.matrixWorld.determinant()<0,ke=Nf(A,O,k,W,H);Z.setMaterial(W,Ie);let Xe=k.index,je=1;if(W.wireframe===!0){if(Xe=re.getWireframeAttribute(k),Xe===void 0)return;je=2}const Je=k.drawRange,Ze=k.attributes.position;let St=Je.start*je,Qt=(Je.start+Je.count)*je;Ee!==null&&(St=Math.max(St,Ee.start*je),Qt=Math.min(Qt,(Ee.start+Ee.count)*je)),Xe!==null?(St=Math.max(St,0),Qt=Math.min(Qt,Xe.count)):Ze!=null&&(St=Math.max(St,0),Qt=Math.min(Qt,Ze.count));const Pt=Qt-St;if(Pt<0||Pt===1/0)return;Le.setup(H,W,ke,k,Xe);let Nn,mt=ye;if(Xe!==null&&(Nn=se.get(Xe),mt=Se,mt.setIndex(Nn)),H.isMesh)W.wireframe===!0?(Z.setLineWidth(W.wireframeLinewidth*We()),mt.setMode(L.LINES)):mt.setMode(L.TRIANGLES);else if(H.isLine){let $e=W.linewidth;$e===void 0&&($e=1),Z.setLineWidth($e*We()),H.isLineSegments?mt.setMode(L.LINES):H.isLineLoop?mt.setMode(L.LINE_LOOP):mt.setMode(L.LINE_STRIP)}else H.isPoints?mt.setMode(L.POINTS):H.isSprite&&mt.setMode(L.TRIANGLES);if(H.isBatchedMesh)mt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)mt.renderInstances(St,Pt,H.count);else if(k.isInstancedBufferGeometry){const $e=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,ia=Math.min(k.instanceCount,$e);mt.renderInstances(St,Pt,ia)}else mt.render(St,Pt)};function ot(A,O,k){A.transparent===!0&&A.side===yt&&A.forceSinglePass===!1?(A.side=Kt,A.needsUpdate=!0,Dr(A,O,k),A.side=fi,A.needsUpdate=!0,Dr(A,O,k),A.side=yt):Dr(A,O,k)}this.compile=function(A,O,k=null){k===null&&(k=A),m=Y.get(k),m.init(),E.push(m),k.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),A!==k&&A.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(x._useLegacyLights);const W=new Set;return A.traverse(function(H){const Ee=H.material;if(Ee)if(Array.isArray(Ee))for(let Ie=0;Ie<Ee.length;Ie++){const ke=Ee[Ie];ot(ke,k,H),W.add(ke)}else ot(Ee,k,H),W.add(Ee)}),E.pop(),m=null,W},this.compileAsync=function(A,O,k=null){const W=this.compile(A,O,k);return new Promise(H=>{function Ee(){if(W.forEach(function(Ie){Me.get(Ie).currentProgram.isReady()&&W.delete(Ie)}),W.size===0){H(A);return}setTimeout(Ee,10)}J.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let at=null;function Ct(A){at&&at(A)}function kt(){Vt.stop()}function lt(){Vt.start()}const Vt=new Lh;Vt.setAnimationLoop(Ct),typeof self<"u"&&Vt.setContext(self),this.setAnimationLoop=function(A){at=A,Te.setAnimationLoop(A),A===null?Vt.stop():Vt.start()},Te.addEventListener("sessionstart",kt),Te.addEventListener("sessionend",lt),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(O),O=Te.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,O,R),m=Y.get(A,E.length),m.init(),E.push(m),ve.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),q.setFromProjectionMatrix(ve),me=this.localClippingEnabled,ie=le.init(this.clippingPlanes,me),v=be.get(A,d.length),v.init(),d.push(v),Rn(A,O,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(K,ee),this.info.render.frame++,ie===!0&&le.beginShadows();const k=m.state.shadowsArray;if(X.render(k,A,O),ie===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset(),Pe.render(v,A),m.setupLights(x._useLegacyLights),O.isArrayCamera){const W=O.cameras;for(let H=0,Ee=W.length;H<Ee;H++){const Ie=W[H];sc(v,A,Ie,Ie.viewport)}}else sc(v,A,O);R!==null&&(T.updateMultisampleRenderTarget(R),T.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(x,A,O),Le.resetDefaultState(),N=-1,y=null,E.pop(),E.length>0?m=E[E.length-1]:m=null,d.pop(),d.length>0?v=d[d.length-1]:v=null};function Rn(A,O,k,W){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)k=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||q.intersectsSprite(A)){W&&Ve.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ve);const Ie=ne.update(A),ke=A.material;ke.visible&&v.push(A,Ie,ke,k,Ve.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||q.intersectsObject(A))){const Ie=ne.update(A),ke=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ve.copy(A.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Ve.copy(Ie.boundingSphere.center)),Ve.applyMatrix4(A.matrixWorld).applyMatrix4(ve)),Array.isArray(ke)){const Xe=Ie.groups;for(let je=0,Je=Xe.length;je<Je;je++){const Ze=Xe[je],St=ke[Ze.materialIndex];St&&St.visible&&v.push(A,Ie,St,k,Ve.z,Ze)}}else ke.visible&&v.push(A,Ie,ke,k,Ve.z,null)}}const Ee=A.children;for(let Ie=0,ke=Ee.length;Ie<ke;Ie++)Rn(Ee[Ie],O,k,W)}function sc(A,O,k,W){const H=A.opaque,Ee=A.transmissive,Ie=A.transparent;m.setupLightsView(k),ie===!0&&le.setGlobalState(x.clippingPlanes,k),Ee.length>0&&If(H,Ee,O,k),W&&Z.viewport(b.copy(W)),H.length>0&&Ur(H,O,k),Ee.length>0&&Ur(Ee,O,k),Ie.length>0&&Ur(Ie,O,k),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function If(A,O,k,W){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;const Ee=ae.isWebGL2;Re===null&&(Re=new bn(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")?Jn:li,minFilter:ar,samples:Ee?4:0})),x.getDrawingBufferSize(ze),Ee?Re.setSize(ze.x,ze.y):Re.setSize(Ro(ze.x),Ro(ze.y));const Ie=x.getRenderTarget();x.setRenderTarget(Re),x.getClearColor(Q),U=x.getClearAlpha(),U<1&&x.setClearColor(16777215,.5),x.clear();const ke=x.toneMapping;x.toneMapping=ai,Ur(A,k,W),T.updateMultisampleRenderTarget(Re),T.updateRenderTargetMipmap(Re);let Xe=!1;for(let je=0,Je=O.length;je<Je;je++){const Ze=O[je],St=Ze.object,Qt=Ze.geometry,Pt=Ze.material,Nn=Ze.group;if(Pt.side===yt&&St.layers.test(W.layers)){const mt=Pt.side;Pt.side=Kt,Pt.needsUpdate=!0,rc(St,k,W,Qt,Pt,Nn),Pt.side=mt,Pt.needsUpdate=!0,Xe=!0}}Xe===!0&&(T.updateMultisampleRenderTarget(Re),T.updateRenderTargetMipmap(Re)),x.setRenderTarget(Ie),x.setClearColor(Q,U),x.toneMapping=ke}function Ur(A,O,k){const W=O.isScene===!0?O.overrideMaterial:null;for(let H=0,Ee=A.length;H<Ee;H++){const Ie=A[H],ke=Ie.object,Xe=Ie.geometry,je=W===null?Ie.material:W,Je=Ie.group;ke.layers.test(k.layers)&&rc(ke,O,k,Xe,je,Je)}}function rc(A,O,k,W,H,Ee){A.onBeforeRender(x,O,k,W,H,Ee),A.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(x,O,k,W,A,Ee),H.transparent===!0&&H.side===yt&&H.forceSinglePass===!1?(H.side=Kt,H.needsUpdate=!0,x.renderBufferDirect(k,O,W,H,A,Ee),H.side=fi,H.needsUpdate=!0,x.renderBufferDirect(k,O,W,H,A,Ee),H.side=yt):x.renderBufferDirect(k,O,W,H,A,Ee),A.onAfterRender(x,O,k,W,H,Ee)}function Dr(A,O,k){O.isScene!==!0&&(O=Ce);const W=Me.get(A),H=m.state.lights,Ee=m.state.shadowsArray,Ie=H.state.version,ke=we.getParameters(A,H.state,Ee,O,k),Xe=we.getProgramCacheKey(ke);let je=W.programs;W.environment=A.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(A.isMeshStandardMaterial?F:M).get(A.envMap||W.environment),je===void 0&&(A.addEventListener("dispose",pe),je=new Map,W.programs=je);let Je=je.get(Xe);if(Je!==void 0){if(W.currentProgram===Je&&W.lightsStateVersion===Ie)return ac(A,ke),Je}else ke.uniforms=we.getUniforms(A),A.onBuild(k,ke,x),A.onBeforeCompile(ke,x),Je=we.acquireProgram(ke,Xe),je.set(Xe,Je),W.uniforms=ke.uniforms;const Ze=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ze.clippingPlanes=le.uniform),ac(A,ke),W.needsLights=Of(A),W.lightsStateVersion=Ie,W.needsLights&&(Ze.ambientLightColor.value=H.state.ambient,Ze.lightProbe.value=H.state.probe,Ze.directionalLights.value=H.state.directional,Ze.directionalLightShadows.value=H.state.directionalShadow,Ze.spotLights.value=H.state.spot,Ze.spotLightShadows.value=H.state.spotShadow,Ze.rectAreaLights.value=H.state.rectArea,Ze.ltc_1.value=H.state.rectAreaLTC1,Ze.ltc_2.value=H.state.rectAreaLTC2,Ze.pointLights.value=H.state.point,Ze.pointLightShadows.value=H.state.pointShadow,Ze.hemisphereLights.value=H.state.hemi,Ze.directionalShadowMap.value=H.state.directionalShadowMap,Ze.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ze.spotShadowMap.value=H.state.spotShadowMap,Ze.spotLightMatrix.value=H.state.spotLightMatrix,Ze.spotLightMap.value=H.state.spotLightMap,Ze.pointShadowMap.value=H.state.pointShadowMap,Ze.pointShadowMatrix.value=H.state.pointShadowMatrix),W.currentProgram=Je,W.uniformsList=null,Je}function oc(A){if(A.uniformsList===null){const O=A.currentProgram.getUniforms();A.uniformsList=ho.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function ac(A,O){const k=Me.get(A);k.outputColorSpace=O.outputColorSpace,k.batching=O.batching,k.instancing=O.instancing,k.instancingColor=O.instancingColor,k.skinning=O.skinning,k.morphTargets=O.morphTargets,k.morphNormals=O.morphNormals,k.morphColors=O.morphColors,k.morphTargetsCount=O.morphTargetsCount,k.numClippingPlanes=O.numClippingPlanes,k.numIntersection=O.numClipIntersection,k.vertexAlphas=O.vertexAlphas,k.vertexTangents=O.vertexTangents,k.toneMapping=O.toneMapping}function Nf(A,O,k,W,H){O.isScene!==!0&&(O=Ce),T.resetTextureUnits();const Ee=O.fog,Ie=W.isMeshStandardMaterial?O.environment:null,ke=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Kn,Xe=(W.isMeshStandardMaterial?F:M).get(W.envMap||Ie),je=W.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Je=!!k.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ze=!!k.morphAttributes.position,St=!!k.morphAttributes.normal,Qt=!!k.morphAttributes.color;let Pt=ai;W.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Pt=x.toneMapping);const Nn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,mt=Nn!==void 0?Nn.length:0,$e=Me.get(W),ia=m.state.lights;if(ie===!0&&(me===!0||A!==y)){const cn=A===y&&W.id===N;le.setState(W,A,cn)}let vt=!1;W.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==ia.state.version||$e.outputColorSpace!==ke||H.isBatchedMesh&&$e.batching===!1||!H.isBatchedMesh&&$e.batching===!0||H.isInstancedMesh&&$e.instancing===!1||!H.isInstancedMesh&&$e.instancing===!0||H.isSkinnedMesh&&$e.skinning===!1||!H.isSkinnedMesh&&$e.skinning===!0||H.isInstancedMesh&&$e.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&$e.instancingColor===!1&&H.instanceColor!==null||$e.envMap!==Xe||W.fog===!0&&$e.fog!==Ee||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==le.numPlanes||$e.numIntersection!==le.numIntersection)||$e.vertexAlphas!==je||$e.vertexTangents!==Je||$e.morphTargets!==Ze||$e.morphNormals!==St||$e.morphColors!==Qt||$e.toneMapping!==Pt||ae.isWebGL2===!0&&$e.morphTargetsCount!==mt)&&(vt=!0):(vt=!0,$e.__version=W.version);let vi=$e.currentProgram;vt===!0&&(vi=Dr(W,O,H));let lc=!1,Ws=!1,sa=!1;const Ot=vi.getUniforms(),xi=$e.uniforms;if(Z.useProgram(vi.program)&&(lc=!0,Ws=!0,sa=!0),W.id!==N&&(N=W.id,Ws=!0),lc||y!==A){Ot.setValue(L,"projectionMatrix",A.projectionMatrix),Ot.setValue(L,"viewMatrix",A.matrixWorldInverse);const cn=Ot.map.cameraPosition;cn!==void 0&&cn.setValue(L,Ve.setFromMatrixPosition(A.matrixWorld)),ae.logarithmicDepthBuffer&&Ot.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ot.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),y!==A&&(y=A,Ws=!0,sa=!0)}if(H.isSkinnedMesh){Ot.setOptional(L,H,"bindMatrix"),Ot.setOptional(L,H,"bindMatrixInverse");const cn=H.skeleton;cn&&(ae.floatVertexTextures?(cn.boneTexture===null&&cn.computeBoneTexture(),Ot.setValue(L,"boneTexture",cn.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(Ot.setOptional(L,H,"batchingTexture"),Ot.setValue(L,"batchingTexture",H._matricesTexture,T));const ra=k.morphAttributes;if((ra.position!==void 0||ra.normal!==void 0||ra.color!==void 0&&ae.isWebGL2===!0)&&Ae.update(H,k,vi),(Ws||$e.receiveShadow!==H.receiveShadow)&&($e.receiveShadow=H.receiveShadow,Ot.setValue(L,"receiveShadow",H.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(xi.envMap.value=Xe,xi.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),Ws&&(Ot.setValue(L,"toneMappingExposure",x.toneMappingExposure),$e.needsLights&&Ff(xi,sa),Ee&&W.fog===!0&&_e.refreshFogUniforms(xi,Ee),_e.refreshMaterialUniforms(xi,W,V,z,Re),ho.upload(L,oc($e),xi,T)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ho.upload(L,oc($e),xi,T),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ot.setValue(L,"center",H.center),Ot.setValue(L,"modelViewMatrix",H.modelViewMatrix),Ot.setValue(L,"normalMatrix",H.normalMatrix),Ot.setValue(L,"modelMatrix",H.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const cn=W.uniformsGroups;for(let oa=0,Bf=cn.length;oa<Bf;oa++)if(ae.isWebGL2){const cc=cn[oa];Oe.update(cc,vi),Oe.bind(cc,vi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return vi}function Ff(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function Of(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,O,k){Me.get(A.texture).__webglTexture=O,Me.get(A.depthTexture).__webglTexture=k;const W=Me.get(A);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=k===void 0,W.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,O){const k=Me.get(A);k.__webglFramebuffer=O,k.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,k=0){R=A,C=O,w=k;let W=!0,H=null,Ee=!1,Ie=!1;if(A){const Xe=Me.get(A);Xe.__useDefaultFramebuffer!==void 0?(Z.bindFramebuffer(L.FRAMEBUFFER,null),W=!1):Xe.__webglFramebuffer===void 0?T.setupRenderTarget(A):Xe.__hasExternalTextures&&T.rebindTextures(A,Me.get(A.texture).__webglTexture,Me.get(A.depthTexture).__webglTexture);const je=A.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Ie=!0);const Je=Me.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Je[O])?H=Je[O][k]:H=Je[O],Ee=!0):ae.isWebGL2&&A.samples>0&&T.useMultisampledRTT(A)===!1?H=Me.get(A).__webglMultisampledFramebuffer:Array.isArray(Je)?H=Je[k]:H=Je,b.copy(A.viewport),I.copy(A.scissor),G=A.scissorTest}else b.copy(te).multiplyScalar(V).floor(),I.copy(oe).multiplyScalar(V).floor(),G=he;if(Z.bindFramebuffer(L.FRAMEBUFFER,H)&&ae.drawBuffers&&W&&Z.drawBuffers(A,H),Z.viewport(b),Z.scissor(I),Z.setScissorTest(G),Ee){const Xe=Me.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,Xe.__webglTexture,k)}else if(Ie){const Xe=Me.get(A.texture),je=O||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Xe.__webglTexture,k||0,je)}N=-1},this.readRenderTargetPixels=function(A,O,k,W,H,Ee,Ie){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=Me.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ie!==void 0&&(ke=ke[Ie]),ke){Z.bindFramebuffer(L.FRAMEBUFFER,ke);try{const Xe=A.texture,je=Xe.format,Je=Xe.type;if(je!==En&&de.convert(je)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ze=Je===Jn&&(J.has("EXT_color_buffer_half_float")||ae.isWebGL2&&J.has("EXT_color_buffer_float"));if(Je!==li&&de.convert(Je)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Je===ri&&(ae.isWebGL2||J.has("OES_texture_float")||J.has("WEBGL_color_buffer_float")))&&!Ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-W&&k>=0&&k<=A.height-H&&L.readPixels(O,k,W,H,de.convert(je),de.convert(Je),Ee)}finally{const Xe=R!==null?Me.get(R).__webglFramebuffer:null;Z.bindFramebuffer(L.FRAMEBUFFER,Xe)}}},this.copyFramebufferToTexture=function(A,O,k=0){const W=Math.pow(2,-k),H=Math.floor(O.image.width*W),Ee=Math.floor(O.image.height*W);T.setTexture2D(O,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,A.x,A.y,H,Ee),Z.unbindTexture()},this.copyTextureToTexture=function(A,O,k,W=0){const H=O.image.width,Ee=O.image.height,Ie=de.convert(k.format),ke=de.convert(k.type);T.setTexture2D(k,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment),O.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,W,A.x,A.y,H,Ee,Ie,ke,O.image.data):O.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,W,A.x,A.y,O.mipmaps[0].width,O.mipmaps[0].height,Ie,O.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,W,A.x,A.y,Ie,ke,O.image),W===0&&k.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Z.unbindTexture()},this.copyTextureToTexture3D=function(A,O,k,W,H=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ee=A.max.x-A.min.x+1,Ie=A.max.y-A.min.y+1,ke=A.max.z-A.min.z+1,Xe=de.convert(W.format),je=de.convert(W.type);let Je;if(W.isData3DTexture)T.setTexture3D(W,0),Je=L.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)T.setTexture2DArray(W,0),Je=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,W.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,W.unpackAlignment);const Ze=L.getParameter(L.UNPACK_ROW_LENGTH),St=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Qt=L.getParameter(L.UNPACK_SKIP_PIXELS),Pt=L.getParameter(L.UNPACK_SKIP_ROWS),Nn=L.getParameter(L.UNPACK_SKIP_IMAGES),mt=k.isCompressedTexture?k.mipmaps[H]:k.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,mt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,mt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,A.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,A.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,A.min.z),k.isDataTexture||k.isData3DTexture?L.texSubImage3D(Je,H,O.x,O.y,O.z,Ee,Ie,ke,Xe,je,mt.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(Je,H,O.x,O.y,O.z,Ee,Ie,ke,Xe,mt.data)):L.texSubImage3D(Je,H,O.x,O.y,O.z,Ee,Ie,ke,Xe,je,mt),L.pixelStorei(L.UNPACK_ROW_LENGTH,Ze),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,St),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Qt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Pt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Nn),H===0&&W.generateMipmaps&&L.generateMipmap(Je),Z.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?T.setTextureCube(A,0):A.isData3DTexture?T.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?T.setTexture2DArray(A,0):T.setTexture2D(A,0),Z.unbindTexture()},this.resetState=function(){C=0,w=0,R=null,Z.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===gl?"display-p3":"srgb",t.unpackColorSpace=st.workingColorSpace===Wo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Mt?Gi:gh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Gi?Mt:Kn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class tv extends Bh{}tv.prototype.isWebGL1Renderer=!0;class yl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ne(e),this.density=t}clone(){return new yl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class nv extends ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Cu extends _t{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ps=new dt,Pu=new dt,no=[],Lu=new Zi,iv=new dt,Zs=new xe,Ks=new Ki;class Us extends xe{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Cu(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,iv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Zi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ps),Lu.copy(e.boundingBox).applyMatrix4(ps),this.boundingBox.union(Lu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ki),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ps),Ks.copy(e.boundingSphere).applyMatrix4(ps),this.boundingSphere.union(Ks)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Zs.geometry=this.geometry,Zs.material=this.material,Zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ks.copy(this.boundingSphere),Ks.applyMatrix4(i),e.ray.intersectsSphere(Ks)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ps),Pu.multiplyMatrices(i,ps),Zs.matrixWorld=Pu,Zs.raycast(e,no);for(let o=0,a=no.length;o<a;o++){const l=no[o];l.instanceId=r,l.object=this,t.push(l)}no.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Cu(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends Gs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Uu=new dt,el=new Eh,io=new Ki,so=new D;class Hi extends ct{constructor(e=new pt,t=new ci){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),io.copy(i.boundingSphere),io.applyMatrix4(s),io.radius+=r,e.ray.intersectsSphere(io)===!1)return;Uu.copy(s).invert(),el.copy(e.ray).applyMatrix4(Uu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,v=p;g<v;g++){const m=c.getX(g);so.fromBufferAttribute(h,m),Du(so,m,l,s,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,v=p;g<v;g++)so.fromBufferAttribute(h,g),Du(so,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Du(n,e,t,i,s,r,o){const a=el.distanceSqToPoint(n);if(a<t){const l=new D;el.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Yo extends jt{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class In{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],f=i[s+1]-u,p=(o-u)/f;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ce:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new D,s=[],r=[],o=[],a=new D,l=new dt;for(let p=0;p<=e;p++){const g=p/e;s[p]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ut(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Ut(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Sl extends In{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const i=t||new ce,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*h+this.aX,c=f*h+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class sv extends Sl{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function El(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,p*=u,s(o,a,f,p)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const ro=new D,Fa=new El,Oa=new El,Ba=new El;class rv extends In{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new D){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(ro.subVectors(s[0],s[1]).add(s[0]),c=ro);const h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(ro.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=ro),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),v=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Fa.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,v,m),Oa.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,v,m),Ba.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(Fa.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Oa.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Ba.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(Fa.calc(l),Oa.calc(l),Ba.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Iu(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function ov(n,e){const t=1-n;return t*t*e}function av(n,e){return 2*(1-n)*n*e}function lv(n,e){return n*n*e}function ir(n,e,t,i){return ov(n,e)+av(n,t)+lv(n,i)}function cv(n,e){const t=1-n;return t*t*t*e}function uv(n,e){const t=1-n;return 3*t*t*n*e}function hv(n,e){return 3*(1-n)*n*n*e}function fv(n,e){return n*n*n*e}function sr(n,e,t,i,s){return cv(n,e)+uv(n,t)+hv(n,i)+fv(n,s)}class zh extends In{constructor(e=new ce,t=new ce,i=new ce,s=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ce){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(sr(e,s.x,r.x,o.x,a.x),sr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class dv extends In{constructor(e=new D,t=new D,i=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new D){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(sr(e,s.x,r.x,o.x,a.x),sr(e,s.y,r.y,o.y,a.y),sr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Gh extends In{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pv extends In{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hh extends In{constructor(e=new ce,t=new ce,i=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ce){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(ir(e,s.x,r.x,o.x),ir(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mv extends In{constructor(e=new D,t=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new D){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(ir(e,s.x,r.x,o.x),ir(e,s.y,r.y,o.y),ir(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kh extends In{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(Iu(a,l.x,c.x,u.x,h.x),Iu(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new ce().fromArray(s))}return this}}var tl=Object.freeze({__proto__:null,ArcCurve:sv,CatmullRomCurve3:rv,CubicBezierCurve:zh,CubicBezierCurve3:dv,EllipseCurve:Sl,LineCurve:Gh,LineCurve3:pv,QuadraticBezierCurve:Hh,QuadraticBezierCurve3:mv,SplineCurve:kh});class gv extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new tl[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new tl[s.type]().fromJSON(s))}return this}}class nl extends gv{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Gh(this.currentPoint.clone(),new ce(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new Hh(this.currentPoint.clone(),new ce(e,t),new ce(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new zh(this.currentPoint.clone(),new ce(e,t),new ce(i,s),new ce(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new kh(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){const c=new Sl(e,t,i,s,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class bl extends pt{constructor(e=[new ce(0,-.5),new ce(.5,0),new ce(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Ut(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],u=1/t,h=new D,f=new ce,p=new D,g=new D,v=new D;let m=0,d=0;for(let E=0;E<=e.length-1;E++)switch(E){case 0:m=e[E+1].x-e[E].x,d=e[E+1].y-e[E].y,p.x=d*1,p.y=-m,p.z=d*0,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[E+1].x-e[E].x,d=e[E+1].y-e[E].y,p.x=d*1,p.y=-m,p.z=d*0,g.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(g)}for(let E=0;E<=t;E++){const x=i+E*u*s,S=Math.sin(x),C=Math.cos(x);for(let w=0;w<=e.length-1;w++){h.x=e[w].x*S,h.y=e[w].y,h.z=e[w].x*C,o.push(h.x,h.y,h.z),f.x=E/t,f.y=w/(e.length-1),a.push(f.x,f.y);const R=l[3*w+0]*S,N=l[3*w+1],y=l[3*w+0]*C;c.push(R,N,y)}}for(let E=0;E<t;E++)for(let x=0;x<e.length-1;x++){const S=x+E*e.length,C=S,w=S+e.length,R=S+e.length+1,N=S+1;r.push(C,w,N),r.push(R,N,w)}this.setIndex(r),this.setAttribute("position",new it(o,3)),this.setAttribute("uv",new it(a,2)),this.setAttribute("normal",new it(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bl(e.points,e.segments,e.phiStart,e.phiLength)}}class ii extends bl{constructor(e=1,t=1,i=4,s=8){const r=new nl;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new ii(e.radius,e.length,e.capSegments,e.radialSegments)}}class ui extends pt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new D,u=new ce;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const p=i+h/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new it(o,3)),this.setAttribute("normal",new it(a,3)),this.setAttribute("uv",new it(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ui(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Mn extends pt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],p=[];let g=0;const v=[],m=i/2;let d=0;E(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new it(h,3)),this.setAttribute("normal",new it(f,3)),this.setAttribute("uv",new it(p,2));function E(){const S=new D,C=new D;let w=0;const R=(t-e)/i;for(let N=0;N<=r;N++){const y=[],b=N/r,I=b*(t-e)+e;for(let G=0;G<=s;G++){const Q=G/s,U=Q*l+a,B=Math.sin(U),z=Math.cos(U);C.x=I*B,C.y=-b*i+m,C.z=I*z,h.push(C.x,C.y,C.z),S.set(B,R,z).normalize(),f.push(S.x,S.y,S.z),p.push(Q,1-b),y.push(g++)}v.push(y)}for(let N=0;N<s;N++)for(let y=0;y<r;y++){const b=v[y][N],I=v[y+1][N],G=v[y+1][N+1],Q=v[y][N+1];u.push(b,I,Q),u.push(I,G,Q),w+=6}c.addGroup(d,w,0),d+=w}function x(S){const C=g,w=new ce,R=new D;let N=0;const y=S===!0?e:t,b=S===!0?1:-1;for(let G=1;G<=s;G++)h.push(0,m*b,0),f.push(0,b,0),p.push(.5,.5),g++;const I=g;for(let G=0;G<=s;G++){const U=G/s*l+a,B=Math.cos(U),z=Math.sin(U);R.x=y*z,R.y=m*b,R.z=y*B,h.push(R.x,R.y,R.z),f.push(0,b,0),w.x=B*.5+.5,w.y=z*.5*b+.5,p.push(w.x,w.y),g++}for(let G=0;G<s;G++){const Q=C+G,U=I+G;S===!0?u.push(U,U+1,Q):u.push(U+1,U,Q),N+=3}c.addGroup(d,N,S===!0?1:2),d+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class oi extends Mn{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new oi(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Tl extends pt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new it(r,3)),this.setAttribute("normal",new it(r.slice(),3)),this.setAttribute("uv",new it(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const x=new D,S=new D,C=new D;for(let w=0;w<t.length;w+=3)p(t[w+0],x),p(t[w+1],S),p(t[w+2],C),l(x,S,C,E)}function l(E,x,S,C){const w=C+1,R=[];for(let N=0;N<=w;N++){R[N]=[];const y=E.clone().lerp(S,N/w),b=x.clone().lerp(S,N/w),I=w-N;for(let G=0;G<=I;G++)G===0&&N===w?R[N][G]=y:R[N][G]=y.clone().lerp(b,G/I)}for(let N=0;N<w;N++)for(let y=0;y<2*(w-N)-1;y++){const b=Math.floor(y/2);y%2===0?(f(R[N][b+1]),f(R[N+1][b]),f(R[N][b])):(f(R[N][b+1]),f(R[N+1][b+1]),f(R[N+1][b]))}}function c(E){const x=new D;for(let S=0;S<r.length;S+=3)x.x=r[S+0],x.y=r[S+1],x.z=r[S+2],x.normalize().multiplyScalar(E),r[S+0]=x.x,r[S+1]=x.y,r[S+2]=x.z}function u(){const E=new D;for(let x=0;x<r.length;x+=3){E.x=r[x+0],E.y=r[x+1],E.z=r[x+2];const S=m(E)/2/Math.PI+.5,C=d(E)/Math.PI+.5;o.push(S,1-C)}g(),h()}function h(){for(let E=0;E<o.length;E+=6){const x=o[E+0],S=o[E+2],C=o[E+4],w=Math.max(x,S,C),R=Math.min(x,S,C);w>.9&&R<.1&&(x<.2&&(o[E+0]+=1),S<.2&&(o[E+2]+=1),C<.2&&(o[E+4]+=1))}}function f(E){r.push(E.x,E.y,E.z)}function p(E,x){const S=E*3;x.x=e[S+0],x.y=e[S+1],x.z=e[S+2]}function g(){const E=new D,x=new D,S=new D,C=new D,w=new ce,R=new ce,N=new ce;for(let y=0,b=0;y<r.length;y+=9,b+=6){E.set(r[y+0],r[y+1],r[y+2]),x.set(r[y+3],r[y+4],r[y+5]),S.set(r[y+6],r[y+7],r[y+8]),w.set(o[b+0],o[b+1]),R.set(o[b+2],o[b+3]),N.set(o[b+4],o[b+5]),C.copy(E).add(x).add(S).divideScalar(3);const I=m(C);v(w,b+0,E,I),v(R,b+2,x,I),v(N,b+4,S,I)}}function v(E,x,S,C){C<0&&E.x===1&&(o[x]=E.x-1),S.x===0&&S.z===0&&(o[x]=C/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function d(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tl(e.vertices,e.indices,e.radius,e.details)}}class Vh extends nl{constructor(e){super(e),this.uuid=Ji(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new nl().fromJSON(s))}return this}}const _v={triangulate:function(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=Wh(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,f,p;if(i&&(r=Sv(n,e,r,t)),n.length>80*t){a=c=n[0],l=u=n[1];for(let g=t;g<s;g+=t)h=n[g],f=n[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return cr(r,o,t,a,l,p,0),o}};function Wh(n,e,t,i,s){let r,o;if(s===Dv(n,e,t,i)>0)for(r=e;r<t;r+=i)o=Nu(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=Nu(r,n[r],n[r+1],o);return o&&Jo(o,o.next)&&(hr(o),o=o.next),o}function Xi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Jo(t,t.next)||gt(t.prev,t,t.next)===0)){if(hr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function cr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Av(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?xv(n,i,s,r):vv(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),hr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Mv(Xi(n),e,t),cr(n,e,t,i,s,r,2)):o===2&&yv(n,e,t,i,s,r):cr(Xi(n),e,t,i,s,r,1);break}}}function vv(n){const e=n.prev,t=n,i=n.next;if(gt(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=p&&xs(s,a,r,l,o,c,g.x,g.y)&&gt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function xv(n,e,t,i){const s=n.prev,r=n,o=n.next;if(gt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,f=o.y,p=a<l?a<c?a:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,v=a>l?a>c?a:c:l>c?l:c,m=u>h?u>f?u:f:h>f?h:f,d=il(p,g,e,t,i),E=il(v,m,e,t,i);let x=n.prevZ,S=n.nextZ;for(;x&&x.z>=d&&S&&S.z<=E;){if(x.x>=p&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&xs(a,u,l,h,c,f,x.x,x.y)&&gt(x.prev,x,x.next)>=0||(x=x.prevZ,S.x>=p&&S.x<=v&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&xs(a,u,l,h,c,f,S.x,S.y)&&gt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;x&&x.z>=d;){if(x.x>=p&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&xs(a,u,l,h,c,f,x.x,x.y)&&gt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;S&&S.z<=E;){if(S.x>=p&&S.x<=v&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&xs(a,u,l,h,c,f,S.x,S.y)&&gt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Mv(n,e,t){let i=n;do{const s=i.prev,r=i.next.next;!Jo(s,r)&&Xh(s,i,i.next,r)&&ur(s,r)&&ur(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),hr(i),hr(i.next),i=n=r),i=i.next}while(i!==n);return Xi(i)}function yv(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Pv(o,a)){let l=qh(o,a);o=Xi(o,o.next),l=Xi(l,l.next),cr(o,e,t,i,s,r,0),cr(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Sv(n,e,t,i){const s=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=Wh(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(Cv(c));for(s.sort(Ev),r=0;r<s.length;r++)t=bv(s[r],t);return t}function Ev(n,e){return n.x-e.x}function bv(n,e){const t=Tv(n,e);if(!t)return e;const i=qh(t,n);return Xi(i,i.next),Xi(t,t.next)}function Tv(n,e){let t=e,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>i&&(i=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,l=s.x,c=s.y;let u=1/0,h;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&xs(o<c?r:i,o,l,c,o<c?i:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),ur(t,n)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&wv(s,t)))&&(s=t,u=h)),t=t.next;while(t!==a);return s}function wv(n,e){return gt(n.prev,n,e.prev)<0&&gt(e.next,n,n.next)<0}function Av(n,e,t,i){let s=n;do s.z===0&&(s.z=il(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Rv(s)}function Rv(n){let e,t,i,s,r,o,a,l,c=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(o>1);return n}function il(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Cv(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function xs(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Pv(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Lv(n,e)&&(ur(n,e)&&ur(e,n)&&Uv(n,e)&&(gt(n.prev,n,e.prev)||gt(n,e.prev,e))||Jo(n,e)&&gt(n.prev,n,n.next)>0&&gt(e.prev,e,e.next)>0)}function gt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Jo(n,e){return n.x===e.x&&n.y===e.y}function Xh(n,e,t,i){const s=ao(gt(n,e,t)),r=ao(gt(n,e,i)),o=ao(gt(t,i,n)),a=ao(gt(t,i,e));return!!(s!==r&&o!==a||s===0&&oo(n,t,e)||r===0&&oo(n,i,e)||o===0&&oo(t,n,i)||a===0&&oo(t,e,i))}function oo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function ao(n){return n>0?1:n<0?-1:0}function Lv(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Xh(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ur(n,e){return gt(n.prev,n,n.next)<0?gt(n,e,n.next)>=0&&gt(n,n.prev,e)>=0:gt(n,e,n.prev)<0||gt(n,n.next,e)<0}function Uv(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function qh(n,e){const t=new sl(n.i,n.x,n.y),i=new sl(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Nu(n,e,t,i){const s=new sl(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function hr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function sl(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Dv(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class rr{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return rr.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];Fu(e),Ou(i,e);let o=e.length;t.forEach(Fu);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Ou(i,t[l]);const a=_v.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Fu(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Ou(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class wl extends pt{constructor(e=new Vh([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new it(s,3)),this.setAttribute("uv",new it(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const d=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:Iv;let x,S=!1,C,w,R,N;d&&(x=d.getSpacedPoints(u),S=!0,f=!1,C=d.computeFrenetFrames(u,!1),w=new D,R=new D,N=new D),f||(m=0,p=0,g=0,v=0);const y=a.extractPoints(c);let b=y.shape;const I=y.holes;if(!rr.isClockWise(b)){b=b.reverse();for(let L=0,fe=I.length;L<fe;L++){const J=I[L];rr.isClockWise(J)&&(I[L]=J.reverse())}}const Q=rr.triangulateShape(b,I),U=b;for(let L=0,fe=I.length;L<fe;L++){const J=I[L];b=b.concat(J)}function B(L,fe,J){return fe||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(fe,J)}const z=b.length,V=Q.length;function K(L,fe,J){let ae,Z,De;const Me=L.x-fe.x,T=L.y-fe.y,M=J.x-L.x,F=J.y-L.y,se=Me*Me+T*T,re=Me*F-T*M;if(Math.abs(re)>Number.EPSILON){const ne=Math.sqrt(se),we=Math.sqrt(M*M+F*F),_e=fe.x-T/ne,be=fe.y+Me/ne,Y=J.x-F/we,le=J.y+M/we,X=((Y-_e)*F-(le-be)*M)/(Me*F-T*M);ae=_e+Me*X-L.x,Z=be+T*X-L.y;const Pe=ae*ae+Z*Z;if(Pe<=2)return new ce(ae,Z);De=Math.sqrt(Pe/2)}else{let ne=!1;Me>Number.EPSILON?M>Number.EPSILON&&(ne=!0):Me<-Number.EPSILON?M<-Number.EPSILON&&(ne=!0):Math.sign(T)===Math.sign(F)&&(ne=!0),ne?(ae=-T,Z=Me,De=Math.sqrt(se)):(ae=Me,Z=T,De=Math.sqrt(se/2))}return new ce(ae/De,Z/De)}const ee=[];for(let L=0,fe=U.length,J=fe-1,ae=L+1;L<fe;L++,J++,ae++)J===fe&&(J=0),ae===fe&&(ae=0),ee[L]=K(U[L],U[J],U[ae]);const te=[];let oe,he=ee.concat();for(let L=0,fe=I.length;L<fe;L++){const J=I[L];oe=[];for(let ae=0,Z=J.length,De=Z-1,Me=ae+1;ae<Z;ae++,De++,Me++)De===Z&&(De=0),Me===Z&&(Me=0),oe[ae]=K(J[ae],J[De],J[Me]);te.push(oe),he=he.concat(oe)}for(let L=0;L<m;L++){const fe=L/m,J=p*Math.cos(fe*Math.PI/2),ae=g*Math.sin(fe*Math.PI/2)+v;for(let Z=0,De=U.length;Z<De;Z++){const Me=B(U[Z],ee[Z],ae);ve(Me.x,Me.y,-J)}for(let Z=0,De=I.length;Z<De;Z++){const Me=I[Z];oe=te[Z];for(let T=0,M=Me.length;T<M;T++){const F=B(Me[T],oe[T],ae);ve(F.x,F.y,-J)}}}const q=g+v;for(let L=0;L<z;L++){const fe=f?B(b[L],he[L],q):b[L];S?(R.copy(C.normals[0]).multiplyScalar(fe.x),w.copy(C.binormals[0]).multiplyScalar(fe.y),N.copy(x[0]).add(R).add(w),ve(N.x,N.y,N.z)):ve(fe.x,fe.y,0)}for(let L=1;L<=u;L++)for(let fe=0;fe<z;fe++){const J=f?B(b[fe],he[fe],q):b[fe];S?(R.copy(C.normals[L]).multiplyScalar(J.x),w.copy(C.binormals[L]).multiplyScalar(J.y),N.copy(x[L]).add(R).add(w),ve(N.x,N.y,N.z)):ve(J.x,J.y,h/u*L)}for(let L=m-1;L>=0;L--){const fe=L/m,J=p*Math.cos(fe*Math.PI/2),ae=g*Math.sin(fe*Math.PI/2)+v;for(let Z=0,De=U.length;Z<De;Z++){const Me=B(U[Z],ee[Z],ae);ve(Me.x,Me.y,h+J)}for(let Z=0,De=I.length;Z<De;Z++){const Me=I[Z];oe=te[Z];for(let T=0,M=Me.length;T<M;T++){const F=B(Me[T],oe[T],ae);S?ve(F.x,F.y+x[u-1].y,x[u-1].x+J):ve(F.x,F.y,h+J)}}}ie(),me();function ie(){const L=s.length/3;if(f){let fe=0,J=z*fe;for(let ae=0;ae<V;ae++){const Z=Q[ae];ze(Z[2]+J,Z[1]+J,Z[0]+J)}fe=u+m*2,J=z*fe;for(let ae=0;ae<V;ae++){const Z=Q[ae];ze(Z[0]+J,Z[1]+J,Z[2]+J)}}else{for(let fe=0;fe<V;fe++){const J=Q[fe];ze(J[2],J[1],J[0])}for(let fe=0;fe<V;fe++){const J=Q[fe];ze(J[0]+z*u,J[1]+z*u,J[2]+z*u)}}i.addGroup(L,s.length/3-L,0)}function me(){const L=s.length/3;let fe=0;Re(U,fe),fe+=U.length;for(let J=0,ae=I.length;J<ae;J++){const Z=I[J];Re(Z,fe),fe+=Z.length}i.addGroup(L,s.length/3-L,1)}function Re(L,fe){let J=L.length;for(;--J>=0;){const ae=J;let Z=J-1;Z<0&&(Z=L.length-1);for(let De=0,Me=u+m*2;De<Me;De++){const T=z*De,M=z*(De+1),F=fe+ae+T,se=fe+Z+T,re=fe+Z+M,ne=fe+ae+M;Ve(F,se,re,ne)}}}function ve(L,fe,J){l.push(L),l.push(fe),l.push(J)}function ze(L,fe,J){Ce(L),Ce(fe),Ce(J);const ae=s.length/3,Z=E.generateTopUV(i,s,ae-3,ae-2,ae-1);We(Z[0]),We(Z[1]),We(Z[2])}function Ve(L,fe,J,ae){Ce(L),Ce(fe),Ce(ae),Ce(fe),Ce(J),Ce(ae);const Z=s.length/3,De=E.generateSideWallUV(i,s,Z-6,Z-3,Z-2,Z-1);We(De[0]),We(De[1]),We(De[3]),We(De[1]),We(De[2]),We(De[3])}function Ce(L){s.push(l[L*3+0]),s.push(l[L*3+1]),s.push(l[L*3+2])}function We(L){r.push(L.x),r.push(L.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Nv(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new tl[s.type]().fromJSON(s)),new wl(i,e.options)}}const Iv={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new ce(r,o),new ce(a,l),new ce(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],f=e[s*3],p=e[s*3+1],g=e[s*3+2],v=e[r*3],m=e[r*3+1],d=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ce(o,1-l),new ce(c,1-h),new ce(f,1-g),new ce(v,1-d)]:[new ce(a,1-l),new ce(u,1-h),new ce(p,1-g),new ce(m,1-d)]}};function Nv(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Al extends Tl{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Al(e.radius,e.detail)}}class Yt extends pt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new D,f=new D,p=[],g=[],v=[],m=[];for(let d=0;d<=i;d++){const E=[],x=d/i;let S=0;d===0&&o===0?S=.5/t:d===i&&l===Math.PI&&(S=-.5/t);for(let C=0;C<=t;C++){const w=C/t;h.x=-e*Math.cos(s+w*r)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(s+w*r)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),m.push(w+S,1-x),E.push(c++)}u.push(E)}for(let d=0;d<i;d++)for(let E=0;E<t;E++){const x=u[d][E+1],S=u[d][E],C=u[d+1][E],w=u[d+1][E+1];(d!==0||o>0)&&p.push(x,S,w),(d!==i-1||l<Math.PI)&&p.push(S,C,w)}this.setIndex(p),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(v,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class dn extends pt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new D,h=new D,f=new D;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){const v=g/s*r,m=p/i*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(v),h.y=(e+t*Math.cos(m))*Math.sin(v),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){const v=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,d=(s+1)*(p-1)+g,E=(s+1)*p+g;o.push(v,m,E),o.push(m,d,E)}this.setIndex(o),this.setAttribute("position",new it(a,3)),this.setAttribute("normal",new it(l,3)),this.setAttribute("uv",new it(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class He extends Gs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_h,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Bu={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Fv{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const Ov=new Fv;class Rl{constructor(e){this.manager=e!==void 0?e:Ov,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Rl.DEFAULT_MATERIAL_NAME="__DEFAULT";class Bv extends Rl{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Bu.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=lr("img");function l(){u(),Bu.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Yh extends Rl{constructor(e){super(e)}load(e,t,i,s){const r=new jt,o=new Bv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Cl extends ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class zv extends Cl{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const za=new dt,zu=new D,Gu=new D;class Jh{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vl,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;zu.setFromMatrixPosition(e.matrixWorld),t.position.copy(zu),Gu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gu),t.updateMatrixWorld(),za.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(za),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(za)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Gv extends Jh{constructor(){super(new rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Ps*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Zh extends Cl{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Gv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Hv extends Jh{constructor(){super(new xl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ga extends Cl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.shadow=new Hv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class kv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Hu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Hu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Hu(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pl);const Kh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class yr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Vv=new xl(-1,1,1,-1,0,1);class Wv extends pt{constructor(){super(),this.setAttribute("position",new it([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new it([0,2,0,0,2,0],2))}}const Xv=new Wv;class jh{constructor(e){this._mesh=new xe(Xv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Vv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class qv extends yr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof an?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Co.clone(e.uniforms),this.material=new an({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new jh(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class ku extends yr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Yv extends yr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Jv{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new ce);this._width=i.width,this._height=i.height,t=new bn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Jn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new qv(Kh),this.copyPass.material.blending=Yn,this.clock=new kv}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ku!==void 0&&(o instanceof ku?i=!0:o instanceof Yv&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Zv extends yr{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ne}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const Kv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ne(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ds extends yr{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new ce(e.x,e.y):new ce(256,256),this.clearColor=new Ne(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new bn(r,o,{type:Jn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new bn(r,o,{type:Jn});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const p=new bn(r,o,{type:Jn});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}const a=Kv;this.highPassUniforms=Co.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new an({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ce(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Kh;this.copyUniforms=Co.clone(u.uniforms),this.blendMaterial=new an({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:yn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ne,this.oldClearAlpha=1,this.basic=new on,this.fsQuad=new jh(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ce(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ds.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ds.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new an({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ce(.5,.5)},direction:{value:new ce(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new an({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Ds.BlurDirectionX=new ce(1,0);Ds.BlurDirectionY=new ce(0,1);function jv(n){const e=new Bh({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0});e.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),e.setSize(window.innerWidth,window.innerHeight),e.outputColorSpace=Mt,e.toneMapping=ah,e.toneMappingExposure=1.15,e.shadowMap.enabled=!0,e.shadowMap.type=rh,n.appendChild(e.domElement);const t=new nv;t.background=new Ne(393487),t.fog=new yl(393487,.018);const i=new rn(58,window.innerWidth/window.innerHeight,.1,400);i.position.set(-8,6,12);const s=new zv(10123007,1444398,.55);t.add(s);const r=new Ga(16773328,.7);r.position.set(-12,26,10),r.castShadow=!0,r.shadow.mapSize.set(1024,1024),r.shadow.camera.near=1,r.shadow.camera.far=90,r.shadow.camera.left=-40,r.shadow.camera.right=40,r.shadow.camera.top=40,r.shadow.camera.bottom=-40,r.shadow.bias=-8e-4,t.add(r),t.add(r.target);const o=new Ga(8376575,.5);o.position.set(16,12,-16),t.add(o);const a=new Ga(16756832,.25);a.position.set(6,-4,14),t.add(a);const l=new Jv(e);l.addPass(new Zv(t,i));const c=new Ds(new ce(window.innerWidth,window.innerHeight),.7,.85,.82);l.addPass(c);function u(){const m=window.innerWidth,d=window.innerHeight;i.aspect=m/d,i.updateProjectionMatrix(),e.setSize(m,d),l.setSize(m,d)}window.addEventListener("resize",u);const h=new URLSearchParams(location.search).has("lowfx");e.info.autoReset=!1;let f=0;return t.onAfterRender=()=>{f=e.info.render.calls},{renderer:e,scene:t,camera:i,composer:l,key:r,ambient:s,rim:o,fill:a,render:h?()=>{e.info.reset(),e.render(t,i)}:()=>{e.info.reset(),l.render()},calls:()=>f,callsTotal:()=>e.info.render.calls}}const $v=[],Vu={},$h=[],Qv=n=>$v.includes(n)?"art/"+n:null,ex=n=>Vu[n]?"sky/"+Vu[n]:null,tx=n=>$h.includes(n)?"voice/"+n+".mp3":null,nx=()=>$h.length>0,Pl=(n,e)=>{const t=document.createElement("canvas");return t.width=n,t.height=e,t},Ll=n=>{const e=new Yo(n);return e.colorSpace=Mt,e.anisotropy=4,e};function Ul(n,e){try{document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>{n(),e.needsUpdate=!0}).catch(()=>{})}catch{}}function Wu(n,e){const t=Qv(n);t&&new Yh().load(t,i=>{i.colorSpace=Mt,e.map=i,e.needsUpdate=!0},void 0,()=>{})}function Xu(n,e,t,i){n.beginPath();for(let s=0;s<10;s++){const r=-Math.PI/2+s*Math.PI/5,o=s%2?i*.44:i;n[s?"lineTo":"moveTo"](e+Math.cos(r)*o,t+Math.sin(r)*o)}n.closePath()}function ix(){const n=Pl(1024,288),e=n.getContext("2d"),t=()=>{const s=e.createLinearGradient(0,0,0,288);s.addColorStop(0,"#33081a"),s.addColorStop(.5,"#590f28"),s.addColorStop(1,"#2a0614"),e.fillStyle=s,e.fillRect(0,0,1024,288);for(let o=0;o<26;o++)e.fillStyle=o%2?"rgba(255,207,63,.055)":"rgba(255,255,255,.02)",e.fillRect(o*40,0,20,288);e.strokeStyle="#ffcf3f",e.lineWidth=12,e.strokeRect(16,16,992,256),e.strokeStyle="#ffe9a8",e.lineWidth=4,e.strokeRect(38,38,948,212),e.textAlign="center",e.textBaseline="middle",e.font='700 128px Fredoka, Impact, "Arial Black", sans-serif',e.lineJoin="round",e.lineWidth=18,e.strokeStyle="#4a0a18",e.strokeText("TRAPEZE STARS",512,150);const r=e.createLinearGradient(0,80,0,218);r.addColorStop(0,"#fffadf"),r.addColorStop(.48,"#ffcf3f"),r.addColorStop(1,"#ff8f18"),e.fillStyle=r,e.fillText("TRAPEZE STARS",512,150)};t();const i=Ll(n);return Ul(t,i),i}function sx(){const n=Pl(1024,160),e=n.getContext("2d"),t=()=>{e.fillStyle="#12040f",e.fillRect(0,0,1024,160),e.strokeStyle="#ffcf3f",e.lineWidth=7,e.strokeRect(8,8,1008,144),e.textAlign="center",e.textBaseline="middle",e.font='700 62px Fredoka, Impact, "Arial Black", sans-serif',e.fillStyle="#ffe9a8",e.fillText("NOW SHOWING  ·  MARC & CLAIRE",512,86)};t();const i=Ll(n);return Ul(t,i),i}function rx(n){const e=Pl(384,576),t=e.getContext("2d"),i=()=>{for(let r=0;r<12;r++)t.fillStyle=r%2?"#f6e9cf":"#d4293a",t.fillRect(r*32,0,32,576);t.fillStyle="rgba(18,4,28,.76)",t.fillRect(26,26,332,524),t.strokeStyle="#ffcf3f",t.lineWidth=11,t.strokeRect(20,20,344,536),t.strokeStyle="#ffe9a8",t.lineWidth=3,t.strokeRect(40,40,304,496),t.fillStyle="rgba(255,207,63,.9)",Xu(t,192,236,96),t.fill(),t.fillStyle="rgba(18,4,28,.85)",Xu(t,192,236,62),t.fill(),t.textAlign="center",t.textBaseline="middle",t.fillStyle="#ffe9a8",t.font="700 40px Fredoka, Impact, sans-serif",t.fillText(n===1?"THE FLYING":"ONE NIGHT",192,108),t.fillText(n===1?"MARC":"CLAIRE",192,152),t.fillStyle="#fff",t.font="700 34px Fredoka, Impact, sans-serif",t.fillText(n===1?"TONIGHT":"ON STAGE",192,396),t.fillStyle="#ffcf3f",t.font="700 26px Fredoka, sans-serif",t.fillText("★  TRAPEZE STARS  ★",192,452)};i();const s=Ll(e);return Ul(i,s),s}function ox(n,e,t,i){const s=new Dt;s.position.set(e,0,t),s.rotation.y=i,n.add(s);const r=-3,o=8.2,a=10,l=rl("#4a0c22","#2a0614",9);l.repeat.set(9,1);const c=new xe(new mn(o*2,a,.9),new He({map:l,roughness:.85,emissive:2754584,emissiveIntensity:.9}));c.position.set(0,r,0),s.add(c);const u=new xe(new mn(o*2+.7,.6,1.3),new He({color:16764735,emissive:16751120,emissiveIntensity:1.1,roughness:.4,metalness:.3}));u.position.set(0,r+a/2+.3,.2),s.add(u);const h=new He({color:15784360,roughness:.6,metalness:.2,emissive:4861968,emissiveIntensity:.9});for(const b of[-1,1]){const I=new xe(new mn(1.1,a,1.2),h);I.position.set(b*(o-.25),r,.35),s.add(I)}const f=new on({map:ix(),toneMapped:!1}),p=new xe(new Un(12.4,3.5),f);p.position.set(0,r+2.7,.5),s.add(p),Wu("logo.png",f);const g=6,v=4,m=3.4,d=r-1.2,E=new Vh;E.moveTo(-g,0),E.lineTo(g,0),E.lineTo(v,m),E.lineTo(-v,m),E.closePath();const x=new xe(new wl(E,{depth:.65,bevelEnabled:!1}),new He({color:12853046,emissive:6948883,emissiveIntensity:1,roughness:.65,side:yt}));x.rotation.x=Math.PI/2,x.position.set(0,d,.45),s.add(x);const S=new xe(new Un(v*1.9,1.15),new on({map:sx(),toneMapped:!1}));S.position.set(0,d-.82,.45+m+.03),s.add(S);for(const[b,I]of[[-1,1],[1,2]]){const G=new on({map:rx(I),toneMapped:!1}),Q=new xe(new Un(2.3,3.5),G);Q.position.set(b*7,r-3,.52),s.add(Q),Wu("poster-"+I+".jpg",G)}const C=[];{const G=r+2.7,Q=.62,U=17,B=6,z=[];for(let V=0;V<U;V++)z.push([-6.5+2*6.5*V/U,-2.1]);for(let V=0;V<B;V++)z.push([6.5,-2.1+2*2.1*V/B]);for(let V=0;V<U;V++)z.push([6.5-2*6.5*V/U,2.1]);for(let V=0;V<B;V++)z.push([-6.5,2.1-2*2.1*V/B]);z.forEach((V,K)=>C.push({x:V[0],y:G+V[1],z:Q,s:K/z.length,loop:0}))}{const I=.45+m,G=d-.12,Q=[],U=6,B=19;for(let z=0;z<U;z++){const V=z/U;Q.push([-(g+(v-g)*V),.5+(I-.5)*V])}for(let z=0;z<=B;z++){const V=z/B;Q.push([-v+2*v*V,I])}for(let z=1;z<=U;z++){const V=1-z/U;Q.push([g+(v-g)*V,.5+(I-.5)*V])}Q.forEach((z,V)=>C.push({x:z[0],y:G,z:z[1],s:V/Q.length,loop:1}))}const w=new Us(new Yt(.17,6,5),new on({toneMapped:!1}),C.length);w.frustumCulled=!1;const R=new ct;C.forEach((b,I)=>{R.position.set(b.x,b.y,b.z),R.updateMatrix(),w.setMatrixAt(I,R.matrix),w.setColorAt(I,new Ne(1,.85,.4))}),w.instanceMatrix.needsUpdate=!0,s.add(w);const N=new Ne;return{marquee:s,update:b=>{for(let I=0;I<C.length;I++){const G=C[I],Q=Math.sin((G.s-b*(G.loop?.22:.3))*Math.PI*2*3),U=.22+.78*Math.pow(Math.max(0,Q),2.2);N.setRGB(U*1.6,U*1.32+.05,U*.55),w.setColorAt(I,N)}w.instanceColor&&(w.instanceColor.needsUpdate=!0)},bulbCount:C.length}}function rl(n="#d4293a",e="#f6e9cf",t=2){const i=document.createElement("canvas");i.width=128,i.height=8;const s=i.getContext("2d");for(let o=0;o<t*2;o++)s.fillStyle=o%2?e:n,s.fillRect(o/(t*2)*i.width,0,i.width/(t*2),i.height);const r=new Yo(i);return r.wrapS=Wi,r.wrapT=Wi,r.colorSpace=Mt,r}function ax(n="#20e0ff"){const e=document.createElement("canvas");e.width=e.height=64;const t=e.getContext("2d");t.strokeStyle=n,t.lineWidth=2,t.strokeRect(1,1,62,62);const i=new Yo(e);return i.wrapS=i.wrapT=Wi,i}const qu=[{bg:393487,fd:.018,hs:10123007,hg:1444398,key:16773328,ki:.7},{bg:267014,fd:.024,hs:9437087,hg:467723,key:15269840,ki:.75},{bg:3805222,fd:.012,hs:16756848,hg:3481642,key:16763024,ki:.85},{bg:66056,fd:.008,hs:7307263,hg:263180,key:12571903,ki:.55}].map(n=>({bg:new Ne(n.bg),fd:n.fd,hs:new Ne(n.hs),hg:new Ne(n.hg),key:new Ne(n.key),ki:n.ki}));function lx(n,e){const t=new Dt;n.add(t);const i=[],s=[],[r,o,a,l]=e,c=r.x0,h=l.x1-c,f=[0,1,2,3].map(()=>{const Y=new Dt;return t.add(Y),Y}),p=55,g=[{c:1837612,rough:.42,metal:.45},{c:795664,rough:.85,metal:.05},{c:14728308,rough:.95,metal:0},{c:592148,rough:.5,metal:.6}];e.forEach((Y,le)=>{const X=le===0?20:0,Pe=le===3?20:0,Ae=Y.x1-Y.x0+X+Pe,ye=new xe(new mn(Ae,1,40),new He({color:g[le].c,roughness:g[le].rough,metalness:g[le].metal}));ye.position.set(Y.x0-X+Ae/2,-8.5,0),ye.receiveShadow=!0,t.add(ye)});const v=(r.x0+r.x1)/2,m=r.x1-r.x0,d=new xe(new ui(13,48),new He({color:9048880,roughness:.3,metalness:.55,emissive:2753552,emissiveIntensity:.5}));d.rotation.x=-Math.PI/2,d.position.set(v,-7.97,0),d.receiveShadow=!0,f[0].add(d);const E=new xe(new dn(13,.28,8,64),new He({color:16764735,emissive:16747008,emissiveIntensity:1.1,roughness:.4}));E.rotation.x=-Math.PI/2,E.position.set(v,-7.9,0),f[0].add(E);const x=new He({color:16764735,emissive:16747008,emissiveIntensity:1.2,roughness:.5});for(const Y of[-9,9]){const le=new xe(new mn(m+16,.25,.5),x);le.position.set(v,-7.9,Y),f[0].add(le)}const S=m/2+18,C=13,w=33,R=rl("#5a1420","#3a2a1e",26);R.repeat.set(26,1);const N=new xe(new Mn(S,S,C+8.5,48,1,!0),new He({map:R,side:Kt,roughness:.95,emissive:1182228,emissiveIntensity:.35}));N.position.set(v,(C-8.5)/2,0),f[0].add(N);const y=rl("#d4293a","#f6e9cf",1);y.repeat.set(24,1);const b=new xe(new Mn(6,S,w-C,48,1,!0),new He({map:y,side:yt,roughness:.8,emissive:2755856,emissiveIntensity:.5}));b.position.set(v,(C+w)/2,0),f[0].add(b);const I=new xe(new dn(6,.4,8,40),new He({color:16764735,emissive:16755456,emissiveIntensity:1.3,roughness:.4}));I.rotation.x=Math.PI/2,I.position.set(v,w,0),f[0].add(I);const G=new xe(new Mn(.3,.36,w+12,10),new He({color:15260088,roughness:.7,metalness:.2}));G.position.set(v,(w+12)/2-8.5,0),f[0].add(G);const Q=new xe(new oi(.5,1.6,3),new He({color:16735354,emissive:16723285,emissiveIntensity:.7,side:yt}));Q.position.set(v+.8,w+3.2,0),Q.rotation.z=-Math.PI/2,f[0].add(Q);const U=new xe(new dn(3.4,.45,10,32,Math.PI),new He({color:16769162,emissive:16755504,emissiveIntensity:1.4,roughness:.4}));U.position.set(r.x1,-4.6,0),f[0].add(U);const B=ox(f[0],-17,-26,.4);s.push(Y=>B.update(Y));const z=new pt,V=700,K=new Float32Array(V*3);for(let Y=0;Y<V;Y++)K[Y*3]=c-30+Math.random()*(h+90),K[Y*3+1]=24+Math.random()*46,K[Y*3+2]=(Math.random()-.5)*50;z.setAttribute("position",new _t(K,3));const ee=new Hi(z,new ci({color:16773824,size:.5,sizeAttenuation:!0,transparent:!0,opacity:.9}));t.add(ee);const te=3,oe=Math.ceil(m/2.2)+6,he=te*oe*2,q=new Yt(.5,10,10),ie=new He({roughness:.7,vertexColors:!1}),me=new Us(q,ie,he),Re=[5556479,16739760,16764735,9109441,12160255,16747100],ve=new ct,ze=[];let Ve=0;for(const Y of[-1,1])for(let le=0;le<te;le++)for(let X=0;X<oe;X++){const Pe=r.x0+4+X*2.2+le%2*1.1,Ae=Y*(12+le*2.2),ye=-6.5+le*1.4;ve.position.set(Pe,ye,Ae),ve.scale.setScalar(.8+Math.random()*.5),ve.updateMatrix(),me.setMatrixAt(Ve,ve.matrix),me.setColorAt(Ve,new Ne(Re[Math.random()*Re.length|0]).multiplyScalar(.6)),ze.push({x:Pe,y:ye,z:Ae}),Ve++}me.instanceMatrix.needsUpdate=!0,me.instanceColor&&(me.instanceColor.needsUpdate=!0),f[0].add(me),s.push(Y=>{for(let le=0;le<ze.length;le++){const X=ze[le];ve.position.set(X.x,X.y+Math.sin(Y*2+le*.7)*.12,X.z),ve.updateMatrix(),me.setMatrixAt(le,ve.matrix)}me.instanceMatrix.needsUpdate=!0});const Ce=[16735354,16764735,5556479,9109441,12160255],We=Math.floor(m/3),L=new oi(.5,1.1,4),fe=new He({emissive:0,roughness:.6,side:yt,vertexColors:!1}),J=new Us(L,fe,We),ae=new ct;for(let Y=0;Y<We;Y++){const le=new Ne(Ce[Y%Ce.length]);ae.position.set(r.x0+4+Y*3,13+Math.sin(Y*.6)*.4,-6),ae.rotation.set(Math.PI,Math.PI/4,0),ae.scale.setScalar(1),ae.updateMatrix(),J.setMatrixAt(Y,ae.matrix),J.setColorAt(Y,le)}J.instanceMatrix.needsUpdate=!0,J.instanceColor&&(J.instanceColor.needsUpdate=!0),f[0].add(J);const Z=[{x:r.x0+12,col:16739760},{x:v,col:5556479},{x:r.x1-6,col:16764735}];for(const Y of Z){const le=new Zh(Y.col,120,60,Math.PI/9,.5,1.4);le.position.set(Y.x,20,6);const X=new ct;X.position.set(Y.x,0,0),f[0].add(X),le.target=X,f[0].add(le);const Pe=new xe(new oi(2.5,26,24,1,!0),new on({color:Y.col,transparent:!0,opacity:.03,side:yt,depthWrite:!1,blending:yn}));Pe.position.copy(le.position),f[0].add(Pe),i.push({sp:le,beam:Pe,tgt:X,x:Y.x,phase:Math.random()*6})}s.push(Y=>{for(const le of i){const X=Math.sin(Y*.7+le.phase)*7;le.tgt.position.x=le.x+X,le.beam.rotation.z=-Math.atan2(X,26)}Q.rotation.z=-Math.PI/2+Math.sin(Y*3)*.2});{const Y=o.x1-o.x0,le=new He({color:2062892,roughness:.85}),X=new He({color:3120184,roughness:.85}),Pe=new He({color:4861976,roughness:.9});for(let Ue=0;Ue<8;Ue++){const Te=o.x0+2+Math.random()*(Y-4),$=(Ue%2?1:-1)*(9+Math.random()*5),P=4+Math.random()*3,ue=new xe(new Mn(.35,.5,P,7),Pe);ue.position.set(Te,-8+P/2,$),f[1].add(ue);const pe=new xe(new Yt(1.6+Math.random(),9,9),Ue%2?le:X);pe.position.set(Te,-8+P+.8,$),pe.scale.y=.8,f[1].add(pe)}const Ae=new He({color:4033075,roughness:.9});for(let Ue=0;Ue<7;Ue++){const Te=4+Math.random()*4,$=new xe(new Mn(.05,.08,Te,5),Ae);$.position.set(o.x0+2+Math.random()*(Y-4),13-Te/2,(Ue%2?1:-1)*(4+Math.random()*3)),f[1].add($)}const ye=60,Se=new Float32Array(ye*3),de=[];for(let Ue=0;Ue<ye;Ue++)de.push({x:o.x0+Math.random()*Y,y:-6+Math.random()*14,z:(Math.random()-.5)*18,p:Math.random()*6.28});const Le=new pt;Le.setAttribute("position",new _t(Se,3));const Oe=new Hi(Le,new ci({color:14221168,size:.28,transparent:!0,opacity:.9,blending:yn,depthWrite:!1}));f[1].add(Oe),s.push(Ue=>{for(let Te=0;Te<ye;Te++){const $=de[Te];Se[Te*3]=$.x+Math.sin(Ue*.7+$.p)*1.4,Se[Te*3+1]=$.y+Math.sin(Ue*1.1+$.p*2)*.9,Se[Te*3+2]=$.z+Math.cos(Ue*.5+$.p)*1.2}Le.attributes.position.needsUpdate=!0})}{const Y=a.x1-a.x0,le=(a.x0+a.x1)/2,X=new xe(new ui(8,32),new on({color:16752704}));X.position.set(le,9,-38),f[2].add(X);const Pe=new xe(new ui(12,32),new on({color:16740400,transparent:!0,opacity:.25,blending:yn,depthWrite:!1}));Pe.position.set(le,9,-38.5),f[2].add(Pe);const Ae=new xe(new Un(Y+34,20),new He({color:1731210,roughness:.25,metalness:.6,emissive:670282,emissiveIntensity:.5}));Ae.rotation.x=-Math.PI/2,Ae.position.set(le,-7.95,-22),f[2].add(Ae);const ye=new He({color:9068596,roughness:.9}),Se=new He({color:2792010,roughness:.8,side:yt});for(let Oe=0;Oe<5;Oe++){const Ue=a.x0+3+Oe/5*(Y-6)+Math.random()*2,Te=(Oe%2?1:-1)*(9+Math.random()*4),$=5+Math.random()*2,P=new xe(new Mn(.22,.34,$,7),ye);P.position.set(Ue,-8+$/2,Te),P.rotation.z=(Math.random()-.5)*.25,f[2].add(P);for(let ue=0;ue<5;ue++){const pe=new xe(new oi(.35,2.6,4),Se),Be=ue/5*Math.PI*2;pe.position.set(Ue+Math.cos(Be)*1.1,-8+$+.3,Te+Math.sin(Be)*1.1),pe.rotation.set(Math.sin(Be)*1.9,0,-Math.cos(Be)*1.9),f[2].add(pe)}}const de=new on({color:16774368,side:yt}),Le=[];for(let Oe=0;Oe<3;Oe++){const Ue=new Dt,Te=[];for(const $ of[-1,1]){const P=new xe(new Un(.9,.28),de);P.position.x=$*.45,Ue.add(P),Te.push(P)}Ue.position.set(a.x0+4+Oe*Y/3,8+Oe*2,-12-Oe*4),f[2].add(Ue),Le.push({gull:Ue,wings:Te,bx:Ue.position.x,ph:Oe*2.1})}s.push(Oe=>{for(const Ue of Le){const Te=Math.sin(Oe*7+Ue.ph)*.6;Ue.wings[0].rotation.y=Te,Ue.wings[1].rotation.y=-Te,Ue.gull.position.x=Ue.bx+Math.sin(Oe*.22+Ue.ph)*5,Ue.gull.position.y+=Math.sin(Oe*1.3+Ue.ph)*.004}})}{const Y=l.x1-l.x0,le=(l.x0+l.x1)/2,X=ax("#20e0ff");X.repeat.set(Y/2.4,16);const Pe=new xe(new Un(Y+16,40),new on({map:X,transparent:!0,opacity:.35,blending:yn,depthWrite:!1}));Pe.rotation.x=-Math.PI/2,Pe.position.set(le,-7.9,0),f[3].add(Pe);for(let $=0;$<5;$++){const P=new xe(new dn(6,.14,8,40),new He({color:$%2?16732120:3205375,emissive:$%2?11540634:563392,emissiveIntensity:1.6,roughness:.3}));P.rotation.y=Math.PI/2,P.position.set(l.x0+3+($+.5)*(Y-6)/5,0,0),f[3].add(P)}const Ae=new xe(new Yt(4,20,20),new He({color:10119935,emissive:3674730,emissiveIntensity:.8,roughness:.6}));Ae.position.set(le+10,20,-34),f[3].add(Ae);const ye=new xe(new dn(6,.35,8,40),new He({color:16767392,emissive:10512928,emissiveIntensity:.9,roughness:.5}));ye.rotation.x=Math.PI/2.6,ye.position.copy(Ae.position),f[3].add(ye);const Se=6,de=new Float32Array(Se*3),Le=[];for(let $=0;$<Se;$++)de[$*3]=l.x0+Math.random()*Y,de[$*3+1]=20+Math.random()*25,de[$*3+2]=-20-Math.random()*15,Le.push({vx:-14-Math.random()*10,vy:-6-Math.random()*5});const Oe=new pt;Oe.setAttribute("position",new _t(de,3));const Ue=new Hi(Oe,new ci({color:13693183,size:.7,transparent:!0,opacity:.95,blending:yn,depthWrite:!1}));f[3].add(Ue);let Te=0;s.push($=>{const P=Math.min(.05,$-Te);Te=$;for(let ue=0;ue<Se;ue++)de[ue*3]+=Le[ue].vx*P,de[ue*3+1]+=Le[ue].vy*P,(de[ue*3+1]<5||de[ue*3]<l.x0-10)&&(de[ue*3]=l.x0+10+Math.random()*(Y+10),de[ue*3+1]=26+Math.random()*20);Oe.attributes.position.needsUpdate=!0})}const De=[o.x0,a.x0,l.x0],Me=Y=>(Y=Math.max(0,Math.min(1,Y)),Y*Y*(3-2*Y)),T=new Ne,M=new Ne,F=new Ne,se=new Ne,re=["circus","jungle","beach","space"],ne=[null,null,null,null];re.forEach((Y,le)=>{const X=ex(Y);X&&new Yh().load(X,Pe=>{Pe.mapping=Eo,Pe.colorSpace=Mt,ne[le]=Pe},void 0,()=>{})});const we=new Ne;function _e(Y,le){for(let Le=0;Le<4;Le++)f[Le].visible=le>e[Le].x0-p&&le<e[Le].x1+p;let X=0;for(const Le of De)X+=Me((le-(Le-4))/8);const Pe=Math.min(2,Math.floor(X)),Ae=X-Pe,ye=qu[Pe],Se=qu[Math.min(3,Pe+1)];T.lerpColors(ye.bg,Se.bg,Ae),M.lerpColors(ye.hs,Se.hs,Ae),F.lerpColors(ye.hg,Se.hg,Ae),se.lerpColors(ye.key,Se.key,Ae);const de=Ae>.5?Math.min(3,Pe+1):Pe;ne[de]?Y.scene.background!==ne[de]&&(Y.scene.background=ne[de]):(Y.scene.background!==we&&(Y.scene.background=we),we.copy(T)),Y.scene.fog.color.copy(T),Y.scene.fog.density=ye.fd+(Se.fd-ye.fd)*Ae,Y.ambient.color.copy(M),Y.ambient.groundColor.copy(F),Y.key.color.copy(se),Y.key.intensity=ye.ki+(Se.ki-ye.ki)*Ae}function be(Y){for(const le of s)le(Y)}return{group:t,update:be,applyMood:_e,spots:i,marquee:B.marquee,bulbCount:B.bulbCount}}const cx=1.92;function Dl(n){const e=n==="claire",t=new Dt,i=new Dt,s=16239008,r=e?16735142:3112928,o=e?16765503:8380671,a=e?16242808:15780944,l=(C,w={})=>new He({color:C,roughness:.55,metalness:0,...w}),c=()=>l(a,{roughness:.45});if(!e){const C=new xe(new oi(.62,1.1,12,1,!0,0,Math.PI),new He({color:13904698,emissive:5901587,emissiveIntensity:.35,roughness:.6,side:yt}));C.position.set(0,.7,-.34),C.rotation.x=-.35,i.add(C),t.userData.cape=C}const u=new xe(new ii(.42,.7,6,12),l(r));if(u.position.y=.55,u.castShadow=!0,i.add(u),e){const C=new xe(new oi(.66,.42,16,1,!0),new He({color:16769520,emissive:16739760,emissiveIntensity:.5,roughness:.5,side:yt}));C.position.y=.34,C.rotation.x=Math.PI,i.add(C)}const h=new xe(new ui(.18,5),new He({color:16773808,emissive:o,emissiveIntensity:1.6,side:yt}));h.position.set(0,.72,.43),i.add(h);const f=new xe(new Yt(.34,16,16),l(s));f.position.y=1.28,f.castShadow=!0,i.add(f);const p=new xe(new Yt(.37,16,16,0,Math.PI*2,0,Math.PI*(e?.7:.62)),c());if(p.position.y=e?1.33:1.37,i.add(p),e){const C=new xe(new ii(.22,.6,4,10),c());C.scale.set(1.5,1,.55),C.position.set(0,.95,-.26),i.add(C);for(const R of[-1,1]){const N=new xe(new ii(.11,.62,4,8),c());N.position.set(R*.33,.98,-.06),N.rotation.z=R*-.08,i.add(N)}const w=new xe(new ui(.09,5),new He({color:16773808,emissive:16765503,emissiveIntensity:1.4,side:yt}));w.position.set(-.24,1.52,.24),w.rotation.y=-.4,i.add(w)}else{const C=new xe(new Yt(.2,10,10),c());C.scale.set(1.2,.6,.6),C.position.set(-.1,1.5,.22),i.add(C);for(const N of[-1,1]){const y=new xe(new ii(.09,.34,4,8),c());y.position.set(N*.31,1.16,.02),y.rotation.z=N*-.1,i.add(y)}const w=new Dt;w.position.set(0,1.42,-.3);let R=0;for(let N=0;N<5;N++){const y=.13-N*.017,b=new xe(new Yt(y,10,10),c());if(R-=y*1.55,b.position.set(0,R,-.02*N),w.add(b),N===4){const I=new xe(new dn(.055,.022,6,10),new He({color:15216720,emissive:10489888,emissiveIntensity:.5}));I.position.set(0,R+y*.6,-.08),I.rotation.x=Math.PI/2,w.add(I)}}i.add(w),t.userData.braid=w}const g=new He({color:2101280});for(const C of[-.12,.12]){const w=new xe(new Yt(.055,8,8),g);w.position.set(C,1.31,.3),i.add(w);const R=new xe(new Yt(.02,6,6),new He({color:16777215,emissive:16777215,emissiveIntensity:1}));R.position.set(C+.02,1.33,.35),i.add(R)}const v=new He({color:16752324,transparent:!0,opacity:.7});for(const C of[-.21,.21]){const w=new xe(new ui(.07,10),v);w.position.set(C,1.22,.3),i.add(w)}const m=new xe(new dn(.11,.022,6,14,Math.PI),new He({color:8003632}));m.position.set(0,1.16,.3),m.rotation.z=Math.PI,i.add(m);const d=[];for(const C of[-1,1]){const w=new Dt;w.position.set(C*.34,1.02,0);const R=new xe(new ii(.13,.72,4,8),l(s));R.position.y=.45,R.castShadow=!0,w.add(R);const N=new xe(new Yt(.15,10,10),l(s));N.position.y=.9,w.add(N);const y=new xe(new dn(.14,.045,6,12),l(o,{emissive:o,emissiveIntensity:.4}));y.position.y=.72,y.rotation.x=Math.PI/2,w.add(y),i.add(w),d.push(w)}const E=l(o),x=[];for(const C of[-1,1]){const w=new Dt;w.position.set(C*.18,.2,0);const R=new xe(new ii(.15,.8,4,8),E);R.position.y=-.45,R.castShadow=!0,w.add(R);const N=new xe(new Yt(.17,8,8),l(2757939));N.position.set(0,-.9,.05),w.add(N),i.add(w),x.push(w)}const S=e?1.06:.92;return i.scale.setScalar(S),i.position.y=cx*(1-S),t.add(i),t.userData.legs=x,t.userData.arms=d,t.userData.char=n,t}function ol(n,e,t,i){const{legs:s,arms:r,cape:o,braid:a}=n.userData;if(t==="fly")s[0].rotation.x=-1.15,s[1].rotation.x=-1.15,r[0].rotation.z=1.15,r[1].rotation.z=-1.15,r[0].rotation.x=0,r[1].rotation.x=0;else if(t==="salute"){s[0].rotation.x=.15,s[1].rotation.x=-.15;const l=Math.sin(e*9)*.35;r[0].rotation.z=.15,r[0].rotation.x=0,r[1].rotation.z=-.15+l,r[1].rotation.x=-.2}else if(t==="idle"){const l=Math.sin(e*2)*.06;s[0].rotation.x=l,s[1].rotation.x=-l,r[0].rotation.z=.35,r[1].rotation.z=-.35,r[0].rotation.x=.1,r[1].rotation.x=.1}else{const l=Math.sin(e*3)*.25;s[0].rotation.x=l,s[1].rotation.x=-l,r[0].rotation.z=.05,r[1].rotation.z=-.05,r[0].rotation.x=0,r[1].rotation.x=0}o&&(o.rotation.x=-.35+Math.sin(e*4)*.12+(t==="fly"?.5:0)),a&&(t==="fly"?(a.rotation.x=-1.25+Math.sin(e*10)*.08,a.rotation.z=Math.sin(e*7)*.15):t==="swing"?(a.rotation.x=-.25+Math.sin(e*3)*.3,a.rotation.z=0):(a.rotation.x=-.12+Math.sin(e*2.2)*.08,a.rotation.z=Math.sin(e*1.7)*.1))}let nt=null,Pi=null,Tt=null,Pn=null,al=null,jn=!1,Ha=0,bi=0,Po=0;const ux=()=>window.AudioContext||window.webkitAudioContext,qt=n=>440*Math.pow(2,(n-69)/12);function Tn(){if(!nt)try{nt=new(ux()),Pi=nt.createGain(),Pi.gain.value=jn?0:.9,Pi.connect(nt.destination),Tt=nt.createGain(),Tt.gain.value=0,Tt.connect(Pi),Pn=nt.createGain(),Pn.gain.value=.5,Pn.connect(Pi),al=nt.createBuffer(1,nt.sampleRate,nt.sampleRate);const n=al.getChannelData(0);for(let e=0;e<n.length;e++)n[e]=Math.random()*2-1;nt.state==="suspended"&&nt.resume().catch(()=>{})}catch{nt=null}}function Il(n){jn=n,Pi&&(Pi.gain.value=n?0:.9),n&&Fl()}function hx(){return{ready:!!nt,running:nt?nt.state:"none",muted:jn}}function ht(n,e,t,i,s,r,o){const a=nt.createOscillator(),l=nt.createGain();a.type=n,a.frequency.setValueAtTime(e,t),o&&a.frequency.exponentialRampToValueAtTime(Math.max(20,o),t+i),l.gain.setValueAtTime(s,t),l.gain.exponentialRampToValueAtTime(.001,t+i),a.connect(l),l.connect(r||Pn),a.start(t),a.stop(t+i+.02)}function Ai(n,e,t,i,s,r){const o=nt.createBufferSource();o.buffer=al,o.loop=!0;const a=nt.createBiquadFilter();a.type="bandpass",a.frequency.value=(i+s)/2,a.Q.value=(i+s)/2/Math.max(60,s-i);const l=nt.createGain();l.gain.setValueAtTime(t,n),l.gain.exponentialRampToValueAtTime(.001,n+e),o.connect(a),a.connect(l),l.connect(r||Pn),o.start(n),o.stop(n+e+.02)}const fx=[132,116,92,124],dx=[[57,62,57,64],[55,55,53,50],[60,57,53,55],[57,53,60,55]],lo=[[12,-1,16,-1,19,-1,16,12,14,-1,17,-1,21,19,17,14],[0,-1,3,5,-1,7,-1,10,7,-1,5,3,-1,0,-1,-1],[12,-1,-1,16,-1,-1,19,-1,-1,23,-1,19,-1,16,-1,-1],[0,12,7,12,3,12,7,15,0,12,7,12,5,12,7,19]];function px(n,e){const t=Po,i=(n>>4)%4,s=n%16,r=dx[t][i];if(t===0){s%8===0&&ht("triangle",qt(r-24),e,.22,.3,Tt),s%8===4&&ht("triangle",qt(r-17),e,.2,.26,Tt),s%4===2&&(ht("square",qt(r),e,.1,.045,Tt),ht("square",qt(r+4),e,.1,.04,Tt));const o=lo[0][s];o>=0&&ht("square",qt(r+o),e,.16,.055,Tt)}else if(t===1){[0,3,6,8,11,14].includes(s)&&ht("sine",150,e,.22,.5,Tt,42),s%2===1&&Ai(e,.05,.05,3500,7e3,Tt);const o=lo[1][s];o>=0&&ht("triangle",qt(r+12+o),e,.2,.1,Tt)}else if(t===2){if(s===0)for(const a of[0,4,7])ht("sine",qt(r+a),e,2.4,.055,Tt),ht("triangle",qt(r+a-12),e,2.4,.03,Tt);const o=lo[2][s];o>=0&&ht("sine",qt(r+o),e,.5,.07,Tt)}else{if(s%2===0){const a=nt.createOscillator(),l=nt.createBiquadFilter(),c=nt.createGain();a.type="sawtooth",a.frequency.value=qt(r-24),l.type="lowpass",l.frequency.value=300+900*Math.abs(Math.sin(n*.5)),l.Q.value=6,c.gain.setValueAtTime(.1,e),c.gain.exponentialRampToValueAtTime(.001,e+.2),a.connect(l),l.connect(c),c.connect(Tt),a.start(e),a.stop(e+.22)}const o=lo[3][s];o>=0&&s%2===0&&ht("sine",qt(r+12+o),e,.18,.05,Tt),s===10&&ht("sine",qt(r+36),e,.35,.05,Tt,qt(r+24))}}function Nl(n){n!==Po&&(Po=n)}function mx(n){if(vx(),fo+=(Zo-fo)*.05,!nt)return;if(nt.state==="suspended")try{nt.resume()}catch{}const e=n==="playing"&&!jn?.16*fo:0;if(Tt.gain.value+=(e-Tt.gain.value)*.08,n!=="playing"){bi=0;return}const t=nt.currentTime;(!bi||bi<t-.5)&&(bi=t+.08,Ha=0);const i=60/fx[Po]/2;for(;bi<t+.3;)px(Ha,bi),bi+=i,Ha++}const $t=n=>(...e)=>{if(nt&&!jn)try{n(nt.currentTime,...e)}catch{}},et={whoosh:$t(n=>Ai(n,.28,.5,500,2400)),catch:$t((n,e)=>{const t=1+Math.min(12,e)*.045;ht("sine",660*t,n,.16,.3),ht("triangle",1320*t,n,.12,.14)}),perfect:$t(n=>{[69,73,76].forEach((e,t)=>ht("square",qt(e+12),n+t*.07,.16,.18)),Ai(n+.2,.3,.1,5e3,9500)}),flip:$t(n=>ht("triangle",520,n,.12,.2,Pn,980)),star:$t(n=>ht("sine",1420,n,.09,.18)),ring:$t(n=>{ht("sine",988,n,.1,.2),ht("sine",1319,n+.07,.14,.18)}),net:$t(n=>ht("triangle",150,n,.34,.32,Pn,460)),fumble:$t(n=>ht("sawtooth",220,n,.42,.16,Pn,82)),fanfare:$t(n=>[60,64,67,72].forEach((e,t)=>ht("square",qt(e+12),n+t*.09,.2,.14))),applause:$t(n=>{for(let e=0;e<34;e++)Ai(n+e*.045+Math.random()*.03,.05,.06*(1-e/40),900,4200)}),click:$t(n=>ht("sine",700,n,.05,.12)),spot:$t(n=>{ht("sine",90,n,.5,.35,Pn,55),Ai(n,.25,.1,2200,6500)}),firework:$t(n=>{Ai(n,.5,.45,150,900),ht("sine",880,n,.7,.09,Pn,110)}),ovation:$t(n=>{for(let e=0;e<70;e++){const t=.02+.085*Math.min(1,e/25)*(1-Math.max(0,e-46)/26);Ai(n+e*.05+Math.random()*.04,.055,Math.max(.006,t),800,4500)}})},Qh={welcome:"Ladies and gentlemen... welcome to Trapeze Stars!",begin:"Let the show begin!",perfect:"Perfect!",combo10:"Ten in a row! Incredible!",combo25:"Twenty-five! The crowd goes wild!",world_jungle:"Into the jungle!",world_beach:"To the beach!",world_space:"Off to the stars!",net:"Saved by the net!",record:"A new world record!",endless:"Endless mode! No stopping now!",bye:"What a performance! Come back soon!"},gx=2.5,Yu=3,Is=()=>performance.now()/1e3;let Ns=!0,sn=[],Et=null,ef=-999,tf=null;const ka={},Ju=new Map;let fo=1,Zo=1;function nf(){if(nx())return"files";try{if(typeof speechSynthesis<"u"&&speechSynthesis&&typeof SpeechSynthesisUtterance<"u")return"speech"}catch{}return"none"}function Lo(n){Ns=!!n,Ns||Fl()}function _x(){return{enabled:Ns&&!jn,backend:Ns&&!jn?nf():"none",queue:sn.map(n=>n.id),speaking:Et?Et.id:null,lastId:tf,ducking:+fo.toFixed(2)}}function Fl(){if(sn=[],Et)try{Et.stop()}catch{}Et=null,Zo=1}function ln(n,e){const t=e||{};if(!Qh[n]||!Ns||jn||nf()==="none")return!1;const i=t.prio==null?1:t.prio,s=Is();return t.cooldown&&ka[n]!=null&&s-ka[n]<t.cooldown||Et&&Et.id===n||sn.some(r=>r.id===n)?!1:(i>1&&(sn=sn.filter(r=>r.prio>=i)),Et&&i>Et.prio&&fr(),sn.push({id:n,prio:i,at:s+(t.delay||0)}),sn.sort((r,o)=>o.prio-r.prio||r.at-o.at),sn.length>Yu&&(sn.length=Yu),ka[n]=s,!0)}function fr(){if(Et)try{Et.stop()}catch{}Et=null,ef=Is(),Zo=1}function vx(){const n=Is();if(Et)if(n>Et.deadline)fr();else return;if(sn.length){if(!Ns||jn){sn=[];return}n-ef<gx||n<sn[0].at||xx(sn.shift())}}function xx(n){const e=Qh[n.id],t=.9+e.length*.055;Et={id:n.id,prio:n.prio,deadline:Is()+t+1.6,stop:()=>{}},tf=n.id,Zo=.4;const i=tx(n.id);i?Mx(i,e):sf(e)}function Mx(n,e,t,i){let s=Ju.get(n);s||(s=new Audio(n),s.preload="auto",Ju.set(n,s));const r=Et;s.onended=()=>{Et===r&&fr()},s.onerror=()=>{Et===r&&(s.onended=null,sf(e))},r.stop=()=>{try{s.pause(),s.currentTime=0}catch{}};try{s.currentTime=0;const o=s.play();o&&o.catch&&o.catch(()=>{})}catch{}}function sf(n){const e=Et;if(e)try{if(typeof speechSynthesis>"u"||typeof SpeechSynthesisUtterance>"u"){e.deadline=Is()+.05;return}const t=new SpeechSynthesisUtterance(n);t.lang="en-US",t.pitch=1.25,t.rate=1.03,t.volume=1,t.onend=()=>{Et===e&&fr()},t.onerror=()=>{Et===e&&fr()},e.stop=()=>{try{speechSynthesis.cancel()}catch{}},speechSynthesis.speak(t)}catch{e.deadline=Is()+.05}}const yx="",Sx="",rf=5e5,Ex=3500;let Ts={url:yx,key:Sx};function ji(){return!!(Ts.url&&Ts.key)}function bx(n,e){Ts={url:n||"",key:e||""}}async function Ol(n,e={},t=0){const i=new AbortController,s=setTimeout(()=>i.abort(),Ex);try{const r=await fetch(Ts.url.replace(/\/$/,"")+"/rest/v1/scores"+n,{...e,headers:{apikey:Ts.key,Authorization:"Bearer "+Ts.key,"Content-Type":"application/json",...e.headers||{}},signal:i.signal});if(!r.ok)throw new Error("http "+r.status);return r}catch(r){if(t>0)return Ol(n,e,t-1);throw r}finally{clearTimeout(s)}}const Tx=20,of=n=>String(n||"").replace(/[^\p{L}\p{N} '\-]/gu,"").replace(/\s+/g," ").trim().slice(0,Tx).trim()||"PLAYER",af=n=>Math.max(0,Math.min(rf,Math.round(+n||0)));async function wx(n=10){if(!ji())return null;try{const t=await(await Ol("?select=initials,score,world,lap&order=score.desc&limit="+n,{},1)).json();return Array.isArray(t)?t.slice(0,n).map(i=>({i:of(i.initials),s:af(i.score),w:Math.max(0,Math.min(3,i.world|0)),l:Math.max(0,Math.min(999,i.lap|0))})):null}catch{return null}}let ll=!1;function Ax(){ll=!1}async function Rx({name:n,score:e,world:t=0,lap:i=0}){if(!ji()||ll)return!1;ll=!0;try{return await Ol("",{method:"POST",body:JSON.stringify({initials:of(n),score:af(e),world:Math.max(0,Math.min(3,t|0)),lap:Math.max(0,Math.min(999,i|0))})}),!0}catch{return!1}}const cl=6.2,Ft=3.3,Uo=19,Zu=15,ul=.85,lf=1.25,cf=.42,qn=12,Fs=4,Gt=qn*Fs,ki=["Circus","Jungle","Beach","Space"],Cx=1,uf=2,Bl=3,Do=-3.6,Px=-7,zl=6,Sr=1.55,Lx=[800,1800,3500,6e3],Gl=["·","🥉","🥈","🥇","💎"],Hl=["🎪","🌴","🏖","🚀"],Ux=n=>{let e=0;for(let t=0;t<4;t++)n>=Lx[t]&&(e=t+1);return e};function hf(){try{return{high:+localStorage.getItem("ts3d_high")||0,combo:+localStorage.getItem("ts3d_combo")||0,medals:JSON.parse(localStorage.getItem("ts3d_medals")||"[0,0,0,0]"),mute:localStorage.getItem("ts3d_mute")==="1",reduceFx:localStorage.getItem("ts3d_reducefx")==="1",voice:localStorage.getItem("ts3d_voice")!=="0"}}catch{return{high:0,combo:0,medals:[0,0,0,0],mute:!1,reduceFx:!1,voice:!0}}}let Fe=hf();function Vi(){try{localStorage.setItem("ts3d_high",String(Fe.high)),localStorage.setItem("ts3d_combo",String(Fe.combo)),localStorage.setItem("ts3d_medals",JSON.stringify(Fe.medals)),localStorage.setItem("ts3d_mute",Fe.mute?"1":"0"),localStorage.setItem("ts3d_reducefx",Fe.reduceFx?"1":"0"),localStorage.setItem("ts3d_voice",Fe.voice?"1":"0")}catch{}}Il(Fe.mute);Lo(Fe.voice);const Ko=()=>{const n=new Date;return n.getUTCFullYear()*1e4+(n.getUTCMonth()+1)*100+n.getUTCDate()};function Er(){try{const n=JSON.parse(localStorage.getItem("ts3d_daily")||"null");return n&&n.d===Ko()?n:null}catch{return null}}function Dx(n){try{const e=Er();(!e||n>e.s)&&localStorage.setItem("ts3d_daily",JSON.stringify({d:Ko(),s:n}))}catch{}}let Io=!1;try{const n=matchMedia("(prefers-reduced-motion: reduce)");Io=n.matches;const e=t=>{Io=t.matches};n.addEventListener?n.addEventListener("change",e):n.addListener&&n.addListener(e)}catch{}const jo=()=>Io||Fe.reduceFx,$o=()=>Fe.reduceFx;function ff(){try{const n=JSON.parse(localStorage.getItem("ts3d_board")||"[]");return Array.isArray(n)?n:[]}catch{return[]}}let pn=ff();function Ix(){try{localStorage.setItem("ts3d_board",JSON.stringify(pn))}catch{}}const df=10;function Nx(n){if(n<=0)return-1;const e=pn.filter(t=>t.s>=n).length;return e<df?e:-1}function Fx(n,e,t,i){const s={i:n,s:e,m:t,l:i};return pn.push(s),pn.sort((r,o)=>o.s-r.s),pn=pn.slice(0,df),Ix(),pn.indexOf(s)}const pf=20;let qi=-1;function Ox(n){return String(n||"").replace(/[^\p{L}\p{N} '\-]/gu,"").replace(/\s+/g," ").trim().slice(0,pf).trim()||"PLAYER"}let Ui="local",Ln=null,dr=!1,js=null,ws=null,Va=20260718;const kn=()=>(Va=Va*1103515245+12345&2147483647,Va/2147483647),It=[];{const n=[[4.5,7.5],[4.2,5.6],[4.5,6.5],[4.5,7.5]];let e=0;for(let t=0;t<Gt;t++){const i=Math.floor(t/qn),s=t%qn===0;if(t>0){const[a,l]=n[i];e+=t<4?4.5+kn()*1:a+kn()*(l-a)}const r=cl+(t===0||s?0:kn()*2.4-1.2),o={x:e,py:r,w:i};i===Cx&&!s&&(o.mv=.6+kn()*.4,o.mvSpd=.45+kn()*.3,o.mvPh=kn()*6.28),It.push(o)}}const Bx=It[Gt-1].x,kl=[];for(let n=0;n<Fs;n++){const e=n===0?-16:(It[n*qn-1].x+It[n*qn].x)/2,t=n===Fs-1?Bx+14:(It[(n+1)*qn-1].x+It[(n+1)*qn].x)/2;kl.push({x0:e,x1:t})}const mf=document.getElementById("app"),xt=jv(mf),{scene:Ht,camera:wt}=xt,Li=lx(Ht,kl),br=new Dt;Ht.add(br);const tt=[],zx=[new He({color:12160255,emissive:5910176,emissiveIntensity:.4,roughness:.5}),new He({color:5615683,emissive:1985042,emissiveIntensity:.5,roughness:.8}),new He({color:14200938,emissive:6965786,emissiveIntensity:.35,roughness:.85}),new He({color:6744831,emissive:43224,emissiveIntensity:1,roughness:.35})],Gx=new He({color:16764735,emissive:16747008,emissiveIntensity:.8,roughness:.4,metalness:.2}),Hx=new He({color:16777215,emissive:9109441,emissiveIntensity:1.6,roughness:.3}),pr=10,Di=5,Wa=.045;function kx(){const n=new pt,e=(pr+1)*(Di+1);n.setAttribute("position",new _t(new Float32Array(e*3),3)),n.setAttribute("normal",new _t(new Float32Array(e*3),3));const t=[];for(let i=0;i<pr;i++)for(let s=0;s<Di;s++){const r=i*(Di+1)+s,o=r+1,a=r+Di+1,l=a+1;t.push(r,a,o,o,a,l)}return n.setIndex(t),n.boundingSphere=new Ki(new D,Ft*.7),n}function Vx(n,e){const t=n.rope.geometry.attributes.position.array,i=n.rope.geometry.attributes.normal.array,s=n.x+Ft*Math.sin(n.theta),r=n.py-Ft*Math.cos(n.theta),o=s-n.x,a=r-n.py,l=Math.hypot(o,a)||1,c=-a/l,u=o/l;let h=0,f=0;if(e){const g=(n.omega*n.omega*Ft+Uo*Math.cos(n.theta))/(Uo+3);h=Math.max(0,Math.min(1,1.05-g)),f=n.ropeAmp}let p=0;for(let g=0;g<=pr;g++){const v=g/pr,m=Math.sin(v*Math.PI),d=m*(h*.34+f*Math.sin(v*7.2+n.ropePh)),E=n.x+o*v+c*d,x=n.py+a*v+u*d-m*h*.14;for(let S=0;S<=Di;S++){const C=S/Di*Math.PI*2,w=Math.cos(C),R=Math.sin(C);t[p]=E+c*w*Wa,t[p+1]=x+u*w*Wa,t[p+2]=R*Wa,i[p]=c*w,i[p+1]=u*w,i[p+2]=R,p+=3}}n.rope.geometry.attributes.position.needsUpdate=!0,n.rope.geometry.attributes.normal.needsUpdate=!0,n.rope.geometry.boundingSphere.center.set((n.x+s)/2,(n.py+r)/2,0)}for(let n=0;n<Gt;n++){const{x:e,py:t,w:i,mv:s,mvSpd:r,mvPh:o}=It[n],a=new xe(kx(),zx[i]);br.add(a),tt.push({x:e,bx:e,py:t,w:i,mv:s,mvSpd:r,mvPh:o,theta:(n%2?1:-1)*cf*kn(),omega:0,rope:a,p:new D,shown:!0,ropeAmp:0,ropePh:kn()*6.28})}const ft=new ct,gf=new Mn(.09,.09,1.5,10),No=new Us(new Yt(.18,8,8),new He({color:2757939}),Gt);No.frustumCulled=!1;br.add(No);const mr=new Us(gf,Gx,Gt);mr.frustumCulled=!1;mr.castShadow=!0;br.add(mr);const Ii=new xe(gf,Hx);Ii.castShadow=!0;Ii.visible=!1;br.add(Ii);const _f=n=>new D(n.x+Ft*Math.sin(n.theta),n.py-Ft*Math.cos(n.theta),0),Wx=n=>_f(n).add(new D(0,-Sr,0));function Xx(n,e){n.mv&&(n.x=n.bx+Math.sin(_.t*n.mvSpd+n.mvPh)*n.mv),n.p.copy(_f(n)),Vx(n,e)}const di=[],qx=new He({color:16773808,emissive:16764735,emissiveIntensity:1.8,roughness:.3}),Yx=new Al(.34,0);for(let n=0;n<Gt-1;n++){const e=It[n],t=It[n+1];for(let i=0;i<2;i++){const s=(i+1)/3,r=e.x+s*(t.x-e.x),o=(e.py+t.py)/2-Ft+1.4+Math.sin(s*Math.PI)*2.2;di.push({p:new D(r,o,0),got:!1,rot:kn()*6.28})}}const Fo=new Us(Yx,qx,di.length);Fo.frustumCulled=!1;Ht.add(Fo);const Yi=[];{const n=new He({color:16773808,emissive:16739760,emissiveIntensity:1.5,roughness:.35}),e=[];for(let t=0;t<Fs;t++)for(const i of[2,6,9])e.push(t*qn+i);for(const t of e){if(t+1>=Gt)continue;const i=It[t],s=It[t+1],r=new xe(new dn(1,.09,10,40),n.clone());r.position.set((i.x+s.x)/2,(i.py+s.py)/2-Ft*.88-Sr+1.9,0),Ht.add(r),Yi.push({m:r,got:!1,gi:t,baseX:r.position.x,baseY:r.position.y,mvY:i.w===Bl})}}function Jx(n){const e=document.createElement("canvas");e.width=e.height=64;const t=e.getContext("2d");t.strokeStyle="#cfe8ff",t.lineWidth=3,t.beginPath();for(let s=0;s<=64;s+=16)t.moveTo(s,0),t.lineTo(s,64),t.moveTo(0,s),t.lineTo(64,s);t.stroke();const i=new Yo(e);return i.wrapS=i.wrapT=Wi,i.repeat.set(n,5),i}const Vl=new Dt;Ht.add(Vl);const Tr=[];for(let n=0;n<Fs;n++){const e=kl[n],t=e.x1-e.x0-3,i=new xe(new Un(t,7),new on({map:Jx(t/1.4),transparent:!0,opacity:.3,side:yt,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.position.set((e.x0+e.x1)/2,Do,0),Vl.add(i),Tr.push({m:i,used:!1,flashT:0})}const co=It.map(n=>({py:n.py,mv:n.mv,mvSpd:n.mvSpd,mvPh:n.mvPh}));function Zx(n){let e=n?Ko()*2654435761%2147483647:0;const t=()=>(e=e*1103515245+12345&2147483647,e/2147483647);for(let s=0;s<Gt;s++){const r=It[s],o=s%qn===0,a=tt[s];n?(r.py=s===0||o?cl:cl+t()*2.4-1.2,r.mv!==void 0&&(r.mv=.6+t()*.4,r.mvSpd=.45+t()*.3,r.mvPh=t()*6.28)):(r.py=co[s].py,r.mv=co[s].mv,r.mvSpd=co[s].mvSpd,r.mvPh=co[s].mvPh),a.py=r.py,a.mv=r.mv,a.mvSpd=r.mvSpd,a.mvPh=r.mvPh}let i=0;for(let s=0;s<Gt-1;s++){const r=It[s],o=It[s+1];for(let a=0;a<2;a++){const l=(a+1)/3;di[i].p.y=(r.py+o.py)/2-Ft+1.4+Math.sin(l*Math.PI)*2.2,i++}}for(const s of Yi){const r=It[s.gi],o=It[s.gi+1];s.baseY=(r.py+o.py)/2-Ft*.88-Sr+1.9,s.m.position.y=s.baseY}}const wr=260,$s=new Float32Array(wr*3).fill(-999),po=new Float32Array(wr*3),gr=new pt;gr.setAttribute("position",new _t($s,3));gr.setAttribute("color",new _t(po,3));const Kx=new Hi(gr,new ci({size:.3,vertexColors:!0,transparent:!0,opacity:.95,blending:yn,depthWrite:!1}));Ht.add(Kx);const Wl=[];for(let n=0;n<wr;n++)Wl.push({life:0,max:1,x:0,y:-999,z:0,vx:0,vy:0,vz:0});let Ms=[];const uo=new Ne;function jx(n,e,t){const i=Math.random();let s=0;for(let r=0;r<wr&&s<52;r++){const o=Wl[r];if(o.life>0)continue;o.max=o.life=1.1+Math.random()*.6,o.x=n,o.y=e,o.z=t;const a=Math.random()*Math.PI*2,l=Math.acos(Math.random()*2-1),c=4.5+Math.random()*2.5;o.vx=Math.sin(l)*Math.cos(a)*c,o.vy=Math.cos(l)*c,o.vz=Math.sin(l)*Math.sin(a)*c*.4,uo.setHSL((i+Math.random()*.08)%1,1,.6),po[r*3]=uo.r,po[r*3+1]=uo.g,po[r*3+2]=uo.b,s++}$o()||_i(.12),et.firework()}function $x(n){Ms=[];const e=Ye.position.x,t=Math.max(Ye.position.y,0);for(let i=0;i<n;i++)Ms.push({t:_.t+.3+i*.6,x:e+(Math.random()*12-6),y:t+4+Math.random()*3.5,z:-2+Math.random()*4});et.ovation()}function Qx(n){for(let t=Ms.length-1;t>=0;t--)if(_.t>=Ms[t].t){const i=Ms[t];jx(i.x,i.y,i.z),Ms.splice(t,1)}let e=!1;for(let t=0;t<wr;t++){const i=Wl[t];if(i.life<=0){$s[t*3+1]=-999;continue}e=!0,i.life-=n,i.vy-=3.2*n,i.vx*=1-n*.8,i.vz*=1-n*.8,i.x+=i.vx*n,i.y+=i.vy*n,i.z+=i.vz*n,$s[t*3]=i.x,$s[t*3+1]=i.y,$s[t*3+2]=i.z}e&&(gr.attributes.position.needsUpdate=!0,gr.attributes.color.needsUpdate=!0)}const Ni=36,nn=new Float32Array(Ni*3),mo=new Float32Array(Ni*3),Os=new pt;Os.setAttribute("position",new _t(nn,3));Os.setAttribute("color",new _t(mo,3));const wn=new Hi(Os,new ci({size:.45,vertexColors:!0,transparent:!0,opacity:1,blending:yn,depthWrite:!1,sizeAttenuation:!0}));wn.visible=!1;Ht.add(wn);const Vn=new Ne;function Ku(n){for(let e=0;e<Ni;e++)nn[e*3]=n.x,nn[e*3+1]=n.y,nn[e*3+2]=n.z;Os.attributes.position.needsUpdate=!0}function ju(n,e,t){for(let s=0;s<Ni-1;s++)nn[s*3]=nn[(s+1)*3],nn[s*3+1]=nn[(s+1)*3+1],nn[s*3+2]=nn[(s+1)*3+2];const i=(Ni-1)*3;nn[i]=n.x,nn[i+1]=n.y,nn[i+2]=n.z;for(let s=0;s<Ni;s++){const r=s/Ni;e?Vn.setHSL((t*.6+r*.9)%1,1,.55):Vn.setHSL(.12,1,.5+r*.2),mo[s*3]=Vn.r*r,mo[s*3+1]=Vn.g*r,mo[s*3+2]=Vn.b*r}Os.attributes.position.needsUpdate=!0,Os.attributes.color.needsUpdate=!0}const Ar=240,Qs=new Float32Array(Ar*3).fill(-999),go=new Float32Array(Ar*3),_r=new pt;_r.setAttribute("position",new _t(Qs,3));_r.setAttribute("color",new _t(go,3));const eM=new Hi(_r,new ci({size:.22,vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!1}));Ht.add(eM);const Xl=[];for(let n=0;n<Ar;n++)Xl.push({life:0,x:0,y:-999,z:0,vx:0,vy:0,vz:0});const $u=[16735354,16764735,5556479,9109441,12160255];function or(n,e,t,i=5){let s=0;for(let r=0;r<Ar&&s<e;r++){const o=Xl[r];if(o.life>0)continue;o.life=.8+Math.random()*.6,o.x=n.x,o.y=n.y,o.z=n.z;const a=Math.random()*Math.PI*2,l=Math.random()*Math.PI-Math.PI/2,c=i*(.4+Math.random()*.8);o.vx=Math.cos(a)*Math.cos(l)*c,o.vy=Math.sin(l)*c+2.5,o.vz=Math.sin(a)*Math.cos(l)*c*.5,Vn.setHex(t?16764735:$u[Math.random()*$u.length|0]),go[r*3]=Vn.r,go[r*3+1]=Vn.g,go[r*3+2]=Vn.b,s++}}function tM(n){let e=!1;for(let t=0;t<Ar;t++){const i=Xl[t];if(i.life<=0){Qs[t*3+1]=-999;continue}e=!0,i.life-=n,i.vy-=9*n,i.x+=i.vx*n,i.y+=i.vy*n,i.z+=i.vz*n,Qs[t*3]=i.x,Qs[t*3+1]=i.y,Qs[t*3+2]=i.z}e&&(_r.attributes.position.needsUpdate=!0,_r.attributes.color.needsUpdate=!0)}const ql=70,_o=new Float32Array(ql*3),Yl=new pt;Yl.setAttribute("position",new _t(_o,3));const vo=new Hi(Yl,new ci({color:13626111,size:.16,transparent:!0,opacity:0,blending:yn,depthWrite:!1}));Ht.add(vo);const vf=[];for(let n=0;n<ql;n++)vf.push({ox:Math.random()*28-14,y:Math.random()*14-6,z:Math.random()*12-6});function nM(n){const e=_.mode==="playing"&&Math.abs(_.wind)>.2,t=vo.material;if(t.opacity+=((e?.55:0)-t.opacity)*Math.min(1,n*5),vo.visible=t.opacity>.02,!!vo.visible){for(let i=0;i<ql;i++){const s=vf[i];s.ox+=_.wind*9*n,s.ox>14?s.ox-=28:s.ox<-14&&(s.ox+=28),_o[i*3]=Ye.position.x+s.ox,_o[i*3+1]=s.y+Math.sin(_.t*2+i)*.4,_o[i*3+2]=s.z}Yl.attributes.position.needsUpdate=!0}}let Ye=Dl("marc");Ht.add(Ye);const _={mode:"menu",char:"marc",active:0,state:"swing",score:0,combo:0,comboT:0,lives:3,t:0,spin:0,pumpAmp:1,holding:!1,armed:!1,grade:"",lastFlips:0,lastFlipBonus:0,lastGain:0,trick:!1,flipRot:0,salute:0,world:0,wind:0,windOff:0,netBounce:!1,netSaves:0,lap:0,diffN:0,wScore:[0,0,0,0],runMedals:[0,0,0,0],starsGot:0,flipsTot:0,maxCombo:0,flyFrom:new D,flyTo:new D,flyT:0,flyDur:.72,arcH:2.4,flyNext:-1,flyMode:"catch",vel:new D,timeScale:1,slowmo:0,fovKick:0,shake:0,attract:!1,daily:!1},An=-7,Rr=-7.65,Bs=new Dt;Ht.add(Bs);const ks=new Dt;ks.position.set(An,0,0);Bs.add(ks);const Jl=new xe(new Mn(3.1,3.5,.7,40),new He({color:6950950,roughness:.4,metalness:.5,emissive:1704456,emissiveIntensity:.4}));Jl.position.y=Rr-.35;Jl.receiveShadow=!0;ks.add(Jl);const Zl=new xe(new dn(3.28,.15,8,48),new He({color:16764735,emissive:16755456,emissiveIntensity:1.1,roughness:.4}));Zl.rotation.x=Math.PI/2;Zl.position.y=Rr;ks.add(Zl);const hi={};for(const[n,e]of[["marc",-1.4],["claire",1.4]]){const t=Dl(n);t.position.set(e,Rr+.7,.1),ks.add(t),hi[n]=t}const Cr=new Zh(16777215,110,24,Math.PI/6.5,.4,1.2);Cr.position.set(An,7,7);const Kl=new ct;Kl.position.set(An,Rr,0);Ht.add(Kl);Cr.target=Kl;Ht.add(Cr);const Pr=new Dt;Ht.add(Pr);const iM=new He({color:9375522,roughness:.7,emissive:2753032,emissiveIntensity:.45,side:yt}),xf=[];for(const n of[-1,1]){const e=new xe(new mn(3.8,8.4,.3),iM),t=An+n*1.9;e.position.set(t,-3.4,4.2),Pr.add(e),xf.push({mesh:e,side:n,x0:t})}const Mf=new xe(new mn(8.4,1.5,.5),new He({color:16764735,emissive:16755456,emissiveIntensity:.9,roughness:.4}));Mf.position.set(An,1.1,4.3);Pr.add(Mf);let Fi=0,Oo=!1,Qu=!1,eh=0;const sM=new URLSearchParams(location.search).has("lowfx"),rt={active:!1,done:!1,t:0,lit:0};let Zt=null;const th=3.6,rM=[.7,1.3,1.9];function jl(){rt.active||_.mode!=="menu"||(Zt||(Zt={key:xt.key.intensity,rim:xt.rim.intensity,fill:xt.fill.intensity,amb:xt.ambient.intensity}),rt.active=!0,rt.t=0,rt.lit=0,xt.key.intensity=Zt.key*.06,xt.rim.intensity=Zt.rim*.06,xt.fill.intensity=Zt.fill*.06,xt.ambient.intensity=Zt.amb*.25,j.menu.classList.add("hidden"),j.introLogo.classList.remove("show"),ln("welcome",{prio:3,delay:.5}))}function $l(){rt.active=!1,rt.done=!0,Zt&&(xt.key.intensity=Zt.key,xt.rim.intensity=Zt.rim,xt.fill.intensity=Zt.fill,xt.ambient.intensity=Zt.amb),j.introLogo.classList.remove("show"),_.mode==="menu"&&j.menu.classList.remove("hidden"),Fi<1&&(Oo=!0),Vs=_.t}function oM(n){rt.t+=n;const e=rt.t,t=Math.min(1,e/th);for(;rt.lit<3&&e>rM[rt.lit];)rt.lit++,rt.lit===1?xt.key.intensity=Zt.key:rt.lit===2?(xt.rim.intensity=Zt.rim,xt.fill.intensity=Zt.fill):xt.ambient.intensity=Zt.amb,$o()||_i(.1),et.spot();const i=1-Math.pow(1-t,3);wt.position.set(An+(1-i)*36,-3.4+(1-i)*12.5,8.8+(1-i)*15+Math.sin(t*Math.PI)*3);const s=new D(An+(1-i)*16,-5+(1-i)*7,0);wt.lookAt(s),wt.fov!==55&&(wt.fov=55,wt.updateProjectionMatrix()),e>2.2&&j.introLogo.classList.add("show"),e>=th&&(et.fanfare(),$l())}function Ql(){for(const n in hi){const e=n===_.char;hi[n].position.y=Rr+.7+(e?.4:0)}}function yf(){if(Fe.high<=0){j.best.classList.add("hidden");return}const n=Fe.medals.map((e,t)=>Hl[t]+Gl[e]).join("  ");j.best.innerHTML="BEST "+Fe.high.toLocaleString("en")+" ⭐ · COMBO x"+Fe.combo+'<span class="medals">'+n+"</span>",j.best.classList.remove("hidden")}function ec(){j.muteBtn.textContent=Fe.mute?"🔇":"🔊"}function Bo(){j.voiceBtn.classList.toggle("off",!Fe.voice),j.voiceBtn.setAttribute("aria-pressed",String(Fe.voice)),j.voiceBtn.setAttribute("aria-label",Fe.voice?"Ringmaster voice on — tap to mute the voice":"Ringmaster voice off — tap to bring it back")}function tc(){j.fxBtn.textContent=Fe.reduceFx?"🌙":"✨",j.fxBtn.classList.toggle("on",Fe.reduceFx),j.fxBtn.setAttribute("aria-pressed",String(Fe.reduceFx)),j.fxBtn.setAttribute("aria-label",Fe.reduceFx?"Flashes reduced — tap to restore":"Reduce flashes")}function hl(n,e){const t=ji(),i=t?Ui:"local";let s='<div class="bTitle">🏆 HIGH SCORES</div>';if(t&&(s+='<div class="bTabs"><span class="bTab'+(i==="local"?" sel":"")+'" data-tab="local">LOCAL</span><span class="bTab'+(i==="world"?" sel":"")+'" data-tab="world">WORLD</span></div>'),i==="world")if(dr&&!Ln)s+='<div class="bEmpty">…</div>';else if(!Ln||!Ln.length)s+='<div class="bEmpty">No world scores yet —<br>be the first to fly!</div>';else for(let r=0;r<Ln.length;r++){const o=Ln[r],a=ws&&o.i===ws.i&&o.s===ws.s;s+='<div class="bRow'+(a?" hl":"")+'"><span class="bRk">'+(r+1)+'</span><span class="bIn">'+o.i+'</span><span class="bMe">'+(o.l>0?"🔁":Hl[o.w])+'</span><span class="bSc">'+o.s.toLocaleString("en")+"</span></div>"}else if(!pn.length)s+='<div class="bEmpty">No scores yet —<br>be the first to fly!</div>';else for(let r=0;r<pn.length;r++){const o=pn[r],a=o.m>0?Gl[o.m]:"";s+='<div class="bRow'+(r===e?" hl":"")+'"><span class="bRk">'+(r+1)+'</span><span class="bIn">'+o.i+'</span><span class="bMe">'+a+'</span><span class="bSc">'+o.s.toLocaleString("en")+"</span></div>"}n.innerHTML=s,n.querySelectorAll(".bTab").forEach(r=>r.addEventListener("click",o=>{o.stopPropagation(),Ui!==r.dataset.tab&&(Ui=r.dataset.tab,Ui==="world"&&Qo(),zo(),et.click())}))}function zo(){hl(j.menuBoard,qi),!j.over.classList.contains("hidden")&&!j.overBoard.classList.contains("hidden")&&hl(j.overBoard,qi)}function Qo(n){if(!ji()||js&&!n)return;dr=!0,zo();const e=wx(10).then(t=>{js===e&&(dr=!1,js=null,t?Ln=t:Ln||(Ui="local"),zo())});js=e}function aM(n){j.entryInput.value="",j.entryRank.textContent="#"+(n+1)+" place",j.entryScore.textContent="Score "+_.score.toLocaleString("en"),j.over.classList.add("hidden"),j.entry.classList.remove("hidden"),et.fanfare(),requestAnimationFrame(()=>{try{j.entryInput.focus({preventScroll:!0})}catch{j.entryInput.focus()}})}function ea(){if(j.entry.classList.contains("hidden"))return;const n=Ox(j.entryInput.value);qi=Fx(n,_.score,Math.max(..._.runMedals),_.lap),ji()&&!_.daily&&(ws={i:n,s:Math.max(0,Math.min(rf,Math.round(_.score)))},Rx({name:n,score:_.score,world:_.world,lap:_.lap}).then(e=>{e&&Qo(!0)})),j.entry.classList.add("hidden"),et.click(),Tf()}function Sf(){const n=Er();j.dailyBest.textContent=n?"Today's best: "+n.s.toLocaleString("en"):"New rail every day — same for everyone!"}function ta(){_.mode="menu",Ye.visible=!1,Bs.visible=!0,Pr.visible=!0,Cr.visible=!0,j.attractBar.classList.remove("show"),j.hud.style.display="none",Lr.classList.remove("on"),wn.visible=!1,Qu||(Qu=!0,Fi=0,!rt.done&&!sM&&!jo()?jl():(rt.done=!0,Oo=!0,ln("welcome",{prio:3,delay:.6}))),j.over.classList.add("hidden"),j.entry.classList.add("hidden"),rt.active||j.menu.classList.remove("hidden"),Vs=_.t,Ql(),yf(),zo(),ji()&&Qo(),Sf()}function nc(){Ht.remove(Ye),Ye=Dl(_.char),Ye.visible=_.mode!=="menu",Ht.add(Ye)}function ic(n){const e=Wx(n);Ye.position.copy(e),Ye.rotation.z=-n.theta}function Zn(n){if(navigator.vibrate)try{navigator.vibrate(n)}catch{}}const qe=n=>document.getElementById(n),j={menu:qe("menu"),over:qe("over"),hud:qe("hud"),score:qe("score"),lives:qe("lives"),combo:qe("combo"),grade:qe("grade"),comboHold:qe("comboHold"),comboFill:qe("comboFill"),big:qe("bigmsg"),bigsub:qe("bigsub"),flash:qe("flash"),banner:qe("banner"),bannerTxt:qe("bannerTxt"),worldTag:qe("worldTag"),wind:qe("windTag"),best:qe("best"),newBest:qe("newBest"),overStats:qe("overStats"),overMedals:qe("overMedals"),muteBtn:qe("muteBtn"),fxBtn:qe("fxBtn"),voiceBtn:qe("voiceBtn"),gpBadge:qe("gpBadge"),menuBoard:qe("menuBoard"),overBoard:qe("overBoard"),entry:qe("entry"),entryRank:qe("entryRank"),entryScore:qe("entryScore"),entryInput:qe("entryInput"),photoWrap:qe("photoWrap"),photoImg:qe("photoImg"),shareBtn:qe("shareBtn"),introLogo:qe("introLogo"),attractBar:qe("attractBar"),dailyBest:qe("dailyBest")};let fl=-1;function vr(){_.score!==fl&&(j.score.firstChild.textContent=String(_.score),j.score.classList.remove("pop"),j.score.offsetWidth,j.score.classList.add("pop"),fl=_.score),j.lives.textContent="❤".repeat(Math.max(0,_.lives))||"—"}let xo=0,Mo=0;function dl(n){j.combo.textContent=n,j.combo.style.opacity="1",xo=1.1}function Oi(n,e){j.grade.textContent=n,j.grade.style.color=e||"#fff",j.grade.style.opacity="1",j.grade.classList.remove("zoom"),j.grade.offsetWidth,j.grade.classList.add("zoom"),Mo=.9}let ys=0;function _i(n){ys=Math.max(ys,$o()?n*.35:n)}const Lr=qe("tapBtn");qe("playBtn").addEventListener("click",()=>{Tn(),et.click(),pi(!1)});qe("dailyBtn").addEventListener("click",()=>{Tn(),et.click(),pi(!0)});qe("introBtn").addEventListener("click",()=>{Tn(),et.click(),jl()});qe("againBtn").addEventListener("click",()=>{et.click(),ta()});qe("replayBtn").addEventListener("click",()=>{Tn(),et.click(),pi(_.daily)});j.muteBtn.addEventListener("pointerdown",n=>{n.stopPropagation()});j.muteBtn.addEventListener("click",n=>{n.stopPropagation(),Tn(),Fe.mute=!Fe.mute,Il(Fe.mute),Vi(),ec(),Fe.mute||et.click()});ec();j.fxBtn.addEventListener("pointerdown",n=>{n.stopPropagation()});j.fxBtn.addEventListener("click",n=>{n.stopPropagation(),Tn(),Fe.reduceFx=!Fe.reduceFx,Vi(),tc(),et.click()});tc();j.voiceBtn.addEventListener("pointerdown",n=>{n.stopPropagation()});j.voiceBtn.addEventListener("click",n=>{n.stopPropagation(),Tn(),Fe.voice=!Fe.voice,Lo(Fe.voice),Vi(),Bo(),et.click(),Fe.voice&&ln("welcome",{prio:3})});Bo();function Go(n){n!=="marc"&&n!=="claire"||(document.querySelectorAll(".pick").forEach(e=>{e.classList.toggle("sel",e.dataset.char===n),e.setAttribute("aria-pressed",String(e.dataset.char===n))}),_.char=n,nc(),Ql())}document.querySelectorAll(".pick").forEach(n=>{n.addEventListener("click",()=>Go(n.dataset.char)),n.addEventListener("keydown",e=>{(e.code==="Enter"||e.code==="Space")&&(e.preventDefault(),Go(n.dataset.char))})});qe("entryOk").addEventListener("click",()=>ea());addEventListener("keydown",n=>{j.entry.classList.contains("hidden")||n.code==="Enter"&&(ea(),n.preventDefault())});function pi(n){Tn(),_.daily=!!n,Zx(_.daily),_.mode="playing",_.state="swing",_.active=0,_.score=0,fl=-1,_.combo=0,_.comboT=0,_.lives=3,_.spin=0,_.pumpAmp=1,_.holding=!1,_.armed=!1,_.grade="",_.lastFlips=0,_.lastFlipBonus=0,_.trick=!1,_.flipRot=0,_.salute=0,_.timeScale=1,_.slowmo=0,_.fovKick=0,_.shake=0,_.world=0,_.wind=0,_.windOff=0,_.netBounce=!1,_.netSaves=0,_.lap=0,_.diffN=0,_.wScore=[0,0,0,0],_.runMedals=[0,0,0,0],_.starsGot=0,_.flipsTot=0,_.maxCombo=0,qi=-1,Ax(),ko=!1,Dn&&(URL.revokeObjectURL(Dn),Dn=null,Wn=null),j.entry.classList.add("hidden"),j.worldTag.textContent=ki[0].toUpperCase(),j.wind.style.opacity="0";for(const e of Tr)e.used=!1,e.flashT=0;tt[0].theta=-1,tt[0].omega=0;for(const e of di)e.got=!1;for(const e of Yi)e.got=!1,e.m.visible=!0;nc(),Ye.visible=!0,Bs.visible=!1,Pr.visible=!1,Cr.visible=!1,j.menu.classList.add("hidden"),j.over.classList.add("hidden"),j.hud.style.display="flex",Lr.classList.add("on"),vr(),Fl(),ln("begin",{prio:3,delay:.35})}function Ef(){for(let n=0;n<Fs;n++){const e=Ux(_.wScore[n]);e>_.runMedals[n]&&(_.runMedals[n]=e),e>Fe.medals[n]&&(Fe.medals[n]=e)}}let Ss=!1;function bf(){if(_.mode="over",j.hud.style.display="none",j.comboHold.style.opacity="0",j.wind.style.opacity="0",Lr.classList.remove("on"),wn.visible=!1,_.attract){Pf();return}Ef(),Ss=_.score>Fe.high,Ss&&(Fe.high=_.score),_.maxCombo>Fe.combo&&(Fe.combo=_.maxCombo),Vi();let n=!1;if(_.daily){const t=Er();n=!t||_.score>t.s,Dx(_.score)}const e=_.daily?-1:Nx(_.score);(_.lap>0||e===0&&_.score>0||n)&&$x($o()?2:4),e>=0?aM(e):Tf()}function Tf(){j.big.textContent=_.lap>0?"🎉 What a run!":"Nice flying!",j.bigsub.textContent=(_.daily?"📅 DAILY · ":"")+"Score "+_.score.toLocaleString("en")+" · Best "+(_.daily?(Er()||{s:_.score}).s:Fe.high).toLocaleString("en"),j.newBest.classList.toggle("hidden",!Ss),j.overStats.innerHTML="<div><b>"+_.starsGot+"</b>⭐ stars</div><div><b>"+_.flipsTot+"</b>🌀 flips</div><div><b>x"+_.maxCombo+"</b>🔥 best combo</div><div><b>"+(_.lap>0?_.lap+(_.lap>1?" laps":" lap"):ki[_.world])+"</b>🌍 "+(_.lap>0?"endless!":"reached")+"</div>",j.overMedals.textContent=_.runMedals.map((n,e)=>Hl[e]+Gl[n]).join("  "),qi>=0?(hl(j.overBoard,qi),j.overBoard.classList.remove("hidden")):j.overBoard.classList.add("hidden"),Dn?(j.photoImg.src=Dn,j.photoWrap.classList.add("show"),j.shareBtn.classList.remove("hidden")):(j.photoWrap.classList.remove("show"),j.shareBtn.classList.add("hidden")),j.over.classList.remove("hidden"),Ss?et.applause():et.fanfare(),Ss&&ln("record",{prio:3,delay:1.2}),ln("bye",{prio:2,delay:Ss?3.4:1})}function mi(){Tn(),_.mode==="playing"&&(_.state==="swing"?(_.holding=!0,_.armed=!0):_.state==="fly"&&!_.trick&&(_.trick=!0,et.flip()))}function gi(){if(_.mode!=="playing"){_.holding=!1;return}_.holding=!1,_.state==="swing"&&_.armed&&(_.armed=!1,hM())}const wf=()=>{const n=document.activeElement;return n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA")};addEventListener("keydown",n=>{n.code==="Space"&&!n.repeat&&!wf()&&(n.preventDefault(),mi())});addEventListener("keyup",n=>{n.code==="Space"&&!wf()&&(n.preventDefault(),gi())});mf.addEventListener("pointerdown",n=>{n.preventDefault(),mi()});addEventListener("pointerup",gi);addEventListener("pointercancel",gi);Lr.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),mi()});Lr.addEventListener("pointerup",n=>{n.stopPropagation(),gi()});let xr=!1,Xa=!1;const nh={};function Af(){j.gpBadge.style.display=xr?"inline-block":"none"}function ms(n){if(rt.active||_.attract){na();return}j.entry.classList.contains("hidden")&&_.mode==="menu"&&(n==="left"?Go("marc"):n==="right"&&Go("claire"))}function lM(n){if(n&&(rt.active||_.attract)){na();return}if(n)if(Vs=_.t,_.mode==="playing")mi();else if(j.entry.classList.contains("hidden"))_.mode==="menu"?(Tn(),et.click(),pi(!1)):_.mode==="over"&&(Tn(),et.click(),pi(_.daily));else if(j.entryInput.value.trim())ea();else{try{j.entryInput.focus({preventScroll:!0})}catch{j.entryInput.focus()}j.entryInput.classList.remove("needsName"),j.entryInput.offsetWidth,j.entryInput.classList.add("needsName"),et.click()}else _.mode==="playing"&&gi()}let qa=!0;function Rf(){const n=navigator.getGamepads?navigator.getGamepads():[];let e=null;for(const o of n)if(o){e=o;break}if(!!e!==xr&&(xr=!!e,Af()),!e){Xa=!1;return}const t=!!(e.buttons[0]&&e.buttons[0].pressed);t!==Xa&&(lM(t),Xa=t);const i=o=>{const a=!!(e.buttons[o]&&e.buttons[o].pressed),l=nh[o];return nh[o]=a,a&&!l};i(12)&&ms("up"),i(13)&&ms("down"),i(14)&&ms("left"),i(15)&&ms("right");const s=e.axes[0]||0,r=e.axes[1]||0;Math.abs(s)<.3&&Math.abs(r)<.3?qa=!0:qa&&(Math.abs(s)>.65||Math.abs(r)>.65)&&(qa=!1,Math.abs(s)>Math.abs(r)?ms(s>0?"right":"left"):ms(r>0?"down":"up"))}addEventListener("gamepadconnected",()=>{xr=!0,Af()});addEventListener("gamepaddisconnected",()=>Rf());const cM=20;let Vs=0;const yo={flipped:!1};function Cf(){_.mode!=="menu"||rt.active||_.attract||(_.attract=!0,yo.flipped=!1,_.char=Math.random()<.5?"marc":"claire",pi(!1),j.attractBar.classList.add("show"))}function Pf(){_.attract&&(_.attract=!1,j.attractBar.classList.remove("show"),ta())}function uM(){if(_.state==="swing")if(yo.flipped=!1,!_.holding)mi();else{const n=tt[_.active];n.omega>0&&Math.abs(n.theta-.45*_.pumpAmp)<.2*_.pumpAmp&&_.pumpAmp>1.18&&gi()}else _.state==="fly"&&_.world===uf&&!yo.flipped&&(mi(),yo.flipped=!0)}function na(){Vs=_.t,rt.active?$l():_.attract&&Pf()}addEventListener("keydown",na,!0);addEventListener("pointerdown",na,!0);function hM(){const n=tt[_.active],e=_.active+1;if(n.omega<=.15||e>=Gt){const v=Ft*n.omega;_.vel.set(Math.cos(n.theta)*v*.5+1,Math.sin(n.theta)*v*.5,0),_.state="fumble",_.spin=0,_.grade="fumble",n.ropeAmp=.26,wn.visible=!0,Ku(Ye.position),Oi("WHOOPS!","#ff7d7d"),Zn(20),et.fumble();return}const t=_.pumpAmp,i=.45*t,s=Math.abs(n.theta-i)/t,r=Math.pow(.95,_.diffN),o=Math.max(.065,.12*r),a=Math.max(.2,.35*r);let l,c,u;s<o?(_.grade="perfect",l=.6,c=2.8,u=5,Oi("PERFECT!","#ffcf3f")):s<a?(_.grade="good",l=.75,c=2.4,u=4.2,Oi("GOOD!","#d8ffef")):(_.grade="ok",l=.95,c=1.5,u=3,Oi("OK","#9a8fc5")),u*=.85+(t-ul)/(lf-ul)*.3,n.w===Bl&&(l*=1.25,u*=1.12),_.windOff=0;const h=tt[e],f=Ye.position.clone(),p=new D(h.x+Ft*Math.sin(-.5),h.py-Ft*Math.cos(-.5)-Sr,0),g=p.x-f.x;_.flyFrom.copy(f),_.flyT=0,_.arcH=c,_.trick=!1,_.flipRot=0,_.lastFlips=0,_.lastFlipBonus=0,g<=u?(_.flyMode="catch",_.flyTo.copy(p),_.flyNext=e,_.flyDur=l):(_.flyMode="short",_.flyTo.copy(f.clone().lerp(p,Math.max(.55,u/g))),_.flyNext=-1,_.flyDur=l*.9),_.state="fly",_.spin=0,n.ropeAmp=.3,_.fovKick=1,wn.visible=!0,Ku(f),_i(_.grade==="perfect"?.28:.15),Zn(12),et.whoosh()}function fM(n){_.world=n,_.lap>0&&_.diffN++,j.bannerTxt.textContent="World "+(n+1)+" — "+ki[n],j.banner.classList.remove("show"),j.banner.offsetWidth,j.banner.classList.add("show"),j.worldTag.textContent=ki[n].toUpperCase()+(_.lap>0?" · LAP "+(_.lap+1):""),_i(.3),Zn(18),Nl(n),et.fanfare(),et.applause(),n>0&&ln("world_"+ki[n].toLowerCase(),{prio:2,delay:.8})}function dM(){_.lap++,_.diffN++,Ef(),_.wScore=[0,0,0,0];for(const e of di)e.got=!1;for(const e of Yi)e.got=!1,e.m.visible=!0;for(const e of Tr)e.used=!1,e.flashT=0;_.state="swing",_.active=0,_.armed=!1,_.holding=!1,_.windOff=0,_.netBounce=!1,_.world=0,_.comboT=zl;const n=tt[0];n.theta=-.8,n.omega=1.4,ic(n),Ye.rotation.z=0,wn.visible=!1,wt.position.set(Ye.position.x-7.5,Math.max(Ye.position.y+4,3),12),Ho.set(Ye.position.x+2.5,Ye.position.y-.5,0),j.worldTag.textContent="CIRCUS · LAP "+(_.lap+1),j.bannerTxt.textContent=_.lap===1?"🎉 TOUR COMPLETE — ENDLESS MODE!":"LAP "+(_.lap+1)+" — FASTER!",j.banner.classList.remove("show"),j.banner.offsetWidth,j.banner.classList.add("show"),or(Ye.position,60,!0,8),_i(.35),Zn(25),Nl(0),et.applause(),et.fanfare(),_.lap===1&&ln("endless",{prio:3,delay:1})}function pM(n){const e=Math.floor(_.flipRot/(Math.PI*2)),t=tt[_.active].w;_.active=n,_.state="swing",tt[n].theta=-.5,tt[n].omega=_.grade==="perfect"?2:1.7,tt[n].ropeAmp=.14,Ye.rotation.z=0,_.spin=0,_.armed=!1,wn.visible=!1,_.combo++,_.comboT=zl,_.combo>_.maxCombo&&(_.maxCombo=_.combo);let i=(100+(_.combo-1)*25)*(_.grade==="perfect"?2:1),s=e>0?50*e*Math.max(1,_.combo):0;if(_.lastFlips=e,_.lastFlipBonus=s,_.lastGain=i,_.flipsTot+=e,_.score+=i+s,_.wScore[tt[n].w]+=i+s,dl((_.combo>1?`x${_.combo}  `:"")+`+${i+s}`),e>0&&setTimeout(()=>Oi(`FLIP +${s}`,"#ff6db0"),120),or(Ye.position,_.grade==="perfect"?40:22,!1,_.grade==="perfect"?7:5),_.combo===10?ln("combo10",{prio:2,delay:.45}):_.combo===25?ln("combo25",{prio:2,delay:.45}):_.grade==="perfect"&&_.combo>=4&&_.combo%5===0&&ln("perfect",{prio:1,delay:.5,cooldown:20}),_.grade==="perfect"?(_.slowmo=jo()?.15:.4,_.salute=.7,et.perfect(),_.combo===_.maxCombo&&MM()):et.catch(_.combo),_i(.25),Zn(16),vr(),n>=Gt-1){dM();return}tt[n].w!==t&&fM(tt[n].w)}function mM(){if(_.lives--,_.combo=0,_.comboT=0,_.netBounce=!1,_.windOff=0,_.shake=.15,_i(.5),Zn(30),et.fumble(),wn.visible=!1,vr(),_.lives<=0){bf();return}_.state="swing",_.armed=!1;const n=tt[_.active];n.theta=-_.pumpAmp*.6,n.omega=0}function Lf(n,e,t){const i=t?_.pumpAmp:cf;n.omega+=-5.757575757575758*Math.sin(n.theta)*e;const s=.5*n.omega*n.omega+Uo/Ft*(1-Math.cos(n.theta)),r=Uo/Ft*(1-Math.cos(i));n.omega*=1+(r-s)*.02*(t?1:.4),n.theta+=n.omega*e}function gM(n){if(_.world=tt[_.active].w,_.world===uf){const t=Math.sin(_.t*.8);_.wind=Math.abs(t)>.55?Math.sign(t)*1.6*((Math.abs(t)-.55)/.45):0}else _.wind=0;j.wind.textContent=_.wind>0?"💨 »»":"«« 💨",j.wind.style.opacity=Math.abs(_.wind)>.25?"1":"0",_.pumpAmp+=((_.holding&&_.state==="swing"?lf:ul)-_.pumpAmp)*Math.min(1,n*1.7);const e=Math.min(1.4,1+.05*_.diffN);for(let t=0;t<Gt;t++)Lf(tt[t],n*(t===_.active?e:1),t===_.active&&_.state==="swing");if(_.state==="swing")ic(tt[_.active]);else if(_.state==="fly"){_.flyT+=n;const t=Math.min(1,_.flyT/_.flyDur);if(_.flyMode==="catch"&&_.flyNext>=0){const r=tt[_.flyNext];_.flyTo.set(r.x+Ft*Math.sin(-.5),r.py-Ft*Math.cos(-.5)-Sr,0)}_.wind!==0&&(_.windOff+=_.wind*n*(_.trick?.3:1));const i=_.flyFrom.clone().lerp(_.flyTo,t);i.y+=Math.sin(t*Math.PI)*_.arcH,i.x+=_.windOff,Ye.position.copy(i);const s=_.trick?16:6.5;_.spin+=n*s,_.trick&&(_.flipRot+=n*s),Ye.rotation.z=_.spin,ju(Ye.position,_.trick,_.t);for(const r of Yi)r.got||Ye.position.distanceTo(r.m.position)<1&&(r.got=!0,r.m.visible=!1,_.score+=75,_.wScore[_.world]+=75,dl("+75 ◎"),or(r.m.position,26,!0,6),vr(),Zn(10),et.ring());t>=1&&(_.flyMode==="catch"&&Math.abs(_.windOff)<=1.35?pM(_.flyNext):(_.vel.set(_.flyMode==="catch"?1:2.2,0,0),_.state="fumble",Oi(_.flyMode==="catch"?"GUSTED!":"TOO FAR!","#ff9d5c")))}else if(_.state==="fumble"){_.vel.y-=(_.world===Bl?Zu*.8:Zu)*n,Ye.position.addScaledVector(_.vel,n),_.spin+=n*4,Ye.rotation.z=_.spin,ju(Ye.position,!1,_.t);const t=Tr[_.world];if(!_.netBounce&&_.vel.y<0&&Ye.position.y<Do+.3&&t&&!t.used)t.used=!0,t.flashT=1,_.netBounce=!0,_.netSaves++,_.vel.y=9.5,_.vel.x=Kd.clamp(tt[_.active].x-Ye.position.x,-3,3)*.6,Oi("SAVED BY THE NET!","#8affc1"),or(Ye.position,26,!1,6),_i(.2),Zn(20),et.net(),ln("net",{prio:1,delay:.4});else if(_.netBounce&&_.vel.y<=0){_.netBounce=!1,_.state="swing",_.armed=!1,wn.visible=!1;const i=tt[_.active];i.theta=-_.pumpAmp*.6,i.omega=0}else Ye.position.y<Px&&mM()}_.combo>0&&(_.comboT-=n,_.comboT<=0&&(_.combo=0)),_.combo>=2?(j.comboHold.style.opacity="1",j.comboHold.firstChild.textContent="COMBO x"+_.combo,j.comboFill.style.width=Math.max(0,_.comboT/zl*100)+"%"):j.comboHold.style.opacity="0";for(const t of di)t.got||Ye.position.distanceTo(t.p)<1.25&&(t.got=!0,_.score+=25,_.wScore[_.world]+=25,_.starsGot++,dl("+25 ⭐"),or(t.p,12,!0,4),vr(),Zn(8),et.star());for(const t of Yi){if(t.got)continue;t.m.rotation.y+=n*1.4;const i=1+Math.sin(_.t*4)*.05;t.m.scale.setScalar(i),t.mvY&&(t.m.position.y=t.baseY+Math.sin(_.t*1.3+t.baseX)*1.2)}}const Ho=new D;function _M(n){const e=Ye.position,t=jo(),i=!t&&_.timeScale<.9?.9:1,s=new D(e.x-7.5*i,Math.max(e.y+4*i,3),12*i);wt.position.lerp(s,1-Math.pow(.001,n)),_.shake>0&&(_.shake-=n,t||(wt.position.x+=(Math.random()-.5)*.3,wt.position.y+=(Math.random()-.5)*.3)),Ho.lerp(new D(e.x+2.5,e.y-.5,0),1-Math.pow(.0015,n)),wt.lookAt(Ho);const r=58+_.fovKick*(t?3:7);Math.abs(wt.fov-r)>.05&&(wt.fov=r,wt.updateProjectionMatrix()),_.fovKick=Math.max(0,_.fovKick-n*2.2)}function vM(){wt.position.lerp(new D(An+Math.sin(_.t*.25)*2,-3.4,8.8),.04),wt.lookAt(An,-5.7,0),wt.fov!==55&&(wt.fov=55,wt.updateProjectionMatrix())}function xM(n){eh+=n,ks.rotation.y=eh*.5,ol(hi[_.char],_.t,"salute");const e=_.char==="marc"?"claire":"marc";if(ol(hi[e],_.t,"idle"),Oo){Fi=Math.min(1,Fi+n*.8),Fi>=1&&(Oo=!1);const t=1-Math.pow(1-Fi,3);for(const i of xf)i.mesh.position.x=i.x0+i.side*t*4.4}}let Wn=null,Dn=null,ko=!1;function MM(){ko=!0}function yM(){const n=xt.renderer.domElement;n.toBlob&&n.toBlob(e=>{e&&(Dn&&URL.revokeObjectURL(Dn),Wn=e,Dn=URL.createObjectURL(e))},"image/png")}async function Uf(){if(!Wn)return;try{const e=new File([Wn],"trapeze-stars-photo-finish.png",{type:"image/png"});if(navigator.canShare&&navigator.canShare({files:[e]})){await navigator.share({files:[e],title:"Trapeze Stars 3D",text:"My best catch — score "+_.score.toLocaleString("en")+"!"});return}}catch{}const n=document.createElement("a");n.href=Dn,n.download="trapeze-stars-photo-finish.png",document.body.appendChild(n),n.click(),n.remove()}j.shareBtn.addEventListener("click",()=>{et.click(),Uf()});window.__game={start:n=>{n&&(_.char=n),pi()},down:mi,up:gi,action:()=>{mi(),gi()},state:()=>({mode:_.mode,state:_.state,active:_.active,score:_.score,lives:_.lives,combo:_.combo,grade:_.grade,flips:_.lastFlips,flipBonus:_.lastFlipBonus,gain:_.lastGain,theta:tt[_.active]?tt[_.active].theta:0,omega:tt[_.active]?tt[_.active].omega:0,amp:_.pumpAmp,timeScale:_.timeScale,hero:Ye.position.toArray(),world:_.world,worldName:ki[_.world],netSaves:_.netSaves,wind:+_.wind.toFixed(2),windOff:+_.windOff.toFixed(2),lap:_.lap,diffN:_.diffN,starsGot:_.starsGot,flipsTot:_.flipsTot,maxCombo:_.maxCombo,calls:xt.calls(),callsTotal:xt.callsTotal()}),records:()=>({high:Fe.high,bestCombo:Fe.combo,medals:[...Fe.medals],mute:Fe.mute,reduceFx:Fe.reduceFx,voice:Fe.voice}),a11y:()=>({osReducedMotion:Io,reduceFx:Fe.reduceFx,effective:jo()}),setReduceFx:n=>{Fe.reduceFx=!!n,Vi(),tc()},photo:()=>({hasPhoto:!!Wn,size:Wn?Wn.size:0,type:Wn?Wn.type:null,url:!!Dn}),sharePhoto:()=>Uf(),over:()=>{_.mode==="playing"&&bf()},wipe:()=>{try{["ts3d_high","ts3d_combo","ts3d_medals","ts3d_mute","ts3d_board","ts3d_daily","ts3d_voice"].forEach(n=>localStorage.removeItem(n))}catch{}Fe=hf(),pn=ff(),qi=-1,yf(),Sf(),Lo(Fe.voice),Bo()},board:()=>pn.map(n=>({...n})),entry:()=>({open:!j.entry.classList.contains("hidden"),value:j.entryInput.value}),setEntry:n=>{j.entryInput.value=String(n??"").slice(0,pf)},entryConfirm:()=>ea(),gp:()=>({active:xr}),net:()=>({configured:ji(),tab:Ui,loading:dr,rows:Ln?Ln.map(n=>({...n})):null,lastSubmit:ws?{...ws}:null}),netTest:(n,e)=>{bx(n,e),Ui="world",Ln=null,dr=!1,js=null,Qo(!0)},intro:()=>({active:rt.active,done:rt.done,t:+rt.t.toFixed(2)}),skipIntro:()=>{rt.active?$l():rt.done=!0},playIntro:()=>jl(),attract:()=>({active:_.attract,idle:+(_.t-Vs).toFixed(1)}),startAttract:()=>Cf(),toMenu:()=>ta(),daily:()=>({active:_.daily,seed:Ko(),best:(Er()||{s:0}).s,bars:It.slice(0,3).map(n=>[+n.x.toFixed(3),+n.py.toFixed(3)])}),startDaily:()=>pi(!0),audio:()=>hx(),mute:n=>{Fe.mute=!!n,Il(Fe.mute),Vi(),ec()},voice:()=>_x(),setVoice:n=>{Fe.voice=!!n,Lo(Fe.voice),Vi(),Bo()},sayTest:n=>ln(n,{prio:1}),ropes:()=>{const n=tt[_.active],e=n.rope.geometry.attributes.position.array;let t=0;for(let i=0;i<e.length;i++)t+=e[i];return{segments:pr,sides:Di,verts:e.length/3,amp:+n.ropeAmp.toFixed(4),checksum:+t.toFixed(5)}},marquee:()=>({present:!!(Li.marquee&&Li.marquee.parent),bulbs:Li.bulbCount,children:Li.marquee?Li.marquee.children.length:0}),warp:n=>{if(_.mode!=="playing")return;n=Math.max(0,Math.min(Gt-1,n)),_.active=n,_.state="swing",_.armed=!1,_.holding=!1,_.netBounce=!1,_.windOff=0,_.world=tt[n].w,wn.visible=!1;const e=tt[n];e.theta=-.6,e.omega=1.2,ic(e),wt.position.set(Ye.position.x-7.5,Math.max(Ye.position.y+4,3),12),Ho.set(Ye.position.x+2.5,Ye.position.y-.5,0),j.worldTag.textContent=ki[_.world].toUpperCase(),Nl(_.world)},pick:n=>{hi[n]&&(_.char=n,nc(),Ql())},menu:()=>({podium:Bs.visible,heroes:Bs.visible&&hi.marc.visible&&hi.claire.visible?2:0,curtainOpen:+Fi.toFixed(2),char:_.char})};ta();let ih=performance.now();function Df(n){let e=(n-ih)/1e3;ih=n,e=Math.min(e,.05),_.t+=e,Rf(),_.slowmo>0?(_.slowmo-=e,_.timeScale=.35):_.timeScale+=(1-_.timeScale)*Math.min(1,e*6);const t=e*_.timeScale;Li.update(_.t),Li.applyMood(xt,_.mode==="playing"?Ye.position.x:An);const i=_.mode==="playing"?62:34,s=_.mode==="playing"?Ye.position.x:An;for(let o=0;o<Gt;o++){const a=tt[o];a.ropeAmp>.001&&(a.ropeAmp*=Math.exp(-2.6*e),a.ropePh+=e*11),a.shown=Math.abs(a.x-s)<i,a.rope.visible!==a.shown&&(a.rope.visible=a.shown),a.shown&&Xx(a,_.mode==="playing"?Math.abs(o-_.active)<=2:o<=2)}for(let o=0;o<di.length;o++){const a=di[o];!a.got&&Math.abs(a.p.x-s)<i?(a.rot+=e*2,ft.position.copy(a.p),ft.rotation.set(a.rot*.65,a.rot,0),ft.scale.setScalar(1)):(ft.position.set(0,-9999,0),ft.rotation.set(0,0,0),ft.scale.setScalar(0)),ft.updateMatrix(),Fo.setMatrixAt(o,ft.matrix)}Fo.instanceMatrix.needsUpdate=!0;const r=_.mode==="playing"&&(_.state==="swing"||_.state==="fly")?_.active+1:-1;Ii.visible=!1;for(let o=0;o<Gt;o++){const a=tt[o];a.shown?(ft.position.set(a.x,a.py,0),ft.rotation.set(0,0,0),ft.scale.setScalar(1)):(ft.position.set(0,-9999,0),ft.rotation.set(0,0,0),ft.scale.setScalar(0)),ft.updateMatrix(),No.setMatrixAt(o,ft.matrix),a.shown&&o!==r?(ft.position.copy(a.p),ft.rotation.set(Math.PI/2,0,0),ft.scale.setScalar(1)):(ft.position.set(0,-9999,0),ft.rotation.set(0,0,0),ft.scale.setScalar(0)),ft.updateMatrix(),mr.setMatrixAt(o,ft.matrix),o===r&&a.shown&&(Ii.visible=!0,Ii.position.copy(a.p),Ii.rotation.x=Math.PI/2)}No.instanceMatrix.needsUpdate=!0,mr.instanceMatrix.needsUpdate=!0;for(const o of Yi)o.m.visible=!o.got&&Math.abs(o.m.position.x-s)<i;Vl.visible=_.mode==="playing";for(const o of Tr)o.flashT>0?(o.flashT-=e,o.m.material.opacity=.3+Math.max(0,o.flashT)*.5,o.m.position.y=Do-Math.sin(Math.max(0,o.flashT)*Math.PI)*.6):(o.m.material.opacity=o.used?.1:.3,o.m.position.y=Do);if(_.mode==="playing"){_.attract&&uM(),gM(t);let o="swing";_.state==="fly"?o="fly":_.salute>0&&(o="salute",_.salute-=e),ol(Ye,_.t,o),_M(e)}else{for(let o=0;o<Gt;o++)Lf(tt[o],e,!1);_.mode==="menu"&&xM(e),rt.active?oM(e):vM(),_.mode==="menu"&&!rt.active&&!navigator.webdriver&&_.t-Vs>cM&&Cf()}tM(e),Qx(e),nM(e),mx(_.mode),xo>0&&(xo-=e,xo<=0&&(j.combo.style.opacity="0")),Mo>0&&(Mo-=e,Mo<=0&&(j.grade.style.opacity="0")),ys>0&&(ys=Math.max(0,ys-e*1.4),j.flash.style.opacity=String(ys)),xt.render(),ko&&(ko=!1,yM()),requestAnimationFrame(Df)}requestAnimationFrame(Df);"serviceWorker"in navigator&&location.protocol.startsWith("http")&&window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
