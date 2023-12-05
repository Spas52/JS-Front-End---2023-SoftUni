function attachEventsListeners() {
    const daysBtn = document.getElementById('daysBtn');
    const hoursBtn = document.getElementById('hoursBtn');
    const minutesBtn = document.getElementById('minutesBtn');
    const secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', convertDays);
    hoursBtn.addEventListener('click', convertHours);
    minutesBtn.addEventListener('click', convertMinutes);
    secondsBtn.addEventListener('click', convertSeconds);

    function convertDays() {
        let daysValue = parseFloat(document.getElementById('days').value, 10);

        let hours = document.getElementById('hours');
        let hoursValue = daysValue * 24;
        hours.value = hoursValue;

        let minutes = document.getElementById('minutes');
        let minutesValue = hoursValue * 60;
        minutes.value = minutesValue;

        let seconds = document.getElementById('seconds');
        let secondsValue = minutesValue * 60;
        seconds.value = secondsValue
    }

    function convertHours() {
        let hoursValue = parseFloat(document.getElementById('hours').value, 10);

        days = document.getElementById('days');
        let daysValue = hoursValue / 24;
        days.value = daysValue

        minutes = document.getElementById('minutes');
        let minutesValue = hoursValue * 60;
        minutes.value = minutesValue

        seconds = document.getElementById('seconds');
        let secondsValue = minutesValue * 60;
        seconds.value = secondsValue
    }

    function convertMinutes() {
        let minutesValue = parseFloat(document.getElementById('minutes').value, 10);

        hours = document.getElementById('hours');
        let hoursValue = minutesValue / 60;
        hours.value = hoursValue;

        days = document.getElementById('days');
        let daysValue = hoursValue / 24;
        days.value = daysValue;

        seconds = document.getElementById('seconds');
        let secondsValue = minutesValue * 60;
        seconds.value = secondsValue;
    }

    function convertSeconds() {
        let secondsValue = parseFloat(document.getElementById('seconds').value, 10);

        minutes = document.getElementById('minutes');
        let minutesValue = secondsValue / 60;
        minutes.value = minutesValue;

        hours = document.getElementById('hours');
        let hoursValue = minutesValue / 60;
        hours.value = hoursValue;

        days = document.getElementById('days');
        let daysValue = hoursValue / 24;
        days.value = daysValue;
    }
}

// function attachEventsListeners() {
//     // Get references to input elements and buttons
//     const daysInput = document.getElementById('days');
//     const hoursInput = document.getElementById('hours');
//     const minutesInput = document.getElementById('minutes');
//     const secondsInput = document.getElementById('seconds');

//     const daysBtn = document.getElementById('daysBtn');
//     const hoursBtn = document.getElementById('hoursBtn');
//     const minutesBtn = document.getElementById('minutesBtn');
//     const secondsBtn = document.getElementById('secondsBtn');

//     // Attach event listeners to the buttons
//     daysBtn.addEventListener('click', convertDays);
//     hoursBtn.addEventListener('click', convertHours);
//     minutesBtn.addEventListener('click', convertMinutes);
//     secondsBtn.addEventListener('click', convertSeconds);

//     // Conversion function for days
//     function convertDays() {
//         let daysValue = parseInt(daysInput.value, 10);
//         let hoursValue = daysValue * 24;
//         let minutesValue = hoursValue * 60;
//         let secondsValue = minutesValue * 60;

//         // Update other input values
//         updateInputValues(hoursInput, hoursValue);
//         updateInputValues(minutesInput, minutesValue);
//         updateInputValues(secondsInput, secondsValue);
//     }

//     // Conversion function for hours
//     function convertHours() {
//         let hoursValue = parseInt(hoursInput.value, 10);
//         let daysValue = hoursValue / 24;
//         let minutesValue = hoursValue * 60;
//         let secondsValue = minutesValue * 60;

//         // Update other input values
//         updateInputValues(daysInput, daysValue);
//         updateInputValues(minutesInput, minutesValue);
//         updateInputValues(secondsInput, secondsValue);
//     }

//     // Conversion function for minutes
//     function convertMinutes() {
//         let minutesValue = parseInt(minutesInput.value, 10);
//         let hoursValue = minutesValue / 60;
//         let daysValue = hoursValue / 24;
//         let secondsValue = minutesValue * 60;

//         // Update other input values
//         updateInputValues(hoursInput, hoursValue);
//         updateInputValues(daysInput, daysValue);
//         updateInputValues(secondsInput, secondsValue);
//     }

//     // Conversion function for seconds
//     function convertSeconds() {
//         let secondsValue = parseInt(secondsInput.value, 10);
//         let minutesValue = secondsValue / 60;
//         let hoursValue = minutesValue / 60;
//         let daysValue = hoursValue / 24;

//         // Update other input values
//         updateInputValues(minutesInput, minutesValue);
//         updateInputValues(hoursInput, hoursValue);
//         updateInputValues(daysInput, daysValue);
//     }

//     // Helper function to update input values
//     function updateInputValues(inputElement, value) {
//         inputElement.value = value;
//     }
// }
