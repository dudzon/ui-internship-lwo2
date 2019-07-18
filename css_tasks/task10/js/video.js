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
  button.style.display ='block';
};

const handleLoadingVideo = (text) => {
  text.style.display = 'none';
};
export {handleVideo, handleLoadedVideo, handleLoadingVideo};
