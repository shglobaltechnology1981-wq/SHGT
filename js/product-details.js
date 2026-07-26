/*==========================================
SH GLOBAL TECHNOLOGY
Product Details JavaScript
Version 1.0
==========================================*/

"use strict";


const productImage = document.getElementById("productImage");

const productName = document.getElementById("productName");

const productBrand = document.getElementById("productBrand");

const productBrandName = document.getElementById("productBrandName");

const productModel = document.getElementById("productModel");

const productCategory = document.getElementById("productCategory");

const productDescription = document.getElementById("productDescription");

const catalogueBtn = document.getElementById("catalogueBtn");

const whatsappBtn = document.getElementById("whatsappBtn");


const specBrand = document.getElementById("specBrand");

const specModel = document.getElementById("specModel");

const specCategory = document.getElementById("specCategory");


const relatedProducts = document.getElementById("relatedProducts");



let products = [];




/*==========================================
GET PRODUCT ID
==========================================*/


const urlParams = new URLSearchParams(window.location.search);

const productID = urlParams.get("id");





/*==========================================
LOAD PRODUCT DATA
==========================================*/


async function loadProductDetails(){


try{


const response = await fetch("products.json");


products = await response.json();



const product = products.find(item =>

item.id == productID

);



if(product){


showProduct(product);


showRelatedProducts(product);


}

else{


showError();


}


}


catch(error){


console.log(error);


showError();


}


}





/*==========================================
DISPLAY PRODUCT
==========================================*/


function showProduct(product){



if(productImage){

productImage.src = product.image;

productImage.alt = product.name;

}



if(productName){

productName.innerHTML = product.name;

}



if(productBrand){

productBrand.innerHTML = product.brand;

}



if(productBrandName){

productBrandName.innerHTML = product.brand;

}



if(productModel){

productModel.innerHTML = product.model;

}



if(productCategory){

productCategory.innerHTML = product.category;

}



if(productDescription){

productDescription.innerHTML = product.description;

}




/* Catalogue */


if(catalogueBtn){

catalogueBtn.href = product.catalogue;

}





/* WhatsApp */


if(whatsappBtn){


const message =

"I want information about " + product.name;



whatsappBtn.href =

"https://wa.me/8801621007916?text="

+

encodeURIComponent(message);



}




/* Specification */


if(specBrand){

specBrand.innerHTML = product.brand;

}


if(specModel){

specModel.innerHTML = product.model;

}


if(specCategory){

specCategory.innerHTML = product.category;

}



}





/*==========================================
RELATED PRODUCTS
==========================================*/


function showRelatedProducts(current){



if(!relatedProducts) return;



let related = products.filter(product =>

product.brand === current.brand

&&

product.id != current.id

);



related = related.slice(0,4);




related.forEach(product=>{


relatedProducts.innerHTML +=`


<div class="product-card">


<img src="${product.image}"

alt="${product.name}">


<div class="product-info">


<span class="product-brand">

${product.brand}

</span>



<h3>

${product.name}

</h3>



<a href="product-details.html?id=${product.id}"

class="btn btn-primary">

View Details

</a>



</div>


</div>


`;


});



}







/*==========================================
ERROR
==========================================*/


function showError(){


if(productName){

productName.innerHTML = "Product Not Found";

}


}





/*==========================================
START
==========================================*/


document.addEventListener("DOMContentLoaded",()=>{


loadProductDetails();


});
