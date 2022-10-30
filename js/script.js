const message = document.querySelector(".message");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingGuessesNumber = document.querySelector(".remaining span");
const guessedLettersList = document.querySelector(".guessed-letters");
const letterInput = document.querySelector(".letter");
const buttonGuess = document.querySelector(".guess");
const buttonPlayAgain = document.querySelector(".play-again");


// list of guessed letters
const guessedList = [];


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


buttonGuess.addEventListener("click", function (e) {
    // prevent form submission and reloading of the page
    e.preventDefault();
    // get value of input
    const inputLetter = letterInput.value;
    // console.log(inputLetter);
    const validatedLetter = checkAlphabet(inputLetter);
    // console.log(validatedLetter);

    // if the previous function returns a value (which it 
    // only will if the correct value is entered) then run next function
    if (validatedLetter) {
        checkAlreadyGuessed(validatedLetter);
        // show the letters
        matchGuessedLetter(guessedList);
    }

    // empty out the input field
    letterInput.value = "";
});

// check input to match alphabets and single entry
const checkAlphabet = function (letter) {
    const requirement = /[A-Za-z]/;
    const letterEntered = letter;
    const check = letterEntered.match(requirement);
    if (letterEntered === "") {
        // check for empty input value
        message.innerText = ("Enter a letter first then press button");
    }
    else if (letterEntered.length > 1) {
        // check for more than one letter entered
        message.innerText = ("Enter a single letter");
    }
    else if (check) {
        // correct value entered
        message.innerText = ("");
        // return the value so that it can be used in next function
        return letter;
        // or run function here instead of in the button event
        // checkAlreadyGuessed(letterEntered);
    }
    else {
        // check if the entered value is a letter not a number or symbol
        message.innerText = ("Enter a letter between A - Z")
    }
};

// check input against already existing guesses
const checkAlreadyGuessed = function (letter) {
    // case sensitive
    const UpperCaseLetter = letter.toUpperCase();

    if (guessedList.includes(UpperCaseLetter)) {
        message.innerText = ("Already guessed. Try a different letter");;
    }
    else {
        // message.innerText = ("");
        guessedList.push(UpperCaseLetter);
        // console.log(list);
        showGuessedList();
    }
    
};

// show guessed letters list 
const showGuessedList = function () {
    // clear the list
    guessedLettersList.innerHTML = "";

    for (let letter of guessedList) {
        let li = document.createElement("li");
        li.innerText = letter;
        guessedLettersList.append(li);
    }
   
};

// match letters to the word to reveal the word
const matchGuessedLetter = function (list) {
    const upperCaseWord = word.toUpperCase();

    // split the letters of the word into an array
    const singleLetters = upperCaseWord.split("");

    
    let revealLetters = [];

    // compare letters
    for (let letter of singleLetters) {
        if ( list.includes(letter) ) {
            revealLetters.push(letter);
        }
        else {
            revealLetters.push("●")
        }
    }

    const correctLetters = revealLetters.join("");
    wordInProgress.innerText = correctLetters;

    // check if word is complete
    won();
};

const won = function () {
    if ( word.toUpperCase() === wordInProgress.innerHTML) {
        message.classList.add("win");
        message.innerHTML = `<p class="highlight">You guessed the correct word! Congrats!</p>`;  
        buttonGuess.classList.add("hide");
        buttonPlayAgain.classList.remove("hide");    
        
    }
};
    


