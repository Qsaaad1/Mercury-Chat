import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import { getAnalytics } from "firebase/analytics";
import 'firebase/compat/auth';
import "firebase/compat/storage";
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAq7gJ8JuOCss6ol8ifw9uOBrfsXGUoO6E",
  authDomain: "whatsappadvanced-d350b.firebaseapp.com",
  projectId: "whatsappadvanced-d350b",
  storageBucket: "whatsappadvanced-d350b.appspot.com",
  messagingSenderId: "42957807468",
  appId: "1:42957807468:web:b688132f4d934cc60a1d49",
  measurementId: "G-T9PR8V62WR"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage =  firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();


// Initialize Firebase
export { auth, provider, storage};
export default db;
