function solve() {
    // Initialize variables
    let board = [];
    const table = document.querySelector("table");
    const resultContainer = document.querySelector("#check p");
    const rows = document.querySelectorAll("tbody tr");
    const [checkBtn, clearBtn] = document.querySelectorAll("button");

    // Add event listeners for buttons
    checkBtn.addEventListener("click", handleCheckBtnClick);
    clearBtn.addEventListener("click", handleClearBtnClick);

    // Handle the "Check" button click
    function handleCheckBtnClick() {
        fillBoard();
        const [rowSums, colsSums] = getRowsAndColsSums();
        const allSums = [...rowSums, ...colsSums];
        const isValid = validateSums(allSums);

        // Update UI based on validation result
        updateUI(isValid);
    }

    // Handle the "Clear" button click
    function handleClearBtnClick() {
        fillBoard();
        clearBoard();
        clearUI();
    }

    // Fill the board with input values
    function fillBoard() {
        board = [];
        for (const row of rows) {
            const columns = Array.from(row.querySelectorAll("input"));
            board.push(columns);
        }
    }

    // Get sums of rows and columns
    function getRowsAndColsSums() {
        const rowSums = [];
        const colsSums = [];

        for (const row of board) {
            let currentRowSum = 0;
            for (const number of row) {
                currentRowSum += Number(number.value);
            }
            rowSums.push(currentRowSum);
        }

        for (let col = 0; col < board[0].length; col++) {
            let currentColsSum = 0;
            for (const row of board) {
                currentColsSum += Number(row[col].value);
            }
            colsSums.push(currentColsSum);
        }

        return [rowSums, colsSums];
    }

    // Validate sums against the expected sum
    function validateSums(sums) {
        const validSum = board.length * 2;
        return sums.every(sum => sum === validSum);
    }

    // Update UI based on validation result
    function updateUI(isValid) {
        if (isValid) {
            table.style.border = "2px solid green";
            resultContainer.textContent = "You solve it! Congratulations!";
            resultContainer.style.color = "green";
        } else {
            table.style.border = "2px solid red";
            resultContainer.textContent = "NOP! You are not done yet...";
            resultContainer.style.color = "red";
        }
    }

    // Clear the board values
    function clearBoard() {
        for (const row of board) {
            for (const number of row) {
                number.value = "";
            }
        }
    }

    // Clear UI styles and messages
    function clearUI() {
        table.style.border = "";
        resultContainer.textContent = "";
        resultContainer.style.color = "";
    }
}