let playerScore = 0;
let computerScore = 0;

function computerChoice() {
    let choice = Math.floor(Math.random() * 3 + 1);
    if (choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "paper";
    } else if (choice === 3) {
        return "scissors";
    } else {
        console.log("ERROR");
    }
}

function getHumanChoice() {
    while (true) {
        let choice = prompt("Rock, paper, scissors?");
        if (choice === null || choice.trim() === "") {
            alert("You must enter something!");
            continue;
        }

        choice = choice.toLowerCase();
        if (choice === "rock" || choice === "paper" || choice === "scissors") {
            return choice;
        } else {
            alert("Unknown option not allowed. Please choose 'rock', 'paper', or 'scissors'.");
        }
    }
}

function playRound(humanChoice, compChoice) {
    if (humanChoice === compChoice) {
        return "It's a tie!";
    }

    if (
        (humanChoice === "rock" && compChoice === "scissors") ||
        (humanChoice === "paper" && compChoice === "rock") ||
        (humanChoice === "scissors" && compChoice === "paper")
    ) {
        playerScore++;
        return "You win!";
    } else {
        computerScore++;
        return "Computer wins!";
    }

}

// Main Game
console.log("Starting the game...");

// Get player and computer choices for this round
// let playerChoice = getHumanChoice();
// let compChoice = computerChoice();

// console.log("Player chose: " + playerChoice);
// console.log("Computer chose: " + compChoice);

// let result = playRound(playerChoice, compChoice);
// console.log(result);
// console.log(result);
// console.log(playRound(playerChoice, compChoice));

// console.log("Computer score: " + computerScore);
// console.log("Human score: " + playerScore);


function theGame(){
    let playerChoice1 = getHumanChoice();
    let compChoice1 = computerChoice();
    console.log("Player chose: " + playerChoice1);
    console.log("Computer chose: " + compChoice1);
    let result = playRound(playerChoice1, compChoice1);
    console.log(result);
    console.log("Score - Player: " + playerScore + ", Computer: " + computerScore);
}
theGame();
theGame();
theGame();
theGame();
theGame();

if(playerScore > computerScore){
    console.log("player wins!");
}else if(playerScore < computerScore){
    console.log("Sorry Computer wins!");
}else{
    console.lot("Oh hey its a tie!");
}