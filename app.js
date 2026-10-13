/* ── SERVICE WORKER REGISTRATION ── */
/* Must be at the very top so it registers as early as possible */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .then(reg => console.log('[SW] Registered, scope:', reg.scope))
      .catch(err => console.warn('[SW] Failed:', err));
  });
}

/* ─── PLAYLIST (loaded from songs.json) ──────── */
let playlist = [];

/* ─── STATE ─────────────────────────────────── */
let cur = -1, playing = false, shuffleOn = false, repeatMode = 0;
let favourites = new Set(), recentlyPlayed = [];
let currentView = 'home', isGridView = false;
let searchQuery = '', sortMode = 'default';
let shuffleQueue = [], shufflePos = 0;
let isMuted = false, prevVol = 0.85, wakeLock = null;
let displayedList = [...playlist.keys()];
let fsIsOpen = false;

/* ── PWA Install prompt — captured early ── */
let _pwaPrompt = null;
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  _pwaPrompt = e;
  showInstallBtn();
});
window.addEventListener('appinstalled', () => {
  _pwaPrompt = null;
  hideInstallBtn();
  console.log('[PWA] Installed!');
});

function showInstallBtn() {
  let btn = document.getElementById('pwaInstallBtn');
  if (!btn) {
    btn = document.createElement('button');
    btn.id        = 'pwaInstallBtn';
    btn.className = 'install-btn';
    btn.innerHTML = '⬇ Install App';
    btn.addEventListener('click', async () => {
      if (!_pwaPrompt) return;
      _pwaPrompt.prompt();
      const { outcome } = await _pwaPrompt.userChoice;
      console.log('[PWA] Choice:', outcome);
      _pwaPrompt = null;
      hideInstallBtn();
    });
    document.body.appendChild(btn);
  }
  btn.style.display = 'fix';
}
function hideInstallBtn() {
  const btn = document.getElementById('pwaInstallBtn');
  if (btn) btn.style.display = 'none';
}

const I_PLAY  = `<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;
const I_PAUSE = `<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;
const $ = id => document.getElementById(id);

/* ─── DOM ────────────────────────────────────── */
const audio        = $('audio');
const sidebar      = $('sidebar');
const sbOverlay    = $('sbOverlay');
const mobileMenuBtn= $('mobileMenuBtn');
const mainPlayBtn  = $('mainPlayBtn');
const prevBtn      = $('prevBtn');
const nextBtn      = $('nextBtn');
const shuffleBtn   = $('shuffleBtn');
const repeatBtn    = $('repeatBtn');
const topShuffleBtn= $('topShuffleBtn');
const topRepeatBtn = $('topRepeatBtn');
const playerBar    = $('playerBar');
const pbProgFill   = $('pbProgFill');
const pbCoverImg   = $('pbCoverImg');
const pbTitle      = $('pbTitle');
const pbArtist     = $('pbArtist');
const pbArt        = $('pbArt');
const pbClickArea  = $('pbClickArea');
const pb_heart     = $('playerFavBtn');
const progTrack    = $('progTrack');
const progFill     = $('progFill');
const progDot      = $('progDot');
const timeCur      = $('timeCur');
const timeTot      = $('timeTot');
const volSlider    = $('volSlider');
const muteBtn      = $('muteBtn');
const queueBtn     = $('queueBtn');
const queuePanel   = $('queuePanel');
const queueClose   = $('queueClose');
const queueList    = $('queueList');
const heroWave     = $('heroWave');
const heroBg       = $('heroBg');
const tracksList   = $('tracksList');
const favList      = $('favList');
const popularList  = $('popularList');
const homeTrackList= $('homeTrackList');
const recentCards  = $('recentCards');
const featuredCards= $('featuredCards');
const favEmpty     = $('favEmpty');
const favTlHead    = $('favTlHead');
const favBadge     = $('favBadge');
const favSubtitle  = $('favSubtitle');
const songsSubtitle= $('songsSubtitle');
const aboutStats   = $('aboutStats');
const aboutBg      = $('aboutBg');
const sortSelect   = $('sortSelect');
const listViewBtn  = $('listViewBtn');
const gridViewBtn  = $('gridViewBtn');
const sidebarSearch= $('sidebarSearch');
const topbarSearch = $('topbarSearch');
const themeToggleBtn=$('themeToggleBtn');
const themeLabel   = $('themeLabel');
const hcTracks     = $('hcTracks');
const toast        = $('toast');

/* Fullscreen elements */
const fsOverlay    = $('fsOverlay');
const fsBg         = $('fsBg');
const fsArtwork    = $('fsArtwork');
const fsArtworkImg = $('fsArtworkImg');
const fsSongTitle  = $('fsSongTitle');
const fsSongArtist = $('fsSongArtist');
const fsFavBtn     = $('fsFavBtn');
const fsProgressBar= $('fsProgressBar');
const fsProgressFill=$('fsProgressFill');
const fsProgressThumb=$('fsProgressThumb');
const fsTimeCur    = $('fsTimeCur');
const fsTimeTot    = $('fsTimeTot');
const fsShuffleBtn = $('fsShuffleBtn');
const fsPrevBtn    = $('fsPrevBtn');
const fsPlayBtn    = $('fsPlayBtn');
const fsNextBtn    = $('fsNextBtn');
const fsRepeatBtn  = $('fsRepeatBtn');
const fsCloseBtn   = $('fsCloseBtn');
const fsQueueList  = $('fsQueueList');
const fsVolSlider  = $('fsVolSlider');
const fsDragHandle = $('fsDragHandle');

audio.setAttribute('playsinline','');
audio.setAttribute('webkit-playsinline','');

/* ══════════════════════════════════════════════
   FULLSCREEN PLAYER
══════════════════════════════════════════════ */

function openFullscreen() {
  if (cur < 0) return;
  fsIsOpen = true;
  fsOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  syncFSToCurrentSong();
  buildFSQueue();
}

function closeFullscreen() {
  fsOverlay.classList.add('closing');
  setTimeout(() => {
    fsOverlay.classList.remove('open','closing');
    fsIsOpen = false;
    document.body.style.overflow = '';
    fsOverlay.style.transform = '';
    fsOverlay.style.transition = '';
  }, 400);
}

function syncFSToCurrentSong() {
  if (cur < 0 || !playlist[cur]) return;
  const t = playlist[cur];
  if (fsBg) fsBg.style.backgroundImage = `url(${t.cover})`;
  if (fsArtworkImg && fsArtworkImg.dataset.cur !== String(cur)) {
    fsArtworkImg.dataset.cur = cur;
    fsArtwork.classList.add('art-pop');
    setTimeout(() => fsArtwork && fsArtwork.classList.remove('art-pop'), 400);
    fsArtworkImg.src = t.cover;
    fsArtworkImg.onerror = () => { fsArtworkImg.src = 'images/ak01.png'; };
  }
  if (fsSongTitle)  fsSongTitle.textContent  = t.title;
  if (fsSongArtist) fsSongArtist.textContent = t.artist;
  if (fsFavBtn)     fsFavBtn.classList.toggle('faved', favourites.has(cur));
  if (fsShuffleBtn) fsShuffleBtn.classList.toggle('on', shuffleOn);
  if (fsRepeatBtn) {
    fsRepeatBtn.classList.toggle('on', repeatMode > 0);
    fsRepeatBtn.classList.toggle('repeat-1', repeatMode === 2);
  }
  if (fsPlayBtn) {
    fsPlayBtn.classList.toggle('playing', playing);
    fsArtwork.classList.toggle('playing', playing);
  }
  if (fsVolSlider) { fsVolSlider.value = audio.volume; updateFSVolUI(); }
  if (audio.duration && fsTimeTot) fsTimeTot.textContent = fmt(audio.duration);
}

