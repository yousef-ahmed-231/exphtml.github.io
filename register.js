// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8i2mQNPYg3kwgQp1UtBY-Na16IOMhGUI",
  authDomain: "carshop-f1610.firebaseapp.com",
  projectId: "carshop-f1610",
  storageBucket: "carshop-f1610.firebasestorage.app",
  messagingSenderId: "260909708665",
  appId: "1:260909708665:web:9f3c1d54efaaada6a0eba8",
  measurementId: "G-JF20Y2RB8V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);  // <-- THIS IS THE CRUCIAL LINE

const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();
  
  //inputs
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("Account created successfully!");
      window.location.href = "index2.html";
      // Redirect or update UI here
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});