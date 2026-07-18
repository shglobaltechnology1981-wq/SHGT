fetch("products.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("Cannot load products.json");
    }
    return response.json();
  })
  .then(products => {

    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    products.forEach(product => {

      productList.innerHTML += `
        <div class="product">
          <img src="${product.image}" alt="${product.name}" onerror="this.src='logo.png'">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p><b>${product.price}</b></p>

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
    document.getElementById("product-list").innerHTML =
    "<h2>Products failed to load.</h2>";
    console.error(error);
  });
