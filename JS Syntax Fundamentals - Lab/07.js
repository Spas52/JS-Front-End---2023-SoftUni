function TheatrePromotions(day, age) {
    if (day === 'Weekday') {
        if (0 <= age && age <= 18) {
            console.log('12$');
        } else if (0 <= age && age <= 64) {
            console.log('18$');
        } else if (0 <= age && age <= 122) {
            console.log('12$');
        } else {
            console.log('Error!');
        }
    } else if (day === 'Weekend') {
        if (0 <= age && age <= 18) {
            console.log('15$');
        } else if (0 <= age && age <= 64) {
            console.log('20$');
        } else if (0 <= age && age <= 122) {
            console.log('15$');
        } else {
            console.log('Error!');
        }
    } else if (day === 'Holiday') {
        if (0 <= age && age <= 18) {
            console.log('5$');
        } else if (0 <= age && age <= 64) {
            console.log('12$');
        } else if (0 <= age && age <= 122) {
            console.log('10$');
        } else {
            console.log('Error!');
        }
    } else {
        console.log('Error!');
    }
}

TheatrePromotions('Holiday', -12)