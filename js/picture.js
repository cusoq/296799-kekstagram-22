import {
  similarPosts
} from './post-list.js';

const photoList = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture').content;
const photoListFragment = document.createDocumentFragment();

similarPosts.forEach(({url, likesCount, comments}) => {
  const element = photoTemplate.cloneNode(true);
  element.querySelector('.picture__img').src = url;
  element.querySelector('.picture__likes').textContent = likesCount;
  element.querySelector('.picture__comments').textContent = comments.length;
  photoList.appendChild(element);
});

photoList.appendChild(photoListFragment);
