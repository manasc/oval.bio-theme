document.addEventListener("DOMContentLoaded", function() {
  var header = document.querySelector("#main-header");
  var body = document.querySelector("body");
  var banner = document.querySelector("#header-banner");
  var closeBanner = document.querySelector("#close-header-banner");
  var mobileMenu = document.querySelector("#mobile-menu");
  var closeMenu = document.querySelector("#close-mobile-menu");
  var openMenu = document.querySelector("#open-mobile-menu");

  function navbarFunc() {
    body.style.paddingTop = header.offsetHeight + "px";
  }

  function toggleMobileMenu() {
    mobileMenu.classList.toggle("hidden");
  }

  //  run init functions
  navbarFunc();

  //  add listeners
  closeBanner.addEventListener("click", function() {
    banner.style.display = "none";
    navbarFunc();
  });

  window.addEventListener("resize", function() {
    navbarFunc();
  });

  closeMenu.addEventListener("click", toggleMobileMenu);
  openMenu.addEventListener("click", toggleMobileMenu);
});
