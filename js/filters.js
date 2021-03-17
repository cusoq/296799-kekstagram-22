import {
  PostCounts
} from './data.js';

import {
  getGallery
} from './main.js';

const uploadFiltersFormElement = document.querySelector('.img-filters__form');
const uploadFiltersButtonElements = uploadFiltersFormElement.querySelectorAll('.img-filters__button');
const removePics = () => document.querySelectorAll('.picture').forEach(element => {element.remove()});
const setFilterButtonStyle = (element) => {
  uploadFiltersButtonElements.forEach(element =>element.classList.remove('img-filters__button--active'));
  element.classList.add('img-filters__button--active');
};

const getFilteredPosts = (galleryPosts) => {
  const uploadFiltersElement = document.querySelector('.img-filters');
  uploadFiltersElement.classList.remove('img-filters--inactive');
  getGallery(galleryPosts.slice(0, PostCounts.TOTAL_POSTS_COUNT));

  const onClickFilter = (evt) => {

    if (evt.target.id === 'filter-default') {
      setFilterButtonStyle(evt.target);
      removePics();
      getGallery(galleryPosts.slice(0, PostCounts.TOTAL_POSTS_COUNT))
    } else if (evt.target.id === 'filter-random') {
      setFilterButtonStyle(evt.target);
      removePics();
      getGallery(galleryPosts.slice(0, PostCounts.FILTERED_POSTS_COUNT).sort(() => 0.5 - Math.random()))
    } else if (evt.target.id === 'filter-discussed') {
      setFilterButtonStyle(evt.target);
      removePics();
      const SetCompareCommentsCount = (b, a) => a.comments.length - b.comments.length;
      getGallery(galleryPosts.slice().sort(SetCompareCommentsCount));
    }

  };
  uploadFiltersFormElement.addEventListener('click', onClickFilter);
};
export {
  getFilteredPosts
}
