import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector("#vimeo-player");
const player = new Player(iframe);
const LOCALSTORAGE_KEY = localStorage.getItem("videoplayer-current-time");
console.log(LOCALSTORAGE_KEY);

player.on('timeupdate', throttle(saveSec, 1000));
 function saveSec(sec) {
localStorage.setItem("videoplayer-current-time", sec.seconds)
console.log(sec.seconds);

};
player.setCurrentTime(LOCALSTORAGE_KEY).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});