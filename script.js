fetch("products.json")
.then(response => {
    if (!response.ok) {
        throw new Error("Cannot load products.json");
    }
    return response.json();
})
.then(products => {

    const container = document.getElementById("product-container");

    container.innerHTML = "";

    products.forEach(product => {

        container.innerHTML += `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <b>${product.price}</b>
        </div>
        `;

    });

})
.catch(error => {
    console.log(error);
    document.getElementById("product-container").innerHTML =
    "Products failed to load.";
});
