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


    console.log("Products Load Error:", error);


    const container = document.getElementById("product-list");


    if(container){

        container.innerHTML =

        "<h2>Products failed to load.</h2>";

    }


});





/*==============================
DISPLAY PRODUCTS
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





/*==============================
VIEW ALL PRODUCTS
==============================*/


const viewAllBtn = document.getElementById("viewAllProducts");


if(viewAllBtn){


viewAllBtn.addEventListener("click",()=>{


window.location.href="products.html";


});


}
/*==========================================
SERVICE DETAILS BUTTON
===========================================*/

const serviceButtons = document.querySelectorAll(".service-btn");


serviceButtons.forEach(button => {


    button.addEventListener("click", function(){


        const details = this.nextElementSibling;


        if(details.style.display === "block"){


            details.style.display = "none";


            this.innerHTML = "View Details";


        }

        else{


            details.style.display = "block";


            this.innerHTML = "Hide Details";


        }


    });


});
