function sumTable() {
    // Get the first table in the document
    let table = document.querySelector('table');

    if (!table) {
        console.error('Table not found.');
        return;
    }

    // Get all rows in the table body
    let rows = table.querySelectorAll('tbody tr');

    let totalSum = 0;

    // Loop through each row, excluding the last one
    for (let i = 0; i < rows.length - 1; i++) {
        // Get the value in the last column (assuming it's a number)
        let value = parseFloat(rows[i].lastElementChild.textContent);

        // Add the value to the total sum
        if (!isNaN(value)) {
            totalSum += value;
        }
    }

    // Display the total sum in the element with ID "sum"
    document.getElementById('sum').textContent = totalSum.toFixed(2);
}