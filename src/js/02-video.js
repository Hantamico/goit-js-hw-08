import Player from "@vimeo/player"


var _ = require("lodash.throttle");


const iframe = document.querySelector('iframe');

const player = new Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";

const throttledGetTime = _(playerGetTime, 1000);

player.on('timeupdate', throttledGetTime);
// player.on('play', playerSetTime);
playerSetTime()

function playerGetTime() {
    player.getCurrentTime().then(function(seconds) {
        localStorage.setItem(LOCALSTORAGE_KEY, seconds);
    });
};

function playerSetTime() {
    let newTime = localStorage.getItem(LOCALSTORAGE_KEY);

    if (newTime === null) {
        newTime = 0;
    }

    player.setCurrentTime(newTime).then(function(newTime) {
    // seconds = the actual time that the player seeked to
    });

};
