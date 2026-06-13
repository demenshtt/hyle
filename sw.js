const CACHE = 'hyle-v1';
const ARQUIVOS = [
  '/hyle/',
    '/hyle/index.html',
      '/hyle/manifest.json'
      ];

      self.addEventListener('install', function(e) {
        e.waitUntil(
            caches.open(CACHE).then(function(cache) {
                  return cache.addAll(ARQUIVOS);
                      })
                        );
                        });

                        self.addEventListener('fetch', function(e) {
                          e.respondWith(
                              caches.match(e.request).then(function(resposta) {
                                    return resposta || fetch(e.request);
                                        })
                                          );
                                          });