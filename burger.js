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
 const cardsPerPage = 6;
  let currentPage = 1;

  const cards = Array.from(document.querySelectorAll(".pro"));

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
// pagination end here===========


//details section start here =========
// function changeImage(element) {
//       document.getElementById('main-img').src = element.src;
//     }
// details section end here ==========

// alternative formula for details product section 
const mainImg = document.getElementById("main-img");
const smallImg = document.getElementsByClassName("small-img");
smallImg[0].onclick = function() {
    
    mainImg.src = smallImg[0].src;
}
smallImg[1].onclick = function() {
    mainImg.src = smallImg[1].src;
}
smallImg[2].onclick = function() {
    mainImg.src = smallImg[2].src;
}
smallImg[3].onclick = function() {
    mainImg.src = smallImg[3].src;
}
