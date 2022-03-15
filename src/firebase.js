// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB45DARN9xytQQC6xF5HiQWyTX2YwIFKN0",
  authDomain: "socialnet-5075b.firebaseapp.com",
  databaseURL:
    "https://socialnet-5075b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "socialnet-5075b",
  storageBucket: "socialnet-5075b.appspot.com",
  messagingSenderId: "660202316917",
  appId: "1:660202316917:web:0ecc3d9a56bd8e9c14c43c",
  measurementId: "G-Q31PVVYGQ3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();
