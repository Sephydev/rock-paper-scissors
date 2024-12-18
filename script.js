let humanScore = 0;
let computerScore = 0;

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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
        ++humanScore;
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        console.log(`You lose... ${computerChoice} beats ${humanChoice}.`)
        ++computerScore;
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
        console.log(`You lose... ${computerChoice} beats ${humanChoice}.`)
        ++computerScore;
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
        ++humanScore;
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        console.log(`You lose... ${computerChoice} beats ${humanChoice}.`)
        ++computerChoice;
    } else {
        console.log(`Equality! ${humanSelection} does not beat ${computerSelection}.`)
        ++humanScore;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);