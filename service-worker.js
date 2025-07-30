const CACHE_NAME = 'happyday-cache-v1';
const urlsToCache = [
  'https://choccojang.github.io/happyday',
  'https://choccojang.github.io/happyday/index.html',
  'https://choccojang.github.io/happyday/manifest.json',
  'https://choccojang.github.io/happyday/icons/icon-192.png',
  'https://choccojang.github.io/happyday/icons/icon-512.png'
];

// 설치 시 캐시
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// 요청 시 캐시에서 꺼내기
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
