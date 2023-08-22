// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlnuqINKdNYkgFjtWI4AdKg4jTK-gZ9_E",
  authDomain: "college-quora-ff041.firebaseapp.com",
  projectId: "college-quora-ff041",
  storageBucket: "college-quora-ff041.appspot.com",
  messagingSenderId: "588146271515",
  appId: "1:588146271515:web:2738825508fa31b5891fbe",
  measurementId: "G-Y99QE06PBT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };