function showText() {
    // Get the reference to the text span element
    let textElement = document.getElementById('text');
    
    // Get the reference to the "Read more" link
    var moreLink = document.getElementById('more');

    // Toggle the display property of the text element
    if (textElement.style.display === 'none' || textElement.style.display === '') {
        textElement.style.display = 'inline'; // Show the text
        moreLink.style.display = 'none'; // Hide the "Read more" link
    } else {
        textElement.style.display = 'none'; // Hide the text
        moreLink.style.display = 'inline'; // Show the "Read more" link
    }
}