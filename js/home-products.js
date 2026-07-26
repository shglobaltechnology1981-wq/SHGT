/*==========================================
SH GLOBAL TECHNOLOGY
Home Featured Products JavaScript
Version 1.0
==========================================*/

"use strict";


let homeProducts = [];


/*==============================
LOAD HOME PRODUCTS
==============================*/

fetch("products.json")

.then(response => response.json())

.then(products => {


    homeProducts = products;


    displayHomeProducts(
        products.slice(0,6)
    );


})


.catch(error => {


    console.log("Home Products Error:", error);


});



/*==============================
DISPLAY HOME PRODUCTS
==============================*/

function displayHomeProducts(products){


const container = document.getElementById("product-list");


if(!container) return;



container.innerHTML = "";



products.forEach(product => {


container.innerHTML += `


<div class="product-card">


<img src="${product.image}"

alt="${product.name}"

onerror="this.src='logo.png'">



<div class="product-info">


<span class="product-brand">

${product.brand}

</span>



<h3>

${product.name}

</h3>



<p>

${product.description}

</p>



<a href="product-details.html?id=${product.id}"

class="btn">

View Details

</a>



<a href="https://wa.me/8801621007916?text=${encodeURIComponent("I need information about " + product.name)}"

target="_blank"

class="btn btn-success">

WhatsApp

</a>



</div>


</div>


`;


});


}
