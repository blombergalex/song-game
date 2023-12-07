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


// Get user input 

let userInput; 

document.querySelector("#user-interaction").addEventListener("submit", function (event) {
    event.preventDefault();
    userInput = document.querySelector("#user-input").value;
    console.log("User guessed: " + userInput);

    if (separateWords.includes(userInput)) {
        console.log("Song includes ${userInput}")
    }
});




// Compare user input to array

// använd separateWords och userInput  

let song = separateWords;
console.log(separateWords);
console.log(userInput);

console.log(song.includes (userInput));     


let correctGuesses = [];
console.log ("Correct guess: " + correctGuesses);


if (separateWords.includes(userInput)) {
    // correctGuesses.push(userInput);
    console.log("Song includes: " + userInput);
};  



// TRIAL AND ERROR



// // Get user input (assuming it is stored in a variable called userInput)

// fruits = ["banana", "apple", "grape", "grapefruit", "kiwi"];
// const userFruit = prompt("Enter a fruit:");

// // Check if the userInput is in the array
// if (fruits.includes(userFruit)) {
//     console.log("The array contains the fruit: " + userFruit);
// } else {
//     console.log("The array does not contain the fruit: " + userFruit);
// }



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







