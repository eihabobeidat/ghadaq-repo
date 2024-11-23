import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
 
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
