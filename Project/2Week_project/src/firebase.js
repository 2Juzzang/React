// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXpV8-A5vQHUHpvY0gqT4Ojp3kHqmfw14",
  authDomain: "sparta-react-basic-50bfc.firebaseapp.com",
  projectId: "sparta-react-basic-50bfc",
  storageBucket: "sparta-react-basic-50bfc.appspot.com",
  messagingSenderId: "654217068875",
  appId: "1:654217068875:web:7828b910489bc9f95628ce",
  measurementId: "G-SLHWPHVCNZ"
};

initializeApp(firebaseConfig)
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const db = getFirestore();
export { db };