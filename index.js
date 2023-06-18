document.querySelector("#startGame").addEventListener("click", game);

function game() {

    var player1 = prompt("Player 1 name");
    var player2 = prompt("Player 2 name");

    if (!player1 || !player2) {
        alert("Please enter names for both players.");
        return; // Stop further execution
    }

    if (player1 === player2) {
        player1 += "-1";
        player2 += "-2";
    }


    document.querySelectorAll("p")[0].innerHTML = player1;
    document.querySelectorAll("p")[1].innerHTML = player2;

    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var imagepath1 = "./images/dice" + randomNumber1 + ".png";
    var imagepath2 = "./images/dice" + randomNumber2 + ".png";


    document.querySelector(".img1").setAttribute("src", imagepath1);
    document.querySelector(".img2").setAttribute("src", imagepath2);


    var txt = document.querySelector("h1");

    if (randomNumber1 > randomNumber2) {
        txt.innerHTML = "🚩" + player1 + " Wins!";
    }
    else if (randomNumber1 < randomNumber2) {
        txt.innerHTML = player2 + " Wins!🚩";
    }
    else {
        txt.innerHTML = "Draw!";
    }

}