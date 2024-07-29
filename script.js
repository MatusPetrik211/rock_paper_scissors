function getComputerChoice() {
    const rock = document.querySelector('#computer-rock');
    const paper = document.querySelector('#computer-paper');
    const scissors = document.querySelector('#computer-scissors');
    // Get random number between 1 and 30
    let random = Math.floor(Math.random() * 30) + 1;
    if(random <= 10) {
        rock.setAttribute('style', 'background-color: rgb(101, 173, 119); border-width: 4px; transition: all 0.3s linear;')
        return 'rock';
    }
    else if(random > 10 && random <= 20) {
        paper.setAttribute('style', 'background-color: rgb(101, 173, 119); border-width: 4px; transition: all 0.3s linear;')
        return 'paper';
    }
    else {
        scissors.setAttribute('style', 'background-color: rgb(101, 173, 119); border-width: 4px; transition: all 0.3s linear;')
        return 'scissors';
    }

}


function playGame() {
    const result = document.querySelector('.result');
    const humanScoreCount = document.querySelector('.player-score');
    const computerScoreCount = document.querySelector('.computer-score');
    const playerRock = document.querySelector('#player-rock');
    const playerPaper = document.querySelector('#player-paper');
    const playerScissors = document.querySelector('#player-scissors');
    const computerRock = document.querySelector('#computer-rock');
    const computerPaper = document.querySelector('#computer-paper');
    const computerScissors = document.querySelector('#computer-scissors');

    result.textContent = "";

    let humanScore = 0;
    let computerScore = 0;

    humanScoreCount.textContent = `You: ${humanScore}`;
    computerScoreCount.textContent = `Computer: ${computerScore}`;

    playerRock.addEventListener('click', () => {
        let computerSelection = getComputerChoice(); 
        playRound('rock', computerSelection);
    });
    playerPaper.addEventListener('click', () => {
        let computerSelection = getComputerChoice();
        playRound('paper', computerSelection);
    });
    playerScissors.addEventListener('click', () => {
        let computerSelection = getComputerChoice();
        playRound('scissors', computerSelection);
    });
    

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
            humanScoreCount.textContent = `You: ${humanScore}`;
        }
        // If none of the statements above are true, then computer won
        else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            computerScore++;
            computerScoreCount.textContent = `Computer: ${computerScore}`;
        }

        // Wait 1 seconds to change the color back to normal
        setTimeout(function(){
            computerRock.setAttribute('style', 'background-color: rgba(110, 105, 82, 0.723); border: 3px black solid; transition: all 0.3s linear;');
            computerPaper.setAttribute('style', 'background-color: rgba(110, 105, 82, 0.723); border: 3px black solid; transition: all 0.3s linear;');
            computerScissors.setAttribute('style', 'background-color: rgba(110, 105, 82, 0.723); border: 3px black solid; transition: all 0.3s linear;');
        }, 500);

        if(humanScore ===  5 || computerScore === 5) {
            showEndMessage();
        }
    }


    function showEndMessage() {
        if(humanScore > computerScore) {
            result.textContent = "You've won. CONGRATULATIONS!!";
        }
        else if(computerScore > humanScore) {
            result.textContent = "You've lost. Try again next time!!";
        }
    }
}

playGame();
