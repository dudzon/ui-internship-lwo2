/* eslint-disable max-len */
import {constants} from './constants.js';
const {months} = constants;
export const mainBlogsFragment = (
    title,
    watched,
    comments,
    published,
    previewImg,
    description
) => {
  const day = new Date(published).getDate();
  const selectedMonth = new Date(published).getMonth();
  return `<div class="standard__image standard__image--blog">
            <picture>
                <source media="(max-width:1024px)"csrcset=${previewImg}/>
                    <img src=${previewImg} alt="" />
            </picture>
          </div>
            <h4 class="standard__title">
                <a href="#" class="standard__title standard__title--link">${title}</a>
            </h4>
            <p class="standard__subtitle">${description}</p>
            <div class="standard__date">
                <span class="standard-date__element standard-date__element--day">${day}</span>
                <span class="standard-date__element standard-date__element--month">${months[selectedMonth]}
                </span>
                </div>
            <div class="standard__social">
                <span class="standard-social__element standard-social__element--visits">${watched}</span>
                <span class="standard-social__element standard-social__element--comments">${comments}</span>
            </div>`;
};
export const footerBlogsFragment = (
    title,
    watched,
    comments,
    published,
    previewImg,
    description
) => {
  const dateToDisplay = `
  ${new Date(published).getDate()}
  ${months[new Date(published).getMonth()]}, 
  ${new Date(published).getFullYear()}
  `;
  return `<img
        class="footer-blog__image"
        src=${previewImg}
        alt=""/>
        <div>
         <h4 class="footer-blog__title">
            <a class="footer-blog__title footer-blog__title--link" href="#">${title}</a>
        </h4>
        <p class="footer-blog__date">${dateToDisplay}</p>`;
};
