const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const remember = document.getElementById("remember");

const googleBtn = document.getElementById("googleBtn");
const fbBtn = document.getElementById("fbBtn");

// Load saved email if remembered
window.addEventListener("DOMContentLoaded", () => {
  const savedEmail = localStorage.getItem("ff_email");
  const savedRemember = localStorage.getItem("ff_remember");

  if (savedRemember === "true" && savedEmail) {
    email.value = savedEmail;
    remember.checked = true;
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const eVal = email.value.trim();
  const pVal = password.value.trim();

  if (!eVal || !pVal) {
    alert("Please enter Email and Password.");
    return;
  }

  // simple email check
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(eVal)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Remember Me
  if (remember.checked) {
    localStorage.setItem("ff_email", eVal);
    localStorage.setItem("ff_remember", "true");
  } else {
    localStorage.removeItem("ff_email");
    localStorage.setItem("ff_remember", "false");
  }

  alert("Login successful! (Demo)");
  window.location.href = "home.html"; 
});

googleBtn.addEventListener("click", () => {
  alert("Google Login (Demo)");
});

fbBtn.addEventListener("click", () => {
  alert("Facebook Login (Demo)");
});
