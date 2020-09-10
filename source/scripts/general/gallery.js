import Siema from "siema";

function imageGalleryFunc() {
  const galleries = document.querySelectorAll(".nmr-image-gallery-box");

  if (galleries) {
    galleries.forEach((galleryBox) => {
      const gallery = new Siema({
        selector: galleryBox.querySelector(".nmr-image-gallery"),
        duration: 200,
        startIndex: 0,
        draggable: true,
        loop: false,
        rtl: false,
      });

      // store nav
      const galleryNav = galleryBox.querySelectorAll(
        ".nmr-image-gallery-nav .nmr-image"
      );

      galleryNav[0].classList.add("active");

      // on change
      // update gallery nav to highlight correct image

      function updateNav() {}

      // on click of gallery image
      galleryNav.forEach((imageButton, index) => {
        imageButton.addEventListener("click", function () {
          // remove all active classees
          galleryNav.forEach((x) => {
            x.classList.remove("active");
          });

          gallery.goTo(index);

          // add active class to clicked
          imageButton.classList.add("active");
        });
      });
      console.log(galleryBox);
    });
  }
}

document.addEventListener("DOMContentLoaded", imageGalleryFunc);
