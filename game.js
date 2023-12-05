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

// console.log(randomSong()); 

const displaySong = () => {
    const newPara  = document.createElement("p");
    newPara.innerText = (randomSong());
    document.querySelector(".song-para").appendChild(newPara);
}

displaySong()


    

// create function that lets user guess for word in song



//When creating a new array out of info from user input, use .isArray to check that I am actaully using an array. 

// console.log(`Checking array: ${Array.isArray(songs)}`);


//Handling cancel button



// instead of on H1 do it on cancel button! 
const clickFunctions = () => alert ("Done playing already?");

document.querySelector("h1").onclick = () => clickFunctions();







