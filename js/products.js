/*==========================================
SH GLOBAL TECHNOLOGY
Products JavaScript
Version 4.0
==========================================*/

"use strict";


const productContainer = document.getElementById("product-container");

const searchInput = document.getElementById("searchInput");

const brandFilter = document.getElementById("brandFilter");

const categoryFilter = document.getElementById("categoryFilter");

const loading = document.getElementById("loadingProducts");

const noProduct = document.getElementById("noProductMessage");

const currentPageText = document.getElementById("currentPage");

const totalPagesText = document.getElementById("totalPages");

const prevPage = document.getElementById("prevPage");

const nextPage = document.getElementById("nextPage");


let allProducts = [];

let filteredProducts = [];

let currentPage = 1;

const productsPerPage = 12;



/*==============================
LOAD PRODUCTS
==============================*/


async function loadProducts(){

    if(!productContainer) return;


    try{


        if(loading){

            loading.style.display="flex";

        }


        const response = await fetch("products.json");


        allProducts = await response.json();


        filteredProducts = allProducts;


        displayProducts();


    }

    catch(error){


        console.log(error);


        productContainer.innerHTML=`

        <div class="no-product">

        <h3>Products Loading Error</h3>

        </div>

        `;

    }

}



/*==============================
DISPLAY PRODUCTS
==============================*/


function displayProducts(){


    if(loading){

        loading.style.display="none";

    }


    productContainer.innerHTML="";


    if(filteredProducts.length===0){


        if(noProduct){

            noProduct.style.display="block";

        }


        return;

    }


    if(noProduct){

        noProduct.style.display="none";

    }



    let start =
    (currentPage-1)*productsPerPage;


    let end =
    start+productsPerPage;


    let products =
    filteredProducts.slice(start,end);



    products.forEach(product=>{


        productContainer.innerHTML +=`


<div class="product-card"
data-brand="${product.brand}">


<img src="${product.image}"
alt="${product.name}">



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



<div class="product-buttons">


<a href="product-details.html?id=${product.id}"

class="btn btn-primary">

View Details

</a>



<a href="${product.catalogue}"

target="_blank"

class="btn">

PDF

</a>


</div>



</div>


</div>


`;



    });


updatePagination();


}



/*==============================
FILTER SYSTEM
==============================*/


function applyFilter(){


let keyword =
searchInput ?
searchInput.value.toLowerCase()
:"";


let brand =
brandFilter ?
brandFilter.value
:"All";


let category =
categoryFilter ?
categoryFilter.value
:"All";



filteredProducts =
allProducts.filter(product=>{


let searchMatch =

product.name.toLowerCase().includes(keyword)

||

product.brand.toLowerCase().includes(keyword)

||

product.model.toLowerCase().includes(keyword);



let brandMatch =

brand==="All"

||

product.brand===brand;



let categoryMatch =

category==="All"

||

product.category===category;



return searchMatch && brandMatch && categoryMatch;


});


currentPage=1;


displayProducts();


}




/*==============================
EVENTS
==============================*/


if(searchInput){

searchInput.addEventListener("input",applyFilter);

}


if(brandFilter){

brandFilter.addEventListener("change",applyFilter);

}


if(categoryFilter){

categoryFilter.addEventListener("change",applyFilter);

}




/*==============================
PAGINATION
==============================*/


function updatePagination(){


let totalPages =

Math.ceil(filteredProducts.length/productsPerPage);



if(totalPagesText){

totalPagesText.innerHTML=totalPages;

}


if(currentPageText){

currentPageText.innerHTML=currentPage;

}


}



if(nextPage){


nextPage.addEventListener("click",()=>{


let totalPages =

Math.ceil(filteredProducts.length/productsPerPage);



if(currentPage < totalPages){

currentPage++;

displayProducts();

}


});


}



if(prevPage){


prevPage.addEventListener("click",()=>{


if(currentPage>1){

currentPage--;

displayProducts();

}


});


}



/*==============================
START
==============================*/


document.addEventListener("DOMContentLoaded",()=>{

loadProducts();

});
