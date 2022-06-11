
document.write(typeof "ten"); // typof operator
 

function coercion() { // created function and added coercion function to a button utilizing document.write() method
    var x = "ten" + 10
    document.write(x);
}

function my_Function() {
    document.getElementById("Test").innerHTML = isNaN('899'); //NAN true (string) and false (899) as well as display NAN (= 0/0)
}

document.write(2E310); // infinity

document.write(-5E310); // -infinity


function infinity() { 
    var N = 2E310
    document.write(N); // created function to display infinity after event handler button is clicked
}

function neg_Infinity() { 
    var I = -5E310
    document.write(I); // created function to display -infinity after event handler button is clicked
}

document.write(10>2); // greater than operator Boolean True

document.write(10<2); // Less than operator Boolean False

console.log(2+2);

console.log(10<2)

document.write(11 == 11) // == Checking wether data on left side is equal date on the right side (True)

document.write(2 == 12) // False

A=5
B=5
document.write(A === B) // == Checking wether data and data types on left side and right side are equal (True)

E=5
F="ten"

document.write(E === F) //False


C=5
D="5"

document.write(C === D) //False


G=5
H=10

document.write(G === H) //False

// && AND OPERATOR, || OR OPERATOR, ! NOT OPERATOR


document.write(5 > 2 && 10 > 4) //True

document.write(5 > 2 && 10 < 4) //False

document.write(5 > 10 || 10 > 4) //True

document.write(5 > 10 || 2 > 4) //False


function false_Or() {  
    var K = 5 > 10 || 2 > 4 //False OR statement function
    document.write(K); 
}

function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);    //Function utilizing NOT to return false statement
}

function not_FunctionTrue() {
    document.getElementById("notTrue").innerHTML = !(2 > 10); //Function utilizing NOT to return true statement
}