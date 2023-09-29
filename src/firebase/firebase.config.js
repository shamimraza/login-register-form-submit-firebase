// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtlA8s3aC7mWlUrOdatt4IubcDUQMbD0A",
    authDomain: "email-and-password-f8285.firebaseapp.com",
    projectId: "email-and-password-f8285",
    storageBucket: "email-and-password-f8285.appspot.com",
    messagingSenderId: "150771177602",
    appId: "1:150771177602:web:80cca4a5d4db48b03b3c9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;