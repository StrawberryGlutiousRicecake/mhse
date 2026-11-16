// 설치 지원용 v2026-11-16.1: 캐시 없이 모든 요청을 네트워크로 전달
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request).catch((error) => {
    // Preserve the original network failure; no cache or offline fallback.
    throw error;
  }));
});