function buildFSQueue() {
  if (!fsQueueList) return;
  fsQueueList.innerHTML = '';
  const total = playlist.length;
  for (let i = 1; i <= Math.min(15, total - 1); i++) {
    const idx = (cur + i) % total;
    const t = playlist[idx];
    const el = document.createElement('div');
    el.className = 'fs-queue-item';
    el.innerHTML = `
      <img src="${t.cover}" alt="${t.title}" loading="lazy" onerror="this.src='images/ak01.png'"/>
      <div class="fs-queue-info">
        <div class="fs-q-title">${t.title}</div>
        <div class="fs-q-artist">${t.artist}</div>
      </div>
      <span class="fs-q-num">${i}</span>`;
    el.addEventListener('click', () => {
      loadPlay(idx);
      setTimeout(() => { syncFSToCurrentSong(); buildFSQueue(); }, 60);
    });
    fsQueueList.appendChild(el);
  }
}

function updateFSVolUI() {
  if (!fsVolSlider) return;
  const v = parseFloat(fsVolSlider.value) * 100;
  fsVolSlider.style.background = `linear-gradient(to right,rgba(16,185,129,0.85) ${v}%,rgba(255,255,255,0.12) ${v}%)`;
}

/* ── Swipe-down to close fullscreen ── */
(function() {
  let sy = 0, cy = 0, dragging = false;
  if (!fsOverlay) return;
  fsOverlay.addEventListener('touchstart', e => {
    sy = cy = e.touches[0].clientY; dragging = false;
  }, { passive: true });
  fsOverlay.addEventListener('touchmove', e => {
    if (!fsIsOpen) return;
    if (e.target.closest('.fs-queue-list,.fs-progress-bar')) return;
    cy = e.touches[0].clientY;
    const dy = cy - sy;
    if (dy > 6) {
      dragging = true;
      fsOverlay.classList.add('no-anim');
      fsOverlay.style.transform = `translateY(${dy * 0.52}px)`;
    }
  }, { passive: true });
  fsOverlay.addEventListener('touchend', () => {
    if (!dragging) return;
    dragging = false;
    fsOverlay.classList.remove('no-anim');
    const dy = cy - sy;
    if (dy > 80) {
      closeFullscreen();
    } else {
      fsOverlay.style.transition = 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1)';
      fsOverlay.style.transform = '';
      setTimeout(() => { fsOverlay.style.transition = ''; }, 320);
    }
  }, { passive: true });
})();
 
/* ── FS progress bar seek ── */
(function() {
  if (!fsProgressBar) return;
  let drag = false;
  function fsScrub(clientX) {
    const r = fsProgressBar.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (clientX - r.left) / r.width));
    if (audio.duration) { audio.currentTime = pct * audio.duration; pushPositionState(); }
  }
  fsProgressBar.addEventListener('click',     e => { fsScrub(e.clientX); });
  fsProgressBar.addEventListener('mousedown', e => { drag = true; fsProgressBar.classList.add('dragging'); fsScrub(e.clientX); });
  fsProgressBar.addEventListener('touchstart', e => { drag = true; fsProgressBar.classList.add('dragging'); fsScrub(e.touches[0].clientX); e.preventDefault(); }, { passive: false });
  fsProgressBar.addEventListener('touchmove', e => { if (drag) { e.preventDefault(); fsScrub(e.touches[0].clientX); } }, { passive: false });
  fsProgressBar.addEventListener('touchend',  () => { drag = false; fsProgressBar.classList.remove('dragging'); });
  document.addEventListener('mousemove', e => { if (drag) fsScrub(e.clientX); });
  document.addEventListener('mouseup',   () => { drag = false; fsProgressBar.classList.remove('dragging'); });
})();

/* ── Open FS on pb-left click ── */
function onPBAreaClick(e) {
  if (e.target.closest('.pb-heart, .pbc, .pb-vol, .pb-track, .vol-range')) return;
  if (cur < 0) return;
  openFullscreen();
}

/* ══════════════════════════════════════════════
   ENHANCED MINI SEEK BAR
══════════════════════════════════════════════ */
(function() {
  if (!progTrack) return;
  let drag = false;
  function scrub(clientX) {
    const r = progTrack.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (clientX - r.left) / r.width));
    if (audio.duration) { audio.currentTime = pct * audio.duration; pushPositionState(); }
  }
  progTrack.addEventListener('click',     e => scrub(e.clientX));
  progTrack.addEventListener('mousedown', e => { drag = true; progTrack.classList.add('dragging'); scrub(e.clientX); e.stopPropagation(); });
  progTrack.addEventListener('touchstart', e => { drag = true; progTrack.classList.add('dragging'); scrub(e.touches[0].clientX); e.preventDefault(); }, { passive: false });
  progTrack.addEventListener('touchmove', e => { if (drag) { e.preventDefault(); scrub(e.touches[0].clientX); } }, { passive: false });
  progTrack.addEventListener('touchend', () => { drag = false; progTrack.classList.remove('dragging'); });
  document.addEventListener('mousemove', e => { if (drag) scrub(e.clientX); });
  document.addEventListener('mouseup',   () => { drag = false; progTrack.classList.remove('dragging'); });
})();

/* ══════════════════════════════════════════════
   MEDIA SESSION
══════════════════════════════════════════════ */
function setRichMediaMetadata(t) {
  if (!('mediaSession' in navigator) || !t) return;
  const base = window.location.origin + window.location.pathname.replace(/\/[^/]*$/, '/');
  const art  = t.cover.startsWith('http') ? t.cover : base + t.cover;
  navigator.mediaSession.metadata = new MediaMetadata({
    title: t.title, artist: t.artist, album: 'Akhil — Music',
    artwork: [
      { src: art, sizes: '96x96',   type: 'image/png' },
      { src: art, sizes: '192x192', type: 'image/png' },
      { src: art, sizes: '512x512', type: 'image/png' },
    ]
  });
}
 
function registerMediaActions() {
  if (!('mediaSession' in navigator)) return;
  const ms = navigator.mediaSession;
  const safe = (a,fn) => { try { ms.setActionHandler(a,fn); } catch(_){} };
  safe('play',          () => { audio.play().then(() => setPlayState(true)); acquireWakeLock(); });
  safe('pause',         () => { audio.pause(); setPlayState(false); });
  safe('previoustrack', () => { audio.currentTime > 3 ? (audio.currentTime=0) : loadPlay(getPrevIdx()); });
  safe('nexttrack',     () => { const n=getNextIdx(); if(n>=0) loadPlay(n); });
  safe('seekbackward',  d  => { audio.currentTime = Math.max(0, audio.currentTime-(d.seekOffset||10)); pushPositionState(); });
  safe('seekforward',   d  => { audio.currentTime = Math.min(audio.duration||Infinity, audio.currentTime+(d.seekOffset||10)); pushPositionState(); });
  safe('seekto',        d  => { if(d.seekTime!==undefined && audio.duration){ audio.currentTime=d.seekTime; pushPositionState(); } });
}

/* ─── INIT ───────────────────────────────────── */
function init() {
  loadPrefs();
  displayedList = [...playlist.keys()];
  buildTrackList(tracksList, displayedList);
  buildHomeTrackList();
  buildCards();
  buildAboutStats();
  buildPopularList();
  buildQueueList();
  if (hcTracks)      hcTracks.textContent      = playlist.length;
  if (songsSubtitle) songsSubtitle.textContent = `${playlist.length} tracks · By Akhil`;
  registerMediaActions();
  restoreState();
  bindEvents();
  updateFavBadge();
}

/* ─── PREFS ──────────────────────────────────── */
function loadPrefs() {
  try {
    const dark = localStorage.getItem('akhil_theme') !== 'light';
    if (!dark) { document.body.classList.add('light'); if(themeLabel) themeLabel.textContent='Dark Mode'; }
    favourites = new Set(JSON.parse(localStorage.getItem('akhil_favs') || '[]'));
    recentlyPlayed = JSON.parse(localStorage.getItem('akhil_recent') || '[]').filter(i => i < playlist.length);
    shuffleOn  = localStorage.getItem('akhil_shuffle') === '1';
    repeatMode = parseInt(localStorage.getItem('akhil_repeat') || '0');
    const vol  = parseFloat(localStorage.getItem('akhil_vol') || '0.85');
    audio.volume = vol;
    if (volSlider) volSlider.value = vol;
    updateVolUI();
  } catch(_) {}
}

