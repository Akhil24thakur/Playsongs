/* ═══════════════════════════════════════════════════════════
   PLAYLIST
═══════════════════════════════════════════════════════════ */
const playlist = [
  { title: 'Kitab Likhunga',            artist: 'Akhil', src: 'songs/Kitab Likhunga.mp3',             cover: 'images/Kitab Likhunga.png',             color: '#8B4513' },
  { title: 'Ek Baat Reh Gayi Thi',      artist: 'Akhil', src: 'songs/Ek Baat Reh Gayi Thi.mp3',       cover: 'images/Ek Baat Reh Gayi Thi.png',       color: '#8B4513' },
  { title: 'Jhanjron Ka Joda',           artist: 'Akhil', src: 'songs/Jhanjron Ka Joda.mp3',            cover: 'images/Jhanjron Ka Joda.png',            color: '#8B4513' },
  { title: 'Ek Nazar',                   artist: 'Akhil', src: 'songs/Ek Nazar.mp3',                    cover: 'images/Ek Nazar.png',                    color: '#8B4513' },
  { title: 'Before Death',               artist: 'Akhil', src: 'songs/Before Death.mp3',                cover: 'images/Before Death.png',                color: '#8B4513' },
  { title: 'You Are The Reason',         artist: 'Akhil', src: 'songs/You Are The Reason.mp3',          cover: 'images/You Are The Reason.png',          color: '#8B4513' },
  { title: 'Love Song | इतना गहरा',      artist: 'Akhil', src: 'songs/Love Song  इतना गहरा.mp3',       cover: 'images/Love Song  इतना गहरा.png',       color: '#8B4513' },
  { title: 'Coffee Talks',               artist: 'Akhil', src: 'songs/Coffee Talks.mp3',                cover: 'images/Coffee Talks.png',                color: '#8B4513' },
  { title: 'Beenaam Sa Ishq',            artist: 'Akhil', src: 'songs/Beenaam Sa Ishq.mp3',             cover: 'images/Beenaam Sa Ishq.png',             color: '#8B4513' },
  { title: 'Tum Hi Toh Ho',             artist: 'Akhil', src: 'songs/Tum Hi Toh Ho.mp3',               cover: 'images/Tum Hi Toh Ho.png',               color: '#8B4513' },
  { title: 'Tu Hi Hai Wajah',           artist: 'Akhil', src: 'songs/Tu Hi Hai Wajah.mp3',             cover: 'images/Tu Hi Hai Wajah.png',             color: '#8B4513' },
  { title: 'Silent Love',               artist: 'Akhil', src: 'songs/Silent Love.mp3',                  cover: 'images/Silent Love.png',                 color: '#8B4513' },
  { title: 'Summer Evening',            artist: 'Akhil', src: 'songs/summer.mp3',                       cover: 'images/summer.png',                      color: '#8B4513' },
  { title: 'Lost Love',                 artist: 'Akhil', src: 'songs/Lost Love.mp3',                    cover: 'images/Lost Love.png',                   color: '#8B4513' },
  { title: 'Phela Batein',              artist: 'Akhil', src: 'songs/batan.mp3',                        cover: 'images/batan.png',                       color: '#2F4F8F' },
  { title: 'Stay Away',                 artist: 'Akhil', src: 'songs/Stay away.mp3',                    cover: 'images/stay away.png',                   color: '#4A4A6A' },
  { title: 'Choti Choti Batan',         artist: 'Akhil', src: 'songs/batan.mp3',                        cover: 'images/batan.png',                       color: '#6A5ACD' },
  { title: 'Karma',                     artist: 'Akhil', src: 'songs/karma.mp3',                        cover: 'images/karma.png',                       color: '#FF5733' },
  { title: 'Tere Bina',                 artist: 'Akhil', src: 'songs/Tere Bina.mp3',                    cover: 'images/Tere Bina.png',                   color: '#C70039' },
  { title: 'Divided Hearts',            artist: 'Akhil', src: 'songs/div.mp3',                          cover: 'images/div.png',                         color: '#900C3F' },
  { title: 'Rah Main Kanta',            artist: 'Akhil', src: 'songs/rah.mp3',                          cover: 'images/rah.png',                         color: '#581845' },
  { title: 'Soul in Simplicity',        artist: 'Akhil', src: 'songs/Soul in Simplicity.mp3',           cover: 'images/simple.png',                      color: '#2ECC71' },
  { title: 'Tera Sath [Lofi + Slowed]', artist: 'Akhil', src: 'songs/Tera sath lofi.mp3',               cover: 'images/TeraSath.jpeg',                   color: '#3498DB' },
  { title: 'New City',                  artist: 'Akhil', src: 'songs/new city.mp3',                     cover: 'images/ak.png',                          color: '#1ABC9C' },
  { title: 'Vibes with you',            artist: 'Akhil', src: 'songs/Vibes With You.mp3',               cover: 'images/Vibes with you.png',              color: '#9B59B6' },
  { title: 'Mann Ka Akrosh',            artist: 'Akhil', src: 'songs/Mann Ka Akrosh.mp3',               cover: 'images/Mann Ka Akrosh.png',              color: '#E74C3C' },
  { title: 'With You',                  artist: 'Akhil', src: 'songs/WithYou.mp3',                      cover: 'images/WithYou.jpeg',                    color: '#F39C12' },
  { title: 'She Comes In',              artist: 'Akhil', src: 'songs/She comes in.mp3',                 cover: 'images/she comes In.png',                color: '#D35400' },
  { title: 'Without You',               artist: 'Akhil', src: 'songs/WithOut you.mp3',                  cover: 'images/WithOut YOU.jpg',                 color: '#7F8C8D' },
  { title: 'Because Of You',            artist: 'Akhil', src: 'songs/Because of You.mp3',               cover: 'images/OF you.png',                      color: '#16A085' },
  { title: 'Dont Fight',                artist: 'Akhil', src: 'songs/Dont Fight.mp3',                   cover: 'images/fight.png',                       color: '#34495E' },
  { title: 'Dream With You',            artist: 'Akhil', src: 'songs/My Dreams.mp3',                    cover: 'images/MY Dreams.png',                   color: '#27AE60' },
  { title: 'Kahani Suno',               artist: 'Akhil', src: 'songs/kahani.mp3',                       cover: 'images/Kahani.png',                      color: '#8E44AD' },
  { title: 'Dooriyan',                  artist: 'Akhil', src: 'songs/Dooriyan.mp3',                     cover: 'images/Dooriyan.png',                    color: '#2C3E50' },
  { title: 'Samjho Na',                 artist: 'Akhil', src: 'songs/Samjho.mp3',                       cover: 'images/Samjho.png',                      color: '#E67E22' },
  { title: 'Tera Sath',                 artist: 'Akhil', src: 'songs/TeraSath.mp3',                     cover: 'images/TeraSath.jpeg',                   color: '#2980B9' },
  { title: 'One Sided Love',            artist: 'Akhil', src: 'songs/One Sided Love.mp3',               cover: 'images/One Sided Love.png',              color: '#C0392B' },
  { title: 'Majestic',                  artist: 'Akhil', src: 'songs/Majestic.mp3',                     cover: 'images/Majestic.png',                    color: '#F1C40F' },
  { title: 'My Queen',                  artist: 'Akhil', src: 'songs/My Queen.mp3',                     cover: 'images/My Queen.jpeg',                   color: '#E84393' },
  { title: 'Winters In Shimla',         artist: 'Akhil', src: 'songs/Winters In Shimla.mp3',            cover: 'images/Shimla.jpg',                      color: '#00CEC9' },
  { title: 'Meri Dua',                  artist: 'Akhil', src: 'songs/Meri Dua.mp3',                     cover: 'images/meri-dua.jpg',                    color: '#6C5CE7' },
  { title: 'Bittersweet Memories',      artist: 'Akhil', src: 'songs/Bittersweet Memories.mp3',         cover: 'images/Bittersweet Memories.jpeg',       color: '#FD79A8' },
  { title: 'Dil Di Kahani',             artist: 'Akhil', src: 'songs/Dil Di Kahani.mp3',                cover: 'images/Dil Di Kahani.jpeg',              color: '#00B894' },
  { title: 'First Meet',                artist: 'Akhil', src: 'songs/First Meet.mp3',                   cover: 'images/First Meet.jpeg',                 color: '#0984E3' },
  { title: 'Nature Touch',              artist: 'Akhil', src: 'songs/Nature Touch.mp3',                 cover: 'images/Nature Touch.jpeg',               color: '#55EFC4' },
  { title: 'Pyar Ka Safar',             artist: 'Akhil', src: 'songs/Pyar Ka Safar.mp3',                cover: 'images/pyar ka safat.jpeg',              color: '#FAB1A0' },
  { title: 'Sari Sari Raat',            artist: 'Akhil', src: 'songs/Sari Sari Raat.mp3',               cover: 'images/meri-dua.jpg',                    color: '#FFEAA7' },
  { title: 'Tere Bin',                  artist: 'Akhil', src: 'songs/Tere Bin.mp3',                     cover: 'images/tera bina.jpeg',                  color: '#636E72' }
];

