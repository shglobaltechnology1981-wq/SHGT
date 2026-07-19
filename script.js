let allProducts = [];

fetch("products.json")
.then(response => response.json())
.then(products => {
    allProducts = products;
    displayProducts(products);
})
.catch(error => {
    console.log(error);
    document.getElementById("product-list").innerHTML =
    "Products failed to load.";
});


function displayProducts(products){

    const container = document.getElementById("product-list");

    container.innerHTML = "";

    products.forEach(product => {

        container.innerHTML += `
        <div class="product-card">

        <img src="${product.image}" alt="${product.name}">

        <h3>${product.name}</h3>

        <p>${product.description}</p>

        <strong>${product.price}</strong>

        </div>
        `;

    });

}


function filterBrand(brand){

    if(brand=="all"){
        displayProducts(allProducts);
    }
    else{

        let filtered = allProducts.filter(
            item => item.brand == brand
        );

        displayProducts(filtered);

    }

}
