function getComputerChoice(max) {
    return Math.floor(Math.random() * max);
}

let randomNumber = getComputerChoice(3);

// console.log(randomNumber);

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

console.log(displayComputerChoice(randomNumber));

function getHumanChoice() {
    let humanChoice = window.prompt("Let's play Rock Paper Scissors");

    if (humanChoice === null) {
        return "Okay...";
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

