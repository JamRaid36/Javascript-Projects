
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