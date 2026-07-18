fetch("products.json")
  .then(response => response.json())
  .then(products => {
    const productList = document.getElementById("product-list");

    if (!productList) return;

    productList.innerHTML = "";

    products.forEach(product => {
      productList.innerHTML += `
        <div class="product">
          <img src="${product.image}" alt="${product.name}"
               onerror="this.src='logo.png'">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p><strong>${product.price}</strong></p>
          <a class="btn"
             href="https://wa.me/8801621007916"
             target="_blank">
             WhatsApp Order
          </a>
        </div>
      `;
    });
  })
  .catch(error => {
    console.error("Error loading products:", error);
  });
