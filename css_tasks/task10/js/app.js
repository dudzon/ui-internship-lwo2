import {constants} from './constants.js';
import {handleVideo, handleLoadedVideo, handleLoadingVideo} from './video.js';

const {playButton, video, jumbotronText, jumbotronImage, message} = constants;

// EVENTS

// Load hide text until video is loaded
video.addEventListener('loadstart', () => handleLoadingVideo(jumbotronText));

//  and display it after with video

video.addEventListener('canplay', () =>
  handleLoadedVideo(jumbotronImage, video, jumbotronText, playButton, message)
);

//  play or pause video
playButton.addEventListener('click', (e) => handleVideo(e.target, video));
