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
  similarShuffledComments
} from './comment-list.js';

const createPost = () => {
  return {
    id: getUniqId(),
    url: 'photos/' + getRandomInt(1, TOTAL_POSTS_COUNT) + '.jpg',
    description: getRandomArrayElement(DESCRIPTIONS),
    likesCount: getRandomInt(MIN_LIKES_COUNT, MAX_LIKES_COUNT),
    comments: similarShuffledComments.slice(getRandomInt(0, similarShuffledComments.length - 1)),
  };
};

const similarPosts = new Array(TOTAL_POSTS_COUNT).fill(null).map(() => createPost());

export {
  similarPosts
};
