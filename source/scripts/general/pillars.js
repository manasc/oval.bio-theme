function pillarsFunc() {
  const pillarsBoxes = document.querySelectorAll(".pillars-box");

  console.log(pillarsBoxes);

  if (pillarsBoxes) {
    pillarsBoxes.forEach((pillarsBox) => {
      const icons = pillarsBox.querySelectorAll(".pillar-icon-box");
      const triggers = pillarsBox.querySelectorAll(".pillar-trigger");

      // icon is clicked
      //   icons.forEach((icon, i) => {

      //     icon.addEventListener("click", () => {
      //       triggers.forEach((trigger, x) => {
      //         if (i === x) {
      //           trigger.classList.add("active");
      //         } else {
      //           trigger.classList.remove("active");
      //         }
      //       });
      //     });

      //   });

      // make first one active
      icons[0].classList.add("active");

      // if trigger is clicked
      triggers.forEach((trigger, i) => {
        trigger.addEventListener("click", () => {
          icons.forEach((icon, x) => {
            if (i === x) {
              icon.classList.add("active");
            } else {
              icon.classList.remove("active");
            }
          });
        });
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", pillarsFunc);
