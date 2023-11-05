function rotation(array, numberOfRotations) {
    let nums = array;
    let a;
    for (i=0;i<numberOfRotations;i++) {
        a = nums.shift()
        nums.push(a)
    }

    let rotatedNums = array.join(' ')
    console.log(rotatedNums)
}

// function rotateArray(array, numberOfRotations) {
//     if (numberOfRotations < 0) {
//         numberOfRotations = array.length - (-numberOfRotations % array.length);
//     }

//     numberOfRotations = numberOfRotations % array.length;
//     const rotatedArray = [...array.slice(numberOfRotations), ...array.slice(0, numberOfRotations)];

//     console.log(rotatedArray.join(' '));
// }



rotation([51, 47, 32, 61, 21], 2)
rotation([32, 21, 61, 1], 4)
rotation([2, 4, 15, 31], 5)