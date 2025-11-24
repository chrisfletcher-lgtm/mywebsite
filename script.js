const scrollButtons = document.querySelectorAll("[data-scroll-to]");
const faqItems = document.querySelectorAll("[data-faq]");
const yearEl = document.getElementById("year");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

scrollButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-scroll-to");
    if (!target) return;
    const el = document.querySelector(target);
    el?.scrollIntoView({ behavior: "smooth" });
  });
});

faqItems.forEach((item) => {
  const button = item.querySelector("button");
  const answer = item.querySelector("p");
  if (!button || !answer) return;

  button.addEventListener("click", () => {
    item.classList.toggle("open");
  });
});


