// hide/display text on hover
function displayFullBrand() {
    navbarBrand.innerHTML = " Simon Lalonde // software developper apprentice // molecular biologist";
    navbarBrand.style.wordWrap = 'break-word';
}

function displayOriBrand() {
    navbarBrand.innerHTML = "Simon Lalonde";
}

// Add navbar-brand description on hover
let navbarBrand = document.querySelector(".navbar-brand");
navbarBrand.addEventListener("mouseenter", displayFullBrand);
navbarBrand.addEventListener("mouseleave", displayOriBrand);