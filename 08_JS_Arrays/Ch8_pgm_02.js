// Using existing objects in an array

var place1 = { name : "The Pyramids", country : "Egypt" };
var place2 = { name : "The Grand Canyon", country : "USA" };
var place3 = { name : "Bondi Beach", country : "Australia" };

var thisYear = [ place1, place2 ];
var nextYear = [ place3 ];

console.log("This year : ", thisYear);
console.log("Next year : ", nextYear);

nextYear.push(place1);

console.log("Updated next year:", nextYear);
console.log("This year still:", thisYear);



/* Further Adventures
 *
 * 1) Add place1 to the nextYear array.
 *    Can it be in two arrays at once?
 *
 * 2) Run the program again to check if an
 *    object can be in two arrays at once.
 *
 */