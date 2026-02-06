document.getElementById("scrollBtn").addEventListener("click", () => {
  document.getElementById("popular").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("cartBtn").addEventListener("click", () => {
  alert("Cart page (Demo) - connect later.");
});

document.getElementById("searchInput").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const q = e.target.value.trim();
    if (!q) return alert("Type something to search.");
    alert("Search: " + q + " (Demo)");
  }
});
