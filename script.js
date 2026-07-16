// Load products from products.json

fetch("products.json")
  .then(response => response.json())
  .then(products => {

    const productList = document.getElementById("product-list");
    const search = document.getElementById("search");

    function showProducts(items) {
      productList.innerHTML = "";

      items.forEach(product => {
        productList.innerHTML += `
          <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><b>${product.price}</b></p>

            <a class="btn"
               target="_blank"
               href="https://wa.me/8801621007917?text=I want to buy ${encodeURIComponent(product.name)}">
               WhatsApp Order
            </a>

          </div>
        `;
      });
    }

    showProducts(products);

    search.addEventListener("keyup", function () {

      const value = this.value.toLowerCase();

      const filter = products.filter(product =>
        product.name.toLowerCase().includes(value) ||
        product.description.toLowerCase().includes(value)
      );

      showProducts(filter);

    });

  })
  .catch(error => console.log(error));
