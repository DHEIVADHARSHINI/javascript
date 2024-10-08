// Manipulating arrays with push, pop and join

var items = [];
var item = "The Pyramids";
var removed;

items.push(item);
items.push("The Grand Canyon");
items.push("Bondi Beach");

console.log(items); 

removed = items.pop();

console.log(removed + " was removed");  
console.log(items.join(" and "));  


// 1) Push another item onto the array.
items.push("Mount Everest");
console.log(items);  // ["The Pyramids", "The Grand Canyon", "Mount Everest"]

// 2) Log the joined items.
console.log(items.join(" and "));  // "The Pyramids and The Grand Canyon and Mount Everest"

// 3) Set one of the items using square brackets.
items[2] = "The Taj Mahal";
console.log(items);  // ["The Pyramids", "The Grand Canyon", "The Taj Mahal"]

// 4) Can you push more than one item at a time?
items.push("Niagara Falls", "Great Wall of China");
console.log(items);  // ["The Pyramids", "The Grand Canyon", "The Taj Mahal", "Niagara Falls", "Great Wall of China"]

// Log the final joined items
console.log(items.join(" and "));  // "The Pyramids and The Grand Canyon and The Taj Mahal and Niagara Falls and Great Wall of China"



/* Further Adventures
 *
 * 1) Push another item onto the array.
 *
 * 2) Log the joined items.
 *
 * You can set an array element by using its index.
 * items[2] = "The Taj Mahal"
 *
 * 3) Set one of the items using square brackets.
 *
 * 4) Can you push more than one item at a time?
 *
 */