// Returning the sum of two numbers

var add = function (number1, number2) {
	var total = number1 + number2;
	return total;
};

var sum = add(21, 9);
console.log('The Sum of 21 and 09 is ' + sum);

var newSum = add(15, 30);
console.log(newSum);  

var sum3 = add(add(10, 20), 30);
console.log(sum3);

var addThreeNumbers = function (number1, number2, number3) {
    var total = number1 + number2 + number3;
    return total;
};

var sumOfThree = add(add(10, 20), 30);
console.log(sumOfThree);  



/* Further Adventures
 *
 * 1) Find and display the sum of
 *    a different pair of numbers
 *
 * 2) Change the call to console.log so that
 *    the display on the console reads:
 *    'The sum of 50 and 23 is 73'
 *    using the add function to generate the answer.
 *
 * 3) Can you use the add function as it is
 *    to add more than two numbers?
 *    Hint: You can nest calls to add.
 *
 * 4) Create a function to return the sum of
 *    three numbers given as arguments.
 *
 */