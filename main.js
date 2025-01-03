document.addEventListener("DOMContentLoaded", () => {
  // Deklarasi index;
  let currentIndex = 0;
  const items = document.querySelectorAll(".carousel-item");
  const controls = document.querySelectorAll(".carousel-control .items");
  function setClasses(newIndex) {
    items.forEach((item, i) => {
      item.classList.remove(
        "active",
        "previous",
        "next",
        "move-left",
        "move-right",
        "enter-left",
        "enter-right"
      );
      if (i === newIndex) {
        item.classList.add("active");
      } else if (i === (newIndex - 1 + items.length) % items.length) {
        item.classList.add("previous");
      } else if (i === (newIndex + 1) % items.length) {
        item.classList.add("next");
      }
    });
    controls.forEach((control, i) => {
      control.classList.toggle("active", i === newIndex);
    });
  }
  setClasses(0);
});
