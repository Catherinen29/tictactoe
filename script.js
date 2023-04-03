console.log("X's and O's")
// Change the background of a button if it is clicked. 

const tileButtons = Array.from(document.querySelectorAll(".tile"))
// console.log(tileButtons)
let playerOne = "X";
let playerTwo = "O";

let currentPlayer = playerOne;

let gameStatus = false;

let playerOneWins = document.getElementById("player-1-wins")
let drawWins = document.getElementById("draw-wins")
let playerTwoWins = document.getElementById("player-2-wins")

let playerOneCount = 0;
let playerTwoCount = 0;
let drawCount = 0;


const startGame = document.querySelector(".newGame")
const resetBtn = document.querySelector(".clearBoard")
const replayBtn = document.querySelector(".replayBtn")

const gameWinMsg = document.querySelector("#winner")

// console.log(resetBtn)
// console.log(playerOneWins)
// console.log(drawWins)
// console.log(playerTwoWins)

const tile0 = document.getElementById("0");
const tile1 = document.getElementById("1");
const tile2 = document.getElementById("2");
const tile3 = document.getElementById("3");
const tile4 = document.getElementById("4");
const tile5 = document.getElementById("5");
const tile6 = document.getElementById("6");
const tile7 = document.getElementById("7");
const tile8 = document.getElementById("8");




