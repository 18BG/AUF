import {getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDC2qEyibnC2FvsgIL099lbf3n540NGk18",
  authDomain: "appli-e7acd.firebaseapp.com",
  projectId: "appli-e7acd",
  storageBucket: "appli-e7acd.appspot.com",
  messagingSenderId: "843038805746",
  appId: "1:843038805746:web:ade3fe63078d013ee08a6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db};