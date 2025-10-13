// Estado do player
let spotifyPlayer = null;
let deviceId = null;
let isPlaying = false;
let currentTrack = null;
let progressInterval = null;

// Inicialização quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    initializeSpotify();
});

function initializeSpotify() {
    // Verificar se já está autenticado
    const token = getAccessToken();
    if (token) {
        initializePlayer(token);
    } else {
        showLoginButton();
    }
}

function showLoginButton() {
    const loginBtn = document.getElementById('login-btn');
    loginBtn.addEventListener('click', authenticateSpotify);
}

function authenticateSpotify() {
    const authUrl = `https://accounts.spotify.com/authorize?` +
        `client_id=${SPOTIFY_CONFIG.CLIENT_ID}&` +
        `response_type=token&` +
        `redirect_uri=${encodeURIComponent(SPOTIFY_CONFIG.REDIRECT_URI)}&` +
        `scope=${encodeURIComponent(SPOTIFY_CONFIG.SCOPE)}&` +
        `show_dialog=true`;
    
    window.location.href = authUrl;
}

function getAccessToken() {
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.substring(1));
    const token = params.get('access_token');
    
    if (token) {
        localStorage.setItem('spotify_token', token);
        // Limpar a URL
        window.history.replaceState({}, document.title, window.location.pathname);
        return token;
    }
    
    return localStorage.getItem('spotify_token');
}

function initializePlayer(token) {
    window.onSpotifyWebPlaybackSDKReady = () => {
        spotifyPlayer = new Spotify.Player({
            name: 'Site Romântico Player',
            getOAuthToken: cb => { cb(token); },
            volume: 0.5
        });

        // Event listeners
        spotifyPlayer.addListener('ready', ({ device_id }) => {
            console.log('Ready with Device ID', device_id);
            deviceId = device_id;
            showPlayer();
            // Tocar música romântica automaticamente
            playRomanticTrack();
        });

        spotifyPlayer.addListener('not_ready', ({ device_id }) => {
            console.log('Device ID has gone offline', device_id);
        });

        spotifyPlayer.addListener('player_state_changed', (state) => {
            if (!state) return;
            
            currentTrack = state.track_window.current_track;
            isPlaying = !state.paused;
            
            updatePlayerUI();
            updateProgress(state.position, state.duration);
        });

        // Conectar ao player
        spotifyPlayer.connect();
    };
}

function showPlayer() {
    document.getElementById('spotify-login').style.display = 'none';
    document.getElementById('spotify-player').style.display = 'block';
    
    // Adicionar event listeners aos controles
    setupPlayerControls();
}

function setupPlayerControls() {
    const playPauseBtn = document.getElementById('play-pause-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const volumeSlider = document.getElementById('volume-slider');
    const progressBar = document.querySelector('.progress-bar');

    playPauseBtn.addEventListener('click', togglePlayPause);
    prevBtn.addEventListener('click', previousTrack);
    nextBtn.addEventListener('click', nextTrack);
    
    volumeSlider.addEventListener('input', (e) => {
        spotifyPlayer.setVolume(e.target.value / 100);
    });

    progressBar.addEventListener('click', (e) => {
        const rect = progressBar.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        const position = Math.floor(percent * currentTrack.duration_ms);
        spotifyPlayer.seek(position);
    });
}

function playRomanticTrack() {
    if (!deviceId) return;
    
    const randomTrack = ROMANTIC_TRACKS[Math.floor(Math.random() * ROMANTIC_TRACKS.length)];
    const token = getAccessToken();
    
    fetch(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, {
        method: 'PUT',
        body: JSON.stringify({
            uris: [`spotify:track:${randomTrack}`]
        }),
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    }).then(() => {
        console.log('Música romântica iniciada!');
    }).catch(error => {
        console.error('Erro ao tocar música:', error);
    });
}

function togglePlayPause() {
    spotifyPlayer.togglePlay();
}

function previousTrack() {
    spotifyPlayer.previousTrack();
}

function nextTrack() {
    spotifyPlayer.nextTrack();
}

function updatePlayerUI() {
    if (!currentTrack) return;
    
    const trackImage = document.getElementById('track-image');
    const trackName = document.getElementById('track-name');
    const trackArtist = document.getElementById('track-artist');
    const playPauseIcon = document.querySelector('#play-pause-btn i');
    
    trackImage.src = currentTrack.album.images[0].url;
    trackName.textContent = currentTrack.name;
    trackArtist.textContent = currentTrack.artists[0].name;
    
    playPauseIcon.className = isPlaying ? 'fas fa-pause' : 'fas fa-play';
}

function updateProgress(position, duration) {
    const progress = document.getElementById('progress');
    const currentTime = document.getElementById('current-time');
    const totalTime = document.getElementById('total-time');
    
    if (duration > 0) {
        const percent = (position / duration) * 100;
        progress.style.width = `${percent}%`;
        
        currentTime.textContent = formatTime(position);
        totalTime.textContent = formatTime(duration);
    }
}

function formatTime(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// Função para tocar uma música específica
function playSpecificTrack(trackId) {
    if (!deviceId) return;
    
    const token = getAccessToken();
    
    fetch(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, {
        method: 'PUT',
        body: JSON.stringify({
            uris: [`spotify:track:${trackId}`]
        }),
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });
}

// Função para alterar a música romântica padrão
function setRomanticTracks(trackIds) {
    ROMANTIC_TRACKS.length = 0;
    ROMANTIC_TRACKS.push(...trackIds);
}

// Exportar funções para uso global
window.playSpecificTrack = playSpecificTrack;
window.setRomanticTracks = setRomanticTracks;
