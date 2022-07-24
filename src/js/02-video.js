import Player from '@vimeo/player';

// const player = new Player('handstick', {
//     id: 19231868,
//     width: 640
// });


const iframe = document.querySelector("#vimeo-player");
const player = new Player(iframe);
console.log(player)
player.on(('timeupdate', throttle(1000)), function(sec) {
    console.log(sec.seconds);
});

// player.getVideoTitle().then(function(title) {
//     console.log('title:', title);
// });


player.getCurrentTime().then(function(seconds) {
    console.log(seconds)
}).catch(function(error) {
    // an error occurred
});

// player.setCurrentTime(30.456).then(function(seconds) {
//     // seconds = the actual time that the player seeked to
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });