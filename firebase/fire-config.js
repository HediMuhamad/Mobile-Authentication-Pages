// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDppbJZeLG-il5aYcV2mMMuFp8bR8beYRA",
  authDomain: "frfroka11.firebaseapp.com",
  projectId: "frfroka11",
  storageBucket: "frfroka11.appspot.com",
  messagingSenderId: "419474678582",
  appId: "1:419474678582:web:2b6c639ea26eeaef45c997",
  measurementId: "G-LSG7WF4ELC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
export {analytics};