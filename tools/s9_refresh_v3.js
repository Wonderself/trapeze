// Meme verification que s9_refresh.js, pour Trapeze City : le pas de
// temps fixe (STEP=1000/120) doit rendre le jeu identique a 60 Hz et a
// 120 Hz. On nourrit frameLoop() avec des timestamps espaces de 16,67 ms
// puis 8,33 ms sur une duree d'horloge murale identique, sous la MEME
// politique d'entree (pomper au bon moment), et on compare l'amplitude
// atteinte. Sans acces a un vrai ecran 120 Hz, c'est le test direct de la
// logique qui compte : l'accumulateur a pas fixe, pas le materiel
// d'affichage.
const fs=require('fs'),vm=require('vm'),path=require('path');
const {makeSandbox}=require(path.join(__dirname,'sandbox.js'));
const file=path.join(__dirname,'..','trapeze-city-v3.html');
const html=fs.readFileSync(file,'utf8');
const code=html.match(/<script>([\s\S]*?)<\/script>/)[1];

function runAtRate(hz){
  const sb=makeSandbox(html);
  vm.createContext(sb);
  new vm.Script(code,{filename:file}).runInContext(sb,{timeout:15000});
  const V=sb.window.__v3;
  V.start();V.goRig(2);
  const P=V.P,C=V.CFG;
  let armed=true,last=1;
  const dtMs=1000/hz;
  let t=0;
  const WALL_CLOCK_MS=10000;               // 10 s d'horloge murale simulee
  const steps=Math.floor(WALL_CLOCK_MS/dtMs);
  for(let i=0;i<steps;i++){
    t+=dtMs;
    // Meme politique de pompage qu'un joueur applique : un appui par
    // demi-arc, arme au passage par le point bas, jamais pendant la
    // montee avant. Deterministe, donc comparable entre les deux taux.
    if(P.state==='hang'){
      const sg=P.ang>=0?1:-1;if(sg!==last){last=sg;armed=true;}
      if(P.amp<C.PUMP_MIN)armed=true;
      if(armed&&!(P.angV>0&&P.ang>0.25)&&(P.amp<C.PUMP_MIN||Math.abs(P.ang)>=0.60*P.amp)){
        V.action();armed=false;
      }
    }
    sb.window.frameLoop(t);
  }
  return {amp:P.amp,ang:P.ang};
}

const r60=runAtRate(60);
const r120=runAtRate(120);
console.log('60 Hz  (10s murales, dt=16.67ms) : amp='+r60.amp.toFixed(4)+', ang='+r60.ang.toFixed(4));
console.log('120 Hz (10s murales, dt=8.33ms)  : amp='+r120.amp.toFixed(4)+', ang='+r120.ang.toFixed(4));
const diffPct=Math.abs(r60.amp-r120.amp)/Math.max(0.01,Math.abs(r60.amp))*100;
console.log('ecart de progression (amplitude) : '+diffPct.toFixed(2)+'%');
if(diffPct>3){console.log('ECHEC : le taux de rafraichissement affecte la vitesse du jeu');process.exit(1);}
console.log('OK : vitesse independante du taux de rafraichissement');
