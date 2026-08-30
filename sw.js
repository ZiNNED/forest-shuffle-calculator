// Forest Shuffle Calculator — Service Worker
const CACHE_VERSION = 'v178';
const CACHE_NAME = 'forest-calc-' + CACHE_VERSION;

const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/app.js?v=178',
  '/cards-forest.js?v=178',
  '/cards-dartmoor.js?v=178',
  '/style.css?v=178',
  '/manifest.json',
  '/assets/icon-192.png',
  '/assets/icon-512.png',
  '/_headers',
  '/assets/symbols/alpine.png',
  '/assets/symbols/woodlandEdge.png',
];

// Install: pre-cache all static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(PRECACHE_URLS);
    }).then(() => self.skipWaiting())
  );
});

// Activate: clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(k => k !== CACHE_NAME && k.startsWith('forest-calc-'))
          .map(k => caches.delete(k))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: cache-first, fallback to network
self.addEventListener('fetch', event => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        // Cache successful responses for future offline use
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        // Offline fallback for non-cached requests
        return new Response('Offline', { status: 503 });
      });
    })
  );
});
