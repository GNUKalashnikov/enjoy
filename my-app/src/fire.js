import firebase from "firebase/app";
import "firebase/auth";

  var firebaseConfig = {
    apiKey: "AIzaSyDdrTJis998EXC_GqkipxIrY8OjF9cLzfQ",
    authDomain: "login-4f21b.firebaseapp.com",
    projectId: "login-4f21b",
    storageBucket: "login-4f21b.appspot.com",
    messagingSenderId: "780003468552",
    appId: "1:780003468552:web:a0c713a7c6d2bbf25238bd"
  };
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;