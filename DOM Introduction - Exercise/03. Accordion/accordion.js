function toggle() {
    var extraDiv = document.getElementById('extra');
    var button = document.querySelector('.head .button');

    // Toggle display property
    if (extraDiv.style.display === 'none' || extraDiv.style.display === '') {
        extraDiv.style.display = 'block';
        button.textContent = 'Less';
    } else {
        extraDiv.style.display = 'none';
        button.textContent = 'More';
    }
}