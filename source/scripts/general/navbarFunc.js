// function navbarFunc() {
//     var header = document.querySelector("#main-header");
//     var faux = document.querySelector("#faux-header");
//     var page = document.querySelector("#page");
//     var banner = document.querySelector("#header-banner");
//     var closeBanner = document.querySelector("#close-header-banner");
//     var mobileMenu = document.querySelector("#mobile-menu");
//     var closeMenu = document.querySelector("#close-mobile-menu");
//     var openMenu = document.querySelector("#open-mobile-menu");
//     var fullHeightDivs = document.querySelectorAll(".h-screen");

//     function setHeights() {
//         faux.style.height = header.clientHeight + "px";
//         page.style.height = window.innerHeight - header.clientHeight + "px";

//         fullHeightDivs.forEach((div) => {
//             if (window.innerWidth < 768) {
//                 div.style.maxHeight = 0;
//             } else {
//                 div.style.maxHeight = window.innerHeight - header.clientHeight + "px";
//                 console.log(window.innerHeight - header.clientHeight + "px");
//             }
//         });
//     }

//     function toggleMobileMenu() {
//         mobileMenu.classList.toggle("hidden");
//     }

//     //  run init functions
//     setHeights();

//     //  add listeners
//     // TODO: animate
//     closeBanner.addEventListener("click", function () {
//         banner.style.display = "none";
//         setHeights();
//     });

//     window.addEventListener("resize", setHeights);

//     closeMenu.addEventListener("click", toggleMobileMenu);
//     openMenu.addEventListener("click", toggleMobileMenu);
// }

// document.addEventListener("DOMContentLoaded", navbarFunc);
