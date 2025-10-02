        AOS.init({
            duration: 1000,
            once: true
        });

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Mobile menu toggle
        const mobileMenu = document.getElementById('mobile-menu');
        const nav = document.querySelector('nav');
        
        mobileMenu.addEventListener('click', () => {
            nav.querySelector('.md\\:flex').classList.toggle('hidden');
            nav.querySelector('.md\\:flex').classList.toggle('flex');
            nav.querySelector('.md\\:flex').classList.toggle('flex-col');
            nav.querySelector('.md\\:flex').classList.toggle('absolute');
            nav.querySelector('.md\\:flex').classList.toggle('top-16');
            nav.querySelector('.md\\:flex').classList.toggle('left-0');
            nav.querySelector('.md\\:flex').classList.toggle('w-full');
            nav.querySelector('.md\\:flex').classList.toggle('glass-morphism');
            nav.querySelector('.md\\:flex').classList.toggle('p-4');
        });
        
        // Add float animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-20px); }
            }
            .animate-float {
                animation: float 6s ease-in-out infinite;
            }
        `;
        document.head.appendChild(style);