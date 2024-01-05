$(() => {

    const songs = [
        "Another one bites the dust",
        "Hit the road Jack",
        "I want to break free",
        "Take a chance on me",
        "Blame it on the boogie",
        "Dont stop believin",
        "Sweet dreams are made of this",
        "YMCA",
        "Never gonna give you up"
    ];

    const audioArray = [
        "another-one-bites.mp3", 
        "hit-the-road-jack.mp3", 
        "i-want-to-break-free.mp3",
        "take-a-chance.mp3",
        "blame-it-on-the-boogie.mp3",
        "dont-stop-believin.mp3",
        "sweet-dreams.mp3",
        "ymca.mp3",
        "never-gonna-give-you-up.mp3"
    ];
            
    const randomIndex = [Math.floor(Math.random() * songs.length)];
    const randomSong = () => songs[randomIndex];
    let audio;

    const playSong = () => {
        audio = new Audio(audioArray[randomIndex]);
        audio.play();
    };

    const pauseSong = () => {
        if (audio) {
            audio.pause();
            console.log("Song paused");
        }
    };

    $("#sound-btn").click(function () {
        $("#sound-btn").toggleClass("inactive");
        if ($("#sound-btn").hasClass("inactive")){
            pauseSong();
        } else {
            playSong();
        }
    });

    const songWords = (randomSong().split(' '));
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

    const startGame = () => {
        $("#start-page").toggleClass("hidden");  
        $(".game-box").toggleClass("hidden", false);
        playSong();
    };

    let correctSong = [];
    let correctWordGuess = [];
    let wrongGuess = [];
    let userInput; 

    const submit = (event) => { 
        event.preventDefault();
        userInput = $("#user-input").val();
        console.log("User guessed: " + userInput);
        $("#user-input").val('');

        for (let i = 0; i < songWords.length; i++) {
            if (songWords[i].toLowerCase() === userInput.trim().toLowerCase()) {
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
            $("#game-box-txt").text("You got it!");
            $("#game-box-txt").addClass("spin");
            pauseSong();
        }
    };
     

    $("#start-btn").click(startGame);
    $("#user-interaction").submit(submit);


    const showPopup = () => {
        $(".game-box").addClass("blur");
        $("#cancel-popup").toggleClass("hidden");
        pauseSong();
        }

    const backToHome = () => {
        location.reload();
    }

    const resumeGame = () => {
        $("#cancel-popup").toggleClass("hidden");
        playSong();
        $(".game-box").removeClass("blur");
    }

    $("#cancel-btn").click(showPopup);
    $("#confirm-quit").click(backToHome);
    $("#resume").click(resumeGame);

});