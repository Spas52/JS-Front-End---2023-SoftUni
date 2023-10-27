// function findLargest(a, b, c) {
//     return a > b ? (a > c ? a : c) : (b > c ? b : c);
// }

function LargestNumber(a, b, c) {
    let num = Math.max(a, b, c);
    console.log(`The largest number is ${num}.`)
}

// function LargestNumber(a, b, c) {
//     if (a > b && a > c) {
//         return a;
//     } else if (b > a && b > c) {
//         return b;
//     } else {
//         return c;
//     }
// }


LargestNumber(-3, -5, -22.5)