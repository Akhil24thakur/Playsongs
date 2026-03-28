const CACHE_NAME = "akhil-music-v3";

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
  self.skipWaiting();

  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
  );
});

// activate
self.addEventListener("activate", (e) => {

  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );

});

// fetch
self.addEventListener("fetch", (e) => {

  e.respondWith(

    caches.match(e.request)
      .then(res => res || fetch(e.request))

  );

});