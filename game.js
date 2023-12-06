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
// console.log(separateWords[2]);


// turn each value in array to placeHolder:

 const createWordPlaceholder = () => {
    const placeHolder =  document.createElement("div");
    placeHolder.innerText = "_";
    document.querySelector(".song-para").appendChild(placeHolder);
}

separateWords.forEach(createWordPlaceholder);


// Get user input 

document.querySelector("#user-interaction").addEventListener("submit", function (event) {
    event.preventDefault();
    let guess = document.querySelector("#user-input").value;
    console.log("User guess is: " + guess);
});

// Figure out how form is cleared without page being refreshed after user guess


// Function displaying song in frontend
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







