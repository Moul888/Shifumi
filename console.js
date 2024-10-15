console.log('hi');
const getUserChoice = (userInput) =>{
userInput = userInput.toLowerCase();
if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
return userInput; }
else {
  console.log('Error! Choose the right moove')
};
};
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return 'rock';
  }
  else if (randomNumber === 1) {
    return 'scissors';
  }
  else {
    return 'paper';
  };
  };

  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
    return 'It s a tie'};

if (userChoice === 'rock') {
  if(computerChoice === 'paper')
    {return 'Computer Win'}
  else
    {return 'You Won'}
};
 if (userChoice === 'paper') {
  if(computerChoice === "scissors")
     {return 'Computer Win'}
  else
    {return 'You Won'}
  }
 if(userChoice === 'scissors') {
  if(computerChoice === 'rock')
    {return 'Computer Win'}
  else
    {return 'You Won'}
 }
}

const playGame = () => {
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();

  console.log(`User choice: ${userChoice}`);
  console.log(`Computer choice: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
