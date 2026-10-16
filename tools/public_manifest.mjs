import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
export const sha256 = body => createHash('sha256').update(body).digest('hex');
/** Hash the actual build artifact, never the tracked legacy /3d directory. */
export async function buildPublicManifest(root, commit = process.env.GITHUB_SHA || 'manual') {
  const html = await readFile(path.join(root, '3d/index.html'), 'utf8');
  const bundle = html.match(/src="\.\/assets\/([^"\s/]+\.js)"/)?.[1];
  if (!bundle) throw new Error('3D entry bundle is missing from built artifact');
  const routes = ['', '2d/', '3d/', '3d/showcase.html', 'trapeze-stars-v1.html', 'trapeze-stars-v2.html', 'trapeze-city-v3.html'];
  const assets = ['assets/og-cover-five.png', `3d/assets/${bundle}`, '3d/sw.js', '2d/sw.js'];
  const files = [...routes.map(route => ({ route, file: !route ? 'index.html' : route.endsWith('/') ? `${route}index.html` : route, status: 200 })),
    ...assets.map(route => ({ route, file: route, status: 200 })), { route: 'definitely-missing', file: '404.html', status: 404 }];
  return { version: 1, commit, routes: routes.length, assets: assets.length, files: await Promise.all(files.map(async row => ({route: row.route, status: row.status, sha256: sha256(await readFile(path.join(root, row.file)))}))) };
}
export function parsePublicManifest(value) {
  const m = typeof value === 'string' ? JSON.parse(value) : value;
  if (m?.version !== 1 || typeof m.commit !== 'string' || !Array.isArray(m.files) || m.files.length !== 12 || m.routes !== 7 || m.assets !== 4 ||
      new Set(m.files.map(r=>r.route)).size !== 12 || m.files.some(r=>typeof r.route !== 'string' || r.route.startsWith('/') || r.route.includes('..') || r.route.includes(':') || ![200,404].includes(r.status) || !/^[a-f0-9]{64}$/.test(r.sha256)) ||
      !m.files.some(r=>r.route==='' && r.status===200) || !m.files.some(r=>r.route==='definitely-missing' && r.status===404)) throw new Error('Invalid built-site public manifest');
  return m;
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  console.log(JSON.stringify(await buildPublicManifest(path.resolve(process.argv[2] || '_site'))));
}
