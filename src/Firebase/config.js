// Your web app's Firebase configuration
// import { initializeApp } from "firebase/firebase-app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDFdrvohBaG6zhVEg32FTDZlBiTfCSLs2M",
    authDomain: "iamwebluk.firebaseapp.com",
    projectId: "iamwebluk",
    storageBucket: "iamwebluk.appspot.com",
    messagingSenderId: "496010660485",
    appId: "1:496010660485:web:e387c0a12108d4055b37ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
