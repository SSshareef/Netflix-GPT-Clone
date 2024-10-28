// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUE09tF0QII_vfLK1mruhly7cL51dAuE8",
  authDomain: "netflix-gpt-clone-c94e9.firebaseapp.com",
  projectId: "netflix-gpt-clone-c94e9",
  storageBucket: "netflix-gpt-clone-c94e9.appspot.com",
  messagingSenderId: "112481691643",
  appId: "1:112481691643:web:a88bd2fecc57d39f510d5e",
  measurementId: "G-KHDSSSMTQK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
