// ===== Elements
const audio = document.getElementById("audio-player");
const playPauseBtn = document.getElementById("play-pause-btn");
const playIcon = document.getElementById("play-icon");
const pauseIcon = document.getElementById("pause-icon");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

const progressContainer = document.getElementById("progress-container");
const progressBar = document.getElementById("progress-bar");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");

const albumArt = document.getElementById("album-art");
const songTitle = document.getElementById("song-title");
const artistName = document.getElementById("artist-name");
const playlistEl = document.getElementById("playlist");
const toast = document.getElementById("toast");

// ===== Your playlist
const playlist = [
  { title: 'Pehli Baatein', artist: 'Akhil', src: 'songs/Pehli Batein.mp3', cover: 'images/Pehli Batein.jpeg', yt: 'https://youtu.be/79MeFOlyRKQ?si=wUbv_QD5OzVzRh3T' },
  { title: 'Stay Away', artist: 'Akhil', src: 'songs/Stay away.mp3', cover: 'images/stay away.png', yt: 'https://youtu.be/4Sj-LVwj36c?si=znRffitAOKsDC_lu'  },
  { title: 'Choti Choti Batan', artist: 'Akhil', src: 'songs/batan.mp3', cover: 'images/batan.png', yt: 'https://youtu.be/1mzrxYSFEEE?si=znEbpekloil8bt8G'  },
  { title: 'Karma', artist: 'Akhil', src: 'songs/karma.mp3', cover: 'images/karma.png', yt: 'https://youtu.be/8K8DRNDKdbQ?si=8qnDRs5Ac2v6Z5lV'  },
  { title: 'Tere Bina', artist: 'Akhil', src: 'songs/Tere Bina.mp3', cover: 'images/Tere Bina.png' , yt: 'https://youtu.be/U_oIjIILiVY?si=n-qrcXF6Y5xmYHe9'  },
  { title: 'Divided Hearts', artist: 'Akhil', src: 'songs/div.mp3', cover: 'images/div.png', yt: 'https://youtu.be/Da1tNA1a9Hk?si=1qHV_o3beDfEj4wl'  },
  { title: 'Rah Main Kanta', artist: 'Akhil', src: 'songs/rah.mp3', cover: 'images/rah.png ', yt:'https://youtu.be/GNX9ElQq2wo?si=lOfYTzh7KFx4BCq1' },
  { title: 'Soul in Simplicity', artist: 'Akhil', src: 'songs/Soul in Simplicity.mp3', cover: 'images/simple.png ',yt: 'https://youtu.be/L7_0M7DR33Y?si=EBqEFFALQEFMSFcW'},
  { title: 'Tera Sath  [Lofi + Slowed Reverse]', artist: 'Akhil', src: 'songs/Tera sath lofi.mp3', cover: 'images/TeraSath.jpeg', yt: 'https://youtu.be/LNrym-204Po?si=7sogdTgWCgwRXz92' },
  { title: 'New City', artist: 'Akhil', src: 'songs/new city.mp3', cover: 'images/ak.png ', yt: 'https://youtu.be/x_3iYRzwAyU?si=ovfqa9RUabDm3yJv'},
  { title: 'Vibes with you', artist: 'Akhil', src: 'songs/Vibes With You.mp3', cover: 'images/Vibes with you.png ', yt: 'https://youtu.be/YNp2YX8yD5E?si=59zkQ4_5pKSEue0s'},
  { title: 'Mann Ka Akrosh', artist: 'Akhil', src: 'songs/Mann Ka Akrosh.mp3', cover: 'images/Mann Ka Akrosh.png  ', yt: 'https://youtu.be/klNRngrVVqc?si=oMWc2st-eo2bdORU'},
  { title: 'With You ', artist: 'Akhil', src: 'songs/WithYou .mp3', cover: 'images/WithYou.jpeg', yt:'https://youtu.be/J65UNdW1gzI?si=JSksGO_SKcasP10F' },
  { title: 'She Comes In', artist: 'Akhil', src: 'songs/She comes in.mp3', cover: 'images/she comes In.png', yt: 'https://youtu.be/IbEkTcKomZE?si=Vn6ZoXaUvIe_Grhs' },
  { title: 'Without You', artist: 'Akhil', src: 'songs/WithOut you.mp3', cover: 'images/WithOut YOU.jpg', yt: 'https://youtu.be/_me4StJmZS4?si=bWa_O3Vl4Gj-i-CW' },
  { title: 'Because Of You', artist: 'Akhil', src: 'songs/Because of You.mp3', cover: 'images/OF you.png', yt: 'https://youtu.be/Yt52OQtg6Kc?si=Ga6Nk-hBJfPL5Hy8' },
  { title: 'Dont Fight', artist: 'Akhil', src: 'songs/Dont  Fight.mp3', cover: 'images/fight.png', yt: 'https://youtu.be/dKe5LV9csmc?si=842jYgqAD1IcKTSm'},
  { title: 'Dream With You', artist: 'Akhil', src: 'songs/My Dreams.mp3', cover: 'images/MY Dreams.webp', yt: 'https://youtu.be/-_g0_RXHbGc?si=LM7HuamcufWF_nHM'},
  { title: 'Kahani Suno', artist: 'Akhil', src: 'songs/kahani.mp3', cover: 'images/Kahani.png', yt: 'https://youtu.be/GU_v9ITJj48?si=DTLX2kOAmdlWNLS1' },
  { title: 'Dooriyan', artist: 'Akhil', src: 'songs/Dooriyan.mp3', cover: 'images/Dooriyan.png', yt: 'https://youtu.be/P6bL1yD42wU?si=mhqu_t1L8uz_q3lx'},
  { title: 'Samjho Na', artist: 'Akhil', src: 'songs/Samjho.mp3', cover: 'images/Samjho.png', yt: 'hhttps://youtu.be/LGhCV2dOav0?si=IsJZn1HSfR7JGNT9'},
  { title: 'Tera Sath', artist: 'Akhil', src: 'songs/TeraSath.mp3', cover: 'images/TeraSath.jpeg', yt: 'https://youtu.be/ibZGuwRxNKw?si=JPVMUezLE7qW6NyR'},
  { title: 'One Sided Love', artist: 'Akhil', src: 'songs/One Sided Love.mp3', cover: 'images/One Sided Love.png', yt: 'https://youtu.be/8dUP3R1iDA4?si=nGP3riqy05jKqnDP' },
  { title: 'Majestic', artist: 'Akhil', src: 'songs/Majestic.mp3', cover: 'images/Majestic.png', yt:  'https://youtu.be/Dn3SlVGh6OY?si=RqnecXOpp4dBMyWV'},
  { title: 'For You', artist: 'Akhil', src: 'songs/My Queen.mp3', cover: 'images/My Queen.jpeg', yt: 'https://youtu.be/S4rCgH5gHOQ?si=ZESRrPAue9rPR2pT' },
  { title: 'Winters In Shimla', artist: 'Akhil', src: 'songs/Winters  In Shimla.mp3', cover: 'images/Shimla.jpg', yt:'https://youtu.be/WEPJkchg6hk?si=NObJEsnPHQpP6KDw' },
  { title: 'Meri Dua', artist: 'Akhil', src: 'songs/Meri Dua.mp3', cover: 'images/meri-dua.jpg', yt: 'https://youtu.be/83VJ_XbYTL8?si=zK9ihLpifwtvo3hu'},
  { title: 'Bittersweet Memories', artist: 'Akhil', src: 'songs/Bittersweet Memories.mp3', cover: 'images/Bittersweet Memories.jpeg', yt:'https://youtu.be/DdkgrI-EG3I?si=j-LiBdcBew-_NGYn' },
  { title: 'First Meet', artist: 'Akhil', src: 'songs/First Meet.mp3', cover: 'images/First Meet.jpeg', yt: 'https://youtu.be/zNESfQT5TcM?si=Oo-99yPe-MQFtFYA' },
  { title: 'Nature Touch', artist: 'Akhil', src: 'songs/Nature Touch.mp3', cover: 'images/Nature Touch.jpeg', yt:'https://youtu.be/HaTT63RTcDU?si=7kww0Zh18ZF1SDLx'},
  { title: 'Pyar Ka Safar', artist: 'Akhil', src: 'songs/Pyar Ka Safar.mp3', cover: 'images/pyar ka safat .jpeg' },
  { title: 'Sari Sari Raat', artist: 'Akhil', src: 'songs/Sari Sari Raat.mp3', cover: 'images/meri-dua.jpg' },
  { title: 'Tere Bin', artist: 'Akhil', src: 'songs/Tere Bin.mp3', cover: 'images/tera bina.jpeg' },
];

