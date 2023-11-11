// Sample array
const parkingSpots = [
    {
        price: 10.00,
        type: "covered",
        location: "123 Main Street",
        image: "https://lh3.googleusercontent.com/pw/ADCreHceQQSEI81EUj4lVLpIlPEryYoJebESK9fCVyGLpKs1_5h-HNVtnRFmU9QtBiWm4y-0vJdtcSXaVEsIZ-9hf3piG8YJf5moxG_-zvd8dDC1D8wcvEdw3smsGYWbfvPmXvY42h-VfC7LjCEzPv2zRjyrDs6N65yALPe_vsizUSmDJ_8hmeWPbi4KB2wnyTiQsZjEmIrh_sleiY5Bd-KOSJjU-yF2btLohK0rjFLpnorE6djRNyW4ds3dznfhDDdduj2e21AHt8OncLVaIxbXDvRGgqUm-u6QHyDpRKdQH6wIjn8lMpB4wlA_dyGINvmNCVynsWlg6RvmKRbS6LXhHNv-F4OiZTGfao1GaaskvE_ifAIs3i_-uer-vnJtGXcTYr-Ay4zyIuhlK4A3HvqWZ_J67y0hToL2ijy1YfOe-mTAVa4bHGG4IoMxHYzkeSTflQgKKyIjKhxNo-AJ5A7hJNP0ybUzzRzT2Qcv9ZdI3nSXKHmHal8GPbgjI6JUwwy6bpAAhECG9OfT7dQIPmudgLfMdYs9reHFBhWUrIZryAg14lhmShNH4Kodmi3EG3trQV3aWyIecqumVDdXQlw4491ZtXORaZDRKpw1xpdI5aQSVKjoCDf2qTCiR3QHgutT12JV3IQJ9JdYbnp9lz72H_nHoRh3hPpaR7Ifc1czEMyGoGrNJ9UxEHHtcWNaL2uexbamugCtyBrYWh8LNYadMDbyDSlo4YL3aw8dcxOnuFFMacKejhi83eeytYbHVCV7YHt_37ePp9w7P-Wa9fsZM5pNA5FOmYTMdPHYBjU_df14ovJD0hnu6wQwQAW1TQXnA6i1U02OTkmUNymSXIqyW4B0I3yw_JBRL3dt6yxaNbtn2R7thNVhQOzFdiTu_PmeAMgLDWDnPSWp-6L9DDIddWs16Q3xOxPlFy4N2z8vHP6uNcdIsTLfIWXtjPE=w1366-h615-s-no-gm?authuser=0"
    },
    {
        price: 8.50,
        type: "open",
        location: "456 Elm Avenue",
        image: "https://hips.hearstapps.com/hmg-prod/images/close-up-of-tulips-blooming-in-field-royalty-free-image-1584131603.jpg" // Add the path to your image
    },
    // ... (repeat for other objects)
];

var container = document.getElementById("myarray");

// Create a table element
var table = document.createElement('table');
table.classList.add('parking-table'); // Add a class for styling
table.style.borderCollapse = 'collapse'; // Optional: to collapse borders

// Create table header
var headerRow = table.insertRow(0);
var headerCell1 = headerRow.insertCell(0);
var headerCell2 = headerRow.insertCell(1);
var headerCell3 = headerRow.insertCell(2);
var headerCell4 = headerRow.insertCell(3);

headerCell1.textContent = 'Image';
headerCell2.textContent = 'Type';
headerCell3.textContent = 'Price';
headerCell4.textContent = 'Location';

// Populate the table with data
parkingSpots.forEach(function (spot) {
    var row = table.insertRow();

    // Create an image cell
    var imageCell = row.insertCell(0);
    var imageElement = document.createElement('img');
    imageElement.src = spot.image;
    imageElement.alt = spot.type;
    imageElement.style.width = '200px'; // Adjust the width as needed
    imageCell.appendChild(imageElement);

    // Create type, price, and location cells
    var typeCell = row.insertCell(1);
    var priceCell = row.insertCell(2);
    var locationCell = row.insertCell(3);

    typeCell.textContent = spot.type;
    priceCell.textContent = `$${spot.price}`;
    locationCell.textContent = spot.location;
});

// Append the table to the container
container.appendChild(table);
