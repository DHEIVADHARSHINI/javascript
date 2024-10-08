// Displaying a multiple choice question
var displayQuestion = function (questionAndAnswer) {
  var options = ["A", "B", "C", "D", "E"];
  
  console.log(questionAndAnswer.question);
  
  questionAndAnswer.answers.forEach(function (answer, i) {
    console.log(options[i] + " - " + answer);
  });
};

var question1 = {
  question: "What is the capital of France?",
  answers: [
    "Bordeaux",
    "F",
    "Paris",
    "Brussels"
  ],
  correctAnswer: "Paris"
};

var question2 = {
  question: "Which planet is known as the Red Planet?",
  answers: [
    "Earth",
    "Mars",
    "Venus",
    "Jupiter"
  ],
  correctAnswer: "Mars"
};

var question3 = {
  question: "What is the largest ocean on Earth?",
  answers: [
    "Atlantic Ocean",
    "Indian Ocean",
    "Arctic Ocean",
    "Pacific Ocean"
  ],
  correctAnswer: "Pacific Ocean"
};

// Array with the question objects
var questions = [question1, question2, question3];

// Use forEach to display each question
questions.forEach(displayQuestion);

/* You can run this in the console to display a particular question like this:
 * displayQuestion(question2);
 */

  
  
  
  /* Further Adventures
   *
   * 1) Add two more question objects.
   *
   * 2) Create an array with your question objects.
   *
   * 3) Use forEach to call displayQuestion on
   *    each of your questions.
   *
   * 4) Can you execute a command at the prompt
   *    to display a particular question?
   */