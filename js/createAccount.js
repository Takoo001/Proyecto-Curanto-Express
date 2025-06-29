document.getElementById("createAccountButton").addEventListener("click", () => {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error-message");

  if (username === "admin" && password === "1234") {
    window.location.href = "loading.html";
  } else {
    error.textContent = "Usuario o contraseña incorrectos.";
  }
});

document.getElementById("skipButton").addEventListener("click", () => {
  window.location.href = "loading.html";
});

document.getElementById("togglePassword").addEventListener("click", () => {
  const passwordInput = document.getElementById("password");
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});
