/* Trapeze Stars 3D — offline service worker. */
const CACHE_PREFIX = 'trapeze-3d-';
const LEGACY_CACHES = new Set(['trapeze3d-v2']);
const BUILD_ID = new URL(self.location.href).searchParams.get('v') || 'dev';
const CACHE = `${CACHE_PREFIX}${BUILD_ID}`;
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './favicon.svg'
];

async function precache() {
  const cache = await caches.open(CACHE);
  await cache.addAll(ASSETS);

  // Vite gives the application bundle a content hash. Cache that exact file
  // before activating the new worker; otherwise activation could delete the
  // previous cache while the fresh HTML points at an asset not yet available
  // offline.
  const indexUrl = new URL('./index.html', self.location.href).href;
  const response = await fetch(indexUrl, { cache: 'reload' });
  if (!response.ok) throw new Error(`Unable to precache ${indexUrl}: ${response.status}`);
  await cache.put(indexUrl, response.clone());
  const html = await response.text();
  const assetPaths = [...html.matchAll(/(?:src|href)=["']([^"']*assets\/[^"'?#]+\.(?:js|css))(?:[?#][^"']*)?["']/g)]
    .map(match => new URL(match[1], indexUrl).href);
  await cache.addAll([...new Set(assetPaths)]);
}

self.addEventListener('install', event => {
  event.waitUntil(precache().then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key => (key.startsWith(CACHE_PREFIX) && key !== CACHE) || LEGACY_CACHES.has(key))
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

async function remember(request, response) {
  if (response && response.ok && new URL(request.url).origin === self.location.origin) {
    const cache = await caches.open(CACHE);
    await cache.put(request, response.clone());
  }
  return response;
}

async function networkFirst(request) {
  try {
    return await remember(request, await fetch(request));
  } catch {
    return (await caches.match(request)) || caches.match('./index.html');
  }
}

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  return remember(request, await fetch(request));
}

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  if (event.request.mode === 'navigate' || event.request.destination === 'document') {
    event.respondWith(networkFirst(event.request));
    return;
  }
  if (new URL(event.request.url).origin === self.location.origin) {
    event.respondWith(cacheFirst(event.request));
  }
});
