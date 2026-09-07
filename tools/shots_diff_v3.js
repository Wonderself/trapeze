// Comparaison d'images entre DEUX versions de Trapeze City.
//
//   node tools/shots_diff_v3.js <fichierA.html> <fichierB.html>
//
// Pourquoi cet outil existe. `shot_v3.js` produit vingt-huit captures et
// se termine par une phrase honnete : « il faut les OUVRIR ». En pratique
// on en ouvre trois ou quatre, celles qu'on soupconne, et on declare les
// autres verifiees. Ce n'est pas une verification, c'est un sondage.
//
// Regarder vingt-huit images dans l'absolu est de toute facon le mauvais
// exercice : l'oeil juge mal la beaute, mais il juge tres bien un ECART.
// On capture donc les MEMES scenes sur deux versions du jeu, on mesure la
// difference pixel par pixel, et on ne fait plus qu'une chose a la main :
// regarder les scenes qui ont bouge, en sachant a l'avance lesquelles
// devaient bouger. Une scene identique au millieme pres n'a pas besoin
// d'etre regardee — elle est PROUVEE inchangee, ce qui vaut mieux.
//
// Le decodage PNG passe par le navigateur deja lance (canvas +
// getImageData) : aucune bibliotheque d'images a installer, fidele a la
// regle de ce depot.
const path=require('path'), fs=require('fs'), {execFileSync}=require('child_process');
const {chromium}=require('playwright-core');
const ROOT=path.resolve(__dirname,'..');
const EXE=process.env.CHROME_EXE||'/opt/pw-browsers/chromium-1194/chrome-linux/chrome';

const A=process.argv[2], B=process.argv[3];
if(!A||!B){console.log('usage : node tools/shots_diff_v3.js <avant.html> <apres.html>');process.exit(2);}
const TMP=path.join(ROOT,'shots','_cmp');
const dirA=path.join(TMP,'a'), dirB=path.join(TMP,'b'), dirD=path.join(ROOT,'shots','diff');

// Seuil : au-dessous, l'ecart est du bruit de rasterisation (antialiasing,
// une particule de plus ou de moins). Au-dessus, quelque chose a change
// dans la scene et merite un oeil humain.
const SEUIL=0.20;   // % de canal moyen

function capture(dir,file){
  fs.rmSync(dir,{recursive:true,force:true});
  console.log('capture de '+path.basename(file)+' ...');
  execFileSync(process.execPath,[path.join(__dirname,'shot_v3.js'),dir,file],
    {stdio:['ignore','ignore','inherit'],cwd:ROOT});
}

