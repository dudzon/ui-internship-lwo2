import {elements} from './elements.js';

export function fetch() {
  elements.then((data) => {
    console.log(data);
  });
}
