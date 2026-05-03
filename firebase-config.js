import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword,
         sendPasswordResetEmail, updateProfile }
  from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc, serverTimestamp }
  from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAX8DSrGQ0kh4DqIzqdOqqbUsELzpI2CWg",
  authDomain: "caro-mobility-741c6.firebaseapp.com",
  projectId: "caro-mobility-741c6",
  storageBucket: "caro-mobility-741c6.firebasestorage.app",
  messagingSenderId: "337601518411",
  appId: "1:337601518411:web:8efe3490f24ecae558e6ce",
  measurementId: "G-1XNDRSB9S1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

window.FB_AUTH = auth;
window.FB_DB = db;
window.FB_FN = {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
  doc, getDoc, setDoc, serverTimestamp
};