//DEPENDENCIES
const header = document.getElementById("start-game");
const wordContainer = document.getElementById("word-container");
const aside = document.getElementById("game-status");
const stats = document.getElementById("stats");
const timer = document.getElementById("timer");

const startButton = document.createElement("button");
const word = document.createElement("h1");
const statLabel = document.createElement("h3");
const timerEl = document.createElement("p");


startButton.setAttribute("id", "start-button");

word.setAttribute("id", "word");
word.textContent = "Displayed Word";

statLabel.textContent = "Stat Area";
timerEl.innerHTML = `Timer: <span>00:45</span>`;

//STARTING DATA

//FUNCTIONS

//USER INTERACTIONS

//INITIALIZATIONS

startButton.textContent = "Reset"
header.append(startButton);
wordContainer.append(word);
aside.prepend(statLabel);
timer.append(timerEl);
