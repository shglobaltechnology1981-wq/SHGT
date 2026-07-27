import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBfsyRl1h-egJ6cq8fEB-6sWndX20KNsD4",
  authDomain: "shgt-d629e.firebaseapp.com",
  projectId: "shgt-d629e",
  storageBucket: "shgt-d629e.firebasestorage.app",
  messagingSenderId: "884656945032",
  appId: "1:884656945032:web:0a5d2788213388c2a36c3d"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
