
self.addEventListener("install", event => {
    event.waitUntil(
        // Open a cache of resources.
        caches.open("schollis-v1").then(cache => {
            return cache.addAll([
                "/",
                "/css/screen.css",
                "/js/app.js"
            ]);//here should be added all css files
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});