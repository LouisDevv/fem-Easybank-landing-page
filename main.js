const primaryNav = document.querySelector(".primary-navigation");
const navList = document.querySelector(".nav-list");
const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
const openMenu = document.querySelector(".icon-hamburger");
const closeMenu = document.querySelector(".icon-close");
let links = document.getElementsByClassName("nav-links");

// Navigation

mobileNavToggle.addEventListener("click", myMenu)

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', myMenu, false);
}

function myMenu(){
    openMenu.toggleAttribute("visibility");
    closeMenu.toggleAttribute("visibility");
    primaryNav.toggleAttribute("visibility");
    navList.toggleAttribute("visibility");
    document.body.classList.toggle("modal-open");
}

