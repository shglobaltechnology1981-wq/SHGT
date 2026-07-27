// ==============================
// SHGT Firebase Configuration
// ==============================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDRE2OHU5p1Kwx0-rydYjDx2wk9PJ-mtQo",
  authDomain: "global-f7363.firebaseapp.com",
  projectId: "global-f7363",
storageBucket: "global-f7363.appspot.com",
  messagingSenderId: "35836716641",
  appId: "1:35836716641:web:7b7728fd2950c6f9b8ec20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export
export { auth, db, storage };