let current = 0;
let isPlaying = false;     
// ===== Helpers     '

const fmt = s => (!Number.isFinite(s) ? "0:00" : `${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,"0")}`);

// normalize links (fix cases like 'hhttps://')
const normalizeUrl = u => (typeof u === "string" ? u.replace(/^hhttps?:/, "https:") : u);

// safe trim for cover paths containing stray spaces
const safe = v => (typeof v === "string" ? v.trim() : v);

function toastMsg(msg="", ms=1600){
  if(!msg) return;
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(()=>toast.classList.remove("show"), ms);
}

// ===== Core
function loadSong(i){
  current = i;
  const t = playlist[i];

  songTitle.textContent = t.title;
  artistName.textContent = t.artist;
  albumArt.src = safe(t.cover);
  albumArt.alt = `${t.title} — ${t.artist}`;
  audio.src = safe(t.src);

  progressBar.style.width = "0%";
  currentTimeEl.textContent = "0:00";
  durationEl.textContent = "0:00";

  // highlight
  [...playlistEl.children].forEach((el, idx)=> el.classList.toggle("active", idx===current));
}

function playSong(){
  audio.play().then(()=>{
    isPlaying = true;
    playIcon.classList.add("hidden");
    pauseIcon.classList.remove("hidden");
  }).catch(()=>toastMsg("Playback failed"));
}
function pauseSong(){
  audio.pause();
  isPlaying = false;
  playIcon.classList.remove("hidden");
  pauseIcon.classList.add("hidden");
}

