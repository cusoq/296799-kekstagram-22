import {
  removeChildElements,
  setOverlay,
  removeOverlay,
  elementShower,
  elementCloser
} from './util.js';

import {
  getPhotoList
} from './picture.js';

import {
  getCurrentPost
} from './gallery.js';

const ESC_KEYCODE = 27;
const ENTER_KEYCODE = 13;
const overlayedElement = document.querySelector('body');
const picturesContainer = document.querySelector('.pictures');
const bigPictureContainer = document.querySelector('.big-picture');
const bigPictureCloseButton = bigPictureContainer.querySelector('.big-picture__cancel');
const bigPhotoCommentsList = bigPictureContainer.querySelector('.social__comments');
const bigPhotoComment = bigPictureContainer.querySelector('.social__comment');
const socialCommentsCounter = bigPictureContainer.querySelector('.social__comment-count');
const socialCommentsLoader = bigPictureContainer.querySelector('.comments-loader');

const getCurrentPostData = (element) => {
  element.href = element.querySelector('img').src;
  bigPictureContainer.querySelector('img').src = element.href;
  bigPictureContainer.querySelector('.likes-count').textContent = element.querySelector('.picture__likes').textContent;
  bigPictureContainer.querySelector('.comments-count').textContent = element.querySelector('.picture__comments').textContent;
  bigPictureContainer.querySelector('.social__caption').textContent = getCurrentPost(element).description;
}

const getCurrentCommentsList = (element) => {
  const commentsListFragment = document.createDocumentFragment();
  getCurrentPost(element).comments.forEach(currentComment => {
    const newComment = bigPhotoComment.cloneNode(true);
    newComment.querySelector('.social__text').textContent = currentComment.message;
    bigPhotoCommentsList.appendChild(newComment);
  });
  bigPhotoCommentsList.appendChild(commentsListFragment);
};

const onCklickBigPictureShower = function (evt) {
  if (evt.target.nodeName === 'IMG') {
    evt.preventDefault();
    getCurrentPostData(evt.target.parentNode);
    removeChildElements(bigPhotoCommentsList);
    getCurrentCommentsList(evt.target.parentNode);
    elementCloser(socialCommentsCounter);
    elementCloser(socialCommentsLoader);
    setOverlay(overlayedElement);
    elementShower(bigPictureContainer);
  }
};

const onKeydownBigPictureShower = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    evt.preventDefault();
    getCurrentPostData(evt.target);
    removeChildElements(bigPhotoCommentsList);
    getCurrentCommentsList(evt.target);
    elementCloser(socialCommentsCounter);
    elementCloser(socialCommentsLoader);
    setOverlay(overlayedElement);
    elementShower(bigPictureContainer);
  }
};

const onEscCloser = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    evt.preventDefault();
    window.removeEventListener('keydown', onEscCloser);
    removeOverlay(overlayedElement);
    elementCloser(bigPictureContainer);
  }
};

const onClickCloser = () => {
  elementCloser(bigPictureContainer);
  removeOverlay(overlayedElement);
};

picturesContainer.addEventListener('click', onCklickBigPictureShower);
picturesContainer.addEventListener('keydown', onKeydownBigPictureShower);
bigPictureCloseButton.addEventListener('click', onClickCloser);
document.addEventListener('keydown', onEscCloser);

export {
  getPhotoList
};
