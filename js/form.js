import {
  ESC_KEYCODE,
  COMMENT_SIZE,
  hashTagRegExpSymbolsPattern,
  HashTagData
} from './data.js'

import {
  isValidLenght
} from './util.js';

const hashTagInput = document.querySelector('.text__hashtags');
const commentTextarea = document.querySelector('.text__description');

const setOnEscPreventClosing = (evt) => {
  if (evt.keyCode === ESC_KEYCODE) {
    evt.stopPropagation();
  }
}

const isFormValid = () => {
  const checkActions = [
    {
      errorMessage: false,
      check: (printedString) => printedString.length === 0,
    },
    {
      errorMessage: `Хэш-тэгов должно быть не более ${HashTagData.HASHTAGS_AMOUNT}`,
      check: (printedString) => printedString.length > HashTagData.HASHTAGS_AMOUNT,
    },
    {
      errorMessage: 'Хэш-тэг должен начинаться с #',
      check: (printedString) => printedString.some((value) => value[0] !== HashTagData.OCTOTHORPE),
    },
    {
      errorMessage: `Хэш-тэг должен состоять минимум из ${HashTagData.MIN_HASHTAG_SIZE} символов`,
      check: (printedString) => printedString.some((value) => value.length < HashTagData.MIN_HASHTAG_SIZE),
    },
    {
      errorMessage: '2 и более октоторпа это перебор, ну согласитесь',
      check: (printedString) => printedString.some((value) => value[value.length - 1] === HashTagData.OCTOTHORPE),
    },
    {
      errorMessage: `Хэш-тэг не должен превышать ${HashTagData.MAX_HASHTAG_SIZE} символов`,
      check: (printedString) => printedString.some((value) => value.length > HashTagData.MAX_HASHTAG_SIZE),
    },
    {
      errorMessage: 'Хэш-тэги должны быть уникальными',
      check: (printedString) => printedString.some((value, index, arr) => arr.indexOf(value) !== index),
    },
    {
      errorMessage: 'Хэш-тэги не должны содержать иных символов, кроме букв и цифр',
      check: (printedString) => printedString.some((value) => value[value.length - 1].match(hashTagRegExpSymbolsPattern) === null),
    },
    {
      errorMessage: false,
      check: (printedString) => printedString,
    },
  ];


  const getCheckAction = (printedString) => checkActions.find(({check}) => check(printedString));

  const getHashTagsArray = () => hashTagInput.value.split(' ').map(((value) => value.toLowerCase()));

  const onInputCheckHashTags = () => {
    const hashTags = getHashTagsArray();
    const {errorMessage} = getCheckAction(hashTags);
    if (errorMessage) {
      hashTagInput.setCustomValidity(errorMessage);
    } else {
      hashTagInput.setCustomValidity('');
    }
    hashTagInput.reportValidity();
  };

  const onInputTextarea = () => {
    if (!isValidLenght(commentTextarea.value, COMMENT_SIZE)) {
      commentTextarea.setCustomValidity('Текст не должен превышать 140 символов');
    } else {
      commentTextarea.setCustomValidity('');
    }
    commentTextarea.reportValidity();
  };

  const onEschashTagInput = (evt) => setOnEscPreventClosing(evt);
  const onEscTextarea = (evt) => setOnEscPreventClosing(evt);

  hashTagInput.addEventListener('input', onInputCheckHashTags);
  commentTextarea.addEventListener('input', onInputTextarea);
  hashTagInput.addEventListener('keydown', onEschashTagInput);
  commentTextarea.addEventListener('keydown', onEscTextarea);
};


export {
  isFormValid
};


