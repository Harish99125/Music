document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audioPlayer');
    const backButton = document.getElementById('backbutton'); 
    const songs = document.querySelectorAll('#audioPlayer source');

    let currentSongIndex = 0;

    function playPreviousSong() {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        audioPlayer.src = songs[currentSongIndex].src;
        audioPlayer.play(); 
    }

    backButton.addEventListener('click', playPreviousSong); 
});

document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audioPlayer');
    const nextButton = document.getElementById('nextButton');
    const songs = document.querySelectorAll('#audioPlayer source');

    let currentSongIndex = 0;

    function playNextSong() {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        audioPlayer.src = songs[currentSongIndex].src;
        audioPlayer.play();
    }

    nextButton.addEventListener('click', playNextSong);

    audioPlayer.addEventListener('ended', playNextSong);
});

document.addEventListener("DOMContentLoaded", function() {
    const audioPlayer = document.getElementById("audioPlayer");
    const playPauseButton = document.getElementById("playPauseButton");

    playPauseButton.addEventListener("click", function() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseButton.textContent = "Pause";
        } else {
            audioPlayer.pause();
            playPauseButton.textContent = "Play";
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audioPlayer');
    const songNameListItems = document.querySelectorAll('#songNameContainer li');

    let currentSongIndex = 0;

    function highlightCurrentSong() {
        songNameListItems.forEach(item => {
            item.classList.remove('highlight');
        });
        songNameListItems[currentSongIndex].classList.add('highlight');
    }

    document.getElementById('backbutton').addEventListener('click', function () {
        if (currentSongIndex > 0) {
            currentSongIndex--;
            audioPlayer.src = audioPlayer.children[currentSongIndex].src;
            audioPlayer.play();
            highlightCurrentSong();
        }
    });

    document.getElementById('nextButton').addEventListener('click', function () {
        if (currentSongIndex < songNameListItems.length - 1) {
            currentSongIndex++;
            audioPlayer.src = audioPlayer.children[currentSongIndex].src;
            audioPlayer.play();
            highlightCurrentSong();
        }
    });
});

