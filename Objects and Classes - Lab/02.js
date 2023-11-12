function city(info) {
    for (key in info) {
        console.log(`${key} -> ${info[key]}`);
    }
}

city({name: "Plovdiv", area: 389, population: 1162358, country: "Bulgaria", postCode: "4000"})