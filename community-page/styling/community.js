const MenuButtons = document.getElementsByClassName("menu-btn");
function toggleMenu(button) {
  if (button.nextElementSibling) {
    button.nextElementSibling.classList.toggle("show");
    button.classList.toggle("rotate");
  }
}
