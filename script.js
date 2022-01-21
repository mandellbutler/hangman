//DEPENDENCIES
const header = document.getElementById("start-game");
const wordContainer = document.getElementById("word-container");
const aside = document.getElementById("game-status");
const stats = document.getElementById("stats");
const timer = document.getElementById("timer");

const title = document.createElement("h3");
const startButton = document.createElement("button");
const word = document.createElement("h1");
const statLabel = document.createElement("h3");
const wins = document.createElement("p");
const loses = document.createElement("p");
const timerEl = document.createElement("p");


startButton.setAttribute("id", "start-button");

word.setAttribute("id", "word");
word.textContent = "Displayed Word";

statLabel.textContent = "Stat Area";
wins.innerHTML = `Wins: <span>0</span>`;
loses.innerHTML = `Loses: <span>0</span>`;
timerEl.innerHTML = `Timer: <span>00:45</span>`;

//FUNCTIONS

//USER INTERACTIONS

//INITIALIZATIONS

title.textContent = "Start Game Area";
startButton.textContent = "Reset"
header.append(title);
header.append(startButton);
wordContainer.append(word);
aside.prepend(statLabel);
stats.append(wins);
stats.append(loses);
timer.append(timerEl);
