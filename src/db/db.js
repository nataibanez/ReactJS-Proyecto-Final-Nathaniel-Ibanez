// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY9OlfwMpBNqkulW_xsxpQ9sQhhtP9Vz4",
  authDomain: "proyecto-gin-coderhouse.firebaseapp.com",
  projectId: "proyecto-gin-coderhouse",
  storageBucket: "proyecto-gin-coderhouse.firebasestorage.app",
  messagingSenderId: "80101672400",
  appId: "1:80101672400:web:73b957abaa2f30055625d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default db;