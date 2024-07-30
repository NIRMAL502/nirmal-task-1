// Optional: JavaScript for interactive elements (e.g., form validation)

// Example: Validate form before submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    // Perform form validation here if needed
    // Example: Check if name, email, and message fields are not empty
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields.');
    } else {
        // Submit the form via AJAX or submit normally
        // Example: Replace 'send-email.php' with your actual backend script handling form submission
        document.getElementById('contact-form').submit(); // Submit the form
    }
});
