function lockedProfile() {
    // Get all buttons inside elements with the class 'profile'
    let buttons = document.querySelectorAll('.profile button');

    // Iterate over each button
    for (let button of buttons) {
        // Add a click event listener to each button
        button.addEventListener('click', function () {
            // Get the checked value of the corresponding lock/unlock radio button for each profile
            let user1LockStatus = document.querySelector('input[name="user1Locked"]:checked').value;
            let user2LockStatus = document.querySelector('input[name="user2Locked"]:checked').value;
            let user3LockStatus = document.querySelector('input[name="user3Locked"]:checked').value;

            // Get the hidden fields div elements for each profile
            let user1Div = document.getElementById("user1HiddenFields");
            let user2Div = document.getElementById("user2HiddenFields");
            let user3Div = document.getElementById("user3HiddenFields");

            // Check if the lock status is 'unlock' for each profile
            if (user1LockStatus === 'unlock') {
                // If the button text is 'Show more', display the hidden fields and change button text to 'Hide it', else hide the fields and change button text to 'Show more'
                if (button.textContent === 'Show more') {
                    user1Div.style.display = 'block';
                    button.textContent = 'Hide it';
                } else {
                    user1Div.style.display = 'none';
                    button.textContent = 'Show more';
                }
            } else if (user2LockStatus === 'unlock') {
                // Repeat the same logic for user2
                if (button.textContent === 'Show more') {
                    user2Div.style.display = 'block';
                    button.textContent = 'Hide it';
                } else {
                    user2Div.style.display = 'none';
                    button.textContent = 'Show more';
                }
            } else if (user3LockStatus === 'unlock') {
                // Repeat the same logic for user3
                if (button.textContent === 'Show more') {
                    user3Div.style.display = 'block';
                    button.textContent = 'Hide it';
                } else {
                    user3Div.style.display = 'none';
                    button.textContent = 'Show more';
                }
            }
        });
    }
}
