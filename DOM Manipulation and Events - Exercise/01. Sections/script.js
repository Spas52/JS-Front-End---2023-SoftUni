function create(words) {
   // Iterate through each word in the array
   for (const word of words) {
       // Create a new <div> element
       let newDiv = document.createElement("div");

       // Create a new <p> element
       let newP = document.createElement("p");

       // Set the text content of the <p> element to the current word
       newP.textContent = word;

       // Set the initial display style to 'none' to hide the paragraph
       newP.style.display = 'none';

       // Append the <p> element to the new <div> element
       newDiv.appendChild(newP);

       // Append the new <div> element to the 'content' div
       document.getElementById('content').appendChild(newDiv);

       // Add a click event listener to the new <div> element
       newDiv.addEventListener('click', function () {
           // Toggle the display property of the <p> element
           if (newP.style.display === 'none') {
               newP.style.display = 'block';
           } else {
               newP.style.display = 'none';
           }
       });
   }
}