function savePrefs() {
  try {
    localStorage.setItem('akhil_favs',    JSON.stringify([...favourites]));
    localStorage.setItem('akhil_recent',  JSON.stringify(recentlyPlayed.slice(0,20)));
    localStorage.setItem('akhil_shuffle', shuffleOn ? '1' : '0');
    localStorage.setItem('akhil_repeat',  String(repeatMode));
    localStorage.setItem('akhil_vol',     String(audio.volume));
  } catch(_) {}
}

/* ─── BUILD TRACKS ───────────────────────────── */
function makeTrackItem(idx, listNum, container) {
  const t = playlist[idx];
  const row = document.createElement('div');
  row.className = 'track-item';
  row.id = `ti-${container}-${idx}`;
  row.dataset.idx = idx;
  if (idx === cur) row.classList.add('active');
  const isFaved = favourites.has(idx);
  row.innerHTML = `
    <div class="ti-num-wrap">
      <span class="ti-num">${String(listNum).padStart(2,'0')}</span>
      <div class="ti-eq"><span></span><span></span><span></span></div>
      <button class="ti-play-btn" aria-label="${idx===cur&&playing?'Pause':'Play'} ${t.title}">
        ${idx===cur&&playing ? I_PAUSE : I_PLAY}
      </button>
    </div>
    <div class="ti-thumb"><img src="${t.cover}" alt="${t.title}" loading="lazy" onerror="this.style.display='none'"/></div>
    <div class="ti-info">
      <div class="ti-title">${t.title}</div>
      <div class="ti-artist">${t.artist}</div>
    </div>
    <span class="ti-dur" id="dur-${container}-${idx}">—:——</span>
    <div class="ti-actions">
      <button class="ti-fav-btn${isFaved?' faved':''}" data-idx="${idx}" aria-label="${isFaved?'Remove from':'Add to'} favourites">
        <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
      </button>
    </div>`;
  row.addEventListener('click', e => {
    if (e.target.closest('.ti-fav-btn')) { toggleFav(idx); return; }
    if (e.target.closest('.ti-play-btn')) { idx===cur ? togglePlay() : loadPlay(idx); return; }
    idx===cur ? togglePlay() : loadPlay(idx);
  });
  prefetchDuration(t.src, idx, container);
  return row;
}

function buildTrackList(container, indices) {
  if (!container) return;
  container.innerHTML = '';
  indices.forEach((idx,pos) => container.appendChild(makeTrackItem(idx,pos+1,container.id)));
}

function buildHomeTrackList() {
  if (!homeTrackList) return;
  homeTrackList.innerHTML = '';
  playlist.slice(0,8).forEach((_,i) => homeTrackList.appendChild(makeTrackItem(i,i+1,'home')));
}

function buildCards() {
  const rIdx = recentlyPlayed.length ? recentlyPlayed.slice(0,8) : [...Array(8).keys()];
  buildCardRow(recentCards, rIdx);
  buildCardRow(featuredCards, [...Array(8).keys()].map(i => (i+12)%playlist.length));
}

function buildCardRow(container, indices) {
  if (!container) return;
  container.innerHTML = '';
  indices.forEach(idx => {
    if (idx >= playlist.length) return;
    const t = playlist[idx];
    const card = document.createElement('div');
    card.className = 'music-card' + (idx===cur ? ' is-active' : '');
    card.dataset.idx = idx;
    card.innerHTML = `
      <div class="music-card-thumb">
        <img src="${t.cover}" alt="${t.title}" loading="lazy" onerror="this.style.display='none'"/>
        <div class="music-card-play"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
      </div>
      <div class="music-card-info">
        <div class="music-card-title">${t.title}</div>
        <div class="music-card-artist">${t.artist}</div>
      </div>`;
    card.addEventListener('click', () => loadPlay(idx));
    container.appendChild(card);
  });
}

function buildAboutStats() {
  if (!aboutStats) return;
  aboutStats.innerHTML = `
    <div class="about-stat-item"><div class="astat-num">${playlist.length}</div><div class="astat-label">Tracks</div></div>
    <div class="about-stat-item"><div class="astat-num">∞</div><div class="astat-label">Feelings</div></div>
    <div class="about-stat-item"><div class="astat-num">1</div><div class="astat-label">Artist</div></div>
    <div class="about-stat-item"><div class="astat-num">${favourites.size}</div><div class="astat-label">Favourited</div></div>`;
}

function buildPopularList() {
  if (!popularList) return;
  [0,1,2,3,4,5].forEach((idx,pos) => popularList.appendChild(makeTrackItem(idx,pos+1,'popular')));
}

function buildQueueList() {
  if (!queueList) return;
  queueList.innerHTML = '';
  getQueue().forEach((idx,pos) => {
    const t = playlist[idx];
    const item = document.createElement('div');
    item.className = 'qp-item' + (idx===cur ? ' active' : '');
    item.innerHTML = `
      <div class="qp-thumb"><img src="${t.cover}" alt="${t.title}" loading="lazy" onerror="this.style.display='none'"/></div>
      <div class="qp-info">
        <div class="qp-title${idx===cur?' active-qp':''}">${t.title}</div>
        <div class="qp-artist">${t.artist}</div>
      </div>
      <span class="qp-num">${pos+1}</span>`;
    item.addEventListener('click', () => { loadPlay(idx); queuePanel.classList.remove('open'); });
    queueList.appendChild(item);
  });
}

function getQueue() {
  if (shuffleOn && shuffleQueue.length) return shuffleQueue;
  return playlist.map((_,i) => i);
}

/* ─── FAVOURITES ─────────────────────────────── */
function toggleFav(idx) {
  if (favourites.has(idx)) { favourites.delete(idx); showToast('Removed from Favourites'); }
  else { favourites.add(idx); showToast('Added to Favourites ♥'); }
  updateFavBadge();
  updateFavButtons(idx);
  buildFavView();
  buildAboutStats();
  if (fsFavBtn && idx===cur) fsFavBtn.classList.toggle('faved', favourites.has(idx));
  savePrefs();
}

function updateFavBadge() {
  const n = favourites.size;
  if (favBadge) { favBadge.textContent = n; favBadge.style.display = n ? 'flex' : 'none'; }
  if (favSubtitle) favSubtitle.textContent = `${n} song${n!==1?'s':''} liked`;
}

function updateFavButtons(idx) {
  document.querySelectorAll(`.ti-fav-btn[data-idx="${idx}"]`).forEach(b => b.classList.toggle('faved',favourites.has(idx)));
  if (pb_heart && idx===cur) pb_heart.classList.toggle('faved',favourites.has(cur));
}

function buildFavView() {
  if (!favList) return;
  const ids = [...favourites];
  favList.innerHTML = '';
  if (ids.length === 0) {
    if (favEmpty)   favEmpty.style.display  = 'flex';
    if (favTlHead)  favTlHead.style.display = 'none';
    if (favSubtitle) favSubtitle.textContent= '0 songs liked';
    return;
  }
  if (favEmpty)  favEmpty.style.display  = 'none';
  if (favTlHead) favTlHead.style.display = 'flex';
  ids.forEach((idx,pos) => favList.appendChild(makeTrackItem(idx,pos+1,'fav')));
  if (favSubtitle) favSubtitle.textContent = `${ids.length} song${ids.length!==1?'s':''} liked`;
}

/* ─── SEARCH & SORT ──────────────────────────── */
function applySearch(q) { searchQuery = q.toLowerCase().trim(); applyFilter(); }
function applySort(m)   { sortMode = m; applyFilter(); }
function applyFilter() {
  let indices = playlist.map((_,i) => i);
  if (searchQuery) indices = indices.filter(i => playlist[i].title.toLowerCase().includes(searchQuery) || playlist[i].artist.toLowerCase().includes(searchQuery));
  if (sortMode === 'az') indices.sort((a,b) => playlist[a].title.localeCompare(playlist[b].title));
  else if (sortMode === 'za') indices.sort((a,b) => playlist[b].title.localeCompare(playlist[a].title));
  displayedList = indices;
  buildTrackList(tracksList, indices);
  if (isGridView) tracksList.classList.add('grid-view');
  if (songsSubtitle) {
    let label = `${indices.length} of ${playlist.length} tracks · By Akhil`;
    if (sortMode === 'az') label += ' · Sorted A→Z';
    else if (sortMode === 'za') label += ' · Sorted Z→A';
    songsSubtitle.textContent = label;
  }
}

