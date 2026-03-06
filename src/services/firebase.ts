import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5zGR5AEKcWnHVN2PmZyHIwyR-sfcnN10",
  authDomain: "movietracker-954b2.firebaseapp.com",
  projectId: "movietracker-954b2",
  storageBucket: "movietracker-954b2.firebasestorage.app",
  messagingSenderId: "983971811662",
  appId: "1:983971811662:web:928cc2df46ca94508bce1f",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
