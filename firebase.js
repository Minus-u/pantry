// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxxzObhTnPXqNzttAxnfdzHp1ZAKeLlRM",
  authDomain: "inventory-management-app-73678.firebaseapp.com",
  projectId: "inventory-management-app-73678",
  storageBucket: "inventory-management-app-73678.appspot.com",
  messagingSenderId: "1078478909165",
  appId: "1:1078478909165:web:40cae05b2224824aeee6e4",
  measurementId: "G-MJBMS0B2GM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export {app, firestore}