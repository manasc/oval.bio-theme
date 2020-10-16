function faqAccordion() {
  const faqBoxes = document.querySelectorAll(".faq-box");

  faqBoxes.forEach((box) => {
    const faqs = box.querySelectorAll(".faq");

    faqs.forEach((faq) => {
      faq.addEventListener("click", function () {
        // set box state
        if (this.classList.contains("dead")) {
          this.classList.replace("dead", "active");

        } else {
          this.classList.replace("active", "dead");
        }
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", faqAccordion);