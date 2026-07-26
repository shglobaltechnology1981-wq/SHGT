/*==========================================
SH GLOBAL TECHNOLOGY
Products JavaScript
==========================================*/

"use strict";

const productContainer = document.getElementById("product-container");
const searchInput = document.getElementById("searchInput");
const brandFilter = document.getElementById("brandFilter");

let allProducts = [];

/*==============================
LOAD PRODUCTS
==============================*/

async function loadProducts() {

    if (!productContainer) return;

    try {

        const response = await fetch("products.json");

        if (!response.ok) {

            throw new Error("Products not found");

        }

        allProducts = await response.json();

        displayProducts(allProducts);

    } catch (error) {

        console.error(error);

        productContainer.innerHTML = `

            <div class="no-product">

                <h3>No Products Found</h3>

            </div>

        `;

    }

}

/*==============================
DISPLAY PRODUCTS
==============================*/

function displayProducts(products) {

    productContainer.innerHTML = "";

    if (products.length === 0) {

        productContainer.innerHTML = `

            <div class="no-product">

                <h3>No Products Available</h3>

            </div>

        `;

        return;

    }

    products.forEach(product => {

        productContainer.innerHTML += `

<div class="product-card">

    <img src="${product.image}" alt="${product.name}">

    <div class="product-info">

        <span class="product-brand">${product.brand}</span>

        <h3>${product.name}</h3>

        <p>${product.description}</p>

        <div class="product-buttons">

            <a href="${product.catalogue}" target="_blank" class="btn btn-primary">

                Catalogue

            </a>

            <a href="https://wa.me/8801621007916?text=I want information about ${encodeURIComponent(product.name)}"

               target="_blank"

               class="btn btn-success">

                WhatsApp

            </a>

        </div>

    </div>

</div>

        `;

    });

}

/*==============================
SEARCH
==============================*/

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const keyword = this.value.toLowerCase();

        const filtered = allProducts.filter(product =>

            product.name.toLowerCase().includes(keyword) ||

            product.brand.toLowerCase().includes(keyword) ||

            product.model.toLowerCase().includes(keyword)

        );

        displayProducts(filtered);

    });

}

/*==============================
BRAND FILTER
==============================*/

if (brandFilter) {

    brandFilter.addEventListener("change", function () {

        const brand = this.value;

        if (brand === "All") {

            displayProducts(allProducts);

            return;

        }

        const filtered = allProducts.filter(product =>

            product.brand === brand

        );

        displayProducts(filtered);

    });

}

/*==============================
START
==============================*/

loadProducts();
