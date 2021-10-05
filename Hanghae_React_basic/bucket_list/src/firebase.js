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
  appId: "1:654217068875:web:b56e7d35a34b3a2a5628ce",
  measurementId: "G-1P4WYHSLFF"
};

//파이어베이스를 호출 할 때 파이어베이스를 쓸 수 있게 기초 설정
initializeApp(firebaseConfig); 
// Initialize Firebase

export const db = getFirestore();

