class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = parts;
        this.fuel = fuel;
        this.parts.quality = this.parts.engine * this.parts.power;

    }

    drive (fuelLoss) {
        this.fuel -= fuelLoss;
    }
}

let parts = { engine: 6, power: 100 };

let vehicle = new Vehicle('a', 'b', parts, 200);

vehicle.drive(100);

console.log(vehicle.fuel);

console.log(vehicle.parts.quality); 


// class Vehicle {
//     constructor(type, model, parts, fuel) {
//         this.type = type;
//         this.model = model;
//         this.parts = parts;
//         this.fuel = fuel;
//     }

//     // Method to calculate the quality of the engine
//     calculateQuality() {
//         return this.parts.engine * this.parts.power;
//     }

//     // Method to drive the vehicle and decrease fuel
//     drive(fuelLoss) {
//         if (fuelLoss > this.fuel) {
//             console.log("Not enough fuel to complete the drive.");
//         } else {
//             this.fuel -= fuelLoss;
//             console.log(`Vehicle is driving. Fuel remaining: ${this.fuel}`);
//         }
//     }
// }

// // Example usage:

// // Create parts object
// const vehicleParts = {
//     engine: 100,
//     power: 50
// };

// // Create a Vehicle instance
// const myVehicle = new Vehicle('Car', 'XYZ123', vehicleParts, 200);

// // Display initial information
// console.log(`Type: ${myVehicle.type}`);
// console.log(`Model: ${myVehicle.model}`);
// console.log(`Parts: ${JSON.stringify(myVehicle.parts)}`);
// console.log(`Fuel: ${myVehicle.fuel}`);
// console.log(`Quality: ${myVehicle.calculateQuality()}`);

// // Drive the vehicle
// myVehicle.drive(50);