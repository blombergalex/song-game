const songs = [
    "another one bites the dust",
    "hit the road jack",
    "i want to break free",
    "ah ha ha ha stayin alive",
    "gimme gimme gimme a man after midnight",
];

// Function generating song
const randomSong = () => {
    return songs[Math.floor(Math.random() * songs.length)];
}


// Split song-string 

let separateWords = (randomSong().split(' '));
console.log(separateWords);
console.log("Is separateWords an array: " + Array.isArray(separateWords));


// turn each value in array to placeHolder:

 const createWordPlaceholder = (word) => {
    const placeHolder =  document.createElement("div");
    placeHolder.innerText = "_";
    document.querySelector(".song-para").appendChild(placeHolder);
}

separateWords.forEach(createWordPlaceholder);


// check right guesses
let correctGuesses = [];
let wrongGuesses = [];
let userInput; 

document.querySelector("#user-interaction").addEventListener("submit", function (event) {
    event.preventDefault();
    userInput = document.querySelector("#user-input").value;
    console.log("User guessed: " + userInput);
    document.querySelector("#user-input").value = '';

    if (separateWords.includes((userInput).toLowerCase())) {
        console.log("Song includes " + userInput)
        correctGuesses.push(userInput);
        console.log(correctGuesses);
    } else if (!separateWords.includes((userInput).toLowerCase())) {
        wrongGuesses.push(userInput);
        console.log(wrongGuesses);
}});

console.log(userInput);
console.log(correctGuesses);

// Function displaying song in frontend - use with adding class to display word when userInput === word of song string
const displaySong = () => {
    const newPara  = document.createElement("p");
    newPara.innerText = (randomSong());
    document.querySelector(".song-para").appendChild(newPara);
}

const displayCorrectGuess = () => {

}

//Handling cancel button



// instead of on H1 do it on cancel button! 
const clickFunctions = () => alert ("Done playing already?");

document.querySelector("h1").onclick = () => clickFunctions();







