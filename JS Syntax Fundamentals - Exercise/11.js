function roadRadar (driverSpeed, area) {
    let limit;
    let speed = parseInt(driverSpeed)
    let status
    if(area==='motorway') {
        limit = 130;
        let difference = 0;
        if(speed > limit) {
            difference = speed - limit;
            if(difference <= 20) {
                status = 'speeding';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
            } else if(difference>20 && difference<=40) {
                status = 'excessive speeding';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
            } else {
                status = 'reckless driving';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
            }
        }else {
            console.log(`Driving ${speed} km/h in a ${limit} zone`)
        }
    } else if(area==='interstate') {
        limit = 90;
        if(speed > limit) {
            difference = speed - limit;
            if(difference <= 20) {
                status = 'speeding';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
            } else if(difference>20 && difference<=40) {
                status = 'excessive speeding';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
            } else {
                status = 'reckless driving';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
            }
        }else {
            console.log(`Driving ${speed} km/h in a ${limit} zone`)
        }
    } else if(area==='city') {
        limit = 50;
        if(speed > limit) {
            difference = speed - limit;
            if(difference <= 20) {
                status = 'speeding';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
            } else if(difference>20 && difference<=40) {
                status = 'excessive speeding';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
            } else {
                status = 'reckless driving';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
            }
        }else {
            console.log(`Driving ${speed} km/h in a ${limit} zone`)
        }
    } else if(area==='residential') {
        limit = 20;
        if(speed > limit) {
            difference = speed - limit;
            if(difference <= 20) {
                status = 'speeding';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
            } else if(difference>20 && difference<=40) {
                status = 'excessive speeding';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
            } else {
                status = 'reckless driving';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
            }
        }else {
            console.log(`Driving ${speed} km/h in a ${limit} zone`)
        }
    }


}

// function roadRadar(driverSpeed, area) {
//     const limits = {
//         'motorway': 130,
//         'interstate': 90,
//         'city': 50,
//         'residential': 20
//     };

//     const getStatus = difference => {
//         if (difference <= 20) return 'speeding';
//         if (difference > 20 && difference <= 40) return 'excessive speeding';
//         return 'reckless driving';
//     };

//     const printMessage = (speed, limit, difference) => {
//         if (difference > 0) {
//             console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${getStatus(difference)}`);
//         } else {
//             console.log(`Driving ${speed} km/h in a ${limit} zone`);
//         }
//     };

//     let speed = parseInt(driverSpeed);
//     let limit = limits[area];
//     let difference = speed - limit;

//     printMessage(speed, limit, difference);
// }

roadRadar(120, 'interstate')