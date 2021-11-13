var btns = document.querySelectorAll("button.drum");


for ( i = 0; i < btns.length ; i++) {
    btns[i].addEventListener("click", function() {
        soundBoard(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

document.addEventListener("keydown", function(event) {
    soundBoard(event.key);
    buttonAnimation(event.key);
});


function soundBoard(para) {
    switch (para) {
        case "z":
            new Audio("./sounds/tom1.mp3").play();
        break;

        case "q":
            new Audio("./sounds/tom2.mp3").play();
        break;

        case "s":
            new Audio("./sounds/tom3.mp3").play();
        break;

        case "d":
            new Audio("./sounds/tom4.mp3").play();
        break;

        case "j":
            new Audio("./sounds/snare.mp3").play();
        break;

        case "k":
            new Audio("./sounds/crash.mp3").play();
        break;

        case "l":
            new Audio("./sounds/kick.mp3").play();
        break;

        default:
            console.log(para);
        break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    if (activeButton === null) {
        console.log("No match.")
    } else {
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
    }
}











// var btns = document.querySelectorAll("button.drum");
// var fileNames = [];

// function SoundName (name) {
//     this.name=name;
// }

// for ( i = 0; i < btns.length ; i++) {
//    var fileName = window.getComputedStyle(btns[i]).getPropertyValue("background-image").split("/").pop();
//    fileName= "./sounds/" + fileName.slice(0, (fileName.length)-6) + ".mp3";
//    fileNames.push(fileName);
//    btns[i].addEventListener("click", function () {
//        new Audio(fileNames[i]).play()
//    });
// } 
