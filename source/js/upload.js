import focusManager from 'focus-manager';

import {
  ESC_KEYCODE,
  FILE_TYPES
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

const uploadForm = document.querySelector('.img-upload__form');
const overlayedElement = document.querySelector('.overlayed');
const uploadContainerElement = document.querySelector('.img-upload__overlay');
const uploadInputElement = document.querySelector('#upload-file');
const uploadCancelButtonElement = document.querySelector('.img-upload__cancel');
const fileChooserElement = document.querySelector('#upload-file');
const previewElement = document.querySelector('.img-upload__preview-pic');

const isUploadPicture = () => {

  const onChangeInputValue = () => {
    showElement(uploadContainerElement);
    focusManager.capture(uploadContainerElement);
    setOverlay(overlayedElement);
  };

  const onClickCloser = () => {
    uploadInputElement.value = '';
    closeElement(uploadContainerElement);
    removeOverlay(overlayedElement);
    uploadForm.reset();
  };

  const onEscCloser = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      evt.preventDefault();
      removeOverlay(overlayedElement);
      closeElement(uploadContainerElement);
      uploadForm.reset();
    }
  };

  uploadInputElement.addEventListener('change', onChangeInputValue);
  uploadCancelButtonElement.addEventListener('click', onClickCloser);
  document.addEventListener('keydown', onEscCloser);
}

fileChooserElement.addEventListener('change', () => {
  const file = fileChooserElement.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      previewElement.src = reader.result;
    });

    reader.readAsDataURL(file);
  }
});

setEffect();

export {
  isUploadPicture
};
