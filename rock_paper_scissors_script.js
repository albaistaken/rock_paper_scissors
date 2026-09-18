//Computer random below

function getComputerChoice(max) {
    return Math.floor(Math.random() * max);
}

let randomNumber = getComputerChoice(3);

function displayComputerChoice(randomNumber) {
    if (randomNumber === 0) {
        return "Rock";
    } else if (randomNumber === 1) {
        return "Paper";
    } else if (randomNumber === 2) {
        return "Scissors";
    } else {
        return "I have no words...";
    }
}

let computerInput = displayComputerChoice(randomNumber);

console.log(displayComputerChoice(randomNumber));

//Human input function below

function getHumanChoice() {
    let humanChoice = window.prompt("Let's play Rock Paper Scissors");

    if (humanChoice === null) {
        return "I really wanted to play! :(";
    } else if (humanChoice.toLowerCase() === "rock") {
        return "Rock";
    } else if (humanChoice.toLowerCase() === "paper") {
        return "Paper";
    } else if (humanChoice.toLowerCase() === "scissors") {
        return "Scissors";
    }
}

let humanInput = getHumanChoice();

console.log(humanInput);

//Players score variables below

let humanScore = 0
let computerScore = 0

//Logic of the game below

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock") {
        if (computerChoice === 0) {
            return "It's a tie!";
        } else if (computerChoice === 1) {
            return "Computer wins!";
        } else if (computerChoice === 2) {
            return "You win!"
        }
    } else if (humanChoice === "Paper") {
        if (computerChoice === 0) {
            return "You win!";
        } else if (computerChoice === 1) {
            return "It's a tie!";
        } else if (computerChoice === 2) {
            return "Computer wins!";
        }
    } else if (humanChoice === "Scissors") {
        if (computerChoice === 0) {
            return "Computer wins!";
        } else if (computerChoice === 1) {
            return "You win!";
        } else if (computerChoice === 2) {
            return "It's a tie!"
        }
    } 
}

let roundTest = playRound(humanInput, randomNumber);

console.log(roundTest);

