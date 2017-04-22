function getUserChoice() {
  var userInput = prompt('What is your name?');
  userInput = userInput.toLowerCase();
  if(userInput==='rock' || userInput==='paper' || userInput==='scissors') {
    return userInput;
}else {
  console.log('Error!');
}
}
function getComputerChoice() {
  var randomNumber = Math.floor(Math.random()*3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
                      }
}
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice){
    return  'Game is a tie!';
  } if (userChoice === 'bomb'){
    return 'You won!';
  }
  if(userChoice === 'rock' && computerChoice === 'scissors') {
    return 'You won!';
  }else if (userChoice === 'scissors' && computerChoice === 'rock') {
    return 'Computer won!';
  }else if (userChoice === 'rock' && computerChoice === 'paper') {
    return 'Computer won!';
  }else if (userChoice === 'paper' && computerChoice === 'rock') {
    return 'You won!';
}
}
function playGame () {
  var userChoice = getUserChoice();
  var computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('Computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));

}
playGame();
