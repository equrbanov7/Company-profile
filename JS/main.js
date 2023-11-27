const hamburger = document.querySelector(".menuBut");
const mainNav = document.querySelector(".element");

hamburger.addEventListener("click", function () {
  mainNav.classList.toggle("active");
});
