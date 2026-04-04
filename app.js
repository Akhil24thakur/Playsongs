/* ═══════════════════════════════════════════════
   AKHIL MUSIC — APP v5
   Fullscreen Player + Better Seek + MediaSession
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
let cur = -1, playing = false, shuffleOn = false, repeatMode = 0;
let favourites = new Set(), recentlyPlayed = [];
let currentView = 'home', isGridView = false;
let searchQuery = '', sortMode = 'default';
let shuffleQueue = [], shufflePos = 0;
let isMuted = false, prevVol = 0.85, wakeLock = null;
let displayedList = [...playlist.keys()];
let fsIsOpen = false;

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

  // background blur
  if (fsBg) fsBg.style.backgroundImage = `url(${t.cover})`;

  // artwork with pop animation when song changes
  if (fsArtworkImg && fsArtworkImg.dataset.cur !== String(cur)) {
    fsArtworkImg.dataset.cur = cur;
    fsArtwork.classList.add('art-pop');
    setTimeout(() => fsArtwork && fsArtwork.classList.remove('art-pop'), 400);
    fsArtworkImg.src = t.cover;
    fsArtworkImg.onerror = () => { fsArtworkImg.src = 'images/icon.png'; };
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
      <img src="${t.cover}" alt="${t.title}" loading="lazy" onerror="this.src='images/icon.png'"/>
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
  fsVolSlider.style.background = `linear-gradient(to right,rgba(232,149,109,0.85) ${v}%,rgba(255,255,255,0.12) ${v}%)`;
}

/* ── Swipe-down to close ── */
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
  function updateFSDot(pct) {
    if (fsProgressFill)  fsProgressFill.style.width  = pct + '%';
    if (fsProgressThumb) fsProgressThumb.style.left  = pct + '%';
    if (fsTimeCur)       fsTimeCur.textContent        = fmt(audio.currentTime);
  }

  fsProgressBar.addEventListener('click',     e => { fsScrub(e.clientX); });
  fsProgressBar.addEventListener('mousedown', e => { drag = true; fsProgressBar.classList.add('dragging'); fsScrub(e.clientX); });
  fsProgressBar.addEventListener('touchstart',e => { drag = true; fsProgressBar.classList.add('dragging'); fsScrub(e.touches[0].clientX); }, { passive: true });
  fsProgressBar.addEventListener('touchmove', e => {
    e.stopPropagation();
    if (drag) fsScrub(e.touches[0].clientX);
  }, { passive: true });
  fsProgressBar.addEventListener('touchend',  () => { drag = false; fsProgressBar.classList.remove('dragging'); });
  document.addEventListener('mousemove', e => { if (drag) fsScrub(e.clientX); });
  document.addEventListener('mouseup',   () => { drag = false; fsProgressBar.classList.remove('dragging'); });
})();

/* ── Open FS when clicking pb-left (cover/title area) ── */
function onPBAreaClick(e) {
  // Ignore if clicking controls
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
  progTrack.addEventListener('mousedown', e => {
    drag = true;
    progTrack.classList.add('dragging');
    scrub(e.clientX);
    e.stopPropagation(); // don't bubble to pb-left (would open FS)
  });
  progTrack.addEventListener('touchstart', e => {
    drag = true;
    progTrack.classList.add('dragging');
    scrub(e.touches[0].clientX);
  }, { passive: true });
  progTrack.addEventListener('touchmove', e => {
    if (drag) scrub(e.touches[0].clientX);
  }, { passive: true });
  progTrack.addEventListener('touchend', () => {
    drag = false;
    progTrack.classList.remove('dragging');
  });
  document.addEventListener('mousemove', e => { if (drag) scrub(e.clientX); });
  document.addEventListener('mouseup',   () => { drag = false; progTrack.classList.remove('dragging'); });
})();

