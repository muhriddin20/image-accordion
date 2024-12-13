const accordionItems = document.querySelectorAll(".accordion__item");

accordionItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.classList.add("active");
  });
  item.addEventListener("mouseout", () => {
    item.classList.remove("active");
  });
});
