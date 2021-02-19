import {
  getRandomInt,
  getRandomArrayElement,
  getUniqId
} from './util.js';

import {
  DESCRIPTIONS,
  MIN_LIKES_COUNT,
  MAX_LIKES_COUNT,
  TOTAL_POSTS_COUNT
} from './data.js';

import {
  getSimilarShuffledComments
} from './comment-list.js';

const getSimilarPosts = () => {
  const createPost = () => {
    return {
      id: getUniqId(),
      url: 'photos/' + getRandomInt(1, TOTAL_POSTS_COUNT) + '.jpg',
      description: getRandomArrayElement(DESCRIPTIONS),
      likesCount: getRandomInt(MIN_LIKES_COUNT, MAX_LIKES_COUNT),
      comments: getSimilarShuffledComments().slice(getRandomInt(0, getSimilarShuffledComments().length - 1)),
    };
  };

  return new Array(TOTAL_POSTS_COUNT).fill(null).map(() => createPost());
};

export {
  getSimilarPosts
};
