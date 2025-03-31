let ham = document.getElementById("nav-toggler");
let navClose = document.getElementById("nav-close");
let navLinks = document.getElementById("nav-links");
let link = document.getElementById("link");

ham.addEventListener("click", showMobileNav);
navClose.addEventListener("click", closeMobileNav);
link.addEventListener("click", () => {
    navLinks.classList.add("f-close");
})

function showMobileNav() {
    navLinks.classList.add("active");
}

function closeMobileNav() {
    navLinks.classList.remove("active");
}