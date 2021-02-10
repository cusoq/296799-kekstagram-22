import {
  getRandomInt,
  getShuffled
} from './util.js';

import {
  COMMENTS,
  NAMES,
  SURNAMES,
  TOTAL_COMMENTS_COUNT
} from './data.js';

const getRandomComment = (elements) => {
  let index = getRandomInt(0, elements.length - 1);
  if (index === 1) {
    return elements[1] + ' ' + elements[getRandomInt(2, elements.length - 1)];
  }
  return elements[index];
};

const getRandomArrayElement = (elements) => {
  return elements[getRandomInt(0, elements.length - 1)];
};

const createComment = () => {
  return {
    id: null,
    avatar: 'img/avatar-' + getRandomInt(1, COMMENTS.length) + '.svg',
    name: getRandomArrayElement(NAMES) + ' ' + getRandomArrayElement(SURNAMES),
    message: null,
  };
};

const similarComments = new Array(TOTAL_COMMENTS_COUNT).fill(null).map(() => createComment());
similarComments.forEach((item) => item.id = similarComments.indexOf(item, 0) + 1);
similarComments.forEach((item) => item.message = getRandomComment(COMMENTS));

const similarShuffledComments = getShuffled(similarComments);

export {
  getRandomArrayElement,
  similarShuffledComments
};
