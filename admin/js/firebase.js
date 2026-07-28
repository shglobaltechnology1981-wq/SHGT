// ========================================
// SH GLOBAL TECHNOLOGY
// Firebase Configuration
// ========================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCWszOZc27idF_IWhTWVOv7P7jOS-Eq3Uc",
  authDomain: "shgt-global.firebaseapp.com",
  projectId: "shgt-global",
  storageBucket: "shgt-global.firebasestorage.app",
  messagingSenderId: "825797264866",
  appId: "1:825797264866:web:966bc7af6bdb9843f725bb",
  measurementId: "G-F0HTF7M0LX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Services
const auth = getAuth(app);
const db = getFirestore(app);

// Export
export { auth, db };
