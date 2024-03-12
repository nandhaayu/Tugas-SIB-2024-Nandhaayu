let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function goToIndex(index) {
    if (index < 0 || index >= slides.length) return;

    currentIndex = index;
    const offset = -currentIndex * slides[0].offsetWidth;
    document.querySelector('.slides').style.transform = `translateX(${offset}px)`;
}

function prevSlide() {
    goToIndex(currentIndex - 1);
}

function nextSlide() {
    goToIndex(currentIndex + 1);
}

setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    goToIndex(currentIndex);
}, 2000);