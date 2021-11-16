// All variables are initialized;

var gameSequence = [];
var playerSequence = [];
var playerChoice = 0;
var gameChoice = 0;
var level = 0;
var isChoosed = false;
var maxLevel;


// Event listeners to start the game or input your answer;

// Key events;

$(document).keydown( function(event) { 
    if (level === 0) {
        maxLevel = prompt("How many levels do you want to play?");
        maxLevel = parseInt(maxLevel);
        if (isNaN(maxLevel) === true) {
            alert("Please enter a number!");
            return;
        }   
        $("label.toggle").addClass("unclickable");
        $("p").text("Hard mode 🔒");
        gameRound();
    } else {
        if (isChoosed === false) {
            keyChoice(event.key);
            if (playerChoice !== 0) {
                playerSequence.push(playerChoice);
                playerRound();
            }
        }
    }
});


// Click events;

$("button").click(function() {
    if (level === 0) {
        maxLevel = prompt("How many levels do you want to play?");
        maxLevel = parseInt(maxLevel);
        if ( isNaN(maxLevel) === true) {
            alert("Please enter a number!");
            return;
        }
        $('label.toggle').addClass("unclickable");
        $("p").text("Hard mode 🔒");
        gameRound();
    } else {
        if (isChoosed === false) {
            keyChoice(this.innerHTML);
            playerSequence.push(playerChoice);
            playerRound();
        }
    }
});

// Functions;

// What happens when the player fails;

function gameOver() {
    $("body").addClass("game-over");
    new Audio("./sounds/wrong.mp3").play();
    setTimeout( function() {
        $("body").removeClass("game-over");
    }, 500);
    $("h2#title").html("GAME OVER. <br/> Click a button or press any key to restart");
    level = 0;
    gameSequence = [];
    $('label.toggle').removeClass("unclickable");
    $("p").text("Hard mode");
}

// Animation and sounds for each button + link back to the event listeners;

function keyChoice(para) {
    switch (para) {
        case "&":
        case "1":
        case 1:
            isChoosed = true;
            playerChoice=1;            
            $("button:contains(1)").addClass("activation");
            new Audio("./sounds/green.mp3").play();
            setTimeout( function() {
                $("button:contains(1)").removeClass("activation");
            }, 500);
        break;

        case "é":
        case "2":
        case 2:
            isChoosed = true;
            playerChoice=2;
            $("button:contains(2)").addClass("activation");
            new Audio("./sounds/red.mp3").play();
            setTimeout( function() {
                $("button:contains(2)").removeClass("activation");
            }, 500);
        break;

        case '"':
        case "3":
        case 3:
            isChoosed = true;
            playerChoice=3;
            $("button:contains(3)").addClass("activation");
            new Audio("./sounds/yellow.mp3").play();
            setTimeout( function() {
                $("button:contains(3)").removeClass("activation");
            }, 500);
        break;

        case "'":
        case "4":
        case 4:
            isChoosed = true;
            playerChoice=4;
            $("button:contains(4)").addClass("activation");
            new Audio("./sounds/blue.mp3").play();
            setTimeout( function() {
                $("button:contains(4)").removeClass("activation");
            }, 500);
        break;

        default:
            playerChoice=0;
            console.log("Press another key");
        break;
    }
    setTimeout( function() {
        isChoosed = false;
    }, 1000);
}

// The game checks if you've won, if not it will select another random button for the sequence;

function gameRound() { 
    setTimeout( function() {
        level ++;
        if (level === maxLevel + 1) {
            $("h2#title").text("You won! Click a button or press any key to restart");
            level = 0;
            gameSequence = [];
            $('label.toggle').removeClass("unclickable");
            $("p").text("Hard mode");
            return;
        }
        playerSequence = [];
        playerChoice = 0;
        $("h2#title").text("Level "+level);
        gameChoice = Math.trunc(Math.random()*4+1);
        gameSequence.push(gameChoice);
        if ( $('input[name=Switch]').is(':checked') === true) {
            keyChoice(gameChoice);
        } else {
            for (let i=0; i<gameSequence.length; i++) {
                setTimeout( function timer() {
                    keyChoice(gameSequence[i]);
                }, i*1000);
            }
        }
    }, 1500);
}

// Game checks if answers are correct;

function playerRound() {
    if ( playerSequence[playerSequence.length-1] !== gameSequence[playerSequence.length-1] ) {
        gameOver();
        return;
    }

    if (playerSequence.length === gameSequence.length) {
        gameRound();
        return;
    }
}
