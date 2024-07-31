window.addEventListener("load", function () {
  document.getElementById("username").focus();
});
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

var confirmPasswordInput = document.getElementById("confirmpassword");
var icon1 = document.getElementById("eye1");

icon1.addEventListener("click", function showconfirmpassword() {
  if (confirmPasswordInput.type === "password") {
    confirmPasswordInput.type = "text";
    icon1.classList.remove("fa-eye-slash");
    icon1.classList.add("fa-eye");
  } else {
    confirmPasswordInput.type = "password";
    icon1.classList.remove("fa-eye");
    icon1.classList.add("fa-eye-slash");
  }
});
var password = document.getElementById("password");
var icon2 = document.getElementById("icon");

document
  .getElementById("confirmpassword")
  .addEventListener("keyup", function () {
    if (password.value.length > 0) {
      if (this.value.length > 0) {
        if (password.value !== this.value) {
          document.getElementById("notmatch").innerText =
            "Password does not match...";
          this.style.outline = "2px solid red";
          document.getElementById("submit").disabled = true;

          icon2.classList.remove("fa-key");
          icon2.classList.add("fa-lock");
        } else {
          document.getElementById("notmatch").innerText = "";
          this.style.outline = "none";
          icon2.classList.remove("fa-lock");
          icon2.classList.add("fa-key");
          document.getElementById("submit").disabled = false;
        }
      } else {
        document.getElementById("notmatch").innerText =
          "Please enter confirm password...";
        this.style.outline = "2px solid red";
        icon2.classList.remove("fa-key");
        icon2.classList.add("fa-lock");
        document.getElementById("submit").disabled = true;
      }
    }
  });

function signup() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmpassword").value;
  var email = document.getElementById("email").value;
  var number = document.getElementById("number").value;

  // Check if the user already exists in local storage
  var existingUsers = JSON.parse(localStorage.getItem("users")) || [];
  var usernameExists = existingUsers.some(function (user) {
    return user.username === username;
  });
  var emailExists = existingUsers.some(function (user) {
    return user.email === email;
  });
  var numberExists = existingUsers.some(function (user) {
    return user.number === number;
  });
  var error = document.getElementById("error");
  if (usernameExists) {
    error.innerText =
      "User already exists with this username. Please choose a different username.";
  } else if (emailExists) {
    error.innerText =
      "User already exists with this email. Please choose a different email.";
  } else if (numberExists) {
    error.innerText =
      "User already exists with this number. Please choose a different number.";
  } else {
    // Save the new user to local storage
    existingUsers.push({
      username: username,
      password: password,
      email: email,
      number: number,
    });
    localStorage.setItem("users", JSON.stringify(existingUsers));
    const signupForm = document.getElementById("signupForm");
    signupForm.action = "login.html";
  }
}