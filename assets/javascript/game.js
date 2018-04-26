
// varable alphabet array
var alphaLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// An array that will hold all the user's guesses
var guessInput = [];

//defining the global variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;

// userGuess variable
var userGuess = null;

// Computer picks a letter
var letterChoice = alphaLetters[Math.floor(Math.random() * alphaLetters.length)];

//console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessInput + " Computer picked: " + letterChoice);

// Event start listener
document.onkeyup = function(event) {

	// Get input from user
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	// Add the user's guess to guessInput array

	if (guessInput.indexOf(userGuess) < 0 && alphaLetters.indexOf(userGuess) >= 0) {
		guessInput[guessInput.length]=userGuess;
		guessesLeft--;
	}

    // if the letter is equal to user's input, increase win counter by 1
    //reset guesses to 9 and clear the array
    //Then have the computer pick another random letter
	if (letterChoice == userGuess) {
		wins++;
		guessesLeft = 9;
		guessInput = [];
		letterChoice = alphaLetters[Math.floor(Math.random() * alphaLetters.length)];
		//console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessInput + " Computer picked: " + letterChoice);
	}

	// when guesses left hits 0, increase losses counter and
	// reset guessesLeft to 9, and clear the array
	// also have the computer pick another random letter
	if (guessesLeft == 0) {
		losses++;
		guessesLeft = 9;
		guessInput = [];
		letterChoice = alphaLetters[Math.floor(Math.random() * alphaLetters.length)];
		//console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessInput + " Computer picked: " + letterChoice);
	}

	// Displaying progress to HTML
	var html = "<p><h1>The Psychic Game</h1></p>" + "<p><h4>Guess what letter I\'m thinking of</h4></p>" + "<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4>Losses: " + losses + "</h4></p>" + "<p><h4>Guesses Left: " + guessesLeft + "</h4></p>" + "<p><h4>Your guesses so far: " + guessInput + "</h4></p>";
	// place html into the game ID
	document.querySelector("#game").innerHTML = html;

}