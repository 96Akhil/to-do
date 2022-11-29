function myCallback() {
  window.location.href = "./login.html";
}

function validate(callback) {
  let username = document.getElementById("username");
  let password = document.getElementById("password");
  let loginid = "admin";
  let pwd = 12345;
  if (loginid == username.value && pwd == password.value) {
    callback();
  } else {
    alert("Not valid");
  }
}
