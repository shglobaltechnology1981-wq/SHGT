// =======================================
// SH GLOBAL TECHNOLOGY
// Live Product Loading
// =======================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";

import {
    getFirestore,
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

// Firebase Config

const firebaseConfig = {

  apiKey: "AIzaSyCWszOZc27idF_IWhTWVOv7P7jOS-Eq3Uc",

  authDomain: "shgt-global.firebaseapp.com",

  projectId: "shgt-global",

  storageBucket: "shgt-global.firebasestorage.app",

  messagingSenderId: "825797264866",

  appId: "1:825797264866:web:966bc7af6bdb9843f725bb"

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// ==========================
// Load Products
// ==========================

async function loadProducts(){

const grid = document.getElementById("productsGrid");

if(!grid) return;

grid.innerHTML="<h3>Loading...</h3>";

const snapshot = await getDocs(collection(db,"products"));

let html="";

snapshot.forEach((doc)=>{

const p = doc.data();

html += `

<div class="product-card">

<img src="${p.image}" alt="${p.name}">

<h3>${p.name}</h3>

<p>${p.brand}</p>

<p>${p.model}</p>

<p>${p.price}</p>

<a href="product.html?id=${doc.id}" class="catalogue-btn">

View Details

</a>

</div>

`;

});

grid.innerHTML = html;

}

loadProducts();
