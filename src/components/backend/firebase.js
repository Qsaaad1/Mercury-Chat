import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import { getAnalytics } from "firebase/analytics";
import 'firebase/compat/auth';
import "firebase/compat/storage";
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBGBPy3tsXys0uubuAeDBLCBMJ2bH_BmAU",
  authDomain: "saadchaljaa.firebaseapp.com",
  projectId: "saadchaljaa",
  storageBucket: "saadchaljaa.appspot.com",
  messagingSenderId: "1077870143430",
  appId: "1:1077870143430:web:8b7b6578027d92558cb4c7",
  measurementId: "G-METXB1MZM6"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage =  firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();


// Initialize Firebase
export { auth, provider, storage};
export default db;
