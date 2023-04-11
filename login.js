const loginBtn = document.getElementById("login");
// console.log("LOGIN",login);

const loginUser = (e) => {
  e.preventDefault();
  const emailAddresss = document.getElementById("email").value;
  const passWord = document.getElementById("password").value;

  const UserEmailAddress = localStorage.getItem("EmailAddresss");
  const UserPassword = localStorage.getItem("Password");

  if (emailAddresss == "" && passWord == "") {
    // do something
    // alert("User credential cannot be empty");
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "User credential cannot be empty!",
    });
  } else if (emailAddresss == UserEmailAddress && passWord == UserPassword) {
    // do something
    // alert("Login successfull");
    Swal.fire({
      icon: "success",
      title: "Successful!",
      text: "Account registration is successful!",
    });
    setTimeout(() => {
      location.href = "./dashboard.html";
    }, 5000);
  } else {
    // do something else
    // alert("User credential not found, kindly register an account");
    Swal.fire({
      icon: "error",
      text: "User credential not found, kindly register an account",
    });
  }
};

loginBtn.addEventListener("click", loginUser);
