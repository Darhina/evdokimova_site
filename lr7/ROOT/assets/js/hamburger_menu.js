// document.querySelector(".hamburger_menu").addEventListener("click", () => {
//     document.querySelector(".hamburger_menu").classList.toggle("active"); // Переключаем класс у гамбургера
//     document.querySelector(".nav_links").classList.toggle("show_menu"); 
// });

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".hamburger_menu").addEventListener("click", () => {
        let navLinks = document.querySelector(".nav_links");
        navLinks.classList.toggle("show_menu");
    });
});


