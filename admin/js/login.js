// ========================================
// SH GLOBAL TECHNOLOGY
// Admin Login
// ========================================

import { auth } from "./firebase.js";

import {
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

// Already logged in?
onAuthStateChanged(auth, (user) => {

  if (user) {

    window.location.href = "dashboard.html";

  }

});


// Login Button
const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", login);


// Login Function
async function login() {

  const email = document.getElementById("email").value.trim();

  const password = document.getElementById("password").value.trim();

  const msg = document.getElementById("msg");


  if (email === "" || password === "") {

    msg.style.color = "red";

    msg.innerHTML = "Please enter Email & Password.";

    return;

  }

  try {

    await signInWithEmailAndPassword(auth, email, password);

    msg.style.color = "green";

    msg.innerHTML = "Login Successful...";

    setTimeout(() => {

      window.location.href = "dashboard.html";

    }, 800);

  }

  catch (error) {

    console.log(error);

    msg.style.color = "red";

    switch (error.code) {

      case "auth/invalid-credential":

        msg.innerHTML = "Invalid Email or Password.";

        break;

      case "auth/user-not-found":

        msg.innerHTML = "User not found.";

        break;

      case "auth/wrong-password":

        msg.innerHTML = "Wrong Password.";

        break;

      case "auth/too-many-requests":

        msg.innerHTML = "Too many attempts. Try again later.";

        break;

      default:

        msg.innerHTML = error.message;

    }

  }

}
