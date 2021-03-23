import {
  isFormValid,
  closeForm
} from './form.js';

import {
  getPhotoList,
  postData
} from './backend.js';

import {
  isUploadPicture
} from './upload.js';

import {
  getBigPicture
} from './big-picture.js';

import {
  getData
} from './picture.js';

const getGallery = (pictureList) => {
  getData(pictureList);
  getBigPicture(pictureList);
};

getPhotoList();
isUploadPicture();
isFormValid();
postData();
closeForm();

export {
  getGallery
}
