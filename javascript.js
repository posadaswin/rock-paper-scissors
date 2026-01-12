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
    }
        
};

function playRound(human, computer) {
    if (computer > human) {
        console.log("You Lose! Computer beats Human.");
        computerScore++;
    } else {
        console.log("You Win! Human beats Computer.");
        humanScore++;
    }
};

let chosenChoice = getPlayerChoice();
let humanChoice = choiceConvert(chosenChoice);
let computerChoice = getComputerChoice();
let interpret;

let humanScore = 0;
let computerScore = 0;


