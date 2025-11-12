// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbc43HMj-jDjkApzHKjep2Up_fwrckSsQ",
  authDomain: "community-market-place-303f4.firebaseapp.com",
  projectId: "community-market-place-303f4",
  storageBucket: "community-market-place-303f4.firebasestorage.app",
  messagingSenderId: "240050382692",
  appId: "1:240050382692:web:2b11a5b604b7679273bc71",
  measurementId: "G-8HHRK2WPKF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
