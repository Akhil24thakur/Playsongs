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
   SVG ICONS
═══════════════════════════════════════════════════════════ */
const ICON_PLAY  = `<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;
const ICON_PAUSE = `<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;

/* ═══════════════════════════════════════════════════════════
   DOM REFS
═══════════════════════════════════════════════════════════ */
const audio       = document.getElementById('audio');
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
const pbVolSlider = document.getElementById('pbVolSlider');
const tracksList  = document.getElementById('tracksList');
const aboutStats  = document.getElementById('aboutStats');
const heroWave    = document.getElementById('heroWave');
const siteHeader  = document.getElementById('siteHeader');
const chipTracks  = document.getElementById('chipTracks');

audio.setAttribute('playsinline', '');
audio.setAttribute('webkit-playsinline', '');

/* ═══════════════════════════════════════════════════════════
   HEADER SCROLL
═══════════════════════════════════════════════════════════ */
window.addEventListener('scroll', () => {
  siteHeader.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ═══════════════════════════════════════════════════════════
   WAKE LOCK
═══════════════════════════════════════════════════════════ */
let wakeLock = null;
async function acquireWakeLock() {
  if (!('wakeLock' in navigator)) return;
  try { if (!wakeLock || wakeLock.released) wakeLock = await navigator.wakeLock.request('screen'); } catch (_) {}
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
   PERSIST PLAYBACK
═══════════════════════════════════════════════════════════ */
const LS_IDX  = 'akhil_cur';
const LS_TIME = 'akhil_time';

function savePlaybackState() {
  try { localStorage.setItem(LS_IDX, cur); localStorage.setItem(LS_TIME, audio.currentTime); } catch (_) {}
}
setInterval(savePlaybackState, 5000);

async function restorePlaybackState() {
  try {
    const idx  = parseInt(localStorage.getItem(LS_IDX), 10);
    const time = parseFloat(localStorage.getItem(LS_TIME));
    if (isNaN(idx) || idx < 0 || idx >= playlist.length) return;

    cur = idx;
    const t = playlist[cur];
    audio.src    = t.src;
    audio.volume = parseFloat(volSlider.value);
    if (pbVolSlider) pbVolSlider.value = volSlider.value;

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

    updateTrackActive(cur);
    setMediaMetadata(t.title, t.artist, t.cover + '?v=' + Date.now());
    getArtworkDataURI(t.cover).then(d => { if (cur === idx) setMediaMetadata(t.title, t.artist, d); });
    setPlayState(false);
  } catch (_) {}
}

/* ═══════════════════════════════════════════════════════════
   ARTWORK
═══════════════════════════════════════════════════════════ */
function coverToCanvasDataURI(coverPath, uniqueSeed) {
  return new Promise((resolve) => {
    const SIZE = 256, canvas = document.createElement('canvas');
    canvas.width = canvas.height = SIZE;
    const ctx = canvas.getContext('2d'), img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0, SIZE, SIZE);
      const px = uniqueSeed % (SIZE - 2) + 1, py = Math.floor(uniqueSeed / SIZE) % (SIZE - 2) + 1;
      ctx.fillStyle = `rgba(${(uniqueSeed*7)&0xFF},${(uniqueSeed*13)&0xFF},${(uniqueSeed*17)&0xFF},0.004)`;
      ctx.fillRect(px, py, 1, 1);
      try { resolve(canvas.toDataURL('image/png')); } catch (_) { img.onerror(); }
    };
    img.onerror = () => {
      const track = playlist[cur] || {};
      ctx.fillStyle = track.color || '#1a1a1a';
      ctx.fillRect(0, 0, SIZE, SIZE);
      const initials = (track.title || '?').split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();
      ctx.fillStyle = 'rgba(255,255,255,0.85)';
      ctx.font = `bold ${SIZE * 0.36}px sans-serif`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(initials, SIZE / 2, SIZE / 2);
      ctx.fillStyle = `rgba(${uniqueSeed&0xFF},${(uniqueSeed>>8)&0xFF},0,0.004)`;
      ctx.fillRect(uniqueSeed % SIZE, (uniqueSeed % 100) + 1, 1, 1);
      resolve(canvas.toDataURL('image/png'));
    };
    img.src = coverPath + '?v=' + uniqueSeed;
  });
}

async function getArtworkDataURI(coverPath) {
  const seed = (Date.now() + coverPath.split('').reduce((a, c) => (a * 31 + c.charCodeAt(0)) | 0, 0)) & 0x7FFFFFFF;
  return coverToCanvasDataURI(coverPath, seed);
}

/* ═══════════════════════════════════════════════════════════
   MEDIA SESSION
═══════════════════════════════════════════════════════════ */
function setMediaMetadata(title, artist, artSrc) {
  if (!('mediaSession' in navigator)) return;
  navigator.mediaSession.metadata = new MediaMetadata({
    title, artist, album: 'Akhil Music',
    artwork: artSrc ? [{ src: artSrc, sizes: '256x256', type: 'image/png' }] : [],
  });
}

function pushPositionState() {
  if (!('mediaSession' in navigator) || !audio.duration || isNaN(audio.duration)) return;
  try {
    navigator.mediaSession.setPositionState({
      duration: audio.duration,
      playbackRate: audio.playbackRate || 1,
      position: Math.max(0, Math.min(audio.currentTime, audio.duration))
    });
  } catch (_) {}
}

function initMediaSession() {
  if (!('mediaSession' in navigator)) return;
  const ms = navigator.mediaSession;
  ms.setActionHandler('play',          () => { audio.play().then(() => { acquireWakeLock(); setPlayState(true); ms.playbackState = 'playing'; }); });
  ms.setActionHandler('pause',         () => { audio.pause(); setPlayState(false); ms.playbackState = 'paused'; releaseWakeLock(); savePlaybackState(); });
  ms.setActionHandler('previoustrack', () => { audio.currentTime > 3 ? (audio.currentTime = 0) : loadPlay(cur - 1); });
  ms.setActionHandler('nexttrack',     () => loadPlay(cur + 1));
  ms.setActionHandler('seekbackward',  d  => { audio.currentTime = Math.max(0, audio.currentTime - (d.seekOffset || 10)); pushPositionState(); });
  ms.setActionHandler('seekforward',   d  => { audio.currentTime = Math.min(audio.duration || Infinity, audio.currentTime + (d.seekOffset || 10)); pushPositionState(); });
  ms.setActionHandler('seekto',        d  => { if (d.seekTime !== undefined && audio.duration) { audio.currentTime = d.seekTime; pushPositionState(); } });
  try { ms.setActionHandler('stop', () => { audio.pause(); audio.currentTime = 0; setPlayState(false); ms.playbackState = 'none'; releaseWakeLock(); savePlaybackState(); }); } catch (_) {}
}

/* ═══════════════════════════════════════════════════════════
   TRACK ACTIVE STATE
═══════════════════════════════════════════════════════════ */
function updateTrackActive(activeIndex) {
  document.querySelectorAll('.track-item').forEach((row, i) => {
    row.classList.toggle('active', i === activeIndex);
  });
}

function updateTrackPlayBtn(activeIndex, isPlaying) {
  document.querySelectorAll('.track-item').forEach((row, i) => {
    const btn = row.querySelector('.t-play-btn');
    if (!btn) return;
    const isActive = i === activeIndex;
    if (isActive && isPlaying) {
      btn.innerHTML = ICON_PAUSE;
      btn.setAttribute('aria-label', 'Pause ' + playlist[i].title);
    } else {
      btn.innerHTML = ICON_PLAY;
      btn.setAttribute('aria-label', 'Play ' + playlist[i].title);
    }
  });
}

/* ═══════════════════════════════════════════════════════════
   WAVEFORM
═══════════════════════════════════════════════════════════ */
function setWaveState(isPlaying) {
  if (heroWave) heroWave.classList.toggle('paused', !isPlaying);
}

/* ═══════════════════════════════════════════════════════════
   PREWARM COVERS
═══════════════════════════════════════════════════════════ */
function prewarmCovers(fromIndex) {
  for (let i = 1; i <= 3; i++) {
    const img = new Image();
    img.src = playlist[(fromIndex + i) % playlist.length].cover;
  }
}

/* ═══════════════════════════════════════════════════════════
   BUILD TRACK LIST
═══════════════════════════════════════════════════════════ */
function buildTrackList() {
  tracksList.innerHTML = '';
  playlist.forEach((track, i) => {
    const row     = document.createElement('div');
    row.className = 'track-item';
    row.id        = `track-${i}`;
    row.dataset.idx = i;
    row.innerHTML = `
      <div class="t-num-wrap">
        <span class="t-num">${String(i + 1).padStart(2, '0')}</span>
        <div class="t-eq" aria-hidden="true"><span></span><span></span><span></span></div>
      </div>
      <div class="t-thumb">
        <img src="${track.cover}" alt="${track.title}" loading="lazy" onerror="this.style.display='none'"/>
      </div>
      <div class="t-info">
        <div class="t-title">${track.title}</div>
        <div class="t-artist">${track.artist}</div>
      </div>
      <div class="t-actions">
        <span class="t-dur" id="dur-${i}">—:——</span>
        <button class="t-play-btn" aria-label="Play ${track.title}">${ICON_PLAY}</button>
      </div>`;
    row.addEventListener('click', () => { i === cur ? togglePlay() : loadPlay(i); });
    tracksList.appendChild(row);
    prefetchDuration(track.src, i);
  });
}

/* ═══════════════════════════════════════════════════════════
   PREFETCH DURATIONS
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
   BUILD STATS
═══════════════════════════════════════════════════════════ */
function buildStats() {
  if (aboutStats) {
    aboutStats.innerHTML = `
      <div><div class="stat-num">${playlist.length}</div><div class="stat-label">Tracks</div></div>
      <div><div class="stat-num">∞</div><div class="stat-label">Feelings</div></div>
      <div><div class="stat-num">1</div><div class="stat-label">Artist</div></div>`;
  }
  if (chipTracks) chipTracks.textContent = playlist.length;
  const tc = document.getElementById('trackCount');
  if (tc) tc.textContent = `${playlist.length} tracks`;
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
   SCROLL TO ACTIVE TRACK
═══════════════════════════════════════════════════════════ */
function scrollToActive(index) {
  const el = document.getElementById(`track-${index}`);
  if (el) {
    setTimeout(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 200);
  }
}

/* ═══════════════════════════════════════════════════════════
   LOAD & PLAY
═══════════════════════════════════════════════════════════ */
async function loadPlay(index) {
  if (index < 0) index = playlist.length - 1;
  if (index >= playlist.length) index = 0;

  cur = index;
  const t = playlist[cur];

  audio.src    = t.src;
  audio.volume = parseFloat(volSlider.value);

  // Now-playing card
  nowStrip.classList.add('visible');
  nowCoverImg.src       = t.cover;
  nowTitle.textContent  = t.title;
  nowArtist.textContent = t.artist;

  // Player bar
  playerBar.classList.add('show');
  pbCoverImg.src       = t.cover;
  pbTitle.textContent  = t.title;
  pbArtist.textContent = t.artist;

  // Active track highlight
  updateTrackActive(cur);
  scrollToActive(cur);

  setMediaMetadata(t.title, t.artist, t.cover + '?v=' + Date.now());
  audio.play().catch(() => setPlayState(false));
  prewarmCovers(cur);
  getArtworkDataURI(t.cover).then(d => { if (cur === index) setMediaMetadata(t.title, t.artist, d); });
}

/* ═══════════════════════════════════════════════════════════
   SET PLAY STATE
═══════════════════════════════════════════════════════════ */
function setPlayState(isPlaying) {
  playing = isPlaying;
  mainPlayBtn.classList.toggle('playing', isPlaying);
  pbPlay.classList.toggle('playing', isPlaying);
  setWaveState(isPlaying);
  updateTrackPlayBtn(cur, isPlaying);
}

/* ═══════════════════════════════════════════════════════════
   TOGGLE
═══════════════════════════════════════════════════════════ */
function togglePlay() {
  if (cur === -1) { loadPlay(0); return; }
  if (playing) {
    audio.pause(); setPlayState(false);
  } else {
    audio.play().then(() => { acquireWakeLock(); setPlayState(true); });
  }
}

/* ═══════════════════════════════════════════════════════════
   CONTROLS
═══════════════════════════════════════════════════════════ */
mainPlayBtn.addEventListener('click', togglePlay);
pbPlay.addEventListener('click',      togglePlay);

prevBtn.addEventListener('click', () => { audio.currentTime > 3 ? (audio.currentTime = 0) : loadPlay(cur - 1); });
nextBtn.addEventListener('click', () => loadPlay(cur + 1));
pbPrev.addEventListener('click',  () => { audio.currentTime > 3 ? (audio.currentTime = 0) : loadPlay(cur - 1); });
pbNext.addEventListener('click',  () => loadPlay(cur + 1));

document.getElementById('playAllBtn').addEventListener('click', () => {
  loadPlay(0);
  document.getElementById('songs').scrollIntoView({ behavior: 'smooth' });
});

/* ═══════════════════════════════════════════════════════════
   AUDIO EVENTS
═══════════════════════════════════════════════════════════ */
audio.addEventListener('play', () => {
  if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'playing';
  setPlayState(true); acquireWakeLock(); savePlaybackState();
});

audio.addEventListener('timeupdate', () => {
  if (!audio.duration) return;
  const pct = (audio.currentTime / audio.duration) * 100;
  progFill.style.width       = pct + '%';
  progDot.style.left         = pct + '%';
  pbProgFill.style.width     = pct + '%';
  timeCur.textContent        = fmt(audio.currentTime);
  pushPositionState();
});

audio.addEventListener('loadedmetadata', () => {
  timeTot.textContent = fmt(audio.duration);
  pushPositionState();
});

audio.addEventListener('ended', () => { savePlaybackState(); loadPlay(cur + 1); });

audio.addEventListener('pause', () => {
  if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'paused';
  pushPositionState(); setPlayState(false); savePlaybackState(); releaseWakeLock();
});

/* ═══════════════════════════════════════════════════════════
   SEEK
═══════════════════════════════════════════════════════════ */
function seekTo(clientX, el) {
  const r = el.getBoundingClientRect();
  const pct = Math.max(0, Math.min(1, (clientX - r.left) / r.width));
  if (audio.duration) { audio.currentTime = pct * audio.duration; pushPositionState(); }
}

progTrack.addEventListener('click', e => seekTo(e.clientX, progTrack));
let dragging = false;
progTrack.addEventListener('mousedown', () => { dragging = true; });
document.addEventListener('mousemove', e  => { if (dragging) seekTo(e.clientX, progTrack); });
document.addEventListener('mouseup',   ()  => { dragging = false; });
progTrack.addEventListener('touchstart', e => seekTo(e.touches[0].clientX, progTrack), { passive: true });
progTrack.addEventListener('touchmove',  e => seekTo(e.touches[0].clientX, progTrack), { passive: true });

/* ═══════════════════════════════════════════════════════════
   VOLUME — synced
═══════════════════════════════════════════════════════════ */
function setVolume(v) {
  audio.volume    = v;
  volSlider.value = v;
  if (pbVolSlider) pbVolSlider.value = v;
  updateVolUI(volSlider);
  if (pbVolSlider) updateVolUI(pbVolSlider);
}

function updateVolUI(slider) {
  const v = slider.value * 100;
  slider.style.background =
    `linear-gradient(to right, var(--rose) ${v}%, rgba(255,255,255,0.09) ${v}%)`;
}

volSlider.addEventListener('input', () => setVolume(parseFloat(volSlider.value)));
if (pbVolSlider) pbVolSlider.addEventListener('input', () => setVolume(parseFloat(pbVolSlider.value)));
updateVolUI(volSlider);
if (pbVolSlider) updateVolUI(pbVolSlider);

/* ═══════════════════════════════════════════════════════════
   KEYBOARD
═══════════════════════════════════════════════════════════ */
document.addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT') return;
  if (e.code === 'Space')      { e.preventDefault(); togglePlay(); }
  if (e.code === 'ArrowRight') loadPlay(cur + 1);
  if (e.code === 'ArrowLeft')  { audio.currentTime > 3 ? (audio.currentTime = 0) : loadPlay(cur - 1); }
});

