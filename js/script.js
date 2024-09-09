// grab html selectors

const choices = document.querySelectorAll('.choice');
const score = document.querySelector('#score');
const result = document.querySelector('#result');
const restart = document.querySelector('#restart');
const modal = document.querySelector('.modal')

const scoreboard = {

    player: 0,
    computer: 0

};

// play game
function playgame(e) {
    // if (scoreboard.player < 5 && scoreboard.computer < 5) {
    restart.style.display = 'inline-block';
    const playerSelection = e.target.id;
    const computerSelection = getComputerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    playround(playerSelection, computerSelection, winner);


}
//}



// list of options to select from
const options = ["rock", "paper", "scissors"];
//Get computer Choice funtion
function getComputerChoice() {
    //make computer return a random chice
    const choice = options[Math.floor(Math.random() * options.length)];
    // return random choice
    return choice;


}

//write logic for who wins, lose or draw
function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie"
    }
    else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')) {

        return 'player'

    }
    else {
        return 'computer'
    }
}

function playround(playerSelection, computerSelection) {
    const gameResult = checkWinner(playerSelection, computerSelection)



    if (gameResult == 'player') {
        // increment score 
        scoreboard.player++;


        //console.log(scoreboard.player)
        // result.innerHTML = `
        //  <h1 class = 'text-win'> You Won!</h1>
        //  <i class=" fas fa-hand-${computerSelection} fa-10x">
        // <p> Computer chose <strong> ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} </p>

        // `;
        // }
    }
    else if (gameResult == 'computer') {

        //increment computer score
        scoreboard.computer++;

        // show modal result


        // result.innerHTML = `
        // <h1 class ="text-lose"> You Lose </h1>
        // <i class="fas fa-hand-${computerSelection} fa-10x">
        // <p> Computer chose <strong> ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} </p>

        //  `;

        // }
    }
    //else {
    // show modal Result
    //result.innerHTML = `
    // <h1> It's a Tie</h1>
    //<i class=" fas fa-hand-${computerSelection} fa-10x">
    // <p> Computer chose <strong> ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} </p>

    //`;
    //}


    // show score 

    score.innerHTML = `
  <p> player:${scoreboard.player}</p>
  <p> computer:${scoreboard.computer}</p>
 `;


    // Check if player or computer has won 5 rounds, only show modal when winner is declared
    if (scoreboard.player === 5) {
        result.innerHTML += `
            <h2 class="text-win">Congratulations! Player is  the winner!</h2>
        `;
        modal.style.display = 'block'; // Show modal only when player wins
    } else if (scoreboard.computer === 5) {
        result.innerHTML += `
            <h2 class="text-lose">Game Over! Computer wins!</h2>
        `;
        modal.style.display = 'block'; // Show modal only when computer wins
    }
}


// clear Modal 
function clearModal(e) {
    if (e.target == modal) {
        modal.style.display = 'none'
    }
}

// Restart Game 
function restartGame() {
    scoreboard.player = 0;
    scoreboard.computer = 0;

    score.innerHTML = `
    <p> player: 0 </p>
    <p> computer: 0 </p>
    `
}

// checkwins


//Add event Listenners

choices.forEach(chioce => chioce.addEventListener('click', playgame));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);









