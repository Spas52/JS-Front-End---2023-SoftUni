function matrix (n) {
    let row = [];
    for (let i = 0; i < n; i++) {
        row.push(n)
    }

    for (let i = 0; i < n; i++) {
        console.log(row.join(' '))
    }
}

// function matrix(n) {
//     for (let i = 0; i < n; i++) {
//         let row = Array(n).fill(n);
//         console.log(row.join(' '));
//     }
// }

matrix(3)