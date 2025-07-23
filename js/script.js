const sections = document.querySelectorAll('.reveal, .timeline li.hidden');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Se for um item da timeline, usa 'visible'; se for uma seção, usa 'active'
            if (entry.target.classList.contains('hidden')) {
                entry.target.classList.add('visible');
                entry.target.classList.remove('hidden');
            } else {
                entry.target.classList.add('active');
            }
        } else {
            // Remove as classes ao sair do viewport
            if (entry.target.classList.contains('visible')) {
                entry.target.classList.remove('visible');
                entry.target.classList.add('hidden');
            } else {
                entry.target.classList.remove('active');
            }
        }
    });
}, {
    threshold: 0.6
});

// Observa cada elemento
sections.forEach(section => {
    observer.observe(section);
});