function nextIndex(){ return (current + 1) % playlist.length; }
function prevIndex(){ return (current - 1 + playlist.length) % playlist.length; }

function nextSong(){ loadSong(nextIndex()); playSong(); }
function prevSong(){ loadSong(prevIndex()); playSong(); }

// ===== Events
playPauseBtn.addEventListener("click", ()=> isPlaying ? pauseSong() : playSong());
nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);

// Progress & time
audio.addEventListener("timeupdate", ()=>{
  if(!Number.isFinite(audio.duration)) return;
  const pct = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = pct + "%";
  currentTimeEl.textContent = fmt(audio.currentTime);
  durationEl.textContent = fmt(audio.duration);
});

progressContainer.addEventListener("click", e=>{
  const r = progressContainer.getBoundingClientRect();
  const ratio = (e.clientX - r.left)/r.width;
  if (Number.isFinite(audio.duration)) audio.currentTime = ratio*audio.duration;
});

// Stop at end (no auto-next)
audio.addEventListener("ended", ()=> pauseSong());

// Keyboard shortcuts
window.addEventListener("keydown", e=>{
  const tag = (e.target.tagName||"").toLowerCase();
  if (tag==="input"||tag==="textarea") return;
  if (e.code==="Space"){ e.preventDefault(); isPlaying?pauseSong():playSong(); }
  if (e.key==="ArrowRight"){ audio.currentTime += 5; }
  if (e.key==="ArrowLeft"){ audio.currentTime -= 5; }
});

// ===== Build playlist UI (YouTube icon sits right next to title)
function trackEl(song, i){
  const el = document.createElement("div");
  el.className = "track";
  el.setAttribute("role","listitem");
  el.tabIndex = 0;

  const yt = song.yt ? normalizeUrl(song.yt) : null;

  el.innerHTML = `   
    <img class="track-cover" src="${safe(song.cover)}" alt="${song.title} cover"/>

    <div class="track-info">
      <div class="title-row">

        <div class="track-title" title="${song.title}">${song.title}</div>

        ${yt ? `
          <a class="yt-btn" href="${yt}" target="_blank" rel="noopener"
             title="Watch on YouTube" aria-label="Watch ${song.title} on YouTube">
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
              <path d="M23.5 6.2a4 4 0 0 0-2.8-2.8C18.9 3 12 3 12 3s-6.9 0-8.7.4A4 4 0 0 0 .5 6.2 41 41 0 0 0 0 12a41 41 0 0 0 .5 5.8 4 4 0 0 0 2.8 2.8C5.1 21 12 21 12 21s6.9 0 8.7-.4a4 4 0 0 0 2.8-2.8A41 41 0 0 0 24 12a41 41 0 0 0-.5-5.8zM9.8 15.5V8.5L15.6 12l-5.8 3.5z" fill="red"/>
            </svg>
          </a>
        ` : ``}

      </div>

      <div class="track-artist">${song.artist}</div>
    </div>
  `;

  // clicking row plays the song
  el.addEventListener("click", ()=>{ loadSong(i); playSong(); });

  // Clicking YT button shouldn't trigger play
  const link = el.querySelector(".yt-btn");
  if (link) link.addEventListener("click", ev => ev.stopPropagation());

  return el;
}


function buildPlaylist(){
  playlistEl.innerHTML = "";
  playlist.forEach((s, i)=> playlistEl.appendChild(trackEl(s, i)));
}

// ===== Init
(function init(){
  buildPlaylist();
  loadSong(0);
})();
