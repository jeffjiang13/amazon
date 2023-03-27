import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPUFnrCOMzu3EaWbMA2cyCDEHwHeGhhWo",
  authDomain: "fir-65e2a.firebaseapp.com",
  projectId: "fir-65e2a",
  storageBucket: "fir-65e2a.appspot.com",
  messagingSenderId: "1046839981354",
  appId: "1:1046839981354:web:535415b561241ec0d81a53",
  measurementId: "G-L08KWBSY3K"
};
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
