function isLeapYear(year) {
    let is_leap
    if (year % 4 !== 0) {
        // Not divisible by 4
        is_leap = false;
    } else if (year % 100 !== 0) {
        // Divisible by 4 but not by 100
        is_leap = true;
    } else if (year % 400 !== 0) {
        // Divisible by 100 but not by 400
        is_leap = false;
    } else {
        // Divisible by 400
        is_leap = true;
    }

    if (is_leap) {
        console.log('yes');
    } else {
        console.log('no');
    }
}

isLeapYear(4)