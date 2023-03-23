import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBRxizuE74tpzbN0GaAARcigER9z32DM3U",
  authDomain: "amzn-243a4.firebaseapp.com",
  projectId: "amzn-243a4",
  storageBucket: "amzn-243a4.appspot.com",
  messagingSenderId: "801170056320",
  appId: "1:801170056320:web:06d641d12ac2a87b06f265"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
