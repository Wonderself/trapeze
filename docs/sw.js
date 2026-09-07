/* Trapeze Stars 3D — offline service worker (runtime cache-first for same-origin) */
const CACHE = 'trapeze3d-v2';

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png']).catch(() => {})).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  if (!e.request.url.startsWith(self.location.origin)) return; // let cross-origin (fonts) go to network
  e.respondWith(
    caches.match(e.request).then((hit) => hit || fetch(e.request).then((resp) => {
      if (resp && resp.status === 200) { const copy = resp.clone(); caches.open(CACHE).then((c) => c.put(e.request, copy)); }
      return resp;
    }).catch(() => caches.match('./index.html')))
  );
});
