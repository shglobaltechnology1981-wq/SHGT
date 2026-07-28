import { db, storage } from "./firebase.js";

import {
  addDoc,
  collection
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

import {
  ref,
  uploadBytes,
  getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";
  async function saveProduct() {
  document.getElementById("saveBtn").addEventListener("click", saveProduct);
  const name = document.getElementById("name").value.trim();
  const brand = document.getElementById("brand").value.trim();
  const model = document.getElementById("model").value.trim();
  const price = document.getElementById("price").value.trim();
  const description = document.getElementById("description").value.trim();
  const file = document.getElementById("image").files[0];

  if (!name || !brand || !model || !price || !description || !file) {
    alert("Please fill all fields and select an image.");
    return;
  }

  try {
    const storageRef = ref(storage, "products/" + Date.now() + "-" + file.name);

    await uploadBytes(storageRef, file);

    const imageUrl = await getDownloadURL(storageRef);

    await addDoc(collection(db, "products"), {
      name,
      brand,
      model,
      price,
      description,
      image: imageUrl,
      createdAt: new Date()
    });

    alert("✅ Product Saved Successfully");

    document.querySelector("form").reset();
    document.getElementById("preview").style.display = "none";

  } catch (error) {
    console.error(error);
    alert(error.message);
  }

};
