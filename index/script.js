function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Your login validation logic here
    if (username == "admin" && password == "admin") {
      alert("Login successful!");
    } else {
      alert("Invalid username or password.");
    }
  }
  