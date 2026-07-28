import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCWszOZc27idF_IWhTWVOv7P7jOS-Eq3Uc",
  authDomain: "shgt-global.firebaseapp.com",
  projectId: "shgt-global",
  storageBucket: "shgt-global.firebasestorage.app",
  messagingSenderId: "825797264866",
  appId: "1:825797264866:web:966bc7af6bdb9843f725bb",
  measurementId: "G-F0HTF7M0LX"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
