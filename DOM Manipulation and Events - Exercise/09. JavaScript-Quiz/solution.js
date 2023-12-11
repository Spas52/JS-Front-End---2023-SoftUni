function solve() {
  // Array of correct answers
  const correctAnswers = [
    "onclick",
    "JSON.stringify()",
    "A programming API for HTML and XML documents",
  ];

  // Array of question sections
  const questionsSections = Array.from(
    document.querySelectorAll("#quizzie > section"),
  );

  // NodeList of answer buttons
  const possibleAnswersBtns = document.querySelectorAll(".quiz-answer");

  // Result container element
  const resultContainer = document.querySelector("#results h1");

  // Counter for correct answers
  let correctAnswersCount = 0;

  // Add click event listeners to answer buttons
  for (const button of possibleAnswersBtns) {
    button.addEventListener("click", handleClickedAnswer);
  }

  // Event handler for clicked answer
  function handleClickedAnswer(e) {
    // Get the text content of the clicked answer
    const clickedAnswerText =
      e.currentTarget.querySelector(".answer-text").textContent;

    // Check if the clicked answer is correct and update the counter
    if (correctAnswers.includes(clickedAnswerText)) {
      correctAnswersCount++;
    }

    // Show the next question
    showNextQuestion();
  }

  // Function to show the next question or display results
  function showNextQuestion() {
    // Hide the previous question
    const previousQuestion = questionsSections.shift();
    previousQuestion.style.display = "none";

    // Get the next question
    const newQuestion = questionsSections[0];

    // Check if there are more questions
    if (!newQuestion) {
      // Display the results section
      resultContainer.parentElement.parentElement.style.display = "block";

      // Update the result message based on the number of correct answers
      if (correctAnswersCount === 3) {
        resultContainer.textContent =
          "You are recognized as top JavaScript fan!";
      } else {
        resultContainer.textContent = `You have ${correctAnswersCount} right answers`;
      }
    } else {
      // Show the next question
      newQuestion.style.display = "block";
    }
  }
}