self.addEventListener('install', event => {
  console.log('Service Worker instalado');
  event.waitUntil(
    caches.open('app-cache').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './icon-192x192.png',
        './icon-512x512.png',
        'https://www.dropbox.com/scl/fi/hprvrnlh2w6af999wxmnh/Nothing-gonna-stop-us-now.mp3?rlkey=wgkatjgdnau9sgvycwvf0azfe&st=ojw1i630&dl=1'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

