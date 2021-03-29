import {
  DELAY_INTERVAL,
  PostCounts
} from './data.js';

import {
  debounce
} from './util.js';

import {
  getData
} from './picture.js';

const uploadFiltersFormElement = document.querySelector('.img-filters__form');
const uploadFiltersButtonElements = uploadFiltersFormElement.querySelectorAll('.img-filters__button');
const uploadFiltersElement = document.querySelector('.img-filters');
const getPreviewes = () => document.querySelectorAll('.picture');

const setFilterButtonStyle = (element) => {
  uploadFiltersButtonElements.forEach(element => element.classList.remove('img-filters__button--active'));
  element.classList.add('img-filters__button--active');
};
const getFilteredPosts = (galleryPosts) => {
  getData(galleryPosts);
  uploadFiltersElement.classList.remove('img-filters--inactive');

  const onClickFilter = (evt) => {
    setFilterButtonStyle(evt.target);
    getPreviewes().forEach(element => { element.remove() });

    if (evt.target.id === 'filter-default') {
      getData(galleryPosts.slice(0, PostCounts.FILTERED_POSTS_COUNT));
    } else if (evt.target.id === 'filter-random') {
      getData(galleryPosts.slice(0, PostCounts.FILTERED_POSTS_COUNT).sort(() => 0.5 - Math.random()));
    } else if (evt.target.id === 'filter-discussed') {
      const setCompareCommentsCount = (b, a) => a.comments.length - b.comments.length;
      getData(galleryPosts.slice().sort(setCompareCommentsCount));
    }
  };

  uploadFiltersFormElement.addEventListener('click', debounce(onClickFilter, DELAY_INTERVAL));
};

export {
  getFilteredPosts
}
