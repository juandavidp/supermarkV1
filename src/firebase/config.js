import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3XAUqsBuQ9jxt_kBV599Xk53W7ne892o",
  authDomain: "supermarket-327523.firebaseapp.com",
  projectId: "supermarket-327523",
  storageBucket: "supermarket-327523.appspot.com",
  messagingSenderId: "471711173326",
  appId: "1:471711173326:web:70a0eefcf81fc4033e9e9f",
  measurementId: "G-EXDVZV652Q",
};

// inicializar Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, db, googleAuthProvider };
