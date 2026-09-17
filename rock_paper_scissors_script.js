function getComputerChoice(max) {
    return Math.floor(Math.random() * max);
}

let randomNumber = getComputerChoice(3);

console.log(randomNumber);

function displayComputerChoice(randomNumber) {
    if (randomNumber === 0) {
        return "Rock";
    } else if (randomNumber === 1) {
        return "Paper";
    } else if (randomNumber === 2) {
        return "Scissors";
    } else {
        return "Nothing";
    }
}

console.log(displayComputerChoice(randomNumber));