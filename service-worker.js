let artworkBlob = null;

const bc = new BroadcastChannel('artwork');
bc.onmessage = e => { artworkBlob = e.data.blob; };

self.addEventListener('fetch', event => {
  if (event.request.url.includes('/sw-artwork.png')) {
    event.respondWith(
      new Response(artworkBlob, { headers: { 'Content-Type': 'image/png' } })
    );
    return;
  }
  // ... rest of fetch handler
});