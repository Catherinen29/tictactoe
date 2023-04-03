# tictactoe

## Introduction

This is my first project on the Software Engineering Immersive course with General Assembly. The task was to create a functioning tic tac toe game with features including a messages telling the user the outcome of the game and starting a new game without refreshing the page. A combination of HTML, CSS and JavaScript were used to create this project. 

The project was set on Wednesday 29th March with six days to plan and execute a functioning game independently.  

The final project can be found here:
https://catherinen29.github.io/tictactoe/


### What's included

The project includes the following files:
- index.html – the main HTML file, containing the basic layout of the webpage;
- script.js – the JavaScript file containing all variables and functions which bring the HTML file to life.
- style.css – the CSS file containing all the styling of the webpage – making it look as good as possible!
- Here you’ll also find the original Wireframe as well as sounds used on the page.

### Technologies Used

The technologies used throughout the project were:
- VS Code – to write and execute the code;
- Notable – to plan and keep track of completed requirements;
- Figma – to design the initial wireframe for the project;


## Brief

The main goal of the project was a straightforward one: create this very well known game with no starter code. The technical requirements included the following:
- Use your programming skills to work out the game logic for a simple game like Tic Tac Toe
- Separate HTML, CSS, and JavaScript files in your application
- Build an application to a specification that someone else gives you
- Build a dynamic game that allows two players to compete from the same computer
- Craft a README.md file that explains your app to the world

### Essentials to the project:

- Render a game board in the browser
- Switch turns between X and O (or whichever markers you select)
- Visually display which side won if a player gets three in a row, or show a draw if neither player wins
- Include separate HTML / CSS / JavaScript files
- Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles
- Use JavaScript for DOM manipulation
- Deploy your game online, where the rest of the world can access it
- Use semantic markup for HTML and CSS (adhere to best practices)
- Have well-formatted, and well-commented code

### User Stories

- As a user, I should be able to start a new tic tac toe game
- As a user, I should be able to click on a square to add X first and then O, and so on
- As a user, I should be shown a message after each turn for if I win, lose, tie or who's turn it is next
- As a user, I should not be able to click the same square twice
- As a user, I should be shown a message when I win, lose or tie
- As a user, I should not be able to continue playing once I win, lose, or tie
- As a user, I should be able to play the game again without refreshing the page


## Planning

The first thing I wanted to do was get an idea in my head of what the webpage would look like. I made a list of what the page should include, what I would need to do to ensure a successful project, including additional user stories to those provided in the brief, and which parts of the page should include what kind of code, for example, the game board should contain buttons which would be connected to functions that execute the game. 
The wireframe created at the beginning of the project can be found in the project folder. Further wireframes were not created as the final design is very similar, however you can see where inspiration hit and changes have been made throughout the project. 
I made notes throughout the project as my intentions changed and made checklists for sections of the user stories that had been completed. 

## Build Process

### JavaScript

Moving forward from planning, I first needed to design the game board on HTML and then implement code which would keep track of where the user had clicked. This led to creating the main game function. As there could have been many ways to approach this, my initial thought process was to use a `for` loop to run over the contents of the tiles, however I soon realised this wouldn’t work and used a much more straightforward piece of code using the forEach function. 
The main function considers different combinations of wins, and I applied if statements for each one. You can see a section of this here:

```js
if ((tile0.textContent === "X" && tile1.textContent === "X" && tile2.textContent === "X") || 
(tile0.textContent === "O" && tile1.textContent === "O" && tile2.textContent === "O")) {

if (currentPlayer === playerOne) {
playerOneCount = ++playerOneCount 
playerOneWins.textContent = playerOneCount; 
showResult(); 
document.querySelector("#winner").textContent = `Player 1 wins!` 
} else if (currentPlayer === playerTwo) {
playerTwoCount = ++playerTwoCount 
playerTwoWins.textContent = playerTwoCount; 
showResult();/
document.querySelector("#winner").textContent = `Player 2 wins!` 
} 
}
```


I struggled getting the project off the ground, however felt an enormous sense of pride once I had passed it and could move on to building up the game. 

In addition to the winning combinations, there is always the chance of a draw. I particularly enjoy this piece of code as I wasn’t confident with some array methods before the project began whereas I can say this has now changed. 

I created an array of all the tiles’ content and the length of that array determined whether there was a draw or not. This part of the code need to be after all the other combinations as it is possible for Player 1 to win on the final tile. 

``` js
const drawScore = tileButtons.filter(function(word) { 
return word.textContent;
}).length;
```


The game also needed to include buttons which would clear the board so a new game could start. I wanted to have one button which cleared the board mid-game if the user wanted to, and one at the end of a game so the user could continue playing. 

Further down the line, I realised I needed to add a further button which the user would need to click to start the game. 

The initial function that was written was fairly basic just clearing the board, however more actions were added as the project matured. Segments of the function include:
- Setting the status of the game to ‘true’;
- Clearing the content of the tiles, ready for the next game;
- Re-setting the current player to Player 1;
- Indicating whose move is next, by changing background colors in the scoreboard;
- Hiding the message which is generated when a game ends.

```js 
const clearBoard = function() {
gameStatus = true; 
tileButtons.forEach(function(tileButton){
tileButton.textContent = ""; 
}) 
currentPlayer = playerOne; 
document.querySelector("#player-1-name").style.backgroundColor = "#F48484" 
document.querySelector("#player-2-name").style.backgroundColor = "#86A3B8" 
document.querySelector(".popUp").style.display = "none"; 
}

```


### CSS

The appearance of the project remained pretty basic for the first few days, showing only the title, game board and the scoreboard. Once the basic functionality was implemented, I was able to tackle the CSS, which I really enjoyed. 

One part of the CSS I am quite proud of is hovering over the re-set button and the color of the button and it’s inner element both change color. 


## Challenges

The project got off to a slow start because I had incredibly over-complicated my approach to the initial function. I also hadn’t quite grasped the methods that I did eventually use which may have hindered me slightly, however this has now changed and I feel more comfortable with these. I think better initial planning on the main function would have helped here too. 

I found that researching different JavaScript methods and experimenting on how some of them worked helped with my progress here. 

I am quite conscious that the JavaScript file is also especially not DRY, however during this project, I didn’t want to try changing my code once I had it implemented it to ensure that I had time to complete the rest of the project. I’m looking forward to being able to compress my coding so it functions and is not so lengthy. 


I wanted to keep the design and layout of the game pretty stripped back which meant there were not too many issues on the CSS part of the project. I struggled somewhat with getting my buttons in the positions I wanted to, particularly when changing the format of one element led to the position of another element being affected. Some exploration on how different instructions work helped me overcome this and I am confident that I have a better understanding of how certain things work now. 

## Wins

- Completing my first independent project – creating a game from scratch that works as it should and looks good!
- I managed to bounce back from the early block I experienced and it didn't have huge impact on the result. 

## Key takeaways

The project has definitely improved my understanding of JavaScript and CSS. 

Going forward, I’d like to try and get my code more DRY. 

I’m aware that I hit a block early on and in future intend on talking out my problem. 

Though it’s not always completely straightforward, I did really enjoy the CSS side of things and look forward to exploring this a bit more. 

## Bugs

There is currently a slight delay in the sounds playing when the relevant elements are clicked on.

The play button sometimes needs to be clicked twice for the game to become active. 

## Future Improvements
- As a priority, I'd like to make the JavaScript file much more DRY!
- I'd like to give the players the option to choose their icons or names. 
- I didn't have the chance to look too much into responsive design so I would like to have the opportunity to add this feature.
- I'd like to have a game option to play against the computer!