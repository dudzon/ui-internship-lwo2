export const elements = new Promise((res) => {
  document.addEventListener('DOMContentLoaded', () => {
    const DOMElements = {
      playButton: document.querySelector('.icon--jumbotron '),
      video: document.querySelector('.jumbotron__video'),
      jumbotronText: document.querySelector('.jumbotron-text'),
      jumbotronImage: document.querySelector('.jumbotron img'),
      message: document.querySelector('.jumbotron-message'),
    };
    res(DOMElements);
  });
});
