// Preuve de franchissabilite du parcours de Trapeze City.
//
//   node tools/reach_v3.js
//
// Sans dependance : le jeu tourne dans le DOM simule de sandbox.js, et on
// rejoue sa propre physique pour balayer le couple (amplitude, angle de
// lacher) de chaque vol.
//
// Ce test repond a la seule question qui compte pour un niveau de trapeze :
// chaque barre est-elle atteignable, et a partir de quelle amplitude ? Une
// relecture du code ne peut pas y repondre. C'est le meme genre d'outil qui
// avait revele, en Deluxe, des barres tout simplement hors de portee.
const fs=require('fs'),vm=require('vm'),path=require('path');
const {makeSandbox}=require(path.join(__dirname,'sandbox.js'));
const file=path.join(__dirname,'..','trapeze-city-v3.html');
const html=fs.readFileSync(file,'utf8');
const code=html.match(/<script>([\s\S]*?)<\/script>/)[1];
const sb=makeSandbox(html);
vm.createContext(sb);
new vm.Script(code,{filename:file}).runInContext(sb);
const V=sb.window.__v3;
if(!V){console.error('pont __v3 absent');process.exit(1);}
const {CFG,RIGS}=V, DT=1/120;

// Rejoue un vol : pendule jusqu'a l'angle de lacher, puis balistique.
// Renvoie la distance minimale a la barre visee.
function flight(n,amp,rel){
  const rig=RIGS[n], tgt=RIGS[n+1];
  const w2=CFG.G_SWING/rig.rope;
  // Point de depart : au repos a l'amplitude voulue.
  let ang=amp, angV=0;
  let guard=0;
  while(guard++<6000){
    angV+=-w2*Math.sin(ang)*DT;angV*=CFG.DAMP;ang+=angV*DT;
    if(angV>0&&ang>=rel)break;
  }
  if(ang<rel-0.05)return 1e9;
  const c=Math.cos(ang),s=Math.sin(ang),v=angV*rig.rope;
  let x=rig.ax+rig.dx*s*rig.rope, y=rig.ay-c*rig.rope, z=rig.az+rig.dz*s*rig.rope;
  let vx=v*rig.dx*c, vy=v*s, vz=v*rig.dz*c;
  const tx=tgt.ax, ty=tgt.ay-tgt.rope, tz=tgt.az;
  let best=1e9;
  for(let i=0;i<1200;i++){
    vy-=CFG.G_FLIGHT*DT;vx*=CFG.AIR_DRAG;vy*=CFG.AIR_DRAG;vz*=CFG.AIR_DRAG;
    x+=vx*DT;y+=vy*DT;z+=vz*DT;
    const d=Math.hypot(x-tx,y-ty,z-tz);
    if(d<best)best=d;
    if(y<ty-30)break;
  }
  return best;
}

let fail=false;
console.log('parcours : '+RIGS.length+' rigs, '+(RIGS.length-1)+' vols');
for(let n=0;n<RIGS.length-1;n++){
  const a=RIGS[n], b=RIGS[n+1];
  const gap=Math.hypot(b.x-a.x,b.z-a.z);
  const rise=(b.ay-b.rope)-(a.ay-a.rope);
  let minAmp=null, solutions=0, bestD=1e9, bestA=0, bestR=0;
  for(let amp=0.50;amp<=CFG.AMP_MAX;amp+=0.02){
    let hit=false;
    for(let rel=0.10;rel<=1.45;rel+=0.01){
      const d=flight(n,amp,rel);
      if(d<bestD){bestD=d;bestA=amp;bestR=rel;}
      if(d<CFG.GRAB_R){hit=true;solutions++;}
    }
    if(hit&&minAmp===null)minAmp=amp;
  }
  const ok=minAmp!==null;
  if(!ok)fail=true;
  console.log('  vol '+(n+1)+' : ecart '+gap.toFixed(1)+' m, denivele '+rise.toFixed(1)+' m'
    +'  |  amplitude mini '+(ok?(minAmp.toFixed(2)+' rad ('+(minAmp*180/Math.PI).toFixed(0)+' deg)'):'AUCUNE')
    +'  |  meilleure approche '+bestD.toFixed(2)+' m'
    +' (amp '+bestA.toFixed(2)+', lacher '+(bestR*180/Math.PI).toFixed(0)+' deg)'
    +'  |  '+solutions+' couples gagnants');
}
console.log(fail?'PARCOURS INFRANCHISSABLE':'parcours franchissable, avec une marge de progression a chaque vol');
process.exit(fail?1:0);
