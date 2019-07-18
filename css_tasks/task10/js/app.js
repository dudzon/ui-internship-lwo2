import {constants} from './constants.js';
import {handleVideo, handleLoadedVideo, handleLoadingVideo} from './video.js';

const {playButton, video, jumbotronText, jumbotronImage} = constants;

// EVENTS

// Load hide text until video is loaded
video.addEventListener('waiting', () => handleLoadingVideo(jumbotronText));

//  and display it after with video

video.addEventListener('canplaythrough',
    () => handleLoadedVideo(jumbotronImage, video, jumbotronText));

//  play or pause video
playButton.addEventListener('click', (e) => handleVideo(e.target, video));
