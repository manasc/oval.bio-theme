function tabBox() {
  const tabBoxes = document.querySelectorAll(".tabs-section");

  // get all tab instances
  tabBoxes.forEach((tabBox) => {
    // get all
    const tabs = tabBox.querySelectorAll(".tabs .tab");
    const tabContents = tabBox.querySelectorAll(".tabs-box .tabs-box-content");

    // the actual magic
    // get current
    let tabCurrent = tabBox.querySelector(".tabs .tab.active");
    let tabContentCurrent = tabBox.querySelector(
      ".tabs-box .tabs-box-content.active"
    );

    // click trigger for tabs
    tabs.forEach((tab) => {
      tab.addEventListener("click", function () {

        // the way the php rendering works --
        // the key param is also the array index
        const id = this.getAttribute("key");

        // change previous state
        tabCurrent.classList.replace("active", "dead");
        tabContentCurrent.classList.replace("active", "dead");

        // changed clicked tabs state
        this.classList.replace("dead", "active");
        tabContents[id].classList.replace("dead", "active");

        // set clicked tabs as old state
        tabCurrent = this;
        tabContentCurrent = tabContents[id];
      });
    });

    console.log(tabs, tabContents);
  });
}

document.addEventListener("DOMContentLoaded", tabBox);
