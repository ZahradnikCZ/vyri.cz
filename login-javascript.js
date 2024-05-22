const loginForm = document.getElementById("loginForm");
const allowedUsers = {
  "admin": "admin",
};

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("username");
  const password = document.getElementById("password");

  if (username.value.trim() === "") {
    alert("Please enter a username.");
    return;
  }

  if (password.value.trim() === "") {
    alert("Please enter a password.");
    return;
  }

  if (username.value.trim().length < 3) {
    alert("Username must be at least 3 characters long.");
    return;
  }

  if (password.value.trim().length < 3) {
    alert("Password must be at least 3 characters long.");
    return;
  }

  if (!allowedUsers.hasOwnProperty(username.value)) {
    alert("Invalid username.");
    return;
  }

  if (allowedUsers[username.value] !== password.value) {
    alert("Invalid password.");
    return;
  }

  loginForm.submit();
});