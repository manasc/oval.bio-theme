import "./general/navbarFunc";
var Isotope = require("isotope-layout");

// document.addEventListener("DOMContentLoaded", function() {
//   var grid = document.querySelector(".grid");
//   var iso = new Isotope(grid, {
//     // options...
//     percentPosition: true,
//     itemSelector: ".grid-item",
//     masonry: {
//       columnWidth: ".grid-width-2"
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  var tagBoxToggler = document.getElementById("openTags");
  var tagBox = document.getElementById("tagsBox");

  function toggleTagBox() {
    tagBox.classList.toggle("hidden");
  }

  tagBoxToggler.addEventListener("click", toggleTagBox);
});
