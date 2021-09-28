import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: "AIzaSyCVgdTvtVxOHcsC6JkppEBeDwR8W98YW0g",
  authDomain: "beti-fa3da.firebaseapp.com",
  databaseURL:"https://beti-fa3da-default-rtdb.firebaseio.com/",
  projectId: "beti-fa3da",
  storageBucket: "beti-fa3da.appspot.com",
  messagingSenderId: "675908553852",
  appId: "1:675908553852:web:0a22e7501355dc4d278df9"
})

export const auth = firebase.auth();

export default app;