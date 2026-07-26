/*==========================================
SH GLOBAL TECHNOLOGY
Smart Search System
Version 2.0
==========================================*/

"use strict";

const searchBox = document.getElementById("searchInput");
const searchResult = document.getElementById("searchResult");

let products = [];

/*==============================
LOAD PRODUCTS
==============================*/

async function loadSearchData() {

    try {

        const response = await fetch("products.json");

        products = await response.json();

    } catch (error) {

        console.error("Search Data Load Error", error);

    }

}

loadSearchData();

/*==============================
LIVE SEARCH
==============================*/

if (searchBox) {

    searchBox.addEventListener("input", function () {

        const keyword = this.value.trim().toLowerCase();

        if (!searchResult) return;

        searchResult.innerHTML = "";

        if (keyword.length < 2) {

            searchResult.style.display = "none";

            return;

        }

        const result = products.filter(product =>

            product.name.toLowerCase().includes(keyword) ||

            product.brand.toLowerCase().includes(keyword) ||

            product.model.toLowerCase().includes(keyword) ||

            product.category.toLowerCase().includes(keyword)

        );

        if (result.length === 0) {

            searchResult.innerHTML = `

                <div class="search-empty">

                    No products found.

                </div>

            `;

        } else {

            result.slice(0,8).forEach(product => {

                searchResult.innerHTML += `

<div class="search-item">

    <img src="${product.image}" alt="${product.name}">

    <div class="search-info">

        <h4>${product.name}</h4>

        <small>${product.brand}</small>

    </div>

    <a href="https://wa.me/8801621007916?text=I want information about ${encodeURIComponent(product.name)}">

        Inquiry

    </a>

</div>

`;

            });

        }

        searchResult.style.display = "block";

    });

}

/*==============================
HIDE SEARCH RESULT
==============================*/

document.addEventListener("click", function(e){

    if(!searchBox || !searchResult) return;

    if(!searchBox.contains(e.target) && !searchResult.contains(e.target)){

        searchResult.style.display="none";

    }

});
