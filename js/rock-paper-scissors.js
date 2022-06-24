function computerPlay() {
    const getRandInteger = (min, max) => Math.floor(Math.random()*((max + 1) - min)) + min;
    let computerChoice = getRandInteger(1, 3);
    switch (computerChoice) {
        case 1:
            return 'Rock';
        case 2:
            return 'Paper';
        case 3:
            return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    const sanitizeInput = (rawInput) => {
        if (rawInput === null || rawInput == undefined) {
            return 'Invalid input type.';
        }
        const input = rawInput.toLowerCase().trim();
        if (input !== 'rock' && input !== 'paper' && input !== 'scissors') {
            return 'Invalid input choice.';
        }
        return input;
    }

    playerSelection = sanitizeInput(playerSelection);
    computerSelection = sanitizeInput(computerSelection);

    switch (playerSelection) {
        case 'rock':
            switch (computerSelection) {
                case 'rock':
                    return 'It\'s a tie! A rocky one.';
                case 'paper':
                    return 'You lose! Computer served you papers!';
                case 'scissors':
                    return 'You win! Your rock crushed enemy scissors.';
            }
        case 'paper':
            switch (computerSelection) {
                case 'rock':
                    return 'You win! You papercut the opponent\'s rock.';
                case 'paper':
                    return 'It\'s a tie! A paper-thin one.';
                case 'scissors':
                    return 'You lose! Scissors shredded your paper.';
            }
        case 'scissors':
            switch (computerSelection) {
                case 'rock':
                    return 'You lose! Rock crushed your scissor-y blades.';
                case 'paper':
                    return 'You win! You cut a paper snowflake out of the enemy.';
                case 'scissors':
                    return 'It\'s a tie! Scissoring halts the battle.';
            }
        default:
            return 'Invalid user input.';
    }
}

var playerScore = 0;
var computerScore = 0;

function checkForWinner(playerScore, computerScore) {
    if (playerScore >= 5) {
        let div = document.querySelector('.round-result-display');
        div.textContent = "Player wins! That's you. Refresh to play again.";
    } else if (computerScore >= 5) {
        let div = document.querySelector('.round-result-display');
        div.textContent = "Robot wins! Refresh to play again.";
    }
}

function updateScoreUI(playerScore, computerScore) {
    playerScoreDiv = document.querySelector('.player-score');
    computerScoreDiv = document.querySelector('.computer-score');
    playerScoreDiv.dataset.score = parseInt(playerScore);
    playerScoreDiv.textContent = parseInt(playerScore);
    computerScoreDiv.dataset.score = parseInt(computerScore);
    computerScoreDiv.textContent = parseInt(computerScore);
}

function incrementScores(roundResult) {
    console.log(roundResult.includes('win'));
    if (roundResult.includes('win')) {
        playerScore = playerScore + 1;
        console.log(playerScore);
    } else if (!roundResult.includes('tie')) {
        computerScore = computerScore + 1;
        console.log(computerScore);
    }
    updateScoreUI(playerScore, computerScore);
}

function playerButtonPressed(e) {
    let playerMove = e.target.dataset.choice;
    let computerMove = computerPlay();
    let roundResult = playRound(playerMove, computerMove);
    let div = document.querySelector('.round-result-display');
    div.textContent = roundResult;
    incrementScores(roundResult);
    checkForWinner(playerScore, computerScore);
}

const startGame = () => {
    const buttons = document.querySelectorAll('.buttons-wrapper button');
    buttons.forEach(button => button.addEventListener('click', playerButtonPressed));
}

startGame();

