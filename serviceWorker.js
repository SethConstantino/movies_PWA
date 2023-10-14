const staticMovies = "dev-movies-site-v1";

const assets = [
    "/",
    "/index.html",
    "/css/styele.css",
    "/js/app.js",
    "/images/hostel_(Large).jpg",
    "/images/patient_zero_(Large).jpg",
    "/images/raw_(Large).jpg",
    "/images/terrifier_(Large).jpg",
    "/images/terrifier_2_(Large).jpg",
    "/images/the_forest_(Large).jpg",
]

async function preCache() {
    const cache = await caches.open(staticMovies);
    return cache.addAll(assets);
}

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(preCache());
})

async function cacheFirst(request) {
    const cacheResponse = await caches.match(request);
    if (cacheResponse) {
        return cacheResponse;
    }
    try {
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
            const cache = await caches.open(staticMovies);
            cache.put(request, networkResponse.clone())
        }
        return networkResponse;
    }

    catch(error) {
        return Response.error();
    }
}



self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        cacheFirst(fetchEvent.request)
    )
})