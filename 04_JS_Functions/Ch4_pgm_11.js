// Using the same function with multiple objects

var movie1;
var movie2;
var movie3;
var movie;
var showMovieInfo;

movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
    title: "Spectre",
    actors: "Daniel Craig, Christoph Waltz",
    directors: "Sam Mendes"
};

movie3 = {
    title: "Star Wars: Episode VII - The Force Awakens",
    actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
    directors: "J.J.Abrams"
};

showMovieInfo = function () {
    console.log("Movie information for " + movie.title);
    console.log("------------------------------");
    console.log("Actors: " + movie.actors);
    console.log("Directors: " + movie.directors);
    console.log("------------------------------");
};

movie = movie1;
showMovieInfo();

movie = movie2;
showMovieInfo();

movie = movie3;
showMovieInfo();

var question1;
var question2;
var question3;
var question;
var quizInfo;

question1 = {
    Question: 'What is the capital of France?',
    Option: "A) Berlin , B) Madrid , C) Paris , D) Rome",
    Answer: 'C) Paris'
};

question2 = {
    Question: 'Which planet is known as the Red Planet?',
    Option: "A) Venus , B) Mars , C) Earth , D) Jupiter ",
    Answer: ' B) Mars '
};

question3 = {
    Question: ' What is the chemical symbol for water? ',
    Option: "A) CO2 , B) O2 , C) NaCl , D) H2O ",
    Answer: ' D) H2O '
};

quizInfo = function () {
    console.log("Question : " + question.Question);
    console.log("Option : " + question.Option);
    console.log("----------------------------------------------------------------");
    console.log("----------------------------------------------------------------");
    console.log("Answer : " + question.Answer);
    console.log("----------------------------------------------------------------");
};

question = question1;
quizInfo();

question = question2;
quizInfo();

question = question3;
quizInfo();







/* Further Adventures
 *
 * 1) Create an object to represent
 *    a multiple choice quiz question.
 *
 * 2) Create two more quiz question objects.
 *
 * 3) Create a function to show
 *    the question and answer options.
 *
 * 4) Use the same variable assignment technique
 *    as above to display all three questions
 *    on the console.
 *
 */