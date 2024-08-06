//Get computer Choice
function getComputerChoice(computerChoice){
    //return random choice
    return computerChoice[Math.floor(Math.random()*computerChoice.length)];
   
}
// create list of values and store in memory
const computerChoice = ["Rock","Paper", "Scissors"];
// store random values selected 
const randomValue = getComputerChoice(computerChoice)
// print slected value 
console.log(randomValue)