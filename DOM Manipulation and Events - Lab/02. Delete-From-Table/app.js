// Function to delete a row from a table based on the email value
function deleteByEmail() {
    // Get the email value entered in the input field
    let email = document.getElementsByName("email")[0].value;

    // Select all the second column cells of the table with ID 'customers'
    let secondColumn = document.querySelectorAll("#customers tr td:nth-child(2)");

    // Iterate through each cell in the second column
    for (let td of secondColumn) {
        // Check if the text content of the cell matches the entered email
        if (td.textContent == email) {
            // Get the row containing the matched cell
            let row = td.parentNode;

            // Remove the entire row from the table
            row.parentNode.removeChild(row);

            // Update the result message to indicate successful deletion
            document.getElementById('result').textContent = "Deleted.";

            // Clear the input field after deletion
            document.getElementsByName("email")[0].value = '';

            // Exit the function after successful deletion
            return;
        }
    }

    // If no matching email is found, update the result message accordingly
    document.getElementById('result').textContent = "Not found.";

    // Clear the input field after the search
    document.getElementsByName("email")[0].value = '';
}
