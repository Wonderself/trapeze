// Test adversarial : entrees aleatoires (clavier + tap ecran + redimensionnement)
// a travers tous les etats du jeu, sur un grand nombre d'iterations. Cherche des
// crashs que ni le bot "raisonnable" ni la lecture du code ne trouveraient.
const fs=require('fs'),vm=require('vm');
const base=require(require('path').join(__dirname,'sandbox.js'));
const file='/home/user/trapeze/trapeze-stars-v2.html';
const html=fs.readFileSync(file,'utf8');
const code=html.match(/<script>([\s\S]*?)<\/script>/)[1];
const bridge=`
;globalThis.__m={
  get gs(){return gs;},
  KEY, pressAction, releaseAction, pressTrick, releaseTrick, togglePause,
  openSettings, closeSettings, openLevelSelect, closeLevelSelect,
  startRun, startAtLevel, toMenu, nextLevel, settingsRows,
  get settingsSel(){return settingsSel;}, set settingsSel(v){settingsSel=v;},
  get levelSelIdx(){return levelSelIdx;}, set levelSelIdx(v){levelSelIdx=v;},
  get SV(){return SV;}, hitZones, hitTest, step, frame:()=>frame,
};`;

const sb=base.makeSandbox(html);
vm.createContext(sb);
new vm.Script(code+bridge,{filename:file}).runInContext(sb,{timeout:20000});
const M=sb.__m;
if(!M){console.error('pont absent');process.exit(1);}

const KEYS=['ArrowUp','ArrowDown','ArrowLeft','ArrowRight',' ','Enter','Escape','p','s','l','m','a','d','q','x','f'];
function rnd(n){return Math.floor(Math.random()*n);}
function pick(a){return a[rnd(a.length)];}

let crashes=0, iterations=8000;
M.SV.unlocked=12; // ouvre tous les chemins possibles, y compris la selection de niveau

for(let i=0;i<iterations;i++){
  try{
    const roll=rnd(100);
    if(roll<35){
      // Appui clavier aleatoire
      const k=pick(KEYS);
      // Reproduit fidelement la logique du vrai gestionnaire keydown de la page,
      // via les memes fonctions exposees, pour rester fidele au vrai comportement.
      if(M.gs==='settings'){
        const rows=M.settingsRows();
        if(k==='ArrowUp')M.settingsSel=(M.settingsSel+rows.length-1)%rows.length;
        else if(k==='ArrowDown')M.settingsSel=(M.settingsSel+1)%rows.length;
        else if(k==='ArrowLeft')rows[M.settingsSel].left();
        else if(k==='ArrowRight'||k===' '||k==='Enter')rows[M.settingsSel].right();
        else if(k==='Escape')M.closeSettings();
      } else if(M.gs==='levelselect'){
        if(k==='ArrowLeft')M.levelSelIdx=Math.max(0,M.levelSelIdx-1);
        else if(k==='ArrowRight')M.levelSelIdx=Math.min(11,M.levelSelIdx+1);
        else if(k==='ArrowUp')M.levelSelIdx=Math.max(0,M.levelSelIdx-4);
        else if(k==='ArrowDown')M.levelSelIdx=Math.min(11,M.levelSelIdx+4);
        else if(k===' '||k==='Enter')M.startAtLevel(M.levelSelIdx);
        else if(k==='Escape')M.closeLevelSelect();
      } else {
        if(M.gs==='menu'){if(k==='s')M.openSettings();if(k==='l')M.openLevelSelect();}
        if(M.gs==='pause'&&k==='s')M.openSettings();
        if(k===' '||k==='ArrowUp'||k==='w'||k==='z')M.pressAction();
        if(k==='Shift'||k==='f'||k==='ArrowDown'||k==='x')M.pressTrick();
        if(k==='p')M.togglePause();
        if(k==='Escape'&&(M.gs==='play'||M.gs==='pause'))M.togglePause();
      }
    } else if(roll<55){
      // Relachement
      if(rnd(2))M.releaseAction();else M.releaseTrick();
    } else if(roll<70){
      // Tap ecran a une position aleatoire : consulte les zones comme le
      // vrai gestionnaire pointerdown, avec repli pause/pressAction.
      const px=rnd(1280), py=rnd(720);
      const fn=M.hitTest(px,py);
      if(fn)fn();
      else if(M.gs==='pause')M.togglePause();
      else if(M.gs!=='play'&&M.gs!=='menu'&&M.gs!=='settings'&&M.gs!=='levelselect')M.pressAction();
    } else if(roll<80){
      // Deplacement continu aleatoire
      M.KEY['arrowleft']=!!rnd(2);M.KEY['arrowright']=!!rnd(2);
    } else if(roll<90){
      // Avance la simulation de plusieurs pas d'un coup
      for(let s=0;s<rnd(30);s++)M.step();
    } else {
      // Actions rares : forcer un changement de niveau/etat brutal
      if(rnd(2))M.nextLevel();else M.toMenu();
    }
    // Toujours faire avancer la simulation d'un pas, quel que soit l'etat.
    M.step();
  }catch(e){
    crashes++;
    console.log('CRASH a l\'iteration '+i+' (gs avant='+M.gs+') : '+e.message);
    console.log(e.stack.split('\n').slice(0,5).join('\n'));
    if(crashes>=5)break;
  }
}
console.log('\n'+iterations+' iterations adversariales, '+crashes+' crash(s), etat final gs='+M.gs+', frame='+M.frame());
process.exit(crashes?1:0);
