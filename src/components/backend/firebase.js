import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import { getAnalytics } from "firebase/analytics";
import 'firebase/compat/auth';
import "firebase/compat/storage";
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain:  `${process.env.REACT_APP_AUTH_DOMAIN}`,
  projectId: `${process.env.REACT_APP_PROJECT_ID}`,
  storageBucket:  `${process.env.REACT_APP_STORAGE_BUCKET}`,
  messagingSenderId:  `${process.env.REACT_APP_MESSAGE_SENDER_ID}`,
  appId:  `${process.env.REACT_APP_APP_ID}`,
  measurementId:  `${process.env.REACT_APP_MEASUREMENT_ID}`,
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage =  firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();


// Initialize Firebase
export { auth, provider, storage};
export default db;