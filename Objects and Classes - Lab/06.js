function manageMeetings(appointments) {
    var successfulMeetings = {};
    var conflictingMeetings = [];

    // Loop through the array of strings
    appointments.forEach(appointment => {
        // Split the string into weekday and name
        var [weekday, person] = appointment.split(' ');

        // Check if the weekday has already been scheduled
        if (successfulMeetings[weekday]) {
            // If scheduled, add to conflicting meetings
            conflictingMeetings.push({ weekday, person });
            console.log(`Conflict on ${weekday}!`);
        } else {
            // If not scheduled, mark as a successful meeting
            successfulMeetings[weekday] = person;
            console.log(`Scheduled for ${weekday}`);
        }
    });

    // Print list of successful meetings
    for (var day in successfulMeetings) {
        console.log(`${day} -> ${successfulMeetings[day]}`);
    }
}

manageMeetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim'])