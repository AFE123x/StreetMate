// Sample array
const parkingSpots = [
    {
        price: 10.00,
        type: "Public",
        location: "Princeton, NJ",
        image: "https://lh3.googleusercontent.com/pw/ADCreHceQQSEI81EUj4lVLpIlPEryYoJebESK9fCVyGLpKs1_5h-HNVtnRFmU9QtBiWm4y-0vJdtcSXaVEsIZ-9hf3piG8YJf5moxG_-zvd8dDC1D8wcvEdw3smsGYWbfvPmXvY42h-VfC7LjCEzPv2zRjyrDs6N65yALPe_vsizUSmDJ_8hmeWPbi4KB2wnyTiQsZjEmIrh_sleiY5Bd-KOSJjU-yF2btLohK0rjFLpnorE6djRNyW4ds3dznfhDDdduj2e21AHt8OncLVaIxbXDvRGgqUm-u6QHyDpRKdQH6wIjn8lMpB4wlA_dyGINvmNCVynsWlg6RvmKRbS6LXhHNv-F4OiZTGfao1GaaskvE_ifAIs3i_-uer-vnJtGXcTYr-Ay4zyIuhlK4A3HvqWZ_J67y0hToL2ijy1YfOe-mTAVa4bHGG4IoMxHYzkeSTflQgKKyIjKhxNo-AJ5A7hJNP0ybUzzRzT2Qcv9ZdI3nSXKHmHal8GPbgjI6JUwwy6bpAAhECG9OfT7dQIPmudgLfMdYs9reHFBhWUrIZryAg14lhmShNH4Kodmi3EG3trQV3aWyIecqumVDdXQlw4491ZtXORaZDRKpw1xpdI5aQSVKjoCDf2qTCiR3QHgutT12JV3IQJ9JdYbnp9lz72H_nHoRh3hPpaR7Ifc1czEMyGoGrNJ9UxEHHtcWNaL2uexbamugCtyBrYWh8LNYadMDbyDSlo4YL3aw8dcxOnuFFMacKejhi83eeytYbHVCV7YHt_37ePp9w7P-Wa9fsZM5pNA5FOmYTMdPHYBjU_df14ovJD0hnu6wQwQAW1TQXnA6i1U02OTkmUNymSXIqyW4B0I3yw_JBRL3dt6yxaNbtn2R7thNVhQOzFdiTu_PmeAMgLDWDnPSWp-6L9DDIddWs16Q3xOxPlFy4N2z8vHP6uNcdIsTLfIWXtjPE=w1366-h615-s-no-gm?authuser=0",
        email: "arunf400@gmail.com"
    },
    {
        price: 8.50,
        type: "Private",
        location: "New Brunswick, NJ",
        image: "https://lh3.googleusercontent.com/pw/ADCreHdFUsYd0hp8eHavnHcZFhID2-YinGlp3pefZqe5r3GQdy1NYIWPEYq36jAwS7ZkAxg25wjuTyaVaqlAG_zWfw-AKKQCpTR_bw78aSrfx1xidnfnT6PaYiCks1EpKsTPzNQsBx0cHhFVFcgaPHoxO2u38r01-3MGKQq0Z6wmB9KD3o9eZ_aJUpsknXHlqGNfXtboEiFWv3ajjpCyaD2v-AAKI6nUAZ7voIa5hTb17HlSmUe0w-NORpYU0ys4tH1usHRxm_zM1OQej66nZ_6TWRq6FfGR0rPcK5vBgWd5OeCO0t8a2rT2Zg0gTrXneyS5wZQRtwQLiQsbrQ9QVs7jByqdliTeDd5OKu-NphLbMJe9Y2srdWAmKRVbuBby1Ir4ty3W5w8Eua2NoA52QOlOQROjm3wiKzTZ9X9HvjlsteqEkQPs41Y8CdCKKW4YnZUkVQgoFf33WA-neZuVEt332Tcd93C0z6R1A2a6s_rYeF8CVlpP2dF2DnwBVw0I_bANYb4JoWTW2uItwpl7ROuPveYTONSMACRuUhQ4SkK0czve6-OXecJmrgdBIAHdsLiGLgJNgnrsxvZTzFQBkT601wxQFuo3jkG6D7VLYsYx7eolLQZOvWQetSZLS4kj7m52mXcZBopqOSvTz5_vHgET1_V1pJ1oIWIjfONdc5cLoaiQPIaZrSeUGOhLZm_yJOV_FOOBtRtndMy7vRkimqVGzlnX_pHXLF-LXENc4C2utzrompvWERboL_SHEIFKHlhZr97TwylVy4ZUWcNqLTaORUNyvpzwplIhipTYvk9ywxJJ09jUu2F_aUn3UAFZhoxJu_bO9EjCVn53fUlpg1q5AKhWz0tgeqkE2mWvjlgTCRnnWzimTHa5z7GX-xE4Hg6q8iwyZ4l1SaHxggeqdL2FS5W4pffB7Sy6pqVtlO_aAmuhhzuxnKwgV4XsGyE=w1366-h615-s-no-gm?authuser=0", // Add the path to your image
        email: "asfes"
    },
    {
        price: 69,
        type: "Private",
        location: "New York, NY",
        image: "aoeu.png", // Add the path to your image
        email: "asfes"
    },
    
];
for (var i = 0; i < 3; i++) {
    var c = parkingSpots[i];
    addrow(c.price, c.type, c.location, c.image, c.email);
}

function addrow(price, type, location, image, email) {
    var table = document.getElementById("parking-table"); // Added 'document.'
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
    typecell.appendChild(document.createTextNode(type)); // Fixed typo here
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
    sendto.textContent = "Contact us";
    emailcell.appendChild(sendto); // Fixed typo here
    row.appendChild(emailcell);

    table.appendChild(row);
}


function submitForm() {
    try {
        var price = parseInt(document.getElementById("pricef").value);
        var type = document.getElementById("type").value;
        var location = document.getElementById("locationf").value;
        var image = document.getElementById("imagef").value;
        var email = document.getElementById("emailf").value;
        addrow(price,type,location,image,email);


        // Rest of your code goes here...

    } catch (error) {
        alert("An error occurred: " + error.message);
    }
}

const Formsubmission = document.getElementById("formsubmit");
Formsubmission.addEventListener("click", submitForm);



// Filter functions



