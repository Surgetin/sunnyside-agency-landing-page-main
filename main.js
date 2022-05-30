const toggleMenu = document.querySelector(".menu");
const navItem = document.querySelector(".nav__list");

toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("active");
    navItem.classList.toggle("active");
});

document.querySelectorAll(".nav__link").forEach(e => 
    e.addEventListener("click", () => {
        toggleMenu.classList.remove("active");
        navItem.classList.remove("active");
}));
