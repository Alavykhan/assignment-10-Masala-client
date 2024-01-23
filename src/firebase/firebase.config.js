// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKdPfHwA6b8ixYh-hiYYp6EeeaIrgqbKw",
  authDomain: "masala-client.firebaseapp.com",
  projectId: "masala-client",
  storageBucket: "masala-client.appspot.com",
  messagingSenderId: "834820868676",
  appId: "1:834820868676:web:29f277e687f613f6b54a11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;