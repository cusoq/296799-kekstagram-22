import focusManager from 'focus-manager';

import {
  STEP_COMMENTS_ADD,
  START_COMMENTS_COUNT,
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
const bigPictureContainerImgElement = bigPictureContainerElement.querySelector('.big-picture__big-img');
const bigPictureContainerLikesElement = bigPictureContainerElement.querySelector('.likes-count');
const bigPictureContainerCountElement = bigPictureContainerElement.querySelector('.comments-count');
const bigPictureContainerCaptionElement = bigPictureContainerElement.querySelector('.social__caption');

const renderData = (bigPictureData) => {
  const commentsListFragment = document.createDocumentFragment();
  bigPictureData.forEach(comment => {
    const newCommentElement = bigPhotoCommentElement.cloneNode(true);
    newCommentElement.querySelector('.social__text').textContent = comment.message;
    const name = comment.name + ':  ';
    newCommentElement.querySelector('.social__text').insertAdjacentText('afterbegin', name);
    newCommentElement.querySelector('.social__picture').src = comment.avatar;
    bigPhotoCommentElementsListElement.appendChild(newCommentElement);
  });
  bigPhotoCommentElementsListElement.appendChild(commentsListFragment);
}

const setPostData = (loadedPost) => {
  bigPictureContainerImgElement.src = loadedPost.url;
  bigPictureContainerLikesElement.textContent = loadedPost.likesCount;
  bigPictureContainerCountElement.textContent = loadedPost.comments.length;
  bigPictureContainerCaptionElement.textContent = loadedPost.description;
}

const getCurrentCommentsList = (bigPictureData) => {

  if (bigPictureData.comments.length > STEP_COMMENTS_ADD) {
    if(socialCommentsLoaderElement.classList.contains('hidden')) {
      showElement(socialCommentsLoaderElement);
    }
    if(socialCommentsCounterElement.classList.contains('hidden')) {
      showElement(socialCommentsCounterElement);
    }

    let commentsToAdd = bigPictureData.comments.slice();
    renderData(commentsToAdd.splice(START_COMMENTS_COUNT, STEP_COMMENTS_ADD));

    const onCklickCommentsShower = () => {
      renderData(commentsToAdd.splice(START_COMMENTS_COUNT, STEP_COMMENTS_ADD));
    };

    socialCommentsLoaderElement.addEventListener('click', onCklickCommentsShower);
  } else {
    if(!socialCommentsLoaderElement.classList.contains('hidden')) {
      closeElement(socialCommentsLoaderElement);
    }
    if(!socialCommentsCounterElement.classList.contains('hidden')) {
      closeElement(socialCommentsCounterElement);
    }
    renderData(bigPictureData.comments);
  }
};

const getBigPicture = (loadedPictures) => {

  const showDetailsModal = (evt) => {
    evt.preventDefault();
    focusManager.capture(bigPictureContainerElement);
    const bigPictureData = (id) => loadedPictures.find(picture => String(picture.id) === id);
    setPostData(bigPictureData(evt.target.dataset.id));
    removeChildElements(bigPhotoCommentElementsListElement);
    setOverlay(overlayedElement);
    showElement(bigPictureContainerElement);
    getCurrentCommentsList(bigPictureData(evt.target.dataset.id));
  }

  const onCklickBigPictureShower = (evt) => {
    if (evt.target.classList.contains('picture__img')) {
      showDetailsModal(evt);
    }
  };

  const onKeydownBigPictureShower = (evt) => {
    if (evt.keyCode === ENTER_KEYCODE && evt.target.classList.contains('picture')) {
      showDetailsModal(evt);
    }
  };

  const onEscCloser = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      evt.preventDefault();
      removeOverlay(overlayedElement);
      closeElement(bigPictureContainerElement);
    }
  };

  const onClickCloser = () => {
    removeChildElements(bigPhotoCommentElementsListElement);
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
