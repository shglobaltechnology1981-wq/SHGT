/*==========================================
SH GLOBAL TECHNOLOGY
JavaScript
==========================================*/

let allProducts = [];

const productContainer = document.getElementById("product-container");

if (productContainer) {

    fetch("products.json")
        .then(response => response.json())
        .then(data => {

            allProducts = data;
            displayProducts(allProducts);

        })
        .catch(error => {

            console.error(error);

            productContainer.innerHTML =
                "<h2>Product Loading Failed</h2>";

        });

}

function displayProducts(products) {

    productContainer.innerHTML = "";

    if (products.length === 0) {

        productContainer.innerHTML =
            "<h2>No Product Found</h2>";

        return;
    }

    products.forEach(product => {

        productContainer.innerHTML += `

        <div class="product-card">

            <img src="${product.image}" alt="${product.name}">

            <h3>${product.name}</h3>

            <p><b>Brand:</b> ${product.brand}</p>

            <p><b>Model:</b> ${product.model}</p>

            <p>${product.description}</p>

            <a href="https://wa.me/8801621007916?text=Hello, I need information about ${encodeURIComponent(product.name)}"
            target="_blank"
            class="whatsapp-btn">

            WhatsApp Inquiry

            </a>

        </div>

        `;

    });

}

/*========== Search ==========*/

const search = document.getElementById("search");

if (search) {

    search.addEventListener("keyup", function () {

        const text = this.value.toLowerCase();

        const result = allProducts.filter(product =>

            product.name.toLowerCase().includes(text) ||
            product.brand.toLowerCase().includes(text) ||
            product.model.toLowerCase().includes(text)

        );

        displayProducts(result);

    });

}

/*========== Brand Filter ==========*/

const brandFilter = document.getElementById("brandFilter");

if (brandFilter) {

    brandFilter.addEventListener("change", function () {

        if (this.value === "all") {

            displayProducts(allProducts);

        } else {

            const result = allProducts.filter(product =>
                product.brand === this.value
            );

            displayProducts(result);

        }

    });

}
