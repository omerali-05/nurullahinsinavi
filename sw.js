const CACHE_NAME = 'nurullah-sinavi-v4';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './favicon.png',
  './apple-touch-icon.png',
  './icon-192.png',
  './icon-512.png',
  'https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.1/mqttws31.min.js',
  'https://fonts.googleapis.com/css2?family=VT323&display=swap'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS).catch(() => {});
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;

  const url = new URL(e.request.url);
  const hasInviteParam = url.searchParams.has('oda') || url.searchParams.has('room') || url.searchParams.has('code') || url.searchParams.has('kod');
  const isHtml = e.request.mode === 'navigate' || url.pathname.endsWith('.html') || url.pathname === '/' || (!url.pathname.includes('.') && url.origin === self.location.origin);

  if (isHtml) {
    // HTML / Sayfalar için: NETWORK-FIRST (Davet linklerini asla önbelleğe gömmeden taze aç)
    e.respondWith(
      fetch(e.request)
        .then((res) => {
          if (res && res.status === 200 && !hasInviteParam) {
            const clone = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
          }
          return res;
        })
        .catch(() => {
          return caches.match(e.request, { ignoreSearch: true }).then((cached) => {
            return cached || caches.match('./index.html') || caches.match('./');
          });
        })
    );
  } else {
    // Resim ve statik dosyalar için: CACHE-FIRST (Hızlı açılış)
    e.respondWith(
      caches.match(e.request).then((cached) => {
        if (cached) return cached;
        return fetch(e.request).then((res) => {
          if (res && res.status === 200 && (e.request.url.startsWith('http') || e.request.url.startsWith('https'))) {
            const clone = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
          }
          return res;
        });
      })
    );
  }
});
