// Menu
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
const flexItem = document.querySelector(".flex_item");
const cartIcon = document.querySelector(".cart-icon");

// Tilføj eventlistener til burgermenuen for at åbne/lukke menuen
burgerMenu.addEventListener("click", function () {
  menuLinks.classList.toggle("active");
  flexItem.classList.toggle("active");
  cartIcon.classList.toggle("active");
  burgerMenu.querySelector(".burger-icon").classList.toggle("active");
});

// Carousel
document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".carousel-track");
  const slides = document.querySelectorAll(".carousel-slide");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const slideWidth = slides[0].offsetWidth;
  const visibleSlides = 4; // Antal synlige billeder
  let currentIndex = 0;

  function updateCarousel() {
    const newTransformValue = -currentIndex * slideWidth + "px";
    track.style.transform = "translateX(" + newTransformValue + ")";
  }

  function nextSlide() {
    currentIndex++;
    track.style.transition = "transform 0.5s ease-in-out";
    updateCarousel();

    if (currentIndex >= slides.length - visibleSlides + 1) {
      // Når vi nærmer os slutningen, gå tilbage til starten uden animation
      currentIndex = 0;
      track.style.transition = "none";
      updateCarousel();
    }
  }

  function prevSlide() {
    currentIndex--;
    track.style.transition = "transform 0.5s ease-in-out";
    updateCarousel();

    if (currentIndex < 0) {
      // Når vi går baglæns forbi det første billede, gå tilbage til slutningen uden animation
      currentIndex = slides.length - 1;
      track.style.transition = "none";
      updateCarousel();
    }
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);
});

// Tilmeld knap
function skjulTekst() {
  // Hent mail-inputfeltet ved hjælp af dets id
  var mailInput = document.getElementById("mail");

  // Tildel tom streng til værdien af mail-inputfeltet
  mailInput.value = "";
}
function skjulTekst() {
  // Hent mail-inputfeltet ved hjælp af dets id
  var mailInput = document.getElementById("mail2");

  // Tildel tom streng til værdien af mail-inputfeltet
  mailInput.value = "";
}
// LOGIN
class Login extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: "open",
    }); //apparently slots only work with the shadow dom?
  }
  connectedCallback() {
    this.html = `<style>
      /****** LOGIN MODAL ******/
      #login-modal {
          background:black;
          position:fixed;
          width:100vw;
          height:100vh;
      }
      .loginmodal-container {
        padding: 30px;
        max-width: 350px;
        width: 100% !important;
        background-color: #F7F7F7;
        margin: 0 auto;
        border-radius: 2px;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
        overflow: hidden;
        font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI","Roboto","Helvetica Neue", Arial, sans-serif;
      }
      .loginmodal-container h1 {
        text-align: center;
        font-size: 1.8em;
      }
      .loginmodal-container input[type=submit] {
        width: 100%;
        display: block;
        margin-bottom: 10px;
        position: relative;
      }
      input[type=password] {
        height: 44px;
        font-size: 16px;
        width: 100%;
        margin-bottom: 10px;
        -webkit-appearance: none;
        background: #fff;
        border: 1px solid #d9d9d9;
        border-top: 1px solid #c0c0c0;
        padding: 0 8px;
        box-sizing: border-box;
      }
      input[type=password]:hover {
        border: 1px solid #b9b9b9;
        border-top: 1px solid #a0a0a0;
        box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
      }
      .loginmodal {
        text-align: center;
        font-size: 14px;
        font-weight: 700;
        height: 36px;
        padding: 0 8px;
      }
      .loginmodal-submit {
        border: 0px;
        color: #fff;
        text-shadow: 0 1px rgba(0,0,0,0.1); 
        background-color: #4d90fe;
        padding: 17px 0px;
        font-size: 14px;
      }
      .loginmodal-submit:hover {
        border: 0px;
        text-shadow: 0 1px rgba(0,0,0,0.3);
        background-color: #357ae8;
      }
    </style>
    <div class="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="loginmodal-container">
          <h1>Login</h1><br>
          <p>This is a school project</p>
          <p>The password is <code>kea</code></p>
          <form>
            <input type="password" name="pass" placeholder="Password">
            <input type="submit" name="login" class="login loginmodal-submit" value="Login">
          </form>
        </div>
      </div>
    </div>`;
    this.render();

    this.shadowRoot.querySelector("form").addEventListener("submit", (e) => {
      e.preventDefault();
      if (this.shadowRoot.querySelector("input[name=pass]").value === "kea") {
        document.querySelector("#totally-delete-me").remove();
        localStorage.setItem("iform-totally-logged-in", true);
      }
    });
  }
  render() {
    this.shadowRoot.innerHTML = this.html;
  }
}
customElements.define("iform-login", Login);
window.addEventListener("load", () => {
  if (!localStorage.getItem("iform-totally-logged-in")) {
    const div = document.createElement("div");
    div.id = "totally-delete-me";
    div.style.width = "100vw";
    div.style.height = "100vh";
    div.style.position = "fixed";
    div.style.zIndex = "9999";

    div.innerHTML = "<iform-login />";
    document.body.prepend(div);
  }
});
