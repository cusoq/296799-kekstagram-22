'use strict';

const getRandomInt = function (min, max) {
  if (min >= 0 && max > min) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
  }
};

getRandomInt(9, 14);

const isValidLenght = function (currentString, maxLength) {
  return currentString.trim().length <= maxLength;
}

isValidLenght('  stroka ', 15);