/* ─── DURATION ───────────────────────────────── */
const durationCache = new Map();

function prefetchDuration(src, idx, container) {
  const cached = durationCache.get(src);
  if (cached !== undefined) {
    const el = document.getElementById(`dur-${container}-${idx}`);
    if (el) el.textContent = cached;
    return;
  }
  const tmp = new Audio(); tmp.preload = 'none'; tmp.src = src;
  tmp.addEventListener('loadedmetadata', () => {
    const d = fmt(tmp.duration);
    durationCache.set(src, d);
    const el = document.getElementById(`dur-${container}-${idx}`);
    if (el) el.textContent = d;
    tmp.remove();
  }, { once: true });
  tmp.addEventListener('error', () => {
    const el = document.getElementById(`dur-${container}-${idx}`);
    if (el) el.textContent = '—:——';
    tmp.remove();
  }, { once: true });
}

/* ─── VIEWS ──────────────────────────────────── */
function switchView(name) {
  currentView = name;
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const t = document.getElementById(`view-${name}`);
  if (t) { t.classList.add('active'); t.scrollTop = 0; }
  document.querySelectorAll('.nav-item').forEach(el => el.classList.toggle('active', el.dataset.view===name));
  document.querySelectorAll('.mn-item').forEach(el => el.classList.toggle('active', el.dataset.view===name));
  if (name === 'favorites') buildFavView();
  if (name === 'about')     updateAboutBg();
}

function updateAboutBg() {
  if (!aboutBg) return;
  const cover = cur >= 0 ? playlist[cur].cover : 'images/ak01.png';
  aboutBg.style.cssText = `background-image:url(${cover});background-size:cover;background-position:center;filter:blur(40px) saturate(1.2) brightness(0.3)`;
}

function updateHeroBg(idx) {
  if (!heroBg || idx < 0) return;
  const c = playlist[idx].cover;
  heroBg.style.backgroundImage = `url(${c})`;
  heroBg.style.backgroundSize  = 'cover';
  heroBg.style.backgroundPosition = 'center';
  heroBg.style.filter = 'blur(60px) saturate(1.3) brightness(0.25)';
  heroBg.style.transform = 'scale(1.1)';
}

/* ─── SHUFFLE ────────────────────────────────── */
function buildShuffleQueue() {
  const ids = playlist.map((_,i) => i);
  for (let i = ids.length-1; i > 0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    [ids[i],ids[j]] = [ids[j],ids[i]];
  }
  const p = ids.indexOf(cur);
  if (p > 0) [ids[0],ids[p]] = [ids[p],ids[0]];
  shuffleQueue = ids; shufflePos = 0;
}

function toggleShuffle() {
  shuffleOn = !shuffleOn;
  if (shuffleOn && cur >= 0) buildShuffleQueue();
  [shuffleBtn,topShuffleBtn,fsShuffleBtn].forEach(b => { if(b) b.classList.toggle('on',shuffleOn); });
  showToast(shuffleOn ? 'Shuffle On' : 'Shuffle Off');
  buildQueueList();
  savePrefs();
}

function toggleRepeat() {
  repeatMode = (repeatMode+1)%3;
  const labels = ['Repeat Off','Repeat All','Repeat One'];
  [repeatBtn,fsRepeatBtn].forEach(b => {
    if (!b) return;
    b.classList.toggle('on', repeatMode > 0);
    b.classList.toggle('repeat-1', repeatMode === 2);
  });
  showToast(labels[repeatMode]);
  savePrefs();
}

function getNextIdx() {
  if (repeatMode===2) return cur;
  if (shuffleOn && shuffleQueue.length) { shufflePos=(shufflePos+1)%shuffleQueue.length; return shuffleQueue[shufflePos]; }
  const n = cur+1;
  if (n >= playlist.length) return repeatMode===1 ? 0 : -1;
  return n;
}

function getPrevIdx() {
  if (shuffleOn && shuffleQueue.length) { shufflePos=(shufflePos-1+shuffleQueue.length)%shuffleQueue.length; return shuffleQueue[shufflePos]; }
  return cur > 0 ? cur-1 : (repeatMode===1 ? playlist.length-1 : 0);
}

/* ─── LOAD & PLAY ────────────────────────────── */
async function loadPlay(idx) {
  if (idx < 0 || idx >= playlist.length) return;
  const prev = cur; cur = idx;
  const t = playlist[cur];
  audio.src    = t.src;
  audio.volume = parseFloat(volSlider ? volSlider.value : '0.85');
  pbTitle.textContent  = t.title;
  pbArtist.textContent = t.artist;
  if (pbCoverImg.src !== absURL(t.cover)) {
    pbCoverImg.classList.add('swapping');
    setTimeout(() => pbCoverImg.classList.remove('swapping'), 360);
    pbCoverImg.src     = t.cover;
    pbCoverImg.onerror = () => { pbCoverImg.src = 'images/ak01.png'; };
  }
  updateHeroBg(cur);
  updateAllActiveStates(prev);
  if (shuffleOn && shuffleQueue.length) {
    const pos = shuffleQueue.indexOf(cur);
    if (pos >= 0) shufflePos = pos; else buildShuffleQueue();
  }
  recentlyPlayed = [cur,...recentlyPlayed.filter(i => i!==cur)].slice(0,20);
  buildCardRow(recentCards, recentlyPlayed.slice(0,8));
  if (pb_heart) pb_heart.classList.toggle('faved', favourites.has(cur));
  buildQueueList();
  setRichMediaMetadata(t);
  registerMediaActions();
  if (fsIsOpen) { syncFSToCurrentSong(); buildFSQueue(); }
  audio.play().catch(() => setPlayState(false));
  preloadNextCovers(cur);
  try { localStorage.setItem('akhil_cur', cur); } catch(_) {}
  savePrefs();
}

function absURL(path) {
  if (!path || path.startsWith('http')) return path || '';
  return window.location.origin + window.location.pathname.replace(/\/[^/]*$/,'/') + path;
}

function updateAllActiveStates(prev) {
  if (prev >= 0) {
    document.querySelectorAll(`.track-item[data-idx="${prev}"]`).forEach(el => {
      el.classList.remove('active');
      const pb = el.querySelector('.ti-play-btn'); if(pb) pb.innerHTML = I_PLAY;
    });
    document.querySelectorAll('.music-card').forEach(el => {
      if (parseInt(el.dataset.idx)===prev) el.classList.remove('is-active');
    });
  }
  document.querySelectorAll(`.track-item[data-idx="${cur}"]`).forEach(el => {
    el.classList.add('active');
    const pb = el.querySelector('.ti-play-btn'); if(pb) pb.innerHTML = I_PAUSE;
    el.scrollIntoView({ behavior:'smooth', block:'nearest' });
  });
  document.querySelectorAll('.music-card').forEach(el => {
    if (parseInt(el.dataset.idx)===cur) el.classList.add('is-active');
  });
}

/* ─── PLAY STATE ─────────────────────────────── */
function setPlayState(isPlaying) {
  playing = isPlaying;
  mainPlayBtn.classList.toggle('playing', isPlaying);
  document.querySelectorAll(`.track-item[data-idx="${cur}"] .ti-play-btn`).forEach(pb => { pb.innerHTML = isPlaying ? I_PAUSE : I_PLAY; });
  if (heroWave) heroWave.classList.toggle('paused', !isPlaying);
  if (fsPlayBtn)  { fsPlayBtn.classList.toggle('playing', isPlaying); if(fsArtwork) fsArtwork.classList.toggle('playing', isPlaying); }
  if ('mediaSession' in navigator) navigator.mediaSession.playbackState = isPlaying ? 'playing' : 'paused';
}

