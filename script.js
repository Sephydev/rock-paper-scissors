function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
        default:
            return "Error: randomNumber Out Of Range"
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Please choose between 'Rock', 'Paper' or Scissors':");

    switch (humanChoice.toLowerCase()) {
        case "rock":
            return "Rock";
            break;
        case "paper":
            return "Paper";
            break;
        case "scissors":
            return "Scissors";
            break;
        default:
            return "Wrong Input";
    }
}

console.log(getHumanChoice());