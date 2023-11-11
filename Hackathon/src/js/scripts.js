
var listingContainer = document.getElementsByClassName("listingContainer");
var filterBox = listingContainer.getElementsByClassName("filterBox");
var filterButtons = filterBox.getElementsByClassName("button");

for (var i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("button--selected");
        current[0].className =
        current [0].className.replace("button--selected", "");
        this.className += "button--selected"; 
    })
}