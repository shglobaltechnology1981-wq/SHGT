// ========================================
// SH GLOBAL TECHNOLOGY
// Dashboard
// ========================================

import { auth, db } from "./firebase.js";

import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

import {
  collection,
  getDocs,
  query,
  orderBy,
  limit
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";


// ===============================
// Check Login
// ===============================

onAuthStateChanged(auth, async (user) => {

    if (!user) {

        window.location.href = "login.html";
        return;

    }

    loadDashboard();

});


// ===============================
// Logout
// ===============================

const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", async () => {

    await signOut(auth);

    window.location.href = "login.html";

});


// ===============================
// Load Dashboard
// ===============================

async function loadDashboard() {

    const totalProducts = document.getElementById("totalProducts");

    const totalMachines = document.getElementById("totalMachines");

    const totalParts = document.getElementById("totalParts");

    const productTable = document.getElementById("productTable");


    productTable.innerHTML = `
    <tr>
        <td colspan="6" style="text-align:center;">
        Loading...
        </td>
    </tr>
    `;


    let machine = 0;
    let parts = 0;

    const snapshot = await getDocs(collection(db, "products"));

    totalProducts.innerHTML = snapshot.size;

    let html = "";


    snapshot.forEach((doc) => {

        const p = doc.data();

        if ((p.category || "").toLowerCase() === "machine") {

            machine++;

        }

        if ((p.category || "").toLowerCase() === "spare part") {

            parts++;

        }

        html += `

<tr>

<td>

<img
src="${p.image}"
width="60"
height="60"
style="object-fit:cover;border-radius:6px;">

</td>

<td>${p.name}</td>

<td>${p.brand}</td>

<td>${p.category}</td>

<td>${p.status}</td>

<td>

<a class="edit" href="edit-product.html?id=${doc.id}">

Edit

</a>

</td>

</tr>

`;

    });


    totalMachines.innerHTML = machine;

    totalParts.innerHTML = parts;


    if (snapshot.empty) {

        productTable.innerHTML = `

<tr>

<td colspan="6" style="text-align:center;">

No Products Found

</td>

</tr>

`;

    } else {

        productTable.innerHTML = html;

    }

}
