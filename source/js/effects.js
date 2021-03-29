import noUiSlider from 'nouislider';
import 'nouislider/distribute/nouislider.css';

import {
  ESC_KEYCODE,
  SliderData
} from './data.js'
import {
  showElement,
  closeElement
} from './util.js'

const sliderElement = document.querySelector('.effect-level__slider');
const scaleInputElement = document.querySelector('.scale__control--value');
const effectInputElement = document.querySelector('.effect-level__value');
const effectInputContainerElement = document.querySelector('.effect-level');
const scaleControlSmallerElement = document.querySelector('.scale__control--smaller');
const scaleControlBiggerElement = document.querySelector('.scale__control--bigger');
const picturePreviewElement = document.querySelector('.img-upload__preview');
const noneEffectInputElement = document.querySelector('#effect-none');
const chromeEffectInputElement = document.querySelector('#effect-chrome');
const sepiaEffectInputElement = document.querySelector('#effect-sepia');
const marvinEffectInputElement = document.querySelector('#effect-marvin');
const phobosEffectInputElement = document.querySelector('#effect-phobos');
const heatEffectInputElement = document.querySelector('#effect-heat');
const uploadCancelButtonElement = document.querySelector('.img-upload__cancel');

const createSlider = (min, max, start, step) => {
  noUiSlider.create(sliderElement, {
    range: {
      min: min,
      max: max,
    },
    start: start,
    step: step,
    connect: 'lower',
    format: {
      to: function (value) {
        return value;
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });
};

const isSliderDestroy = () => {
  if(sliderElement.noUiSlider) {
    sliderElement.noUiSlider.set(100);
    sliderElement.noUiSlider.destroy();
  }
};

const setScaleLevelByButtons = (fn) => {
  sliderElement.noUiSlider.set(scaleInputElement.value);
  fn;
};

const setInpitValueBySliderHandle = (setPictureEffectuntion) => {
  return (__, handle, unencoded) => {
    effectInputElement.value = unencoded[handle];
    setPictureEffectuntion();
  };
}
const groupeRepeatingEventListenerActions = (onCklickValueUpper, onCklickValueDowner, onChangeNoneEffectSetter) => {
  scaleControlBiggerElement.removeEventListener('click', onCklickValueUpper);
  scaleControlSmallerElement.removeEventListener('click', onCklickValueDowner);
  noneEffectInputElement.addEventListener('change', onChangeNoneEffectSetter);
}

const setSliderDefault = () => {
  const setPictureTransform = () => {
    return picturePreviewElement.style.transform = `scale(${parseInt(scaleInputElement.value) / 100})`;
  }
  createSlider(SliderData.SCALE_RANGEMIN, SliderData.SCALE_RANGEMAX, SliderData.SCALE_START, SliderData.SCALE_STEP);

  const onUpdateSlider = (__, handle, unencoded) => {
    scaleInputElement.value = `${unencoded[handle]}%`;
    setPictureTransform();
  };
  sliderElement.noUiSlider.on('update', onUpdateSlider);

  const onCklickValueUpper = () => {
    scaleInputElement.value = `${parseInt(scaleInputElement.value) + SliderData.SCALE_STEP}%`;
    setScaleLevelByButtons(setPictureTransform());
  };

  const onCklickValueDowner = () => {
    scaleInputElement.value = `${parseInt(scaleInputElement.value) - SliderData.SCALE_STEP}%`;
    setScaleLevelByButtons(setPictureTransform());
  };
  return { onCklickValueUpper, onCklickValueDowner };
}


const setEffect = () => {
  const { onCklickValueUpper, onCklickValueDowner } = setSliderDefault();
  const setPictureDefault = () => {
    picturePreviewElement.style.filter = 'none';
    picturePreviewElement.className = 'img-upload__preview';
    noneEffectInputElement.removeEventListener('change', onChangeNoneEffectSetter);
    chromeEffectInputElement.addEventListener('change', onChangeChromeEffectSetter);
    sepiaEffectInputElement.addEventListener('change', onChangeSepiaEffectSetter);
    marvinEffectInputElement.addEventListener('change', onChangeMarvinEffectSetter);
    phobosEffectInputElement.addEventListener('change', onChangePhobosEffectSetter);
    heatEffectInputElement.addEventListener('change', onChangeHeatEffectSetter);
  }

  const onChangeNoneEffectSetter = () => {
    isSliderDestroy();
    setPictureDefault();
    closeElement(effectInputContainerElement);
  };

  const setUpdateSlider = (setPictureEffect) => {
    const onUpdateSlider = setInpitValueBySliderHandle(setPictureEffect);
    sliderElement.noUiSlider.on('update', onUpdateSlider);
  };

  const onChangeChromeEffectSetter = () => {
    showElement(effectInputContainerElement);
    isSliderDestroy();
    picturePreviewElement.classList.add('effects__preview--chrome');
    const setPictureEffect = () => picturePreviewElement.style.filter = `grayscale(${effectInputElement.value})`;
    createSlider(SliderData.CHROME_RANGEMIN, SliderData.CHROME_RANGEMAX, SliderData.CHROME_START, SliderData.CHROME_STEP);
    setUpdateSlider(setPictureEffect);
    sliderElement.noUiSlider.set(SliderData.CHROME_START);
    chromeEffectInputElement.removeEventListener('change', onChangeChromeEffectSetter);
    groupeRepeatingEventListenerActions(onCklickValueUpper, onCklickValueDowner, onChangeNoneEffectSetter);
  };

  const onChangeSepiaEffectSetter = () => {
    showElement(effectInputContainerElement);
    isSliderDestroy();
    picturePreviewElement.classList.add('effects__preview--sepia');
    const setPictureEffect = () => picturePreviewElement.style.filter = `sepia(${effectInputElement.value})`;
    createSlider(SliderData.SEPIA_RANGEMIN, SliderData.SEPIA_RANGEMAX, SliderData.SEPIA_START, SliderData.SEPIA_STEP);
    setUpdateSlider(setPictureEffect);
    sliderElement.noUiSlider.set(SliderData.SEPIA_START);
    sepiaEffectInputElement.removeEventListener('change', onChangeSepiaEffectSetter);
    groupeRepeatingEventListenerActions(onCklickValueUpper, onCklickValueDowner, onChangeNoneEffectSetter);
  };

  const onChangeMarvinEffectSetter = () => {
    showElement(effectInputContainerElement);
    isSliderDestroy();
    picturePreviewElement.classList.add('effects__preview--marvin');
    const setPictureEffect = () => picturePreviewElement.style.filter = `invert(${effectInputElement.value}%)`;
    createSlider(SliderData.MARVIN_RANGEMIN, SliderData.MARVIN_RANGEMAX, SliderData.MARVIN_START, SliderData.MARVIN_STEP);
    setUpdateSlider(setPictureEffect);
    sliderElement.noUiSlider.set(SliderData.MARVIN_START);
    marvinEffectInputElement.removeEventListener('click', onCklickValueDowner);
    groupeRepeatingEventListenerActions(onCklickValueUpper, onCklickValueDowner, onChangeNoneEffectSetter);
  };

  const onChangePhobosEffectSetter = () => {
    showElement(effectInputContainerElement);
    isSliderDestroy();
    picturePreviewElement.classList.add('effects__preview--phobos');
    const setPictureEffect = () => picturePreviewElement.style.filter = `blur(${effectInputElement.value}px)`;
    createSlider(SliderData.PHOBOS_RANGEMIN, SliderData.PHOBOS_RANGEMAX, SliderData.PHOBOS_START, SliderData.PHOBOS_STEP);
    setUpdateSlider(setPictureEffect);
    sliderElement.noUiSlider.set(SliderData.PHOBOS_START);
    phobosEffectInputElement.removeEventListener('change', onChangePhobosEffectSetter);
    groupeRepeatingEventListenerActions(onCklickValueUpper, onCklickValueDowner, onChangeNoneEffectSetter);
  };

  const onChangeHeatEffectSetter = () => {
    showElement(effectInputContainerElement);
    isSliderDestroy();
    picturePreviewElement.classList.add('effects__preview--heat');
    const setPictureEffect = () => picturePreviewElement.style.filter = `brightness(${effectInputElement.value})`;
    createSlider(SliderData.HEAT_RANGEMIN, SliderData.HEAT_RANGEMAX, SliderData.HEAT_START, SliderData.HEAT_STEP);
    setUpdateSlider(setPictureEffect);
    sliderElement.noUiSlider.set(SliderData.HEAT_START);
    heatEffectInputElement.removeEventListener('change', onChangeHeatEffectSetter);
    groupeRepeatingEventListenerActions(onCklickValueUpper, onCklickValueDowner, onChangeNoneEffectSetter);
  };

  const onClickCloser = () => {
    isSliderDestroy();
    setSliderDefault();
    setPictureDefault();
  };

  const onEscCloser = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      evt.preventDefault();
      isSliderDestroy();
      setSliderDefault();
      setPictureDefault();
    }
  };

  noneEffectInputElement.addEventListener('change', onChangeNoneEffectSetter);
  chromeEffectInputElement.addEventListener('change', onChangeChromeEffectSetter);
  sepiaEffectInputElement.addEventListener('change', onChangeSepiaEffectSetter);
  marvinEffectInputElement.addEventListener('change', onChangeMarvinEffectSetter);
  phobosEffectInputElement.addEventListener('change', onChangePhobosEffectSetter);
  heatEffectInputElement.addEventListener('change', onChangeHeatEffectSetter);
  scaleControlBiggerElement.addEventListener('click', onCklickValueUpper);
  scaleControlSmallerElement.addEventListener('click', onCklickValueDowner);
  uploadCancelButtonElement.addEventListener('click', onClickCloser);
  document.addEventListener('keydown', onEscCloser);
}
export {
  setEffect
};


