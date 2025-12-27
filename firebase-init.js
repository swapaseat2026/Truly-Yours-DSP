// Import Firebase
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9Wc9me_xmVEorMVSPMHtD9lqQ7P6zjJA",
  authDomain: "truly-yours-dsp-2025.firebaseapp.com",
  projectId: "truly-yours-dsp-2025",
  storageBucket: "truly-yours-dsp-2025.appspot.com",   // ✅ FIXED
  messagingSenderId: "369021987682",                   // ✅ FIXED
  appId: "1:369021987682:web:ded7b7e150ab8fbb3cbb9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
