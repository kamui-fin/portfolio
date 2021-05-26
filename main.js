function toggleNav() {
    const navBar = document.querySelector("nav.navbar");
    navBar.classList.toggle("hidden");
}

const hamburgerButton = document.querySelector("button.hamburger");
hamburgerButton.addEventListener("click", toggleNav);
