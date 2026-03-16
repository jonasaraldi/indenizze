tailwind.config = {
    theme: {
        extend: {
            fontFamily: { sans: ['Plus Jakarta Sans', 'sans-serif'] },
            colors: {
                brand: {
                    bg: '#ffffff',
                    accent: '#2563eb',
                    text: '#0f172a',
                    muted: '#64748b',
                    card: '#f8fafc',
                    border: '#e2e8f0'
                }
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".reveal").forEach(el => {
        observer.observe(el);
    });
});