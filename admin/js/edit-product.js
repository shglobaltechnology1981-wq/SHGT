// =======================================
// SH GLOBAL TECHNOLOGY
// Edit Product
// =======================================

import { auth, db } from "./firebase.js";

import {
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

import {
  doc,
  getDoc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

// ----------------------------
// Login Check
// ----------------------------

onAuthStateChanged(auth, (user) => {

    if (!user) {

        location.href = "login.html";
        return;

    }

    loadProduct();

});

// ----------------------------
// Get Product ID
// ----------------------------

const params = new URLSearchParams(window.location.search);

const id = params.get("id");

// ----------------------------
// Load Product
// ----------------------------

async function loadProduct() {

    const ref = doc(db, "products", id);

    const snap = await getDoc(ref);

    if (!snap.exists()) {

        alert("Product Not Found");

        location.href = "products.html";

        return;

    }

    const p = snap.data();

    document.getElementById("name").value = p.name || "";
    document.getElementById("brand").value = p.brand || "";
    document.getElementById("category").value = p.category || "";
    document.getElementById("model").value = p.model || "";
    document.getElementById("price").value = p.price || "";
    document.getElementById("description").value = p.description || "";
    document.getElementById("preview").src = p.image || "";

}

// ----------------------------
// Update Product
// ----------------------------

document
.getElementById("updateBtn")
.addEventListener("click", updateProduct);

async function updateProduct() {

    const msg = document.getElementById("msg");

    let imageUrl = document.getElementById("preview").src;

    const file = document.getElementById("image").files[0];

    // Upload New Image (Optional)

    if (file) {

        msg.style.color = "blue";
        msg.innerHTML = "Uploading Image...";

        const formData = new FormData();

        formData.append("file", file);
        formData.append("upload_preset", "shgt_lobal");

        const response = await fetch(
            "https://api.cloudinary.com/v1_1/ywxg2gao/image/upload",
            {
                method: "POST",
                body: formData
            }
        );

        const data = await response.json();

        if (data.secure_url) {

            imageUrl = data.secure_url;

        }

    }

    // Update Firestore

    await updateDoc(doc(db, "products", id), {

        name: document.getElementById("name").value,
        brand: document.getElementById("brand").value,
        category: document.getElementById("category").value,
        model: document.getElementById("model").value,
        price: document.getElementById("price").value,
        description: document.getElementById("description").value,
        image: imageUrl,
        status: "Available"

    });

    msg.style.color = "green";
    msg.innerHTML = "✅ Product Updated Successfully";

    setTimeout(() => {

        location.href = "products.html";

    }, 1200);

}
