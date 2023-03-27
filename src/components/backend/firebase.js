import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import { getAnalytics } from "firebase/analytics";
import 'firebase/compat/auth';
import "firebase/compat/storage";
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDg0MTSwAy-FL5JXCg_n4bKkzubK7MA1iM",
  authDomain: "saadsapp-4b741.firebaseapp.com",
  projectId: "saadsapp-4b741",
  storageBucket: "saadsapp-4b741.appspot.com",
  messagingSenderId: "414728584143",
  appId: "1:414728584143:web:2934b08cdfb86e220af0ba",
  measurementId: "G-QWRY5Y1HPF",
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage =  firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();


// Initialize Firebase
export { auth, provider, storage};
export default db;