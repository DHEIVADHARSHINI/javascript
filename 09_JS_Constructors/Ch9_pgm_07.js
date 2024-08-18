// A quiz question constructor

var QuizQuestion = function (question, answer) {
    this.question = question;
    this.answer = answer;
    this.options = [];
  
    this.addOption = function (option) {
        this.options.push(option);
    };
  
    this.showQuestion = function () {
        console.log(this.question);
        this.options.forEach(function (option, i) {
            console.log("(" + (i + 1) + ") " + option);
        });
    };
};

// Creating the first question and adding options
var question1 = new QuizQuestion(
    "What is the capital of France?",
    "Paris"
);

question1.addOption("Bordeaux");
question1.addOption("Lyon");
question1.addOption("Paris");
question1.addOption("Brussels");
question1.addOption("Marseille"); // Adding a fifth option

question1.showQuestion();

// Creating two more questions
var question2 = new QuizQuestion(
    "What is the largest planet in our solar system?",
    "Jupiter"
);

question2.addOption("Earth");
question2.addOption("Mars");
question2.addOption("Jupiter");
question2.addOption("Saturn");

var question3 = new QuizQuestion(
    "Which element has the chemical symbol 'O'?",
    "Oxygen"
);

question3.addOption("Oxygen");
question3.addOption("Gold");
question3.addOption("Osmium");
question3.addOption("Hydrogen");

// You can now display these questions and check their answers
// In the console, you would type the following:

// To show question2 and its options
question2.showQuestion();

// To display the answer to question2
console.log("Answer:", question2.answer);

// To show question3 and its options
question3.showQuestion();

// To display the answer to question3
console.log("Answer:", question3.answer);

/* Further Adventures
 *
 * 1) Add a fifth option to question1.
 *
 * 2) Create two more questions.
 *
 * 3) At the console prompt type
 *    question2.showQuestion();
 *    Press Enter
 *
 * 4) At the console prompt type
 *    question2.answer;
 *    Press Enter
 *
 */