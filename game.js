$(() => {
    console.log("jquery");

$("#start-btn").click(function() {

    $("#start-page").toggleClass("hidden");  
    $(".game-box").toggleClass("hidden", false);

    const songs = [
        "Another one bites the dust",
        "Hit the road jack",
        "I want to break free",
        "Take a chance on me",
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

    // check right guesses
    let correctSong = [];
    let correctWordGuess = [];
    let wrongGuesses = [];
    let userInput; 


    // ON SUBMIT
    $("#user-interaction").submit(function (event) { 
        event.preventDefault();
        userInput = $("#user-input").val();
        console.log("User guessed: " + userInput);
        $("#user-input").val('');

        for (let i = 0; i < songWords.length; i++) {
            if (songWords[i].toLowerCase() === userInput.toLowerCase()) {
                displayCorrectGuess(i, userInput.toLowerCase());
                correctWordGuess.push(userInput);
                console.log(correctWordGuess);
                break;
            }
        }

        if (songWords.length === correctWordGuess.length) {
            correctSong.push(songWords);
            $(".message").text("You got it!");

            console.log("User guesed the right song!")
        }

        console.log(correctSong);

    });

    

    




    //if correct! Change H3 to $("h3").text("You are correct!") ;



    //Handling cancel button - instead of on H1 do it on cancel button and "page reload"
    const clickFunctions = () => alert ("Done playing already?");

    document.querySelector("h1").onclick = () => clickFunctions();

    });
});