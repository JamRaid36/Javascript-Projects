
function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + "A" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}



function Call_Loop() { //Loop that demonstrates increment increase to specidied sum and then displays a message at it finish
    var finish = "This loop came to an end once Y reached "
    var Y = 2;
    var Z = 22;
    while (Y < Z) {
        Y++;
    }
    document.getElementById("Loop").innerHTML = finish + Y

}

//Utilizing Length Property to return length of string

let str = "How long is this string?";
let How_Long = str.length
console.log(How_Long)

//Utilizing a for loop

var Instruments = ["Guitar", "Cello", "Fiddle", "Keyboard", "Drums"];
var Content = "";
var T;

function for_Loop() {
    for (T = 0; T < Instruments.length; T++) {
        Content += Instruments[T] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//Utilizing function to display data from an array

function array_Function() {
    var Guitar_Pic = []
    Guitar_Pic[0] = "Taylor";
    Guitar_Pic[1] = "Gibson";
    Guitar_Pic[2] = "Martin";
    Guitar_Pic[3] = "Olson";
    Guitar_Pic[4] = "Mcpherson";
    document.getElementById("Array").innerHTML = "This is my " + Guitar_Pic[1] + " acoustic. It's one of my favorites."
}

//created an object within a function utilizing const as well as added properties and changed values

function constant_function() {
    const person = {
        name: 'Jason',
        height: "5'10",
        eyecolor:"blue",
        age: 35
    };
    person.age = 36
    person.haircolor= "blonde";

    document.getElementById("Constant").innerHTML = person.haircolor
}

//Utilizing let , demonstrates the block scope of let vs var that doesn't have block scope

function let_Function() {
    var b = "this sentence";
    document.getElementById("let").innerHTML = b;
    {
        let b = "that sentence"
        document.getElementById("let").innerHTML += "<br>" + b;
    }
        document.getElementById("let").innerHTML += "<br>" + b;
}   

//Return statements stop the execution of a function and return a value


function Return_Function(a, b) { 
    var a = "This is the"
    var b = " return function"
    return a + b
};
document.getElementById("return").innerHTML = Return_Function();

// created an object using let with properties and method as well as return

let food = {
    type: "burger",
    prepared: "medium rare",
    sauce: "mustard",
    topping: "lettuce",
    description : function() {
        return "Joe chose a " + this.type + ", " + this.prepared + " with " + this.topping + " and " + this.sauce + ".";
    }
};
document.getElementById("food_object").innerHTML = food.description();

//function utilizing for loop with break (breaks all iterations after)

function tower_Loop() {
    let base = "";
    for (let ar = 0; ar < 5; ar++) {
        if (ar === 2) { break; }
        base += "This tower is " + ar + " feet high" + "<br>";
    }
    document.getElementById("tower").innerHTML = base
}

//function utilizing for loop with continue (breaks only specified iteration)

function tower2_Loop() {
    let base = "";
    for (let t = 0; t < 8; t++) {
        if (t === 2) { continue; }
        base += "This tower is " + t + " feet high" + "<br>";
    }
    document.getElementById("tower2").innerHTML = base
}