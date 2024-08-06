//Get computer Choice
function getComputerChoice(computerChoice) {
    //return random choice
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];

}
// create list of values and store in memory
const computerChoice = ["Rock", "Paper", "Scissors"];
// store random values selected 
const randomValue = getComputerChoice(computerChoice)
// print slected value 
console.log(randomValue)


// Get Human Choice 
// create a funtion named GethumanChoice

function getHumanChoice(userChoice) {
    //prompt user for input
    userChoice = prompt("Type your choice")
    //return human Choice
    return userChoice
}
// call Human Choice Function and store its value 
selectedchoice = getHumanChoice()
//print selectedchoice value
console.log(selectedchoice)
