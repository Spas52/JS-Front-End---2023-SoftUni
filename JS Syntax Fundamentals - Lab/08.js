// function CircleArea (argument) {
//     if(typeof argument === 'number') {
//         let area = Math.PI * Math.pow(argument, 2);
//         console.log(Math.round(area * 100) / 100)
//     } else {
//         let type = typeof(argument)
//         console.log(`We can not calculate the circle area, because we receive a ${type}.`)
//     }
// }

function CircleArea(radius) {
    if (typeof radius === 'number') {
        let area = Math.PI * radius * radius;
        console.log((area).toFixed(2));
    } else {
        console.log(`We cannot calculate the circle area because we received a ${typeof radius}.`);
    }
}


CircleArea(5)