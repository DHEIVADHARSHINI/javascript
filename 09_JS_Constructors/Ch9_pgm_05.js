var Planet = function (name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;
    this.moons = [];
  
    this.showPlanet = function () {
        var info = this.name + ": planet " + this.position;
        info +=  " - " + this.type;
        console.log(info);
        console.log("Moons: " + (this.moons.length > 0 ? this.moons.join(', ') : "None") + ".");
    };
  
    this.addMoon = function (moon) {
        this.moons.push(moon);
    };

    // Method to remove the last moon from the moons array
    this.removeMoon = function () {
        if (this.moons.length > 0) {
            return this.moons.pop();
        } else {
            console.log("No moons to remove.");
            return null;
        }
    };
};

// Create a second planet
var planet2 = new Planet("Xanadu", 7, "Fictional");

// Add three moons to the second planet
planet2.addMoon("Luna");
planet2.addMoon("Titan");
planet2.addMoon("Ganymede");


planet2.showPlanet();
planet2.removeMoon(); 
planet2.showPlanet(); 




/* Further Adventures
 *
 * 1) Create a second planet.
 *    Make one up if you like.
 *
 * 2) Add three moons to the second planet.
 *
 * 3) Call the showPlanet method
 *    on the second planet.
 *
 * 4) Add a removeMoon method
 *    that removes the last moon
 *    from the moons array.
 *
 */