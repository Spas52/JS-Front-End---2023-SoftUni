// Function to add a new item to a list
function addItem() {
    // Get the value entered in the 'newItemText' input field
    let text = document.getElementById('newItemText').value;

    // Create a new list item element
    let li = document.createElement("li");

    // Add the text content to the new list item
    li.appendChild(document.createTextNode(text));

    // Append the new list item to the 'items' list
    document.getElementById("items").appendChild(li);

    // Clear the input field after adding the item
    document.getElementById('newItemText').value = '';
}
