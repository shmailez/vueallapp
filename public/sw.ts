importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js'); 

// declare const workbox: any

// eslint-disable-next-line no-undef
workbox.routing.registerRoute(
    ({ request }) => request.destination === 'image',
    // eslint-disable-next-line no-undef
    new workbox.strategies.NetworkFirst()
);