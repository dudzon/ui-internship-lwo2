import {elements} from './elements.js';
export function videoInit() {
  elements.then((data) => {
    const {playButton, video, jumbotronText, jumbotronImage, message} = data;
    const changeBackgroundIcon = (elem) => {
      elem.classList.toggle('icon--jumbotron-active');
    };
    const handleVideo = (elem, video) => {
      if (elem.classList.contains('icon--jumbotron-active')) {
        changeBackgroundIcon(elem);
        video.pause();
      } else {
        changeBackgroundIcon(elem);
        video.play();
      }
    };

    const handleLoadedVideo = (image, media, text, button, element) => {
      image.remove();
      media.style.display = 'block';
      text.style.display = 'flex';
      element.style.display = 'none';
      button.style.display = 'block';
    };

    const handleLoadingVideo = (text) => {
      text.style.display = 'none';
    };
    // EVENTS
    video.load();
    // Hide text until video is loaded
    video.addEventListener('waiting', () => handleLoadingVideo(jumbotronText));

    //  When video has been loaded, hide message that video is loading
    //  and display button to manipulate video

    video.addEventListener('canplaythrough', () =>
      handleLoadedVideo(
          jumbotronImage,
          video,
          jumbotronText,
          playButton,
          message
      )
    );

    //  play or pause video
    playButton.addEventListener('click', (e) => handleVideo(e.target, video));
  });
}
