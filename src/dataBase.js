// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBtdrTDQN8qc8hkrQTc61MpiOMioK0fuiM",
    authDomain: "management-project-53a3d.firebaseapp.com",
    projectId: "management-project-53a3d",
    storageBucket: "management-project-53a3d.appspot.com",
    messagingSenderId: "152279670179",
    appId: "1:152279670179:web:fc511e22d450260f578e16",
    measurementId: "G-REN1KS8D80"
  };

  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);