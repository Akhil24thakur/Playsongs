document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const coverArt = document.getElementById('cover-art');
    const songTitle = document.getElementById('song-title');
    const songArtist = document.getElementById('song-artist');
    const audioSource = document.getElementById('audio-source');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const progressContainer = document.getElementById('progress-container');
    const progressBar = document.getElementById('progress-bar');
    const currentTimeEl = document.getElementById('current-time');
    const totalDurationEl = document.getElementById('total-duration');
    const playlistEl = document.getElementById('playlist');

    // Song data array
    const songs = [
    { title: 'Once Lost Now Found', artist: 'Akhil', src: 'songs/Once Lost.mp3', cover: 'images/lost.webp' },
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

    // State
    let currentSongIndex = 0;
    let isPlaying = false;

    // --- FUNCTIONS ---

    // Function to load a song
    function loadSong(song) {
        songTitle.textContent = song.title;
        songArtist.textContent = song.artist;
        audioSource.src = song.src;
        coverArt.src = song.cover;
        updatePlaylistUI();
    }

    // Function to play song
    function playSong() {
        isPlaying = true;
        audioSource.play();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        coverArt.classList.add('playing');
        showPlayNotification();
    }

    // Function to pause song
    function pauseSong() {
        isPlaying = false;
        audioSource.pause();
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        coverArt.classList.remove('playing');
    }

    // Function to play previous song
    function prevSong() {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong(songs[currentSongIndex]);
        playSong();
    }

    // Function to play next song
    function nextSong() {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(songs[currentSongIndex]);
        playSong();
    }

    // Update progress bar
    function updateProgress(e) {
        const { duration, currentTime } = e.srcElement;
        const progressPercent = (currentTime / duration) * 100;
        progressBar.style.width = `${progressPercent}%`;

        // Update time display
        totalDurationEl.textContent = formatTime(duration);
        currentTimeEl.textContent = formatTime(currentTime);
    }
    
    // Set progress bar on click
    function setProgress(e) {
        const width = this.clientWidth;
        const clickX = e.offsetX;
        const duration = audioSource.duration;
        audioSource.currentTime = (clickX / width) * duration;
    }

    // Format time (e.g., 0:00)
    function formatTime(seconds) {
        if (isNaN(seconds)) return '0:00';
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // Generate Playlist
    function generatePlaylist() {
        songs.forEach((song, index) => {
            const li = document.createElement('li');
            li.dataset.index = index;
            li.innerHTML = `
                <div class="playlist-item-details">
                    <h3>${song.title}</h3>
                    <p>${song.artist}</p>
                </div>
            `;
            playlistEl.appendChild(li);
        });
    }
    
    // Update active class in playlist
    function updatePlaylistUI() {
        const playlistItems = playlistEl.querySelectorAll('li');
        playlistItems.forEach((item, index) => {
            if (index === currentSongIndex) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    // Handle playlist click
    function playFromPlaylist(e) {
        const li = e.target.closest('li');
        if (li) {
            const index = parseInt(li.dataset.index, 10);
            if (index !== currentSongIndex) {
                currentSongIndex = index;
                loadSong(songs[currentSongIndex]);
            }
            playSong();
        }
    }
    
    // --- NOTIFICATIONS ---
    
    // Request permission for notifications on first interaction
    function requestNotificationPermission() {
        if ('Notification' in window && Notification.permission !== 'granted' && Notification.permission !== 'denied') {
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    console.log('Notification permission granted.');
                }
            });
        }
    }

    // Show notification when a song starts playing
    function showPlayNotification() {
        if ('Notification' in window && Notification.permission === 'granted') {
            const currentSong = songs[currentSongIndex];
            const notification = new Notification(currentSong.title, {
                body: `Now playing: ${currentSong.artist}`,
                icon: currentSong.cover,
                silent: true // Prevents the default notification sound
            });
        }
    }

    // --- EVENT LISTENERS ---

    playPauseBtn.addEventListener('click', () => {
        // Request notification on first play click
        if(Notification.permission !== 'granted' && Notification.permission !== 'denied') {
            requestNotificationPermission();
        }
        
        isPlaying ? pauseSong() : playSong();
    });

    prevBtn.addEventListener('click', prevSong);
    nextBtn.addEventListener('click', nextSong);
    audioSource.addEventListener('timeupdate', updateProgress);
    audioSource.addEventListener('ended', nextSong);
    progressContainer.addEventListener('click', setProgress);
    playlistEl.addEventListener('click', playFromPlaylist);

    // --- INITIALIZATION ---
    generatePlaylist();
    loadSong(songs[currentSongIndex]);
});