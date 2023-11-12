let size = 3;
const parkingSpots = [
    {
        price: 10.00,
        type: "Public",
        location: "New Brunswick, NJ",
        Zip_Code: "08540",
        longitude: -74.6518 ,
        latitude: 40.3815,
        image: "https://lh3.googleusercontent.com/pw/ADCreHceQQSEI81EUj4lVLpIlPEryYoJebESK9fCVyGLpKs1_5h-HNVtnRFmU9QtBiWm4y-0vJdtcSXaVEsIZ-9hf3piG8YJf5moxG_-zvd8dDC1D8wcvEdw3smsGYWbfvPmXvY42h-VfC7LjCEzPv2zRjyrDs6N65yALPe_vsizUSmDJ_8hmeWPbi4KB2wnyTiQsZjEmIrh_sleiY5Bd-KOSJjU-yF2btLohK0rjFLpnorE6djRNyW4ds3dznfhDDdduj2e21AHt8OncLVaIxbXDvRGgqUm-u6QHyDpRKdQH6wIjn8lMpB4wlA_dyGINvmNCVynsWlg6RvmKRbS6LXhHNv-F4OiZTGfao1GaaskvE_ifAIs3i_-uer-vnJtGXcTYr-Ay4zyIuhlK4A3HvqWZ_J67y0hToL2ijy1YfOe-mTAVa4bHGG4IoMxHYzkeSTflQgKKyIjKhxNo-AJ5A7hJNP0ybUzzRzT2Qcv9ZdI3nSXKHmHal8GPbgjI6JUwwy6bpAAhECG9OfT7dQIPmudgLfMdYs9reHFBhWUrIZryAg14lhmShNH4Kodmi3EG3trQV3aWyIecqumVDdXQlw4491ZtXORaZDRKpw1xpdI5aQSVKjoCDf2qTCiR3QHgutT12JV3IQJ9JdYbnp9lz72H_nHoRh3hPpaR7Ifc1czEMyGoGrNJ9UxEHHtcWNaL2uexbamugCtyBrYWh8LNYadMDbyDSlo4YL3aw8dcxOnuFFMacKejhi83eeytYbHVCV7YHt_37ePp9w7P-Wa9fsZM5pNA5FOmYTMdPHYBjU_df14ovJD0hnu6wQwQAW1TQXnA6i1U02OTkmUNymSXIqyW4B0I3yw_JBRL3dt6yxaNbtn2R7thNVhQOzFdiTu_PmeAMgLDWDnPSWp-6L9DDIddWs16Q3xOxPlFy4N2z8vHP6uNcdIsTLfIWXtjPE=w1366-h615-s-no-gm?authuser=0",
        email: "user@email.com"
    },
    {
        price: 8.50,
        type: "Private",
        location: "Princeton, NJ",
        Zip_Code: "08901",
        longitude: -74.4519 ,
        latitude:  40.4862,
        image: "https://lh3.googleusercontent.com/pw/ADCreHdFUsYd0hp8eHavnHcZFhID2-YinGlp3pefZqe5r3GQdy1NYIWPEYq36jAwS7ZkAxg25wjuTyaVaqlAG_zWfw-AKKQCpTR_bw78aSrfx1xidnfnT6PaYiCks1EpKsTPzNQsBx0cHhFVFcgaPHoxO2u38r01-3MGKQq0Z6wmB9KD3o9eZ_aJUpsknXHlqGNfXtboEiFWv3ajjpCyaD2v-AAKI6nUAZ7voIa5hTb17HlSmUe0w-NORpYU0ys4tH1usHRxm_zM1OQej66nZ_6TWRq6FfGR0rPcK5vBgWd5OeCO0t8a2rT2Zg0gTrXneyS5wZQRtwQLiQsbrQ9QVs7jByqdliTeDd5OKu-NphLbMJe9Y2srdWAmKRVbuBby1Ir4ty3W5w8Eua2NoA52QOlOQROjm3wiKzTZ9X9HvjlsteqEkQPs41Y8CdCKKW4YnZUkVQgoFf33WA-neZuVEt332Tcd93C0z6R1A2a6s_rYeF8CVlpP2dF2DnwBVw0I_bANYb4JoWTW2uItwpl7ROuPveYTONSMACRuUhQ4SkK0czve6-OXecJmrgdBIAHdsLiGLgJNgnrsxvZTzFQBkT601wxQFuo3jkG6D7VLYsYx7eolLQZOvWQetSZLS4kj7m52mXcZBopqOSvTz5_vHgET1_V1pJ1oIWIjfONdc5cLoaiQPIaZrSeUGOhLZm_yJOV_FOOBtRtndMy7vRkimqVGzlnX_pHXLF-LXENc4C2utzrompvWERboL_SHEIFKHlhZr97TwylVy4ZUWcNqLTaORUNyvpzwplIhipTYvk9ywxJJ09jUu2F_aUn3UAFZhoxJu_bO9EjCVn53fUlpg1q5AKhWz0tgeqkE2mWvjlgTCRnnWzimTHa5z7GX-xE4Hg6q8iwyZ4l1SaHxggeqdL2FS5W4pffB7Sy6pqVtlO_aAmuhhzuxnKwgV4XsGyE=w1366-h615-s-no-gm?authuser=0", 
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
    var pricetext = document.createTextNode(price);
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

function resetTable() {
    var table = document.getElementById("parking-table");
    while (table.rows.length > 0) {
        table.deleteRow(0);
    }
}

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
  