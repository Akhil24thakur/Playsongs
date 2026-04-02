/* ═══════════════════════════════════════════════
   AKHIL MUSIC — APP v4
   Features: Multi-view · Shuffle · Repeat(0/1/all) ·
   Favourites · Queue panel · Search · Sort ·
   Grid/List view · Media Session · Wake Lock ·
   Persist state · Light/Dark mode · PWA install
═══════════════════════════════════════════════ */

/* ─── PLAYLIST ──────────────────────────────── */
const playlist = [
  { title:'Kitab Likhunga',           artist:'Akhil', src:'songs/Kitab Likhunga.mp3',           cover:'images/Kitab Likhunga.png'          },
  { title:'Ek Baat Reh Gayi Thi',     artist:'Akhil', src:'songs/Ek Baat Reh Gayi Thi.mp3',     cover:'images/Ek Baat Reh Gayi Thi.png'    },
  { title:'Jhanjron Ka Joda',          artist:'Akhil', src:'songs/Jhanjron Ka Joda.mp3',          cover:'images/Jhanjron Ka Joda.png'        },
  { title:'Ek Nazar',                  artist:'Akhil', src:'songs/Ek Nazar.mp3',                  cover:'images/Ek Nazar.png'                },
  { title:'Before Death',              artist:'Akhil', src:'songs/Before Death.mp3',               cover:'images/Before Death.png'            },
  { title:'You Are The Reason',        artist:'Akhil', src:'songs/You Are The Reason.mp3',         cover:'images/You Are The Reason.png'      },
  { title:'Love Song | इतना गहरा',    artist:'Akhil', src:'songs/Love Song  इतना गहरा.mp3',     cover:'images/Love Song  इतना गहरा.png'   },
  { title:'Coffee Talks',              artist:'Akhil', src:'songs/Coffee Talks.mp3',               cover:'images/Coffee Talks.png'            },
  { title:'Beenaam Sa Ishq',           artist:'Akhil', src:'songs/Beenaam Sa Ishq.mp3',            cover:'images/Beenaam Sa Ishq.png'         },
  { title:'Tum Hi Toh Ho',            artist:'Akhil', src:'songs/Tum Hi Toh Ho.mp3',              cover:'images/Tum Hi Toh Ho.png'           },
  { title:'Tu Hi Hai Wajah',          artist:'Akhil', src:'songs/Tu Hi Hai Wajah.mp3',            cover:'images/Tu Hi Hai Wajah.png'         },
  { title:'Silent Love',              artist:'Akhil', src:'songs/Silent Love.mp3',                 cover:'images/Silent Love.png'             },
  { title:'Summer Evening',           artist:'Akhil', src:'songs/summer.mp3',                      cover:'images/summer.png'                  },
  { title:'Lost Love',                artist:'Akhil', src:'songs/Lost Love.mp3',                   cover:'images/Lost Love.png'               },
  { title:'Phela Batein',             artist:'Akhil', src:'songs/batan.mp3',                       cover:'images/batan.png'                   },
  { title:'Stay Away',                artist:'Akhil', src:'songs/Stay away.mp3',                   cover:'images/stay away.png'               },
  { title:'Choti Choti Batan',        artist:'Akhil', src:'songs/batan.mp3',                       cover:'images/batan.png'                   },
  { title:'Karma',                    artist:'Akhil', src:'songs/karma.mp3',                       cover:'images/karma.png'                   },
  { title:'Tere Bina',                artist:'Akhil', src:'songs/Tere Bina.mp3',                   cover:'images/Tere Bina.png'               },
  { title:'Divided Hearts',           artist:'Akhil', src:'songs/div.mp3',                         cover:'images/div.png'                     },
  { title:'Rah Main Kanta',           artist:'Akhil', src:'songs/rah.mp3',                         cover:'images/rah.png'                     },
  { title:'Soul in Simplicity',       artist:'Akhil', src:'songs/Soul in Simplicity.mp3',          cover:'images/simple.png'                  },
  { title:'Tera Sath [Lofi]',         artist:'Akhil', src:'songs/Tera sath lofi.mp3',              cover:'images/TeraSath.jpeg'               },
  { title:'New City',                 artist:'Akhil', src:'songs/new city.mp3',                    cover:'images/ak.png'                      },
  { title:'Vibes with you',           artist:'Akhil', src:'songs/Vibes With You.mp3',              cover:'images/Vibes with you.png'          },
  { title:'Mann Ka Akrosh',           artist:'Akhil', src:'songs/Mann Ka Akrosh.mp3',              cover:'images/Mann Ka Akrosh.png'          },
  { title:'With You',                 artist:'Akhil', src:'songs/WithYou.mp3',                     cover:'images/WithYou.jpeg'                },
  { title:'She Comes In',             artist:'Akhil', src:'songs/She comes in.mp3',                cover:'images/she comes In.png'            },
  { title:'Without You',              artist:'Akhil', src:'songs/WithOut you.mp3',                 cover:'images/WithOut YOU.jpg'             },
  { title:'Because Of You',           artist:'Akhil', src:'songs/Because of You.mp3',              cover:'images/OF you.png'                  },
  { title:'Dont Fight',               artist:'Akhil', src:'songs/Dont Fight.mp3',                  cover:'images/fight.png'                   },
  { title:'Dream With You',           artist:'Akhil', src:'songs/My Dreams.mp3',                   cover:'images/MY Dreams.png'               },
  { title:'Kahani Suno',              artist:'Akhil', src:'songs/kahani.mp3',                      cover:'images/Kahani.png'                  },
  { title:'Dooriyan',                 artist:'Akhil', src:'songs/Dooriyan.mp3',                    cover:'images/Dooriyan.png'                },
  { title:'Samjho Na',                artist:'Akhil', src:'songs/Samjho.mp3',                      cover:'images/Samjho.png'                  },
  { title:'Tera Sath',                artist:'Akhil', src:'songs/TeraSath.mp3',                    cover:'images/TeraSath.jpeg'               },
  { title:'One Sided Love',           artist:'Akhil', src:'songs/One Sided Love.mp3',              cover:'images/One Sided Love.png'          },
  { title:'Majestic',                 artist:'Akhil', src:'songs/Majestic.mp3',                    cover:'images/Majestic.png'                },
  { title:'My Queen',                 artist:'Akhil', src:'songs/My Queen.mp3',                    cover:'images/My Queen.jpeg'               },
  { title:'Winters In Shimla',        artist:'Akhil', src:'songs/Winters In Shimla.mp3',           cover:'images/Shimla.jpg'                  },
  { title:'Meri Dua',                 artist:'Akhil', src:'songs/Meri Dua.mp3',                    cover:'images/meri-dua.jpg'                },
  { title:'Bittersweet Memories',     artist:'Akhil', src:'songs/Bittersweet Memories.mp3',        cover:'images/Bittersweet Memories.jpeg'   },
  { title:'Dil Di Kahani',            artist:'Akhil', src:'songs/Dil Di Kahani.mp3',               cover:'images/Dil Di Kahani.jpeg'          },
  { title:'First Meet',               artist:'Akhil', src:'songs/First Meet.mp3',                  cover:'images/First Meet.jpeg'             },
  { title:'Nature Touch',             artist:'Akhil', src:'songs/Nature Touch.mp3',                cover:'images/Nature Touch.jpeg'           },
  { title:'Pyar Ka Safar',            artist:'Akhil', src:'songs/Pyar Ka Safar.mp3',               cover:'images/pyar ka safat.jpeg'          },
  { title:'Sari Sari Raat',           artist:'Akhil', src:'songs/Sari Sari Raat.mp3',              cover:'images/meri-dua.jpg'                },
  { title:'Tere Bin',                 artist:'Akhil', src:'songs/Tere Bin.mp3',                    cover:'images/tera bina.jpeg'              }
];