function togglePlay() {
  if (cur < 0) { loadPlay(0); return; }
  if (playing) { audio.pause(); setPlayState(false); }
  else { audio.play().then(() => { acquireWakeLock(); setPlayState(true); }); }
}

/* ─── AUDIO EVENTS ──────────────────────────── */
audio.addEventListener('play',    () => { setPlayState(true); acquireWakeLock(); });
audio.addEventListener('pause',   () => { setPlayState(false); releaseWakeLock(); saveState(); });
audio.addEventListener('waiting', () => { mainPlayBtn.style.opacity = '0.6'; });
audio.addEventListener('canplay', () => { mainPlayBtn.style.opacity = '1'; });
audio.addEventListener('ended', () => {
  saveState();
  const n = getNextIdx();
  if (n >= 0) loadPlay(n); else setPlayState(false);
});

audio.addEventListener('timeupdate', () => {
  if (!audio.duration) return;
  const pct = (audio.currentTime / audio.duration) * 100;
  if (progFill)    progFill.style.width    = pct + '%';
  if (progDot)     progDot.style.left      = pct + '%';
  if (pbProgFill)  pbProgFill.style.width  = pct + '%';
  if (timeCur)     timeCur.textContent     = fmt(audio.currentTime);
  if (fsIsOpen) {
    if (fsProgressFill)  fsProgressFill.style.width  = pct + '%';
    if (fsProgressThumb) fsProgressThumb.style.left  = pct + '%';
    if (fsTimeCur)       fsTimeCur.textContent        = fmt(audio.currentTime);
  }
  pushPositionState();
});

audio.addEventListener('loadedmetadata', () => {
  if (timeTot)   timeTot.textContent   = fmt(audio.duration);
  if (fsTimeTot) fsTimeTot.textContent = fmt(audio.duration);
  pushPositionState();
});

/* ─── VOLUME ────────────────────────────────── */
function updateVolUI() {
  if (!volSlider) return;
  const v = volSlider.value * 100;
  volSlider.style.background = `linear-gradient(to right, var(--acc) ${v}%, rgba(255,255,255,0.09) ${v}%)`;
  const high = muteBtn ? muteBtn.querySelector('.vi-high') : null;
  const off  = muteBtn ? muteBtn.querySelector('.vi-off')  : null;
  if (high && off) {
    if (isMuted || parseFloat(volSlider.value)===0) { high.style.display='none'; off.style.display='block'; }
    else { high.style.display='block'; off.style.display='none'; }
  }
}

if (volSlider) {
  volSlider.addEventListener('input', () => {
    audio.volume = parseFloat(volSlider.value); isMuted = false; updateVolUI();
    if (fsVolSlider) { fsVolSlider.value = audio.volume; updateFSVolUI(); }
    savePrefs();
  });
}

if (muteBtn) {
  muteBtn.addEventListener('click', () => {
    if (isMuted) { audio.volume = prevVol||0.85; volSlider.value = audio.volume; isMuted = false; }
    else { prevVol = audio.volume; audio.volume = 0; volSlider.value = 0; isMuted = true; }
    updateVolUI();
    if (fsVolSlider) { fsVolSlider.value = audio.volume; updateFSVolUI(); }
  });
}

if (fsVolSlider) {
  fsVolSlider.value = audio.volume;
  updateFSVolUI();
  fsVolSlider.addEventListener('input', () => {
    audio.volume = parseFloat(fsVolSlider.value); isMuted = false; updateFSVolUI();
    if (volSlider) { volSlider.value = audio.volume; updateVolUI(); }
    savePrefs();
  });
}

/* ─── POSITION STATE ─────────────────────────── */
function pushPositionState() {
  if (!('mediaSession' in navigator) || !audio.duration || isNaN(audio.duration)) return;
  try {
    navigator.mediaSession.setPositionState({
      duration: audio.duration, playbackRate: audio.playbackRate||1,
      position: Math.max(0, Math.min(audio.currentTime, audio.duration))
    });
  } catch(_) {}
}

/* ─── WAKE LOCK ─────────────────────────────── */
async function acquireWakeLock() {
  if (!('wakeLock' in navigator)) return;
  try { if (!wakeLock || wakeLock.released) wakeLock = await navigator.wakeLock.request('screen'); } catch(_) {}
}
async function releaseWakeLock() {
  if (!wakeLock || wakeLock.released) return;
  try { await wakeLock.release(); } catch(_) {}
  wakeLock = null;
}
document.addEventListener('visibilitychange', async () => {
  if (document.visibilityState==='visible' && playing) await acquireWakeLock();
});

/* ─── PERSIST ────────────────────────────────── */
function saveState() {
  try { localStorage.setItem('akhil_cur', cur); localStorage.setItem('akhil_time', audio.currentTime); } catch(_) {}
}
setInterval(saveState, 5000);

async function restoreState() {
  try {
    const idx  = parseInt(localStorage.getItem('akhil_cur'), 10);
    const time = parseFloat(localStorage.getItem('akhil_time'));
    if (isNaN(idx) || idx < 0 || idx >= playlist.length) return;
    cur = idx;
    const t = playlist[cur];
    audio.volume = volSlider ? parseFloat(volSlider.value) : 0.85;
    audio.addEventListener('loadedmetadata', function onMeta() {
      if (!isNaN(time) && time > 5) audio.currentTime = time;
      if (timeTot)   timeTot.textContent   = fmt(audio.duration);
      if (fsTimeTot) fsTimeTot.textContent = fmt(audio.duration);
      pushPositionState();
    }, { once: true });
    audio.src = t.src;
    pbTitle.textContent  = t.title;
    pbArtist.textContent = t.artist;
    pbCoverImg.src       = t.cover;
    if (pb_heart) pb_heart.classList.toggle('faved', favourites.has(cur));
    updateAllActiveStates(-1);
    updateHeroBg(cur);
    setRichMediaMetadata(t);
    setPlayState(false);
  } catch(e) { console.warn('[Restore]', e); }
  if (shuffleOn && cur >= 0) buildShuffleQueue();
  [shuffleBtn,topShuffleBtn,fsShuffleBtn].forEach(b => { if(b) b.classList.toggle('on',shuffleOn); });
  if (repeatBtn) { repeatBtn.classList.toggle('on',repeatMode>0); repeatBtn.classList.toggle('repeat-1',repeatMode===2); }
  if (fsRepeatBtn) { fsRepeatBtn.classList.toggle('on',repeatMode>0); fsRepeatBtn.classList.toggle('repeat-1',repeatMode===2); }
}

/* ─── TOAST ─────────────────────────────────── */
let toastTimer;
function showToast(msg) {
  if (!toast) return;
  toast.textContent = msg; toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

/* ─── KEYBOARD ──────────────────────────────── */
document.addEventListener('keydown', e => {
  const tag = e.target.tagName;
  if (tag==='INPUT'||tag==='SELECT'||tag==='TEXTAREA') return;
  if (e.code==='Space')      { e.preventDefault(); togglePlay(); }
  if (e.code==='ArrowRight') { const n=getNextIdx(); if(n>=0) loadPlay(n); }
  if (e.code==='ArrowLeft')  { audio.currentTime>3 ? (audio.currentTime=0) : loadPlay(getPrevIdx()); }
  if (e.code==='KeyS')       toggleShuffle();
  if (e.code==='KeyR')       toggleRepeat();
  if (e.code==='KeyM')       muteBtn && muteBtn.click();
  if (e.code==='Escape' && fsIsOpen) closeFullscreen();
  if (e.code==='ArrowUp')   { audio.volume=Math.min(1,audio.volume+0.05); if(volSlider) volSlider.value=audio.volume; updateVolUI(); }
  if (e.code==='ArrowDown') { audio.volume=Math.max(0,audio.volume-0.05); if(volSlider) volSlider.value=audio.volume; updateVolUI(); }
});

/* ─── THEME ──────────────────────────────────── */
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light');
    if (themeLabel) themeLabel.textContent = isLight ? 'Dark Mode' : 'Light Mode';
    try { localStorage.setItem('akhil_theme', isLight ? 'light' : 'dark'); } catch(_) {}
  });
}

