import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

// PASO 1: Copiá aquí el objeto firebaseConfig de tu propio proyecto Firebase.
const firebaseConfig = {
  apiKey: "AIzaSyDWf6fj0QzUA6HKYDtufVBm5ZSwMMbsJxs",
  authDomain: "actividad-s9-b6bbb.firebaseapp.com",
  projectId: "actividad-s9-b6bbb",
  storageBucket: "actividad-s9-b6bbb.firebasestorage.app",
  messagingSenderId: "428179259680",
  appId: "1:428179259680:web:0e1bc0817c0eac38a25745"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
