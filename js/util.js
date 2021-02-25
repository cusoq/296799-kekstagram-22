const getRandomInt = function (min, max) {
  if (min >= 0 && max > min) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
  }
};

const getShuffled = (arr) => arr.sort(function () {
  return Math.random() - 0.5;
});

const isValidLenght = function (currentString, maxLength) {
  return currentString.trim().length <= maxLength;
}

const getUniqId = () => Math.random().toString(36).substr(2, 9);

const getRandomArrayElement = (elements) => {
  return elements[getRandomInt(0, elements.length - 1)];
};

const getOneOrTwoRandomArrayElements = (elements) => {
  return getShuffled(elements).slice(getRandomInt(elements.length - 2, elements.length - 1));
};

const showElement = (element) => element.classList.remove('hidden');
const closeElement = (element) => element.classList.add('hidden');
const setOverlay = (element) => element.classList.add('modal-open');
const removeOverlay = (element) => element.classList.remove('modal-open');

const removeChildElements = (parent) => {
  while (parent.firstChild) {
    parent.firstChild.remove()
  }
};

export {
  getRandomInt,
  getShuffled,
  getUniqId,
  getRandomArrayElement,
  getOneOrTwoRandomArrayElements,
  showElement,
  closeElement,
  removeChildElements,
  setOverlay,
  removeOverlay,
  isValidLenght
};
