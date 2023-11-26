function extractText() {
    // Get the unordered list element
    let itemList = document.getElementById('items');

    // Get the textarea element
    let resultTextArea = document.getElementById('result');

    // Loop through each list item and append its text to the textarea
    for (let i = 0; i < itemList.children.length; i++) {
        let listItem = itemList.children[i];
        resultTextArea.value += listItem.textContent.trim() + '\n';
    }
}