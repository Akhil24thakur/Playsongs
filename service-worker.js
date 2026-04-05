/* ═══════════════════════════════════════════════
   AKHIL MUSIC — Service Worker  (sw.js)
   Place in ROOT folder next to index.html
═══════════════════════════════════════════════ */

const CACHE_NAME  = 'akhil-v1';
const AUDIO_CACHE = 'akhil-audio-v1';

const SHELL = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json',
  './images/icon.png',
  './images/ak01.png',
];

/* ── Install: pre-cache shell ── */
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(c => Promise.allSettled(SHELL.map(u => c.add(u).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

/* ── Activate: clean old caches ── */
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE_NAME && k !== AUDIO_CACHE)
            .map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

/* ── Fetch strategy ── */
self.addEventListener('fetch', e => {
  const { request } = e;
  const url = new URL(request.url);

  /* Audio — cache on first play, serve from cache after */
  if (url.pathname.startsWith('/songs/') || request.destination === 'audio') {
    e.respondWith(
      caches.open(AUDIO_CACHE).then(async cache => {
        const cached = await cache.match(request);
        if (cached) return cached;
        try {
          const res = await fetch(request);
          if (res && res.status === 200) cache.put(request, res.clone());
          return res;
        } catch {
          return new Response('Offline', { status: 503 });
        }
      })
    );
    return;
  }

  /* Images — cache first */
  if (request.destination === 'image') {
    e.respondWith(
      caches.match(request).then(cached => {
        if (cached) return cached;
        return fetch(request).then(res => {
          if (res && res.status === 200) {
            caches.open(CACHE_NAME).then(c => c.put(request, res.clone()));
          }
          return res;
        }).catch(() => new Response('', { status: 404 }));
      })
    );
    return;
  }

  /* Fonts (Google) — stale-while-revalidate */
  if (url.origin === 'https://fonts.googleapis.com' || url.origin === 'https://fonts.gstatic.com') {
    e.respondWith(
      caches.open(CACHE_NAME).then(cache =>
        cache.match(request).then(cached => {
          const fresh = fetch(request).then(res => { cache.put(request, res.clone()); return res; });
          return cached || fresh;
        })
      )
    );
    return;
  }

  /* HTML / JS / CSS — network first, cache fallback */
  if (['document','script','style'].includes(request.destination)) {
    e.respondWith(
      fetch(request)
        .then(res => {
          if (res && res.status === 200) {
            caches.open(CACHE_NAME).then(c => c.put(request, res.clone()));
          }
          return res;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  /* Everything else */
  e.respondWith(fetch(request).catch(() => caches.match(request)));
});