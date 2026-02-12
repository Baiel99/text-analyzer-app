self.addEventListener("install", e => {
e.waitUntil(
caches.open("analyzer-cache").then(cache=>{
return cache.addAll(["/"]);
})
);
});
