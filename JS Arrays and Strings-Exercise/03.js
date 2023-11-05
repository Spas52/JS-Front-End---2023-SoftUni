function names (array) {
    let sorted = array.sort((a, b)=>{
        return a.localeCompare(b)
    });
    let place = 0;
    let output = []
    for (el of sorted) {
        place += 1;
         output.push(`${place}.${el}`)
    }
    return(output.join('\n'))
}

// function names(array) {
//     const sorted = array.slice().sort((a, b) => a.localeCompare(b));
//     const output = sorted.map((el, index) => `${index + 1}.${el}`).join('\n');
//     return output;
// }


console.log(names(["John", "Bob", "Bab", "Ema"]))