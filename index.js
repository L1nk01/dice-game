let title = document.querySelector(".container h1");
let button = document.querySelector(".btn button");

let leftDice = document.querySelector(".img1");
let rightDice = document.querySelector(".img2");

let images = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];
let tableRow = document.querySelectorAll(".row");
let data = document.querySelectorAll(".data");

var counter = 0;
var clearCounter = 0;
var player1Wins = 0;
var player2Wins = 0;

button.addEventListener("click", () => {
    if (counter < 5) {
        let randomNumber1 = Math.round(Math.random() * 5);
        let randomNumber2 = Math.round(Math.random() * 5);

        leftDice.setAttribute("src", images[randomNumber1]);
        rightDice.setAttribute("src", images[randomNumber2]);

        if (counter <= 5) {

           for (i = 0; i < tableRow.length; i++) {

                if (randomNumber1 === randomNumber2) {
                    tableRow[counter].firstElementChild.textContent = "✅";
                    tableRow[counter].lastElementChild.textContent = "✅";
                    player1Wins+=1;
                    player2Wins+=1;
                } else if (randomNumber1 > randomNumber2) {
                    tableRow[counter].firstElementChild.innerHTML = "✅";
                    tableRow[counter].lastElementChild.innerHTML = "☠️";
                    player1Wins++;
                } else {
                    tableRow[counter].firstElementChild.innerHTML = "☠️";
                    tableRow[counter].lastElementChild.innerHTML = "✅";
                    player2Wins++;
                }
            
            }

            if (counter === 4) {
                if (player1Wins > player2Wins) {
                    title.textContent = "Player 1 Wins!";
                } else {
                    title.textContent = "Player 2 Wins!";
                }

                button.textContent = "Restart!";
            }
            counter++;
        }
    } else {
        leftDice.setAttribute("src", images[5]);
        rightDice.setAttribute("src", images[5]);
        counter = 0;
        player1Wins = 0;
        player2Wins = 0;
        button.textContent = "Press Me!";

        while (clearCounter < 10) {
            data[clearCounter].textContent = "";
            clearCounter++;
        }
    }
});
