const password = document.getElementById("password");
const eye = document.getElementById("eye");

// /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

function showAndHide() {
  if (password.type === "password") {
    password.type = "text";
    eye.src = "./image/eye.png";
  } else {
    password.type = "password";
    eye.src = "./image/eye-close.png";
  }
}

function validateEmail() {
  const form = document.getElementById("form");
  const email = document.getElementById("email").value;
  const text = document.getElementById("text");
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(emailPattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML = "Email is Valid";
    text.style.color = "#4caf50";
  } else {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.innerHTML = "Please provide valid email address";
    text.style.color = "#f44336";
  }
  if (email == "") {
    form.classList.remove('valid');
    form.classList.remove('invalid');
    text.innerHTML = "";
  }
}
