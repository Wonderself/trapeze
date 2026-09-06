// Test adversarial de Trapeze City : entrees aleatoires (clavier, tap
// ecran, transitions brutales) a travers TOUS les etats du jeu, y compris
// les menus et les reglages de la session 4. Cherche des crashs que ni le
// pilote automatique raisonnable de play_v3.js ni une relecture du code
// ne trouveraient. Modele : tools/monkey_v2.js.
const fs=require('fs'),vm=require('vm'),path=require('path');
const {makeSandbox}=require(path.join(__dirname,'sandbox.js'));
const file=path.join(__dirname,'..','trapeze-city-v3.html');
const html=fs.readFileSync(file,'utf8');
const code=html.match(/<script>([\s\S]*?)<\/script>/)[1];

const sb=makeSandbox(html);
vm.createContext(sb);
new vm.Script(code,{filename:file}).runInContext(sb,{timeout:20000});
const V=sb.window.__v3;
if(!V){console.error('pont __v3 absent');process.exit(1);}

function rnd(n){return Math.floor(Math.random()*n);}
function pick(a){return a[rnd(a.length)];}

const ITER=Math.max(1000,parseInt(process.argv[2]||'8000',10));
let crashes=0;

for(let i=0;i<ITER;i++){
  try{
    const roll=rnd(100);
    const st=V.state;
    if(roll<28){
      // Action de jeu aleatoire : les quatre gestes possibles.
      const g=rnd(5);
      if(g===0)V.action();
      else if(g===1)V.release();
      else if(g===2)V.figure();
      else if(g===3)V.figureEnd();
      else V.pause();
    } else if(roll<44){
      // Tap a une position aleatoire dans l'espace de rendu courant :
      // consulte hitTest, exactement comme le vrai gestionnaire de
      // pointeur, avec le meme repli que screenClick.
      const px=rnd(V.state.sw||1280), py=rnd(V.state.sh||720);
      const fn=V.hitTest(px,py);
      if(fn)fn();
      else V.screenClick(px,py);
    } else if(roll<56){
      // Navigation clavier dans les menus : haut/bas/gauche/droite/entree.
      const dir=pick([-1,1]);
      V.menuNav(dir);
      if(rnd(2))V.menuActivate();
    } else if(roll<62){
      // Ouverture/fermeture brutale des reglages, depuis n'importe quel etat.
      if(rnd(2))V.openSettings();else V.closeSettings();
    } else if(roll<70){
      // Reglages : fait tourner une ligne au hasard, meme hors de l'ecran
      // reglages -- teste que les fonctions ne supposent pas gs==='settings'.
      const rows=V.settingsRows();
      const r=pick(rows);
      if(rnd(2))r.left();else r.right();
    } else if(roll<76){
      // Regard libre / manche virtuel, deplacement aleatoire.
      V.look(rnd(200)-100,rnd(200)-100);
    } else if(roll<84){
      // Avance la simulation de plusieurs pas d'un coup, y compris en
      // plein carton d'acte, en plein vol, ou en plein reglages.
      V.sim(rnd(40));
    } else if(roll<90){
      // Transitions brutales : demarrer, revenir au menu, changer de
      // qualite ou de langue en plein vol.
      const t=rnd(5);
      if(t===0)V.start();
      else if(t===1)V.menu();
      else if(t===2)V.quality(pick(['low','med','high']));
      else if(t===3)V.setLang(pick(['fr','en']));
      else V.finale();
    } else if(roll<95){
      // Reglages d'accessibilite au hasard, pendant n'importe quel etat.
      const flags=['invertY','aids','reduceMotion','reduceFlash','highContrast'];
      V.SV[pick(flags)]=rnd(2);
    } else {
      // Redimensionnement et changement d'orientation, en plein jeu.
      sb.window.innerWidth=pick([360,414,800,1280,1920]);
      sb.window.innerHeight=pick([640,896,450,720,1080]);
      if(typeof sb.__t!=='undefined'){} // pas de pont dedie au resize ici
    }
    // Toujours faire avancer la simulation d'un pas, quel que soit l'etat.
    V.sim(1);
  }catch(e){
    crashes++;
    console.log('CRASH a l\'iteration '+i+' (gs avant='+V.state.gs+') : '+e.message);
    console.log((e.stack||'').split('\n').slice(0,5).join('\n'));
    if(crashes>=5)break;
  }
}
console.log('\n'+ITER+' iterations adversariales, '+crashes+' crash(s), etat final gs='+V.state.gs);
process.exit(crashes?1:0);
