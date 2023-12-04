// Function to add a new item to a list
function addItem() {
    // Get the text entered in the 'newItemText' input field
    let text = document.getElementById('newItemText').value;

    // Create a new list item element
    let li = document.createElement("li");

    // Add the text content to the new list item
    li.appendChild(document.createTextNode(text));

    // Append the new list item to the 'items' list
    document.getElementById("items").appendChild(li);

    // Clear the input field after adding the item
    document.getElementById('newItemText').value = '';

    // Create a 'Delete' link for each added item
    let remove = document.createElement("a");

    // Add the text content '[Delete]' to the 'Delete' link
    let linkText = document.createTextNode("[Delete]");
    remove.appendChild(linkText);

    // Set the link's href to '#' (to prevent it from navigating)
    remove.href = "#";

    // Add an event listener to the 'Delete' link, calling the deleteItem function
    remove.addEventListener("click", deleteItem);

    // Append the 'Delete' link to the new list item
    li.appendChild(remove);

    // Function to delete the current item when the 'Delete' link is clicked
    function deleteItem() {
        li.remove();
    }
}
