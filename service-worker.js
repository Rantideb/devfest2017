self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('piano').then(function(cache) {
            return cache.addAll([
                '/',
                '/?launcher=true',
                '/index.html',
                '/index.html?launcher=true',
                '/style.css',
                '/favicon.png',
                '/app.js',
                '/icons/launcher-icon-1x.png',
                '/icons/launcher-icon-2x.png',
                '/icons/launcher-icon-4x.png'
            ]);
        })
    );
});

/* If you do not add a fetch event handler, PWA won't be installable
 * on Google Chrome :| */

self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
});