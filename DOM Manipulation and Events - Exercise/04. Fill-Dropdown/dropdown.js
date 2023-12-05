function addItem() {
    // Get the text and value from the input fields
    let text = document.getElementById('newItemText').value;
    let value = document.getElementById('newItemValue').value;

    // Create a new option element
    let newOption = document.createElement('option');

    // Set the text content and value for the new option
    newOption.textContent = text;
    newOption.value = value;

    // Find the select element by its id ("menu")
    let selectMenu = document.getElementById('menu');

    // Append the new option to the select element
    selectMenu.appendChild(newOption);

    // Clear the input fields after adding the new option
    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}
