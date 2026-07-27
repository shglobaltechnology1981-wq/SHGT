// =============================
// SHGT ADMIN PANEL
// =============================
console.log("SHGT Admin Panel Loaded");
import { auth, db, storage } from "./firebase.js";

import {
    addDoc,
    collection
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

import {
    ref,
    uploadBytes,
    getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";

// =============================
// SAVE PRODUCT
// =============================

window.saveProduct = async function () {

    const name = document.getElementById("name").value;
    const brand = document.getElementById("brand").value;
    const model = document.getElementById("model").value;
    const price = document.getElementById("price").value;
    const description = document.getElementById("description").value;

    const file = document.getElementById("image").files[0];

    if (!file) {
        alert("Please Select Image");
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

        alert("Product Saved Successfully");

        location.reload();

    } catch (err) {

        console.error(err);

        alert("Upload Failed");

    }

}
<script type="module" src="admin.js"></script>
</body>
</html>
