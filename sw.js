// Service Worker for Dictionary Game
// Version 1.4.6
const CACHE_NAME = 'dictionary-game-v1.4.6';
const RUNTIME_CACHE = 'dictionary-runtime-v1.4.6';

// Assets to cache on install
const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/dist/app.js',
    '/dist/output.css',
    '/avatars.json',
    '/scoring.json'
];

// External CDN resources (cache separately)
const CDN_URLS = [
    'https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js',
    'https://www.gstatic.com/firebasejs/9.22.0/firebase-database-compat.js',
    'https://www.gstatic.com/firebasejs/9.22.0/firebase-auth-compat.js',
    'https://unpkg.com/react@18/umd/react.production.min.js',
    'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
    console.log('[SW] Installing service worker...');
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[SW] Caching static assets');
            return cache.addAll(STATIC_ASSETS);
        }).then(() => {
            // Cache CDN resources separately
            return caches.open(RUNTIME_CACHE).then((cache) => {
                console.log('[SW] Caching CDN resources');
                return cache.addAll(CDN_URLS);
            });
        }).then(() => {
            console.log('[SW] Installation complete');
            return self.skipWaiting(); // Activate immediately
        }).catch((error) => {
            console.error('[SW] Installation failed:', error);
        })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    console.log('[SW] Activating service worker...');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE) {
                        console.log('[SW] Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            console.log('[SW] Activation complete');
            return self.clients.claim(); // Take control immediately
        })
    );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // Skip non-GET requests
    if (request.method !== 'GET') {
        return;
    }

    // Skip Firebase Realtime Database requests (always fetch from network)
    if (url.hostname.includes('firebaseio.com') ||
        url.hostname.includes('googleapis.com') ||
        url.hostname.includes('identitytoolkit.googleapis.com')) {
        return;
    }

    // Skip external API requests (dictionary, datamuse, etc) - always fresh
    if (url.hostname.includes('dictionaryapi.dev') ||
        url.hostname.includes('datamuse.com') ||
        url.hostname.includes('qrserver.com')) {
        return;
    }

    // Strategy: Cache First, Network Fallback (for static assets and CDN)
    event.respondWith(
        caches.match(request).then((cachedResponse) => {
            if (cachedResponse) {
                console.log('[SW] Serving from cache:', request.url);
                return cachedResponse;
            }

            // Not in cache, fetch from network
            console.log('[SW] Fetching from network:', request.url);
            return fetch(request).then((response) => {
                // Don't cache if not a success response
                if (!response || response.status !== 200 || response.type !== 'basic') {
                    return response;
                }

                // Clone the response (can only be consumed once)
                const responseToCache = response.clone();

                // Cache CDN resources in runtime cache
                if (url.hostname.includes('unpkg.com') ||
                    url.hostname.includes('gstatic.com') ||
                    url.hostname.includes('jsdelivr.net')) {
                    caches.open(RUNTIME_CACHE).then((cache) => {
                        cache.put(request, responseToCache);
                    });
                } else if (url.origin === location.origin) {
                    // Cache same-origin resources in main cache
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(request, responseToCache);
                    });
                }

                return response;
            }).catch((error) => {
                console.error('[SW] Fetch failed:', error);
                // Could return a custom offline page here
                throw error;
            });
        })
    );
});

// Message event - handle cache updates
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});
