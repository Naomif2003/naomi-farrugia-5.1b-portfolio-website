const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

// Close menu when the close button is clicked
menuCloseButton.addEventListener("click" , () => menuOpenButton.click());

// Close menu when the nav link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
});