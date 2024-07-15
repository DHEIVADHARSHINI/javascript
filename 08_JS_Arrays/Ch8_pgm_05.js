// Passing an array to a function

var getVisitorReport = function (visitorArray, dayInWeek) {
	var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday"
  ];
	var index = dayInWeek - 1;
	var visitorReport;

	visitorReport = "There were ";
  visitorReport += visitorArray[index];
  visitorReport += " visitors ";
	visitorReport += "on " + days[index];

	return visitorReport;
};

var visitors = [ 354, 132, 210, 221, 481 ];

var report = getVisitorReport(visitors, 2);

console.log(report);

var fridayReport = getVisitorReport(visitors, 5);
console.log(fridayReport);

var getVisitorReportUpdated = function(visitorArray, dayInWeek) {
  var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  var index = dayInWeek - 1;
  var visitorReport = "There were ";
  visitorReport += visitorArray[index];
  visitorReport += " visitors ";
  visitorReport += "on " + days[index];
  return visitorReport;
}; 
var sundayReport = getVisitorReportUpdated(visitors, 7);
console.log(sundayReport);

var getMonthlyVisitorReport = function(monthArray, weekIndex, dayIndex) {
  var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  var week = monthArray[weekIndex - 1];
  var visitorReport = "There were ";
  visitorReport += week[dayIndex - 1];
  visitorReport += " visitors ";
  visitorReport += "on " + days[dayIndex - 1];
  return visitorReport;
};

var week1 = [354, 132, 210, 221, 481];
var week2 = [300, 150, 180, 200, 400];
var week3 = [400, 200, 250, 300, 600];
var week4 = [450, 250, 300, 350, 700];
var month = [week1, week2, week3, week4];

var monthlyReport1 = getMonthlyVisitorReport(month, 1, 3); // Week 1, Wednesday
console.log(monthlyReport1);

var monthlyReport2 = getMonthlyVisitorReport(month, 3, 5); // Week 3, Friday
console.log(monthlyReport2);


/* Further Adventures
 *
 * 1) Run the report for Friday.
 *
 * 2) Update the function to include Saturday and Sunday.
 *
 * A month of visitor info could be represented as an
 * array of arrays: [ week1, week2, week3, week4 ]
 * where each week could be an array of visitor numbers.
 *
 * 3) Write a new function with three parameters,
 *    the month array, the week wanted and the day wanted.
 *    The new function should return the visitor report specified.
 *    You can call getVisitorReport from your function if you want.
 *
 * 4) Create four arrays of week visitor numbers
 *    and a month array of the four weeks.
 *    Test your function from 3) for different weeks and days.
 *
 */