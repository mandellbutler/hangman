//DEPENDENCIES
const header = document.getElementById("start-game");
const wordContainer = document.getElementById("word-container");
const stats = document.getElementById("stats");
const timer = document.getElementById("timer");

const title = document.createElement("h1");
const startButton = document.createElement("button");
const word = document.createElement("span");
const wins = document.createElement("p");
const loses = document.createElement("p");
const timerEl = document.createElement("p");


startButton.setAttribute("id", "start-button");

word.setAttribute("id", "word");
word.textContent = "Hello";

wins.innerHTML = `Wins: <span>0</span>`;
loses.innerHTML = `Loses: <span>0</span>`;
timerEl.innerHTML = `Timer: <span>00:45</span>`;

//FUNCTIONS

//USER INTERACTIONS

//INITIALIZATIONS

title.textContent = "Hello World!";
startButton.textContent = "Reset"
header.append(title);
header.append(startButton);
wordContainer.append(word);
stats.append(wins);
stats.append(loses);
timer.append(timerEl);