/* ─── STATE ─────────────────────────────────── */
let cur       = -1;
let playing   = false;
let shuffleOn = false;
let repeatMode = 0;      // 0=off 1=all 2=one
let favourites = new Set();
let recentlyPlayed = [];
let currentView = 'home';
let isGridView  = false;
let searchQuery = '';
let sortMode    = 'default';
let shuffleQueue = [];
let shufflePos  = 0;
let isMuted     = false;
let prevVol     = 0.85;
let wakeLock    = null;
let displayedList = [...playlist.keys()]; // indices of displayed/filtered tracks

/* ─── SVG ICONS ─────────────────────────────── */
const I_PLAY  = `<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;
const I_PAUSE = `<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;

/* ─── DOM ────────────────────────────────────── */
const $ = id => document.getElementById(id);
const audio       = $('audio');
const sidebar     = $('sidebar');
const sbOverlay   = $('sbOverlay');
const mobileMenuBtn = $('mobileMenuBtn');
const mainPlayBtn = $('mainPlayBtn');
const prevBtn     = $('prevBtn');
const nextBtn     = $('nextBtn');
const shuffleBtn  = $('shuffleBtn');
const repeatBtn   = $('repeatBtn');
const topShuffleBtn = $('topShuffleBtn');
const topRepeatBtn  = $('topRepeatBtn');
const playerBar   = $('playerBar');
const pbProgFill  = $('pbProgFill');
const pbCoverImg  = $('pbCoverImg');
const pbTitle     = $('pbTitle');
const pbArtist    = $('pbArtist');
const pbArt       = $('pbArt');
const pb_heart    = $('playerFavBtn');
const progTrack   = $('progTrack');
const progFill    = $('progFill');
const progDot     = $('progDot');
const timeCur     = $('timeCur');
const timeTot     = $('timeTot');
const volSlider   = $('volSlider');
const muteBtn     = $('muteBtn');
const queueBtn    = $('queueBtn');
const queuePanel  = $('queuePanel');
const queueClose  = $('queueClose');
const queueList   = $('queueList');
const heroWave    = $('heroWave');
const heroBg      = $('heroBg');
const tracksList  = $('tracksList');
const favList     = $('favList');
const popularList = $('popularList');
const homeTrackList = $('homeTrackList');
const recentCards = $('recentCards');
const featuredCards=$('featuredCards');
const favEmpty    = $('favEmpty');
const favTlHead   = $('favTlHead');
const favBadge    = $('favBadge');
const favSubtitle = $('favSubtitle');
const songsSubtitle=$('songsSubtitle');
const aboutStats  = $('aboutStats');
const aboutBg     = $('aboutBg');
const sortSelect  = $('sortSelect');
const listViewBtn = $('listViewBtn');
const gridViewBtn = $('gridViewBtn');
const sidebarSearch=$('sidebarSearch');
const topbarSearch= $('topbarSearch');
const themeToggleBtn=$('themeToggleBtn');
const themeLabel  = $('themeLabel');
const hcTracks    = $('hcTracks');
const toast       = $('toast');

