function storeCarsInGarages(infoArray) {
    function formatCarInfo(carInfo) {
        return carInfo.map(info => {
            const [key, value] = info.split(': ');
            return `${key} - ${value}`;
        }).join(', ');
    }
    let garageMap = {};

    for (let info of infoArray) {
        let [garageNumber, carInfo] = info.split(' - ');
        carInfo = carInfo.split(', ');

        if (garageMap[garageNumber]) {
            garageMap[garageNumber].car.push(formatCarInfo(carInfo));
        } else {
            garageMap[garageNumber] = {
                number: garageNumber,
                car: [formatCarInfo(carInfo)],
            };
        }
    }

    // Convert values of garageMap to an array
    let garages = Object.values(garageMap);

    // Print the result in the desired format
    for (let garage of garages) {
        console.log(`Garage № ${garage.number}`);
        for (let car of garage.car) {
            console.log(`--- ${car}`);
        }
    }
}

storeCarsInGarages(['1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fueltype: diesel, manufacture: Fiat'])