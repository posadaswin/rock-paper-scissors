// declare functions

function getComputerChoice() {
    return Math.random();
};

function getPlayerChoice() {
    return prompt("Please enter your choice, is it rock, paper, or scissors?").toLowerCase();
};

function difficultySetting(set = 'normal') {
    let result;
    switch (set) {
        case "easy":
            return result = 5;
        case "normal":
            return result = 1;
        case "hard":
            return result = Math.random();
    }
};

function choiceConvert(chosenChoice) {
    let result;
    switch (chosenChoice) {
        case "rock":
            return result = 0.1 * decidingFactor;
        case "paper":
            return result = 0.5 * decidingFactor;
        case "scissors":
            return result = 0.9 * decidingFactor;
    };   
};

function capitalizeFirstLetter(anyWord) {
    return String(anyWord).charAt(0).toUpperCase() + String(anyWord).slice(1);
};

function choiceWin(humanDecision) {
    let result;
    switch (humanDecision) {
        case "rock":
            return result = "Paper";
        case "paper":
            return result = "Scissors";
        case "scissors":
            return result = "Rock";
    };
};

function choiceDefeat(humanDecision) {
    let result;
    switch (humanDecision) {
        case "rock":
            return result = "Scissors";
        case "paper":
            return result = "Rock";
        case "scissors":
            return result = "Paper";
    };
};

function playRound(roundNumber) {
    for ( let z = 0; z < roundNumber; z++) {
        chosenChoice = getPlayerChoice();
        humanChoice = choiceConvert(chosenChoice);
        computerChoice = getComputerChoice();
        playLogic(humanChoice, computerChoice, chosenChoice);
    };
};

function playLogic(human, computer, decision) {
    if (computer > human) {
        humanHand = capitalizeFirstLetter(decision);
        computerHand = choiceWin(decision);
        console.log("You Lose! " + computerHand + " beats " + humanHand + ".");
        computerScore++;
    } else if (human > computer) {
        humanHand = capitalizeFirstLetter(decision);
        computerHand = choiceDefeat(decision);
        console.log("You Win! " + humanHand + " beats " + computerHand + ".");
        humanScore++;
    } else if (human = computer) {
        console.log("It's a tie!");
    } else {
        return 0;
    };
    console.log("Computer Score: " + computerScore + "  " + "Human Score: " + humanScore);
}

function playGame(session) {
    playRound(session);
    if (humanScore > computerScore) {
        console.log("The Human is the Winner!!!");
    } else if (computerScore > humanScore) {
        console.log("The Computer is the Winner!!!");
    } else if (humanScore = computerScore) {
        console.log("It's a tie!");
    } else {
        return 0;
    };
};

// declare and initialize global variables
let chosenChoice;
let humanChoice;
let computerChoice;
let computerHand;
let humanHand;
let humanScore = 0;
let computerScore = 0;
let difficulty = "normal";
let decidingFactor = 1;


// -------------   start of the script   -------------------
let alpha = prompt("How many rounds you want?", 5);
playGame(alpha);

function playAgain() {
    // clearing console and scores
    console.clear();
    humanScore = 0;
    computerScore= 0;
    // setting difficulty
    difficulty = document.getElementById('setting-source').value;
    console.log("Difficulty is set to " + capitalizeFirstLetter(difficulty));
    decidingFactor = difficultySetting(difficulty);
    // start new game
    beta = prompt("How many rounds you want?", 5);
    playGame(beta);
}
