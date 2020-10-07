// console.warn('hello i m hamza');

let cacheData= 'test1';
self.addEventListener("install",(event)=>{
    event.waitUntil(
        caches.open(cacheData).then((cache)=>{
            cache.addAll([
                 "/static/js/bundle.js",
                 "/",
                 "/index.html",
                 "/static/js/main.chunk.js",
                 "/static/js/0.chunk.js"
                //  "/my-app/src/App.js"

               
            ])
        })
    )
})


self.addEventListener('fetch', function(e) {
    console.log('[ServiceWorker] Fetch', e.request.url);
    if(!navigator.onLine){

        e.respondWith(
            caches.match(e.request).then((response)=> {
                // if(response){
                //     return response
                // }
                return response || fetch(e.request.clone());

                
            })
        );
    }
});