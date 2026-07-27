/*========================================
SH GLOBAL TECHNOLOGY
FINAL WEBSITE JAVASCRIPT
========================================*/


// ================= LOAD PRODUCTS =================


const productContainer = document.getElementById("product-container");


if(productContainer){


fetch("data/products.json")


.then(response=>{


if(!response.ok){

throw new Error("Product file not found");

}


return response.json();


})


.then(products=>{


productContainer.innerHTML="";



products.forEach(product=>{



productContainer.innerHTML += `


<div class="product-card">


<img src="${product.image}" 
alt="${product.name}">


<h3>${product.name}</h3>


<p>
Brand: ${product.brand}
</p>


<p>
${product.description || ""}
</p>



<a href="product.html?id=${product.id}">

View Details

</a>


</div>


`;



});


})



.catch(error=>{


productContainer.innerHTML=`

<p style="color:red">

Product Loading Failed

</p>

`;


console.log(error);


});


}






// ================= PRODUCT DETAILS PAGE =================



const productDetails = document.getElementById("product-details");


if(productDetails){



const urlParams = new URLSearchParams(window.location.search);


const productId = urlParams.get("id");



fetch("data/products.json")

.then(response=>response.json())


.then(products=>{


const product = products.find(

item => item.id == productId

);



if(product){



productDetails.innerHTML = `


<div class="product-details-box">


<img src="${product.image}">


<h2>${product.name}</h2>


<h3>
Brand : ${product.brand}
</h3>


<p>
${product.description}
</p>


<a class="btn whatsapp"

href="https://wa.me/8801621007916?text=Hello SH Global Technology, I need ${product.name} information">


WhatsApp Inquiry


</a>


</div>


`;



}

else{


productDetails.innerHTML=

"<h3>Product Not Found</h3>";


}



});



}






// ================= SEARCH SYSTEM =================



function searchProduct(){


let input = document

.getElementById("searchBox")

.value

.toLowerCase();



let cards=document

.querySelectorAll(".product-card");



cards.forEach(card=>{


let text=card.innerText.toLowerCase();



if(text.includes(input)){


card.style.display="block";


}

else{


card.style.display="none";


}



});


}






// ================= BRAND FILTER =================



function filterBrand(brand){



let cards=document

.querySelectorAll(".product-card");



cards.forEach(card=>{


let productBrand = card

.querySelector("p")

.innerText

.toLowerCase();



if(

brand=="all" ||

productBrand.includes(

brand.toLowerCase()

)

){


card.style.display="block";


}

else{


card.style.display="none";


}


});


}
