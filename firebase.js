// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYN_ZpgBAQvr3o6jdh0-afwP8xTBRW23o",
  authDomain: "inventorymanagement-525e8.firebaseapp.com",
  projectId: "inventorymanagement-525e8",
  storageBucket: "inventorymanagement-525e8.appspot.com",
  messagingSenderId: "709428506223",
  appId: "1:709428506223:web:5e217e90207a8e8563e79a",
  measurementId: "G-0JYNX1DNMP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}