import {constants} from './constants.js';
import {handleVideo} from './video.js';

const {playButton, video, jumbotronText, jumbotronImage} = constants;

// EVENTS

// Load hide text until video is loaded
video.addEventListener('waiting', () => {
  jumbotronText.style.display = 'none';
});
//  and display it after with video

video.addEventListener('canplaythrough', () => {
  jumbotronImage.remove();
  video.style.display = 'block';
  jumbotronText.style.display = 'flex';
});
//  play or pause video
playButton.addEventListener('click', (e) => handleVideo(e.target, video));
