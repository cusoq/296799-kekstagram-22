import {
  ESC_KEYCODE
} from './data.js';

import {
  setEffect
} from './effects.js';

import {
  setOverlay,
  removeOverlay,
  showElement,
  closeElement
} from './util.js';

const overlayedElement = document.querySelector('.overlayed');
const uploadContainerElement = document.querySelector('.img-upload__overlay');
const uploadInputElement = document.querySelector('#upload-file');
const uploadCancelButtonElement = document.querySelector('.img-upload__cancel');

const isUploadPicture = () => {

  const onChangeInputValue = () => {
    showElement(uploadContainerElement);
    setOverlay(overlayedElement);
  };

  const onClickCloser = () => {
    uploadInputElement.value = '';
    closeElement(uploadContainerElement);
    removeOverlay(overlayedElement);
  };

  const onEscCloser = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      evt.preventDefault();
      window.removeEventListener('keydown', onEscCloser);
      removeOverlay(overlayedElement);
      closeElement(uploadContainerElement);
    }
  };

  uploadInputElement.addEventListener('change', onChangeInputValue);
  uploadCancelButtonElement.addEventListener('click', onClickCloser);
  document.addEventListener('keydown', onEscCloser);
}

setEffect();

export {
  isUploadPicture
};
