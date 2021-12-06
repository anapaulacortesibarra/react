import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'


const firebaseConfig = {
  apiKey: "AIzaSyAAD62s4rtKnDuC1Iws9R10AZF0qib5-Vc",
  authDomain: "bnmjoyas.firebaseapp.com",
  projectId: "bnmjoyas",
  storageBucket: "bnmjoyas.appspot.com",
  messagingSenderId: "292041689148",
  appId: "1:292041689148:web:4a9ba1acbf2cdbf62edb39",
  measurementId: "G-MTWHP8CM4Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)