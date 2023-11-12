/**
 * The initial size of the parkingSpots array.
 */
let size = 3;

/**
 * An array containing details of parking spots, including price, type, location, etc.
 * @type {Array<Object>}
 */
const parkingSpots = [
    {
        price: 10.00,
        type: "Public",
        location: "New Brunswick, NJ",
        Zip_Code: "08540",
        longitude: -74.6518 ,
        latitude: 40.3815,
        image: "https://ssl.cdn-redfin.com/photo/125/mbphoto/991/genMid.230017991_2.jpg",
        email: "user@email.com"
    },
    {
        price: 8.50,
        type: "Private",
        location: "Princeton, NJ",
        Zip_Code: "08901",
        longitude: -74.4519 ,
        latitude:  40.4862,
        image: "https://ssl.cdn-redfin.com/photo/125/mbphoto/991/genMid.230017991_2.jpg", 
        email: "user2@email.com"
    },
    {
        price: 12.27,
        type: "Private",
        location: "New York, NY",
        Zip_Code: "11106",
        longitude: -73.9272 ,
        latitude:  40.7595,
        image: "https://ssl.cdn-redfin.com/photo/125/mbphoto/991/genMid.230017991_2.jpg",
        email: "user3@email.com"
    },
    
];
for (var i = 0; i < 3; i++) {
    var c = parkingSpots[i];
    addrow(c.price, c.type, c.location, c.image, c.email);
}
/**
 * Adds a new row to the HTML table with parking spot details.
 * @param {number} price - The price of the parking spot.
 * @param {string} type - The type of the parking spot (Public or Private).
 * @param {string} location - The location of the parking spot.
 * @param {string} image - The URL of the image representing the parking spot.
 * @param {string} email - The email of the parking spot owner.
 */
function addrow(price, type, location, image, email) {
    var table = document.getElementById("parking-table");
    var row = document.createElement("tr");

    // Image
    var imgcell = document.createElement("td");
    var imagecont = document.createElement("img");
    imagecont.src = image;
    imagecont.width=100;
    imgcell.appendChild(imagecont);
    row.appendChild(imgcell);

    // Type
    var typecell = document.createElement("td");
    typecell.appendChild(document.createTextNode(type)); 
    row.appendChild(typecell);

    // Location
    var locationcell = document.createElement("td");
    locationcell.appendChild(document.createTextNode(location));
    row.appendChild(locationcell);

    // Price
    var pricecell = document.createElement("td");
    var pricetext = document.createTextNode("$" + price);
    pricecell.appendChild(pricetext);
    row.appendChild(pricecell);

    // Email
    var emailcell = document.createElement("td");
    var sendto = document.createElement("a");
    sendto.href = "mailto:" + email + "?subject=Rental%20spot%20inquiry";
    sendto.textContent = "Contact";
    emailcell.appendChild(sendto); 
    row.appendChild(emailcell);

    table.appendChild(row);
}
/**
 * Resets the HTML table by removing all rows.
 */
function resetTable() {
    var table = document.getElementById("parking-table");
    while (table.rows.length > 0) {
        table.deleteRow(0);
    }
}
/**
 * Handles the form submission and adds a new parking spot.
 * Retrieves form input values and uses geocoding to get coordinates.
 * @throws {Error} If an error occurs during form submission.
 */
async function submitForm() {
    try {
      const price = parseFloat(document.getElementById("pricef").value);
      const type = document.getElementById("type").value;
      const location = document.getElementById("locationf").value;
      const image = document.getElementById("imagef").value;
      const email = document.getElementById("emailf").value;
  
      const coordinates = await getCoordinates(location);
  
      if (coordinates) {
        const { lat, lng, county } = coordinates;
        const Zip_Code = location;
  
        parkingSpots.push({
          price,
          type,
          location: county,
          Zip_Code,
          longitude: lng,
          latitude: lat,
          image,
          email,
        });
        size++;
  
        addrow(price, type, county, image, email);
      } else {
        alert("Invalid coordinates for the given location.");
      }
    } catch (error) {
      alert("An error occurred: " + error.message);
    }
  }
  
  const Formsubmission = document.getElementById("formsubmit");
  Formsubmission.addEventListener("click", submitForm);
  /**
 * Fetches coordinates using the OpenCageData API based on the provided zip code.
 * @param {string} alt - The zip code to fetch coordinates for.
 * @return {Promise<{lat: number, lng: number, county: string} | null>} Object with latitude, longitude, and county, or null if not found.
 */
  async function getCoordinates(alt) {
    const zipCode = alt;
    const apiKey = '60e9698acc024b478f24d423e7c92ad4';
    const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${zipCode}&countrycode=US&key=${apiKey}&no_annotations=1`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      if (data.results && data.results.length > 0) {
        const result = data.results[0];
        const coordinates = result.geometry;
        const county = result.components.county;
  
        //console.log(coordinates.lat + ", " + coordinates.lng + ", " + county);
        
        return { lat: coordinates.lat, lng: coordinates.lng, county };
      } else {
        alert('Could not find information for the given zip code.');
        return null;
      }
    } catch (error) {
      console.error('Error:', error.message);
      return null;
    }
  }
  /**
 * Filters parking spots based on user input (price range, location radius, type).
 * @throws {Error} If an error occurs during the filtering process.
 */
  async function filter() {
    resetTable();
  
    try {
      var publicChecked = document.getElementById("PublicParking").checked;
      var privateChecked = document.getElementById("PrivateParking").checked;
      var min = parseFloat(document.querySelector("#price input[name='Mininimum']").value);
      var max = parseFloat(document.querySelector("#price input[name='Maximum']").value);
      var Radius = parseFloat(document.querySelector("#location input[name='Radius']").value);
      var zip = document.querySelector("#location input[name='ZIP']").value;
      // alert(zip);
      const coordinates = await getCoordinates(zip);
  
      if (!coordinates) {
        throw new Error('Invalid coordinates');
      }
  
      const { lat, lng, county } = coordinates;
  
      for (i = 0; i < size; i++) {
        //console.log(parkingSpots[i]);
        //console.log( haversineDistance(lat, lng, parkingSpots[i].latitude, parkingSpots[i].longitude) + " < " + Radius);
        if (
          parkingSpots[i].price > min &&
          parkingSpots[i].price < max &&
          haversineDistance(lat, lng, parkingSpots[i].latitude, parkingSpots[i].longitude) < Radius
        ) {
          if ((publicChecked && parkingSpots[i].type === 'Public') || (privateChecked && parkingSpots[i].type === 'Private')) {
            var c = parkingSpots[i];
            addrow(c.price, c.type, c.location, c.image, c.email);
          }
        }
      }
    } catch (error) {
      console.error('Error:', error.message);
      // Handle the error, e.g., display an alert or log it to the console.
    }
  }
  /**
 * Calculates the haversine distance between two sets of coordinates.
 * @param {number} lat1 - Latitude of the first point.
 * @param {number} lon1 - Longitude of the first point.
 * @param {number} lat2 - Latitude of the second point.
 * @param {number} lon2 - Longitude of the second point.
 * @return {number} The haversine distance in kilometers.
 */
  function haversineDistance(lat1, lon1, lat2, lon2) {
    const earthRadius = 6371; // Earth radius in kilometers
  
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
  
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
  
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
    const distance = earthRadius * c; // Distance in kilometers
    //console.log(distance);
  
    return distance * 0.621371;
  }
  