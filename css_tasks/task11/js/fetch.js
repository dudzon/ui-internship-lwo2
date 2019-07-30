/* eslint-disable max-len */
import {elements} from './elements.js';
import {constants} from './constants.js';
import {mainBlogsFragment} from './fragments.js';
export function fetchData() {
  elements.then(({mainBlog, footerBlog}) => {
    const {url} = constants;
    fetch(url)
        .then((response) => response.json())
        .then(({blogs}) => {
          const postsToDisplay = blogs.slice(0, 3);
          let frag = document.createDocumentFragment();

          //  Show Blogs : Steps
          // 1. iterate through sliced Array with fetched data.
          // 2. create an element to fill documentFragment() with
          // proper CSS class.
          // 3. import text to display on the page.
          // 4. append fragment with data and display on the page.
          // Yes I know, this destructuring looks scary and unintuitive at first glance.

          const showBlogs = (handler, blogs, className, fragment) => {
            blogs.forEach(
                ({
                  title,
                  watched,
                  comments,
                  published,
                  previewImg,
                  description,
                }) => {
                  const div = document.createElement('div');
                  div.classList.add(className);
                  const text = mainBlogsFragment(
                      title,
                      watched,
                      comments,
                      published,
                      previewImg,
                      description
                  );
                  div.innerHTML = text;
                  fragment.append(div);
                }
            );
            handler.append(fragment);
          };
          showBlogs(mainBlog, postsToDisplay, 'standard__element', frag);
        });
  });
}
