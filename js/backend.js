import {
  TOTAL_POSTS_COUNT,
  CLOSE
} from './data.js';

import {
  getBigPicture
} from './big-picture.js';

import {
  getData
} from './picture.js';

const checkStatus = (response) => {
  if (response.ok) {
    return response;
  }

  const { statusText, status } = response;
  throw new Error(`${status} — ${statusText}`);
}

const getErrorMessage = (error, closeMessage) => {
  const overlayedElement = document.querySelector('.overlayed');
  const errorMessageElement = document.querySelector('#error').content;
  const errorMessageFragment = document.createDocumentFragment();
  const element = errorMessageElement.cloneNode(true);
  element.querySelector('.error__title').textContent = error;
  if (closeMessage) {
    element.querySelector('.error__button').textContent = closeMessage;
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
      getErrorMessage(error, CLOSE);
    });
};

export {
  getPhotoList
}
