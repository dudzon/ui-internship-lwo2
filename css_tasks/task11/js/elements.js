export const elements = new Promise((res) => {
  document.addEventListener('DOMContentLoaded', () => {
    const DOMElements = {
      dd: 'titt',
    };
    res(DOMElements);
  });
});
