function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    let y = document.forms["myForm"]["lname"].value;
    let z = document.forms["myForm"]["phone"].value;
    
    if (x == "") {
      alert("Must fill out all fields");
      return false;
    }
    if (y == "") {
        alert("Must fill out all fields");
        return false;
      }
    if (z == "") {
        alert("Must fill out all fields");
        return false;
      }
}

