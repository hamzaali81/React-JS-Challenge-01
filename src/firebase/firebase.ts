// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDm6D3WKwgK5qUaKXYMdOmXuBpxH0PjwcE",
  authDomain: "clone-e6be0.firebaseapp.com",
  projectId: "clone-e6be0",
  storageBucket: "clone-e6be0.appspot.com",
  messagingSenderId: "452100075059",
  appId: "1:452100075059:web:e060f50beb5b5df9bdfd46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

