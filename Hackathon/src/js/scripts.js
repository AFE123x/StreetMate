
var filterButtons = document.querySelectorAll('.button');

filterButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    if(button.classList == "button") {
      button.classList.add("active--button");
    }
    else {
      filterButtons.classList.remove("active--button");
      filterButtons.classList.add("button");
    }
  });
});

function addFilter () {
  
}; 


// function updateListing(filter) {
//   var listings = document.querySelectorAll('.listing');

//   listings.forEach(function(listing) {
//     if (filter === 'All' || listing.dataset.filter === filter) {
//       listing.style.display = 'block';
//     } else {
//       listing.style.display = 'none';
//     }
//   });
// }
