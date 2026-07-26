/*==========================================
SH GLOBAL TECHNOLOGY
Website Script
Version 1.0
==========================================*/

"use strict";



/*==========================================
SERVICE DETAILS BUTTON
===========================================*/


const serviceButtons = document.querySelectorAll(".service-btn");


serviceButtons.forEach(button => {


    button.addEventListener("click", function(){


        const details = this.nextElementSibling;


        if(details.style.display === "block"){


            details.style.display = "none";


            this.innerHTML = "View Details";


        }

        else{


            details.style.display = "block";


            this.innerHTML = "Hide Details";


        }


    });


});



/*==========================================
END
===========================================*/
