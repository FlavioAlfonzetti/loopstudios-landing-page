import "../scss/styles.scss";

const hamburgerIcon = document.querySelector(".hamburger-icon")
const hamburgerClose = document.querySelector(".hamburger-close")
const hamburgerMenu = document.querySelector(".hamburger-menu")



hamburgerIcon.addEventListener('click', () => {
  hamburgerMenu.style.visibility = "visible"
  hamburgerMenu.style.opacity = "1"
  hamburgerIcon.style.display = "none"
  hamburgerClose.style.display = "block"
})

hamburgerClose.addEventListener('click', () => {
  hamburgerMenu.style.visibility = "hidden"
  hamburgerMenu.style.opacity = "0"
  hamburgerIcon.style.display = "block"
  hamburgerClose.style.display = "none"
})
