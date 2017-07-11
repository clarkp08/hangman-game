
//create the variables
var wins;
var losses;
var words = ["liverpool",
			 "arsenal",
			 "chelsea", 
			 "bournemouth",
			 "palace", 
			 "everton", 
			 "city", 
			 "united", 
			 "leicester", 
			 "bournemouth", 
			 "burnley",
			 "stoke", 
			 "tottenham"];
var guessNumber;
var guessLetters = "";
var wordUnderscore;
var letterIndex = [];
var word;
var guessLetter;
var letterIndex;

wins = document.getElementById("wins");
losses = document.getElementById("losses");
guessNumber = document.getElementById("guess-number");

alert("Welcome to Premier League Soccer Hangman! Let's Go!")

//create the functions
function newWord() {
    word = words[Math.floor(Math.random() * words.length)];
    wordUnderscore = "";
    for (i = 0; i < word.length; i++) {
        wordUnderscore += "_";
    }

    document.getElementById("word").innerHTML = wordUnderscore;

}

function reset() {
    newWord();
    guessNumber.innerHTML = 8;
    guessLetters = "";
}


window.onload = function() {
    guessNumber.innerHTML = 8;
    wins.innerHTML = 0;
    losses.innerHTML = 0;
    newWord();

}



//create the if/then functions for the what the user does
document.onkeyup = function(event) {
    guessLetter = event.key;
    letterIndex = [];

    if (word.indexOf(guessLetter) === -1 && guessLetters.indexOf(guessLetter) === -1) {
        guessNumber.innerHTML--;
        if (guessLetters.indexOf(guessLetter) === -1) {
            guessLetters += guessLetter;
            document.getElementById("guess-letters").innerHTML = guessLetters;
        }
        if (guessNumber.innerHTML == 0) {
            losses.innerHTML++;
            reset();
        }
    }

    for (i = 0; i < word.length; i++) {
        if (word[i] === guessLetter) {
            letterIndex.push(i);
        }
    }
    console.log(letterIndex);
    for (j = 0; j < letterIndex.length; j++) {
        wordUnderscore = wordUnderscore.substring(0, letterIndex[j]) + word[letterIndex[j]] + wordUnderscore.substring(letterIndex[j] + 1);
        console.log(wordUnderscore);
    }

    document.getElementById("word").innerHTML = wordUnderscore;
    if (wordUnderscore === word) {
        wins.innerHTML++;
        reset();
    }
}

