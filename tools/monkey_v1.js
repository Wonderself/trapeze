// Meme principe que monkey_v2.js, adapte a V1 : entrees aleatoires a travers
// tous les etats (menu, jeu, pause, game over, level complete, finale).
const fs=require('fs'),vm=require('vm');
const base=require(require('path').join(__dirname,'sandbox.js'));
const file='/home/user/trapeze/trapeze-stars-v1.html';
const html=fs.readFileSync(file,'utf8');
const code=html.match(/<script>([\s\S]*?)<\/script>/)[1];
const bridge=`
;globalThis.__m={
  get gs(){return gs;}, set gs(v){gs=v;},
  get paused(){return paused;},
  get lives(){return lives;}, set lives(v){lives=v;},
  K, JP2, handleSpace, togglePause, startGame, initMenu,
  get menuSel(){return menuSel;}, set menuSel(v){menuSel=v;},
  get tapN(){return tapN;}, set tapN(v){tapN=v;},
  get jBuf(){return jBuf;}, set jBuf(v){jBuf=v;},
  get grabBuf(){return grabBuf;}, set grabBuf(v){grabBuf=v;},
  set grabBufTimer(v){grabBufTimer=v;},
  set mLeft(v){mLeft=v;}, set mRight(v){mRight=v;},
  loop, frame:()=>frameN,
};`;

const sb=base.makeSandbox(html);
vm.createContext(sb);
new vm.Script(code+bridge,{filename:file}).runInContext(sb,{timeout:20000});
const M=sb.__m;
if(!M){console.error('pont absent');process.exit(1);}

function rnd(n){return Math.floor(Math.random()*n);}
function pick(a){return a[rnd(a.length)];}
const KEYS=['ArrowUp','ArrowDown','ArrowLeft','ArrowRight',' ','Enter','Escape','p','a','d','q','f','w','z'];

let crashes=0, iterations=8000;
for(let i=0;i<iterations;i++){
  try{
    const roll=rnd(100);
    if(roll<35){
      const k=pick(KEYS);
      if(M.gs==='menu'){
        if(k==='ArrowLeft'||k==='a'||k==='q')M.menuSel=0;
        if(k==='ArrowRight'||k==='d')M.menuSel=1;
        if(k===' '||k==='Enter')M.startGame();
      } else {
        if(k==='p')M.togglePause();
        else if(k===' '||k==='ArrowUp'||k==='w'||k==='z')M.handleSpace();
        else if(k==='f'||k==='Shift')M.grabBuf=1;
        else if(k==='Escape'){M.gs='menu';M.initMenu();}
      }
    } else if(roll<55){
      if(M.gs==='playing')M.handleSpace();
    } else if(roll<70){
      M.tapN++;
      if(rnd(2))M.jBuf=1;
    } else if(roll<80){
      M.mLeft=!!rnd(2);M.mRight=!!rnd(2);
    } else if(roll<90){
      // Avance plusieurs frames d'un coup via la boucle reelle
      for(let s=0;s<rnd(20);s++)M.loop();
    } else {
      // Brutalite : forcer un game over ou revenir au menu en pleine action
      if(rnd(2)){M.lives=0;}else{M.gs='menu';M.initMenu();}
    }
    M.loop();
  }catch(e){
    crashes++;
    console.log('CRASH a l\'iteration '+i+' (gs avant='+M.gs+') : '+e.message);
    console.log(e.stack.split('\n').slice(0,5).join('\n'));
    if(crashes>=5)break;
  }
}
console.log('\n'+iterations+' iterations adversariales, '+crashes+' crash(s), etat final gs='+M.gs+', frame='+M.frame());
process.exit(crashes?1:0);
