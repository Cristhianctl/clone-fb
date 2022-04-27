import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAeNcS72ki5l_l5WnGSkWBUI0VrbArwtSA",
    authDomain: "clone-facebook-61dd8.firebaseapp.com",
    projectId: "clone-facebook-61dd8",
    storageBucket: "clone-facebook-61dd8.appspot.com",
    messagingSenderId: "556335284795",
    appId: "1:556335284795:web:54c6ef16e0b52a6e0e521e",
    measurementId: "G-6S2WTB8WDN"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;