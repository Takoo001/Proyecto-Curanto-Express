document.getElementById("createAccountButton").addEventListener("click", () => {
  window.location.href = "loading.html";
});

document.getElementById("skipButton").addEventListener("click", () => {
  window.location.href = "loading.html";
});

document.getElementById("togglePassword").addEventListener("click", () => {
  const passwordInput = document.getElementById("password");
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});

