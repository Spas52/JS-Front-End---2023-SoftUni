function colorize() {
    // Get all rows in the table
    let rows = document.querySelectorAll('table tr');

    // Loop through each row, starting from the second row (index 1)
    for (let i = 1; i < rows.length; i += 2) {
        // Apply "Teal" color to even rows
        rows[i].style.backgroundColor = 'Teal';
    }
}