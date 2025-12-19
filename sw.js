self.addEventListener('install', (e) => {
  console.log('Richard Auto App Instalada');
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});
