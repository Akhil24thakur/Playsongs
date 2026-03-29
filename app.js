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
   WAKE LOCK — keeps audio alive when screen turns off
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

// Re-acquire wake lock if OS released it while tab was hidden
document.addEventListener('visibilitychange', async () => {
  if (document.visibilityState === 'visible' && playing) {
    await acquireWakeLock();
  }
});

/* ═══════════════════════════════════════════════════════════
   AUTO-RESUME — persist & restore last track + position
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

function restorePlaybackState() {
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

    setMediaMetadata(t);
    setPlayState(false);
  } catch (_) {}
}

/* ═══════════════════════════════════════════════════════════
   ANDROID NOTIFICATION BAR — Media Session API
═══════════════════════════════════════════════════════════ */

// Resolve relative image path to absolute URL.
// Android Chrome REQUIRES absolute URLs for notification artwork.
function absoluteURL(path) {
  try { return new URL(path, location.href).href; }
  catch (_) { return path; }
}

// Detect correct MIME type from file extension.
// Sending the wrong type can cause Android to ignore the artwork update.
function getImageType(path) {
  const ext = path.split('.').pop().toLowerCase().split('?')[0];
  if (ext === 'png')  return 'image/png';
  if (ext === 'webp') return 'image/webp';
  return 'image/jpeg'; // covers jpg, jpeg, and unknown
}

// Set track metadata on the OS notification.
// Called every time a new song loads — updates cover, title, artist.
// The ?t= cache-buster is critical: Android Chrome caches artwork by URL.
// Without it, the same local path returns the first song's image every time.
function setMediaMetadata(track) {
  if (!('mediaSession' in navigator)) return;

  // Append a unique timestamp so Android treats every track change
  // as a brand-new image URL and actually fetches + displays it.
  const coverAbs = absoluteURL(track.cover) + '?t=' + Date.now();
  const type     = getImageType(track.cover);

  // Provide multiple sizes — Android picks the best fit for
  // notification shade, lock screen, and Wear OS
  navigator.mediaSession.metadata = new MediaMetadata({
    title:  track.title,
    artist: track.artist,
    album:  'Akhil Music',
    artwork: [
      { src: coverAbs, sizes: '96x96',   type },
      { src: coverAbs, sizes: '128x128', type },
      { src: coverAbs, sizes: '192x192', type },
      { src: coverAbs, sizes: '256x256', type },
      { src: coverAbs, sizes: '512x512', type }
    ]
  });
}

// Push current playback position to the OS.
// This is what makes the progress bar / scrubber appear and
// move in real-time inside the Android notification.
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

// Register all notification button handlers.
// Must be called once before any playback starts.
function initMediaSession() {
  if (!('mediaSession' in navigator)) return;

  const ms = navigator.mediaSession;

  // ▶ Play button in notification
  ms.setActionHandler('play', () => {
    audio.play().then(() => {
      acquireWakeLock();
      setPlayState(true);
      ms.playbackState = 'playing';
    });
  });

  // ⏸ Pause button in notification
  ms.setActionHandler('pause', () => {
    audio.pause();
    setPlayState(false);
    ms.playbackState = 'paused';
    releaseWakeLock();
    savePlaybackState();
  });

  // ⏮ Previous button in notification
  ms.setActionHandler('previoustrack', () => {
    audio.currentTime > 3 ? (audio.currentTime = 0) : loadPlay(cur - 1);
  });

  // ⏭ Next button in notification
  ms.setActionHandler('nexttrack', () => loadPlay(cur + 1));

  // ⏪ Seek Backward (shown on Android 13+ as -10 s button)
  ms.setActionHandler('seekbackward', (details) => {
    const skip = details.seekOffset || 10;
    audio.currentTime = Math.max(0, audio.currentTime - skip);
    pushPositionState();
  });

  // ⏩ Seek Forward (shown on Android 13+ as +10 s button)
  ms.setActionHandler('seekforward', (details) => {
    const skip = details.seekOffset || 10;
    audio.currentTime = Math.min(audio.duration || Infinity, audio.currentTime + skip);
    pushPositionState();
  });

  // Scrubber drag from notification / lock screen
  ms.setActionHandler('seekto', (details) => {
    if (details.seekTime !== undefined && audio.duration) {
      audio.currentTime = details.seekTime;
      pushPositionState();
    }
  });

  // Stop / dismiss (some Android ROMs show a close button)
  try {
    ms.setActionHandler('stop', () => {
      audio.pause();
      audio.currentTime = 0;
      setPlayState(false);
      ms.playbackState = 'none';
      releaseWakeLock();
      savePlaybackState();
    });
  } catch (_) {}
}

