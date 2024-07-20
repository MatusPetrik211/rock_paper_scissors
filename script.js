function getComputerChoice() {
    // Get random number between 1 and 30
    let random = Math.floor(Math.random() * 30) + 1;
    if(random <= 10) {
        return 'rock';
    }
    else if(random > 10 && random <= 20) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

function getHumanChoice() {
    choice = undefined;
    while(choice === null || choice === undefined) {
        let choice = window.prompt('Choose between: rock , paper or scissors');

        // if value isn't lower case then make it lower case
        if(choice.toLowerCase() !== choice) {
            choice = choice.toLowerCase();
        }
    
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
}

function playGame() {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        if(humanChoice === computerChoice) {
            console.log('Draw!');
        }
        // Checking all the possible choices when player would've won
        else if ((humanChoice === 'paper' && computerChoice === 'rock')
            || (humanChoice === 'rock' && computerChoice === 'scissors')
            || (humanChoice === 'scissors' && computerChoice === 'paper')) 
            {
            console.log(`You won! ${humanChoice} beats ${computerChoice}.`);
            humanScore++;
        }
        // If none of the statements above are true, then computer won
        else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            computerScore++;
        }
    }

    for(let i = 1; i <= 5; i++)
    {
        console.log(`Round ${i}`);
        console.log(`Computer choose ${computerSelection}.`);
        playRound(humanSelection, computerSelection);
        console.log(' ');
        if(i <= 4 )
        {
            humanSelection = getHumanChoice();
            computerSelection = getComputerChoice();
        }
    }

    if(humanScore > computerScore) {
        console.log("You've won. CONGRATULATIONS!!");
    }
    else if(computerScore > humanScore) {
        console.log("You've lost. Try again next time!!");
    }
    else {
        console.log("It's a DRAW!!");
    }

    console.log('!!SCORE!!');
    console.log(`human: ${humanScore} computer: ${computerScore}`);
}

playGame();
