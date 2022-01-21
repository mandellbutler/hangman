//DEPENDENCIES
const startButton = document.getElementById("start-game");
const resetButton = document.getElementById("reset-game")
const wordContainer = document.getElementById("word-container");
const aside = document.getElementById("game-status");
const stats = document.getElementById("stats");
const timer = document.getElementById("timer");










//STARTING DATA
let timeLeft = 20;

//FUNCTIONS
function startGame () {
    //timer begins
    startTimer();
        //the black spaces appear in word area
    console.log("Let's roll!")
}

function startTimer () {
    console.log("Time on the clock is ", timeLeft)
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




