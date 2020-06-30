let keyA = document.getElementById("keyA");
let keyS = document.getElementById("keyS");
let keyD = document.getElementById("keyD");
let keyF = document.getElementById("keyF");
let keyG = document.getElementById("keyG");
let keyH = document.getElementById("keyH");
let keyJ = document.getElementById("keyJ");


document.addEventListener("keydown", function (event) {
    if (event.key == "a") {
        keyA.setAttribute("class", "active");
        console.log("The '" + event.key + "' has been pressed.");
    }
    if (event.key == "s") {
        keyS.setAttribute("class", "active")
        console.log("The '" + event.key + "' has been pressed.");
    }
    if (event.key == "d") {
        keyD.setAttribute("class", "active")
        console.log("The '" + event.key + "' has been pressed.");
    }
    if (event.key == "f") {
        keyF.setAttribute("class", "active")
        console.log("The '" + event.key + "' has been pressed.");
    }
    if (event.key == "g") {
        keyG.setAttribute("class", "active")
        console.log("The '" + event.key + "' has been pressed.");
    }
    if (event.key == "h") {
        keyH.setAttribute("class", "active")
        console.log("The '" + event.key + "' has been pressed.");
    }
    if (event.key == "j") {
        keyJ.setAttribute("class", "active")
        console.log("The '" + event.key + "' has been pressed.");
    }
})

document.addEventListener("keyup", function (event) {
    if (event.key == "a") {
        keyA.removeAttribute("class");
    }
    if (event.key == "s") {
        keyS.removeAttribute("class");
    }
    if (event.key == "d") {
        keyD.removeAttribute("class");
    }
    if (event.key == "f") {
        keyF.removeAttribute("class");
    }
    if (event.key == "g") {
        keyG.removeAttribute("class");
    }
    if (event.key == "h") {
        keyH.removeAttribute("class");
    }
    if (event.key == "j") {
        keyJ.removeAttribute("class");
    }
})