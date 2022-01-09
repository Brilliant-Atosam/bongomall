// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcf-r-Nb5fRSVJn_iT9Ma4w8V9agUeZaY",
  authDomain: "shop-39eab.firebaseapp.com",
  projectId: "shop-39eab",
  storageBucket: "shop-39eab.appspot.com",
  messagingSenderId: "756440868907",
  appId: "1:756440868907:web:44b17ef34961212e4e226e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app