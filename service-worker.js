self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('piano').then(function(cache) {
            return cache.addAll([
                '/devfest2017/',
                '/devfest2017/?launcher=true',
                '/devfest2017/index.html',
                '/devfest2017/index.html?launcher=true',
                '/devfest2017/style.css',
                '/devfest2017/favicon.png',
                '/devfest2017/app.js',
                '/devfest2017/icons/launcher-icon-1x.png',
                '/devfest2017/icons/launcher-icon-2x.png',
                '/devfest2017/icons/launcher-icon-4x.png'
            ]);
        })
    );
});

/* If you do not add a fetch event handler, PWA won't be installable
 * on Google Chrome :| */

self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
});
