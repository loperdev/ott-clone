// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";

import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";
// import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4Kd9H-ZkaSsPr6l6KlmWTkF6731BXTUo",
  authDomain: "ott-clone-8cb98.firebaseapp.com",
  projectId: "ott-clone-8cb98",
  storageBucket: "ott-clone-8cb98.appspot.com",
  messagingSenderId: "1016338169098",
  appId: "1:1016338169098:web:d655041c59272c5363cef3"
};

// Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