/* ═══════════════════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════════════════ */
let cur     = -1;
let playing = false;

/* ═══════════════════════════════════════════════════════════
   DOM REFERENCES
═══════════════════════════════════════════════════════════ */
const audio       = document.getElementById('audio');
const heroVinyl   = document.getElementById('heroVinyl');
const nowStrip    = document.getElementById('nowStrip');
const nowCoverImg = document.getElementById('nowCoverImg');
const nowTitle    = document.getElementById('nowTitle');
const nowArtist   = document.getElementById('nowArtist');
const mainPlayBtn = document.getElementById('mainPlayBtn');
const prevBtn     = document.getElementById('prevBtn');
const nextBtn     = document.getElementById('nextBtn');
const progFill    = document.getElementById('progFill');
const progDot     = document.getElementById('progDot');
const progTrack   = document.getElementById('progTrack');
const timeCur     = document.getElementById('timeCur');
const timeTot     = document.getElementById('timeTot');
const volSlider   = document.getElementById('volSlider');
const playerBar   = document.getElementById('playerBar');
const pbProgFill  = document.getElementById('pbProgFill');
const pbCoverImg  = document.getElementById('pbCoverImg');
const pbTitle     = document.getElementById('pbTitle');
const pbArtist    = document.getElementById('pbArtist');
const pbPlay      = document.getElementById('pbPlay');
const pbPrev      = document.getElementById('pbPrev');
const pbNext      = document.getElementById('pbNext');
const tracksList  = document.getElementById('tracksList');
const aboutStats  = document.getElementById('aboutStats');

