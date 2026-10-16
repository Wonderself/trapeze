// Runs on the deploy runner; compares public bytes to the verify job's actual artifact.
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildPublicManifest, parsePublicManifest, sha256 } from './public_manifest.mjs';
export async function checkPublicSite(base, manifest, fetchImpl = fetch) {
  return (await Promise.all(manifest.files.map(async row => {
    const url = new URL(row.route, base); url.searchParams.set('release', manifest.commit);
    try {
      const response = await fetchImpl(url, { signal: AbortSignal.timeout(8000), cache: 'no-store' });
      const body = Buffer.from(await response.arrayBuffer());
      return response.status === row.status && sha256(body) === row.sha256 ? null : `${url.pathname}: HTTP/content differs from built artifact ${manifest.commit}`;
    } catch(error) { return `${url.pathname}: ${error.message}`; }
  }))).filter(Boolean);
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const base = new URL(process.argv[2] || 'https://wonderself.github.io/trapeze/');
  const expectedCommit = process.env.GITHUB_SHA;
  const manifest = parsePublicManifest(process.env.EXPECTED_SITE_MANIFEST || await buildPublicManifest(path.resolve(process.argv[3] || '_site')));
  if (expectedCommit && manifest.commit !== expectedCommit) throw new Error('Artifact manifest belongs to another commit');
  let failures = [];
  for(let attempt=1;attempt<=8;attempt++) {
    failures=await checkPublicSite(base,manifest);
    if(!failures.length) { console.log(JSON.stringify({status:'PASS',commit:manifest.commit,origin:base.origin,routes:manifest.routes,assets:manifest.assets,exactContent:true,custom404:true,attempt}));process.exit(0); }
    console.error(`Public smoke attempt ${attempt}/8: ${failures.join('; ')}`);
    if(attempt<8) await new Promise(resolve=>setTimeout(resolve,10000));
  }
  process.exit(1);
}