// functions to change tile text:
const tilePlay = function(event){
    if (gameStatus === true){
    if (event.target.textContent !== "X" && event.target.textContent !== "O"  
    // if the tile doesn't have an X and doesn't have an O, then continue.
    ) {
            
    event.target.textContent = currentPlayer;
    clickSound.play();
  
    if ((tile0.textContent === "X" && tile1.textContent === "X" && tile2.textContent === "X") || 
            (tile0.textContent === "O" && tile1.textContent === "O" && tile2.textContent === "O")) {

        if (currentPlayer === playerOne) {
                playerOneCount = ++playerOneCount
                playerOneWins.textContent = playerOneCount;             
                showResult();
                document.querySelector("#winner").textContent = `Player 1 wins!`
        } else if (currentPlayer === playerTwo) {
                showResult();
                playerTwoCount = ++playerTwoCount
                playerTwoWins.textContent = playerTwoCount; 
        } 
    }
    else if (
        (tile3.textContent === "X" && tile4.textContent === "X" && tile5.textContent === "X") || 
            (tile3.textContent === "O" && tile4.textContent === "O" && tile5.textContent === "O")) {
            
        if (currentPlayer === playerOne) {
            playerOneCount = ++playerOneCount
            playerOneWins.textContent = playerOneCount; 
            showResult();
            document.querySelector("#winner").textContent = `Player 1 wins!`
        } else if (currentPlayer === playerTwo) {
            playerTwoCount = ++playerTwoCount
            playerTwoWins.textContent = playerTwoCount; 
            showResult();
            document.querySelector("#winner").textContent = `Player 2 wins!`      
        }
    }
    else if (
        (tile6.textContent === "X" && tile7.textContent === "X" && tile8.textContent === "X") || 
            (tile6.textContent === "O" && tile7.textContent === "O" && tile8.textContent === "O")){
            
        if (currentPlayer === playerOne) {
            playerOneCount = ++playerOneCount
            playerOneWins.textContent = playerOneCount; 
            showResult();
            document.querySelector("#winner").textContent = `Player 1 wins!`
        } else if (currentPlayer === playerTwo) {
            playerTwoCount = ++playerTwoCount
            playerTwoWins.textContent = playerTwoCount; 
            showResult();
            document.querySelector("#winner").textContent = `Player 2 wins!`
            
        }
    }
    else if (
        (tile0.textContent === "X" && tile3.textContent === "X" && tile6.textContent === "X") || 
            (tile0.textContent === "O" && tile3.textContent === "O" && tile6.textContent === "O")) {
            
        if (currentPlayer === playerOne) {
            playerOneCount = ++playerOneCount
            playerOneWins.textContent = playerOneCount; 
            showResult();
            document.querySelector("#winner").textContent = `Player 1 wins!`
        } else if (currentPlayer === playerTwo) {
            playerTwoCount = ++playerTwoCount
            playerTwoWins.textContent = playerTwoCount; 
            showResult();
            document.querySelector("#winner").textContent = `Player 2 wins!`            
        }
    }
    else if (
        (tile1.textContent === "X" && tile4.textContent === "X" && tile7.textContent === "X") || 
            (tile1.textContent === "O" && tile4.textContent === "O" && tile7.textContent === "O")) {
            
        if (currentPlayer === playerOne) {
            playerOneCount = ++playerOneCount
            playerOneWins.textContent = playerOneCount; 
            showResult();
            document.querySelector("#winner").textContent = `Player 1 wins!`
        } else if (currentPlayer === playerTwo) {
            playerTwoCount = ++playerTwoCount
            playerTwoWins.textContent = playerTwoCount; 
            showResult();
            document.querySelector("#winner").textContent = `Player 2 wins!`
        }
    }
    else if (
        (tile2.textContent === "X" && tile5.textContent === "X" && tile8.textContent === "X") || 
            (tile2.textContent === "O" && tile5.textContent === "O" && tile8.textContent === "O")) {
            
        if (currentPlayer === playerOne) {
            playerOneCount = ++playerOneCount
            playerOneWins.textContent = playerOneCount; 
            showResult();
            document.querySelector("#winner").textContent = `Player 1 wins!`
        } else if (currentPlayer === playerTwo) {
            playerTwoCount = ++playerTwoCount
            playerTwoWins.textContent = playerTwoCount; 
            showResult();
            document.querySelector("#winner").textContent = `Player 2 wins!`
        }
    }
    else if (
        (tile0.textContent === "X" && tile4.textContent === "X" && tile8.textContent === "X") || 
            (tile0.textContent === "O" && tile4.textContent === "O" && tile8.textContent === "O")) {
                      
        if (currentPlayer === playerOne) {
            playerOneCount = ++playerOneCount
            playerOneWins.textContent = playerOneCount; 
            showResult();
            document.querySelector("#winner").textContent = `Player 1 wins!`
        } else if (currentPlayer === playerTwo) {
            playerTwoCount = ++playerTwoCount
            playerTwoWins.textContent = playerTwoCount; 
            showResult();
            document.querySelector("#winner").textContent = `Player 2 wins!`
        }
    }
    else if (
        (tile2.textContent === "X" && tile4.textContent === "X" && tile6.textContent === "X") || 
            (tile2.textContent === "O" && tile4.textContent === "O" && tile6.textContent === "O")) {

        if (currentPlayer === playerOne) {
            playerOneCount = ++playerOneCount
            playerOneWins.textContent = playerOneCount; 
            showResult();
            document.querySelector("#winner").textContent = `Player 1 wins!`
        } else if (currentPlayer === playerTwo) {
            playerTwoCount = ++playerTwoCount
            playerTwoWins.textContent = playerTwoCount; 
            showResult();
            document.querySelector("#winner").textContent = `Player 2 wins!`
        }
    } 


} 
const drawScore = tileButtons.filter(function(word) {
    return word.textContent;
    }).length;

    if (drawScore === 9){
        showResult();
        document.querySelector("#winner").textContent = `It's a draw!`
        drawCount = ++drawCount
        drawWins.textContent = drawCount; 
    }

// change player: 
    if (currentPlayer === playerTwo){
        currentPlayer = playerOne
        // change background depending on whose turn it is: 
        document.querySelector("#player-1-name").style.backgroundColor = "#F48484" 
        document.querySelector("#player-2-name").style.backgroundColor = "#86A3B8" 
    } else {
        currentPlayer = playerTwo;
        // change background depending on whose turn it is: 
        document.querySelector("#player-2-name").style.backgroundColor = "#F48484" 
        document.querySelector("#player-1-name").style.backgroundColor = "#86A3B8" 
    }
}

} // end of large function


// eventlistener for tiles:
tileButtons.forEach(function(button) {
    button.addEventListener("click", tilePlay)
})

// click audio:
const clickSound = new Audio("pick-92276.mp3");
const clearSound = new Audio("co-8-36493.mp3");

// to re-set the game board:
// function to clear the game board
const clearBoard = function() {
    gameStatus = true;
    tileButtons.forEach(function(tileButton){
        tileButton.textContent = "";
    }) 
    currentPlayer = playerOne;
    document.querySelector("#player-1-name").style.backgroundColor = "#F48484" 
    document.querySelector("#player-2-name").style.backgroundColor = "#86A3B8" 
    document.querySelector(".popUp").style.display = "none";
    clearSound.play();
}


resetBtn.addEventListener("click", function() {
    clearBoard();
    // clear scoreboard:
    document.getElementById("player-1-wins").innerText = 0;
    document.getElementById("player-2-wins").innerText = 0;
    document.getElementById("draw-wins").innerText = 0;
});  


startGame.addEventListener("click", clearBoard)

// show score pop up:
const showResult = function() {
    document.querySelector(".popUp").style.display = "block";
    gameStatus = false;
    }


// pop up button to play again:
document.querySelector(".replayBtn").addEventListener("click", clearBoard);

