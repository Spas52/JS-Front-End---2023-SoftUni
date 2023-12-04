// Function to add focus and blur event listeners to input fields
function focused() {
    // Get all input fields and convert the NodeList to an Array
    const fields = Array.from(document.getElementsByTagName("input"));

    // Iterate through each input field and add focus and blur event listeners
    for (const field of fields) {
        field.addEventListener("focus", onFocus);
        field.addEventListener("blur", onBlur);
    }

    // Function to handle the focus event
    function onFocus(e) {
        // Get the parent div element of the focused input field
        const divParentElement = e.currentTarget.parentNode;

        // Add the 'focused' class to the parent div element
        divParentElement.classList.add("focused");
    }

    // Function to handle the blur event
    function onBlur(e) {
        // Get the parent div element of the blurred input field
        const divParentElement = e.currentTarget.parentNode;

        // Remove the 'focused' class from the parent div element
        divParentElement.classList.remove("focused");
    }
}
