// eslint-disable-next-line no-unused-vars
var CACHE_NAME = "pwa-task-manager";
// eslint-disable-next-line no-unused-vars
var urlsToCache = [];

// eslint-disable-next-line no-unused-vars
self.addEventListener("install", function (e) {
  self.skipWaiting();
});

// eslint-disable-next-line no-unused-vars
self.addEventListener("activate", function (e) {
  self.registration
    .unregister()
    .then(function () {
      return self.clients.matchAll();
    })
    .then(function (clients) {
      clients.forEach((client) => client.navigate(client.url));
    });
});
