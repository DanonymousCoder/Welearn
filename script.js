let ham = document.getElementById("nav-toggler");
let navClose = document.getElementById("nav-close");
let navLinks = document.getElementById("nav-links");

ham.addEventListener("click", showMobileNav);
navClose.addEventListener("click", closeMobileNav);

function showMobileNav() {
    navLinks.classList.add("active");
}

function closeMobileNav() {
    navLinks.classList.remove("active");
}