/* ══════════════════════════════════════════════
   MEDIA SESSION (Android notification bar)
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
      { src: art, sizes: '256x256', type: 'image/png' },
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
  if (favTlHead) favTlHead.style.display = 'grid';
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
  if (songsSubtitle) songsSubtitle.textContent = `${indices.length} of ${playlist.length} tracks · By Akhil`;
}

/* ─── DURATION ───────────────────────────────── */
function prefetchDuration(src, idx, container) {
  const tmp = new Audio(); tmp.preload = 'metadata'; tmp.src = src;
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
  const cover = cur >= 0 ? playlist[cur].cover : 'images/icon.png';
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

  // update mini bar with cover pop animation
  pbTitle.textContent  = t.title;
  pbArtist.textContent = t.artist;
  if (pbCoverImg.src !== absURL(t.cover)) {
    pbCoverImg.classList.add('swapping');
    setTimeout(() => pbCoverImg.classList.remove('swapping'), 360);
    pbCoverImg.src     = t.cover;
    pbCoverImg.onerror = () => { pbCoverImg.src = 'images/icon.png'; };
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

  // Android notification
  setRichMediaMetadata(t);
  registerMediaActions();

  // sync fullscreen if open
  if (fsIsOpen) { syncFSToCurrentSong(); buildFSQueue(); }

  audio.play().catch(() => setPlayState(false));

  for (let i = 1; i <= 3; i++) { new Image().src = playlist[(cur+i)%playlist.length].cover; }
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
audio.addEventListener('play',  () => { setPlayState(true); acquireWakeLock(); });
audio.addEventListener('pause', () => { setPlayState(false); releaseWakeLock(); saveState(); });
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
    audio.src    = t.src;
    audio.volume = volSlider ? parseFloat(volSlider.value) : 0.85;
    audio.addEventListener('loadedmetadata', () => {
      if (!isNaN(time) && time > 5) audio.currentTime = time;
      if (timeTot)   timeTot.textContent   = fmt(audio.duration);
      if (fsTimeTot) fsTimeTot.textContent = fmt(audio.duration);
      pushPositionState();
    }, { once: true });
    pbTitle.textContent  = t.title;
    pbArtist.textContent = t.artist;
    pbCoverImg.src       = t.cover;
    if (pb_heart) pb_heart.classList.toggle('faved', favourites.has(cur));
    updateAllActiveStates(-1);
    updateHeroBg(cur);
    setRichMediaMetadata(t);
    setPlayState(false);
  } catch(_) {}

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
  /* mini player bar: click left area = open fullscreen */
  if (pbClickArea) pbClickArea.addEventListener('click', onPBAreaClick);

  /* controls (stop propagation so they don't also open FS) */
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

  /* fullscreen controls */
  if (fsCloseBtn)   fsCloseBtn.addEventListener('click',   closeFullscreen);
  if (fsFavBtn)     fsFavBtn.addEventListener('click',     () => { if(cur>=0) toggleFav(cur); });
  if (fsPlayBtn)    fsPlayBtn.addEventListener('click',    togglePlay);
  if (fsPrevBtn)    fsPrevBtn.addEventListener('click',    () => { audio.currentTime>3?(audio.currentTime=0):loadPlay(getPrevIdx()); });
  if (fsNextBtn)    fsNextBtn.addEventListener('click',    () => { const n=getNextIdx(); if(n>=0)loadPlay(n); });
  if (fsShuffleBtn) fsShuffleBtn.addEventListener('click', toggleShuffle);
  if (fsRepeatBtn)  fsRepeatBtn.addEventListener('click',  toggleRepeat);

  /* play all / shuffle play */
  const playAllBtn = $('playAllBtn');
  if (playAllBtn) playAllBtn.addEventListener('click', () => { loadPlay(0); switchView('songs'); });
  const shufflePlayBtn = $('shufflePlayBtn');
  if (shufflePlayBtn) shufflePlayBtn.addEventListener('click', () => {
    if (!shuffleOn) toggleShuffle();
    loadPlay(Math.floor(Math.random()*playlist.length));
    switchView('songs');
  });

  /* mobile menu */
  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', () => { sidebar.classList.toggle('open'); sbOverlay.classList.toggle('show'); });
  if (sbOverlay)     sbOverlay.addEventListener('click',     () => { sidebar.classList.remove('open'); sbOverlay.classList.remove('show'); });

  /* search */
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

  /* PWA */
  let deferredPrompt;
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault(); deferredPrompt = e;
    const btn = document.createElement('button');
    btn.innerText = 'Install App'; btn.className = 'install-btn';
    btn.onclick = async () => { deferredPrompt.prompt(); await deferredPrompt.userChoice; btn.remove(); };
    document.body.appendChild(btn);
  });
}

/* ─── HELPER ─────────────────────────────────── */
function fmt(s) {
  if (isNaN(s)||s==null) return '0:00';
  return `${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,'0')}`;
}

/* ─── GO ─────────────────────────────────────── */
init();