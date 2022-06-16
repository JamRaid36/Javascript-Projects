
document.write(Bigger = (5 > 1) ? "Left number is bigger":"Right number is bigger");

//ternary functions

function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
} 


function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough":"You are old enough"
    document.getElementById("Vote").innerHTML= Can_vote + " to vote.";
}



function star_Function() {
    var stars, how_Many;
    stars = document.getElementById("stars").value;
    how_Many = (stars < 3) ? "You do not have enough stars":"You have enough stars";
    document.getElementById("pass").innerHTML= how_Many + " to pass.";
}

// object costructor functions with variables utilizing this and new keywords
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year;
}


function Candy(Texture, Flavor, Style) {
    this.Candy_Texture = Texture;
    this.Candy_Flavor = Flavor;
    this.Candy_Style = Style;
}

var Dave = new Candy("Creamy", "Milk Chocolate", "Candy Bar");
var Sarah = new Candy("Soft", "Cherry", "Gummy Bear")
var Gideon = new Candy("Hard", "Rasberry", "Lollipop")
function keyword_Function() {
    document.getElementById("New_and_This").innerHTML = "Dave really likes a " + Dave.Candy_Texture + " " + Dave.Candy_Flavor + " " + Dave.Candy_Style + ".";
}


// assigned object constructor function

function Shoe(style, color, brand, material) { // object constructor function
    this.style = style;
    this.color = color;
    this.brand = brand;
    this.material = material
}



function petBreed() {
    var breed = ", she's a toy poodle.";
    return breed
}

function myDog() { 
    var dog = "My dogs name is miss Frizzle";
    petBreed();
    document.getElementById("Nested_Function").innerHTML = dog + petBreed()
}

