function getComputerChoice() {
    let random = Math.floor(Math.random() * 30) + 1;
    if(random <= 10) {
        console.log(random);
        return 'rock';
    }
    else if(random > 10 && random <= 20) {
        console.log(random);
        return 'paper';
    }
    else {
        console.log(random);
        return 'scissors';
    }
}

console.log(getComputerChoice());

function getHumanChoice() {
    let choice = window.prompt('Choose between: rock , paper or scissors');
    choice = choice.toLowerCase();
    if(choice === 'rock') {
        return 'rock';
    }
    else if(choice === 'paper') {
        return 'paper';
    }
    else if(choice === 'scissors') {
        return 'scissors';
    }
}

console.log(getHumanChoice());

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    
}

