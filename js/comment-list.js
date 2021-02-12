import {
  getRandomInt,
  getUniqId,
  getRandomArrayElement,
  getOneOrTwoRandomArrayElements,
  getShuffled
} from './util.js';

import {
  COMMENTS,
  NAMES,
  SURNAMES,
  TOTAL_COMMENTS_COUNT
} from './data.js';

const createComment = () => {
  return {
    id: getUniqId(),
    avatar: 'img/avatar-' + getRandomInt(1, COMMENTS.length) + '.svg',
    name: getRandomArrayElement(NAMES) + ' ' + getRandomArrayElement(SURNAMES),
    message: getOneOrTwoRandomArrayElements(COMMENTS),
  };
};

const similarComments = new Array(TOTAL_COMMENTS_COUNT).fill(null).map(() => createComment());
const similarShuffledComments = getShuffled(similarComments);

export {
  getRandomArrayElement,
  similarShuffledComments
};
