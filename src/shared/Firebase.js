import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBXpV8-A5vQHUHpvY0gqT4Ojp3kHqmfw14",
    authDomain: "sparta-react-basic-50bfc.firebaseapp.com",
    projectId: "sparta-react-basic-50bfc",
    storageBucket: "sparta-react-basic-50bfc.appspot.com",
    messagingSenderId: "654217068875",
    appId: "1:654217068875:web:78390cf6ffacadee5628ce",
    measurementId: "G-L08MVDL21J"
};

//초기화
firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();

export {auth, apiKey};