import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'
import firebase from 'firebase/compat/app';
import { getFirestore } from "firebase/firestore";
import 'firebase/compat/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCP7XfUeVpFydf5yuvNUHtpMeG3bSHAtAk",
  authDomain: "school-805ee.firebaseapp.com",
  projectId: "school-805ee",
  storageBucket: "school-805ee.appspot.com",
  messagingSenderId: "616508763638",
  appId: "1:616508763638:web:c2b37496a33fcc8ebeabd7"
};



firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export const db = getFirestore(app);
export {auth}
const storage = getStorage(app);
export {storage};
export default firebase;