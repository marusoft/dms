const password = document.getElementById("password");
const eye = document.getElementById("eye");
const registerBtn = document.getElementById("reg-btn");
console.log(registerBtn);

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
    form.classList.remove("valid");
    form.classList.remove("invalid");
    text.innerHTML = "";
  }
}

// submit event
submitData = () => {
  const cName = document.getElementById("cname").value;
  const lName = document.getElementById("lname").value;
  const cAddress = document.getElementById("caddress").value;
  const phoneNumber = document.getElementById("phonenumber").value;
  const emailAddress = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  localStorage.setItem("Company Name", cName);
  localStorage.setItem("Last Name", lName);
  localStorage.setItem("Company Address", cAddress);
  localStorage.setItem("phone Number", phoneNumber);
  localStorage.setItem("email Address", emailAddress);
  localStorage.setItem("Password", password);

  if (
    cName == "" &&
    lName == "" &&
    cAddress == "" &&
    phoneNumber == "" &&
    emailAddress == "" &&
    password == ""
  ) {
    alert("user details cannot be empty");
  }
};

registerBtn.addEventListener("click", submitData);