/* ═══════════════════════════════════════════════════════════
   BUILD TRACK LIST
═══════════════════════════════════════════════════════════ */
function buildTrackList() {
  tracksList.innerHTML = '';
  playlist.forEach((track, i) => {
    const row = document.createElement('div');
    row.className   = 'track-item';
    row.id          = `track-${i}`;
    row.dataset.idx = i;
    row.innerHTML = `
      <div class="t-num-wrap">
        <span class="t-num">${String(i + 1).padStart(2, '0')}</span>
        <div class="t-eq" aria-hidden="true">
          <span></span><span></span><span></span>
        </div>
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
      </div>
    `;
    row.addEventListener('click', () => loadPlay(i));
    tracksList.appendChild(row);
    prefetchDuration(track.src, i);
  });
}

function applyMarquee(element) {
  if (element.scrollWidth > element.clientWidth) {
    element.classList.add('marquee');
  } else {
    element.classList.remove('marquee');
  }
}

/* ═══════════════════════════════════════════════════════════
   PRE-FETCH DURATION
═══════════════════════════════════════════════════════════ */
function prefetchDuration(src, index) {
  const tmp = new Audio();
  tmp.preload = 'metadata';
  tmp.src = src;
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
   BUILD ABOUT STATS
═══════════════════════════════════════════════════════════ */
function buildStats() {
  aboutStats.innerHTML = `
    <div>
      <div class="stat-num">${playlist.length}</div>
      <div class="stat-label">Tracks</div>
    </div>
    <div>
      <div class="stat-num">∞</div>
      <div class="stat-label">Feelings</div>
    </div>
    <div>
      <div class="stat-num">1</div>
      <div class="stat-label">Artist</div>
    </div>
  `;
}

/* ═══════════════════════════════════════════════════════════
   SERVICE WORKER
═══════════════════════════════════════════════════════════ */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js');
}

/* ═══════════════════════════════════════════════════════════
   PWA INSTALL BUTTON
═══════════════════════════════════════════════════════════ */
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;

  const installBtn = document.createElement('button');
  installBtn.innerText = 'Install App';
  installBtn.className = 'install-btn';
  installBtn.onclick = async () => {
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
  };
  document.body.appendChild(installBtn);
});

/* ═══════════════════════════════════════════════════════════
   LOAD & PLAY
═══════════════════════════════════════════════════════════ */
function loadPlay(index) {
  if (index < 0) index = playlist.length - 1;
  if (index >= playlist.length) index = 0;

  cur = index;
  const t = playlist[cur];

  audio.src    = t.src;
  audio.volume = parseFloat(volSlider.value);

  /* Update in-app UI */
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

  /* Update Android notification metadata IMMEDIATELY — cover
     image and title change as soon as you tap a track, even
     before audio starts buffering.
     setMediaMetadata now appends ?t=Date.now() so Android
     never shows a stale cached image from a previous track. */
  setMediaMetadata(t);
  if ('mediaSession' in navigator) {
    navigator.mediaSession.playbackState = 'playing';
  }

  audio.play().then(() => {
    setPlayState(true);
    acquireWakeLock();
    savePlaybackState();
    /* pushPositionState() fires after loadedmetadata below  */
  }).catch(() => {
    setPlayState(false);
  });
}

