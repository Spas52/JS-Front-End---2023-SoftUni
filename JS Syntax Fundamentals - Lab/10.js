// function printNumbersInRange(start, end) {
//     if (typeof start !== 'number' || typeof end !== 'number') {
//         console.log('Both arguments must be numbers.');
//         return;
//     }

//     if (start <= end) {
//         for (let i = start; i <= end; i++) {
//             console.log(i);
//         }
//     } else {
//         for (let i = start; i >= end; i--) {
//             console.log(i);
//         }
//     }
// }

function Numbers(m, n) {
    for (let i = m; i >= n; i--) {
        console.log(i);
    }
}

Numbers(4, 1)