import LazyLoad from "vanilla-lazyload";

function lazyloadInit() {
  new LazyLoad({
    container: document,
    elements_selector: ".nmr-lazyload",
  });
}

document.addEventListener("DOMContentLoaded", lazyloadInit);