audio.setAttribute('playsinline', '');
audio.setAttribute('webkit-playsinline', '');

/* ═══════════════════════════════════════════════════════════
   WAKE LOCK
═══════════════════════════════════════════════════════════ */
let wakeLock = null;

async function acquireWakeLock() {
  if (!('wakeLock' in navigator)) return;
  try {
    if (!wakeLock || wakeLock.released) {
      wakeLock = await navigator.wakeLock.request('screen');
    }
  } catch (_) {}
}

async function releaseWakeLock() {
  if (!wakeLock || wakeLock.released) return;
  try { await wakeLock.release(); } catch (_) {}
  wakeLock = null;
}

document.addEventListener('visibilitychange', async () => {
  if (document.visibilityState === 'visible' && playing) await acquireWakeLock();
});

/* ═══════════════════════════════════════════════════════════
   AUTO-RESUME
═══════════════════════════════════════════════════════════ */
const LS_IDX  = 'akhil_cur';
const LS_TIME = 'akhil_time';

function savePlaybackState() {
  try {
    localStorage.setItem(LS_IDX,  cur);
    localStorage.setItem(LS_TIME, audio.currentTime);
  } catch (_) {}
}

setInterval(savePlaybackState, 5000);

async function restorePlaybackState() {
  try {
    const idx  = parseInt(localStorage.getItem(LS_IDX),  10);
    const time = parseFloat(localStorage.getItem(LS_TIME));
    if (isNaN(idx) || idx < 0 || idx >= playlist.length) return;

    cur = idx;
    const t = playlist[cur];
    audio.src    = t.src;
    audio.volume = parseFloat(volSlider.value);

    audio.addEventListener('loadedmetadata', () => {
      if (!isNaN(time) && time > 5) audio.currentTime = time;
      timeTot.textContent = fmt(audio.duration);
      pushPositionState();
    }, { once: true });

    nowStrip.classList.add('visible');
    nowCoverImg.src       = t.cover;
    nowTitle.textContent  = t.title;
    nowArtist.textContent = t.artist;

    playerBar.classList.add('show');
    pbCoverImg.src       = t.cover;
    pbTitle.textContent  = t.title;
    pbArtist.textContent = t.artist;

    document.querySelectorAll('.track-item').forEach((row, i) =>
      row.classList.toggle('active', i === cur)
    );

    // ✅ FIXED: was setMediaMetadata(t.title, t.artist, null)
    // null artwork lets Android fall back to its cached bitmap.
    // Now we generate fresh canvas art just like loadPlay() does.
    const dataURI = await getArtworkDataURI(t.cover);
    setMediaMetadata(t.title, t.artist, dataURI);

    setPlayState(false);
  } catch (_) {}
}
/* ═══════════════════════════════════════════════════════════
   ARTWORK — Canvas-based data URI generator
   ─────────────────────────────────────────────────────────
   THE ROOT CAUSE explained:
   Android's Media Session caches artwork at the OS level
   (in the SystemUI process), NOT in Chrome. It stores the
   decoded bitmap and keys it by the image URL path. Because
   this cache lives outside the browser, no amount of SW
   bypassing, cache headers, or ?t= tricks can clear it.
   The bitmap stays until Android decides to evict it.

   THE ONLY GUARANTEED FIX:
   Use an HTML Canvas to:
     1. Draw the real cover image onto the canvas
     2. Stamp a 1px invisible unique marker pixel onto it
        (different position for every track + timestamp)
     3. Export as a data URI via canvas.toDataURL()

   The resulting data URI contains unique pixel data for
   every single track play. Android has never seen these
   exact bytes before, so it cannot cache-hit — it MUST
   render the new bitmap. This breaks the cache at the
   pixel level, not the URL level.
═══════════════════════════════════════════════════════════ */
const coverCache = new Map(); // coverPath → canvas data URI

