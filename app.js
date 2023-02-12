const password = document.getElementById("password");
const eye = document.getElementById("eye");


function hideAndShow(){
  if(password.type === "password"){
    password.type = "text";
    eye.src = "./image/eye.png"
  } else{
    password.type = "password";
    eye.src = "./image/eye-close.png"
  }
}