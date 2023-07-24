"use strict";
//JS PROJECT 2 - NUMBER GUESSING GAME

//roadmap:
//alle dokumente miteinander verknüpfen ---CHECK
//html schreiben, nach Aufabenvorlage ---CHECK
//stylen nach Aufgabenvorlage ---
//js:
//document. ziehen ---CHECK
//func() WAS?: spiel = punkte = gewinner/verlierer = rechnen = runden
//func() WANN?: zahl lesen, wenn user input, zahl berechnen (vergleich) wenn button-klick
//func()WIE OFT/LANGE?: func() einmaliger durchlauf, aber für jedesmal buttonklick, bzw runden
//kurzschreibweise?

//get htmelements
const form = document.forms["ngg_form"];

const roundsInput = document.getElementsByClassName("radiobutton");
const guessInput = document.getElementById("guess");
const guessButton = document.getElementById("guess_button");
const restartInput = document.getElementById("restart_button");

const roundsOutput = document.getElementById("current_round");
const numGuessesOutput = document.getElementById("guess_numbers");
const wrongGuessesOutput = document.getElementById("wrong_guesses");
const textResultOutput = document.getElementById("text_result");


//func()  get random num
function getRandomNumber() {
    return Math.floor(Math.random()*100+1);
};
let randomNumber
//console.log(randomNumber);
//console.log(roundsInput);

//func() max rounds

function getMaxRounds() {
    for(let radiobutton of roundsInput) {
        if(radiobutton.checked) {
            //console.log(radiobutton.value);
            maxRounds = Number(radiobutton.value);
        }
    }
}
let maxRounds = 0;
//alternativ: let maxRounds


//func() check rounds
let round = 0;

function checkRoundCounter() {
    round = round+1;
};


//func() disable inputs
function disableInputs() {
    guessButton.disabled = true;
    guessInput.disabled = true;
}


//func() check num and do outputs
function gamePlay(event) {
    event.preventDefault();
    checkRoundCounter();
    if(guessInput.value === "") {
        textResultOutput.textContent = "Please provide a number!";
        return
    } else if(round === 1) {
        getMaxRounds();
        randomNumber = getRandomNumber();
    }
    roundsOutput.textContent = "This is round" + " " + round + " " + "of" + " " + maxRounds;
    //console.log(maxRounds);
    const guessNumber = Number(guessInput.value);
    //console.log(guessNumber);
    //console.log(randomNumber);
    if(guessNumber === randomNumber) {
        textResultOutput.textContent = "Congratulations, this is the correct guess!";
        disableInputs();
    } else if(guessNumber < randomNumber) {
        textResultOutput.textContent = "Too low, try again";
    } else if(guessNumber > randomNumber) {
        textResultOutput.textContent = "Too high, try again";
    }
    wrongGuessesOutput.textContent = guessNumber;
    if(round === maxRounds) {
        textResultOutput.textContent = "Too bad, you lose"
        disableInputs();
        return
    }
};


guessButton.addEventListener("click", gamePlay);
//wenn js addeventlistener = html ohne button="onclick"


//func() enable inputs
function enableInputs() {
    guessButton.disable = false;
    guessInput.disable = false;
}

//func() restart
restartInput.addEventListener("click", function() {
    enableInputs();
    roundsInput = "";
    guessInput = "";

    roundsOutput = "";
    numGuessesOutput = "";
    wrongGuessesOutput = "";
});