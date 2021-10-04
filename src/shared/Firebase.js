import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBXpV8-A5vQHUHpvY0gqT4Ojp3kHqmfw14",
  authDomain: "sparta-react-basic-50bfc.firebaseapp.com",
  projectId: "sparta-react-basic-50bfc",
  storageBucket: "sparta-react-basic-50bfc.appspot.com",
  messagingSenderId: "654217068875",
  appId: "1:654217068875:web:78390cf6ffacadee5628ce",
  measurementId: "G-L08MVDL21J"
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

export{auth, apiKey, firestore, storage};