audio.setAttribute('playsinline', '');
audio.setAttribute('webkit-playsinline', '');

/* ─── INIT ───────────────────────────────────── */
function init() {
  loadPrefs();
  buildTrackList(tracksList, displayedList);
  buildHomeTrackList();
  buildCards();
  buildAboutStats();
  buildPopularList();
  buildQueueList();
  if (hcTracks) hcTracks.textContent = playlist.length;
  if (songsSubtitle) songsSubtitle.textContent = `${playlist.length} tracks · By Akhil`;
  initMediaSession();
  restoreState();
  bindEvents();
  updateFavBadge();
}

/* ─── PREFS (theme, volume, shuffle, repeat) ── */
function loadPrefs() {
  try {
    const dark = localStorage.getItem('akhil_theme') !== 'light';
    if (!dark) { document.body.classList.add('light'); if(themeLabel) themeLabel.textContent='Dark Mode'; }

    const fav = JSON.parse(localStorage.getItem('akhil_favs') || '[]');
    favourites = new Set(fav);

    const recent = JSON.parse(localStorage.getItem('akhil_recent') || '[]');
    recentlyPlayed = recent.filter(i => i < playlist.length);

    shuffleOn  = localStorage.getItem('akhil_shuffle') === '1';
    repeatMode = parseInt(localStorage.getItem('akhil_repeat') || '0');

    const vol = parseFloat(localStorage.getItem('akhil_vol') || '0.85');
    audio.volume = vol;
    if (volSlider) volSlider.value = vol;
    updateVolUI();
  } catch(_) {}
}

function savePrefs() {
  try {
    localStorage.setItem('akhil_favs',    JSON.stringify([...favourites]));
    localStorage.setItem('akhil_recent',  JSON.stringify(recentlyPlayed.slice(0, 20)));
    localStorage.setItem('akhil_shuffle', shuffleOn ? '1' : '0');
    localStorage.setItem('akhil_repeat',  String(repeatMode));
    localStorage.setItem('akhil_vol',     String(audio.volume));
  } catch(_) {}
}