/**
 * Draws cover image onto a canvas, stamps a unique invisible
 * pixel marker, and returns the result as a PNG data URI.
 * The unique pixel guarantees Android never gets a cache hit.
 */
function coverToCanvasDataURI(coverPath, uniqueSeed) {
  return new Promise((resolve) => {
    const SIZE   = 256;
    const canvas = document.createElement('canvas');
    canvas.width  = SIZE;
    canvas.height = SIZE;
    const ctx    = canvas.getContext('2d');
    const img    = new Image();



img.onload = () => {
      // Draw the actual cover art
      ctx.drawImage(img, 0, 0, SIZE, SIZE);

      // Stamp a unique 1×1 pixel using the seed value.
      // Position and colour vary per track+timestamp so the
      // pixel data is always unique — Android must treat it
      // as a brand new bitmap every time.
      const px = uniqueSeed % (SIZE - 2) + 1;
      const py = Math.floor(uniqueSeed / SIZE) % (SIZE - 2) + 1;
      const r  = (uniqueSeed * 7)  & 0xFF;
      const g  = (uniqueSeed * 13) & 0xFF;
      const b  = (uniqueSeed * 17) & 0xFF;
      ctx.fillStyle = `rgba(${r},${g},${b},0.004)`; // nearly invisible
      ctx.fillRect(px, py, 1, 1);

      // ✅ FIXED: toDataURL() throws SecurityError if canvas is tainted.
      // Wrap in try/catch so it never silently hangs the Promise.
      // If it fails, fall through to the onerror placeholder instead.
      try {
        resolve(canvas.toDataURL('image/png'));
      } catch (e) {
        img.onerror();
      }
    };

    img.onerror = () => {
      // Image failed to load — generate a solid-colour placeholder
      // using the track's colour from the playlist array, with
      // the song title initials drawn on it.
      const track = playlist[cur] || {};
      const bg    = track.color || '#1a1730';
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, SIZE, SIZE);

      // Draw initials
      const initials = (track.title || '?')
        .split(' ').slice(0, 2)
        .map(w => w[0]).join('').toUpperCase();
      ctx.fillStyle   = 'rgba(255,255,255,0.85)';
      ctx.font        = `bold ${SIZE * 0.36}px sans-serif`;
      ctx.textAlign   = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(initials, SIZE / 2, SIZE / 2);

      // Unique marker pixel
      ctx.fillStyle = `rgba(${uniqueSeed & 0xFF},${(uniqueSeed >> 8) & 0xFF},0,0.004)`;
      ctx.fillRect((uniqueSeed % SIZE), (uniqueSeed % 100) + 1, 1, 1);

      resolve(canvas.toDataURL('image/png'));
    };

    // Add unique timestamp to URL to force a fresh load into
    // the canvas (bypasses browser image cache for the canvas draw)
    img.src = coverPath + '?v=' + uniqueSeed;
  });
}

