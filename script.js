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
    "React",
    "Javascript",
    "Java",
    "Dependencies",
    "HTML",
    "Function",
    "Variable",
    "Object",
    "Array",
    "Github",
    "Heroku",
    "Stylesheet",
    "Deployment",
    "String",
    "Module",
    "JSON",
    "MongoDB",
    "JQuery",
    "Node",
    "Abstraction",
    "Polymophism",
    "Inheritance",
    "Encapsulation"
]

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
    //display a random word
    displayArea.innerHTML = `<h2 id="word"> ${(wordArray[Math.floor(Math.random()* wordArray.length)])}</h2>`
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
//INITIALIZATIONS




