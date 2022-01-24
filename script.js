//DEPENDENCIES
const startButton = document.getElementById("start-game");
const resetButton = document.getElementById("reset-game")
const displayArea = document.getElementById("display");
const wordDisplay = document.getElementById("word");
const result = document.getElementById("result");
const aside = document.getElementById("game-status");
const stats = document.getElementById("stats");
const timer = document.getElementById("timer");
const winsEl = document.getElementById("wins");
const lossEl = document.getElementById("losses");




displayArea.innerHTML = `<h2 id="word">Press Start to Begin</h2>`





//STARTING DATA
let timeLeft = 20;
let losses = 0;
let wins = 0;

let wordArray = [
    "react",
    "javascript",
    "java",
    "dependencies",
    "html",
    "function",
    "variable",
    "object",
    "array",
    "github",
    "heroku",
    "stylesheet",
    "deployment",
    "string",
    "module",
    "json",
    "mongodb",
    "jquery",
    "node",
    "abstraction",
    "polymophism",
    "inheritance",
    "encapsulation"
]

let currentWord;
let hiddenWord;
let gameWon = false;
let resetClicked = false;
let gameOver = false;

//FUNCTIONS
function startGame () {
    //timer begins
    startTimer();
        //the black spaces appear in word area
    displayWord();
}

function startTimer () {
    //reset win
    gameWon = false;
    //reset timer
    resetClicked = false;
    timeLeft = 59;
    //reset Result Area
    result.textContent = "";
    timer.innerHTML = `00:${timeLeft}`
    
    let timerInterval = setInterval(function() {
        // subtract 1 from remaining time
        timeLeft --;
        //update displayed time
            //add logic to determine time display format
        if (timeLeft <= 9) {
            timer.innerHTML = `00:0${timeLeft}`
        } else {
            timer.innerHTML = `00:${timeLeft}`;
        }
        
        //timer reaches zero
        if (timeLeft === 0) {
            //game over
            gameOver = true;
            //stop timer
            clearInterval(timerInterval);
            //stop game with loss
            userLosses();
            //user guesses word
        } else if (gameWon) {
            //game over
            gameOver = true;
            clearInterval(timerInterval);
            userWins();
        } else if (resetClicked) {
            timeLeft = 0;
            timer.innerHTML = `00:0${timeLeft}`
            clearInterval(timerInterval);
        }

    }, 1000)

}

function displayWord () {
    //save random word in a variable
    currentWord = wordArray[Math.floor(Math.random()* wordArray.length)]
    console.log(currentWord)
    //loop thru current word
    hiddenWord = ""
    for (let i = 0; i < currentWord.length; i++) {
        hiddenWord+= "_"
    }
    //and display it hidden with spaced "_"
    displayArea.innerHTML = `<h2 id="word"> ${hiddenWord.split("").join(" ")}</h2>`
}

function userWins () {
    //record the win
    wins++;
    //display the win
    winsEl.textContent = wins;
    //inform User of Win
    result.setAttribute("style", "color: green;")
    result.textContent = "You Win!!!"
    
    
}

function userLosses() {
    console.log("User Losses!")
    //display loss message
    losses++;
    //record the loss
    lossEl.textContent = losses;
    //signal end of game
    if (timeLeft === 0) {
        displayArea.innerHTML = `<h1 id="word" style="color: black;"> GAME OVER!!</h1>`
    }
    //inform User of Loss
    result.setAttribute("style", "display: flex; justify-content: center; color: red;")
    result.textContent = "You Lose!!!"

}

function handleKeyPress (event) {
    let key = event.key;
    let letters = hiddenWord.split("");
    //go thru current word
    for (let i = 0; i < currentWord.length; i++) {
        //compare each letter to the pressed letter
        let letter = currentWord[i];
        //if they are a match
        if (letter === key) {
           //replace hidden letter with pressed letter 
            letters[i] = key;
            //if current index of hidden is "_" 
        } else if (letter === "_") {
            //return "_"
            letters[i]
        } 

    }
    hiddenWord = letters.join("");
    //are there any underscores left?
    if (hiddenWord.includes("_")) {
        //if yes, update display
        displayArea.innerHTML = `<h2 id="word"> ${hiddenWord.split("").join(" ")}</h2>`
        //if no, then the user wins
    }   else {
        displayArea.innerHTML = `<h2 id="word"> ${hiddenWord.split("").join(" ")}</h2>`
        gameWon = true;
    }
        
        
    console.log(key)
    console.log(hiddenWord)
}


function resetGame () {
    //new word displays with blank spaces
    displayArea.innerHTML = `<h2 id="word">Press Start to Begin</h2>`
    //clear results area
    result.textContent = ""
    //clear stats
    wins = 0;
    winsEl.textContent = wins;
    losses = 0;
    lossEl.textContent = losses;
    //timer resets
    resetClicked = true;
    //if reset is pressed when game is already over
    if (gameOver) {
        //reset time left to 0
        timeLeft = 0;
        timer.innerHTML = `00:0${timeLeft}`
    }
    console.log("Let's reset!")
}
//USER INTERACTIONS
    //user presses start game button
    startButton.addEventListener("click", (startGame))
        
    //user presses reset button
    resetButton.addEventListener("click", (resetGame))

    //user presses a letter
    document.addEventListener("keypress", (handleKeyPress))
//INITIALIZATIONS




