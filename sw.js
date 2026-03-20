const CACHE_NAME = "akhil-music-v1";

const ASSETS = [
  "/",
  "/index.html",
  "/styles.css",
  "/app.js",
  "/manifest.json",
  "/images/icon-192.png",
  "/images/icon-512.png"
];

// install
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

// fetch
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});