// list of options to select from
const options = ["rock", "paper", "scissors"];

//Get computer Choice funtion
function getComputerChoice() {

    //make computer return a random chice
    const choice = options[Math.floor(Math.random() * options.length)];
    // return random choice
    return choice;


}

// get human choice funtion
function getHumanChoice() {
    // validate human input 
    let validateInput = false;
    while (validateInput == false) {
        //prompt user for input
        const choice = prompt('rock paper scissors: ')
        if (choice == null) {
            continue;
        }
   
        // make hum choice case insensitive
            const choiceInLower = choice.toLowerCase();
            if (options.includes(choiceInLower)) {
                validateInput = true;
                return choiceInLower
            
        }
    }

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
    const result = checkWinner(playerSelection, computerSelection)

    if (result == 'Tie') {
        return "IT's a Tie"
    }
    else if (result == 'player') {
        return 'you win! ' + playerSelection + ' beats ' + computerSelection

    }
    else {

        return 'you lose! ' + computerSelection + ' beats ' + playerSelection


    }


}
function playgame() {
    let humanScore =0;
    let computerScore = 0;

    console.log("Welcome");
    for (let i = 0; i < 5; i++) {
        const playerSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playround(playerSelection, computerSelection));
        console.log ("--------")
        if (checkWinner(playerSelection,computerSelection)=='player'){
            humanScore++;

        }
        else if (checkWinner(playerSelection, computerSelection)== 'computer'){
            computerScore++;
            

        }


    }
    
    console.log("Game Over");

    if (humanScore > computerScore){
        console.log('Human was the winner')

    }
    else if (humanScore < computerScore){
        console.log("Computer was the winner")
    }
    else{
        console.log('We have a tie')
    }
 
}

playgame()




