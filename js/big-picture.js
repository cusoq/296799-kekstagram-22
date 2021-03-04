import {
  ESC_KEYCODE,
  ENTER_KEYCODE
} from './data.js';

import {
  removeChildElements,
  setOverlay,
  removeOverlay,
  showElement,
  closeElement
} from './util.js';

import {
  getPhotoList
} from './picture.js';

import {
  getPostById
} from './gallery.js';


const overlayedElement = document.querySelector('.overlayed');
const picturesContainerElement = document.querySelector('.pictures');
const bigPictureContainerElement = document.querySelector('.big-picture');
const bigPictureCloseButtonElement = bigPictureContainerElement.querySelector('.big-picture__cancel');
const bigPhotoCommentElementsListElement = bigPictureContainerElement.querySelector('.social__comments');
const bigPhotoCommentElement = bigPictureContainerElement.querySelector('.social__comment');
const socialCommentsCounterElement = bigPictureContainerElement.querySelector('.social__comment-count');
const socialCommentsLoaderElement = bigPictureContainerElement.querySelector('.comments-loader');

const setPostData = (data) => {
  bigPictureContainerElement.querySelector('.big-picture__big-img').src = data.url;
  bigPictureContainerElement.querySelector('.likes-count').textContent = data.likesCount;
  bigPictureContainerElement.querySelector('.comments-count').textContent = data.comments.length;
  bigPictureContainerElement.querySelector('.social__caption').textContent = data.description;
}

const getCurrentCommentsList = (data) => {
  const commentsListFragment = document.createDocumentFragment();
  data.comments.forEach(comment => {
    const newCommentElement = bigPhotoCommentElement.cloneNode(true);
    newCommentElement.querySelector('.social__text').textContent = comment.message;
    bigPhotoCommentElementsListElement.appendChild(newCommentElement);
  });
  bigPhotoCommentElementsListElement.appendChild(commentsListFragment);
};

function showDetailsModal(evt) {
  evt.preventDefault();

  const id = evt.target.dataset.id;
  const data = getPostById(id);

  setPostData(data);
  removeChildElements(bigPhotoCommentElementsListElement);
  getCurrentCommentsList(data);
  closeElement(socialCommentsCounterElement);
  closeElement(socialCommentsLoaderElement);
  setOverlay(overlayedElement);
  showElement(bigPictureContainerElement);
}

const onCklickBigPictureShower = function (evt) {
  if (evt.target.classList.contains('picture__img')) {
    showDetailsModal(evt);
  }
};

const onKeydownBigPictureShower = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE && evt.target.classList.contains('picture')) {
    showDetailsModal(evt);
  }
};

const onEscCloser = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    evt.preventDefault();
    window.removeEventListener('keydown', onEscCloser);
    removeOverlay(overlayedElement);
    closeElement(bigPictureContainerElement);
  }
};

const onClickCloser = () => {
  closeElement(bigPictureContainerElement);
  removeOverlay(overlayedElement);
};

picturesContainerElement.addEventListener('click', onCklickBigPictureShower);
picturesContainerElement.addEventListener('keydown', onKeydownBigPictureShower);
bigPictureCloseButtonElement.addEventListener('click', onClickCloser);
document.addEventListener('keydown', onEscCloser);

export {
  getPhotoList
};
