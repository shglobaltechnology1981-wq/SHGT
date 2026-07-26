/*==========================================
SH GLOBAL TECHNOLOGY
Brands JavaScript
Version 1.0
==========================================*/

"use strict";


/*==============================
BRAND CLICK SYSTEM
==============================*/


const brandButtons = document.querySelectorAll(".brand-card a");



brandButtons.forEach(button => {


    button.addEventListener("click", function(e){


        const link = this.getAttribute("href");


        if(link.includes("products.html")){


            return true;


        }


    });


});




/*==============================
BRAND COUNT
==============================*/


async function loadBrandCount(){


try{


const response = await fetch("products.json");


const products = await response.json();



const brandList = {};



products.forEach(product=>{

if(!product.brand) return;
    
if(brandList[product.brand]){


brandList[product.brand]++;


}

else{


brandList[product.brand]=1;


}


});



document.querySelectorAll(".brand-card")

.forEach(card=>{


const title = card.querySelector("h3");


if(!title) return;



const brandName = title.innerText;



const brandKey = Object.keys(brandList).find(
    key => key.toLowerCase() === brandName.toLowerCase()
);

const count = brandKey ? brandList[brandKey] : 0;

const oldCount = card.querySelector(".brand-product-count");

if(oldCount){
    oldCount.remove();
}

const countText = document.createElement("span");


countText.className="brand-product-count";


countText.innerHTML =

count + " Products";



card.appendChild(countText);



});



}

catch(error){


console.log("Brand Count Error",error);


}


}




/*==============================
START
==============================*/


document.addEventListener("DOMContentLoaded",()=>{


loadBrandCount();


});
