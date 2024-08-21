// Guess the random number

var getGuesser = function () {
  var secret = Math.floor(Math.random() * (50 - 30 + 1) + 30);

  return function (userNumber) {
    if (userNumber === secret) {
      return "Well done!";
    } else {
      return "Unlucky, try again.";
    }
  };
};

var guess = getGuesser();

var between = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Examples
console.log(between(1, 5));    // e.g., 3
console.log(between(100, 200)); // e.g., 145

  
  
  
  /* Further Adventures
   *
   * 1) Run the program.
   *
   * 2) Play the game a few times on the console.
   *    e.g. guess(2)
   *
   * 3) Change the code so the secret number is
   *    between 30 and 50.
   *
   * 4) Test your changes.
   *
   * CHALLENGE: Create a function called 'between'
   * that returns a random whole number between two
   * numbers passed as arguments.
   *
   * e.g. between(1, 5)      //   1 <= whole number <= 5
   *      between(100, 200)  // 100 <= whole number <= 200
   *
   */