/* ═══════════════════════════════════════════════════════════
   MOBILE NAV TOGGLE
═══════════════════════════════════════════════════════════ */
const navToggle = document.getElementById('navToggle');
const nav       = document.querySelector('nav');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const open = nav.style.display === 'flex';
    nav.style.display = open ? 'none' : 'flex';
    nav.style.position = 'absolute';
    nav.style.top = 'var(--hh)';
    nav.style.left = '0'; nav.style.right = '0';
    nav.style.flexDirection = 'column';
    nav.style.background = 'rgba(8,8,8,0.98)';
    nav.style.padding = '20px 24px';
    nav.style.borderBottom = '1px solid rgba(201,149,108,0.12)';
    nav.style.backdropFilter = 'blur(40px)';
    nav.style.gap = '20px';
    nav.style.zIndex = '499';
  });
}

/* ═══════════════════════════════════════════════════════════
   SERVICE WORKER
═══════════════════════════════════════════════════════════ */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js').catch(() => {});
}

/* ═══════════════════════════════════════════════════════════
   HELPER
═══════════════════════════════════════════════════════════ */
function fmt(s) {
  if (isNaN(s) || s == null) return '0:00';
  return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
}

/* ═══════════════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════════════ */
buildTrackList();
buildStats();
initMediaSession();
restorePlaybackState();