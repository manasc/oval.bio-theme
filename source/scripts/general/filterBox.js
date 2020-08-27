import Isotope from "isotope-layout";

function filterFunc() {
  const boxes = document.querySelectorAll(".filter-box");

  boxes.forEach((box) => {
    // store active filters
    let activeFilters = "*";

    // get filters and filter0box
    const filtersBox = box.querySelector(".filters");
    const filterGrid = box.querySelector(".filter-grid");

    // trigger isotope
    const iso = new Isotope(filterGrid, {
      itemSelector: ".filter-grid-item",
      category: "[data-category]",
      percentPosition: true,
      masonry: {
        gutter: 0,
        columnWidth: ".filter-grid-item",
        horizontalOrder: true,
      },
    });

    // set filter triggers
    const filters = filtersBox.querySelectorAll(".filter");

    filters.forEach((currentFilter) => {
      // init
      filters[0].classList.add("active");
      iso.arrange({ filter: filters[0].getAttribute("data-filter") });

      currentFilter.addEventListener("click", () => {
        // TODO: add ability to use multiple filters
        // trigger layout change
        iso.arrange({ filter: currentFilter.getAttribute("data-filter") });

        // update active filters
        filters.forEach((otherFilter) => {
          otherFilter.classList.remove("active");
        });
        currentFilter.classList.add("active");
      });
    });
  });
}

function filterBox() {
  var tagBoxToggler = document.getElementById("openTags");
  var tagBox = document.getElementById("tagsBox");

  function toggleTagBox() {
    var icon = this.querySelector(".filter-icon");

    if (icon.classList.contains("fa-caret-down")) {
      icon.classList.remove("fa-caret-down");
      icon.classList.add("fa-times-circle");
    } else {
      icon.classList.remove("fa-times-circle");
      icon.classList.add("fa-caret-down");
    }

    tagBox.classList.toggle("active");
  }

  var showMoreFilters = document.querySelectorAll(".showMoreFilters");
  console.log(showMoreFilters);

  showMoreFilters.forEach((button) => {
    button.addEventListener("click", function () {
      var deadFilters = this.parentNode.querySelectorAll(".filter.dead");

      deadFilters.forEach((filter) => {
        filter.classList.remove("dead");
        filter.classList.add("alive");
      });

      // hide add button
      this.classList.remove("alive");
      this.classList.add("dead");
    });
  });

  if (tagBoxToggler) {
    tagBoxToggler.addEventListener("click", toggleTagBox);
  }
}

document.addEventListener("DOMContentLoaded", filterFunc);
document.addEventListener("DOMContentLoaded", filterBox);
