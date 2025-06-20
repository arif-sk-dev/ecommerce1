//to open sidebar on mobile view 
function openNav() {
  document.getElementById("navbar").style.width="250px";
}
//to close sidebar on mobile view 
function closeNav() {
  document.getElementById("navbar").style.width= "0px";
}

document.getElementById("year").textContent = new Date().getFullYear();

// console.log(new Date().getFullYear() +","+ new Date().getMonth());

// pagination start here ===============

// let currentPage = 1;
// const cards = Array.from(document.querySelectorAll(".pro"));
// const cardsPerPage = 10;

//   function displayCards(page) {
//       const start = (page - 1) * cardsPerPage;
//       const end = start + cardsPerPage;

//       document.getElementById("pro-container").innerHTML = '';
      
//       cards.slice(start, end).forEach(card => {
//           document.getElementById("pro-container").appendChild(card.cloneNode(true));
//       });
//   }

//   function createPagination() {
//       const totalPages = Math.ceil(cards.length / cardsPerPage);
//       const pageButtonsContainer = document.getElementById("pageButtons");
//       pageButtonsContainer.innerHTML = '';

//       for (let i = 1; i <= totalPages; i++) {
//           const button = document.createElement("button");
//           button.innerText = i;
//           button.classList.add("page-number");
//           if (i === currentPage) button.classList.add("active");

//           button.addEventListener("click", () => {
//               currentPage = i;
//               displayCards(currentPage);
//               createPagination();
//           });

//           pageButtonsContainer.appendChild(button);
//       }
//   }

//   document.querySelector(".prev").addEventListener("click", () => {
//       if (currentPage > 1) {
//           currentPage--;
//           displayCards(currentPage);
//           createPagination();
//       }
//   });

//   document.querySelector(".next").addEventListener("click", () => {
//       const totalPages = Math.ceil(cards.length / cardsPerPage);
//       if (currentPage < totalPages) {
//           currentPage++;
//           displayCards(currentPage);
//           createPagination();
//       }
//   });

//   displayCards(currentPage);
//   createPagination();
// alternative formula below here  =>>>>


//====================
(function () {
    let currentPage = 1;
    const cards = Array.from(document.querySelectorAll(".pro"));
    const cardsPerPage = 10;

    function displayCards(page) {
        const start = (page - 1) * cardsPerPage;
        const end = start + cardsPerPage;

        document.getElementById("pro-container").innerHTML = '';

        cards.slice(start, end).forEach(card => {
            document.getElementById("pro-container").appendChild(card.cloneNode(true));
        });
    }

    function createPagination() {
        const totalPages = Math.ceil(cards.length / cardsPerPage);
        const pageButtonsContainer = document.getElementById("pageButtons");
        pageButtonsContainer.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement("button");
            button.innerText = i;
            button.classList.add("page-number");
            if (i === currentPage) button.classList.add("active");

            button.addEventListener("click", () => {
                currentPage = i;
                displayCards(currentPage);
                createPagination();
            });

            pageButtonsContainer.appendChild(button);
        }
    }

    document.querySelector(".prev").addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            displayCards(currentPage);
            createPagination();
        }
    });

    document.querySelector(".next").addEventListener("click", () => {
        const totalPages = Math.ceil(cards.length / cardsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            displayCards(currentPage);
            createPagination();
        }
    });

    displayCards(currentPage);
    createPagination();
})();
// pagination end here===========




// cart section start here ============

// let cartIcon = document.querySelector("#cart-icon");
// let cart = document.querySelector(".cart");
// let closeCart = document.querySelector("#close-cart");

// cartIcon.addEventListener("click", () =>cart.classList.add("active"));
// cartIcon.onclick = () => {
//     cart.classList.add("active");
// }

// document.addEventListener('click', function() {
//     let cartIcon = document.querySelector("#cart-icon");

// });

