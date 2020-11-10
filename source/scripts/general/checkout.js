function toggleMeta(type) {
    const nonSubMeta = document.querySelectorAll(".non-subscription-meta");
    const subMeta = document.querySelectorAll(".subscription-meta");

    if (type === "subscription-meta") {
        [...nonSubMeta].map((item) => {
            console.log(item);
            item.classList.add("hidden");
        });
        [...subMeta].map((item) => {
            console.log(item);
            item.classList.remove("hidden");
        });
    } else {
        [...nonSubMeta].map((item) => {
            console.log(item);
            item.classList.remove("hidden");
        });
        [...subMeta].map((item) => {
            console.log(item);
            item.classList.add("hidden");
        });
    }
}

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

    if (subscription.value === "subscription") {
        // value changes
        toggleMeta("subscription-meta");

        subPriceValue.innerText = `$${Math.floor(
            packSize.value * testUnitPrice * (1 - testDiscount)
        )}.00`;

        // visual changes
        subPriceBox.classList.remove("hidden");
        priceBox.classList.add("line-through");
        priceBox.classList.replace("text-ovalGreen", "text-gray-400");
    } else {
        toggleMeta("non-subscription-meta");

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

        toggleMeta("subscription-meta");

        document.productBox.packSize.forEach((size) => {
            size.addEventListener("change", function () {
                changeTotal(formObj);
            });
        });

        document.productBox.subscription.forEach((option) => {
            option.addEventListener("change", function () {
                changeTotal(formObj);
            });
        });
    }
});
