const TOTAL_POSTS_COUNT = 25;
const MIN_LIKES_COUNT = 10;
const MAX_LIKES_COUNT = 200;
const TOTAL_COMMENTS_COUNT = 40;
const ESC_KEYCODE = 27;
const ENTER_KEYCODE = 13;

const SliderData = {
  SCALE_RANGEMIN: 25,
  SCALE_RANGEMAX: 100,
  SCALE_START: 100,
  SCALE_STEP: 25,

  CHROME_RANGEMIN: 0,
  CHROME_RANGEMAX: 1,
  CHROME_START: 1,
  CHROME_STEP: 0.1,

  SEPIA_RANGEMIN: 0,
  SEPIA_RANGEMAX: 1,
  SEPIA_START: 1,
  SEPIA_STEP: 0.1,

  MARVIN_RANGEMIN: 0,
  MARVIN_RANGEMAX: 100,
  MARVIN_START: 100,
  MARVIN_STEP: 1,

  PHOBOS_RANGEMIN: 0,
  PHOBOS_RANGEMAX: 3,
  PHOBOS_START: 3,
  PHOBOS_STEP: 0.1,

  HEAT_RANGEMIN: 1,
  HEAT_RANGEMAX: 3,
  HEAT_START: 3,
  HEAT_STEP: 0.1,
}

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

export {
  TOTAL_POSTS_COUNT,
  MIN_LIKES_COUNT,
  MAX_LIKES_COUNT,
  TOTAL_COMMENTS_COUNT,
  COMMENTS,
  NAMES,
  SURNAMES,
  ESC_KEYCODE,
  ENTER_KEYCODE,
  DESCRIPTIONS,
  SliderData
};
