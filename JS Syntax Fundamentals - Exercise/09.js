function calculateFruitCost(fruit, grams, pricePerKg) {
    const kg = grams / 1000;
    const cost = kg * pricePerKg; 
    
    console.log(`I need $${cost.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`);
}

fruitCost('apple', 1563, 2.35);  
