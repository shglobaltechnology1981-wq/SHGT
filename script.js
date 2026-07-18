fetch("products.json")
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("product-list");
    list.innerHTML = "";

    data.forEach(product => {
      const card = document.createElement("div");
      card.className = "product";

      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>${product.price}</p>
        <a class="btn" href="https://wa.me/8801621007916" target="_blank">
          WhatsApp Order
        </a>
      `;

      list.appendChild(card);
    });
  })
  .catch(err => {
    console.error(err);
    alert("Products failed to load");
  });
