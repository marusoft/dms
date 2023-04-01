const password = document.getElementById("password");
const eye = document.getElementById("eye");
const registerBtn = document.getElementById("reg-btn");
// console.log(registerBtn);

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

const submitRegData = (e) => {
  e.preventDefault();
  // alert("data submited successfully");
  const cName = document.getElementById("cname").value;
  const lName = document.getElementById("lname").value;
  const cAddress = document.getElementById("caddress").value;
  const phoneNumber = document.getElementById("phonenumber").value;
  const emailAddresss = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  localStorage.setItem("CompanyName", cName);
  localStorage.setItem("LastName", lName);
  localStorage.setItem("CompanyAddress", cAddress);
  localStorage.setItem("PhoneNumber", phoneNumber);
  localStorage.setItem("EmailAddresss", emailAddresss);
  localStorage.setItem("Password", password);

  if (
    cName == "" &&
    lName == "" &&
    cAddress == "" &&
    phoneNumber == "" &&
    emailAddresss == "" &&
    password == ""
  ) {
    // alert("details cannot be empty");
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Details cannot be empty!',
    })
  } else if (password.length >= 8 && password.length <= 20) {
    // alert("Account registration is successful");
    Swal.fire({
      icon: 'success',
      title: 'Successful!',
      text: 'Account registration is successful!',
    })
    setTimeout(() => {
      location.href = "./login.html";
    }, 5000);
  
  } else {
    // alert("Minimum of 8 characters is required for password");
    Swal.fire({
      icon: 'error',
      text: 'Minimum of 8 characters is required for password',
    })
  }
};

registerBtn.addEventListener("click", submitRegData);
