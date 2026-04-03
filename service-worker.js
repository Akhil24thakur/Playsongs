const CACHE_NAME = "akhil-music-v1";

const urlsToCache = [

  "/",
  "/index.html",
  "/style.css",
  "/script.js",
  "/manifest.json",

  "/icons/icon-192.png",
  "/icons/icon-512.png",

  "/images/ak01.png",

];


/* INSTALL */

self.addEventListener("install", event => {

  event.waitUntil(

    caches.open(CACHE_NAME)

      .then(cache => cache.addAll(urlsToCache))

  );

});


/* FETCH */

self.addEventListener("fetch", event => {

  event.respondWith(

    caches.match(event.request)

      .then(response => {

        return response || fetch(event.request);

      })

  );

});


/* UPDATE CACHE */

self.addEventListener("activate", event => {

  event.waitUntil(

    caches.keys().then(cacheNames => {

      return Promise.all(

        cacheNames.map(cache => {

          if (cache !== CACHE_NAME){

            return caches.delete(cache);

          }

        })

      );

    })

  );

});