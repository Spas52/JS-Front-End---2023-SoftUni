function convertToObject (string) {
    let info = JSON.parse(string)
    for (key in info) {
        console.log(`${key}: ${info[key]}`)
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')