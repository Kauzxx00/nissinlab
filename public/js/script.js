const menuLinks = document.querySelectorAll("nav a");
const carousel = document.querySelector(".carousel-container");
let currentIndex = 0;

const sections = Array.from(menuLinks).map(link => link.getAttribute("data-target"));

menuLinks.forEach((link, index) => {
    link.addEventListener("click", (e) => {
        const isLogin = link.classList.contains("login");
        if (isLogin) return; // Permite o comportamento normal do link de login

        e.preventDefault();

        const target = sections.indexOf(link.getAttribute("data-target"));
        if (target === -1 || target === currentIndex) return;

        menuLinks.forEach(link => link.classList.remove("active"));
        link.classList.add("active");

        currentIndex = target;
        carousel.style.transform = `translateX(-${currentIndex * 100}vw)`;
    });
});
// ---- Menu Mobile ----
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu-mobile');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
});