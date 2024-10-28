let currentSlide = 0;

function changeSlide(direction) {
    const items = document.querySelectorAll('.carousel-item');
    items[currentSlide].classList.remove('active');

    currentSlide = (currentSlide + direction + items.length) % items.length;

    items[currentSlide].classList.add('active');
}
