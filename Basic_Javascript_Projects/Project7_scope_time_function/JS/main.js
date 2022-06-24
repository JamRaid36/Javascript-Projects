var x=12

function glob_Test() { // Global variable
document.write ("Hello World!" + "<br>" + x);
}

glob_Test();

function loc_Test() { // Local variable
    var Y=5
    document.write ("<br>" + "This is" + "<br>" + Y);
}

loc_Test();


function errFix() { // this has an intentional error, utilizing console.log we can see that a variable is not defined
    var x
    console.log("fixit").innerHTML = (6 + x)

}

function date_Gethours() { // if statement utilizing new Date().getMinutes method
    if (new Date().getMinutes() > 5) {
        document.getElementById("date").innerHTML = "Time has ellapsed, please wait for the next round to begin!";
    }
}

function if_StatementOne() { //If statement
    if (6 > 5) {
        document.getElementById("tryIf").innerHTML = "So good to see you!";
    }
}

function if_ElseBeerStatement() { //If and Else statement
    beers = document.getElementById("beers").value;
    if (beers >= 3) {
        drive = "You are above the legal limit and not authorized to drive!";
    }
    else {
        drive = "You are below the legal limit, you may proceed!";
    }
    document.getElementById("Number_of_beers").innerHTML = drive;
}

function Time_function() {  //else if conditional statement
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("time_of_day").innerHTML = Reply;
}