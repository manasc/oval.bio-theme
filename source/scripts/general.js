import "./general/navbarFunc";
import "./general/wavesAnimation";
import "./general/filterBox";
import "./general/tabBox";
import "./general/anchorBox";
import "./general/lazyload";
import "./general/gallery";
import "./general/checkout";
import "./general/tooltips";

// gutenberg blocks
import "./general/synergies";
import "./general/pillars";

// modules
import "./general/faq";
import "./general/accordion";

document.addEventListener("DOMContentLoaded", function () {
    // new fullpage("#fullpage");

    const profilesVisuals = document.querySelectorAll("profiles-visual");

    profilesVisuals.forEach((block) => {
        setTimeout(function () {
            block.classList.add("active");
        }, 1000);
    });
});