/* ─── BIND EVENTS ────────────────────────────── */
function bindEvents() {
  if (pbClickArea) pbClickArea.addEventListener('click', onPBAreaClick);
  if (mainPlayBtn) mainPlayBtn.addEventListener('click', e => { e.stopPropagation(); togglePlay(); });
  if (prevBtn)     prevBtn.addEventListener('click',     e => { e.stopPropagation(); audio.currentTime>3?(audio.currentTime=0):loadPlay(getPrevIdx()); });
  if (nextBtn)     nextBtn.addEventListener('click',     e => { e.stopPropagation(); const n=getNextIdx(); if(n>=0)loadPlay(n); });
  if (shuffleBtn)  shuffleBtn.addEventListener('click',  e => { e.stopPropagation(); toggleShuffle(); });
  if (repeatBtn)   repeatBtn.addEventListener('click',   e => { e.stopPropagation(); toggleRepeat(); });
  if (topShuffleBtn) topShuffleBtn.addEventListener('click', toggleShuffle);
  if (topRepeatBtn)  topRepeatBtn.addEventListener('click',  toggleRepeat);
  if (pb_heart)    pb_heart.addEventListener('click',    e => { e.stopPropagation(); if(cur>=0) toggleFav(cur); });
  if (queueBtn)    queueBtn.addEventListener('click',    e => { e.stopPropagation(); queuePanel.classList.toggle('open'); buildQueueList(); });
  if (queueClose)  queueClose.addEventListener('click',  () => queuePanel.classList.remove('open'));
  if (fsCloseBtn)   fsCloseBtn.addEventListener('click',   closeFullscreen);
  if (fsFavBtn)     fsFavBtn.addEventListener('click',     () => { if(cur>=0) toggleFav(cur); });
  if (fsPlayBtn)    fsPlayBtn.addEventListener('click',    togglePlay);
  if (fsPrevBtn)    fsPrevBtn.addEventListener('click',    () => { audio.currentTime>3?(audio.currentTime=0):loadPlay(getPrevIdx()); });
  if (fsNextBtn)    fsNextBtn.addEventListener('click',    () => { const n=getNextIdx(); if(n>=0)loadPlay(n); });
  if (fsShuffleBtn) fsShuffleBtn.addEventListener('click', toggleShuffle);
  if (fsRepeatBtn)  fsRepeatBtn.addEventListener('click',  toggleRepeat);
  const playAllBtn = $('playAllBtn');
  if (playAllBtn) playAllBtn.addEventListener('click', () => { loadPlay(0); switchView('songs'); });
  const shufflePlayBtn = $('shufflePlayBtn');
  if (shufflePlayBtn) shufflePlayBtn.addEventListener('click', () => {
    if (!shuffleOn) toggleShuffle();
    loadPlay(Math.floor(Math.random()*playlist.length));
    switchView('songs');
  });
  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', () => { sidebar.classList.toggle('open'); sbOverlay.classList.toggle('show'); });
  if (sbOverlay)     sbOverlay.addEventListener('click',     () => { sidebar.classList.remove('open'); sbOverlay.classList.remove('show'); });
  [sidebarSearch, topbarSearch].forEach(inp => {
    if (!inp) return;
    inp.addEventListener('input', e => {
      applySearch(e.target.value);
      if (sidebarSearch&&sidebarSearch!==inp) sidebarSearch.value = e.target.value;
      if (topbarSearch &&topbarSearch !==inp) topbarSearch.value  = e.target.value;
      switchView('songs');
    });
  });
  if (sortSelect) sortSelect.addEventListener('change', () => applySort(sortSelect.value));
  if (listViewBtn) listViewBtn.addEventListener('click', () => { isGridView=false; tracksList.classList.remove('grid-view'); listViewBtn.classList.add('active'); if(gridViewBtn)gridViewBtn.classList.remove('active'); });
  if (gridViewBtn) gridViewBtn.addEventListener('click', () => { isGridView=true; tracksList.classList.add('grid-view'); gridViewBtn.classList.add('active'); if(listViewBtn)listViewBtn.classList.remove('active'); });
  document.querySelectorAll('.nav-item[data-view]').forEach(el => {
    el.addEventListener('click', e => { e.preventDefault(); switchView(el.dataset.view); sidebar.classList.remove('open'); sbOverlay.classList.remove('show'); });
  });
  document.querySelectorAll('.mn-item[data-view]').forEach(el => {
    el.addEventListener('click', e => { e.preventDefault(); switchView(el.dataset.view); });
  });
  document.querySelectorAll('.link-btn[data-view]').forEach(el => {
    el.addEventListener('click', () => switchView(el.dataset.view));
  });
}

/* ─── HELPER ─────────────────────────────────── */
function fmt(s) {
  if (isNaN(s)||s==null) return '0:00';
  return `${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,'0')}`;
}

/* ══════════════════════════════════════════════
   ENHANCED PROFESSIONAL UI v2
══════════════════════════════════════════════ */

/* ── Image Load Handler ── */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('img').forEach(img => {
    if (img.complete && img.src) img.classList.add('loaded');
    else img.addEventListener('load', () => img.classList.add('loaded'));
    img.addEventListener('error', () => img.classList.add('loaded'));
  });
});
const observeNewImages = () => {
  document.querySelectorAll('img:not(.observed)').forEach(img => {
    img.classList.add('observed');
    if (img.complete && img.src) img.classList.add('loaded');
    else img.addEventListener('load', () => img.classList.add('loaded'));
    img.addEventListener('error', () => img.classList.add('loaded'));
  });
};

/* ── Skeleton Loading ── */
function showSkeleton(container, count, type = 'track') {
  if (!container) return;
  container.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    if (type === 'track') {
      el.className = 'skeleton-track';
      el.innerHTML = `
        <div class="skeleton sk-num"></div>
        <div class="skeleton sk-thumb"></div>
        <div class="skeleton sk-title"></div>
        <div class="skeleton sk-dur"></div>
        <div></div>`;
    } else if (type === 'card') {
      el.className = 'skeleton-card';
      el.innerHTML = `
        <div class="skeleton sk-img"></div>
        <div class="skeleton sk-text"></div>`;
    }
    container.appendChild(el);
  }
}

/* ── Ripple Effect ── */
function addRipple(e) {
  const btn = e.currentTarget;
  const ripple = document.createElement('span');
  ripple.className = 'ripple-effect';
  const rect = btn.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
  ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
  ripple.style.position = 'absolute';
  ripple.style.borderRadius = '50%';
  ripple.style.background = 'rgba(255,255,255,0.3)';
  ripple.style.transform = 'scale(0)';
  ripple.style.animation = 'rippleAnim 0.6s ease-out';
  ripple.style.pointerEvents = 'none';
  btn.style.position = 'relative';
  btn.style.overflow = 'hidden';
  btn.appendChild(ripple);
  ripple.addEventListener('animationend', () => ripple.remove());
}
document.addEventListener('click', e => {
  const btn = e.target.closest('.btn-primary, .btn-ghost, .pbc.main, .fs-ctrl-play, .nav-item, .topbar-icon-btn, .theme-toggle-btn');
  if (btn) addRipple(e);
});

/* ── Image Preload Helper ── */
function preloadNextCovers(idx) {
  for (let i = 1; i <= 4; i++) {
    const nextIdx = (idx + i) % playlist.length;
    const img = new Image();
    img.src = playlist[nextIdx].cover;
    img.addEventListener('load', () => img.classList.add('loaded'));
  }
}

/* ── Override switchView to refresh images + playlist ── */
const origSwitchView = switchView;
switchView = function(name) {
  origSwitchView(name);
  setTimeout(observeNewImages, 50);
  if (name === 'playlists') {
    currentPlaylistView = null;
    buildPlView();
  }
};

/* ── Skeleton-first loading for initial render only ── */
let _initialBuild = true;

