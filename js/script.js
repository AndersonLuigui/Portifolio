const sections = document.querySelectorAll('.reveal');

console.log("JavaScript carregado! Encontradas", sections.length, "seções com classe reveal");

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        console.log("Seção detectada:", entry.target); // Debug
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2 // Ativa quando 20% da seção está visível
});

sections.forEach(section => {
    observer.observe(section);
});