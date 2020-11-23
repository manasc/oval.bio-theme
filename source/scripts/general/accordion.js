function openItem(item) {
  const desc = item.querySelector(".accordion-item-content");
  const answer = item.querySelector(".accordion-item-answer");

  item.classList.add("active");
  desc.style.maxHeight = answer.scrollHeight + "px";
}

function closeItem(item) {
  const desc = item.querySelector(".accordion-item-content");

  item.classList.remove("active");
  desc.style.maxHeight = null;
}

// function closeAllItems(accordion) {
//   accordion.querySelectorAll(".accordion-item.active").forEach((item) => {
//     item.classList.remove("active");
//     item.querySelector(".accordion-item-content").style.maxHeight = null;
//   });
// }

function faqAccordion() {
  // accordions
  const accordions = document.querySelectorAll(".accordion");

  if (accordions) {
    accordions.forEach((accordion) => {
      const items = accordion.querySelectorAll(".accordion-item");

      // activate first one
      // openItem(items[0]);

      items.forEach((item) => {
        item.addEventListener("click", () => {

          if (item.classList.contains("active")) {
            closeItem(item);
          } else {
            // closeAllItems(accordion);
            openItem(item);
          }
        });
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", faqAccordion);