const origBuildTrackList = buildTrackList;
buildTrackList = function(container, indices) {
  if (!container) return;
  if (!_initialBuild) { origBuildTrackList(container, indices); observeNewImages(); return; }
  showSkeleton(container, Math.min(indices.length, 10), 'track');
  requestAnimationFrame(() => {
    setTimeout(() => {
      origBuildTrackList(container, indices);
      observeNewImages();
    }, 300);
  });
};

const origBuildCardRow = buildCardRow;
buildCardRow = function(container, indices) {
  if (!container) return;
  if (!_initialBuild) { origBuildCardRow(container, indices); observeNewImages(); return; }
  showSkeleton(container, Math.min(indices.length, 6), 'card');
  requestAnimationFrame(() => {
    setTimeout(() => {
      origBuildCardRow(container, indices);
      observeNewImages();
    }, 350);
  });
};

const origBuildHomeTrackList = buildHomeTrackList;
buildHomeTrackList = function() {
  if (!homeTrackList) return;
  if (!_initialBuild) { origBuildHomeTrackList(); observeNewImages(); return; }
  showSkeleton(homeTrackList, 6, 'track');
  requestAnimationFrame(() => {
    setTimeout(() => {
      origBuildHomeTrackList();
      observeNewImages();
    }, 300);
  });
};

/* ── Enhanced now-playing sync with artwork state ── */
const origSyncFS = syncFSToCurrentSong;
syncFSToCurrentSong = function() {
  origSyncFS();
  if (cur >= 0) preloadNextCovers(cur);
};

/* ══════════════════════════════════════════════
   FULLY-FLEDGED FEATURES
══════════════════════════════════════════════ */

/* ── Play Count Tracking ── */
let playCounts = {};
try { playCounts = JSON.parse(localStorage.getItem('akhil_plays') || '{}'); } catch(_) {}

function recordPlay(idx) {
  playCounts[idx] = (playCounts[idx] || 0) + 1;
  try { localStorage.setItem('akhil_plays', JSON.stringify(playCounts)); } catch(_) {}
}

const origLoadPlay = loadPlay;
loadPlay = async function(idx) {
  await origLoadPlay(idx);
  recordPlay(idx);
};

/* ── Audio Error Handling ── */
audio.addEventListener('error', () => {
  const errMsg = audio.error ? 
    ['', 'Playback aborted', 'Network error — file may be missing', 'Decode error — unsupported format', 'No supported source'] 
    [audio.error.code] || 'Unknown error' : 'Failed to load';
  showToast(`⚠ ${errMsg}`);
  setPlayState(false);
  if (mainPlayBtn) mainPlayBtn.style.opacity = '1';
});

/* ── Search Empty State ── */
const origApplyFilter = applyFilter;
applyFilter = function() {
  origApplyFilter();
  if (!tracksList) return;
  const hasItems = tracksList.querySelector('.track-item');
  if (!hasItems && searchQuery) {
    tracksList.innerHTML = `
      <div class="empty-state" style="padding:60px 32px">
        <div class="empty-icon"><svg viewBox="0 0 24 24" style="width:40px;height:40px"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></div>
        <p style="font-size:0.9rem;color:var(--tx-2)">No results for "<strong>${searchQuery}</strong>"</p>
        <span style="font-size:0.75rem;color:var(--tx-3)">Try a different search term</span>
      </div>`;
  }
};

/* ── PLAYLIST MANAGEMENT ── */
let playlists = [];
let currentPlaylistView = null; // which playlist we're viewing details of
let pendingAddIdx = -1; // track index waiting to be added

function loadPlaylists() {
  try {
    playlists = JSON.parse(localStorage.getItem('akhil_playlists') || '[]');
  } catch(_) { playlists = []; }
  updatePlBadge();
}

function savePlaylists() {
  try { localStorage.setItem('akhil_playlists', JSON.stringify(playlists)); } catch(_) {}
  updatePlBadge();
  buildPlView();
}

function updatePlBadge() {
  const badge = $('plBadge');
  if (badge) { badge.textContent = playlists.length; badge.style.display = playlists.length ? 'flex' : 'none'; }
  const sub = $('plSubtitle');
  if (sub) sub.textContent = playlists.length ? `${playlists.length} playlist${playlists.length>1?'s':''}` : 'Create and manage your custom playlists';
}

function createPlaylist(name) {
  if (!name || !name.trim()) return false;
  if (playlists.some(p => p.name.toLowerCase() === name.trim().toLowerCase())) {
    showToast('A playlist with that name already exists');
    return false;
  }
  playlists.push({ name: name.trim(), songs: [], created: Date.now() });
  savePlaylists();
  showToast(`Playlist "${name.trim()}" created`);
  return true;
}

function deletePlaylist(idx) {
  if (idx < 0 || idx >= playlists.length) return;
  const name = playlists[idx].name;
  playlists.splice(idx, 1);
  savePlaylists();
  if (currentPlaylistView === idx) currentPlaylistView = null;
  showToast(`Playlist "${name}" deleted`);
}

function renamePlaylist(idx, newName) {
  if (idx < 0 || idx >= playlists.length || !newName || !newName.trim()) return;
  playlists[idx].name = newName.trim();
  savePlaylists();
}

function addToPlaylist(plIdx, songIdx) {
  if (plIdx < 0 || plIdx >= playlists.length) return;
  if (playlists[plIdx].songs.includes(songIdx)) {
    showToast('Already in this playlist');
    return;
  }
  playlists[plIdx].songs.push(songIdx);
  savePlaylists();
  showToast(`Added to "${playlists[plIdx].name}"`);
}

function removeFromPlaylist(plIdx, songIdx) {
  if (plIdx < 0 || plIdx >= playlists.length) return;
  playlists[plIdx].songs = playlists[plIdx].songs.filter(s => s !== songIdx);
  savePlaylists();
}

/* ── Build Playlists View ── */
function buildPlView() {
  const container = $('plList');
  const empty = $('plEmpty');
  if (!container) return;
  container.innerHTML = '';
  if (playlists.length === 0) {
    if (empty) empty.style.display = 'flex';
    return;
  }
  if (empty) empty.style.display = 'none';
  playlists.forEach((pl, i) => {
    const card = document.createElement('div');
    card.className = 'pl-card';
    card.innerHTML = `
      <div class="pl-card-icon"><svg viewBox="0 0 24 24"><path d="M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z"/></svg></div>
      <div class="pl-card-name">${pl.name}</div>
      <div class="pl-card-count">${pl.songs.length} song${pl.songs.length!==1?'s':''}</div>
      <div class="pl-card-actions">
        <button class="pl-card-action rename-pl" data-idx="${i}" title="Rename">✎</button>
        <button class="pl-card-action del" data-idx="${i}" title="Delete">✕</button>
      </div>`;
    card.addEventListener('click', e => {
      if (e.target.closest('.pl-card-action')) return;
      currentPlaylistView = i;
      buildPlDetailView(i);
    });
    container.appendChild(card);
  });
  container.querySelectorAll('.rename-pl').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const idx = parseInt(btn.dataset.idx);
      const old = playlists[idx].name;
      const newName = prompt('Rename playlist:', old);
      if (newName && newName.trim() && newName.trim() !== old) {
        renamePlaylist(idx, newName);
      }
    });
  });
  container.querySelectorAll('.pl-card-action.del').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const idx = parseInt(btn.dataset.idx);
      if (confirm(`Delete playlist "${playlists[idx].name}"?`)) {
        deletePlaylist(idx);
      }
    });
  });
}

