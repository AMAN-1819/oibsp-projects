let currentSlide = 0;
const slides = document.querySelectorAll('.carousels-image');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousels();
});

document.querySelector('.prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousels();
});

function updateCarousels() {
    const carouselsContainer = document.querySelector('.carousels-container');
    const slideWidth = slides[0].clientWidth;
    carouselsContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}


let currentIndex = 0;
const cards = document.querySelectorAll('.carousel-card');

function showNextCard() {
    cards[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % cards.length;
    cards[currentIndex].classList.add('active');
}

setInterval(showNextCard, 6000); // Change card every 3 seconds
