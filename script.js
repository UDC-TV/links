document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const linkCards = document.querySelectorAll('.link-card');
    linkCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });

    const officeCards = document.querySelectorAll('.office-card');
    officeCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        setTimeout(() => {
            observer.observe(card);
        }, 300);
    });

    const trackClick = (linkName) => {
        console.log(`Link clicked: ${linkName}`);
    };

    linkCards.forEach(card => {
        card.addEventListener('click', (e) => {
            const linkTitle = card.querySelector('.link-title')?.textContent || 'Unknown';
            trackClick(linkTitle);
        });
    });

    officeCards.forEach(card => {
        card.addEventListener('click', () => {
            const officeName = card.querySelector('.office-name').textContent;

            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.width = '100%';
            ripple.style.height = '100%';
            ripple.style.top = '0';
            ripple.style.left = '0';
            ripple.style.background = 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)';
            ripple.style.transform = 'scale(0)';
            ripple.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
            ripple.style.opacity = '1';
            ripple.style.pointerEvents = 'none';
            ripple.style.borderRadius = 'inherit';

            card.appendChild(ripple);

            setTimeout(() => {
                ripple.style.transform = 'scale(2)';
                ripple.style.opacity = '0';
            }, 10);

            setTimeout(() => {
                ripple.remove();
            }, 600);

            console.log(`Office selected: ${officeName}`);
        });
    });

    let ticking = false;
    const backgroundPattern = document.querySelector('.background-pattern');

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                if (backgroundPattern) {
                    backgroundPattern.style.transform = `translateY(${scrolled * 0.3}px)`;
                }
                ticking = false;
            });
            ticking = true;
        }
    });

    document.addEventListener('keydown', (e) => {
        const focusableElements = document.querySelectorAll('.link-card, .office-card');
        const focusedElement = document.activeElement;
        const currentIndex = Array.from(focusableElements).indexOf(focusedElement);

        if (e.key === 'ArrowDown' && currentIndex < focusableElements.length - 1) {
            e.preventDefault();
            focusableElements[currentIndex + 1].focus();
        } else if (e.key === 'ArrowUp' && currentIndex > 0) {
            e.preventDefault();
            focusableElements[currentIndex - 1].focus();
        }
    });

    document.querySelectorAll('.link-card, .office-card').forEach(card => {
        card.setAttribute('tabindex', '0');
    });

    officeCards.forEach(card => {
        card.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                card.click();
            }
        });
    });
});

document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.link-card, .office-card');

    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const deltaX = (x - centerX) / centerX;
            const deltaY = (y - centerY) / centerY;

            card.style.transform = `perspective(1000px) rotateY(${deltaX * 5}deg) rotateX(${-deltaY * 5}deg) translateY(-4px)`;
        } else {
            card.style.transform = '';
        }
    });
});

document.querySelectorAll('.link-card, .office-card').forEach(card => {
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});
