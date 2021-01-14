import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC6H-_rX9gou8yHsPW9K4COG5RpRNvFZOw",
  authDomain: "twitter-80151.firebaseapp.com",
  projectId: "twitter-80151",
  storageBucket: "twitter-80151.appspot.com",
  messagingSenderId: "473548307148",
  appId: "1:473548307148:web:b7faae8a88621ed5a12069",
  measurementId: "G-8EP3FQD87J"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
