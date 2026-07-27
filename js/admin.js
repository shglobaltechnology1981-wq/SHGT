import { db, storage } from "./firebase.js";

import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

import {
  ref,
  uploadBytes,
  getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";

const imageInput = document.getElementById("image");
const preview = document.getElementById("preview");

if (imageInput && preview) {
  imageInput.addEventListener("change", () => {
    const file = imageInput.files[0];
    if (file) {
      preview.src = URL.createObjectURL(file);
      preview.style.display = "block";
    }
  });
}

window.saveProduct = async function () {

  const name = document.getElementById("name").value.trim();
  const brand = document.getElementById("brand").value.trim();
  const model = document.getElementById("model").value.trim();
  const price = document.getElementById("price").value.trim();
  const description = document.getElementById("description").value.trim();

  const file = imageInput.files[0];

  if (!name || !brand || !model || !price || !description) {
    alert("Please fill all fields");
    return;
  }

  if (!file) {
    alert("Please select an image");
    return;
  }

  try {

    const storageRef = ref(storage, "products/" + Date.now() + "_" + file.name);

    await uploadBytes(storageRef, file);

    const imageUrl = await getDownloadURL(storageRef);

    await addDoc(collection(db, "products"), {
      name,
      brand,
      model,
      price,
      description,
      image: imageUrl,
      createdAt: serverTimestamp()
    });

    alert("Product Uploaded Successfully");
    
    alert("Upload Failed");
   
    document.querySelector("form")?.reset();

    if (preview) {
      preview.style.display = "none";
    }

  } catch (err) {
    console.error(err);
    alert("Upload Failed");
  }

};
