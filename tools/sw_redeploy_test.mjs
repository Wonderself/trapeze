import { cp, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { readdirSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { launchChromium, startStaticServer } from './browser_helpers.mjs';

const source = path.resolve(process.argv[2] || '_site');
const temporary = await mkdtemp(path.join(os.tmpdir(), 'trapeze-sw-'));
await cp(source, temporary, { recursive: true });
const server = await startStaticServer(temporary);
const browser = await launchChromium({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const failures = [];

try {
  const context = await browser.newContext({ viewport: { width: 960, height: 560 } });
  const page = await context.newPage();
  let currentGame = '2d';
  page.on('pageerror', error => failures.push(`${currentGame} pageerror: ${error.message}`));
  page.on('console', message => { if (message.type() === 'error') failures.push(`${currentGame} console: ${message.text()}`); });

  const legacyCaches = ['trapeze-stars-v2', 'trapeze3d-v2'];
  await page.goto(`${server.origin}/`, { waitUntil: 'domcontentloaded' });
  await page.evaluate(async names => {
    const paths = ['/2d/index.html', '/3d/index.html'];
    await Promise.all(names.map(async (name, index) => {
      const cache = await caches.open(name);
      await cache.put(paths[index], new Response(`stale-${name}`, { headers: { 'Content-Type': 'text/html' } }));
    }));
  }, legacyCaches);

  await page.goto(`${server.origin}/2d/`, { waitUntil: 'domcontentloaded' });
  await page.evaluate(() => navigator.serviceWorker.ready);
  currentGame = '3d';
  await page.goto(`${server.origin}/3d/?lowfx`, { waitUntil: 'domcontentloaded', timeout: 60_000 });
  await page.waitForFunction(() => Boolean(window.__game), null, { timeout: 30_000 });
  await page.evaluate(() => navigator.serviceWorker.ready);

  const initialCaches = await page.evaluate(() => caches.keys());
  if (legacyCaches.some(name => initialCaches.includes(name))) {
    failures.push(`legacy cache migration failed: ${initialCaches.join(', ')}`);
  }
  if (!initialCaches.some(name => name.startsWith('trapeze-2d-')) || !initialCaches.some(name => name.startsWith('trapeze-3d-'))) {
    failures.push(`cache namespaces did not coexist: ${initialCaches.join(', ')}`);
  }

  const twoDIndex = path.join(temporary, '2d', 'index.html');
  const twoDHtml = await readFile(twoDIndex, 'utf8');
  const nextTwoDId = '20260913-redeploy-test';
  await writeFile(twoDIndex, twoDHtml
    .replace(/const PWA_VERSION='[^']+';/, `const PWA_VERSION='${nextTwoDId}';`)
    .replace('</body>', '<div id="redeploy-marker" hidden>fresh-2d</div></body>'));

  const threeDDirectory = path.join(temporary, '3d');
  const assetsDirectory = path.join(threeDDirectory, 'assets');
  const oldAsset = readdirSync(assetsDirectory).find(name => /^index-.*\.js$/.test(name));
  if (!oldAsset) throw new Error('3D hashed JavaScript asset not found');
  const newAsset = 'index-redeploy-test.js';
  const oldThreeDId = initialCaches.find(name => name.startsWith('trapeze-3d-'))?.slice('trapeze-3d-'.length);
  const nextThreeDId = 'redeploytest';
  const oldAssetPath = path.join(assetsDirectory, oldAsset);
  const assetSource = await readFile(oldAssetPath, 'utf8');
  if (!oldThreeDId || !assetSource.includes(oldThreeDId)) {
    throw new Error(`3D build id ${oldThreeDId || '(missing)'} not found in ${oldAsset}`);
  }
  await writeFile(path.join(assetsDirectory, newAsset), assetSource.replaceAll(oldThreeDId, nextThreeDId));
  await rm(oldAssetPath);
  const threeDIndex = path.join(threeDDirectory, 'index.html');
  const threeDHtml = await readFile(threeDIndex, 'utf8');
  await writeFile(threeDIndex, threeDHtml.replace(`assets/${oldAsset}`, `assets/${newAsset}`));

  currentGame = '2d';
  await page.goto(`${server.origin}/2d/`, { waitUntil: 'domcontentloaded' });
  if (!(await page.locator('#redeploy-marker').count())) failures.push('2D online reload served stale HTML');
  await page.waitForFunction(
    id => caches.keys().then(keys => keys.includes(`trapeze-2d-${id}`)),
    nextTwoDId,
    { timeout: 30_000 },
  );
  await context.setOffline(true);
  await page.reload({ waitUntil: 'domcontentloaded' });
  if (!(await page.locator('#redeploy-marker').count())) failures.push('2D offline reload lost the latest HTML');
  await context.setOffline(false);

  currentGame = '3d';
  await page.goto(`${server.origin}/3d/?lowfx`, { waitUntil: 'domcontentloaded', timeout: 60_000 });
  await page.waitForFunction(() => Boolean(window.__game), null, { timeout: 30_000 });
  await page.waitForFunction(
    id => caches.keys().then(keys => keys.includes(`trapeze-3d-${id}`)),
    nextThreeDId,
    { timeout: 30_000 },
  );
  const loadedAsset = await page.evaluate(() => [...document.scripts].map(script => script.src).find(src => src.includes('/assets/index-')) || '');
  if (!loadedAsset.endsWith(newAsset)) failures.push(`3D online reload did not use new hashed asset: ${loadedAsset}`);
  await context.setOffline(true);
  await page.reload({ waitUntil: 'domcontentloaded', timeout: 60_000 });
  await page.waitForFunction(() => Boolean(window.__game), null, { timeout: 30_000 });
  if (!(await page.evaluate(() => Boolean(window.__game)))) failures.push('3D offline reload did not boot');
  await context.setOffline(false);

  const finalCaches = await page.evaluate(() => caches.keys());
  if (!finalCaches.includes(`trapeze-2d-${nextTwoDId}`) || !finalCaches.includes(`trapeze-3d-${nextThreeDId}`)) {
    failures.push(`one service worker deleted the other scope cache: ${finalCaches.join(', ')}`);
  }
  if (finalCaches.some(name => initialCaches.includes(name))) {
    failures.push(`stale cache survived a true build-id change: ${finalCaches.join(', ')}`);
  }
  await context.close();
  console.log(JSON.stringify({ legacyCaches, initialCaches, finalCaches, renamedAsset: [oldAsset, newAsset], onlineAndOffline: ['2d', '3d'] }, null, 2));
} finally {
  await browser.close();
  await server.close();
  await rm(temporary, { recursive: true, force: true });
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
