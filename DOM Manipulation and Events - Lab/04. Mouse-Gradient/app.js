// Function to attach events to a gradient element
function attachGradientEvents() {
    // Get the gradient element by its ID
    let gradient = document.getElementById('gradient');

    // Add event listeners for mousemove and mouseout events on the gradient
    gradient.addEventListener('mousemove', gradientMove);
    gradient.addEventListener('mouseout', gradientOut);

    // Function to handle mousemove events on the gradient
    function gradientMove(event) {
        // Calculate the power based on the mouse position within the gradient
        let power = event.offsetX / (event.target.clientWidth - 1);

        // Convert the power to a percentage and truncate to an integer
        power = Math.trunc(power * 100);

        // Display the calculated power percentage in the 'result' element
        document.getElementById('result').textContent = power + "%";
    }

    // Function to handle mouseout events on the gradient
    function gradientOut(event) {
        // Clear the content of the 'result' element when the mouse leaves the gradient
        document.getElementById('result').textContent = "";
    }
};
