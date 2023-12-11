const songs = [
    "Another one bites the dust",
    "Hit the road Jack",
    "I want to break free",
    "Ah ha ha ha stayin alive",
    "Gimme gimme gimme a man after midnight",
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

 const createWordPlaceholder = () => {
    const placeHolder =  document.createElement("div");
    placeHolder.innerText = "_";
    document.querySelector(".song-para").appendChild(placeHolder);
}

separateWords.forEach(createWordPlaceholder);


//New solution
let correctGuesses = [];
let userInput; 

document.querySelector("#user-interaction").addEventListener("submit", function (event) {
    event.preventDefault();
    userInput = document.querySelector("#user-input").value;
    console.log("User guessed: " + userInput);

    if (separateWords.includes(userInput)) {
        console.log("Song includes " + userInput)
        correctGuesses.push(userInput);
        console.log(correctGuesses);
    }
});

console.log(userInput);
console.log(correctGuesses);


// Compare user input to array

// använd separateWords och userInput  


// CLEARING USER INPUT
// write function that either loops through input and do value == ' ' - or just do value = ' '
// const clearInput = () => document.querySelector("#user-input").value === '';
//     clearInput();



// Function displaying song in frontend - use with adding class to display word when userInput === word of song string
const displaySong = () => {
    const newPara  = document.createElement("p");
    newPara.innerText = (randomSong());
    document.querySelector(".song-para").appendChild(newPara);
}

// displaySong()


//Handling cancel button



// instead of on H1 do it on cancel button! 
const clickFunctions = () => alert ("Done playing already?");

document.querySelector("h1").onclick = () => clickFunctions();







