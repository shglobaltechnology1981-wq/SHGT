fetch("products.json")
.then(response => response.json())
.then(products => {

const productList = document.getElementById("product-list");

products.forEach(product => {

productList.innerHTML += `
<div class="product">
<img src="${product.image}" alt="${product.name}">
<h3>${product.name}</h3>
<p>${product.description}</p>
<p><b>${product.price}</b></p>
<a class="btn" href="https://wa.me/8801621007916" target="_blank">WhatsApp Order</a>
</div>
`;

});

});
