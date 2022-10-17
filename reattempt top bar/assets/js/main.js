function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += "responsive";
    } else {
        x.className = "topnav";
    }

    let y = document.getElementById("h1");
    if (y.className === "h1") {
        y.className += "responsive";
    } else {
        y.className = "h1";
    }

    let z = document.getElementById("gsbutton");
    if (z.className === "width") {
        z.className += "responsive";
    } else {
        z.className = "width";
    }
}