/**
 * Get artwork data URI for a track.
 * Every call generates a fresh canvas render with a unique seed,
 * guaranteeing Android's OS-level bitmap cache is always busted.
 * We do NOT memoize here — each play must produce unique bytes.
 */
async function getArtworkDataURI(coverPath) {
  // Unique seed: combination of timestamp + cover path hash
  // so the same track played twice also gets different bytes
  const seed = (Date.now() + coverPath.split('').reduce(
    (a, c) => (a * 31 + c.charCodeAt(0)) | 0, 0
  )) & 0x7FFFFFFF;

  return coverToCanvasDataURI(coverPath, seed);
}

/* ═══════════════════════════════════════════════════════════
   MEDIA SESSION
═══════════════════════════════════════════════════════════ */
function setMediaMetadata(title, artist, dataURI) {
  if (!('mediaSession' in navigator)) return;

  navigator.mediaSession.metadata = new MediaMetadata({
    title,
    artist,
    album:   'Akhil Music',
    artwork: dataURI ? [
      { src: dataURI, sizes: '512x512', type: 'image/png' },
      { src: dataURI, sizes: '256x256', type: 'image/png' },
    ] : [],
  });
}

function pushPositionState() {
  if (!('mediaSession' in navigator)) return;
  if (!audio.duration || isNaN(audio.duration)) return;
  try {
    navigator.mediaSession.setPositionState({
      duration:     audio.duration,
      playbackRate: audio.playbackRate || 1,
      position:     Math.max(0, Math.min(audio.currentTime, audio.duration))
    });
  } catch (_) {}
}

function initMediaSession() {
  if (!('mediaSession' in navigator)) return;
  const ms = navigator.mediaSession;

  ms.setActionHandler('play', () => {
    audio.play().then(() => { acquireWakeLock(); setPlayState(true); ms.playbackState = 'playing'; });
  });
  ms.setActionHandler('pause', () => {
    audio.pause(); setPlayState(false); ms.playbackState = 'paused';
    releaseWakeLock(); savePlaybackState();
  });
  ms.setActionHandler('previoustrack', () => {
    audio.currentTime > 3 ? (audio.currentTime = 0) : loadPlay(cur - 1);
  });
  ms.setActionHandler('nexttrack',     () => loadPlay(cur + 1));
  ms.setActionHandler('seekbackward',  d  => {
    audio.currentTime = Math.max(0, audio.currentTime - (d.seekOffset || 10));
    pushPositionState();
  });
  ms.setActionHandler('seekforward',   d  => {
    audio.currentTime = Math.min(audio.duration || Infinity, audio.currentTime + (d.seekOffset || 10));
    pushPositionState();
  });
  ms.setActionHandler('seekto', d => {
    if (d.seekTime !== undefined && audio.duration) {
      audio.currentTime = d.seekTime; pushPositionState();
    }
  });
  try {
    ms.setActionHandler('stop', () => {
      audio.pause(); audio.currentTime = 0;
      setPlayState(false); ms.playbackState = 'none';
      releaseWakeLock(); savePlaybackState();
    });
  } catch (_) {}
}

/* ═══════════════════════════════════════════════════════════
   PRE-WARM next covers
═══════════════════════════════════════════════════════════ */
function prewarmCovers(fromIndex) {
  // Just pre-load the images into browser cache so canvas
  // draw is instant when the track is actually played
  for (let i = 1; i <= 3; i++) {
    const img = new Image();
    img.src   = playlist[(fromIndex + i) % playlist.length].cover;
  }
}

/* ═══════════════════════════════════════════════════════════
   BUILD TRACK LIST
═══════════════════════════════════════════════════════════ */
function buildTrackList() {
  tracksList.innerHTML = '';
  playlist.forEach((track, i) => {
    const row       = document.createElement('div');
    row.className   = 'track-item';
    row.id          = `track-${i}`;
    row.dataset.idx = i;
    row.innerHTML   = `
      <div class="t-num-wrap">
        <span class="t-num">${String(i + 1).padStart(2, '0')}</span>
        <div class="t-eq" aria-hidden="true"><span></span><span></span><span></span></div>
      </div>
      <div class="t-thumb">
        <img src="${track.cover}" alt="${track.title} cover" onerror="this.style.display='none'" />
      </div>
      <div class="t-info">
        <div class="t-title">${track.title}</div>
        <div class="t-artist">${track.artist}</div>
      </div>
      <div class="t-actions">
        <span class="t-dur" id="dur-${i}">—:——</span>
        <button class="t-play-btn" aria-label="Play ${track.title}">
          <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        </button>
      </div>`;
    row.addEventListener('click', () => loadPlay(i));
    tracksList.appendChild(row);
    prefetchDuration(track.src, i);
  });
}

