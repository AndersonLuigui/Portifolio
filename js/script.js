const sections = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}, {
    threshold: 0.2 // Ativa quando 20% da seção está visível
});

sections.forEach(section => {
    observer.observe(section);
});