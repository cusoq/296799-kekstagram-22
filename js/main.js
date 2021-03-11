import {
  isFormValid
} from './form.js';

import {
  getPhotoList
} from './backend.js';

import {
  isUploadPicture
} from './upload.js';

getPhotoList();
isUploadPicture();
isFormValid();
