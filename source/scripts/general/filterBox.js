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

document.addEventListener("DOMContentLoaded", filterBox);