/* ── Build Playlist Detail View ── */
function buildPlDetailView(plIdx) {
  if (plIdx < 0 || plIdx >= playlists.length) return;
  const pl = playlists[plIdx];
  const container = $('plList');
  const empty = $('plEmpty');
  const viewHeader = document.querySelector('#view-playlists .view-header');
  if (!container) return;
  if (empty) empty.style.display = 'none';
  container.innerHTML = `
    <div class="pl-detail-header">
      <div class="pl-detail-icon"><svg viewBox="0 0 24 24"><path d="M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z"/></svg></div>
      <div class="pl-detail-info">
        <div class="pl-detail-name">${pl.name}</div>
        <div class="pl-detail-meta">${pl.songs.length} song${pl.songs.length!==1?'s':''}</div>
      </div>
    </div>
    <button class="pl-back-btn"><svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg> Back to Playlists</button>
    <div class="tl-header-row" id="plTlHead" style="display:${pl.songs.length?'grid':'none'}">
      <span class="tlh-num">#</span><span class="tlh-info">Title</span>
      <span class="tlh-dur"><svg viewBox="0 0 24 24" width="13"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg></span>
      <span class="tlh-fav"></span>
    </div>
    <div id="plTracksList"></div>`;
  const backBtn = container.querySelector('.pl-back-btn');
  if (backBtn) backBtn.addEventListener('click', () => { currentPlaylistView = null; buildPlView(); });
  const tContainer = $('plTracksList');
  if (tContainer) {
    if (pl.songs.length === 0) {
      tContainer.innerHTML = `<div class="empty-state" style="padding:40px 16px"><p style="font-size:0.85rem;color:var(--tx-3)">No songs in this playlist yet</p><span style="font-size:0.72rem;color:var(--tx-4)">Add songs from the Songs view</span></div>`;
    } else {
      pl.songs.forEach((idx, pos) => {
        if (idx >= playlist.length) return;
        const row = makeTrackItem(idx, pos + 1, 'pl');
        row.addEventListener('contextmenu', e => {
          e.preventDefault();
          if (confirm(`Remove "${playlist[idx].title}" from this playlist?`)) {
            removeFromPlaylist(plIdx, idx);
            buildPlDetailView(plIdx);
            showToast('Removed from playlist');
          }
        });
        tContainer.appendChild(row);
      });
    }
  }
}

/* ── Show Add to Playlist Modal ── */
function showAddToPlaylist(songIdx) {
  pendingAddIdx = songIdx;
  const modal = $('atpModal');
  const list = $('atpList');
  const nameEl = $('atpSongName');
  if (!modal || !list) return;
  nameEl.textContent = `Add "${playlist[songIdx]?.title || 'track'}" to:`;
  list.innerHTML = '';
  if (playlists.length === 0) {
    list.innerHTML = '<p style="font-size:0.78rem;color:var(--tx-3);padding:12px;text-align:center">No playlists yet. Create one below.</p>';
  } else {
    playlists.forEach((pl, i) => {
      const item = document.createElement('div');
      item.className = 'atp-item';
      const added = pl.songs.includes(songIdx);
      item.innerHTML = `<svg viewBox="0 0 24 24"><path d="M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z"/></svg><span>${pl.name} ${added ? '(added)' : ''}</span>`;
      if (added) item.style.opacity = '0.5';
      else item.addEventListener('click', () => { addToPlaylist(i, songIdx); modal.classList.remove('open'); });
      list.appendChild(item);
    });
  }
  modal.classList.add('open');
  modal.addEventListener('click', function atpOutClick(e) {
    if (e.target === modal) { modal.classList.remove('open'); modal.removeEventListener('click', atpOutClick); }
  });
}

/* ── Bind Playlist UI ── */
function bindPlaylistUI() {
  const createBtn = $('createPlBtn');
  if (createBtn) createBtn.addEventListener('click', () => {
    const name = prompt('Enter playlist name:');
    if (name && createPlaylist(name) && currentPlaylistView === null) buildPlView();
  });
  const atpClose = $('atpClose');
  if (atpClose) atpClose.addEventListener('click', () => { $('atpModal')?.classList.remove('open'); });
  const atpNew = $('atpNew');
  if (atpNew) atpNew.addEventListener('click', () => {
    const modal = $('atpModal');
    modal?.classList.remove('open');
    setTimeout(() => {
      const name = prompt('Enter new playlist name:');
      if (name && createPlaylist(name) && pendingAddIdx >= 0) {
        const newIdx = playlists.length - 1;
        addToPlaylist(newIdx, pendingAddIdx);
        pendingAddIdx = -1;
        buildPlView();
      }
    }, 300);
  });
}

/* ── Override init to add new features ── */
const origInit = init;
init = function() {
  loadPlaylists();
  bindPlaylistUI();
  origInit();
  buildPlView();
  // Add to playlist option on track right-click
  document.addEventListener('contextmenu', e => {
    const track = e.target.closest('.track-item');
    if (track && track.dataset.idx !== undefined) {
      e.preventDefault();
      showAddToPlaylist(parseInt(track.dataset.idx));
    }
  });
  // Long-press for mobile add to playlist
  let lpTimer = null;
  document.addEventListener('touchstart', e => {
    const track = e.target.closest('.track-item');
    if (track && track.dataset.idx !== undefined) {
      lpTimer = setTimeout(() => {
        navigator.vibrate?.(50);
        showAddToPlaylist(parseInt(track.dataset.idx));
      }, 600);
    }
  }, { passive: true });
  document.addEventListener('touchend', () => { clearTimeout(lpTimer); }, { passive: true });
  document.addEventListener('touchmove', () => { clearTimeout(lpTimer); }, { passive: true });
};

/* ── SLEEP TIMER ── */
let sleepTimerId = null;
let sleepTimerEnd = null;

function startSleepTimer(minutes) {
  cancelSleepTimer();
  sleepTimerEnd = Date.now() + minutes * 60000;
  sleepTimerId = setTimeout(() => {
    audio.pause();
    setPlayState(false);
    showToast('Sleep timer: playback stopped');
    cancelSleepTimer();
  }, minutes * 60000);
  showToast(`Sleep timer set for ${minutes} min`);
  updateStIndicator();
}

function cancelSleepTimer() {
  if (sleepTimerId) { clearTimeout(sleepTimerId); sleepTimerId = null; }
  sleepTimerEnd = null;
  updateStIndicator();
}

function updateStIndicator() {
  const ind = $('stIndicator');
  if (!ind) return;
  if (sleepTimerEnd) {
    ind.classList.add('active');
    ind.title = formatStTime();
  } else {
    ind.classList.remove('active');
    ind.title = '';
  }
}

function formatStTime() {
  if (!sleepTimerEnd) return '';
  const remaining = Math.max(0, Math.floor((sleepTimerEnd - Date.now()) / 60000));
  return `${remaining} min remaining`;
}

// Update sleep timer display every 30s
setInterval(() => {
  if (sleepTimerEnd) {
    if (Date.now() >= sleepTimerEnd) {
      cancelSleepTimer();
    } else {
      updateStIndicator();
    }
  }
}, 30000);

/* ── Bind Sleep Timer UI ── */
function bindSleepTimerUI() {
  const btn = $('sleepTimerBtn');
  const modal = $('stModal');
  const close = $('stClose');
  const cancel = $('stCancel');
  if (!btn || !modal) return;
  btn.addEventListener('click', () => {
    if (sleepTimerEnd) {
      if (confirm('Cancel sleep timer?')) cancelSleepTimer();
      return;
    }
    modal.classList.add('open');
  });
  if (close) close.addEventListener('click', () => modal.classList.remove('open'));
  modal.querySelectorAll('.st-opt').forEach(opt => {
    opt.addEventListener('click', () => {
      const min = parseInt(opt.dataset.min);
      startSleepTimer(min);
      modal.classList.remove('open');
    });
  });
  if (cancel) cancel.addEventListener('click', () => { cancelSleepTimer(); modal.classList.remove('open'); });
  modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('open'); });
}
bindSleepTimerUI();

/* ── Mark initial build complete after all load ── */
setTimeout(() => { _initialBuild = false; }, 2000);

/* ── Load playlist from songs.json then boot ── */
(async function boot() {
  try {
    const res = await fetch('songs.json');
    if (res.ok) {
      playlist = await res.json();
    } else {
      console.warn('[Boot] Failed to fetch songs.json, using empty playlist');
    }
  } catch (e) {
    console.warn('[Boot] Could not load songs.json:', e);
  }
  init();
})();