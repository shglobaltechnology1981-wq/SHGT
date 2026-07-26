/*==========================================
SH GLOBAL TECHNOLOGY
Professional Website JavaScript
Product + Search + Brand Filter + Catalogue PDF
==========================================*/


let allProducts = [];

const productContainer = document.getElementById("product-container");



/*================ LOAD PRODUCTS ================*/


if(productContainer){


fetch("products.json")


.then(response => response.json())


.then(products => {


allProducts = products;

displayProducts(allProducts);


})


.catch(error => {


console.log("Product Loading Error:", error);


productContainer.innerHTML = 
"<h3>Product Loading Failed</h3>";


});


}







/*================ DISPLAY PRODUCTS ================*/


function displayProducts(products){


if(!productContainer) return;


productContainer.innerHTML = "";



if(products.length === 0){


productContainer.innerHTML =
"<h3>No Product Found</h3>";


return;


}





products.forEach(product => {

let catalogueButton = "";

if (product.category === "Service") {

    catalogueButton = `
    <a href="service.html" class="catalogue-btn">
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

let catalogueButton = "";



if(product.catalogue){


catalogueButton = `

<a href="${product.catalogue}" 
target="_blank"
class="catalogue-btn">

View Catalogue

</a>

`;

}


else{


catalogueButton = "";

}







productContainer.innerHTML += `


<div class="product-card">



<img src="${product.image}" 
alt="${product.name}">



<h3>
${product.name}
</h3>



<p>
<strong>Brand:</strong> ${product.brand}
</p>



<p>
<strong>Model:</strong> ${product.model}
</p>



<p>
${product.description}
</p>



<a href="https://wa.me/8801621007916?text=Hello SH Global Technology, I need information about ${product.name}"
class="whatsapp-btn">

WhatsApp Inquiry

</a>


${catalogueButton}



</div>


`;



});



}








/*================ SEARCH ================*/


const searchBox = document.getElementById("search");



if(searchBox){


searchBox.addEventListener("keyup", function(){



let searchText = this.value.toLowerCase();



let result = allProducts.filter(product =>



product.name.toLowerCase().includes(searchText)

||

product.brand.toLowerCase().includes(searchText)

||

product.model.toLowerCase().includes(searchText)

||

product.category.toLowerCase().includes(searchText)



);



displayProducts(result);



});


}








/*================ BRAND FILTER ================*/


const brandFilter = document.getElementById("brandFilter");



if(brandFilter){


brandFilter.addEventListener("change", function(){



let selectedBrand = this.value;



if(selectedBrand === "all"){


displayProducts(allProducts);


}

else{


let result = allProducts.filter(product =>


product.brand === selectedBrand


);



displayProducts(result);


}



});


}
