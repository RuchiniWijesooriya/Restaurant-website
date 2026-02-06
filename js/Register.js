const form = document.getElementById("signupForm");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const offers = document.getElementById("offers");

document.getElementById("googleBtn").addEventListener("click", () => {
  alert("Google Login (Demo)");
});

document.getElementById("fbBtn").addEventListener("click", () => {
  alert("Facebook Login (Demo)");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const f = firstName.value.trim();
  const l = lastName.value.trim();
  const em = email.value.trim();
  const pw = password.value.trim();
  const cpw = confirmPassword.value.trim();

  if (!f || !l || !em || !pw || !cpw) {
    alert("Please fill in all fields.");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(em)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (pw.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  }

  if (pw !== cpw) {
    alert("Passwords do not match.");
    return;
  }

  // Save demo user
  const user = {
    firstName: f,
    lastName: l,
    email: em,
    offers: offers.checked
  };

  localStorage.setItem("ff_user", JSON.stringify(user));
  alert("Account created successfully! (Demo)");

  // redirect to login (optional)
  window.location.href = "login.html";
});
