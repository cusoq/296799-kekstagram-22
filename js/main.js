import {
  getShuffled,
  isValidLenght
} from './util.js';

import {
  getSimilarPosts
} from './post-list.js';

import {
  getPhotoList
} from './picture.js';

getShuffled(getSimilarPosts());
isValidLenght('', 1);
getPhotoList();
