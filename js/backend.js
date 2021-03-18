import {
  ESC_KEYCODE,
  CLOSE_MESSAGE,
  StatusResults,
  DataUrls
} from './data.js';

import {
  getFilteredPosts
} from './filters.js';

import {
  closeElement
} from './util.js';

const overlayedElement = document.querySelector('.overlayed');
const uploadContainerElement = document.querySelector('.img-upload__overlay');
const uploadFormElement = document.querySelector('.img-upload__form');
const errorMessageElement = document.querySelector('#error').content;
const successMessageElement = document.querySelector('#success').content;

const checkStatus = (response) => {
  if (response.ok) {
    return response;
  }
  const { statusText, status } = response;
  throw new Error(`${status} — ${statusText}`);
}

const removeMessageBlock = (status) => {
  const currentStatus = status;
  const onClickCloser = () => overlayedElement.querySelector(`.${currentStatus}`).remove();
  const onEscCloser = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      evt.preventDefault();
      window.removeEventListener('keydown', onEscCloser);
      overlayedElement.querySelector(`.${currentStatus}`).remove();
    }
  };

  const onClickNonCloser = (evt) => evt.stopPropagation();
  overlayedElement.querySelector(`.${currentStatus}`).addEventListener('click', onClickCloser);
  overlayedElement.querySelector(`.${currentStatus}__inner`).addEventListener('click', onClickNonCloser);
  overlayedElement.querySelector(`.${currentStatus}__button`).addEventListener('click', onClickCloser);
  window.addEventListener('keydown', onEscCloser);
}

const getSuccessMessage = () => {
  const successMessageFragment = document.createDocumentFragment();
  const element = successMessageElement.cloneNode(true);
  overlayedElement.appendChild(element);
  overlayedElement.appendChild(successMessageFragment);
  removeMessageBlock(StatusResults.SUCCESS);
};

const getErrorMessage = (error, message) => {
  const errorMessageFragment = document.createDocumentFragment();
  const element = errorMessageElement.cloneNode(true);
  element.querySelector('.error__title').textContent = error;
  if (message) {
    element.querySelector('.error__button').textContent = message;
  }
  errorMessageFragment.appendChild(element);
  overlayedElement.appendChild(errorMessageFragment);
  removeMessageBlock(StatusResults.ERROR);
};

const getPhotoList = () => {
  fetch(DataUrls.GET_DATA_URL)
    .then(checkStatus)
    .then((response) => response.json())
    .then(getFilteredPosts)
    .catch((error) => {
      getErrorMessage(error, CLOSE_MESSAGE);
    });
};

const postData = () => {
  const onSuccess = () => closeElement(uploadContainerElement);
  uploadFormElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    fetch(
      DataUrls.POST_DATA_URL,
      {
        method: 'POST',
        body: formData,
      },
    ).then(checkStatus)
      .then(() => {
        onSuccess();
        getSuccessMessage();
      })
      .catch((error) => getErrorMessage(error, CLOSE_MESSAGE));
  });
};

export {
  postData,
  getPhotoList
}
