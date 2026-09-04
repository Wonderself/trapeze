// Verifie que le pas de temps fixe (STEP=1000/60) rend le jeu identique
// a 60 Hz et 120 Hz : on nourrit frameLoop() avec des timestamps espaces
// de 16.67ms puis 8.33ms sur une duree "horloge murale" identique, et on
// compare la progression du joueur. Sans acces a un vrai ecran 120Hz,
// c'est le test direct de la logique qui compte : l'accumulateur a pas
// fixe, pas le materiel d'affichage.
const fs=require('fs'),vm=require('vm');
const base=require(require('path').join(__dirname,'sandbox.js'));
const file='/home/user/trapeze/trapeze-stars-v2.html';
const html=fs.readFileSync(file,'utf8');
const code=html.match(/<script>([\s\S]*?)<\/script>/)[1];
const bridge=`\n;globalThis.__g={get gs(){return gs;},get frame(){return frame;},P,startRun,frameLoop};`;

function runAtRate(hz){
  const sb=base.makeSandbox(html);
  vm.createContext(sb);
  new vm.Script(code+bridge,{filename:file}).runInContext(sb,{timeout:15000});
  const G=sb.__g;
  G.startRun();
  // Force une entree constante (avance + saute des que possible) pour
  // avoir une trajectoire deterministe et comparable entre les deux taux.
  const dtMs=1000/hz;
  let t=0;
  const WALL_CLOCK_MS=10000;               // 10 s d'horloge murale simulee
  const steps=Math.floor(WALL_CLOCK_MS/dtMs);
  for(let i=0;i<steps;i++){
    t+=dtMs;
    G.P.jumpHeld=true;
    if(G.P.state==='run')G.P.jumpBuf=6;
    G.frameLoop(t);
  }
  return {z:G.P.z, frame:G.frame, gs:G.gs};
}

const r60=runAtRate(60);
const r120=runAtRate(120);
console.log('60 Hz  (10s murales, dt=16.67ms) : z='+r60.z.toFixed(1)+', pas simules='+r60.frame+', etat='+r60.gs);
console.log('120 Hz (10s murales, dt=8.33ms)  : z='+r120.z.toFixed(1)+', pas simules='+r120.frame+', etat='+r120.gs);
const diffPct=Math.abs(r60.z-r120.z)/Math.max(1,Math.abs(r60.z))*100;
console.log('ecart de progression : '+diffPct.toFixed(2)+'%');
if(diffPct>3){console.log('ECHEC : le taux de rafraichissement affecte la vitesse du jeu');process.exit(1);}
console.log('OK : vitesse independante du taux de rafraichissement');
