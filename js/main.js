import {
  getShuffled,
  isValidLenght
} from './util.js';

import {
  getSimilarPosts
} from './post-list.js';

import {
  getPhotoList
} from './big-picture.js';

import {
  isUploadPicture
} from './upload.js';

getShuffled(getSimilarPosts());
isValidLenght('', 1);
getPhotoList();
isUploadPicture();
