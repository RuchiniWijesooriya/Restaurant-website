// Smooth scroll to popular/menu area (See Menu button)
document.getElementById("seeMenuBtn").addEventListener("click", () => {
  const el = document.getElementById("popular");
  el.scrollIntoView({ behavior: "smooth" });
});

// Dummy search (demo)
document.getElementById("searchInput").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const q = e.target.value.trim();
    if (!q) return alert("Type something to search.");
    alert("Search: " + q + " (Demo)");
  }
});

// Cart button demo
document.getElementById("cartBtn").addEventListener("click", () => {
  alert("Cart (Demo) - connect to cart page later.");
});

document.getElementById("seeMenuBtn").addEventListener("click", () => {
    window.location.href= "Menu.html";
});