(async()=>{
  capture(dirA,path.resolve(A));
  capture(dirB,path.resolve(B));
  fs.mkdirSync(dirD,{recursive:true});

// `13-enchainement` est exclu : ce n'est pas une scene posee, c'est la
// traversee complete jouee AU CLAVIER, dont les evenements partent d'une
// boucle d'animation dans la page. Elle depend donc du temps d'horloge par
// construction, et c'est tres bien — elle prouve un COMPORTEMENT (la
// traversee va-t-elle au bout ?), pas une image. La comparer pixel a pixel
// n'aurait aucun sens ; shot_v3.js sort deja en echec si elle echoue.
const HORS_COMPARAISON=['13-enchainement.png'];
  const noms=fs.readdirSync(dirA).filter(f=>f.endsWith('.png'))
    .filter(f=>!HORS_COMPARAISON.includes(f))
    .filter(f=>fs.existsSync(path.join(dirB,f))).sort();

  const browser=await chromium.launch({executablePath:EXE,args:['--no-sandbox','--disable-dev-shm-usage']});
  const ctx=await browser.newContext();
  const page=await ctx.newPage();
  await page.goto('about:blank');

  const lignes=[];
  for(const n of noms){
    const a='data:image/png;base64,'+fs.readFileSync(path.join(dirA,n)).toString('base64');
    const b='data:image/png;base64,'+fs.readFileSync(path.join(dirB,n)).toString('base64');
    const r=await page.evaluate(async ([sa,sb])=>{
      const load=src=>new Promise((res,rej)=>{const i=new Image();i.onload=()=>res(i);i.onerror=rej;i.src=src;});
      const ia=await load(sa), ib=await load(sb);
      if(ia.width!==ib.width||ia.height!==ib.height)
        return {taille:false,w:ia.width,h:ia.height,w2:ib.width,h2:ib.height};
      const W=ia.width,H=ia.height;
      const cv=document.createElement('canvas');cv.width=W;cv.height=H;
      const cx=cv.getContext('2d',{willReadFrequently:true});
      cx.drawImage(ia,0,0);const da=cx.getImageData(0,0,W,H).data;
      cx.clearRect(0,0,W,H);cx.drawImage(ib,0,0);const db=cx.getImageData(0,0,W,H).data;
      let somme=0, pires=0, maxi=0;
      for(let i=0;i<da.length;i+=4){
        const d=(Math.abs(da[i]-db[i])+Math.abs(da[i+1]-db[i+1])+Math.abs(da[i+2]-db[i+2]))/3;
        somme+=d; if(d>maxi)maxi=d; if(d>24)pires++;
      }
      const n=da.length/4;
      return {taille:true,moy:somme/n/255*100,max:maxi/255*100,pct:pires/n*100,W,H};
    },[a,b]);
    if(!r.taille){
      console.log('  '+n.padEnd(24)+' TAILLES DIFFERENTES '+r.w+'x'+r.h+' vs '+r.w2+'x'+r.h2);
      lignes.push({n,moy:100});continue;
    }
    lignes.push({n,...r});
  }

  // Composites cote a cote pour les scenes qui ont bouge.
  const bouge=lignes.filter(l=>l.moy>=SEUIL);
  for(const l of bouge){
    const a='data:image/png;base64,'+fs.readFileSync(path.join(dirA,l.n)).toString('base64');
    const b='data:image/png;base64,'+fs.readFileSync(path.join(dirB,l.n)).toString('base64');
    const png=await page.evaluate(async ([sa,sb])=>{
      const load=src=>new Promise((res,rej)=>{const i=new Image();i.onload=()=>res(i);i.onerror=rej;i.src=src;});
      const ia=await load(sa), ib=await load(sb);
      const W=ia.width,H=ia.height;
      const cv=document.createElement('canvas');cv.width=W;cv.height=H*2+8;
      const cx=cv.getContext('2d');
      cx.fillStyle='#FF2E88';cx.fillRect(0,0,cv.width,cv.height);
      cx.drawImage(ia,0,0);cx.drawImage(ib,0,H+8);
      cx.fillStyle='rgba(0,0,0,0.72)';cx.fillRect(0,0,150,26);cx.fillRect(0,H+8,150,26);
      cx.fillStyle='#fff';cx.font='bold 15px sans-serif';
      cx.fillText('AVANT',10,19);cx.fillText('APRES',10,H+8+19);
      return cv.toDataURL('image/png');
    },[a,b]);
    fs.writeFileSync(path.join(dirD,l.n),Buffer.from(png.split(',')[1],'base64'));
  }

  await ctx.close();await browser.close();

  console.log('\nEcart moyen par scene (%% de canal) — seuil '+SEUIL+' %%');
  for(const l of lignes.sort((x,y)=>y.moy-x.moy)){
    const flag=l.moy>=SEUIL?'  <-- A REGARDER':'';
    console.log('  '+l.n.padEnd(26)+' moy '+l.moy.toFixed(3).padStart(7)
      +'   max '+(l.max||0).toFixed(1).padStart(5)
      +'   pixels nets '+(l.pct||0).toFixed(2).padStart(6)+' %'+flag);
  }
  console.log('\n'+bouge.length+' scene(s) sur '+lignes.length+' ont bouge.');
  if(bouge.length)console.log('Composites avant/apres dans shots/diff/ — CELLES-LA sont a ouvrir.');
  else console.log('Aucune : les '+lignes.length+' scenes sont prouvees identiques.');
  fs.rmSync(TMP,{recursive:true,force:true});
})();
