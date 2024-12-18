const audio = new Audio();
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const coverArt = document.getElementById('cover-art');
const progressBar = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const playlistItems = document.getElementById('playlist-items');
const visualizerCanvas = document.getElementById('visualizer-canvas');           
const ctx = visualizerCanvas.getContext('3d');
let isPlaying = false;
let currentSongIndex = 0;
let audioContext; 
let analyser;
let source;

const playlist = [
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

function loadSong(index) {
    const song = playlist[index];
    audio.src = song.src;
    title.textContent = song.title;
    artist.textContent = song.artist;
    coverArt.src = song.cover;
    updatePlaylistUI(index);
}

function playSong() {
    isPlaying = true;
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    audio.play();
    // Resume AudioContext after user gesture
    if (audioContext && audioContext.state === 'suspended') {
        audioContext.resume();
    }
}

function pauseSong() {
    isPlaying = false;
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
    audio.pause();
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    loadSong(currentSongIndex);
    playSong();
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    loadSong(currentSongIndex);
    playSong();
}

playBtn.addEventListener('click', () => {
    isPlaying ? pauseSong() : playSong();
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

audio.addEventListener('timeupdate', updateProgress);
audio.addEventListener('ended', nextSong);

function updateProgress() {
    const { duration, currentTime } = audio;
    const progressPercent = (currentTime / duration) * 100;
    progressBar.style.width = `${progressPercent}%`;

    currentTimeEl.textContent = formatTime(currentTime);
    durationEl.textContent = formatTime(duration);
}

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

progressContainer.addEventListener('click', (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    audio.currentTime = (clickX / width) * audio.duration;
});

function createPlaylist() {
    playlist.forEach((song, index) => {
        const li = document.createElement('li');
        li.textContent = `${song.title} - ${song.artist}`;
        li.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(currentSongIndex);
            playSong();
        });
        playlistItems.appendChild(li);
    });
}

function updatePlaylistUI(index) {
    const playlistLiItems = playlistItems.querySelectorAll('li');
    playlistLiItems.forEach((item, i) => {
        item.classList.toggle('playing', i === index);
    });
}

// Visualizer
function setupVisualizer() {
    // Wait for user gesture to create AudioContext
    document.body.addEventListener('click', () => {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            analyser = audioContext.createAnalyser();
            source = audioContext.createMediaElementSource(audio);
            source.connect(analyser);
            analyser.connect(audioContext.destination);

            analyser.fftSize = 256;
            const bufferLength = analyser.frequencyBinCount;
            const dataArray = new Uint8Array(bufferLength);

            function draw() {
                requestAnimationFrame(draw);
                analyser.getByteFrequencyData(dataArray);

                ctx.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);

                const barWidth = (visualizerCanvas.width / bufferLength) * 2.5;
                let x = 0;

                dataArray.forEach((value) => {
                    const barHeight = value / 2;
                    ctx.fillStyle = `rgb(${barHeight + 150}, 50, 100)`;
                    ctx.fillRect(x, visualizerCanvas.height - barHeight, barWidth, barHeight);
                    x += barWidth + 1;
                });
            }

            draw();
        }
    });
}

// Resize visualizer dynamically
window.addEventListener('resize', () => {
    visualizerCanvas.width = visualizerCanvas.offsetWidth;
    visualizerCanvas.height = visualizerCanvas.offsetHeight;
});

loadSong(currentSongIndex);
createPlaylist();
setupVisualizer();
