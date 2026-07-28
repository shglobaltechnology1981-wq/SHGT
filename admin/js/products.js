// =======================================
// SH GLOBAL TECHNOLOGY
// Product Management
// =======================================

import { auth, db } from "./firebase.js";

import {
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

import {
  collection,
  getDocs,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const table = document.getElementById("productTable");
const search = document.getElementById("search");

let products = [];

// ----------------------------
// Check Login
// ----------------------------

onAuthStateChanged(auth, (user) => {

    if (!user) {

        window.location.href = "login.html";

        return;

    }

    loadProducts();

});

// ----------------------------
// Load Products
// ----------------------------

async function loadProducts() {

    table.innerHTML = `
    <tr>
    <td colspan="7">Loading...</td>
    </tr>
    `;

    products = [];

    const snapshot = await getDocs(collection(db, "products"));

    snapshot.forEach((item)=>{

        products.push({

            id:item.id,

            ...item.data()

        });

    });

    showProducts(products);

}

// ----------------------------
// Show Products
// ----------------------------

function showProducts(list){

    if(list.length===0){

        table.innerHTML=`

<tr>

<td colspan="7">

No Product Found

</td>

</tr>

`;

        return;

    }

    let html="";

    list.forEach((p)=>{

        html += `

<tr>

<td>

<img
src="${p.image}"
style="width:60px;height:60px;object-fit:cover;border-radius:8px;">

</td>

<td>${p.name}</td>

<td>${p.brand}</td>

<td>${p.category}</td>

<td>${p.price}</td>

<td>${p.status}</td>

<td>

<button
class="edit"
onclick="editProduct('${p.id}')">

Edit

</button>

<button
class="delete"
onclick="deleteProduct('${p.id}')">

Delete

</button>

</td>

</tr>

`;

    });

    table.innerHTML = html;

}

// ----------------------------
// Search
// ----------------------------

search.addEventListener("keyup",()=>{

    const value = search.value.toLowerCase();

    const result = products.filter((p)=>{

        return (

            p.name.toLowerCase().includes(value) ||

            p.brand.toLowerCase().includes(value) ||

            p.model.toLowerCase().includes(value)

        );

    });

    showProducts(result);

});

// ----------------------------
// Edit
// ----------------------------

window.editProduct = function(id){

    location.href = "edit-product.html?id="+id;

}

// ----------------------------
// Delete
// ----------------------------

window.deleteProduct = async function(id){

    const ok = confirm("Delete this product?");

    if(!ok) return;

    await deleteDoc(doc(db,"products",id));

    alert("Product Deleted");

    loadProducts();

}
