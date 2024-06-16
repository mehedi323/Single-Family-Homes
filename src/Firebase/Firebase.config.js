// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrabf4Zk-avF5cNXfGLGx9x3nbo-vDg2E",
  authDomain: "simple-family-homes.firebaseapp.com",
  projectId: "simple-family-homes",
  storageBucket: "simple-family-homes.appspot.com",
  messagingSenderId: "79284964200",
  appId: "1:79284964200:web:79dc91880065ee74c2e4dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;