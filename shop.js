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
    // console.log("removeCartButtons");
    // console.log("remove Cart");
    
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
    for (var i=0; i  < addCart.length; i++) {
      var button = addCart[i];
      button.addEventListener("click", addCartClicked);
    }
    //Buy button work
    document.getElementsByClassName("btn-buy")[0].addEventListener('click', buyButtonClicked);
  }
  //Buy button function
function buyButtonClicked() {
  alert("Your order is placed.");
  var cartContent = document.getElementsByClassName("cart-content")[0];
  while (cartContent.hasChildNodes()) {
    cartContent.removeChild(cartContent.firstChild);
  }
  updatetotal();
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
  updatetotal(); //to update total amount 
}
// Add to cart by click
function addCartClicked(event) {
  var button = event.target;
  var shopProducts = button.closest('.pro'); // Adjusted to target the main card con
  // var shopProducts = button.parentElement;
  var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
  var price = shopProducts.getElementsByClassName("price")[0].innerText;
  var productImg = shopProducts.getElementsByClassName("productImg")[0].src;
  // console.log(title, price, productImg); //to check by console
  addProductToCart(title, price, productImg);

  updatetotal();
}

function addProductToCart(title, price, productImg) {
  var cartItems = document.querySelector(".cart-content");
  var cartItemsNames = cartItems.querySelectorAll(".cart-product-title");

  // Normalize and compare product titles to prevent duplicate adds
  for (var i = 0; i < cartItemsNames.length; i++) {
    if (cartItemsNames[i].textContent.trim().toLowerCase() === title.trim().toLowerCase()) {
      alert("You have already added this item to the cart.");
      return;
    }
  }

  // Create new cart box
  var cartShopBox = document.createElement("div");
  cartShopBox.classList.add("cart-box");

  var cartBoxContent = `
    <img src="${productImg}" alt="" class="cart-img">
    <div class="detail-box">
      <div class="cart-product-title">${title}</div>
      <div class="cart-price">${price}</div>
      <input type="number" value="1" min="1" class="cart-quantity">
    </div>
    <i class="ri-delete-bin-6-fill cart-remove"></i>`;

  cartShopBox.innerHTML = cartBoxContent;
  cartItems.appendChild(cartShopBox);

  // Add event listeners for remove and quantity change
  cartShopBox.querySelector(".cart-remove").addEventListener("click", removeCartItem);
  cartShopBox.querySelector(".cart-quantity").addEventListener("change", quantityChanged);
}

// Update/Calculate total 
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
  }
    //if price contains some cents value
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName("total-price")[0].innerText = "$" + total;
}
// Cart section end here =========
