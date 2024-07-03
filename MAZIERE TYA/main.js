document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentIndex = 0;

    function showSlide(index) {
        const slideWidth = slides.querySelector('.project').offsetWidth;
        slides.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    prevButton.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            showSlide(currentIndex);
        }
    });

    nextButton.addEventListener('click', function() {
        if (currentIndex < slides.children.length - 1) {
            currentIndex++;
            showSlide(currentIndex);
        }
    });
});
