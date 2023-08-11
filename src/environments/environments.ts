import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
    // Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

  apiKey: "AIzaSyCiLrQnSvFnJBLiwo7XfwYm7FFuGBDLiVo",
  authDomain: "angularfirstproject-8f0e4.firebaseapp.com",
  projectId: "angularfirstproject-8f0e4",
  storageBucket: "angularfirstproject-8f0e4.appspot.com",
  messagingSenderId: "620378785847",
  appId: "1:620378785847:web:3e664088c69761a91b17b2",
  measurementId: "G-TR7C3ET55E"
};

// Initialize Firebase
const app = initializeApp(environment);
const analytics = getAnalytics(app);
    