const hamburgerMenu = document.getElementById('hamburger-menu');
        const mobileMenu = document.getElementById('mobile-menu');
        const closeMenu = document.getElementById('close-menu');

        hamburgerMenu.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
        });

        closeMenu.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });