document.getElementById("loginButton").addEventListener("click", () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
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