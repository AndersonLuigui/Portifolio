const sections = document.querySelectorAll('.reveal, .timeline li.hidden');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('hidden')) {
                entry.target.classList.add('visible');
                entry.target.classList.remove('hidden');
            } else {
                entry.target.classList.add('active');
            }
        } else {
            if (entry.target.classList.contains('visible')) {
                entry.target.classList.remove('visible');
                entry.target.classList.add('hidden');
            } else {
                entry.target.classList.remove('active');
            }
        }
    });
}, {
    threshold: 0.45
});

sections.forEach(section => {
    observer.observe(section);
});

// SCRIPT DO CARROSEL
document.querySelectorAll('.carousel').forEach(carousel => {
    const items = carousel.querySelectorAll('.carousel-item');
    const prevButton = carousel.querySelector('.carousel-control.prev');
    const nextButton = carousel.querySelector('.carousel-control.next');
    let currentIndex = 0;
    const totalItems = items.length;

    function showSlide(index) {
        items.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        showSlide(currentIndex);
    }

    // Auto slide every 5 seconds
    let autoSlide = setInterval(nextSlide, 5000);

    // Pause auto slide on hover
    carousel.addEventListener('mouseenter', () => clearInterval(autoSlide));
    carousel.addEventListener('mouseleave', () => autoSlide = setInterval(nextSlide, 5000));

    // Manual controls
    nextButton.addEventListener('click', () => {
        clearInterval(autoSlide);
        nextSlide();
        autoSlide = setInterval(nextSlide, 5000);
    });

    prevButton.addEventListener('click', () => {
        clearInterval(autoSlide);
        prevSlide();
        autoSlide = setInterval(nextSlide, 5000);
    });
});