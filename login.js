const loginBtn = document.getElementById("login");
// console.log("LOGIN",login);

const loginUser = (e) => {
  e.preventDefault();
  const emailAddresss = document.getElementById("email").value;
  const passWord = document.getElementById("password").value;

  const UserEmailAddress = localStorage.getItem("EmailAddresss");
  const UserPassword = localStorage.getItem("Password");

  if (emailAddresss == "" && passWord == "") {
    alert("User credential cannot be empty");
    // do something
  } else if (emailAddresss == UserEmailAddress && passWord == UserPassword) {
    // do something
    alert("Login successfull");
    location.href = "./dashboard.html";
  } else {
    // do something else
    alert("User credential not found, kindly register an account");
  }
};

loginBtn.addEventListener("click", loginUser);

