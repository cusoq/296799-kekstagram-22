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

getPhotoList();
isUploadPicture();
isFormValid();
postData();
closeForm();

