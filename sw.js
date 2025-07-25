const CACHE_NAME = "tsm-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/assets/css/main.css",
  "/manifest.json",
  "/icons/icon-192.png",
  "/icons/icon-512.png"
];

// Instala o Service Worker e armazena os arquivos em cache
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Intercepta requisições e responde com cache se estiver offline
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

