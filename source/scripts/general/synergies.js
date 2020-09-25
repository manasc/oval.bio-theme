import Siema from "siema";

const classes = {
  navDots: {
    disabled: ["bg-gray-300", "cursor-pointer"],
    active: ["bg-ovalGreen"],
  },
  navLinks: {
    disabled: ["text-gray-300"],
    active: ["text-gray-700", "hover:text-ovalGreen", "cursor-default"],
  },
};

function disablePrev(prevLink) {
  prevLink.classList.remove(...classes.navLinks.active);
  prevLink.classList.add(...classes.navLinks.disabled);
}

function disableNext(nextLink) {
  nextLink.classList.remove(...classes.navLinks.active);
  nextLink.classList.add(...classes.navLinks.disabled);
}

function enablePrev(prevLink) {
  prevLink.classList.remove(...classes.navLinks.disabled);
  prevLink.classList.add(...classes.navLinks.active);
}

function enableNext(nextLink) {
  nextLink.classList.remove(...classes.navLinks.disabled);
  nextLink.classList.add(...classes.navLinks.active);
}

function init(dots, links) {
  dots[0].classList.add(...classes.navDots.active);
  dots[0].classList.remove(...classes.navDots.disabled);

  links.prev.classList.add(...classes.navLinks.disabled);
}

function synergiesGalleryFunc() {
  const synergyBlock = document.querySelectorAll(".synergies-block");

  if (synergyBlock) {
    synergyBlock.forEach((block) => {
      // get nav
      const dots = block.querySelectorAll(
        ".synergies-nav .synergies-nav-dots .synergies-nav-dot"
      );

      const slidesBox = block.querySelector(".synergies-slides");
      const slides = block.querySelectorAll(
        ".synergies-slides .synergies-slide"
      );

      const links = {
        prev: block.querySelector(".synergies-nav-prev a"),
        next: block.querySelector(".synergies-nav-next a"),
      };

      // init
      init(dots, links);

      // set prev to disabled

      const synergyGallery = new Siema({
        selector: slidesBox,
        duration: 200,
        startIndex: 0,
        draggable: true,
        loop: false,
        rtl: false,
        onChange: () => {
          const { currentSlide } = synergyGallery;

          console.log(currentSlide, slides.length - 1);

          // nav switch

          slides[currentSlide]
            .querySelector(".synergy-diagram")
            .classList.add("active");

          dots.forEach((dot, i) => {
            if (currentSlide === i) {
              // if current slide
              dot.classList.add(...classes.navDots.active);
              dot.classList.remove(...classes.navDots.disabled);
            } else {
              dot.classList.add(...classes.navDots.disabled);
              dot.classList.remove(...classes.navDots.active);
            }
          });

          switch (currentSlide) {
            case 0:
              disablePrev(links.prev);
              enableNext(links.next);
              break;
            case slides.length - 1:
              disableNext(links.next);
              enablePrev(links.prev);
              break;
            default:
              enablePrev(links.prev);
              enableNext(links.next);
          }
        },
      });

      dots.forEach((dot, i) => {
        dot.addEventListener("click", (e) => {
          synergyGallery.goTo(i);
        });
      });

      // links
      links.prev.addEventListener("click", (e) => {
        e.preventDefault();
        synergyGallery.prev();
      });

      links.next.addEventListener("click", (e) => {
        e.preventDefault();
        synergyGallery.next();
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", synergiesGalleryFunc);
