/*==========================================
SH GLOBAL TECHNOLOGY
Professional Website JavaScript
PART-1
==========================================*/

/*========== AUTO LOAD PRODUCTS ==========*/

const productContainer = document.getElementById("product-container");

if (productContainer) {

fetch("products.json")
.then(response => response.json())
.then(products => {

productContainer.innerHTML = "";

products.forEach(product => {

productContainer.innerHTML += `

<div class="product-card">

<img src="${product.image}" alt="${product.name}">

<h3>${product.name}</h3>

<p><strong>Brand:</strong> ${product.brand}</p>

<p><strong>Category:</strong> ${product.category}</p>

<p>${product.description}</p>

<div class="product-buttons">

<button class="details-btn"
onclick="showDetails(
'${product.name}',
'${product.brand}',
'${product.category}',
'${product.description}',
'${product.image}',
'${product.whatsapp}'
)">
View Details
</button>

<a href="https://wa.me/${(product.whatsapp || "8801621007916").replace("+","")}"
target="_blank"
class="whatsapp-btn">
WhatsApp
</a>

</div>

</div>

`;

});

})
.catch(error => {

console.error("Products Load Error:", error);

});

}
/*==========================================
PART-2
SEARCH + FILTER + GALLERY
==========================================*/

/*========== SEARCH + FILTER ==========*/

function filterProducts(){

const search =
document.getElementById("searchBox")
? document.getElementById("searchBox").value.toUpperCase()
: "";

const brand =
document.getElementById("brandFilter")
? document.getElementById("brandFilter").value.toUpperCase()
: "ALL";

const category =
document.getElementById("categoryFilter")
? document.getElementById("categoryFilter").value.toUpperCase()
: "ALL";

const cards =
document.querySelectorAll(".product-card");

cards.forEach(card=>{

const text = card.innerText.toUpperCase();

const searchMatch = text.includes(search);

const brandMatch =
brand==="ALL" || text.includes(brand);

const categoryMatch =
category==="ALL" || text.includes(category);

card.style.display =
(searchMatch && brandMatch && categoryMatch)
? "block"
: "none";

});

}

function searchProduct(){
filterProducts();
}

/*========== GALLERY ==========*/

const galleryContainer =
document.getElementById("gallery-container");

if(galleryContainer){

const count =
document.getElementById("productCount");

fetch("products.json")
.then(res=>res.json())
.then(products=>{

if(count){
count.innerText = products.length;
}

galleryContainer.innerHTML="";

products.forEach(product=>{

galleryContainer.innerHTML += `

<div class="product-card">

<img src="${product.image}" alt="${product.name}">

<h3>${product.name}</h3>

<p><strong>Brand:</strong> ${product.brand}</p>

<p><strong>Category:</strong> ${product.category}</p>

<p>${product.description}</p>

<button class="details-btn"
onclick="showDetails(
'${product.name}',
'${product.brand}',
'${product.category}',
'${product.description}',
'${product.image}',
'${product.whatsapp}'
)">
View Details
</button>

</div>

`;

});

});

}
/*==========================================
PART-3
VIEW DETAILS + MODAL + IMAGE HOVER
==========================================*/

/*========== VIEW DETAILS ==========*/

function showDetails(name, brand, category, description, image, whatsapp){

document.getElementById("modalName").innerText = name;
document.getElementById("modalBrand").innerText = brand;
document.getElementById("modalCategory").innerText = category;
document.getElementById("modalDescription").innerText = description;
document.getElementById("modalImage").src = image;

document.getElementById("modalWhatsapp").href =
"https://wa.me/" + (whatsapp || "8801621007916").replace("+","");

document.getElementById("productModal").style.display = "flex";

}

/*========== CLOSE MODAL ==========*/

function closeModal(){

document.getElementById("productModal").style.display = "none";

}

/*========== CLICK OUTSIDE TO CLOSE ==========*/

window.addEventListener("click", function(event){

const modal = document.getElementById("productModal");

if(modal && event.target === modal){

modal.style.display = "none";

}

});

/*========== IMAGE HOVER ==========*/

document.addEventListener("mouseover", function(e){

if(e.target.matches(".product-card img")){

e.target.style.transform = "scale(1.05)";
e.target.style.transition = "0.3s";

}

});

document.addEventListener("mouseout", function(e){

if(e.target.matches(".product-card img")){

e.target.style.transform = "scale(1)";

}

});
/*==========================================
PART-4
FINAL EFFECTS
==========================================*/

/*========== HEADER SCROLL ==========*/

window.addEventListener("scroll", function(){

const header = document.querySelector(".header");

if(header){

header.style.background =
window.scrollY > 50 ? "#062b63" : "#0b3d91";

}

});

/*========== PAGE LOAD ==========*/

window.addEventListener("load", function(){

document.body.style.opacity = "1";

const loader = document.getElementById("loader");

if(loader){

loader.style.display = "none";

}

});

/*========== FOOTER YEAR ==========*/

const footer = document.querySelector("footer p");

if(footer){

footer.innerHTML =
`© ${new Date().getFullYear()} SH Global Technology<br>
Industrial Sewing Machines & Genuine Spare Parts<br>
All Rights Reserved.`;

}

/*========== BACK TO TOP ==========*/

const backToTop = document.createElement("button");

backToTop.id = "backToTop";
backToTop.innerHTML = "↑";

document.body.appendChild(backToTop);

backToTop.style.display = "none";

window.addEventListener("scroll", function(){

backToTop.style.display =
window.scrollY > 300 ? "block" : "none";

});

backToTop.onclick = function(){

window.scrollTo({
top:0,
behavior:"smooth"
});

};

/*========== PROGRESS BAR ==========*/

window.addEventListener("scroll", function(){

const progress =
document.getElementById("progressBar");

if(progress){

const winScroll =
document.documentElement.scrollTop;

const height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

progress.style.width =
(winScroll / height * 100) + "%";

}

});

/*========== DARK MODE ==========*/

function toggleTheme(){

document.body.classList.toggle("dark-mode");

const btn =
document.getElementById("themeBtn");

if(btn){

btn.innerHTML =
document.body.classList.contains("dark-mode")
? "☀️ Light Mode"
: "🌙 Dark Mode";

}

}

/*========== VISITOR COUNTER ==========*/

let visits =
localStorage.getItem("shgt_visits") || 0;

visits++;

localStorage.setItem("shgt_visits", visits);

const visitor =
document.getElementById("visitorCount");

if(visitor){

visitor.innerText = visits;

}

/*========== NEWSLETTER ==========*/

function subscribeNews(){

const email =
document.getElementById("subscriberEmail").value.trim();

if(email===""){

alert("Please enter your email.");

return;

}

localStorage.setItem("subscriberEmail", email);

alert("Thank you for subscribing!");

document.getElementById("subscriberEmail").value="";

}

/*========== CUSTOMER INQUIRY ==========*/

function sendInquiry(){

const name =
document.getElementById("customerName").value.trim();

const phone =
document.getElementById("customerPhone").value.trim();

const message =
document.getElementById("customerMessage").value.trim();

if(name==="" || phone==="" || message===""){

alert("Please fill all fields.");

return;

}

const text =
`Customer Inquiry

Name: ${name}
Phone: ${phone}
Message: ${message}`;

window.open(
"https://wa.me/8801621007916?text=" +
encodeURIComponent(text),
"_blank"
);

}

console.log("SH Global Technology Loaded Successfully");
