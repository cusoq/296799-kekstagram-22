import {
  getRandomInt
} from './util.js';

import {
  DESCRIPTIONS,
  MIN_LIKES_COUNT,
  MAX_LIKES_COUNT,
  TOTAL_POSTS_COUNT
} from './data.js';

import {
  getRandomArrayElement,
  similarShuffledComments
} from './comment-list.js';

const createPost = () => {
  return {
    id: null,
    url: null,
    description: getRandomArrayElement(DESCRIPTIONS),
    likesCount: getRandomInt(MIN_LIKES_COUNT, MAX_LIKES_COUNT),
    comments: similarShuffledComments.slice(getRandomInt(0, similarShuffledComments.length - 1)),
  };
};

const similarPosts = new Array(TOTAL_POSTS_COUNT).fill(null).map(() => createPost());
similarPosts.forEach((item) => item.id = similarPosts.indexOf(item, 0) + 1);
similarPosts.forEach((item) => item.url = 'photos/' + item.id + '.jpg');

export {
  similarPosts
};
