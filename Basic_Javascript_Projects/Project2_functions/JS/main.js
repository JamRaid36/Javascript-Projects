
//In this function identified 2 variables and brought them together using a button onclick handler

function Its_a_function() {          
    var strOne= "This is variable 1"; 
    var strTwo= " This is variable 2";                                 
    document.getElementById("hit").innerHTML = strOne + strTwo;
}

//This funtcion concatenates 2 variables using the += operator.
//Tie is the identifier and the event handler is clicking on the paragraph element with the Tie ID

function myFunction() {          
    var join = "This is a"; 
    join += " really cool function!";                                 
    document.getElementById("Tie").innerHTML = join;
}


function faveColor() { //This function prints my favorite color
    var x = "My favorite color is blue";
    document.getElementById("fave").innerHTML = x
}


function LbsToGrams(LBS) { // This function calulates lbs to grams. 
    var convert= (453.59237) * (LBS) + " grams"; //Using script after id placement in html seems to be required.
    document.getElementById("grams").innerHTML = convert
}

function faveCol(a) {// This Function returns my favorite color. Variable of fave + whatever I make (a) is returned in html
   var fave = "My favorite color is " + a;
   return fave
}


function myGreeting(a) {
    var greeting = "Hi! My name is " + a;
    return greeting;
}
