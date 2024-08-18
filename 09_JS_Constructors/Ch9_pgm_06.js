var Planet = function (name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;
    this.moons = [];
  
    this.showPlanet = function () {
        console.log(this.name);
        console.log("Planet " + this.position + " - " + this.type);
        this.showMoons(); // Use the showMoons method to display moons with their index
    };
  
    this.addMoon = function (moon) {
        this.moons.unshift(moon); // Adds the moon to the beginning of the array
    };

    // New method to show moons with their index
    this.showMoons = function () {
        if (this.moons.length > 0) {
            this.moons.forEach(function(moon, index) {
                console.log("(" + index + ") " + moon);
            });
        } else {
            console.log("No moons.");
        }
    };

    // New method to get a moon by its index
    this.getMoon = function (index) {
        if (index >= 0 && index < this.moons.length) {
            return this.moons[index];
        } else {
            return null; // Return null if the index is out of bounds
        }
    };
};

// Creating planets and adding initial moons
var planet1 = new Planet("Jupiter", 5, "Gas Giant");
planet1.addMoon("Io");
planet1.addMoon("Europa");

var planet2 = new Planet("Neptune", 8, "Ice Giant");
planet2.addMoon("Triton");

var planet3 = new Planet("Mercury", 1, "Terrestrial");

// Adding a new moon to each planet
planet1.addMoon("Ganymede");
planet2.addMoon("Nereid");
planet3.addMoon("No moons");

// Showing each planet's details, including moons
[planet1, planet2, planet3].forEach(function (planet) {
    planet.showPlanet();
    console.log(""); // Add a blank line for better readability
});

// Example of using the getMoon method
console.log("planet1.getMoon(1):", planet1.getMoon(1)); // Outputs: Europa




/* Further Adventures
 *
 * 1) Add a new moon to each planet.
 *
 * 2) Create a showMoons method in the
 *    Planet constructor. It should
 *    show the moons with their index.
 *
 *    (0) Io
 *    (1) Europa
 *
 * 3) Update showPlanet to use showMoons
 *    rather than join for the moons.
 *
 * 4) Create a getMoon method that
 *    returns the moon at a given
 *    index.
 *
 *    > planet1.getMoon(1)
 *      Europa
 *
 */