/* ─── BUILD TRACK LIST ──────────────────────── */
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
      <button class="ti-play-btn" aria-label="${idx===cur && playing ? 'Pause' : 'Play'} ${t.title}">
        ${idx === cur && playing ? I_PAUSE : I_PLAY}
      </button>
    </div>
    <div class="ti-thumb">
      <img src="${t.cover}" alt="${t.title}" loading="lazy" onerror="this.style.display='none'"/>
    </div>
    <div class="ti-info">
      <div class="ti-title">${t.title}</div>
      <div class="ti-artist">${t.artist}</div>
    </div>
    <span class="ti-dur" id="dur-${container}-${idx}">—:——</span>
    <div class="ti-actions">
      <button class="ti-fav-btn${isFaved?' faved':''}" data-idx="${idx}" aria-label="${isFaved?'Remove from':'Add to'} favourites" title="Favourite">
        <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
      </button>
    </div>`;

  row.addEventListener('click', e => {
    if (e.target.closest('.ti-fav-btn')) { toggleFav(idx); return; }
    if (e.target.closest('.ti-play-btn')) { idx === cur ? togglePlay() : loadPlay(idx); return; }
    idx === cur ? togglePlay() : loadPlay(idx);
  });

  prefetchDuration(t.src, idx, container);
  return row;
}

function buildTrackList(container, indices) {
  if (!container) return;
  container.innerHTML = '';
  indices.forEach((idx, pos) => {
    container.appendChild(makeTrackItem(idx, pos + 1, container.id));
  });
}

function buildHomeTrackList() {
  if (!homeTrackList) return;
  homeTrackList.innerHTML = '';
  const show = playlist.slice(0, 8).map((_,i) => i);
  show.forEach((idx, pos) => {
    homeTrackList.appendChild(makeTrackItem(idx, pos + 1, 'home'));
  });
}

/* ─── CARDS (horizontal scroll) ─────────────── */
function buildCards() {
  // Recently played (from saved or first 6)
  const recentIdx = recentlyPlayed.length ? recentlyPlayed.slice(0, 8) : [...Array(8).keys()];
  buildCardRow(recentCards, recentIdx);

  // Featured: picks 8 tracks starting from index 12
  const featIdx = [...Array(8).keys()].map(i => (i + 12) % playlist.length);
  buildCardRow(featuredCards, featIdx);
}

function buildCardRow(container, indices) {
  if (!container) return;
  container.innerHTML = '';
  indices.forEach(idx => {
    if (idx >= playlist.length) return;
    const t = playlist[idx];
    const card = document.createElement('div');
    card.className = 'music-card' + (idx === cur ? ' is-active' : '');
    card.innerHTML = `
      <div class="music-card-thumb">
        <img src="${t.cover}" alt="${t.title}" loading="lazy" onerror="this.style.display='none'"/>
        <div class="music-card-play">
          <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        </div>
      </div>
      <div class="music-card-info">
        <div class="music-card-title">${t.title}</div>
        <div class="music-card-artist">${t.artist}</div>
      </div>`;
    card.addEventListener('click', () => loadPlay(idx));
    container.appendChild(card);
  });
}

/* ─── ABOUT STATS ────────────────────────────── */
function buildAboutStats() {
  if (!aboutStats) return;
  aboutStats.innerHTML = `
    <div class="about-stat-item"><div class="astat-num">${playlist.length}</div><div class="astat-label">Tracks</div></div>
    <div class="about-stat-item"><div class="astat-num">∞</div><div class="astat-label">Feelings</div></div>
    <div class="about-stat-item"><div class="astat-num">1</div><div class="astat-label">Artist</div></div>
    <div class="about-stat-item"><div class="astat-num">${favourites.size}</div><div class="astat-label">Favourited</div></div>`;
}

/* ─── POPULAR LIST (about page, top 6) ──────── */
function buildPopularList() {
  if (!popularList) return;
  const top = [0,1,2,3,4,5];
  top.forEach((idx,pos) => {
    popularList.appendChild(makeTrackItem(idx, pos+1, 'popular'));
  });
}

/* ─── QUEUE PANEL ────────────────────────────── */
function buildQueueList() {
  if (!queueList) return;
  queueList.innerHTML = '';
  const indices = getQueue();
  indices.forEach((idx, pos) => {
    const t = playlist[idx];
    const item = document.createElement('div');
    item.className = 'qp-item' + (idx === cur ? ' active' : '');
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
  if (favourites.has(idx)) {
    favourites.delete(idx);
    showToast(`Removed from Favourites`);
  } else {
    favourites.add(idx);
    showToast(`Added to Favourites ♥`);
  }
  updateFavBadge();
  updateFavButtons(idx);
  buildFavView();
  buildAboutStats();
  savePrefs();
}

function updateFavBadge() {
  const n = favourites.size;
  if (favBadge) {
    favBadge.textContent = n;
    favBadge.style.display = n ? 'flex' : 'none';
  }
  if (favSubtitle) favSubtitle.textContent = `${n} song${n!==1?'s':''} liked`;
}

function updateFavButtons(idx) {
  document.querySelectorAll(`.ti-fav-btn[data-idx="${idx}"]`).forEach(btn => {
    btn.classList.toggle('faved', favourites.has(idx));
  });
  if (pb_heart && idx === cur) pb_heart.classList.toggle('faved', favourites.has(cur));
}

function buildFavView() {
  if (!favList) return;
  const ids = [...favourites];
  favList.innerHTML = '';

  if (ids.length === 0) {
    if (favEmpty)   favEmpty.style.display   = 'flex';
    if (favTlHead)  favTlHead.style.display   = 'none';
    if (favSubtitle) favSubtitle.textContent  = '0 songs liked';
    return;
  }
  if (favEmpty)   favEmpty.style.display   = 'none';
  if (favTlHead)  favTlHead.style.display  = 'grid';

  ids.forEach((idx, pos) => {
    favList.appendChild(makeTrackItem(idx, pos+1, 'fav'));
  });
  if (favSubtitle) favSubtitle.textContent = `${ids.length} song${ids.length!==1?'s':''} liked`;
}

/* ─── SEARCH & FILTER ────────────────────────── */
function applySearch(q) {
  searchQuery = q.toLowerCase().trim();
  applyFilter();
}

function applySort(mode) {
  sortMode = mode;
  applyFilter();
}

function applyFilter() {
  let indices = playlist.map((_,i) => i);

  if (searchQuery) {
    indices = indices.filter(i =>
      playlist[i].title.toLowerCase().includes(searchQuery) ||
      playlist[i].artist.toLowerCase().includes(searchQuery)
    );
  }

  if (sortMode === 'az') indices.sort((a,b) => playlist[a].title.localeCompare(playlist[b].title));
  else if (sortMode === 'za') indices.sort((a,b) => playlist[b].title.localeCompare(playlist[a].title));

  displayedList = indices;
  buildTrackList(tracksList, indices);

  if (isGridView) tracksList.classList.add('grid-view');
  if (songsSubtitle) songsSubtitle.textContent = `${indices.length} of ${playlist.length} tracks · By Akhil`;
}

/* ─── DURATION PREFETCH ──────────────────────── */
function prefetchDuration(src, idx, container) {
  const tmp   = new Audio();
  tmp.preload = 'metadata';
  tmp.src     = src;
  tmp.addEventListener('loadedmetadata', () => {
    const el = document.getElementById(`dur-${container}-${idx}`);
    if (el) el.textContent = fmt(tmp.duration);
    tmp.src = '';
  });
  tmp.addEventListener('error', () => {
    const el = document.getElementById(`dur-${container}-${idx}`);
    if (el) el.textContent = '—:——';
  });
}

/* ─── VIEW NAVIGATION ────────────────────────── */
function switchView(name) {
  currentView = name;
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const target = document.getElementById(`view-${name}`);
  if (target) { target.classList.add('active'); target.scrollTop = 0; }

  // Update sidebar nav
  document.querySelectorAll('.nav-item').forEach(el => {
    el.classList.toggle('active', el.dataset.view === name);
  });
  // Update mobile nav
  document.querySelectorAll('.mn-item').forEach(el => {
    el.classList.toggle('active', el.dataset.view === name);
  });

  // Build on demand
  if (name === 'favorites') buildFavView();
  if (name === 'about') updateAboutBg();
}

/* ─── ABOUT BG BLUR ──────────────────────────── */
function updateAboutBg() {
  if (!aboutBg) return;
  const cover = cur >= 0 ? playlist[cur].cover : 'images/ak01.png';
  aboutBg.style.backgroundImage = `url(${cover})`;
  aboutBg.style.backgroundSize  = 'cover';
  aboutBg.style.backgroundPosition = 'center';
  aboutBg.style.filter = 'blur(40px) saturate(1.2) brightness(0.3)';
}

/* ─── HERO BG UPDATE ─────────────────────────── */
function updateHeroBg(idx) {
  if (!heroBg) return;
  const cover = idx >= 0 ? playlist[idx].cover : '';
  if (cover) {
    heroBg.style.backgroundImage = `url(${cover})`;
    heroBg.style.backgroundSize  = 'cover';
    heroBg.style.backgroundPosition = 'center';
    heroBg.style.filter = 'blur(60px) saturate(1.3) brightness(0.25)';
    heroBg.style.transform = 'scale(1.1)';
  }
}

/* ─── SHUFFLE ────────────────────────────────── */
function buildShuffleQueue() {
  const indices = playlist.map((_,i) => i);
  // Fisher-Yates
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  // Current song first
  const curPos = indices.indexOf(cur);
  if (curPos > 0) { [indices[0], indices[curPos]] = [indices[curPos], indices[0]]; }
  shuffleQueue = indices;
  shufflePos   = 0;
}

function toggleShuffle() {
  shuffleOn = !shuffleOn;
  if (shuffleOn && cur >= 0) buildShuffleQueue();
  [shuffleBtn, topShuffleBtn].forEach(b => { if(b) b.classList.toggle('on', shuffleOn); });
  showToast(shuffleOn ? 'Shuffle On' : 'Shuffle Off');
  buildQueueList();
  savePrefs();
}

function toggleRepeat() {
  repeatMode = (repeatMode + 1) % 3;
  const labels = ['Repeat Off', 'Repeat All', 'Repeat One'];
  [repeatBtn].forEach(b => {
    if (!b) return;
    b.classList.toggle('on', repeatMode > 0);
    b.classList.toggle('repeat-1', repeatMode === 2);
  });
  showToast(labels[repeatMode]);
  savePrefs();
}

/* ─── NEXT / PREV LOGIC ──────────────────────── */
function getNextIdx() {
  if (repeatMode === 2) return cur; // repeat one
  if (shuffleOn && shuffleQueue.length) {
    shufflePos = (shufflePos + 1) % shuffleQueue.length;
    return shuffleQueue[shufflePos];
  }
  const next = cur + 1;
  if (next >= playlist.length) return repeatMode === 1 ? 0 : -1;
  return next;
}

function getPrevIdx() {
  if (shuffleOn && shuffleQueue.length) {
    shufflePos = (shufflePos - 1 + shuffleQueue.length) % shuffleQueue.length;
    return shuffleQueue[shufflePos];
  }
  return cur > 0 ? cur - 1 : (repeatMode === 1 ? playlist.length - 1 : 0);
}

/* ─── LOAD & PLAY ────────────────────────────── */
async function loadPlay(idx) {
  if (idx < 0 || idx >= playlist.length) return;
  const prev = cur;
  cur = idx;
  const t = playlist[cur];

  audio.src    = t.src;
  audio.volume = parseFloat(volSlider ? volSlider.value : '0.85');

  // Update player bar
  pbTitle.textContent  = t.title;
  pbArtist.textContent = t.artist;
  pbCoverImg.src       = t.cover;
  pbCoverImg.onerror   = () => { pbCoverImg.src = 'images/ak01.png'; };

  // Hero bg
  updateHeroBg(cur);

  // Track active states across all containers
  updateAllActiveStates(prev);

  // Update queue position
  if (shuffleOn && shuffleQueue.length) {
    const pos = shuffleQueue.indexOf(cur);
    if (pos >= 0) shufflePos = pos;
    else buildShuffleQueue();
  }

  // Recently played
  recentlyPlayed = [cur, ...recentlyPlayed.filter(i => i !== cur)].slice(0, 20);
  buildCardRow(recentCards, recentlyPlayed.slice(0, 8));

  // Fav heart
  if (pb_heart) pb_heart.classList.toggle('faved', favourites.has(cur));

  // Queue
  buildQueueList();

  // Media metadata
  setMediaMetadata(t.title, t.artist, t.cover);

  // Play
  audio.play().catch(() => setPlayState(false));

  // Prewarm next covers
  for (let i = 1; i <= 3; i++) {
    const ni = new Image();
    ni.src = playlist[(cur + i) % playlist.length].cover;
  }

  // Save state
  try { localStorage.setItem('akhil_cur', cur); } catch(_) {}
  savePrefs();
}

/* ─── ALL ACTIVE STATES ──────────────────────── */
function updateAllActiveStates(prev) {
  // Remove old
  if (prev >= 0) {
    document.querySelectorAll(`.track-item[data-idx="${prev}"]`).forEach(el => {
      el.classList.remove('active');
      const pb = el.querySelector('.ti-play-btn');
      if (pb) pb.innerHTML = I_PLAY;
    });
    document.querySelectorAll(`.music-card`).forEach(el => {
      if (parseInt(el.dataset.idx) === prev) el.classList.remove('is-active');
    });
  }
  // Add new
  document.querySelectorAll(`.track-item[data-idx="${cur}"]`).forEach(el => {
    el.classList.add('active');
    const pb = el.querySelector('.ti-play-btn');
    if (pb) pb.innerHTML = I_PAUSE;
    el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
  document.querySelectorAll(`.music-card`).forEach(el => {
    if (parseInt(el.dataset.idx) === cur) el.classList.add('is-active');
  });
}

/* ─── PLAY STATE ─────────────────────────────── */
function setPlayState(isPlaying) {
  playing = isPlaying;
  mainPlayBtn.classList.toggle('playing', isPlaying);

  // Update all play buttons for current track
  document.querySelectorAll(`.track-item[data-idx="${cur}"] .ti-play-btn`).forEach(pb => {
    pb.innerHTML = isPlaying ? I_PAUSE : I_PLAY;
  });

  // Waveform
  if (heroWave) heroWave.classList.toggle('paused', !isPlaying);

  // Media session
  if ('mediaSession' in navigator) {
    navigator.mediaSession.playbackState = isPlaying ? 'playing' : 'paused';
  }
}

/* ─── TOGGLE PLAY ────────────────────────────── */
function togglePlay() {
  if (cur < 0) { loadPlay(0); return; }
  if (playing) { audio.pause(); setPlayState(false); }
  else { audio.play().then(() => { acquireWakeLock(); setPlayState(true); }); }
}

/* ─── AUDIO EVENTS ──────────────────────────── */
audio.addEventListener('play', () => { setPlayState(true); acquireWakeLock(); });
audio.addEventListener('pause', () => { setPlayState(false); releaseWakeLock(); saveState(); });
audio.addEventListener('ended', () => {
  saveState();
  const next = getNextIdx();
  if (next >= 0) loadPlay(next);
  else { setPlayState(false); }
});

audio.addEventListener('timeupdate', () => {
  if (!audio.duration) return;
  const pct = (audio.currentTime / audio.duration) * 100;
  if (progFill) progFill.style.width = pct + '%';
  if (progDot)  progDot.style.left   = pct + '%';
  if (pbProgFill) pbProgFill.style.width = pct + '%';
  if (timeCur)  timeCur.textContent = fmt(audio.currentTime);
  pushPositionState();
});

audio.addEventListener('loadedmetadata', () => {
  if (timeTot) timeTot.textContent = fmt(audio.duration);
  pushPositionState();
});

/* ─── SEEK ──────────────────────────────────── */
function seekTo(clientX, el) {
  const r = el.getBoundingClientRect();
  const pct = Math.max(0, Math.min(1, (clientX - r.left) / r.width));
  if (audio.duration) { audio.currentTime = pct * audio.duration; pushPositionState(); }
}

let seeking = false;
if (progTrack) {
  progTrack.addEventListener('click',      e => seekTo(e.clientX, progTrack));
  progTrack.addEventListener('mousedown',  () => { seeking = true; });
  progTrack.addEventListener('touchstart', e => seekTo(e.touches[0].clientX, progTrack), { passive: true });
  progTrack.addEventListener('touchmove',  e => seekTo(e.touches[0].clientX, progTrack), { passive: true });
}
document.addEventListener('mousemove', e => { if (seeking) seekTo(e.clientX, progTrack); });
document.addEventListener('mouseup',   () => { seeking = false; });

/* ─── VOLUME ────────────────────────────────── */
function updateVolUI() {
  if (!volSlider) return;
  const v = volSlider.value * 100;
  volSlider.style.background = `linear-gradient(to right, var(--acc) ${v}%, rgba(255,255,255,0.09) ${v}%)`;
  // Icon
  const high = muteBtn ? muteBtn.querySelector('.vi-high') : null;
  const off  = muteBtn ? muteBtn.querySelector('.vi-off')  : null;
  if (high && off) {
    if (isMuted || parseFloat(volSlider.value) === 0) { high.style.display='none'; off.style.display='block'; }
    else { high.style.display='block'; off.style.display='none'; }
  }
}

if (volSlider) {
  volSlider.addEventListener('input', () => {
    audio.volume = parseFloat(volSlider.value);
    isMuted = false;
    updateVolUI();
    savePrefs();
  });
}

if (muteBtn) {
  muteBtn.addEventListener('click', () => {
    if (isMuted) {
      audio.volume   = prevVol || 0.85;
      volSlider.value = audio.volume;
      isMuted = false;
    } else {
      prevVol = audio.volume;
      audio.volume   = 0;
      volSlider.value = 0;
      isMuted = true;
    }
    updateVolUI();
  });
}

/* ─── MEDIA SESSION ─────────────────────────── */
function setMediaMetadata(title, artist, cover) {
  if (!('mediaSession' in navigator)) return;
  navigator.mediaSession.metadata = new MediaMetadata({
    title, artist, album: 'Akhil Music',
    artwork: cover ? [{ src: cover, sizes: '256x256', type: 'image/jpeg' }] : [],
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
  } catch(_) {}
}

function initMediaSession() {
  if (!('mediaSession' in navigator)) return;
  const ms = navigator.mediaSession;
  ms.setActionHandler('play',          () => { audio.play().then(() => setPlayState(true)); });
  ms.setActionHandler('pause',         () => { audio.pause(); setPlayState(false); });
  ms.setActionHandler('previoustrack', () => { audio.currentTime > 3 ? (audio.currentTime = 0) : loadPlay(getPrevIdx()); });
  ms.setActionHandler('nexttrack',     () => { const n = getNextIdx(); if (n >= 0) loadPlay(n); });
  ms.setActionHandler('seekbackward',  d  => { audio.currentTime = Math.max(0, audio.currentTime - (d.seekOffset||10)); pushPositionState(); });
  ms.setActionHandler('seekforward',   d  => { audio.currentTime = Math.min(audio.duration||Infinity, audio.currentTime + (d.seekOffset||10)); pushPositionState(); });
  ms.setActionHandler('seekto',        d  => { if (d.seekTime !== undefined) { audio.currentTime = d.seekTime; pushPositionState(); } });
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
  if (document.visibilityState === 'visible' && playing) await acquireWakeLock();
});

/* ─── PERSIST STATE ─────────────────────────── */
const LS_IDX  = 'akhil_cur';
const LS_TIME = 'akhil_time';

function saveState() {
  try { localStorage.setItem(LS_IDX, cur); localStorage.setItem(LS_TIME, audio.currentTime); } catch(_) {}
}
setInterval(saveState, 5000);

async function restoreState() {
  try {
    const idx  = parseInt(localStorage.getItem(LS_IDX), 10);
    const time = parseFloat(localStorage.getItem(LS_TIME));
    if (isNaN(idx) || idx < 0 || idx >= playlist.length) return;

    cur = idx;
    const t = playlist[cur];
    audio.src    = t.src;
    audio.volume = volSlider ? parseFloat(volSlider.value) : 0.85;

    audio.addEventListener('loadedmetadata', () => {
      if (!isNaN(time) && time > 5) audio.currentTime = time;
      if (timeTot) timeTot.textContent = fmt(audio.duration);
      pushPositionState();
    }, { once: true });

    pbTitle.textContent  = t.title;
    pbArtist.textContent = t.artist;
    pbCoverImg.src       = t.cover;
    if (pb_heart) pb_heart.classList.toggle('faved', favourites.has(cur));

    updateAllActiveStates(-1);
    updateHeroBg(cur);
    setMediaMetadata(t.title, t.artist, t.cover);
    setPlayState(false);
  } catch(_) {}

  // Shuffle state restoration
  if (shuffleOn && cur >= 0) buildShuffleQueue();
  [shuffleBtn, topShuffleBtn].forEach(b => { if (b) b.classList.toggle('on', shuffleOn); });
  if (repeatBtn) {
    repeatBtn.classList.toggle('on', repeatMode > 0);
    repeatBtn.classList.toggle('repeat-1', repeatMode === 2);
  }
}

/* ─── TOAST ─────────────────────────────────── */
let toastTimer;
function showToast(msg) {
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

/* ─── KEYBOARD ──────────────────────────────── */
document.addEventListener('keydown', e => {
  const tag = e.target.tagName;
  if (tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA') return;
  if (e.code === 'Space')       { e.preventDefault(); togglePlay(); }
  if (e.code === 'ArrowRight')  { const n = getNextIdx(); if (n >= 0) loadPlay(n); }
  if (e.code === 'ArrowLeft')   { audio.currentTime > 3 ? (audio.currentTime = 0) : loadPlay(getPrevIdx()); }
  if (e.code === 'KeyS')        toggleShuffle();
  if (e.code === 'KeyR')        toggleRepeat();
  if (e.code === 'KeyM')        muteBtn && muteBtn.click();
  if (e.code === 'ArrowUp')     { audio.volume = Math.min(1, audio.volume + 0.05); if(volSlider) volSlider.value = audio.volume; updateVolUI(); }
  if (e.code === 'ArrowDown')   { audio.volume = Math.max(0, audio.volume - 0.05); if(volSlider) volSlider.value = audio.volume; updateVolUI(); }
});

/* ─── THEME TOGGLE ──────────────────────────── */
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light');
    if (themeLabel) themeLabel.textContent = isLight ? 'Dark Mode' : 'Light Mode';
    try { localStorage.setItem('akhil_theme', isLight ? 'light' : 'dark'); } catch(_) {}
  });
}

/* ─── BIND ALL EVENTS ────────────────────────── */
function bindEvents() {
  // Play/pause
  if (mainPlayBtn) mainPlayBtn.addEventListener('click', togglePlay);
  if (prevBtn) prevBtn.addEventListener('click', () => {
    audio.currentTime > 3 ? (audio.currentTime = 0) : loadPlay(getPrevIdx());
  });
  if (nextBtn) nextBtn.addEventListener('click', () => { const n = getNextIdx(); if (n >= 0) loadPlay(n); });

  // Shuffle / repeat
  if (shuffleBtn)     shuffleBtn.addEventListener('click', toggleShuffle);
  if (topShuffleBtn)  topShuffleBtn.addEventListener('click', toggleShuffle);
  if (repeatBtn)      repeatBtn.addEventListener('click', toggleRepeat);
  if (topRepeatBtn)   topRepeatBtn.addEventListener('click', toggleRepeat);

  // Fav in player bar
  if (pb_heart) pb_heart.addEventListener('click', () => { if (cur >= 0) toggleFav(cur); });

  // Play all
  const playAllBtn = $('playAllBtn');
  if (playAllBtn) playAllBtn.addEventListener('click', () => { loadPlay(0); switchView('songs'); });

  // Shuffle play
  const shufflePlayBtn = $('shufflePlayBtn');
  if (shufflePlayBtn) shufflePlayBtn.addEventListener('click', () => {
    if (!shuffleOn) toggleShuffle();
    const rnd = Math.floor(Math.random() * playlist.length);
    loadPlay(rnd);
    switchView('songs');
  });

  // Queue
  if (queueBtn)   queueBtn.addEventListener('click', () => { queuePanel.classList.toggle('open'); buildQueueList(); });
  if (queueClose) queueClose.addEventListener('click', () => queuePanel.classList.remove('open'));

  // Mobile menu
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      sbOverlay.classList.toggle('show');
    });
  }
  if (sbOverlay) {
    sbOverlay.addEventListener('click', () => {
      sidebar.classList.remove('open');
      sbOverlay.classList.remove('show');
    });
  }

  // Search (both)
  [sidebarSearch, topbarSearch].forEach(inp => {
    if (!inp) return;
    inp.addEventListener('input', e => {
      applySearch(e.target.value);
      // Sync both inputs
      if (sidebarSearch && sidebarSearch !== inp) sidebarSearch.value = e.target.value;
      if (topbarSearch  && topbarSearch  !== inp) topbarSearch.value  = e.target.value;
      switchView('songs');
    });
  });

  // Sort
  if (sortSelect) sortSelect.addEventListener('change', () => applySort(sortSelect.value));

  // View toggle (list/grid)
  if (listViewBtn) {
    listViewBtn.addEventListener('click', () => {
      isGridView = false;
      tracksList.classList.remove('grid-view');
      listViewBtn.classList.add('active');
      if (gridViewBtn) gridViewBtn.classList.remove('active');
    });
  }
  if (gridViewBtn) {
    gridViewBtn.addEventListener('click', () => {
      isGridView = true;
      tracksList.classList.add('grid-view');
      gridViewBtn.classList.add('active');
      if (listViewBtn) listViewBtn.classList.remove('active');
    });
  }

  // Sidebar nav links
  document.querySelectorAll('.nav-item[data-view]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      switchView(el.dataset.view);
      sidebar.classList.remove('open');
      sbOverlay.classList.remove('show');
    });
  });

  // Mobile nav
  document.querySelectorAll('.mn-item[data-view]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      switchView(el.dataset.view);
    });
  });

  // See-all buttons
  document.querySelectorAll('[data-view]').forEach(el => {
    if (el.classList.contains('link-btn')) {
      el.addEventListener('click', () => switchView(el.dataset.view));
    }
  });

  // PWA
  let deferredPrompt;
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredPrompt = e;
    const btn = document.createElement('button');
    btn.innerText = 'Install App';
    btn.className = 'install-btn';
    btn.onclick = async () => { deferredPrompt.prompt(); await deferredPrompt.userChoice; btn.remove(); };
    document.body.appendChild(btn);
  });
}

/* ─── HELPER ─────────────────────────────────── */
function fmt(s) {
  if (isNaN(s) || s == null) return '0:00';
  return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
}

/* ─── GO ─────────────────────────────────────── */
init();