// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVgdTvtVxOHcsC6JkppEBeDwR8W98YW0g",
  authDomain: "beti-fa3da.firebaseapp.com",
  projectId: "beti-fa3da",
  storageBucket: "beti-fa3da.appspot.com",
  messagingSenderId: "675908553852",
  appId: "1:675908553852:web:0a22e7501355dc4d278df9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);