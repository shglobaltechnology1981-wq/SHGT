import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";

import {
getAuth,
signInWithEmailAndPassword,
signOut
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

const firebaseConfig = {

apiKey: "YOUR_API_KEY",

authDomain: "YOUR_PROJECT.firebaseapp.com",

projectId: "YOUR_PROJECT_ID",

storageBucket: "YOUR_PROJECT.appspot.com",

messagingSenderId: "YOUR_SENDER_ID",

appId: "YOUR_APP_ID"

};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

window.login = function(){

const email=document.getElementById("email").value;

const password=document.getElementById("password").value;

signInWithEmailAndPassword(auth,email,password)

.then(()=>{

location.href="dashboard.html";

})

.catch(error=>{

alert(error.message);

});

}

window.logout=function(){

signOut(auth).then(()=>{

location.href="login.html";

});

}
// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-storage.js";

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
<script type="module" src="admin.js"></script>
</body>
</html>
