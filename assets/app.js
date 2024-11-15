// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

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
const auth = getAuth(app);
const analytics = getAnalytics(app);
