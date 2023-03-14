import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDj1VeUJ55xZnCw5PRKcDs7Sxec8v-L_QY",
  authDomain: "instagram-a762b.firebaseapp.com",
  projectId: "instagram-a762b",
  storageBucket: "instagram-a762b.appspot.com",
  messagingSenderId: "798807471924",
  appId: "1:798807471924:web:f353fed325db32a37f9761",
  measurementId: "G-FQYB0M5W8R",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
