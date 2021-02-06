'use strict';

const TOTAL_POSTS_COUNT = 25;
const MIN_LIKES_COUNT = 10;
const MAX_LIKES_COUNT = 200;
const TOTAL_COMMENTS_COUNT = 40;

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Пол',
  'Дэвид',
  'Боб',
  'Дженис',
  'Фрэнк',
  'Йен',
];

const SURNAMES = [
  'Маккартни',
  'Гилмор',
  'Марли',
  'Джоплин',
  'Заппа',
  'Андерсен',
];

const DESCRIPTIONS = [
  'black subbath',
  'red wave',
  'blue system',
  'yellow river',
  'green sleeves',
];

const getRandomInt = function (min, max) {
  if (min >= 0 && max > min) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
  }
};

const getShuffled =(arr) => _.shuffle(arr);

const isValidLenght = function (currentString, maxLength) {
  return currentString.trim().length <= maxLength;
}

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

const similarShuffledPosts = getShuffled(similarPosts);
console.log(similarShuffledPosts);
