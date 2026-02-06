const form = document.getElementById("serviceForm");
const successBox = document.getElementById("successBox");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = {
    fullName: document.getElementById("fullName").value.trim(),
    phone: document.getElementById("phone").value.trim(),
    email: document.getElementById("email").value.trim(),
    serviceType: document.getElementById("serviceType").value,
    datetime: document.getElementById("datetime").value,
    details: document.getElementById("details").value.trim(),
    createdAt: new Date().toISOString()
  };

  if (!data.fullName || !data.phone || !data.email || !data.details) {
    alert("Please fill in all required fields.");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(data.email)) {
    alert("Please enter a valid email address.");
    return;
  }

  const existing = JSON.parse(localStorage.getItem("ff_service_requests") || "[]");
  existing.push(data);
  localStorage.setItem("ff_service_requests", JSON.stringify(existing));

  successBox.style.display = "block";
  form.reset();

  setTimeout(() => {
    successBox.style.display = "none";
  }, 2500);
});
