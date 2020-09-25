function changeTotal({
  priceValue,
  subPriceValue,
  testUnitPrice,
  testDiscount,
  subPriceBox,
  priceBox,
}) {
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
    const formObj = {
      priceValue,
      subPriceValue,
      testUnitPrice,
      testDiscount,
      subPriceBox,
      priceBox,
    };

    document.productBox.packSize.forEach((size) => {
      size.addEventListener("change", function () {
        console.log(document.productBox.packSize.value);
        changeTotal(formObj);
      });
    });

    document.productBox.subscription.addEventListener("change", function () {
      changeTotal(formObj);
    });
  }
});
