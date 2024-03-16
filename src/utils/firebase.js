// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-app-84dab.firebaseapp.com",
  projectId: "blog-app-84dab",
  storageBucket: "blog-app-84dab.appspot.com",
  messagingSenderId: "398659714053",
  appId: "1:398659714053:web:c10cb51e08e139870bb06c",
  measurementId: "G-4LFNENR13F"
};

export const app = initializeApp(firebaseConfig);