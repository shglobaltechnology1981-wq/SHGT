// Product Data
const products = [
{
name:"JUKI DDL-900",
price:"Contact Us",
image:"images/juki-single-needle.jpg",
description:"Single Needle Lock Stitch Machine"
},
{
name:"JUKI Overlock",
price:"Contact Us",
image:"images/juki-overlock.jpg",
description:"Industrial Overlock Machine"
},
{
name:"JUKI LBH-1790",
price:"Contact Us",
image:"images/juki-buttonhole.jpg",
description:"Button Hole Machine"
},
{
name:"JUKI LK-1900",
price:"Contact Us",
image:"images/juki-bartack.jpg",
description:"Electronic Bartack Machine"
}
];

// Show Products
const productList = document.getElementById("product-list");

function displayProducts(list){
    productList.innerHTML = "";

    list.forEach(product=>{
        productList.innerHTML += `
        <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><b>${product.price}</b></p>
            <a class="btn" target="_blank"
            href="https://wa.me/8801621007917?text=I want to buy ${encodeURIComponent(product.name)}">
            Order Now
            </a>
        </div>
        `;
    });
}

displayProducts(products);

// Search
document.getElementById("search").addEventListener("keyup", function(){

const keyword = this.value.toLowerCase();

const result = products.filter(product =>
product.name.toLowerCase().includes(keyword) ||
product.description.toLowerCase().includes(keyword)
);

displayProducts(result);

});
