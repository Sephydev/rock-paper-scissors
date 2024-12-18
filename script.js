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

function evaluateScore(humanScore, computerScore) {
    if (humanScore > computerScore) {
        console.log(`The winner is... You! The score is: ${humanScore} - ${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log(`The winner is... The computer... The score is: ${humanScore} - ${computerScore}`);
    } else {
        console.log(`There is an equality! The score is: ${humanScore} - ${computerScore}`);
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound() {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        if (humanChoice === "Rock" && computerChoice === "Scissors") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            ++humanScore;
        } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
            console.log(`You lose... ${computerChoice} beats ${humanChoice}.`);
            ++computerScore;
        } else if (humanChoice === "Rock" && computerChoice === "Paper") {
            console.log(`You lose... ${computerChoice} beats ${humanChoice}.`);
            ++computerScore;
        } else if (humanChoice === "Paper" && computerChoice === "Rock") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            ++humanScore;
        } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
            console.log(`You lose... ${computerChoice} beats ${humanChoice}.`);
            ++computerScore;
        } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
            ++humanScore;
        } else {
            console.log(`Equality! ${humanChoice} does not beat ${computerChoice}.`);
        }
    }

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    evaluateScore(humanScore, computerScore);
}



playGame();