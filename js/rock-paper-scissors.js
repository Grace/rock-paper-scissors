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

const startGame = () => {
    let playerMove;
    let computerMove;
    for(let i = 0; i < 5; i++) {
        playerMove = prompt("Rock, paper, or scissors?");
        computerMove = computerPlay();
        console.log(playRound(playerMove, computerMove));
    }
}

startGame();

