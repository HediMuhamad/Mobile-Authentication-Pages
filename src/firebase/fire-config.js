// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQ5wbntKRXwma-m6yruJob7CnzREXiVZY",
  authDomain: "login-signup-firebase-tailwind.firebaseapp.com",
  projectId: "login-signup-firebase-tailwind",
  storageBucket: "login-signup-firebase-tailwind.appspot.com",
  messagingSenderId: "638253338526",
  appId: "1:638253338526:web:828d64bebb330bd86c108f",
  measurementId: "G-MFTXP7E08E"
};

// Initialize Firebase
const initialization = initializeApp(firebaseConfig);
const analytics = getAnalytics(initialization);

export default initialization;
export {analytics};