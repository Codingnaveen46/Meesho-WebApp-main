// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "meesho-webapp.firebaseapp.com",
  projectId: "meesho-webapp",
  storageBucket: "meesho-webapp.appspot.com",
  messagingSenderId: "1045277792411",
  appId: ""
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig;