function applyMarquee(el) {
  el.classList.toggle('marquee', el.scrollWidth > el.clientWidth);
}

/* ═══════════════════════════════════════════════════════════
   PRE-FETCH DURATION
═══════════════════════════════════════════════════════════ */
function prefetchDuration(src, index) {
  const tmp   = new Audio();
  tmp.preload = 'metadata';
  tmp.src     = src;
  tmp.addEventListener('loadedmetadata', () => {
    const el = document.getElementById(`dur-${index}`);
    if (el) el.textContent = fmt(tmp.duration);
    tmp.src = '';
  });
  tmp.addEventListener('error', () => {
    const el = document.getElementById(`dur-${index}`);
    if (el) el.textContent = '—:——';
  });
}

/* ═══════════════════════════════════════════════════════════
   BUILD STATS
═══════════════════════════════════════════════════════════ */
function buildStats() {
  aboutStats.innerHTML = `
    <div><div class="stat-num">${playlist.length}</div><div class="stat-label">Tracks</div></div>
    <div><div class="stat-num">∞</div><div class="stat-label">Feelings</div></div>
    <div><div class="stat-num">1</div><div class="stat-label">Artist</div></div>`;
}

/* ═══════════════════════════════════════════════════════════
   SERVICE WORKER
═══════════════════════════════════════════════════════════ */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js');
}

/* ═══════════════════════════════════════════════════════════
   PWA INSTALL
═══════════════════════════════════════════════════════════ */
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  const btn     = document.createElement('button');
  btn.innerText = 'Install App';
  btn.className = 'install-btn';
  btn.onclick   = async () => { deferredPrompt.prompt(); await deferredPrompt.userChoice; };
  document.body.appendChild(btn);
});

/* ═══════════════════════════════════════════════════════════
   LOAD & PLAY
   ─────────────────────────────────────────────────────────
   We await getArtworkDataURI() BEFORE audio.play() so that
   MediaMetadata is fully populated with unique pixel-stamped
   artwork before the 'play' event fires and Android renders
   the notification bar.
═══════════════════════════════════════════════════════════ */
async function loadPlay(index) {
  if (index < 0) index = playlist.length - 1;
  if (index >= playlist.length) index = 0;

  cur     = index;
  const t = playlist[cur];

  audio.src    = t.src;
  audio.volume = parseFloat(volSlider.value);

  // Update in-app UI
  nowStrip.classList.add('visible');
  nowCoverImg.src       = t.cover;
  nowTitle.textContent  = t.title;
  nowArtist.textContent = t.artist;

  playerBar.classList.add('show');
  pbCoverImg.src       = t.cover;
  pbTitle.textContent  = t.title;
  pbArtist.textContent = t.artist;

  document.querySelectorAll('.track-item').forEach((row, i) =>
    row.classList.toggle('active', i === cur)
  );

  // Generate canvas artwork with unique pixel stamp — BEFORE play()
  const dataURI = await getArtworkDataURI(t.cover);
  setMediaMetadata(t.title, t.artist, dataURI);

  // Now start audio — 'play' event fires, notification shows with correct art
  audio.play().catch(() => setPlayState(false));

  prewarmCovers(cur);
}

/* ═══════════════════════════════════════════════════════════
   SET PLAY STATE
═══════════════════════════════════════════════════════════ */
function setPlayState(isPlaying) {
  playing = isPlaying;
  mainPlayBtn.classList.toggle('playing', isPlaying);
  pbPlay.classList.toggle('playing', isPlaying);
  heroVinyl.classList.toggle('spinning', isPlaying);
}

/* ═══════════════════════════════════════════════════════════
   TOGGLE PLAY / PAUSE
═══════════════════════════════════════════════════════════ */
function togglePlay() {
  if (cur === -1) { loadPlay(0); return; }
  if (playing) {
    audio.pause();
    setPlayState(false);
  } else {
    audio.play().then(() => { acquireWakeLock(); setPlayState(true); });
  }
}

