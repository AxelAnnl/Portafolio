// Reveal sections with a fade-in effect once they're visible
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.fade-in-section');
    const titles = document.querySelectorAll('h1, h2, h3, h4, h5, h6, .card-title');
    const cards = document.querySelectorAll('.card');
    const pills = document.querySelectorAll('.badge');

    const entryClasses = ['entry-1','entry-2','entry-3','entry-4','entry-5','entry-6','entry-7','entry-8','entry-9','entry-10'];
    const hoverClasses = ['hover-anim-1','hover-anim-2','hover-anim-3','hover-anim-4','hover-anim-5','hover-anim-6','hover-anim-7','hover-anim-8','hover-anim-9','hover-anim-10'];

    const randomClass = arr => arr[Math.floor(Math.random() * arr.length)];

    sections.forEach(sec => sec.classList.add(randomClass(entryClasses)));
    titles.forEach(t => t.classList.add(randomClass(hoverClasses)));
    cards.forEach(c => c.classList.add(randomClass(hoverClasses)));
    pills.forEach(p => p.classList.add(randomClass(hoverClasses)));

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        sections.forEach(section => section.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));
});

