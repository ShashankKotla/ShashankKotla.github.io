document.addEventListener("DOMContentLoaded", function () {
    // const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOpenBtn = document.getElementById('menu-open-btn');
    const menuCloseBtn = document.getElementById("menu-close-btn");


    // menuBtn.addEventListener("click", function () {
    //     menuItems.classList.toggle("hidden");
    // });

    // open menu
    menuOpenBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('hidden');
        menuOpenBtn.classList.add('hidden');
        menuCloseBtn.classList.remove('hidden');
        mobileMenu.setAttribute('aria-hidden', 'false');
        menuOpenBtn.setAttribute('aria-expanded', 'true');
    })

    // close menu
    menuCloseBtn.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuCloseBtn.classList.add('hidden');
        menuOpenBtn.classList.remove('hidden');
        mobileMenu.setAttribute('aria-hidden', 'true');
        menuOpenBtn.setAttribute('aria-expanded', 'false');

    })

    
    const autoCloseMenu =  () => {
        mobileMenu.classList.add("hidden");
        menuCloseBtn.classList.add("hidden");
        menuOpenBtn.classList.remove("hidden");
        mobileMenu.setAttribute('aria-hidden', 'true');
        menuOpenBtn.setAttribute('aria-expanded', 'false');
    };
    
    window.addEventListener("scroll", autoCloseMenu);
    window.addEventListener('touchstart', autoCloseMenu);

});