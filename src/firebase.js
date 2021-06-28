import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp( {
    apiKey: "AIzaSyCPNCLSVDsnXOdrZUNi7_whRH6o9KRnEPA",
    authDomain: "unichat-33a18.firebaseapp.com",
    projectId: "unichat-33a18",
    storageBucket: "unichat-33a18.appspot.com",
    messagingSenderId: "506133979421",
    appId: "1:506133979421:web:f4dbfa7952273e5def41f4",
    measurementId: "G-EEB5HG4L34"
  }).auth();