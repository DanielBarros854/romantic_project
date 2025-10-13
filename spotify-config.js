// CONFIGURAÇÃO DO SPOTIFY
// Para usar esta integração, você precisa:

// 1. Criar uma conta de desenvolvedor no Spotify:
//    https://developer.spotify.com/dashboard

// 2. Criar uma nova aplicação e obter:
//    - Client ID
//    - Client Secret (opcional para este caso)

// 3. Configurar as URLs de redirecionamento:
//    - Adicionar: http://localhost:3000/callback (para desenvolvimento)
//    - Adicionar: https://seudominio.com/callback (para produção)

// 4. Substituir o Client ID abaixo:
const SPOTIFY_CONFIG = {
    CLIENT_ID: 'YOUR_SPOTIFY_CLIENT_ID', // SUBSTITUA AQUI
    REDIRECT_URI: window.location.origin + '/callback',
    SCOPE: 'streaming user-read-email user-read-private user-read-playback-state user-modify-playback-state'
};

// Músicas românticas pré-configuradas (você pode alterar os IDs)
const ROMANTIC_TRACKS = [
    '4iV5W9uYEdYUVa79Axb7Rh', // "Perfect" - Ed Sheeran
    '6P2r0HAlWYpV5b3Wh00mYp', // "All of Me" - John Legend  
    '7qiZfU4dY1lWllzX7mPBI3', // "Thinking Out Loud" - Ed Sheeran
    '3n3Ppam7vgaVa1iaRUpq9e', // "A Thousand Years" - Christina Perri
    '6Qcn6TJ4Qa6JDR7syf2A8F', // "At Last" - Etta James
    '4r6eNCsrZnQWJzzkFgExsD', // "Make You Feel My Love" - Adele
    '3n3Ppam7vgaVa1iaRUpq9e', // "A Thousand Years" - Christina Perri
    '6Qcn6TJ4Qa6JDR7syf2A8F'  // "At Last" - Etta James
];

// Como encontrar o ID de uma música no Spotify:
// 1. Abra o Spotify Web Player
// 2. Vá para a música desejada
// 3. Clique nos três pontos (...) > Compartilhar > Copiar link do Spotify
// 4. O link será algo como: https://open.spotify.com/track/4iV5W9uYEdYUVa79Axb7Rh
// 5. O ID é a parte após "track/": 4iV5W9uYEdYUVa79Axb7Rh

// Função para adicionar suas próprias músicas
function addRomanticTrack(trackId) {
    if (!ROMANTIC_TRACKS.includes(trackId)) {
        ROMANTIC_TRACKS.push(trackId);
        console.log('Música adicionada:', trackId);
    }
}

// Função para remover uma música
function removeRomanticTrack(trackId) {
    const index = ROMANTIC_TRACKS.indexOf(trackId);
    if (index > -1) {
        ROMANTIC_TRACKS.splice(index, 1);
        console.log('Música removida:', trackId);
    }
}

// Função para listar todas as músicas
function listRomanticTracks() {
    console.log('Músicas românticas configuradas:', ROMANTIC_TRACKS);
    return ROMANTIC_TRACKS;
}

// Exportar configurações
window.SPOTIFY_CONFIG = SPOTIFY_CONFIG;
window.ROMANTIC_TRACKS = ROMANTIC_TRACKS;
window.addRomanticTrack = addRomanticTrack;
window.removeRomanticTrack = removeRomanticTrack;
window.listRomanticTracks = listRomanticTracks;
