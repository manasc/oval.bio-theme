import "./general/navbarFunc";
import "./general/wavesAnimation";
import "./general/filterBox";
import "./general/tabBox";
import "./general/anchorBox";
import "./general/lazyload";
import "./general/gallery";

// modules
import "./general/faq";

document.addEventListener("DOMContentLoaded", function () {
  const testUnitPrice = 4;
  const testDiscount = 0.2;
  const productBox = document.querySelector("#productBox");

  if (productBox) {
    const priceBox = productBox.querySelector("#price");
    const priceValue = productBox.querySelector("#price #priceValue");
    const subPriceBox = productBox.querySelector("#subPrice");
    const subPriceValue = productBox.querySelector("#subPrice #subPriceValue");

    // get subscription input

    document.productBox.packSize.forEach((size) => {
      size.addEventListener("change", function () {
        console.log(document.productBox.packSize.value);
        changeTotal();
      });
    });

    document.productBox.subscription.addEventListener("change", function () {
      changeTotal();
    });

    // get pack-size input
    function changeTotal() {
      const { packSize, subscription } = document.productBox;

      priceValue.innerText = `$${packSize.value * testUnitPrice}.00`;

      console.log(subscription.checked);

      if (subscription.checked) {
        // value changes
        subPriceValue.innerText = `$${Math.floor(
          packSize.value * testUnitPrice * (1 - testDiscount)
        )}.00`;

        // visual changes
        subPriceBox.classList.remove("hidden");
        priceBox.classList.add("line-through");
        priceBox.classList.replace("text-ovalGreen", "text-gray-400");
      } else {
        // visual changes
        subPriceBox.classList.add("hidden");
        priceBox.classList.remove("line-through");
        priceBox.classList.replace("text-gray-400", "text-ovalGreen");
      }
    }
  }

  // accordions
  const accordions = document.querySelectorAll(".accordion");

  console.log(accordions);

  if (accordions) {
    accordions.forEach((accordion) => {
      const items = accordion.querySelectorAll(".accordion-item");

      items.forEach((item) => {
        item.addEventListener("click", () => {
          const desc = item.querySelector(".accordion-item-description");

          accordion
            .querySelectorAll(".accordion-item.active")
            .forEach((item) => {
              item.classList.remove("active");
              item.querySelector(
                ".accordion-item-description"
              ).style.maxHeight = null;
            });

          item.classList.toggle("active");
          desc.style.maxHeight = desc.scrollHeight + "px";
        });
      });
    });
  }
});
