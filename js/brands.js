/*==========================================
SH GLOBAL TECHNOLOGY
Brand Filter JavaScript
Version 2.0
==========================================*/

"use strict";

const brandButtons = document.querySelectorAll(".brand-btn");
const productCards = document.querySelectorAll(".product-card");
const brandCounter = document.getElementById("brandCount");

/*==============================
FILTER FUNCTION
==============================*/

function filterBrand(brand) {

    let visible = 0;

    productCards.forEach(card => {

        const cardBrand = card.dataset.brand;

        if (brand === "all" || cardBrand === brand) {

            card.style.display = "block";

            visible++;

        } else {

            card.style.display = "none";

        }

    });

    if (brandCounter) {

        brandCounter.textContent = visible;

    }

}

/*==============================
BUTTON CLICK
==============================*/

brandButtons.forEach(button => {

    button.addEventListener("click", () => {

        brandButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        filterBrand(button.dataset.brand);

    });

});

/*==============================
DEFAULT
==============================*/

filterBrand("all");
