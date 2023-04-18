import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import { getAnalytics } from "firebase/analytics";
import 'firebase/compat/auth';
import "firebase/compat/storage";
import 'firebase/compat/firestore';

const firebaseConfig = {
 
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage =  firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();


// Initialize Firebase
export { auth, provider, storage};
export default db;
