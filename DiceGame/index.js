function rollDice() {
    var firstDice = Math.trunc(Math.random()*6)+1;
    var secondDice = Math.trunc(Math.random()*6)+1;

    document.querySelector("img.img1").setAttribute("src", "./images/dice"+firstDice+".png");
    document.querySelector("img.img2").setAttribute("src", "./images/dice"+secondDice+".png");

    if ( firstDice > secondDice) { 
        document.querySelector("h1").textContent = "Player 1 wins!";
    } else if ( secondDice > firstDice) {
        document.querySelector("h1").textContent = "Player 2 wins!";
    } else {
        document.querySelector("h1").textContent = "It's a draw!";
    }

}