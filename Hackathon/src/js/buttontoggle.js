function toggleForm() {
    var formContainer = document.getElementById('formContainer');
    formContainer.style.display = formContainer.style.display === 'none' ? 'block' : 'none';
}

// Function to submit the form data (you can replace this with your actual form submission logic)
function submitForm() {
    var formData = {
        price: document.getElementById('price').value,
        type: document.getElementById('type').value,
        location: document.getElementById('location').value,
        image: document.getElementById('image').value
    };

    console.log('Form Data:', formData);
    // Add your logic to handle the form data (e.g., send it to a server)
}

// Add click event listener to the toggle button
var toggleFormBtn = document.getElementById('toggleFormBtn');
toggleFormBtn.addEventListener('click', toggleForm);
