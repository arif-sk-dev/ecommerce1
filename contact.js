//to open sidebar on mobile view 
function openNav() {
  document.getElementById("navbar").style.width="250px";
}
//to close sidebar on mobile view 
function closeNav() {
  document.getElementById("navbar").style.width= "0px";
}

// footer section get current year===========
document.getElementById("year").textContent = new Date().getFullYear();

// console.log(new Date().getFullYear() +","+ new Date().getMonth());

// pagination start here ===============
 const cardsPerPage = 5;
  let currentPage = 1;

  const cards = Array.from(document.querySelectorAll(".blog-box"));

  function displayCards(page) {
      const start = (page - 1) * cardsPerPage;
      const end = start + cardsPerPage;

      document.getElementById("blog").innerHTML = '';
      
      cards.slice(start, end).forEach(card => {
          document.getElementById("blog").appendChild(card.cloneNode(true));
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


// show more button start here =============
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('showMore')) {

            event.preventDefault();  // Prevent jumping 
            event.stopPropagation(); // Stop event bubbling 

            let extraText = event.target.parentElement.querySelector('.extraText');

            if (extraText.style.display === "none") {
                extraText.style.display = "inline";
                event.target.innerText = "Show Less";  //not use <this.> use <event.target> 
            } else {
                extraText.style.display = "none";
                event.target.innerText = "Show More"; //not use <this.> use <event.target> 
            }
        }
    });
// show more button end here ===========

