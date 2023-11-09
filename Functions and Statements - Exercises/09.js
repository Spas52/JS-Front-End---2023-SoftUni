function loadingBar (number) {
    let numberofPercent = number / 10;
    let bar = [];
    for (let i = 1; i <= numberofPercent; i++) {
        bar.push('%')
    }
    while (bar.length < 10) {
        bar.push('.')
    }
    if (number !== 100) {
        console.log(`${number}% [${bar.join('')}]`)
        console.log('Still loading...')
    } else {
        console.log('100% Complete!')
    }
}

loadingBar(100)