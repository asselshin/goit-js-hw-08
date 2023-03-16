import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(function () {
  player.getCurrentTime().then(function (seconds) {
    localStorage.setItem('videoplayer-current-time', seconds);
  }).catch(function () {
    console.log("error occured")
  });
}, 1000)
);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));