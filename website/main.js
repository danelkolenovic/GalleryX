const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

function showSlide(index) {
    currentIndex = index;
    slides.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const index = parseInt(dot.getAttribute('data-index'));
        showSlide(index);
    });
});
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}, 3000);