/* ═══════════════════════════════════════════════════════════
   CONTROLS
═══════════════════════════════════════════════════════════ */
mainPlayBtn.addEventListener('click', togglePlay);
pbPlay.addEventListener('click',      togglePlay);
prevBtn.addEventListener('click', () => {
  audio.currentTime > 3 ? (audio.currentTime = 0) : loadPlay(cur - 1);
});
nextBtn.addEventListener('click',  () => loadPlay(cur + 1));
pbPrev.addEventListener('click',   () => {
  audio.currentTime > 3 ? (audio.currentTime = 0) : loadPlay(cur - 1);
});
pbNext.addEventListener('click',   () => loadPlay(cur + 1));

document.getElementById('playAllBtn').addEventListener('click', () => {
  loadPlay(0);
  document.getElementById('songs').scrollIntoView({ behavior: 'smooth' });
});

/* ═══════════════════════════════════════════════════════════
   AUDIO EVENTS
═══════════════════════════════════════════════════════════ */
audio.addEventListener('play', () => {
  if ('mediaSession' in navigator) {
    // Artwork already set before play() — just signal playing state
    navigator.mediaSession.playbackState = 'playing';
  }
  setPlayState(true);
  acquireWakeLock();
  savePlaybackState();
});

audio.addEventListener('timeupdate', () => {
  if (!audio.duration) return;
  const pct = (audio.currentTime / audio.duration) * 100;
  progFill.style.width   = pct + '%';
  progDot.style.left     = pct + '%';
  pbProgFill.style.width = pct + '%';
  timeCur.textContent    = fmt(audio.currentTime);
  pushPositionState();
});

audio.addEventListener('loadedmetadata', () => {
  timeTot.textContent = fmt(audio.duration);
  pushPositionState();
});

audio.addEventListener('ended', () => {
  savePlaybackState();
  loadPlay(cur + 1);
});

audio.addEventListener('pause', () => {
  if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'paused';
  pushPositionState();
  setPlayState(false);
  savePlaybackState();
  releaseWakeLock();
});

/* ═══════════════════════════════════════════════════════════
   SEEK
═══════════════════════════════════════════════════════════ */
function seekTo(clientX, el) {
  const r   = el.getBoundingClientRect();
  const pct = Math.max(0, Math.min(1, (clientX - r.left) / r.width));
  if (audio.duration) { audio.currentTime = pct * audio.duration; pushPositionState(); }
}

progTrack.addEventListener('click', e => seekTo(e.clientX, progTrack));
let dragging = false;
progTrack.addEventListener('mousedown', () => { dragging = true; });
document.addEventListener('mousemove',  e => { if (dragging) seekTo(e.clientX, progTrack); });
document.addEventListener('mouseup',    () => { dragging = false; });
progTrack.addEventListener('touchstart', e => seekTo(e.touches[0].clientX, progTrack), { passive: true });
progTrack.addEventListener('touchmove',  e => seekTo(e.touches[0].clientX, progTrack), { passive: true });

/* ═══════════════════════════════════════════════════════════
   VOLUME
═══════════════════════════════════════════════════════════ */
volSlider.addEventListener('input', () => { audio.volume = parseFloat(volSlider.value); });

/* ═══════════════════════════════════════════════════════════
   KEYBOARD SHORTCUTS
═══════════════════════════════════════════════════════════ */
document.addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT') return;
  if (e.code === 'Space')      { e.preventDefault(); togglePlay(); }
  if (e.code === 'ArrowRight') loadPlay(cur + 1);
  if (e.code === 'ArrowLeft')  {
    audio.currentTime > 3 ? (audio.currentTime = 0) : loadPlay(cur - 1);
  }
});

/* ═══════════════════════════════════════════════════════════
   HELPER
═══════════════════════════════════════════════════════════ */
function fmt(s) {
  if (isNaN(s) || s == null) return '0:00';
  return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
}

/* ═══════════════════════════════════════════════════════════
   VOLUME SLIDER UI
═══════════════════════════════════════════════════════════ */
const vol = document.getElementById('volSlider');
function updateVolumeUI() {
  const v = vol.value * 100;
  vol.style.background = `linear-gradient(to right, var(--a1) ${v}%, rgba(255,255,255,0.1) ${v}%)`;
}
vol.addEventListener('input', updateVolumeUI);
updateVolumeUI();

/* ═══════════════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════════════ */
buildTrackList();
buildStats();
initMediaSession();
restorePlaybackState();