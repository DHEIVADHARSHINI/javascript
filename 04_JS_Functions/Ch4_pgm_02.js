// Displaying information from similar objects

var movie1;
var movie2;
var movie3;
var movie4;

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

movie4 = {
  title: "Fantasy World",
  actors : "kamal , John, Amy",
  directors: "Leo"
}

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");

console.log("Movie information for " + movie2.title);
console.log("------------------------------");
console.log("Actors: " + movie2.actors);
console.log("Directors: " + movie2.directors);
console.log("------------------------------");

console.log("Movie information for " + movie3.title);
console.log("------------------------------");
console.log("Actors: " + movie3.actors);
console.log("Directors: " + movie3.directors);
console.log("------------------------------");

console.log("Movie information for " + movie4.title);
console.log("------------------------------");
console.log("Actors: " + movie4.actors);
console.log("Directors: " + movie4.directors);
console.log("------------------------------");

var event1;
var event2;
var event3;

event1 = {
  location : "Coimabtore",
  date : "09-11-2024",
  time : "09:00 pm"
}

event2 = {
  location : "Chennai",
  date : "26-11-2024",
  time : "09:30 pm"
}

event3 = {
  location : "Madurai",
  date : "21-12-2024",
  time : "09:00 pm"
}

console.log("EVENT LOCATION " +event1.location);
console.log("------------------------------");
console.log("Date : " + event1.date);
console.log("Time : " + event1.time);
console.log("------------------------------");

console.log("EVENT LOCATION " +event2.location);
console.log("------------------------------");
console.log("Date : " + event2.date);
console.log("Time : " + event2.time);
console.log("------------------------------");

console.log("EVENT LOCATION " +event3.location);
console.log("------------------------------");
console.log("Date : " + event3.date);
console.log("Time : " + event3.time);
console.log("------------------------------");


/* Further Adventures
 *
 * 1) Add a fourth movie and display its info
 *
 * 2) All the movie info is in one big block on the console.
 *    Change the code to space out the different movies.
 *
 * 3) Create objects to represent three calendar events
 *
 * 4) Display info from the three events on the console.
 *
 */