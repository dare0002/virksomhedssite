// Find elementer
const dropdownLinks = document.querySelectorAll(".dropdown-link");

// Tilføj eventlistener til hver dropdown-link
dropdownLinks.forEach((link) => {
  link.addEventListener("mousedown", function (event) {
    event.preventDefault();
    const dropdownMenu = this.nextElementSibling;
    dropdownMenu.classList.toggle("active");
  });

  // Luk dropdown-menuen, når man klikker udenfor
  document.addEventListener("click", function (event) {
    if (!link.contains(event.target)) {
      const dropdownMenus = document.querySelectorAll(".dropdown-menu");
      dropdownMenus.forEach((menu) => {
        menu.classList.remove("active");
      });
    }
  });
});

// BURGERMENU
// Find burgermenu og menu-links
const burgerMenu = document.querySelector("#burger-menu");
const menuLinks = document.querySelector(".menu-links");

// Tilføj eventlistener til burgermenuen for at åbne/lukke menuen
burgerMenu.addEventListener("click", function () {
  menuLinks.classList.toggle("active");
  burgerMenu.querySelector(".burger-icon").classList.toggle("active");
});
