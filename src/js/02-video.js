import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

console.log(localStorage)

player.on('timeupdate',  throttle( event => {
    localStorage.setItem('videoplayer-current-time', event.seconds);
    }, 1000)
);
console.log('localStorage', localStorage.length)

if(localStorage.length === 0) {
    return
} else {
    player
.setCurrentTime(localStorage.getItem('videoplayer-current-time'))
.catch(function (error) {
    console.error(error)
});
}
