import {constants} from './constants.js';
import {handleVideo} from './video.js';

const {playButton, video} = constants;

// EVENT
playButton.addEventListener('click', (e) => handleVideo(e.target, video));


