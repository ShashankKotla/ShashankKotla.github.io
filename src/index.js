document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOpenBtn = document.getElementById('menu-open-btn');
    const menuCloseBtn = document.getElementById("menu-close-btn");

    menuOpenBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('hidden');
        menuOpenBtn.classList.add('hidden');
        menuCloseBtn.classList.remove('hidden');
        mobileMenu.setAttribute('aria-hidden', 'false');
        menuOpenBtn.setAttribute('aria-expanded', 'true');
    });

    menuCloseBtn.addEventListener('click', () => {
        autoCloseMenu();
    });

    const autoCloseMenu = () => {
        mobileMenu.classList.add("hidden");
        menuCloseBtn.classList.add("hidden");
        menuOpenBtn.classList.remove("hidden");
        mobileMenu.setAttribute('aria-hidden', 'true');
        menuOpenBtn.setAttribute('aria-expanded', 'false');
    };

    // ✅ Close menu on link click (not touchstart)
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            autoCloseMenu();
        });
    });

    // Optional: auto close on scroll
    window.addEventListener("scroll", autoCloseMenu);
});
