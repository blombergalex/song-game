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

    const audioArray = [
        "another-one-bites.mp3", 
        "hit-the-road-jack.mp3", 
        "i-want-to-break-free.mp3",
        "take-a-chance.mp3"
    ];

     // const audioElement = new Audio("./audio/take-a-chance.mp3");
    // audioElement.play();

    // Function generating song
    const randomSong = () => {
        return songs[Math.floor(Math.random() * songs.length)];
    } 
    
    //play song
    const audioIndex = songs.indexOf(randomSong());
    console.log(audioIndex);
    // console.log(audioIndex);
    const audio = new Audio(audioArray[audioIndex]);
    audio.play();

    // Split song-string 

    let songWords = (randomSong().split(' '));
    console.log(songWords);
    console.log("Is songWords an array: " + Array.isArray(songWords));



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
    let wrongGuess = [];
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
            } else {
                wrongGuess.push(userInput);

            }
        }

        if (songWords.length === correctWordGuess.length) {
            correctSong.push(songWords);
            $(".game-box.txt").text("You got it!");
        }

        console.log(correctSong);

    });

    

    



    //Handling cancel button - instead of on H1 do it on cancel button and "page reload"
    const clickFunctions = () => alert ("Done playing already?");

    document.querySelector("h1").onclick = () => clickFunctions();

    });
});