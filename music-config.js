// CONFIGURAÇÃO DE MÚSICAS PRÉ-SELECIONADAS
// Músicas românticas que tocam automaticamente sem login

const ROMANTIC_MUSIC_CONFIG = {
    // Música principal (toca automaticamente)
    defaultTrack: {
        id: '3HltzabRQk8D1ZIeacLDFy', // "Espelho" - Jorge e Mateus
        title: 'Espelho',
        artist: 'Jorge e Mateus',
        description: 'Nossa música especial para este momento romântico'
    },
    
    // Lista de músicas românticas alternativas
    romanticTracks: [
        {
            id: '3HltzabRQk8D1ZIeacLDFy',
            title: 'Espelho',
            artist: 'Jorge e Mateus',
            description: 'Nossa música especial para este momento'
        },
        {
            id: '4iV5W9uYEdYUVa79Axb7Rh',
            title: 'Perfect',
            artist: 'Ed Sheeran',
            description: 'A música perfeita para este momento'
        },
        {
            id: '6P2r0HAlWYpV5b3Wh00mYp',
            title: 'All of Me',
            artist: 'John Legend',
            description: 'Toda minha vida, toda minha alma'
        },
        {
            id: '7qiZfU4dY1lWllzX7mPBI3',
            title: 'Thinking Out Loud',
            artist: 'Ed Sheeran',
            description: 'Pensando em voz alta sobre nosso amor'
        },
        {
            id: '3n3Ppam7vgaVa1iaRUpq9e',
            title: 'A Thousand Years',
            artist: 'Christina Perri',
            description: 'Mil anos não seriam suficientes'
        },
        {
            id: '6Qcn6TJ4Qa6JDR7syf2A8F',
            title: 'At Last',
            artist: 'Etta James',
            description: 'Finalmente, encontrei você'
        },
        {
            id: '4r6eNCsrZnQWJzzkFgExsD',
            title: 'Make You Feel My Love',
            artist: 'Adele',
            description: 'Fazer você sentir meu amor'
        }
    ]
};

// Função para obter a música padrão
function getDefaultTrack() {
    return ROMANTIC_MUSIC_CONFIG.defaultTrack;
}

// Função para obter uma música aleatória
function getRandomTrack() {
    const tracks = ROMANTIC_MUSIC_CONFIG.romanticTracks;
    return tracks[Math.floor(Math.random() * tracks.length)];
}

// Função para obter uma música específica por ID
function getTrackById(trackId) {
    return ROMANTIC_MUSIC_CONFIG.romanticTracks.find(track => track.id === trackId);
}

// Função para alterar a música padrão
function setDefaultTrack(trackId) {
    const track = getTrackById(trackId);
    if (track) {
        ROMANTIC_MUSIC_CONFIG.defaultTrack = track;
        updateEmbedPlayer(track);
        console.log('Música padrão alterada para:', track.title);
    }
}

// Função para atualizar o player embed
function updateEmbedPlayer(track) {
    const iframe = document.getElementById('spotify-iframe');
    const title = document.querySelector('.music-title');
    const description = document.querySelector('.music-description');
    
    if (iframe && track) {
        iframe.src = `https://open.spotify.com/embed/track/${track.id}?utm_source=generator&theme=0`;
        if (title) title.textContent = `${track.title} - ${track.artist}`;
        if (description) description.textContent = track.description;
    }
}

// Função para tocar uma música específica
function playTrack(trackId) {
    const track = getTrackById(trackId);
    if (track) {
        updateEmbedPlayer(track);
        console.log('Tocando:', track.title);
    }
}

// Função para tocar uma música aleatória
function playRandomTrack() {
    const track = getRandomTrack();
    updateEmbedPlayer(track);
    console.log('Tocando música aleatória:', track.title);
}

// Função para listar todas as músicas disponíveis
function listAvailableTracks() {
    console.log('Músicas românticas disponíveis:');
    ROMANTIC_MUSIC_CONFIG.romanticTracks.forEach((track, index) => {
        console.log(`${index + 1}. ${track.title} - ${track.artist} (ID: ${track.id})`);
    });
    return ROMANTIC_MUSIC_CONFIG.romanticTracks;
}

// Exportar funções para uso global
window.ROMANTIC_MUSIC_CONFIG = ROMANTIC_MUSIC_CONFIG;
window.getDefaultTrack = getDefaultTrack;
window.getRandomTrack = getRandomTrack;
window.getTrackById = getTrackById;
window.setDefaultTrack = setDefaultTrack;
window.updateEmbedPlayer = updateEmbedPlayer;
window.playTrack = playTrack;
window.playRandomTrack = playRandomTrack;
window.listAvailableTracks = listAvailableTracks;
