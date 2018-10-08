// create sectret number
var secretNumber = 4;

var stringGuess = prompt("Guess a number between 1 & 10");
var guess = Number(stringGuess);

if(guess === secretNumber) {
  alert("You got it right!!");
}
else if(guess > secretNumber) {
  alert("too high, guess again");
}
else {
  alert("Too low guess again");
}
