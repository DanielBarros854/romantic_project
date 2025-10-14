// Variáveis globais
let currentSlide = 0;
let timerInterval;
let carouselTimer; // Timer específico para o carrossel
let startDate = new Date('2025-01-01T00:00:00-03:00');

// Inicialização quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Configurar botão de entrada
    const enterBtn = document.getElementById('enter-btn');
    enterBtn.addEventListener('click', showRomanticPage);
    
    // Inicializar carrossel
    initializeCarousel();
    
    // Inicializar contador de tempo
    initializeTimer();
    
    // Inicializar player de música
    initializeMusicPlayer();
    
    // Adicionar efeitos visuais
    addVisualEffects();
}

// Navegação entre páginas
function showRomanticPage() {
    const homePage = document.getElementById('home-page');
    const romanticPage = document.getElementById('romantic-page');
    
    // Efeito de transição
    homePage.style.opacity = '0';
    homePage.style.transform = 'scale(0.8)';
    
    setTimeout(() => {
        homePage.classList.remove('active');
        romanticPage.classList.add('active');
        romanticPage.style.opacity = '0';
        romanticPage.style.transform = 'scale(1.1)';
        
        // Animar entrada da página romântica
        setTimeout(() => {
            romanticPage.style.transition = 'all 0.8s ease';
            romanticPage.style.opacity = '1';
            romanticPage.style.transform = 'scale(1)';
            
        }, 100);
    }, 500);
}


// Inicializar player de música
function initializeMusicPlayer() {
    // Configurar autoplay da música quando entrar na página romântica
    setupMusicAutoplay();
}

// Configurar autoplay da música
function setupMusicAutoplay() {
    // A música já está configurada para tocar automaticamente via embed
    // O Spotify embed permite autoplay em alguns casos
    console.log('Player de música inicializado - música pronta para tocar!');
}

// Carrossel de fotos
function initializeCarousel() {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    
    console.log(`Carrossel inicializado com ${totalSlides} fotos`);
    
    // Iniciar auto-play do carrossel
    startCarouselTimer();
}

// Iniciar timer do carrossel
function startCarouselTimer() {
    // Limpar timer existente se houver
    if (carouselTimer) {
        clearInterval(carouselTimer);
    }
    
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    
    // Auto-play do carrossel (5 segundos)
    carouselTimer = setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }, 5000);
}

// Parar timer do carrossel
function stopCarouselTimer() {
    if (carouselTimer) {
        clearInterval(carouselTimer);
        carouselTimer = null;
    }
}

// Resetar timer do carrossel
function resetCarouselTimer() {
    stopCarouselTimer();
    startCarouselTimer();
}

// Pausar carrossel
function pauseCarousel() {
    stopCarouselTimer();
    console.log('Carrossel pausado');
}

// Retomar carrossel
function resumeCarousel() {
    startCarouselTimer();
    console.log('Carrossel retomado');
}

// Alternar pausa/retomada do carrossel
function toggleCarousel() {
    if (carouselTimer) {
        pauseCarousel();
    } else {
        resumeCarousel();
    }
}

function changeSlide(direction) {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    
    currentSlide += direction;
    
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    
    updateCarousel();
    
    // Resetar timer quando usuário navega manualmente
    resetCarouselTimer();
    
    console.log(`Slide alterado para: ${currentSlide + 1}/${totalSlides} - Timer resetado`);
}

function updateCarousel() {
    const track = document.querySelector('.carousel-track');
    const slideWidth = 100; // 100% por slide
    const translateX = -currentSlide * slideWidth;
    
    track.style.transform = `translateX(${translateX}%)`;
}

// Contador de tempo
function initializeTimer() {
    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const now = new Date();
    const timeDiff = now - startDate;
    
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    
    // Atualizar elementos do DOM
    document.getElementById('days').textContent = padNumber(days);
    document.getElementById('hours').textContent = padNumber(hours);
    document.getElementById('minutes').textContent = padNumber(minutes);
    document.getElementById('seconds').textContent = padNumber(seconds);
}

function padNumber(num) {
    return num.toString().padStart(2, '0');
}

// Efeitos visuais
function addVisualEffects() {
    // Efeito de partículas de coração
    createHeartParticles();
    
    // Efeito de hover nos botões
    addButtonEffects();
    
    // Efeito de scroll suave
    addSmoothScroll();
}

function createHeartParticles() {
    setInterval(() => {
        if (Math.random() > 0.7) {
            createFloatingHeart();
        }
    }, 2000);
}

function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '💕';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = window.innerHeight + 'px';
    heart.style.fontSize = '20px';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '1';
    heart.style.animation = 'floatUp 4s linear forwards';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 4000);
}

function addButtonEffects() {
    const buttons = document.querySelectorAll('.romantic-btn, .carousel-btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

function addSmoothScroll() {
    // Adicionar scroll suave para elementos internos
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Adicionar CSS para animação de corações flutuantes
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    .page {
        transition: all 0.5s ease;
    }
    
    .romantic-btn, .carousel-btn {
        transition: all 0.3s ease;
    }
`;
document.head.appendChild(style);

// Função para alterar a data de início do contador
function setStartDate(dateString) {
    startDate = new Date(dateString);
    updateTimer();
}

// Exemplo de uso das funções (você pode chamar essas funções do console do navegador):
// setStartDate('2024-01-01'); // Substitua pela data desejada

// Exportar funções de controle do carrossel para uso global
window.changeSlide = changeSlide;
window.pauseCarousel = pauseCarousel;
window.resumeCarousel = resumeCarousel;
window.toggleCarousel = toggleCarousel;
window.resetCarouselTimer = resetCarouselTimer;

// Adicionar funcionalidade de teclado para o carrossel
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        changeSlide(-1);
    } else if (e.key === 'ArrowRight') {
        changeSlide(1);
    } else if (e.key === ' ') { // Barra de espaço para pausar/retomar
        e.preventDefault();
        toggleCarousel();
    } else if (e.key === 'p' || e.key === 'P') { // P para pausar
        pauseCarousel();
    } else if (e.key === 'r' || e.key === 'R') { // R para retomar
        resumeCarousel();
    }
});

// Pausar/retomar contador quando a página não está visível
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        clearInterval(timerInterval);
    } else {
        initializeTimer();
    }
});