// document.addEventListener('DOMContentLoaded', () => {
//     const cart = document.querySelector(".cart");
//     const cartIcon = document.querySelector("#cart-icon");
//     const closeCart = document.querySelector("#close-cart");

//   cartIcon.addEventListener('click', () => {
//     const cart = document.querySelector(".cart");
//     if(cart) {
//         cart.classList.add("active");
//     } else {
//         console.log('Cart element not found');
        
//     }
//   });
// });

// ==============================

// document.addEventListener("DOMContentLoaded", function () {
//   const cart = document.querySelector(".cart");
//   const closeCart = document.getElementById("close-cart");
//   const buyBtn = document.querySelector(".btn-buy");

//   // Sample trigger to open the cart 
//   const cartIcon = document.getElementById("cart-icon");
//   console.log(cartIcon);
  
//   // open cart
//   cartIcon.addEventListener('click', () => {
//     console.log("hello");
//     cart.classList.add("active");
//   });

//   // close cart
//   closeCart.addEventListener("click", () => {
//     cart.classList.remove("active");
//   });
//   // popup alert/ greeting to purchase 
//   buyBtn.addEventListener("click", () => {
//     alert("Thanks for your purchase!");
//   });

//   // cart working
//   if(document.readyState == 'loading') {
//     document.addEventListener('DOMContentLoaded', ready);
//   } else {
//     ready();    
//   }

//   // Making function
//   function ready() {
//     var removeCartButtons = document.getElementById('#remove-cart');
//     console.log('removeCartButtons');
//     for (var i=0; i < removeCartButtons.length; i++){
//         var button = removeCartButtons[i]
//         button.addEventListener('click', removeCartItem)
//     }
//   }

//   // Remove Items from cart
//   function removeCartItem(event) {
//     var buttonClicked = event.target
//     buttonClicked.parentElement.remove()
//   }

// });

// =================
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");


// Open cart
cartIcon.onclick = () => {
    cart.classList.add("active");
}

// Close cart
closeCart.onclick = () => {
    cart.classList.remove("active");
}

// cart working
  if(document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
  } else {
    ready();
  }

  // Making function 
  function ready() {

    // Remove items from cart
    var removeCartButtons = document.getElementsByClassName("cart-remove");
    console.log("removeCartButtons");
    console.log("remove Cart");
    
    for (var i=0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i]
        button.addEventListener('click', removeCartItem);
    }
    //quantity change
    var quantityInputs = document.getElementsByClassName("cart-quantity")
    for (var i=0; i<quantityInputs.length; i++) {
      var input = quantityInputs[i];
      input.addEventListener("change", quantityChanged);
    }
    // Add to cart
    var addCart = document.getElementsByClassName("add-cart");
    for (var i=0; i<addCart.length; i++) {
      var button = addCart[i];
      button.addEventListener("click", addCartClicked);
    }
  }

  // Remove items from cart 
  function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.remove();
    updatetotal();   //to update total amount 
  }

// Quantity changes
function quantityChanged(event) {
  var input = event.target
  if (isNaN(input.value) || input.value<=0) {
    input.value = 1;
  }
  updatetotal();
}
// Add to cart by click
function addCartClicked(event) {
  var button = event.target
  var shopProducts = button.parentElement
  var title = shopProducts.getElementsByClassName("product-title");
}

// Update total 
function updatetotal() {
  var cartContent = document.getElementsByClassName("cart-content")[0]
  var cartBoxes = cartContent.getElementsByClassName("cart-box")
  var total =0;
  for (var i=0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i]
    var priceElement =cartBox.getElementsByClassName("cart-price")[0]
    var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0]
    var price = parseFloat(priceElement.innerText.replace("$",""));
    var quantity = quantityElement.value
    total = total + (price * quantity);

    //if price contains some cents value
    total = Math.round(total * 100) / 100;

    document.getElementsByClassName("total-price")[0].innerText = "$" + total;
  }
}


