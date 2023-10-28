function checkDistanceValidity(x1, y1, x2, y2) {
    // Function to compute distance between two points
    function distance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    }
    
    // Check if distance is an integer
    function isDistanceValid(x1, y1, x2, y2) {
        const dist = distance(x1, y1, x2, y2);
        return dist === Math.floor(dist); // returns true if dist is an integer
    }
    
    // Compare the points and print the results
    function printComparison(x1, y1, x2, y2) {
        if (isDistanceValid(x1, y1, x2, y2)) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }

    printComparison(x1, y1, 0, 0);
    printComparison(x2, y2, 0, 0);
    printComparison(x1, y1, x2, y2);
}

// Test
checkDistanceValidity(3, 0, 0, 4);
