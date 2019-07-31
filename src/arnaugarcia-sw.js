const CACHE_STATIC_NAME = 'static-v7';

self.addEventListener('install', function (event) {
    console.log('[Service Worker] Installing Service Worker ...', event);
    event.waitUntil(
        caches.open(CACHE_STATIC_NAME)
            .then(cache => {
                cache.addAll([ // This are requests that the browser can make, not files
                    '/',
                    '/index.html',
                    // Javascript assets
                    '/assets/js/jquery.min.js',
                    '/assets/js/particles.min.js',
                    '/assets/js/appear.min.js',
                    '/assets/js/tilt.jquery.min.js',
                    '/assets/js/imagesloaded.jquery.min.js',
                    '/assets/js/isotope.jquery.min.js',
                    // i18n
                    '/assets/i18n/es.json',
                    '/assets/i18n/ca.json',
                    '/assets/i18n/en.json',
                    //Images
                    '/assets/img/arnaugarcia.jpg'
                ])
            })
    );
});

function updateCaches() {

    return caches.keys()
        .then(keyList => {
            return Promise.all(keyList.map(key => {
                if (cacheHasDifferentName(key)) {
                    console.log('[Service Worker] Removing old cache.', key);
                    return caches.delete(key);
                }
            }))
        });

    function cacheHasDifferentName(key) {
        return key !== CACHE_STATIC_NAME;
    }
}

self.addEventListener('activate', function (event) {
    console.log('[Service Worker] Activating Service Worker ....', event);
    event.waitUntil(updateCaches());
    return self.clients.claim();
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(response => {
            console.log(response);
            if (response) {
                console.log('Return from the cache' , response);
                return response;
            } else {
                return fetch(event.request);
            }
        })
    );
});

