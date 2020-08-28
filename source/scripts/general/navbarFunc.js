function navbarFunc() {
  var header = document.querySelector("#main-header");
  var faux = document.querySelector("#faux-header");
  var banner = document.querySelector("#header-banner");
  var closeBanner = document.querySelector("#close-header-banner");
  var mobileMenu = document.querySelector("#mobile-menu");
  var closeMenu = document.querySelector("#close-mobile-menu");
  var openMenu = document.querySelector("#open-mobile-menu");

  function navbarFunc() {
    faux.style.height = header.clientHeight + "px";
  }

  function toggleMobileMenu() {
    mobileMenu.classList.toggle("hidden");
  }

  //  run init functions
  navbarFunc();

  //  add listeners
  // TODO: animate
  closeBanner.addEventListener("click", function () {
    banner.style.display = "none";
    navbarFunc();
  });

  window.addEventListener("resize", function () {
    navbarFunc();
  });

  closeMenu.addEventListener("click", toggleMobileMenu);
  openMenu.addEventListener("click", toggleMobileMenu);
}

document.addEventListener("DOMContentLoaded", navbarFunc);
