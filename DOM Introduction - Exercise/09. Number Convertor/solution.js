function solve() {
    // Add options to the "To" select menu
    const selectMenuTo = document.getElementById("selectMenuTo");

    // Create Binary option
    const binaryOption = document.createElement("option");
    binaryOption.value = "binary";
    binaryOption.text = "Binary";

    // Create Hexadecimal option
    const hexOption = document.createElement("option");
    hexOption.value = "hexadecimal";
    hexOption.text = "Hexadecimal";

    // Append options to select menu
    selectMenuTo.appendChild(binaryOption);
    selectMenuTo.appendChild(hexOption);

    // Set a default value for the "To" select menu
    selectMenuTo.value = "binary"; // You can set it to "binary" or "hexadecimal" based on your preference

    // Function to convert decimal to binary
    function decimalToBinary(decimal) {
        return (decimal >>> 0).toString(2); // Using >>> 0 to treat the number as unsigned
    }

    // Function to convert decimal to hexadecimal
    function decimalToHexadecimal(decimal) {
        return decimal.toString(16).toUpperCase();
    }

    // Event listener for the "Convert it" button
    const convertButton = document.querySelector("button");
    convertButton.addEventListener("click", function () {
        const decimalInput = parseInt(document.getElementById("input").value, 10);
        const selectedOption = selectMenuTo.value;
        let result;

        if (isNaN(decimalInput)) {
            result = "Invalid input";
        } else {
            if (selectedOption === "binary") {
                result = decimalToBinary(decimalInput);
            } else if (selectedOption === "hexadecimal") {
                result = decimalToHexadecimal(decimalInput);
            } else {
                result = "Invalid conversion";
            }
        }

        // Display the result in the "Result" input field
        document.getElementById("result").value = result;
    });
}