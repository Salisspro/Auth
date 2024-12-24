

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBN4KfHvB0W9AAdRuh9AGwdvBLi5GOd2PY",
  authDomain: "auth-e2205.firebaseapp.com",
  projectId: "auth-e2205",
  storageBucket: "auth-e2205.firebasestorage.app",
  messagingSenderId: "224336488762",
  appId: "1:224336488762:web:d0e2132081b57443c98803"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleAuthProvider = new GoogleAuthProvider()
export const db = getFirestore(app)