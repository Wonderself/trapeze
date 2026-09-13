import { createRequire } from 'node:module';
import { createServer } from 'node:http';
import { existsSync, readdirSync, statSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright-core');

export async function launchChromium(extra = {}) {
  const cacheRoot = process.platform === 'darwin'
    ? path.join(os.homedir(), 'Library', 'Caches', 'ms-playwright')
    : path.join(os.homedir(), '.cache', 'ms-playwright');
  const cachedHeadlessShells = existsSync(cacheRoot)
    ? readdirSync(cacheRoot)
        .filter(name => name.startsWith('chromium_headless_shell-'))
        .sort().reverse()
        .map(name => path.join(
          cacheRoot,
          name,
          process.platform === 'darwin' ? 'chrome-mac' : 'chrome-linux',
          'headless_shell'
        ))
    : [];
  const knownExecutables = [
    process.env.CHROME_EXE,
    ...cachedHeadlessShells,
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    '/opt/google/chrome/chrome',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
  ].filter(Boolean).filter(existsSync);
  const attempts = [
    ...knownExecutables.map(executablePath => () => chromium.launch({ executablePath, ...extra })),
    () => chromium.launch({ ...extra }),
    () => chromium.launch({ channel: 'chrome', ...extra }),
  ];
  const errors = [];
  for (const attempt of attempts) {
    try { return await attempt(); } catch (error) { errors.push(error.message); }
  }
  throw new Error(`No usable Chromium installation found:\n${errors.join('\n')}`);
}

const TYPES = new Map([
  ['.html', 'text/html; charset=utf-8'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
  ['.xml', 'application/xml; charset=utf-8'],
  ['.txt', 'text/plain; charset=utf-8'],
  ['.css', 'text/css; charset=utf-8'],
  ['.svg', 'image/svg+xml'],
  ['.png', 'image/png'],
  ['.jpg', 'image/jpeg'],
  ['.jpeg', 'image/jpeg'],
  ['.webmanifest', 'application/manifest+json'],
]);

export async function startStaticServer(rootDirectory) {
  const root = path.resolve(rootDirectory);
  const notFound = path.join(root, '404.html');
  const server = createServer(async (request, response) => {
    try {
      const parsed = new URL(request.url || '/', 'http://localhost');
      const decoded = decodeURIComponent(parsed.pathname);
      let candidate = path.resolve(root, `.${decoded}`);
      if (candidate !== root && !candidate.startsWith(`${root}${path.sep}`)) {
        response.writeHead(400).end('Bad request');
        return;
      }
      if (existsSync(candidate) && statSync(candidate).isDirectory()) candidate = path.join(candidate, 'index.html');
      const found = existsSync(candidate) && statSync(candidate).isFile();
      const file = found ? candidate : notFound;
      const body = await readFile(file);
      response.writeHead(found ? 200 : 404, {
        'content-type': TYPES.get(path.extname(file).toLowerCase()) || 'application/octet-stream',
        'cache-control': path.extname(file) === '.html' ? 'no-cache' : 'public, max-age=60',
      });
      response.end(request.method === 'HEAD' ? undefined : body);
    } catch (error) {
      response.writeHead(500, { 'content-type': 'text/plain; charset=utf-8' });
      response.end(error.message);
    }
  });
  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', resolve);
  });
  const address = server.address();
  return {
    origin: `http://127.0.0.1:${address.port}`,
    close: () => new Promise(resolve => server.close(resolve)),
  };
}
