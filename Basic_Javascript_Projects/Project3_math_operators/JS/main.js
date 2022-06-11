
function addition_Function() { // utilizing + operator
    var addition = 10 + 12;
    document.getElementById("Math").innerHTML = "10 + 12 = " + addition
}

function subtraction_Function() { // utilizing - operator
    var Subtraction = 5 - 2;
    document.getElementById("Minus").innerHTML = "5 - 2 = " + Subtraction
}

function multiplication_Function() { // utilizing * operator
    var simp_Math = 10 * 2;
    document.getElementById("Multiply").innerHTML = "10 * 2 = " + simp_Math
}

function division_Function() { // utilizing / operator
    var simp_Math = 10 / 5;
    document.getElementById("Divide").innerHTML = "10 / 5 = " + simp_Math
}

function more_Math() { // utilizing multiple math operators
    var simple_Math = (5 + 7) * 20 / 24 -5;
    document.getElementById("moreMath").innerHTML = "(5 + 7) * 20 / 24 -5 = " + simple_Math
}

function modulus_Operator() { // utilizing % modulus operator
    var simple_Mod = 51 % 25;
    document.getElementById("Mod").innerHTML = "When you divide 51 by 25 you have a remainder of: " + simple_Mod
}

function negation_Operator() { // utilizing negate operator
    var x= 15;
    document.getElementById("negOp").innerHTML = -x
}
 
function increment_Operator() { // utilizing increment operator
    var y = 6 ;
    y++;
    document.write(y);
}

function decrement_Operator() { // utilizing decrement operator
    var x = 6;
    x--;
    document.write(x);
}
 

document.getElementById("random").innerHTML = Math.random();

//window.alert(Math.random() * 10); // utilizing random operator between 1 and 10 (commented out because alerts are annoying)

document.getElementById("pi").innerHTML = Math.PI; // utilizing math object pi

document.getElementById("square").innerHTML = Math.SQRT2; // utilizing math object 2 squared

document.getElementById("pow").innerHTML = Math.pow(5,2); // utilizing math object power