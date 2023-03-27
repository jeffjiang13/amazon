import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyZ5_CEnMfWduTeG19YO9hGgyxFNAulTw",
  authDomain: "jj-189db.firebaseapp.com",
  projectId: "jj-189db",
  storageBucket: "jj-189db.appspot.com",
  messagingSenderId: "22051823632",
  appId: "1:22051823632:web:05c61388d312c082dd2a95",
  measurementId: "G-RHP61M549H"
};
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