/* ═══════════════════════════════════════════════════════════
   SET PLAY / PAUSE STATE
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
    audio.play().then(() => {
      acquireWakeLock();
      setPlayState(true);
    });
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
nextBtn.addEventListener('click', () => loadPlay(cur + 1));

pbPrev.addEventListener('click', () => {
  audio.currentTime > 3 ? (audio.currentTime = 0) : loadPlay(cur - 1);
});
pbNext.addEventListener('click', () => loadPlay(cur + 1));

document.getElementById('playAllBtn').addEventListener('click', () => {
  loadPlay(0);
  document.getElementById('songs').scrollIntoView({ behavior: 'smooth' });
});

/* ═══════════════════════════════════════════════════════════
   AUDIO EVENTS
═══════════════════════════════════════════════════════════ */
audio.addEventListener('timeupdate', () => {
  if (!audio.duration) return;
  const pct = (audio.currentTime / audio.duration) * 100;

  progFill.style.width   = pct + '%';
  progDot.style.left     = pct + '%';
  pbProgFill.style.width = pct + '%';
  timeCur.textContent    = fmt(audio.currentTime);

  // Keep notification progress bar moving in real-time.
  pushPositionState();
});

audio.addEventListener('loadedmetadata', () => {
  timeTot.textContent = fmt(audio.duration);
  // Duration now known — push so notification scrubber becomes interactive
  pushPositionState();
});

audio.addEventListener('ended', () => {
  savePlaybackState();
  loadPlay(cur + 1);
});

audio.addEventListener('play', () => {
  if ('mediaSession' in navigator) {
    navigator.mediaSession.playbackState = 'playing';
  }
  setPlayState(true);
});

audio.addEventListener('pause', () => {
  if ('mediaSession' in navigator) {
    navigator.mediaSession.playbackState = 'paused';
  }
  pushPositionState();      // freeze scrubber at current position in notification
  setPlayState(false);
  savePlaybackState();
  releaseWakeLock();
});

/* ═══════════════════════════════════════════════════════════
   SEEK — click + drag + touch
═══════════════════════════════════════════════════════════ */
function seekTo(clientX, el) {
  const r   = el.getBoundingClientRect();
  const pct = Math.max(0, Math.min(1, (clientX - r.left) / r.width));
  if (audio.duration) {
    audio.currentTime = pct * audio.duration;
    pushPositionState();    // update notification scrubber on manual seek
  }
}

progTrack.addEventListener('click', e => seekTo(e.clientX, progTrack));

let dragging = false;
progTrack.addEventListener('mousedown', () => { dragging = true; });
document.addEventListener('mousemove',  e => { if (dragging) seekTo(e.clientX, progTrack); });
document.addEventListener('mouseup',    () => { dragging = false; });

progTrack.addEventListener('touchstart', e => {
  seekTo(e.touches[0].clientX, progTrack);
}, { passive: true });

progTrack.addEventListener('touchmove', e => {
  seekTo(e.touches[0].clientX, progTrack);
}, { passive: true });

/* ═══════════════════════════════════════════════════════════
   VOLUME
═══════════════════════════════════════════════════════════ */
volSlider.addEventListener('input', () => {
  audio.volume = parseFloat(volSlider.value);
});

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
   HELPER — format seconds → m:ss
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
  const value = vol.value * 100;
  vol.style.background = `linear-gradient(to right, var(--gold) ${value}%, rgba(255,255,255,0.15) ${value}%)`;
}

vol.addEventListener('input', updateVolumeUI);
updateVolumeUI();

/* ═══════════════════════════════════════════════════════════
   INIT — order matters:
   1. Build DOM from playlist array
   2. Register Media Session handlers BEFORE any playback
   3. Restore last session (track + seek position)
═══════════════════════════════════════════════════════════ */
buildTrackList();
buildStats();
initMediaSession();       // registers all ⏮ ▶ ⏭ notification handlers
restorePlaybackState();   // restores last track + position, paused