function reverse(number, array) {
    let newArray = [];
    for (i = 0; i <= number - 1; i++) {
        newArray.push(array[i])
    }
    newArray = newArray.reverse()
    console.log(newArray.join(" "))
}

// function reverse(number, array) {
//     const newArray = array.slice(0, number).reverse();
//     console.log(newArray.join(" "));
//   }
  

reverse(3, [10, 20, 30, 40, 50])

