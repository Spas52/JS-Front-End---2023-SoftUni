function sortingNumbers(array) {
    let sorted = [];
    let end = array.length;
    for (i = 1; i <= end; i++) {
        if (i % 2 !== 0) {
            array.sort((a, b) => a - b)
            sorted.push(array[0])
            array.shift()
        } else {
            array.sort((a, b) => b - a)
            sorted.push(array[0])
            array.shift()
        }
    }
    return sorted
}

// function sortingNumbers(array) {
//     const sorted = [];
//     array = array.slice(); // Create a copy of the input array to avoid modifying the original

//     array.sort((a, b) => a - b); // Sort the array in ascending order

//     while (array.length > 0) {
//         sorted.push(array.shift());

//         if (array.length > 0) {
//             sorted.push(array.pop());
//         }
//     }

//     return sorted;
// }


console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))
