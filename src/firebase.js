import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const app = initializeApp({
  apiKey: "AIzaSyDZQnZdzoyK_s8PhI0ihnNIm33VztSujT0",
  authDomain: "checkyourcar-d925a.firebaseapp.com",
  projectId: "checkyourcar-d925a",
  storageBucket: "checkyourcar-d925a.appspot.com",
  messagingSenderId: "1073063866802",
  appId: "1:1073063866802:web:1b154a807df7c34678b4ab"
  // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
})

export const auth = getAuth(app)
export default app