let allProducts = [];

fetch("products.json")
  .then(response => response.json())
  .then(products => {
    allProducts = products;
    displayProducts(products);
  })
  .catch(error => {
    console.log(error);
    document.getElementById("product-list").innerHTML =
      "<h2>Products failed to load.</h2>";
  });

function displayProducts(products) {

  const container = document.getElementById("product-list");
  container.innerHTML = "";

  products.forEach(product => {

    container.innerHTML += `
      <div class="product-card" data-brand="${product.brand}">

        <img src="${product.image}"
             alt="${product.name}"
             onerror="this.src='logo.png'">

        <h3>${product.name}</h3>

        <p><b>Brand:</b> ${product.brand}</p>

        <p>${product.description}</p>

        <a href="https://wa.me/8801621007916"
           class="btn"
           target="_blank">
           WhatsApp Inquiry
        </a>

      </div>
    `;

  });

}

function filterBrand(brand) {

  if (brand === "all") {
    displayProducts(allProducts);
    return;
  }

  const filtered = allProducts.filter(
    item => item.brand === brand
  );

  displayProducts(filtered);

}
