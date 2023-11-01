function sumEvenAndOdd(array) {
    let evenSum = 0;
    let oddSum = 0;
  
    for (let i = 0; i < array.length; i++) {
      const number = parseInt(array[i]);
      if (number % 2 === 0) {
        evenSum += number; // Add even numbers to the evenSum
      } else {
        oddSum += number; // Add odd numbers to the oddSum
      }
    }
  
    let finalSum = evenSum - oddSum;
    console.log(finalSum);
  }

// function calculateEvenOddDifference(array) {
//   let finalSum = 0;

//   for (let i = 0; i < array.length; i++) {
//     const number = parseInt(array[i]);
//     if (number % 2 === 0) {
//       finalSum += number; // Add even numbers to finalSum
//     } else {
//       finalSum -= number; // Subtract odd numbers from finalSum
//     }
//   }

//   console.log("Difference between sum of even and odd numbers:", finalSum);
// }



sumEvenAndOdd([2,4,6,8,10])