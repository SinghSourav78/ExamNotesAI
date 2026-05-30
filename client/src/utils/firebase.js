
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "authexamnotes-2de83.firebaseapp.com",
  projectId: "authexamnotes-2de83",
  storageBucket: "authexamnotes-2de83.firebasestorage.app",
  messagingSenderId: "84429992340",
  appId: "1:84429992340:web:302fd5ab06c5ef123fdf81"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}