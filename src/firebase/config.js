// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHPzFUcNhP32M-NaAwRhpidM5PV_lNJNg",
  authDomain: "ecommerce-azofra.firebaseapp.com",
  projectId: "ecommerce-azofra",
  storageBucket: "ecommerce-azofra.appspot.com",
  messagingSenderId: "584147556336",
  appId: "1:584147556336:web:a98d451b05539a9d422f35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);