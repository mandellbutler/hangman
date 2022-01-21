//DEPENDENCIES
const startButton = document.getElementById("start-game");
const resetButton = document.getElementById("reset-game")
const wordDisplay = document.getElementById("word");
const aside = document.getElementById("game-status");
const stats = document.getElementById("stats");
const timer = document.getElementById("timer");










//STARTING DATA
let timeLeft = 20;

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
    "String"
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
            
    }, 1000)
}

function displayWord () {
    wordDisplay.textContent = (wordArray[Math.floor(Math.random()* wordArray.length)])

}

function userLosses() {
    console.log("User Losses!")
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




