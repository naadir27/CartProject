var cacheName = 'spaces-v1';
var cacheFiles = [
    'index.html',
    'spaces.webmanifest',
    'images/math.png',
    'images/icon.png'
    ];

self.addEventListener('install',(e) =>{
    console.log('[Service Worker] Install');
    e.waitUntil(
        cache.open(cacheName).then((cache) =>{
        console.log('[Service Worker] Caching all the files');
        return cache.addAll(cacheFiles);
    })
    );
});