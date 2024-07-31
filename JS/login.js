var passwordInput = document.getElementById("password");

var icon = document.getElementById("eye");

icon.addEventListener("click", function showpassword() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  } else {
    passwordInput.type = "password";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  }
});
window.addEventListener("load", function () {
  document.getElementById("username").focus();
});
