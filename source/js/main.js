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
  getFilteredPosts
} from './filters.js';

const getGallery = (pictureList) => {
  getFilteredPosts(pictureList);
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
