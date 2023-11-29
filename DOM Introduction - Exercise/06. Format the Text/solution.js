function solve() {
  // Get the input text from the textarea and split it into sentences
  let inputArr = document.getElementById("input").value.split(".");
  
  // Filter out empty sentences and add a period back to each sentence
  let formatedInput = inputArr.filter(w => w.trim()).map(w => w + ".");
  
  // Get the output div element
  let output = document.getElementById("output");
  // Clear the existing content in the output div
  output.textContent = "";

  // Process the formatted sentences and create paragraphs with up to 3 sentences each
  while (formatedInput.length > 0) {
    // Take the next 3 sentences (or fewer if there are less than 3)
    let text = formatedInput.splice(0, 3); 
    // Create a new paragraph element
    let p = document.createElement("p");

    // Join the sentences and set the content of the paragraph
    p.textContent = text.join("");
    
    // Append the paragraph to the output div
    output.appendChild(p);
  }
}