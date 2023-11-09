function perfectNumber (number) {
    let isPerfect = true;
    let divisors = [];
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            divisors.push(i);
        }
    }

    let summary = divisors.reduce(function(a, b){
        return a + b;
      });
    if (summary === number) {
        console.log('We have a perfect number!')
    } else {
        console.log("It's not so perfect.")
    }
}

perfectNumber(1236498)