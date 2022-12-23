// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzOFpNYHn1W9XO5mmRpCg3fxeqtsypk8M",
  authDomain: "listmania-29f92.firebaseapp.com",
  projectId: "listmania-29f92",
  storageBucket: "listmania-29f92.appspot.com",
  messagingSenderId: "649281092481",
  appId: "1:649281092481:web:7c7e9031152a1aa35fc680"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
}else {
    app = firebase.app()
}

const auth = firebase.auth()

export {auth}