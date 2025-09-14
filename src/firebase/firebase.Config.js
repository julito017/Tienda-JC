// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQiZYTHKag6v_ZX-LMCJ9VCDntPTwL2nk",
  authDomain: "sistema-reserva-1f0f9.firebaseapp.com",
  databaseURL: "https://sistema-reserva-1f0f9-default-rtdb.firebaseio.com",
  projectId: "sistema-reserva-1f0f9",
  storageBucket: "sistema-reserva-1f0f9.firebasestorage.app",
  messagingSenderId: "180114751334",
  appId: "1:180114751334:web:23f3232cb4e8b647a5d2a7",
  measurementId: "G-LNVHFYQ8QC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);