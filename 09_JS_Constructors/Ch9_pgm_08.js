// A calendar event constructor

var CalendarEvent = function (title, startDate, startTime, endTime) {
    this.title = title;
    this.startDate = startDate;
    this.startTime = startTime;
    this.endTime = endTime;
  
    this.showEvent = function () {
        var dateString = this.startDate + " - (" + this.startTime + " - " + this.endTime + ")";
        console.log(this.title + ": " + dateString);
    };
};

// Create the first calendar event
var calEvent1 = new CalendarEvent(
    "Annual Review",
    "3/5/16",
    "4.00pm",
    "5.00pm"
);

// Create a second calendar event
var calEvent2 = new CalendarEvent(
    "Team Meeting",
    "3/6/16",
    "10.00am",
    "11.00am"
);

// Call the showEvent method on both events
calEvent1.showEvent(); // Outputs: Annual Review: 3/5/16 - (4.00pm - 5.00pm)
calEvent2.showEvent(); // Outputs: Team Meeting: 3/6/16 - (10.00am - 11.00am)




/* Further Adventures
 *
 * 1) Add a second event.
 *
 * 2) Call the showEvent method on your
 *    new calendar event.
 *
 * 3) Update the showEvent method so that
 *    its output looks like this:
 *    Annual Review: 3/5/16 - (4.00pm - 5.00pm)
 *
 */