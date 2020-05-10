import "./general/navbarFunc";
const Waves = require("node-waves");

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

  if (tagBoxToggler) {
    tagBoxToggler.addEventListener("click", toggleTagBox);
  }

  // waves
  Waves.attach(".button:not(.dark)", ["waves-dark"]);
  Waves.attach(".button.dark", ["waves-light"]);
  Waves.init();
});
