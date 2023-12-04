// Function to validate an email input on change
function validate() {
    // Add a change event listener to the 'email' input element
    document.getElementById('email').addEventListener('change', onChange);

    // Function to handle the change event
    function onChange(e) {
        // Get the current input element
        const element = e.currentTarget;

        // Define a regular expression pattern for a basic email format
        let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/g;

        // Check if the input value matches the email pattern
        if (!pattern.test(element.value)) {
            // If not a valid email, add the 'error' class to the input element
            element.classList.add('error');
        } else {
            // If a valid email, remove the 'error' class from the input element
            element.classList.remove('error');
        }
    }
}
