// function MonthPrinter (num) {
//     if(1 <= num && num <=12){
//         if(num == 1) {
//             console.log("January")
//         }
//         if(num == 2) {
//             console.log("February")
//         }
//         if(num == 3) {
//             console.log("March")
//         }
//         if(num == 4) {
//             console.log("April")
//         }
//         if(num == 5) {
//             console.log("May")
//         }
//         if(num == 6) {
//             console.log("June")
//         }
//         if(num == 7) {
//             console.log("July")
//         }
//         if(num == 8) {
//             console.log("August")
//         }
//         if(num == 9) {
//             console.log("September")
//         }
//         if(num == 10) {
//             console.log("October")
//         }
//         if(num == 11) {
//             console.log("November")
//         }
//         if(num == 12) {
//             console.log("December")
//         }
//     }else{
//         console.log("Error!")
//     }
// }

function MonthPrinter(num) {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    if (num >= 1 && num <= 12) {
        console.log(months[num - 1]);
    } else {
        console.log("Error!");
    }
}


MonthPrinter(12)