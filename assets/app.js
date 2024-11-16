// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCmZgIArbGNSIQ21dCxXPCOARujle5ve9E",
    authDomain: "ghadaq-ce016.firebaseapp.com",
    projectId: "ghadaq-ce016",
    storageBucket: "ghadaq-ce016.firebasestorage.app",
    messagingSenderId: "828634359462",
    appId: "1:828634359462:web:6a208a4805ebe2a115f667",
    measurementId: "G-RXKCJSFQCG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Get the Sign Up button and the forms container
const showSignupBtn = document.getElementById('show-signup-form'); // The Sign Up button
const authForms = document.getElementById('auth-forms');  // Container that holds both Sign-Up and Sign-In forms

// Toggle visibility of the forms when the Sign Up button is clicked
showSignupBtn.addEventListener('click', () => {
    // Show the forms if hidden, else hide them
    if (authForms.style.display === 'none') {
        authForms.style.display = 'block';  // Show the forms container
    } else {
        authForms.style.display = 'none';  // Hide the forms container
    }
});

// Get the sign-up form and input elements
const signupForm = document.getElementById('signup-form');
const signupEmail = document.getElementById('signup-email');
const signupPassword = document.getElementById('signup-password');

// Sign-Up Form Submission
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = signupEmail.value;
    const password = signupPassword.value;

    // Firebase Sign-Up Logic
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Successfully signed up
            const user = userCredential.user;
            console.log("User signed up: ", user);
            alert("Signed up successfully!");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error signing up: ", errorCode, errorMessage);
            alert("Error: " + errorMessage);
        });
});

// Get the sign-in form and input elements
const signinForm = document.getElementById('signin-form');
const signinEmail = document.getElementById('signin-email');
const signinPassword = document.getElementById('signin-password');

// Sign-In Form Submission
signinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = signinEmail.value;
    const password = signinPassword.value;

    // Firebase Sign-In Logic
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Successfully signed in
            const user = userCredential.user;
            console.log("User signed in: ", user);
            alert("Signed in successfully!");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error signing in: ", errorCode, errorMessage);
            alert("Error: " + errorMessage);
        });
});
