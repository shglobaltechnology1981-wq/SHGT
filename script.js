/*==========================================
SH GLOBAL TECHNOLOGY
Professional Website JavaScript
==========================================*/

let allProducts = [];

const productContainer = document.getElementById("product-container");

/*================ LOAD PRODUCTS ================*/

if (productContainer) {

    fetch("products.json")
        .then(response => response.json())
        .then(products => {

            allProducts = products;
            displayProducts(allProducts);

        })
        .catch(error => {

            console.error("Product Loading Error:", error);

            productContainer.innerHTML = `
                <h2 style="text-align:center;color:red;">
                    Product Loading Failed
                </h2>
            `;

        });

}


/*================ DISPLAY PRODUCTS ================*/

function displayProducts(products) {

    if (!productContainer) return;

    productContainer.innerHTML = "";

    if (products.length === 0) {

        productContainer.innerHTML = `
            <h2 style="text-align:center;">
                No Product Found
            </h2>
        `;

        return;

    }

    products.forEach(product => {

        let catalogueButton = "";

        if (product.category === "Service") {

            catalogueButton = `
                <a href="service.html"
                   class="catalogue-btn">
                   View Service
                </a>
            `;

        } else {

            catalogueButton = `
                <a href="Pdf/SHGT-Catalogue.pdf"
                   target="_blank"
                   class="catalogue-btn">
                   View Catalogue
                </a>
            `;

        }

        productContainer.innerHTML += `

        <div class="product-card">

            <img src="${product.image}"
                 alt="${product.name}">

            <h3>${product.name}</h3>

            <p>
                <strong>Brand:</strong>
                ${product.brand}
            </p>

            <p>
                <strong>Model:</strong>
                ${product.model}
            </p>

            <p>
                ${product.description}
            </p>

            <a href="https://wa.me/8801621007916?text=Hello SH Global Technology, I need information about ${encodeURIComponent(product.name)}"
               target="_blank"
               class="whatsapp-btn">

               WhatsApp Inquiry

            </a>

            ${catalogueButton}

        </div>

        `;

    });

}
/*================ SEARCH =================*/

const searchBox = document.getElementById("search");

if (searchBox) {

    searchBox.addEventListener("keyup", function () {

        const searchText = this.value.trim().toLowerCase();

        const filteredProducts = allProducts.filter(product => {

            return (
                product.name.toLowerCase().includes(searchText) ||
                product.brand.toLowerCase().includes(searchText) ||
                product.model.toLowerCase().includes(searchText) ||
                product.category.toLowerCase().includes(searchText) ||
                product.description.toLowerCase().includes(searchText)
            );

        });

        displayProducts(filteredProducts);

    });

}


/*================ BRAND FILTER =================*/

const brandFilter = document.getElementById("brandFilter");

if (brandFilter) {

    brandFilter.addEventListener("change", function () {

        const selectedBrand = this.value;

        if (selectedBrand === "all") {

            displayProducts(allProducts);

        } else {

            const filteredProducts = allProducts.filter(product =>
                product.brand === selectedBrand
            );

            displayProducts(filteredProducts);

        }

    });

}


/*================ PAGE LOADED =================*/

window.addEventListener("load", () => {

    console.log("SH Global Technology Website Loaded Successfully");

});
