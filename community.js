const MenuButtons = document.getElementsByClassName("menu-btn");
// const ProfileImage = document.getElementsByClassName("profile-img");

function toggleMenu(button) {
    if (button.nextElementSibling) {
        button.nextElementSibling.classList.toggle("show");
        button.classList.toggle("rotate");
    }
}

// function UserActive() {
//   if (profile.classList.contain(active)) {
//     profile.classList.toggle("active");
//   } else {
//     profile.classList.remove("active");
//   }
// }


let like = document.getElementById("like");
let pin = document.getElementById("pin");
let follow = document.getElementById("follow");