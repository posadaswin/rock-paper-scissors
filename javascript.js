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

function playRound(human, computer) {
    chosenChoice = getPlayerChoice();
    humanChoice = choiceConvert(chosenChoice);
    computerChoice = getComputerChoice();

    if (computer > human) {
        console.log("You Lose! Computer beats Human.");
        computerScore++;
    } else {
        console.log("You Win! Human beats Computer.");
        humanScore++;
    };
};

function playGame(session) {
    for ( let z = 0; z < session; z++) {
        playRound(humanChoice, computerChoice);
    };
    if (humanScore > computerScore) {
        console.log("The Human is the Winner!!!")
    } else {
        console.log("The Computer is the Winner!!!")
    };
};

let chosenChoice;
let humanChoice;
let computerChoice;
let interpret;
let humanScore = 0;
let computerScore = 0;
let alpha;

alpha = prompt("How many rounds you want?");
playGame(alpha);