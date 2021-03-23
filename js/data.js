const ESC_KEYCODE = 27;
const ENTER_KEYCODE = 13;
const COMMENT_SIZE = 140;
const CLOSE_MESSAGE = 'закройте скорее';
const DELAY_INTERVAL = 500;
const STEP_COMMENTS_ADD = 5;
const START_COMMENTS_COUNT = 0;

const PostCounts = {
  TOTAL_POSTS_COUNT: 25,
  FILTERED_POSTS_COUNT: 10,
};

const StatusResults = {
  SUCCESS: 'success',
  ERROR: 'error',
};

const DataUrls = {
  GET_DATA_URL: 'https://22.javascript.pages.academy/kekstagram/data',
  POST_DATA_URL: 'https://22.javascript.pages.academy/kekstagram',
};

const HashTagData = {
  OCTOTHORPE: '#',
  MIN_HASHTAG_SIZE: 2,
  MAX_HASHTAG_SIZE: 20,
  HASHTAGS_AMOUNT: 5,
};

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

const hashTagRegExpSymbolsPattern = /[a-zA-Zа-яА-ЯёЁ0-9]/;

export {
  PostCounts,
  CLOSE_MESSAGE,
  ESC_KEYCODE,
  ENTER_KEYCODE,
  COMMENT_SIZE,
  DELAY_INTERVAL,
  STEP_COMMENTS_ADD,
  START_COMMENTS_COUNT,
  hashTagRegExpSymbolsPattern,
  HashTagData,
  StatusResults,
  DataUrls,
  SliderData
};
