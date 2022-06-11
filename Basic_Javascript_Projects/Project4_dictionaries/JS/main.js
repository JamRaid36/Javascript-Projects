
function my_Dictionary() { // KVP Guitar Dictionary 
    var Guitar = {
        Style:"Electric",
        Strings:6,
        Color:"Tobacco Burst",
        Brand:"Gibson",
        Year:"1957",
        Name:"Les Paul"
    };
    document.getElementById("Dictionary").innerHTML = Guitar.Name;
}

function my_Dictionary2() { // KPP Guitar Dictionary 2 with delete operator being utilized
    var Guitar = {
        Style:"Electric",
        Strings:6,
        Color:"White",
        Brand:"Fender",
        Year:"1960",
        Name:"Stratocaster"
    };
    delete Guitar.Year;
    document.getElementById("Dictionary2").innerHTML = Guitar.Year;
}

