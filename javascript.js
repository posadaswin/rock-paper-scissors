
function getComputerChoice() {
    return Math.random();
};


function getPlayerChoice() {
    return prompt("Please enter your choice, is it rock, paper, or scissors?").toLowerCase();
};


function choiceConvert(chosenChoice) {
    let a;
    switch (chosenChoice) {
        case "rock":
            return a = 0.1;
        case "paper":
            return a = 0.5;
        case "scissors":
            return a = 0.9;
    };
        
};

function choiceWin(winner) {
    let c;
    switch (winner) {
        case "rock":
            return c = "Paper";
        case "paper":
            return c = "Scissors";
        case "scissors":
            return c = "Rock";
    };
};

function choiceDefeat(loser) {
    let d;
    switch (loser) {
        case "rock":
            return d = "Scissors";
        case "paper":
            return d = "Rock";
        case "scissors":
            return d = "Paper";
    };
};

function playRound(human, computer) {

    if (computer > human) {
        computerHand = choiceWin(chosenChoice);
        console.log("You Lose! " + computerHand + " beats " + chosenChoice + ".");
        computerScore++;
    } else if (human > computer) {
        computerHand = choiceDefeat(chosenChoice);
        console.log("You Win! " + chosenChoice + " beats " + computerHand + ".");
        humanScore++;
    } else {
        console.log("It's a tie!");
    };
    console.log("Computer Score: " + computerScore + "  " + "Human Score: " + humanScore);
};

function playGame(session) {

    for ( let z = 0; z < session; z++) {
        chosenChoice = getPlayerChoice();
        humanChoice = choiceConvert(chosenChoice);
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    };
    if (humanScore > computerScore) {
        console.log("The Human is the Winner!!!")
    } else if (computerScore > humanScore) {
        console.log("The Computer is the Winner!!!")
    } else {
        console.log("It's a tie!")
    };
};

let chosenChoice;
let humanChoice;
let computerChoice;
let computerHand;
let humanScore = 0;
let computerScore = 0;
let alpha;
let difficulty = 1;

alpha = prompt("How many rounds you want?", 5);
playGame(alpha);

function playAgain() {
    humanScore = 0;
    computerScore= 0;
    beta = prompt("How many rounds you want?", 5);
    playGame(beta);
}
