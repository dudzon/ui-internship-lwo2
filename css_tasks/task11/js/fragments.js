/* eslint-disable max-len */
export const mainBlogsFragment = (
    title,
    watched,
    comments,
    published,
    previewImg,
    description
) => {
  return `<div class="standard__image standard__image--blog">
                      <picture>
                          <source
                              media="(max-width:1024px)"
                              srcset=${previewImg}
                          />
                          <img src=${previewImg} alt="" />
                      </picture>
                  </div>
                  <h4 class="standard__title">
                      <a href="#" class="standard__title standard__title--link">${title}</a>
                  </h4>
                  <p class="standard__subtitle">${description}</p>
                  <div class="standard__date">
                      <span class="standard-date__element standard-date__element--day">15</span>
                      <span class="standard-date__element standard-date__element--month">Jun</span>
                  </div>
                  <div class="standard__social">
                      <span class="standard-social__element standard-social__element--visits">${watched}</span>
                      <span class="standard-social__element standard-social__element--comments">${comments}</span>
                  </div>`;
};
