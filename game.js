$(() => {
    console.log("jquery");

$("#start-btn").click(function() {

    $("#start-page").toggleClass("hidden");  
    $(".game-box").toggleClass("hidden", false);

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

    let songWords = (randomSong().split(' '));
    console.log(songWords);
    console.log("Is songWords an array: " + Array.isArray(songWords));


    // turn each value in array to placeHolder:
    //Skapa placeholder-funktion som tar vad som helst som parameter och sätter som placeholder

    const createWordPlaceholder = (text) => {
        const placeHolder =  document.createElement("div");
        $(placeHolder).text(text);
        $(".song-para").append(placeHolder);
    }

    $(songWords).each(() => createWordPlaceholder(""));

    const displayCorrectGuess = (index, userInput) => {
        $(".song-para div").eq(index).text(userInput);
    }

    //vid rätt gissning, ersätt word-placeholder med ordet. 
    //Kolla hur pass in mha backticks 


    // check right guesses
    let correctGuesses = [];
    let wrongGuesses = [];
    let userInput; 


    $("#user-interaction").submit(function (event) { 
        event.preventDefault();
        userInput = $("#user-input").val();
        console.log("User guessed: " + userInput);
        $("#user-input").val('');

        for (let i = 0; i < songWords.length; i++) {
            if (songWords[i] === userInput.toLowerCase()) {
                displayCorrectGuess(i, userInput.toLowerCase());
                break;
            }
        }

        // if 

        // if ($.inArray(userInput.toLowerCase(), songWords) !== -1) {
        //     console.log("Song includes " + userInput);
        //     $(songWords).each(() => createWordPlaceholder(userInput));
        // } else {
        //     console.log ("Wrong guess");
        // }

        // if (songWords.includes((userInput).toLowerCase())) {
        
        //     console.log("Song includes " + userInput)
        //     correctGuesses.push(userInput);
        //     console.log(correctGuesses);
        // } else if (!songWords.includes((userInput).toLowerCase())) {
        //     wrongGuesses.push(userInput);
        //     console.log(wrongGuesses);
    });

    // console.log(userInput);
    // console.log(correctGuesses);


    //if correct! Change H3 to $("h3").text("You are correct!") ;


    // Function displaying song in frontend - use with adding class to display word when userInput === word of song string
    const displaySong = () => {
        const newPara  = document.createElement("p");
        newPara.innerText = (randomSong());   //use append to add text, see review js file
        document.querySelector(".song-para").appendChild(newPara);
    }


    //Handling cancel button - instead of on H1 do it on cancel button and "page reload"
    const clickFunctions = () => alert ("Done playing already?");

    document.querySelector("h1").onclick = () => clickFunctions();

    });
});