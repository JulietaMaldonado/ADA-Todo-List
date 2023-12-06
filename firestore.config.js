// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import firebase from 'firebase/app';
//import 'firebase/firestore';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLtQIjEhwq5nuRHhMSsCU4G-0AyfdZ0Ts",
  authDomain: "ada-todolist.firebaseapp.com",
  projectId: "ada-todolist",
  storageBucket: "ada-todolist.appspot.com",
  messagingSenderId: "21232465892",
  appId: "1:21232465892:web:3c9a946b20d22d5bfb79f1"
};

// Initialize Firebase
/*firebase.initializeApp(firebaseConfig);
export const firestore = firebase.getFirestore()*/


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}