
function Make_it_whole() { //utilized concat method to combine all strings
    var first = "I will make ";
    var second = "it all ";
    var third = "come togethor.";
    var connection_Point = first.concat(second, third);
    document.getElementById("Connect").innerHTML = connection_Point;
}

function trySlice() { //Sliced a piece of text out with .slice method
    var sentance_1 = "This is my first sentance slice.";
    var piece = sentance_1.slice(11,25);
    document.getElementById("tryASlice").innerHTML = piece;
}

function bringItUp() { // utilized toUpperCase to change a string into all upper case letters without changing anything else.
    let this_text = "I'm taking us through the roof!";
    let finish = this_text.toUpperCase();
    document.getElementById("upper").innerHTML = finish;
}

function lookForIt() { // utilized search() method to find the index of its match 
    let str = "How many times have I heard that before?";
    document.getElementById("look").innerHTML = str.search("times");
}

function number_String_Method() { //Utilized number to string method
    var Y = 687;
    document.getElementById("Numbers_String").innerHTML = Y.toString();
}

function precision_Meth() { //Utilized toPrecision method, rounding at the 8th number
    var X = 1453.985678;
    document.getElementById("precise").innerHTML = X.toPrecision(8);
}

function toFixed_Meth() { //utilized toFixed method. This changes the number to a string and rounds to specified decimal place.
    var N = 15.986
    document.getElementById("fixed").innerHTML = N.toFixed(2)
}

number = new Number(563); // utilized valueOf method with console.log to return the primitive value of the object, essentially extracting the string value from the new object that was created
console.log(number);
console.log(number.valueOf());
  
