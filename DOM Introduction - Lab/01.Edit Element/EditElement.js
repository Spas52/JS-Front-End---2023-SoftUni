function editElement(element, match, replacer) {
    // Get the current text content of the element
    let currentText = element.textContent;

    // Replace all occurrences of the match with the replacer
    let newText = currentText.replace(new RegExp(match, 'g'), replacer);

    // Set the updated text content back to the element
    element.textContent = newText;
}