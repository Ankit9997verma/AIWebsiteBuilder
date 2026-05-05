// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "aiwebsitebuilder-40cf9.firebaseapp.com",
  projectId: "aiwebsitebuilder-40cf9",
  storageBucket: "aiwebsitebuilder-40cf9.firebasestorage.app",
  messagingSenderId: "350327069807",
  appId: "1:350327069807:web:e205ea1449b0ca0395019a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const provider=new GoogleAuthProvider()

export {auth,provider}
