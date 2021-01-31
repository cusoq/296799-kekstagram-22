'use strict';

// Функция для генерфции целых случайных чисел из диапазона от min до max:
const calculateRandomInt = function (min, max) {
  if (min >= 0 && max > 0 && max > min) {                         // устраиваем проверку на предположтельно неверно заданный диапазон проверяемых значений.
    return Math.floor(Math.random() * (max + 1 - min)) + min;     // (источник: MDN)
  }
  // console.log('Проверьте правильность указанных значний интервала');
};

// console.log(calculateRandomInt(1, 14));
calculateRandomInt(1, 14);

// Функция для проверки максимальной длины строки

const checkLength = function (currentString, maxLength) {
  currentString = currentString.trim();      // обрежем случайные пробелы по краям
  if (currentString.length > maxLength) {
    return false;
  }
  // console.log(currentString.length);
  return true;
}

// console.log(checkLength('  stroka ', 15));
checkLength('  stroka ', 15);
