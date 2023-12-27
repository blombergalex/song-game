$(() => {
    console.log("jquery");

$("#start-btn").click(function() {

    $("#start-btn").toggleClass("hidden");  
    $(".game-box").toggleClass("hidden", false  );

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

    const createWordPlaceholder = (placeholder) => {
        const placeHolder =  document.createElement("div");
        // $(placeHolder).text = placeHolder;
        $(".song-para").append(placeHolder(" _ "));
    }


    // $(songWords).each(() => createWordPlaceholder("_"));


    // check right guesses
    let correctGuesses = [];
    let wrongGuesses = [];
    let userInput; 




    $("#user-interaction").submit(function (event) { 
        event.preventDefault();
        userInput = $("#user-input").val();
        console.log("User guessed: " + userInput);
        $("#user-input").val('');

        if ($.inArray(userInput.toLowerCase(), songWords) !== -1) {
            console.log("Song includes " + userInput);
            // $(songWords).each(() => createWordPlaceholder(userInput));
            //Lägg placeholder-funktion här och ta userInput som placeholder = 
            // "-" ersätts med userInput om den finns i songWords array! 
        } else {
            console.log ("Wrong guess");
        }

        // if (songWords.includes((userInput).toLowerCase())) {
        
        //     console.log("Song includes " + userInput)
        //     correctGuesses.push(userInput);
        //     console.log(correctGuesses);
        // } else if (!songWords.includes((userInput).toLowerCase())) {
        //     wrongGuesses.push(userInput);
        //     console.log(wrongGuesses);
    });

    console.log(userInput);
    console.log(correctGuesses);


    // för att kunna display correct guess; 
    //   -- ta reda på vilken position i array songWords som correctGuess har
    //   -- ersätt placeholder på den positionen med correctGuess
    
    // const displayCorrectGuess = () => {

    // }

    //Använd jQuery .eq method för att ta reda på position i songWords-array som correctGuess har, för att sedan kunna
    // displaya det ordet i frontend. 


    // Function to find the index of a value in songWords based on correctGuesses
    const findIndexInsongWords = (value) => {
        return songWords.indexOf(value);
    };

    // Loop through correctGuesses and find the indices in songWords
    $.each(correctGuesses, function (index, value) {
        var indexOfValue = findIndexInsongWords(value);
        console.log("Index of '" + value + "' in songWords: " + indexOfValue);
    });

    findIndexInsongWords();




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