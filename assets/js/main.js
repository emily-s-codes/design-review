function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += "responsive";
    } else {
        x.className = "topnav";
    }
}

function nightMode() {
    event.preventDefault();
    let x = document.getElementById("body");
    x.classList.toggle("night__mode");
}