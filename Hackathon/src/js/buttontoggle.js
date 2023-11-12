/**
 * Toggles the visibility of the form container.
 * If the container is currently hidden, it will be displayed, and vice versa.
 * @function
 * @name toggleForm
 * @returns {undefined}
 */
function toggleForm() {
    var formContainer = document.getElementById('formContainer');
    formContainer.style.display = formContainer.style.display === 'none' ? 'block' : 'none';
}

// Add click event listener to the toggle button
var toggleFormBtn = document.getElementById('toggleFormBtn');
toggleFormBtn.addEventListener('click', toggleForm);
