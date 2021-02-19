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

const getSimilarComments = () => {

  const createComment = () => {
    return {
      id: getUniqId(),
      avatar: 'img/avatar-' + getRandomInt(1, COMMENTS.length) + '.svg',
      name: getRandomArrayElement(NAMES) + ' ' + getRandomArrayElement(SURNAMES),
      message: getOneOrTwoRandomArrayElements(COMMENTS),
    };
  };

  return new Array(TOTAL_COMMENTS_COUNT).fill(null).map(() => createComment());
};

const getSimilarShuffledComments = () => getShuffled(getSimilarComments());

export {
  getSimilarShuffledComments
};
