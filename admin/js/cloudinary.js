// =========================================
// SH GLOBAL TECHNOLOGY
// Cloudinary + Firestore Upload
// =========================================

import { auth, db } from "./firebase.js";

import {
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";


// ===============================
// Check Login
// ===============================

onAuthStateChanged(auth, (user) => {

    if (!user) {

        window.location.href = "login.html";

    }

});


// ===============================
// Elements
// ===============================

const imageInput = document.getElementById("image");
const preview = document.getElementById("preview");
const uploadBtn = document.getElementById("uploadBtn");
const msg = document.getElementById("msg");


// ===============================
// Preview Image
// ===============================

imageInput.addEventListener("change", () => {

    const file = imageInput.files[0];

    if (!file) return;

    preview.src = URL.createObjectURL(file);

    preview.style.display = "block";

});


// ===============================
// Upload Button
// ===============================

uploadBtn.addEventListener("click", uploadProduct);


// ===============================
// Upload Product
// ===============================

async function uploadProduct() {

    try {

        uploadBtn.disabled = true;

        msg.style.color = "blue";

        msg.innerHTML = "Uploading image...";


        const file = imageInput.files[0];

        if (!file) {

            alert("Please select an image.");

            uploadBtn.disabled = false;

            return;

        }


        // Upload Image To Cloudinary

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


        if (!data.secure_url) {

            throw new Error("Cloudinary Upload Failed");

        }


        msg.innerHTML = "Saving product...";


        // Save To Firestore

        await addDoc(collection(db, "products"), {

            name: document.getElementById("name").value,

            brand: document.getElementById("brand").value,

            category: document.getElementById("category").value,

            model: document.getElementById("model").value,

            price: document.getElementById("price").value,

            description: document.getElementById("description").value,

            image: data.secure_url,

            status: "Available",

            createdAt: serverTimestamp()

        });


        msg.style.color = "green";

        msg.innerHTML = "✅ Product Added Successfully";


        document.getElementById("name").value = "";

        document.getElementById("brand").value = "";

        document.getElementById("category").value = "";

        document.getElementById("model").value = "";

        document.getElementById("price").value = "";

        document.getElementById("description").value = "";

        imageInput.value = "";

        preview.src = "";

        preview.style.display = "none";


        uploadBtn.disabled = false;

    }

    catch (error) {

        console.error(error);

        msg.style.color = "red";

        msg.innerHTML = error.message;

        uploadBtn.disabled = false;

    }

}
