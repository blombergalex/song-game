let songs = [
    "Another one bites the dust",
    "Jennie let me love you"
]


//function for choosing random song from array of songs:
const RANDOM_SONG = () => {
    return songs[Math.floor(Math.random() * songs.length)];
}

console.log(RANDOM_SONG());


// create function that lets user guess for word in song




//When creating a new array out of info from user input, use .isArray to check that I am actaully using an array. 

// console.log(`Checking array: ${Array.isArray(songs)}`);


//Handling cancel button



// instead of on H1 do it on cancel button! 
const clickFunctions = () => alert ("Done playing already?");

document.querySelector("h1").onclick = () => clickFunctions();
