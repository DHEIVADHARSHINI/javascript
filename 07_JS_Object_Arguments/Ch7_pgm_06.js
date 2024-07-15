// Using Math.min and Math.max to constrain an argument

var line = function (lineLength) {
    var line = "========================================";
    lineLength = Math.max(0, lineLength);
    lineLength = Math.min(40, lineLength);
    return line.substr(0, lineLength);
  };

  for (var i = -20; i <= 60; i += 10) {
    console.log("Line length " + i + ": " + line(i));
}

var spaces = function (spaceLength) {
  var space = "                                        "; // 40 spaces
  spaceLength = Math.max(0, spaceLength);
  spaceLength = Math.min(40, spaceLength);
  return space.substr(0, spaceLength);
};

var emptyBox = function (width) {
  width = Math.max(2, width); // Ensure the width is at least 2
  width = Math.min(40, width); // Ensure the width is at most 40

  var horizontalLine = line(width);
  var spaceLine = "=" + spaces(width - 2) + "=";

  console.log(horizontalLine);
  for (var i = 0; i < 3; i++) {
      console.log(spaceLine);
  }
  console.log(horizontalLine);
};

console.log("Spaces length 10: '" + spaces(10) + "'");
console.log("Spaces length 20: '" + spaces(20) + "'");
console.log("Spaces length 40: '" + spaces(40) + "'");


console.log("Empty box with width 12:");
emptyBox(12);

console.log("Empty box with width 5:");
emptyBox(5);

console.log("Empty box with width 40:");
emptyBox(40);
  
  
  
  /* Further Adventures
   *
   * 1) Test line lengths from -20 to 60
   *    in steps of 10.
   *
   * 2) Define a spaces function that returns a string
   *    made up of a specified number of space characters.
   *    The line of spaces returned can have a length
   *    between 0 and 40.
   *
   * 3) Add an emptyBox function
   *    that draws an empty box of specified
   *    width and height 5.
   *
   *    emptyBox(12);
   *
   *    > ============
   *    > =          =
   *    > =          =
   *    > =          =
   *    > ============
   *
   */