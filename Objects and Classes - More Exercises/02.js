function catalog(products) {
    // Sort products alphabetically
    products.sort(function(a, b) {
        // Extract product names for comparison (case-insensitive)
        let productNameA = a.split(' : ')[0].toUpperCase();
        let productNameB = b.split(' : ')[0].toUpperCase();

        // Compare product names
        if (productNameA < productNameB) {
            return -1;
        } else if (productNameA > productNameB) {
            return 1;
        } else {
            return 0;
        }
    });

    // Initialize an empty object to store products by initial
    let productGroups = {};

    // Group products by initial
    products.forEach(function(product) {
        let productName = product.split(' : ')[0];
        let initial = productName[0].toUpperCase();

        if (!productGroups[initial]) {
            productGroups[initial] = [];
        }

        productGroups[initial].push(product);
    });

    // Print the catalog
    for (let initial in productGroups) {
        console.log(initial);
        productGroups[initial].forEach(function(product) {
            let [productName, productPrice] = product.split(' : ');
            console.log(`  ${productName}: ${productPrice}`);
        });
    }
}

catalog([

    'Appricot : 20.4',
    
    'Fridge : 1500',
    
    'TV : 1499',
    
    'Deodorant : 10',
    
    'Boiler : 300',
    
    'Apple : 1.25',
    
    'Anti-Bug Spray : 15',
    
    'T-Shirt : 10'
    
    ] )