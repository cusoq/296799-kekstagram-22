import {
  TOTAL_POSTS_COUNT,
  CLOSE_MESSAGE
} from './data.js';

import {
  getBigPicture
} from './big-picture.js';

import {
  getData
} from './picture.js';

import {
  closeElement
} from './util.js';

const overlayedElement = document.querySelector('.overlayed');
const uploadContainerElement = document.querySelector('.img-upload__overlay');
const uploadForm = document.querySelector('.img-upload__form');
const errorMessageElement = document.querySelector('#error').content;
const successMessageElement = document.querySelector('#success').content;


const checkStatus = (response) => {
  if (response.ok) {
    return response;
  }

  const { statusText, status } = response;
  throw new Error(`${status} — ${statusText}`);
}

const getSuccessMessage = () => {
  const successMessageFragment = document.createDocumentFragment();
  const element = successMessageElement.cloneNode(true);
  overlayedElement.appendChild(element);
  overlayedElement.appendChild(successMessageFragment);
  //?????????????????????????????
  setTimeout(() => element.remove(), 5000) // Почему не pаботает remove()?
  //?????????????????????????????
};

const getErrorMessage = (error, message) => {
  const errorMessageFragment = document.createDocumentFragment();
  const element = errorMessageElement.cloneNode(true);
  element.querySelector('.error__title').textContent = error;
  if (message) {
    element.querySelector('.error__button').textContent = message;
  }
  overlayedElement.appendChild(element);
  overlayedElement.appendChild(errorMessageFragment);
  //?????????????????????????????
  setTimeout(() => element.remove(), 5000) // Почему не pаботает remove()?
  //?????????????????????????????
};

const getPhotoList = () => {
  fetch('https://22.javascript.pages.academy/kekstagram/data')
    .then(checkStatus)
    .then((response) => response.json())
    .then((galleryPosts) => {
      getData(galleryPosts.slice(0, TOTAL_POSTS_COUNT));
      getBigPicture(galleryPosts)
    })
    .catch((error) => {
      getErrorMessage(error, CLOSE_MESSAGE);
    });
};

const postData = () => {

  const onSuccess = () => closeElement(uploadContainerElement);

  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);

    fetch(
      'https://22.javascript.pages.academy/kekstagram',
      {
        method: 'POST',
        body: formData,
      },
    ).then(checkStatus)
      .then(() => {
        onSuccess();
        getSuccessMessage();
      })
      .catch((error) => {
        getErrorMessage(error, CLOSE_MESSAGE);
      });
  });
};

export {
  postData,
  getPhotoList
}
