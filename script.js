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
     { title: 'Stay Away', artist: 'Akhil', src: 'songs/Stay away.mp3', cover: 'images/stay away.png' },
    { title: 'Choti Choti Batan', artist: 'Akhil', src: 'songs/batan.mp3', cover: 'images/batan.png' },
    { title: 'Karma', artist: 'Akhil', src: 'songs/karma.mp3', cover: 'images/karma.png' },
    { title: 'Tere Bina', artist: 'Akhil', src: 'songs/Tere Bina.mp3', cover: 'images/Tere Bina.png' },
    { title: 'Divided Hearts', artist: 'Akhil', src: 'songs/div.mp3', cover: 'images/div.png' },
    { title: 'Rah Main Kanta', artist: 'Akhil', src: 'songs/rah.mp3', cover: 'images/rah.png ' },
    { title: 'Soul in Simplicity', artist: 'Akhil', src: 'songs/Soul in Simplicity.mp3', cover: 'images/simple.png ' },
    { title: 'Tera Sath  [Lofi + Slowed Reverse]', artist: 'Akhil', src: 'songs/Tera sath lofi.mp3', cover: 'images/TeraSath.jpeg' },
    { title: 'New City', artist: 'Akhil', src: 'songs/new city.mp3', cover: 'images/ak.png ' },
    { title: 'Vibes with you', artist: 'Akhil', src: 'songs/Vibes With You.mp3', cover: 'images/Vibes with you.png ' },
    { title: 'Mann Ka Akrosh', artist: 'Akhil', src: 'songs/Mann Ka Akrosh.mp3', cover: 'images/Mann Ka Akrosh.png  ' },
    { title: 'With You ', artist: 'Akhil', src: 'songs/WithYou .mp3', cover: 'images/WithYou.jpeg' },
    { title: 'She Comes In', artist: 'Akhil', src: 'songs/She comes in.mp3', cover: 'images/she comes In.png' },
    { title: 'Without You', artist: 'Akhil', src: 'songs/WithOut you.mp3', cover: 'images/WithOut YOU.jpg' },
    { title: 'Because Of You', artist: 'Akhil', src: 'songs/Because of You.mp3', cover: 'images/OF you.png' },
    { title: 'Dont Fight', artist: 'Akhil', src: 'songs/Dont  Fight.mp3', cover: 'images/fight.png' },
    { title: 'Dream With You', artist: 'Akhil', src: 'songs/My Dreams.mp3', cover: 'images/MY Dreams.webp'},
    { title: 'Kahani Suno', artist: 'Akhil', src: 'songs/kahani.mp3', cover: 'images/Kahani.png'  },
    { title: 'Dooriyan', artist: 'Akhil', src: 'songs/Dooriyan.mp3', cover: 'images/Dooriyan.png' },
    { title: 'Samjho Na', artist: 'Akhil', src: 'songs/Samjho.mp3', cover: 'images/Samjho.png' },
    { title: 'Tera Sath', artist: 'Akhil', src: 'songs/TeraSath.mp3', cover: 'images/TeraSath.jpeg' },
    { title: 'One Sided Love', artist: 'Akhil', src: 'songs/One Sided Love.mp3', cover: 'images/One Sided Love.png' },
    { title: 'Majestic', artist: 'Akhil', src: 'songs/Majestic.mp3', cover: 'images/Majestic.png' },
    { title: 'My Queen', artist: 'Akhil', src: 'songs/My Queen.mp3', cover: 'images/My Queen.jpeg' },
    { title: 'Winters In Shimla', artist: 'Akhil', src: 'songs/Winters  In Shimla.mp3', cover: 'images/Shimla.jpg' },
    { title: 'Meri Dua', artist: 'Akhil', src: 'songs/Meri Dua.mp3', cover: 'images/meri-dua.jpg' },
    { title: 'Bittersweet Memories', artist: 'Akhil', src: 'songs/Bittersweet Memories.mp3', cover: 'images/Bittersweet Memories.jpeg' },
    { title: 'Dil Di Kahani', artist: 'Akhil', src: 'songs/Dil Di Kahani.mp3', cover: 'images/Dil Di Kahani.jpeg' },
    { title: 'First Meet', artist: 'Akhil', src: 'songs/First Meet.mp3', cover: 'images/First Meet.jpeg' },
    { title: 'Nature Touch', artist: 'Akhil', src: 'songs/Nature Touch.mp3', cover: 'images/Nature Touch.jpeg' },
    { title: 'Pyar Ka Safar', artist: 'Akhil', src: 'songs/Pyar Ka Safar.mp3', cover: 'images/pyar ka safat .jpeg' },
    { title: 'Sari Sari Raat', artist: 'Akhil', src: 'songs/Sari Sari Raat.mp3', cover: 'images/meri-dua.jpg' },
    { title: 'Tere Bin', artist: 'Akhil', src: 'songs/Tere Bin.mp3', cover: 'images/tera bina.jpeg' },
    ];


let current = 0;
let isPlaying = false;

// ===== Helpers
const fmt = s => (!Number.isFinite(s) ? "0:00" : `${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,"0")}`);

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
  albumArt.src = t.cover;
  albumArt.alt = `${t.title} — ${t.artist}`;
  audio.src = t.src;

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

// Build playlist UI
function trackEl(song, i){
  const el = document.createElement("div");
  el.className = "track";
  el.innerHTML = `
    <img class="track-cover" src="${song.cover}" alt="${song.title} cover"/>
    <div class="track-info">
      <div class="track-title" title="${song.title}">${song.title}</div>
      <div class="track-artist">${song.artist}</div>
    </div>`;
  el.addEventListener("click", ()=>{ loadSong(i); playSong(); });
  el.tabIndex = 0;
  return el;
}
function buildPlaylist(){
  playlistEl.innerHTML = "";
  playlist.forEach((s, i)=> playlistEl.appendChild(trackEl(s, i)));
}

// Init
(function init(){
  buildPlaylist();
  loadSong(0);
})();
