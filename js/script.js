const message = document.querySelector(".message");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingGuessesNumber = document.querySelector(".remaining span");
const guessedLettersList = document.querySelector(".guessed-letters");
const letterInput = document.querySelector(".letter");
const buttonGuess = document.querySelector(".guess");
const buttonPlayAgain = document.querySelector(".play-again")


// temporary word
const word = "magnolia";

// placeholder for each letter
const placeholder = function(word){
    let letters = [];
    for (let letter of word){
        letter = "●";
        letters.push(letter);
    }
    const placeholderLetters = letters.join("");
    wordInProgress.innerText = placeholderLetters;
};

placeholder(word);

// save input letter 
buttonGuess.addEventListener("click", function (e) {
    e.preventDefault();
    const inputLetter = letterInput.value;
    console.log(inputLetter)
    letterInput.value = "";
})