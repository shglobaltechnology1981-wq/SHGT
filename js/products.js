/*==========================================
SH GLOBAL TECHNOLOGY
Products JavaScript
Version 3.0
==========================================*/

"use strict";

/*==============================
ELEMENTS
==============================*/

const productContainer = document.getElementById("product-container");
const searchInput = document.getElementById("searchInput");
const brandFilter = document.getElementById("brandFilter");
const loading = document.getElementById("loadingProducts");
const noProduct = document.getElementById("noProductMessage");

let allProducts = [];

/*==============================
LOAD PRODUCTS
==============================*/

async function loadProducts() {

    if (!productContainer) return;

    try {

        if (loading) {
            loading.style.display = "flex";
        }

        const response = await fetch("products.json");

        if (!response.ok) {
            throw new Error("Unable to load products.json");
        }

        allProducts = await response.json();

        displayProducts(allProducts);

    } catch (error) {

        console.error(error);

        if (loading) {
            loading.style.display = "none";
        }

        productContainer.innerHTML = `
            <div class="no-product">
                <h3>No Products Found</h3>
                <p>Unable to load products.json</p>
            </div>
        `;
    }
}

/*==============================
DISPLAY PRODUCTS
==============================*/

function displayProducts(products) {

    if (loading) {
        loading.style.display = "none";
    }

    if (noProduct) {
        noProduct.style.display = "none";
    }

    productContainer.innerHTML = "";

    if (products.length === 0) {

        if (noProduct) {
            noProduct.style.display = "block";
        }

        return;
    }

    products.forEach(product => {

        productContainer.innerHTML += `

<div class="product-card" data-brand="${product.brand}">

    <img src="${product.image}" alt="${product.name}">

    <div class="product-info">

        <span class="product-brand">${product.brand}</span>

        <h3>${product.name}</h3>

        <p>${product.description}</p>

        <div class="product-buttons">

            <a href="${product.catalogue}"
               target="_blank"
               class="btn btn-primary">

                Catalogue

            </a>

            <a href="https://wa.me/8801621007916?text=${encodeURIComponent("I want information about " + product.name)}"
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

    searchInput.addEventListener("input", function () {

        const keyword = this.value.trim().toLowerCase();

        const brand =
            brandFilter ? brandFilter.value : "All";

        filterProducts(keyword, brand);

    });

}

/*==============================
BRAND FILTER
==============================*/

if (brandFilter) {

    brandFilter.addEventListener("change", function () {

        const keyword =
            searchInput ? searchInput.value.trim().toLowerCase() : "";

        filterProducts(keyword, this.value);

    });

}

/*==============================
FILTER
==============================*/

function filterProducts(keyword, brand) {

    const filtered = allProducts.filter(product => {

        const matchKeyword =

            product.name.toLowerCase().includes(keyword) ||

            product.brand.toLowerCase().includes(keyword) ||

            product.model.toLowerCase().includes(keyword) ||

            product.category.toLowerCase().includes(keyword);

        const matchBrand =

            brand === "All" ||

            product.brand === brand;

        return matchKeyword && matchBrand;

    });

    displayProducts(filtered);

}

/*==============================
START
==============================*/

document.addEventListener("DOMContentLoaded", () => {

    loadProducts();

});
