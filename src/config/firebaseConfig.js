 import firebase from "firebase/app";
 import "firebase/firestore";
 import "firebase/auth";
 import "firebase/storage";
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyAjN8v9uGLbMCmDgBJyj9Z-QkK-nTVJ0PY",
  authDomain: "go-katalog.firebaseapp.com",
  databaseURL: "https://go-katalog.firebaseio.com",
  projectId: "go-katalog",
  storageBucket: "go-katalog.appspot.com",
  messagingSenderId: "263417923475",
  appId: "1:263417923475:web:22e550901f397a6f908a66"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.firestore();

  export default firebase;