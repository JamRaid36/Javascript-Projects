








var ab ="Hope this"; // defining a variable

var bc =" is right!"; // defining another variable

document.write(ab + bc) // concatenating both variables!


var Type= "Electric Guitars", A= ", Stratocaster", B= ", Les Paul", C= ", Telecaster"

document.write(Type + A) //This is mutliple variables assigned in one statement and multiple variables displayed in the html document.


window.alert(B+C) //This is utilizing window.alert with a previously created variables and concatenating them together


(4*4) //This is an expression

document.write(4*4); //This is a statement containing an expression.



//I'm not sure I fully comprehend functions. The basic concept i think I get but the language and terms are a bit confusing
//Don't understand the purpose of the id=Button_Text.


function Its_a_function() {           //Defining a function and naming it
    var str= "Hmm, not sure what this does!";  //Defining the variable and giving it
                                         //a string value
    document.getElementById("Button_Text").innerHTML = str; //Putting the value
                                        //of the variable into the HTML elementFromPoint
                                        //with the "Button_Text" id
}