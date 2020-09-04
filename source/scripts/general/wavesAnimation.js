const Waves = require("node-waves");

function wavesAnimation() {
  Waves.attach(".mobile-anchor-button", ["waves-dark"]);
  Waves.attach(".button:not(.dark)", ["waves-dark"]);
  Waves.attach(".button.dark", ["waves-light"]);
  Waves.init();
}

document.addEventListener("DOMContentLoaded", wavesAnimation);
