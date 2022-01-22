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

//FUNCTIONS
function startGame () {
    //timer begins
    startTimer();
        //the black spaces appear in word area
    displayWord();
}

function startTimer () {
    //reset timer
    timeLeft = 12;
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
            //stop timer
            clearInterval(timerInterval);
            //stop game with loss
            userLosses();

        }

        //user guesses word
        if (timeLeft === 5){
            userWins();
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
        displayArea.innerHTML = `<h1 id="word" style="color: purple;"> GAME OVER!!</h1>`
    }
    //inform User of Loss
    result.setAttribute("style", "color: red;")
    result.textContent = "You Lose!!!"

}

function handleKeyPress (event) {
    let key = event.key;
    let letters = hiddenWord.split("");
    //go thru current word
    for (let i = 0; i < currentWord.length; i++) {
        //compare each letter to the pressed letter
        let letter = currentWord[i];
        if (letter === key) {
            letters[i] = key;
            //if current index of hidden is "_" 
        } else if (letter === "_") {
            letters[i]
        } else {
            console.log("Wrong letter!")
        }
        //if they are a match
        //replace hidden letter with pressed letter
    }
        hiddenWord = letters.join("");
    //are there any underscores left?
    if (hiddenWord.includes("_")) {
        //if yes, update display
        displayArea.innerHTML = `<h2 id="word"> ${letters}</h2>`
        //if no, then the user wins
    }   else {
        userWins();
    }
        
        
    console.log(key)
    console.log(hiddenWord)
}


function resetGame () {
    //new word displays with blank spaces
    //timer resets
    console.log("Let's bounce!")
}
//USER INTERACTIONS
    //user presses start game button
    startButton.addEventListener("click", (startGame))
        
    //user presses reset button
    resetButton.addEventListener("click", (resetGame))

    //user presses a letter
    document.addEventListener("keypress", (handleKeyPress))
//INITIALIZATIONS




