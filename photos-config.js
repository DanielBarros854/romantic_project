// CONFIGURAÇÃO DAS FOTOS DO CARROSSEL
// Personalize as fotos e legendas do carrossel romântico

const PHOTOS_CONFIG = {
    // Lista de fotos com suas legendas
    photos: [
        {
            filename: 'WhatsApp Image 2025-10-13 at 19.51.32.jpeg',
            caption: 'Nosso primeiro encontro',
            description: 'O momento em que tudo começou'
        },
        {
            filename: 'WhatsApp Image 2025-10-13 at 19.51.32 (1).jpeg',
            caption: 'Aquele pôr do sol',
            description: 'Quando o mundo parou para nós'
        },
        {
            filename: 'WhatsApp Image 2025-10-13 at 19.51.32 (2).jpeg',
            caption: 'Sorrisos compartilhados',
            description: 'A felicidade em cada momento'
        },
        {
            filename: 'WhatsApp Image 2025-10-13 at 19.51.33.jpeg',
            caption: 'Aventuras juntos',
            description: 'Descobrindo o mundo lado a lado'
        },
        {
            filename: 'WhatsApp Image 2025-10-13 at 19.51.33 (1).jpeg',
            caption: 'Momentos únicos',
            description: 'Cada instante é especial'
        },
        {
            filename: 'WhatsApp Image 2025-10-13 at 19.51.34.jpeg',
            caption: 'Memórias especiais',
            description: 'Guardando cada detalhe no coração'
        },
        {
            filename: 'WhatsApp Image 2025-10-13 at 19.51.34 (1).jpeg',
            caption: 'Nossa história',
            description: 'Escrevendo nosso próprio conto de fadas'
        }
    ],
    
    // Configurações do carrossel
    settings: {
        autoPlay: true,
        autoPlayInterval: 5000, // 5 segundos
        transitionSpeed: 500, // 0.5 segundos
        showDots: false,
        showArrows: true
    }
};

// Função para obter todas as fotos
function getAllPhotos() {
    return PHOTOS_CONFIG.photos;
}

// Função para obter uma foto específica por índice
function getPhotoByIndex(index) {
    return PHOTOS_CONFIG.photos[index];
}

// Função para adicionar uma nova foto
function addPhoto(filename, caption, description = '') {
    PHOTOS_CONFIG.photos.push({
        filename: filename,
        caption: caption,
        description: description
    });
    console.log('Foto adicionada:', caption);
}

// Função para remover uma foto por índice
function removePhoto(index) {
    if (index >= 0 && index < PHOTOS_CONFIG.photos.length) {
        const removed = PHOTOS_CONFIG.photos.splice(index, 1);
        console.log('Foto removida:', removed[0].caption);
    }
}

// Função para atualizar a legenda de uma foto
function updatePhotoCaption(index, newCaption) {
    if (index >= 0 && index < PHOTOS_CONFIG.photos.length) {
        PHOTOS_CONFIG.photos[index].caption = newCaption;
        console.log('Legenda atualizada:', newCaption);
    }
}

// Função para atualizar a descrição de uma foto
function updatePhotoDescription(index, newDescription) {
    if (index >= 0 && index < PHOTOS_CONFIG.photos.length) {
        PHOTOS_CONFIG.photos[index].description = newDescription;
        console.log('Descrição atualizada:', newDescription);
    }
}

// Função para alterar configurações do carrossel
function updateCarouselSettings(newSettings) {
    PHOTOS_CONFIG.settings = { ...PHOTOS_CONFIG.settings, ...newSettings };
    console.log('Configurações do carrossel atualizadas:', newSettings);
}

// Função para obter configurações atuais
function getCarouselSettings() {
    return PHOTOS_CONFIG.settings;
}

// Função para listar todas as fotos
function listPhotos() {
    console.log('Fotos do carrossel:');
    PHOTOS_CONFIG.photos.forEach((photo, index) => {
        console.log(`${index + 1}. ${photo.caption} - ${photo.filename}`);
    });
    return PHOTOS_CONFIG.photos;
}

// Exportar funções para uso global
window.PHOTOS_CONFIG = PHOTOS_CONFIG;
window.getAllPhotos = getAllPhotos;
window.getPhotoByIndex = getPhotoByIndex;
window.addPhoto = addPhoto;
window.removePhoto = removePhoto;
window.updatePhotoCaption = updatePhotoCaption;
window.updatePhotoDescription = updatePhotoDescription;
window.updateCarouselSettings = updateCarouselSettings;
window.getCarouselSettings = getCarouselSettings;
window.listPhotos = listPhotos;
