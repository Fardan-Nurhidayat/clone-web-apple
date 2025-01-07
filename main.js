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
    currentIndex = newIndex;
  }
  function showSlide(newIndex) {
    if (newIndex === currentIndex) return;
    const currentSlide = items[currentIndex];
    const newSlide = items[newIndex];
    // transition direction
    const isNext =
      newIndex > currentIndex ||
      (currentIndex === items.length - 1 && newIndex === 0);
    // remove existing transition
    currentSlide.classList.remove(
      "move-left",
      "move-right",
      "enter-left",
      "enter-right"
    );
    newSlide.classList.remove(
      "move-left",
      "move-right",
      "enter-left",
      "enter-right"
    );
    // apply transition class
    if (isNext) {
      currentSlide.classList.add("move-left");
      newSlide.classList.add("enter-right");
    } else {
      currentSlide.classList.add("move-right");
      newSlide.classList.add("enter-left");
    }
    setTimeout(() => {
      setClasses(newIndex);
      currentIndex = newIndex;
    }, 500);
  }
  function goToNextSlide() {
    const nextIndex = (currentIndex - 1 + items.length) % items.length;
    showSlide(nextIndex);
  }
  function goToPrevSlide() {
    const prevIndex = (currentIndex + 1) % items.length;
    showSlide(prevIndex);
  }
  controls.forEach(control => {
    control.addEventListener("click", () => {
      const index = parseInt(control.getAttribute("data-index"));
      if (!isNaN(index)) {
        showSlide(index);
      }
    });
  });
  items.forEach(item => {
    item.addEventListener("click", () => {
      if (item.classList.contains("previous")) {
        goToNextSlide();
      } else if (item.classList.contains("next")) {
        goToPrevSlide();
      }
    });
  });
  setClasses(0);
});

// Toggle Menu
const showMenu = document.querySelector(".navbar-toggle");
const menu = document.querySelector(".navbar-mobile");
const closeToggle = document.querySelector(".close-toggle");

if (showMenu && menu && closeToggle) {
  showMenu.addEventListener("click", () => {
    menu.classList.toggle("active");
    document.body.style.overflow = "hidden";
  });

  closeToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}

// Accordion
// let accordion = document.querySelectorAll(".accordion");
let accordion = document.getElementsByClassName("accordion");
for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
