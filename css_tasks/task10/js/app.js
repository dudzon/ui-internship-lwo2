import {constants} from './constants.js';
import {handleVideo, handleLoadedVideo, handleLoadingVideo} from './video.js';

const {playButton, video, jumbotronText, jumbotronImage, message} = constants;

// EVENTS
video.load();
// Hide text until video is loaded
video.addEventListener('waiting', () => handleLoadingVideo(jumbotronText));

//  When video has been loaded, hide message that video is loading
//  and display button to manipulate video

video.addEventListener('canplaythrough', () =>
  handleLoadedVideo(jumbotronImage, video, jumbotronText, playButton, message)
);

//  play or pause video
playButton.addEventListener('click', (e) => handleVideo(e.target, video));
