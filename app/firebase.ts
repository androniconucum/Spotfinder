// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbyBh0xwPlxgvHcYZ17umCZkU0QL2ogQQ",
  authDomain: "spotfinder-b9c7b.firebaseapp.com",
  projectId: "spotfinder-b9c7b",
  storageBucket: "spotfinder-b9c7b.appspot.com",
  messagingSenderId: "35812301292",
  appId: "1:35812301292:web:b39448f68ec322db41c8c9"
};

// Check if is Initialize if it hasm use the existing App (getApp) otherwise initialize it and use that (initializeApp)
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth()

export { app, auth}