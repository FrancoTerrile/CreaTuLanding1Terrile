
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "coderhouse-francoterriletienda.firebaseapp.com",
  projectId: "coderhouse-francoterriletienda",
  storageBucket: "coderhouse-francoterriletienda.firebasestorage.app",
  messagingSenderId: "1031478068474",
  appId: "1:1031478068474:web:c5f48523b5658abbd7b543"
};

const app = initializeApp(firebaseConfig);

export const db= getFirestore(app)


