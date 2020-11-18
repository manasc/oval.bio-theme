import Siema from "siema";

function imageGalleryFunc() {
    const galleries = document.querySelectorAll(".nmr-image-gallery-box");

    if (galleries) {
        galleries.forEach((galleryBox) => {
            // store nav
            const galleryNav = galleryBox.querySelectorAll(".nmr-image-gallery-nav .nmr-image");

            const gallery = new Siema({
                selector: galleryBox.querySelector(".nmr-image-gallery"),
                duration: 200,
                startIndex: 0,
                draggable: true,
                loop: false,
                rtl: false,
                onChange: (x, y) => {
                    // clear other navs
                    galleryNav.forEach((x) => {
                        x.classList.remove("active");
                    });

                    // set current nav
                    galleryNav[gallery.currentSlide].classList.add("active");
                },
            });

            // set first to active
            galleryNav[0].classList.add("active");

            // on change
            // update gallery nav to highlight correct image
            function updateNav() {}

            // on click of gallery image
            galleryNav.forEach((imageButton, index) => {
                imageButton.addEventListener("click", () => gallery.goTo(index));
            });
        });
    }
}
function infoGalleryFunc() {
    // store nav
    const gallery = new Siema({
        selector: document.querySelector(".nmr-info-gallery"),
        perPage: 2,
        duration: 200,
        startIndex: 0,
        draggable: true,
        loop: false,
        rtl: false,
    });
}

document.addEventListener("DOMContentLoaded", imageGalleryFunc);
document.addEventListener("DOMContentLoaded", infoGalleryFunc);
