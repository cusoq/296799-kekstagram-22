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

export {
  getRandomInt,
  getShuffled,
  isValidLenght
};
