// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsS0i1qeCPWZMfB90py2IBF19oaWGhUPQ",
  authDomain: "netflixgpt-c2639.firebaseapp.com",
  projectId: "netflixgpt-c2639",
  storageBucket: "netflixgpt-c2639.appspot.com",
  messagingSenderId: "685432651400",
  appId: "1:685432651400:web:80f10c87895ac7bffca93d",
  measurementId: "G-CM83R1R8E9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();