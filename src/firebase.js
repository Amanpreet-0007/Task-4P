import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAChp1SlDYgoo6E9qIR87pVhm9oSlIZc98",
  authDomain: "staff-app-e6cf6.firebaseapp.com",
  projectId: "staff-app-e6cf6",
  storageBucket: "staff-app-e6cf6.firebasestorage.app",
  messagingSenderId: "56336235109",
  appId: "1:56336235109:web:f45bbd3005af3f295ce48c",
  measurementId: "G-L9F0RV9ZHY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

// Initialize & Export Authentication and Firestore Services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

export default app;