// =============================================
// SH GLOBAL TECHNOLOGY
// FINAL SCRIPT PART-9A
// Firebase Live Product Loading
// =============================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";

import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

// =============================================
// Firebase Config
// =============================================

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

// =============================================
// Product Container
// =============================================

const productsGrid = document.getElementById("productsGrid");

let allProducts = [];

// =============================================
// Load Products
// =============================================

async function loadProducts() {

    if (!productsGrid) return;

    productsGrid.innerHTML = `
        <h2 style="text-align:center;padding:40px;">
            Loading Products...
        </h2>
    `;

    try {

        const snapshot = await getDocs(collection(db, "products"));

        allProducts = [];

        snapshot.forEach((doc) => {

            allProducts.push({

                id: doc.id,

                ...doc.data()

            });

        });

        displayProducts(allProducts);

    }

    catch (error) {

        console.error(error);

        productsGrid.innerHTML = `
            <h2 style="text-align:center;color:red;">
                Failed to load products.
            </h2>
        `;

    }

}

// =============================================
// Display Products
// =============================================

function displayProducts(products) {

    if (products.length === 0) {

        productsGrid.innerHTML = `
            <h2 style="text-align:center;">
                No Products Found
            </h2>
        `;

        return;

    }

    let html = "";

    products.forEach((product) => {

        html += `

<div class="product-card">

<img
src="${product.image}"
alt="${product.name}"
loading="lazy">

<h3>${product.name}</h3>

<p>${product.brand}</p>

<p>${product.model}</p>

<p>${product.price}</p>

<a
href="product.html?id=${product.id}"
class="catalogue-btn">

View Details

</a>

</div>

`;

    });

    productsGrid.innerHTML = html;

}

loadProducts();
<div class="filter-bar">

<input
type="text"
id="searchInput"
placeholder="Search Machine...">

<select id="brandFilter">

