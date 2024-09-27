import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDIiIPdn5SDQaC_826-NBsz8xr6ZxF7PPk",
  authDomain: "morphd-a7f54.firebaseapp.com",
  projectId: "morphd-a7f54",
  storageBucket: "morphd-a7f54.appspot.com",
  messagingSenderId: "175424361385",
  appId: "1:175424361385:web:f0a1e39bafe8d1f7d46ab8",
  measurementId: "G-XYEC55C4Q2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
