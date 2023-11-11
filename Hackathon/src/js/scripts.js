

var listingContainer = document.querySelector(".listingContainer");
var filterButtons = listingContainer.querySelectorAll(".button");

for (var i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener("click", function () {
    var current = listingContainer.querySelector(".button--selected");
    current.classList.remove("button--selected");
    this.classList.add("button--selected");
    updateListing(this.innerText); 
  });
}

function updateListing(filter) {
  var listings = document.querySelectorAll('.listing');

  listings.forEach(function(listing) {
    if (filter === 'All' || listing.dataset.filter === filter) {
      listing.style.display = 'block';
    } else {
      listing.style.display = 'none';
    }
  });
}
