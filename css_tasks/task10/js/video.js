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

export {handleVideo};
