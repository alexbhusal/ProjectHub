import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  
import { getFirestore,collection, addDoc, getDocs } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyBtCb1Ul5I9EKh1gc9VhYMUTgJcXVmFxVw",
  authDomain: "project-hubb.firebaseapp.com",
  projectId: "project-hubb",
  storageBucket: "project-hubb.firebasestorage.app",
  messagingSenderId: "563181311093",
  appId: "1:563181311093:web:cfafb17b52c5243a46143c",
  measurementId: "G-L0MR0KNZ2H"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);  
const firestore = getFirestore(app);  

export { auth, firestore,collection, addDoc, getDocs };  