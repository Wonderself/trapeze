// Runs from the GitHub-hosted deploy runner, outside the developer's computer.
// It proves that the public Pages URL serves the release, not just a local build.
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const base = new URL(process.argv[2] || 'https://wonderself.github.io/trapeze/');
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const routes = new Map([
  ['', 'index.html'],
  ['2d/', '2d/index.html'],
  ['3d/', '3d/index.html'],
  ['3d/showcase.html', '3d/showcase.html'],
  ['trapeze-stars-v1.html', 'trapeze-stars-v1.html'],
  ['trapeze-stars-v2.html', 'trapeze-stars-v2.html'],
  ['trapeze-city-v3.html', 'trapeze-city-v3.html'],
]);
const entryHtml = await readFile(path.join(root, '3d/index.html'), 'utf8');
const entryScript = entryHtml.match(/src="\.\/assets\/([^"\s]+\.js)"/)?.[1];
if (!entryScript) throw new Error('3D entry bundle is missing from 3d/index.html');
const assets = new Map([
  [`3d/assets/${entryScript}`, `3d/assets/${entryScript}`],
  ['3d/sw.js', '3d/sw.js'],
  ['2d/sw.js', '2d/sw.js'],
]);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const sha = body => createHash('sha256').update(body).digest('hex');

async function check() {
  const failures = [];
  await Promise.all([...routes].map(async ([route, source]) => {
    const url = new URL(route, base);
    url.searchParams.set('release', process.env.GITHUB_SHA || 'manual');
    try {
      const response = await fetch(url, { signal: AbortSignal.timeout(8000), cache: 'no-store' });
      const body = await response.text();
      const expected = await readFile(path.join(root, source), 'utf8');
      if (response.status !== 200) failures.push(`${url.pathname}: HTTP ${response.status}`);
      if (sha(body) !== sha(expected)) failures.push(`${url.pathname}: content does not match checkout ${source}`);
      if (!route && !body.includes('Choose your game')) {
        failures.push(`${url.pathname}: new English selector not visible`);
      }
      if (route && route !== '3d/showcase.html' && !body.includes('All versions')) {
        failures.push(`${url.pathname}: English return link not visible`);
      }
    } catch (error) {
      failures.push(`${url.pathname}: ${error.message}`);
    }
  }));
  await Promise.all([...assets].map(async ([route, source]) => {
    const url = new URL(route, base);
    url.searchParams.set('release', process.env.GITHUB_SHA || 'manual');
    try {
      const response = await fetch(url, { signal: AbortSignal.timeout(8000), cache: 'no-store' });
      const body = Buffer.from(await response.arrayBuffer());
      const expected = await readFile(path.join(root, source));
      if (response.status !== 200 || sha(body) !== sha(expected)) {
        failures.push(`${url.pathname}: asset missing or content differs from checkout ${source}`);
      }
    } catch (error) {
      failures.push(`${url.pathname}: ${error.message}`);
    }
  }));
  const missing = new URL('definitely-missing', base);
  missing.searchParams.set('release', process.env.GITHUB_SHA || 'manual');
  try {
    const response = await fetch(missing, { signal: AbortSignal.timeout(8000), cache: 'no-store' });
    const body = await response.text();
    if (response.status !== 404 || sha(body) !== sha(await readFile(path.join(root, '404.html'), 'utf8'))) {
      failures.push(`${missing.pathname}: custom English 404 not served`);
    }
  } catch (error) {
    failures.push(`${missing.pathname}: ${error.message}`);
  }
  return failures;
}

let failures = [];
for (let attempt = 1; attempt <= 8; attempt++) {
  failures = await check();
  if (!failures.length) {
    console.log(JSON.stringify({ status: 'PASS', origin: base.origin, routes: routes.size, assets: assets.size, exactContent: true, custom404: true, attempt }));
    process.exit(0);
  }
  console.error(`Public smoke attempt ${attempt}/8: ${failures.join('; ')}`);
  if (attempt < 8) await sleep(10000);
}
process.exit(1);
