/* ═══════════════════════════════════════════════════════════
   SERVICE WORKER — Akhil Music PWA
   ─────────────────────────────────────────────────────────
   Cache strategy:
   • App shell (HTML/CSS/JS)  → Cache First
   • Songs (.mp3)             → Network First  (large files)
   • Cover images (/images/)  → Network ONLY   (never cached)
     ↑ Critical: Android fetches artwork via ?t= URLs.
       If SW caches by path, all songs show the first cover.
═══════════════════════════════════════════════════════════ */

const CACHE_NAME    = 'akhil-music-v1';
const SHELL_ASSETS  = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json'
];

/* ── Install: pre-cache app shell ── */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(SHELL_ASSETS))
      .then(() => self.skipWaiting())
  );
});

/* ── Activate: delete old caches ── */
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

/* ── Fetch ── */
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  /* ── 1. Cover images — NEVER cache ──────────────────────
     Android Media Session fetches artwork via the ?t= URL.
     If the SW intercepts and caches under the bare path,
     every subsequent artwork request returns the FIRST
     song's image no matter which track is playing.
     Fix: always go to the network for /images/ requests
     and never store the response in any cache.          */
  if (url.pathname.startsWith('/images/')) {
    event.respondWith(
      fetch(event.request, { cache: 'no-store' })
        .catch(() => Response.error())
    );
    return;
  }

  /* ── 2. Songs (.mp3) — Network First ────────────────────
     Try network so the user always gets the actual file.
     Fall back to cache if offline.                      */
  if (url.pathname.endsWith('.mp3')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  /* ── 3. App shell (HTML / CSS / JS) — Cache First ───────
     Serve from cache instantly; update cache in background. */
  event.respondWith(
    caches.match(event.request).then(cached => {
      const networkFetch = fetch(event.request).then(response => {
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      });
      return cached || networkFetch;
    })
  );
});