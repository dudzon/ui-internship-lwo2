/* eslint-disable max-len */
import {elements} from './elements.js';
import {constants} from './constants.js';
import {mainBlogsFragment, footerBlogsFragment} from './fragments.js';
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
          // 3. import proper HTML structure to display on the page.
          // 4. append fragment with correct HTML and display it on the page.
          // Yes I know, this destructuring looks scary and unintuitive at first glance.
          // Pictures in footer don't have the same sizes, because the last picture has
          // different dimensions, I could set max-height to them but the last image will be distorted.
          const showBlogs = (handler, blogs, className, data, fragment) => {
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
                  const text = data(
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
          showBlogs(
              mainBlog,
              postsToDisplay,
              'standard__element',
              mainBlogsFragment,
              frag
          );
          showBlogs(
              footerBlog,
              postsToDisplay,
              'footer__blog',
              footerBlogsFragment,
              frag
          );
        });
  });
}
