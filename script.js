/*==========================================
SH GLOBAL TECHNOLOGY
Professional Website JavaScript
==========================================*/


let allProducts = [];



/*================ LOAD PRODUCTS ================*/


const productContainer = document.getElementById("product-container");


if(productContainer){


fetch("products.json")


.then(response => response.json())


.then(products => {


allProducts = products;


displayProducts(allProducts);


})


.catch(error => {


productContainer.innerHTML = 
"<h3>Product Loading Failed</h3>";


console.log(error);


});


}






/*================ DISPLAY PRODUCT ================*/


function displayProducts(products){


if(!productContainer) return;



productContainer.innerHTML = "";



if(products.length === 0){


productContainer.innerHTML =

"<h3>No Product Found</h3>";


return;


}





products.forEach(product => {



productContainer.innerHTML += `


<div class="product-card">


<img src="${product.image}" 
alt="${product.name}">



<h3>
${product.name}
</h3>



<p>
Brand: ${product.brand}
</p>



<p>
Model: ${product.model}
</p>



<p>
${product.description}
</p>



<a href="https://wa.me/8801621007916?text=Hello SH Global Technology, I need information about ${product.name}">


WhatsApp Inquiry

</a>



</div>



`;



});



}







/*================ SEARCH FUNCTION ================*/


const searchBox = document.getElementById("search");



if(searchBox){


searchBox.addEventListener("keyup",function(){



let value = this.value.toLowerCase();



let filtered = allProducts.filter(product =>



product.name.toLowerCase().includes(value)

||

product.brand.toLowerCase().includes(value)

||

product.model.toLowerCase().includes(value)



);



displayProducts(filtered);



});


}








/*================ BRAND FILTER ================*/


const brandFilter = document.getElementById("brandFilter");



if(brandFilter){



brandFilter.addEventListener("change",function(){



let brand = this.value;



if(brand === "all"){


displayProducts(allProducts);


}

else{


let filtered = allProducts.filter(product =>


product.brand === brand


);


displayProducts(filtered);


}



});


}
