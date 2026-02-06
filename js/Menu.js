const buttons = document.querySelectorAll(".filter-btn");
const categories = document.querySelectorAll(".category");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    // active button UI
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter; // all/burgers/pizza/rice/beverages

    if (filter === "all") {
      categories.forEach(cat => cat.style.display = "block");
      return;
    }

    categories.forEach(cat => {
      const catName = cat.dataset.cat;
      cat.style.display = (catName === filter) ? "block" : "none";
    });
  });
});
