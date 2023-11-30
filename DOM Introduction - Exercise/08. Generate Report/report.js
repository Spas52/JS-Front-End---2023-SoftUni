function generateReport() {
    // Get all checkboxes by name
    let employeeCheckbox = document.getElementsByName("employee")[0];
    let departmentCheckbox = document.getElementsByName("deparment")[0];
    let statusCheckbox = document.getElementsByName("status")[0];
    let dateHiredCheckbox = document.getElementsByName("dateHired")[0];
    let benefitsCheckbox = document.getElementsByName("benefits")[0];
    let salaryCheckbox = document.getElementsByName("salary")[0];
    let ratingCheckbox = document.getElementsByName("rating")[0];

    // Check if checkboxes are found
    if (!employeeCheckbox || !departmentCheckbox || !statusCheckbox ||
        !dateHiredCheckbox || !benefitsCheckbox || !salaryCheckbox || !ratingCheckbox) {
        console.error("One or more checkboxes not found!");
        return;
    }

    let checkedColumns = [];
    let columnData = [];

    // Check which checkboxes are checked and store their corresponding column indices
    if (employeeCheckbox.checked) checkedColumns.push({ name: "employee", index: 0 });
    if (departmentCheckbox.checked) checkedColumns.push({ name: "department", index: 1 });
    if (statusCheckbox.checked) checkedColumns.push({ name: "status", index: 2 });
    if (dateHiredCheckbox.checked) checkedColumns.push({ name: "dateHired", index: 3 });
    if (benefitsCheckbox.checked) checkedColumns.push({ name: "benefits", index: 4 });
    if (salaryCheckbox.checked) checkedColumns.push({ name: "salary", index: 5 });
    if (ratingCheckbox.checked) checkedColumns.push({ name: "rating", index: 6 });

    // Get all rows in the table body
    let tableRows = document.querySelectorAll('tbody tr');

    // Loop through each row and extract data from checked columns
    tableRows.forEach(function (row) {
        let rowData = {};
        checkedColumns.forEach(function (column) {
            let cells = row.getElementsByTagName('td');
            if (cells.length > column.index) {
                let cellData = cells[column.index].innerText;
                rowData[column.name] = cellData;
            }
        });
        columnData.push(rowData);
    });

    // Convert the array of objects to a JSON string
    try {
        let jsonReport = JSON.stringify(columnData, null, 2);
        JSON.parse(jsonReport); // Check if the generated JSON is valid

        // Output the JSON report to the textarea
        let outputTextarea = document.getElementById("output");
        outputTextarea.value = jsonReport || ""; // Set an empty string if no data is present
    } catch (error) {
        console.error("Error generating or parsing JSON report:", error);
        alert("Error generating or parsing JSON report. Please check console for details.");
    }
}
// function generateReport() {
//     let checkBoxes = document.querySelectorAll('thead tr th input')
//     let output = document.getElementById('output');
//     let checkedIndexes = [];
//     for(let i = 0; i < checkBoxes.length; i++){
//         if(checkBoxes[i].checked){
//             checkedIndexes.push(i);
//         }
//     }
//     let titles = document.querySelectorAll('thead tr th');
//     let rowsCount = document.querySelectorAll('tbody tr').length;
//     let person = {};
//     let persons = [];
//     for(let row = 0; row < rowsCount; row++){
//         for(const index of checkedIndexes){
//             let key = titles[index].textContent.trim().toLowerCase();
//             let value = document.querySelectorAll('tbody tr')[row].querySelectorAll('td')[index].textContent;
//             person[key] = value;
//         }
//         persons.push(person);
//         person = {};
//     }
//     output.innerHTML = JSON.stringify(persons);
// }