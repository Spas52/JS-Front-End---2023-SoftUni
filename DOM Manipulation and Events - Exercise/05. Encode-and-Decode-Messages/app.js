// Main function to handle encoding and decoding messages
function encodeAndDecodeMessages() {
    // Get references to the encoding textarea and button
    const encodeText = document.getElementsByTagName('textarea')[0];
    const encodeBtn = document.getElementsByTagName('button')[0];

    // Get references to the decoding textarea and button
    const decodeText = document.getElementsByTagName('textarea')[1];
    const decodeBtn = document.getElementsByTagName('button')[1];

    // Add event listeners for the encoding and decoding buttons
    encodeBtn.addEventListener('click', encode);
    decodeBtn.addEventListener('click', decode);

    // Function to handle encoding
    function encode() {
        // Get the text from the encoding textarea
        let text = encodeText.value;
        let newMessage = '';

        // Loop through each character in the text
        for (let index = 0; index < text.length; index++) {
            // Get the ASCII code of the current character
            let charCode = text.charCodeAt(index);
            
            // Increment the ASCII code by 1 and convert it back to a character
            let newChar = String.fromCharCode(charCode + 1);

            // Append the new character to the encoded message 
            newMessage += newChar;
        }

        // Update the decoding textarea with the encoded message
        decodeText.value = newMessage;

        // Clear the encoding textarea
        encodeText.value = '';

        // Enable the decoding button
        document.getElementsByTagName('button')[1].disabled = false;
    }

    // Function to handle decoding
    function decode() {
        // Get the text from the decoding textarea
        let text = decodeText.value;
        let newMessage = '';

        // Loop through each character in the text
        for (let index = 0; index < text.length; index++) {
            // Get the ASCII code of the current character
            let charCode = text.charCodeAt(index);

            // Decrement the ASCII code by 1 and convert it back to a character
            let newChar = String.fromCharCode(charCode - 1);

            // Append the new character to the decoded message
            newMessage += newChar;
        }

        // Update the decoding textarea with the decoded message
        decodeText.value = newMessage;

        // Disable the decoding button
        document.getElementsByTagName('button')[1].disabled = true;
    }
}
