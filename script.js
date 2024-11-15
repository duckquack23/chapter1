function nextPage(current, next) {
    document.getElementById(current).style.display = 'none';
    document.getElementById(next).style.display = 'block';
}

function showResponse(answer) {
    if (answer === 'yes') {
        document.getElementById('question').style.display = 'none';
        document.getElementById('yes-response').style.display = 'block';
    } else {
        document.getElementById('question').style.display = 'none';
        document.getElementById('no-response').style.display = 'block';
    }
}

function showQuestion() {
    document.getElementById('no-response').style.display = 'none';
    document.getElementById('question').style.display = 'block';
}

// carousel
let currentIndex = 0;

function startCarousel() {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel img');
    const message = document.getElementById('carousel-message');
    const nextButton = document.getElementById('next-button');

    // automatically move the carousel
    setInterval(() => {
        currentIndex++;
        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }
        updateCarousel(carousel, slides);
    }, 2000);

    // allow manual scrolling
    carousel.addEventListener('wheel', (e) => {
        e.preventDefault();
        currentIndex += e.deltaY > 0 ? 1 : -1;
        if (currentIndex >= slides.length) currentIndex = 0;
        if (currentIndex < 0) currentIndex = slides.length - 1;
        updateCarousel(carousel, slides);
    });

    // show message and button after all slides
    setTimeout(() => {
        message.classList.add('show');
        nextButton.classList.add('show');
    }, slides.length * 2000);
}

function updateCarousel(carousel, slides) {
    const slideWidth = slides[0].clientWidth;
    carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// initialize carousel on page load
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('carousel')) {
        startCarousel();
    }
});
