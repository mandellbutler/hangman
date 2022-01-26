//DEPENDENCIES
const startButton = document.getElementById("start-game");
const resetButton = document.getElementById("reset-game")
const wordDisplay = document.getElementById("word");
const result = document.getElementById("result");
const aside = document.getElementById("game-status");
const stats = document.getElementById("stats");
const timer = document.getElementById("timer");
const winsEl = document.getElementById("wins");
const lossEl = document.getElementById("losses");




wordDisplay.textContent = "Press Start to Begin"





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
    "encapsulation",
    "bootstrap"
]

let currentWord;
let hiddenWord;
let gameWon = false;
let resetClicked = false;
let startClick = 0;
let gameOver = false;

//FUNCTIONS
function startGame () {
    startClick ++;
    console.log("Start Btn Clicked " + startClick + " times." )
    //reset timer color
    timer.classList = "light"
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
    timeLeft = 11;
    //reset Result Area
    result.textContent = "";
    timer.innerHTML = `00:${timeLeft}`
    
    let timerInterval = setInterval(function() {
        // subtract 1 from remaining time
        timeLeft --;
        //update displayed time
            //add logic to determine time display format
        if (timeLeft <= 9) {
            timer.classList.add("warning");
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
            //reset start btn
            startClick = 0;
        //if user guesses word
        } else if (gameWon) {
            //game over
            gameOver = true;
            clearInterval(timerInterval);
            userWins();
            //reset start btn
            startClick = 0;
            //if reset clicked during game
        } else if (resetClicked) {
            timeLeft = 0;
            timer.innerHTML = `00:0${timeLeft}`
            timer.classList = "light";
            //reset start btn
            startClick = 0;
            clearInterval(timerInterval);
            //if start btn clicked during game
        } else if (startClick > 1) {
            //reset start btn for current play
            startClick = 1;
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
    wordDisplay.textContent = `${hiddenWord.split("").join(" ")}`
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
        wordDisplay.textContent = "GAME OVER!!"
    }
    //inform User of Loss
    result.setAttribute("style", "color: red;")
    result.textContent = "You Lose!!!"

}

function handleKeyPress (event) {
    let key = event.key.toLowerCase();
    let letters = hiddenWord.split("");
    //go thru current word
    for (let i = 0; i < currentWord.length; i++) {
        //compare each letter to the pressed letter
        let letter = currentWord[i];
        //if they are a match
        if (letter === key) {
           //replace hidden letter with pressed letter 
            letters[i] = key.toUpperCase();
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
        wordDisplay.textContent = `${hiddenWord.split("").join(" ")}`
        //if no, then the user wins
    }   else {
        wordDisplay.textContent = `${hiddenWord.split("").join(" ")}`
        gameWon = true;
    }
        
        
    console.log(key)
    console.log(hiddenWord)
}


function resetGame () {
    //new word displays with blank spaces
    wordDisplay.textContent = "Press Start to Begin"
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
        timer.classList = "light"
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




