import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJrr468NFv-sr5y2Feb2vNn5xt0Da7nm4",
  authDomain: "youflixgpt.firebaseapp.com",
  projectId: "youflixgpt",
  storageBucket: "youflixgpt.appspot.com",
  messagingSenderId: "212584202190",
  appId: "1:212584202190:web:79ca1301b2c6eb7c33359f",
  measurementId: "G-5YMVVW5W30",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile };
