import "../scss/styles.scss";

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  const hamburgerClose = document.querySelector(".hamburger-close");
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const body = document.querySelector("body");

  function updateOverflow() {
    body.style.overflow = hamburgerMenu.style.visibility === "visible" ? "hidden" : "";
  }

  hamburgerIcon.addEventListener('click', () => {
    hamburgerMenu.style.visibility = "visible";
    hamburgerMenu.style.opacity = "1";
    hamburgerIcon.style.display = "none";
    hamburgerClose.style.display = "block";
    updateOverflow();
  });

  hamburgerClose.addEventListener('click', () => {
    hamburgerMenu.style.visibility = "hidden";
    hamburgerMenu.style.opacity = "0";
    hamburgerIcon.style.display = "block";
    hamburgerClose.style.display = "none";
    updateOverflow();
  });

  updateOverflow();

  window.addEventListener('resize', updateOverflow);
});



