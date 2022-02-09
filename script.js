//DEPENDENCIES
const startButton = document.getElementById("start-game");
const resetButton = document.getElementById("reset-game")
const wordDisplay = document.getElementById("word");
const result = document.getElementById("result");
const aside = document.getElementById("game-status");
const stats = document.getElementById("stats");
const boxes = document.querySelectorAll(".boxes");
const timer = document.getElementById("timer");
const winsEl = document.getElementById("wins");
const lossEl = document.getElementById("losses");






wordDisplay.textContent = "Press Start to Begin";
boxes.forEach((box) => {
    box.setAttribute("style", "background-color: #2874A6;")
})







//STARTING DATA
let timeLeft = 20;
let losses = 0;
let wins = 0;
let wrong = 0;
let wrongLetters = [];

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
    "bootstrap",
    "vue",
    "w3schools",
    "css",
    "cascade",
    "camelcase",
    "algorithm",
    "global",
    "local",
    "instance",
    "error",
    "parent",
    "child",
    "tag",
    "div",
    "container",
    "debug",
    "assessment",
    "apprentice",
    "intern"
]

let currentWord;
let hiddenWord;
let gameWon = false;
let resetClicked = false;
let pass;
let gameOver = true;




//FUNCTIONS
function startGame () {
    addKeyPress();
    startButton.textContent = "Skip";
    pass = false;
    //reset timer color
    timer.classList = "light"
    //timer begins
    startTimer();
        //the black spaces appear in word area
    displayWord();
    boxes.forEach((box) => {
        box.setAttribute("style", "background-color: #00FF00;")
    })
    console.log("Start TF = ", timeLeft)
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
            console.log("INTERVAL TL = ", timeLeft)
            removeKeyPress();
            //update Stat Bar
            boxes.forEach((box) => {
                box.setAttribute("style", "background-color: #2874A6;")
            })
            //game over
            gameOver = true;
            //stop timer
            clearInterval(timerInterval);
            //stop game with loss
            userLosses();
        //if user guesses word
        } else if (gameWon) {
            //game over
            // gameOver = true;
            clearInterval(timerInterval);
            userWins();
            //if reset clicked during game
        } else if (resetClicked) {
            timeLeft = 0;
            timer.innerHTML = `00:0${timeLeft}`
            timer.classList = "light";
            clearInterval(timerInterval);
            //if start btn clicked during game
        } else if (pass) {
            clearInterval(timerInterval);
        } else if (gameOver) {
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

function handleStatBar (event) {
    const boxOne = document.getElementById("one");
    const boxTwo = document.getElementById("two");
    const boxThree = document.getElementById("three");
    const boxFour = document.getElementById("four");
    const boxFive = document.getElementById("five");
    //update color when game begins and ends
    // boxes.forEach((box) => {
    //     if (gameOver === true) {
    //         box.setAttribute("style", "background-color: #2874A6;")
    //     } else {
    //         box.setAttribute("style", "background-color: #00FF00;")
    //     }
        
    // })

    let key = event.key.toLowerCase();    


    //if user guesses incorrect letter
    if (!currentWord.includes(key)) {
        wrong ++;
        wrongLetters.push(key)
        //remove a box

        console.log("Wrong Choice: ", wrong)

    }

    
    console.log("SB Current WOrd: ", currentWord)
    console.log("Wrong Letters: ", wrongLetters)

    
    //HANDLING COLOR CHANGES ON STAT BAR    
        
        //1ST WRONG CHOICE
    if (wrong === 1) {
        //change box 5 bg color to white
        boxFive.setAttribute("style", "background-color: white;")
        //change remaining colors to yellow
        for (var i = 0; i < (boxes.length - 1); i++) {
            boxes[i].setAttribute("style", "background-color: yellow;")
        }
        //2ND WRONG CHOICE
    } else if (wrong === 2) {
        //change box 4 bg color to white
        boxFour.setAttribute("style", "background-color: white;")
        //3RD WRONG CHOICE
    } else if (wrong === 3) {
        //change box 3 bg color to white
        boxThree.setAttribute("style", "background-color: white;")
        //change remaining colors to red
        for (var i = 0; i < (boxes.length - 3); i++) {
            boxes[i].setAttribute("style", "background-color: red;")
        }
        //4TH WRONG CHOICE
    } else if (wrong === 4) {
        //change box 2 bg color to white
        boxTwo.setAttribute("style", "background-color: white;")
        
        //5TH WRONG CHOICE
    } else if (wrong === 5) {
        //change box 1 bg color to white
        boxOne.setAttribute("style", "background-color: white;")
        //game over
        gameOver = true;
        //user loses
        userLosses();
    }
            
    //if user skips to next word
    if (pass) {
        //reset bar
    }  
}

function userWins () {
    //set game over
    gameOver = true;
    //record the win
    wins++;
    //display the win
    winsEl.textContent = wins;
    //inform User of Win
    result.setAttribute("style", "color: green;")
    result.textContent = "You Win!!!"
    //reset start button
    startButton.textContent = "Next Word";
    //reset bar
    boxes.forEach((box) => {
        box.setAttribute("style", "background-color: #2874A6;")
    })
    //reset wrong answers
    wrong = 0;
    wrongLetters = [];
    //stop user's ability to continue guessing
    removeKeyPress();

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

    //reset start button
    startButton.textContent = "Start Game"
    //reset wrong answers
    wrong = 0;
    wrongLetters = [];
    //stop user's ability to continue guessing
    removeKeyPress();
}

function userPasses () {
    //stop user's ability to continue guessing until game resets
    removeKeyPress();
    pass = true;
    result.setAttribute("style", "color: #5499C7;")
    result.textContent = "Skipped!"
    //clear stats
    losses++;
    lossEl.textContent = losses;
    //give time for interval to clear in setTimer
    setTimeout(function () {
        startGame();
    }, 1000);
    //reset wrong answers
    wrong = 0;
    wrongLetters = [];

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
        
}


function resetGame () {
    //reset start button
    startButton.textContent = "Start Game";
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
    gameOver = true;
    //reset wrong answers
    wrong = 0;
    wrongLetters = [];
    //if reset is pressed when game is already over
    if (gameOver) {
        //reset time left to 0
        timeLeft = 0;
        timer.innerHTML = `00:0${timeLeft}`
        timer.classList = "light"
    }
    boxes.forEach((box) => {
        box.setAttribute("style", "background-color: #2874A6;")
    })
    console.log("Let's reset!")
}
//USER INTERACTIONS
    //user presses start game button
    startButton.addEventListener("click", (event) => {
        if (gameOver) {
            gameOver = false;
            startGame();
        } else {
            userPasses();
        }
    })
        
    //user presses reset button
    resetButton.addEventListener("click", (resetGame))

    //user presses a letter
    const addKeyPress = function () {
        document.addEventListener("keypress", (handleStatBar))
        document.addEventListener("keypress", (handleKeyPress))
    }
    
    const removeKeyPress = function () {
        document.removeEventListener("keypress", (handleStatBar))
        document.removeEventListener("keypress", (handleKeyPress))
    }
    console.log("timeLeft = ", timeLeft)
    
//INITIALIZATIONS




