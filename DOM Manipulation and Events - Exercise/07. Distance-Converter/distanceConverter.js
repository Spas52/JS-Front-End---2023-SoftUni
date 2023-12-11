function attachEventsListeners() {
    let convertButton = document.getElementById("convert");
    convertButton.addEventListener('click', converte);

    function converte () {
        let inputDistance = parseFloat(document.getElementById("inputDistance").value);
        let inputUnits = document.getElementById("inputUnits").value;
        let outputUnits = document.getElementById("outputUnits").value;
        var convertedDistance = performConversion(inputDistance, inputUnits, outputUnits);
        document.getElementById("outputDistance").value = convertedDistance;

        function performConversion(inputDistance, inputUnits, outputUnits) {
            // Implement your conversion logic here
            let conversionRate;
        
            // Set conversion rates based on your requirements
            switch (inputUnits) {
                case "km":
                    conversionRate = {
                        "km": 1,
                        "m": 1000,
                        "cm": 100000,
                        "mm": 1000000,
                        "mi": 1609.34,
                        "yrd": 1093.61,
                        "ft": 3280.84,
                        "in": 39370.1
                    };
                    break;
                case "m":
                    conversionRate = {
                        "km": 0.001,
                        "m": 1,
                        "cm": 100,
                        "mm": 1000,
                        "mi": 0.000621371,
                        "yrd": 1.09361,
                        "ft": 3.28084,
                        "in": 39.3701
                    };
                    break;
                case "cm":
                    conversionRate = {
                        "km": 0.00001,
                        "m": 0.01,
                        "cm": 1,
                        "mm": 10,
                        "mi": 6.2137e-6,
                        "yrd": 0.0109361,
                        "ft": 0.0328084,
                        "in": 0.393701
                    };
                    break;
                case "mm":
                    conversionRate = {
                        "km": 1e-6,
                        "m": 0.001,
                        "cm": 0.1,
                        "mm": 1,
                        "mi": 6.2137e-7,
                        "yrd": 0.00109361,
                        "ft": 0.00328084,
                        "in": 0.0393701
                    };
                    break;
                case "mi":
                    conversionRate = {
                        "km": 1.60934,
                        "m": 1609.34,
                        "cm": 160934,
                        "mm": 1.60934e+6,
                        "mi": 1,
                        "yrd": 1760,
                        "ft": 5280,
                        "in": 63360
                    };
                    break;
                case "yrd":
                    conversionRate = {
                        "km": 0.0009144,
                        "m": 0.9144,
                        "cm": 91.44,
                        "mm": 914.4,
                        "mi": 0.000568182,
                        "yrd": 1,
                        "ft": 3,
                        "in": 36
                    };
                    break;
                case "ft":
                    conversionRate = {
                        "km": 0.0003048,
                        "m": 0.3048,
                        "cm": 30.48,
                        "mm": 304.8,
                        "mi": 0.000189394,
                        "yrd": 0.333333,
                        "ft": 1,
                        "in": 12
                    };
                    break;
                case "in":
                    conversionRate = {
                        "km": 0.0000254,
                        "m": 0.0254,
                        "cm": 2.54,
                        "mm": 25.4,
                        "mi": 1.5783e-5,
                        "yrd": 0.0277778,
                        "ft": 0.0833333,
                        "in": 1
                    };
                    break;
                default:
                    // Handle the default case if needed
                    break;
            }
        
            // Perform the conversion
            let convertedDistance = inputDistance * conversionRate[outputUnits];
        
            return convertedDistance;
        }
    }
}

