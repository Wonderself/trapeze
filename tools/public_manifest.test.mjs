import {test} from 'node:test';import assert from 'node:assert/strict';import {mkdtemp,writeFile,mkdir,rm} from 'node:fs/promises';import {tmpdir} from 'node:os';import path from 'node:path';
import {buildPublicManifest,parsePublicManifest,sha256} from './public_manifest.mjs';import {checkPublicSite} from './public_smoke.mjs';
test('public verification follows newly built bundle, not stale tracked 3d assets',async()=>{
 const dir=await mkdtemp(path.join(tmpdir(),'trapeze-artifact-'));try{
  const files=['index.html','2d/index.html','3d/index.html','3d/showcase.html','trapeze-stars-v1.html','trapeze-stars-v2.html','trapeze-city-v3.html','assets/og-cover-five.png','3d/assets/new-build.js','3d/sw.js','2d/sw.js','404.html'];
  const contents=new Map();for(const file of files){await mkdir(path.dirname(path.join(dir,file)),{recursive:true});const body=file==='3d/index.html'?'<script src="./assets/new-build.js"></script>':`synthetic ${file}`;await writeFile(path.join(dir,file),body);contents.set(file,body);}
  const manifest=parsePublicManifest(await buildPublicManifest(dir,'candidate-sha'));assert(manifest.files.some(r=>r.route==='3d/assets/new-build.js'));
  const fetchImpl=async url=>{const route=new URL(url).pathname.replace('/trapeze/','');const file=route==='definitely-missing'?'404.html':!route?'index.html':route.endsWith('/')?route+'index.html':route;return new Response(contents.get(file),{status:route==='definitely-missing'?404:200});};
  assert.deepEqual(await checkPublicSite(new URL('https://example.test/trapeze/'),manifest,fetchImpl),[]);
  contents.set('3d/assets/new-build.js','stale bundle');assert.equal((await checkPublicSite(new URL('https://example.test/trapeze/'),manifest,fetchImpl)).length,1);
  contents.set('404.html','stale 404');assert.equal((await checkPublicSite(new URL('https://example.test/trapeze/'),manifest,fetchImpl)).length,2);
 }finally{await rm(dir,{recursive:true,force:true});}
});
test('malformed and foreign-path manifests fail closed',()=>{assert.throws(()=>parsePublicManifest({version:2}));assert.throws(()=>parsePublicManifest({version:1,commit:'x',routes:7,assets:4,files:Array.from({length:12},(_,i)=>({route:i?'../foreign'+i:'',status:200,sha256:sha256('x')}))}));});
