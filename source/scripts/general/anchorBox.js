import "waypoints/lib/noframework.waypoints";
import "waypoints/lib/shortcuts/sticky";
import "waypoints/lib/shortcuts/inview";
import SmoothScroll from "smooth-scroll";

function anchorBoxFunc() {
  const boxes = document.querySelectorAll(".anchor-box");
  const headerHeight = document.querySelector("#main-header").offsetHeight;

  boxes.forEach((box) => {
    //  box
    // const anchorBoxStatic = box.querySelector(".anchors:not(.faux)");
    const anchorContentBox = box.querySelector(".anchor-box-content");
    const anchorBox = box.querySelector(".anchor-box-sidebar .anchors-wrapper");
    // const anchors = box.querySelectorAll(".anchors .anchor");
    const anchorSections = box.querySelectorAll(
      ".anchor-box-content .anchor-section"
    );

    // const waypointsGroup = Math.floor(Math.random() * 99999 + 10000);

    // fix anchor box
    new Waypoint.Sticky({
      element: anchorBox,
    });

    // bind click even to each anchor
    new SmoothScroll('.anchors a.anchor[href*="#"]', {
      speed: 500,
      speedAsDuration: true,
      offset: headerHeight + 30,
    });

    // bind waypoints to each anchorSection
    anchorSections.forEach((section) => {
      new Waypoint.Inview({
        element: section,
        enter: function () {
          box
            .querySelectorAll(`.anchor[href="#${section.id}"]`)
            .forEach((link) => {
              link.classList.add("active");
            });
        },
        entered: function () {
          box
            .querySelectorAll(`.anchor[href="#${section.id}"]`)
            .forEach((link) => {
              link.classList.add("active");
            });
        },
        exited: function () {
          box
            .querySelectorAll(`.anchor[href="#${section.id}"]`)
            .forEach((link) => {
              link.classList.remove("active");
            });
        },
      });
    });
  });
}

function mobileAnchorBox() {
  const butt = document.querySelector(".mobile-anchor-button-icon");

  if (butt) {
    butt.addEventListener("click", function () {
      const anchorBox = document.querySelector(".mobile-anchor-box");
      anchorBox.classList.toggle("active");
    });
  }
}

document.addEventListener("DOMContentLoaded", anchorBoxFunc);
document.addEventListener("DOMContentLoaded", mobileAnchorBox);
