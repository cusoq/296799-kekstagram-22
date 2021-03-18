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

const overlayedElement = document.querySelector('.overlayed');
const picturesContainerElement = document.querySelector('.pictures');
const bigPictureContainerElement = document.querySelector('.big-picture');
const bigPictureCloseButtonElement = bigPictureContainerElement.querySelector('.big-picture__cancel');
const bigPhotoCommentElementsListElement = bigPictureContainerElement.querySelector('.social__comments');
const bigPhotoCommentElement = bigPictureContainerElement.querySelector('.social__comment');
const socialCommentsCounterElement = bigPictureContainerElement.querySelector('.social__comment-count');
const socialCommentsLoaderElement = bigPictureContainerElement.querySelector('.comments-loader');

const getBigPicture = (loadedPictures) => {
  const setPostData = (bigPictureData) => {
    bigPictureContainerElement.querySelector('.big-picture__big-img').src = bigPictureData.url;
    bigPictureContainerElement.querySelector('.likes-count').textContent = bigPictureData.likesCount;
    bigPictureContainerElement.querySelector('.comments-count').textContent = bigPictureData.comments.length;
    bigPictureContainerElement.querySelector('.social__caption').textContent = bigPictureData.description;
  }

  const getCurrentCommentsList = (bigPictureData) => {
    const commentsListFragment = document.createDocumentFragment();
    bigPictureData.comments.forEach(comment => {
      const newCommentElement = bigPhotoCommentElement.cloneNode(true);
      newCommentElement.querySelector('.social__text').textContent = comment.message;
      bigPhotoCommentElementsListElement.appendChild(newCommentElement);
    });
    bigPhotoCommentElementsListElement.appendChild(commentsListFragment);
  };

  function showDetailsModal(evt) {
    evt.preventDefault();
    const bigPictureData = (id) => loadedPictures.find(obj => obj.id == id);

    setPostData(bigPictureData(evt.target.dataset.id));
    removeChildElements(bigPhotoCommentElementsListElement);
    getCurrentCommentsList(bigPictureData(evt.target.dataset.id));
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
};

export {
  getBigPicture
};
