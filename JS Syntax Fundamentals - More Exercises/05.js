function spiceExtraction(startingYield) {
    let totalSpice = 0;
    let days = 0;
    const dailyConsumption = 26;

    while (startingYield >= 100) {
        totalSpice += startingYield;
        totalSpice -= dailyConsumption;  // Workers consume spice at the end of the day
        startingYield -= 10;  // Yield drops by 10 for the next day
        days++;
    }

    // Accounting for the spice consumed after the mine has been exhausted
    if (totalSpice >= dailyConsumption) {
        totalSpice -= dailyConsumption;
    }

    console.log(days);
    console.log(totalSpice);
}

// Test case
spiceExtraction(111);
spiceExtraction(450);
