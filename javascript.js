function getComputerChoice() {
    return Math.random();
};

function getPlayerChoice() {
    return prompt("Please enter your choice, is it rock, paper, or scissors?");
}

console.log(getComputerChoice());
getPlayerChoice();