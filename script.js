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
const ctx = visualizerCanvas.getContext('2d');

let isPlaying = false;
let currentSongIndex = 0;

const playlist = [
    { title: 'Meri Dua', artist: 'Akhil', src: 'songs/Meri Dua.mp3', cover: 'images/meri-dua.jpg' },
    { title: 'Bittersweet Memories', artist: 'Akhil', src: 'songs/Bittersweet Memories.mp3', cover: 'images/song1.jpg' },
    { title: 'Dil Di Kahani', artist: 'Akhil', src: 'songs/Dil Di Kahani.mp3', cover: 'images/song2.jpg' },
    { title: 'Dil Rota hai', artist: 'Akhil', src: 'songs/Dil Rota hai.mp3', cover: 'images/song3.jpg' },
    { title: 'First Meet', artist: 'Akhil', src: 'songs/First Meet.mp3', cover: 'images/song3.jpg' },
    { title: 'Nature Touch', artist: 'Akhil', src: 'songs/Nature Touch.mp3', cover: 'images/song3.jpg' },
    { title: 'Nature', artist: 'Akhil', src: 'songs/Nature.mp3', cover: 'images/song3.jpg' },
    { title: 'Pehli Mulaqat', artist: 'Akhil', src: 'songs/Pehli Mulaqat.mp3', cover: 'images/song3.jpg' },
    { title: 'Pyar Ka Safar', artist: 'Akhil', src: 'songs/Pyar Ka Safar.mp3', cover: 'images/song3.jpg' },
    { title: 'Sari Sari Raat', artist: 'Akhil', src: 'songs/Sari Sari Raat.mp3', cover: 'images/song3.jpg' },
    { title: 'Tere Bin', artist: 'Akhil', src: 'songs/Tere Bin.mp3', cover: 'images/song3.jpg' },

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
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = audioContext.createAnalyser();
    const source = audioContext.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(audioContext.destination);

    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    visualizerCanvas.width = visualizerCanvas.offsetWidth;
    visualizerCanvas.height = visualizerCanvas.offsetHeight;

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

loadSong(currentSongIndex);
createPlaylist();

setupVisualizer();