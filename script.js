// JavaScript para o carrossel
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    // Função para atualizar o carrossel
    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentSlide * 20}%)`;
        
        // Atualizar dots ativos
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
    
    // Event listeners para os botões
    prevBtn.addEventListener('click', function() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    });
    
    nextBtn.addEventListener('click', function() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    });
    
    // Event listeners para os dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentSlide = index;
            updateCarousel();
        });
    });
    
    // Auto-play do carrossel
    setInterval(function() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }, 5000);
});