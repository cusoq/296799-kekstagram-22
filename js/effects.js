/* global noUiSlider:readonly */
let RANGEMIN;
let RANGEMAX;
let RANGESTART;
let STEP;
const sliderElement = document.querySelector('.effect-level__slider');
const scaleInputElement = document.querySelector('.scale__control--value');
const effectInputElement = document.querySelector('.effect-level__value');
const scaleControlSmallerElement = document.querySelector('.scale__control--smaller');
const scaleControlBiggerElement = document.querySelector('.scale__control--bigger');
const picturePreviewElement = document.querySelector('.img-upload__preview');
const noneEffectInputElement = document.querySelector('#effect-none');
const chromeEffectInputElement = document.querySelector('#effect-chrome');
const sepiaEffectInputElement = document.querySelector('#effect-sepia');
const marvinEffectInputElement = document.querySelector('#effect-marvin');
const phobosEffectInputElement = document.querySelector('#effect-phobos');
const heatEffectInputElement = document.querySelector('#effect-heat');


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

const setEffect = () => {
  const setPictureTransform = () => picturePreviewElement.style.transform = `scale(${parseInt(scaleInputElement.value) / 100})`
  RANGEMIN = 25;
  RANGEMAX = 100;
  RANGESTART = 100;
  STEP = 25;
  createSlider(RANGEMIN, RANGEMAX, RANGESTART, STEP);

  const onUpdateSlider = (__, handle, unencoded) => {
    scaleInputElement.value = `${unencoded[handle]}%`;
    setPictureTransform();
  }
  sliderElement.noUiSlider.on('update', onUpdateSlider);

  const onCklickValueUpper = () => {
    scaleInputElement.value = `${parseInt(scaleInputElement.value) + STEP}%`;
    sliderElement.noUiSlider.set(scaleInputElement.value);
    setPictureTransform();
  }

  const onCklickValueDowner = () => {
    scaleInputElement.value = `${parseInt(scaleInputElement.value) - STEP}%`;
    sliderElement.noUiSlider.set(scaleInputElement.value);
    setPictureTransform();
  }

  const onChangeNoneEffectSetter = () => {
    isSliderDestroy();
    picturePreviewElement.style.filter = 'none';
    picturePreviewElement.className = 'img-upload__preview';
    scaleControlBiggerElement.removeEventListener('click', onCklickValueUpper);
    scaleControlSmallerElement.removeEventListener('click', onCklickValueDowner);
    noneEffectInputElement.removeEventListener('change', onChangeNoneEffectSetter);
    chromeEffectInputElement.addEventListener('change', onChangeChromeEffectSetter);
    sepiaEffectInputElement.addEventListener('change', onChangeSepiaEffectSetter);
    marvinEffectInputElement.addEventListener('change', onChangeMarvinEffectSetter);
    phobosEffectInputElement.addEventListener('change', onChangePhobosEffectSetter);
    heatEffectInputElement.addEventListener('change', onChangeHeatEffectSetter);
  };

  const onChangeChromeEffectSetter = () => {
    isSliderDestroy();
    picturePreviewElement.classList.add('effects__preview--chrome');

    const setPictureEffect = () => picturePreviewElement.style.filter = `grayscale(${effectInputElement.value})`;
    RANGEMIN = 0;
    RANGEMAX = 1;
    RANGESTART = 1;
    STEP = 0.1;
    createSlider(RANGEMIN, RANGEMAX, RANGESTART, STEP);

    const onUpdateSlider = (__, handle, unencoded) => {
      effectInputElement.value = unencoded[handle];
      setPictureEffect();
    }
    sliderElement.noUiSlider.on('update', onUpdateSlider);
    sliderElement.noUiSlider.set(RANGESTART);
    scaleControlBiggerElement.removeEventListener('click', onCklickValueUpper);
    scaleControlSmallerElement.removeEventListener('click', onCklickValueDowner);
    sepiaEffectInputElement.removeEventListener('change', onChangeChromeEffectSetter);
    noneEffectInputElement.addEventListener('change', onChangeNoneEffectSetter);
  };

  const onChangeSepiaEffectSetter = () => {
    isSliderDestroy();
    picturePreviewElement.classList.add('effects__preview--sepia');

    const setPictureEffect = () => picturePreviewElement.style.filter = `sepia(${effectInputElement.value})`;
    RANGEMIN = 0;
    RANGEMAX = 1;
    RANGESTART = 1;
    STEP = 0.1;
    createSlider(RANGEMIN, RANGEMAX, RANGESTART, STEP);

    const onUpdateSlider = (__, handle, unencoded) => {
      effectInputElement.value = unencoded[handle];
      setPictureEffect();
    }
    sliderElement.noUiSlider.on('update', onUpdateSlider);
    sliderElement.noUiSlider.set(RANGESTART);
    scaleControlBiggerElement.removeEventListener('click', onCklickValueUpper);
    scaleControlSmallerElement.removeEventListener('click', onCklickValueDowner);
    sepiaEffectInputElement.removeEventListener('change', onChangeSepiaEffectSetter);
    noneEffectInputElement.addEventListener('change', onChangeNoneEffectSetter);
  };

  const onChangeMarvinEffectSetter = () => {
    isSliderDestroy();
    picturePreviewElement.classList.add('effects__preview--marvin');

    const setPictureEffect = () => picturePreviewElement.style.filter = `invert(${effectInputElement.value}%)`;
    RANGEMIN = 0;
    RANGEMAX = 100;
    RANGESTART = 100;
    STEP = 1;
    createSlider(RANGEMIN, RANGEMAX, RANGESTART, STEP);

    const onUpdateSlider = (__, handle, unencoded) => {
      effectInputElement.value = unencoded[handle];
      setPictureEffect();
    }
    sliderElement.noUiSlider.on('update', onUpdateSlider);
    sliderElement.noUiSlider.set(RANGESTART);
    scaleControlBiggerElement.removeEventListener('click', onCklickValueUpper);
    scaleControlSmallerElement.removeEventListener('click', onCklickValueDowner);
    sepiaEffectInputElement.removeEventListener('change', onChangeMarvinEffectSetter);
    noneEffectInputElement.addEventListener('change', onChangeNoneEffectSetter);
  };

  const onChangePhobosEffectSetter = () => {
    isSliderDestroy();
    picturePreviewElement.classList.add('effects__preview--phobos');

    const setPictureEffect = () => picturePreviewElement.style.filter = `blur(${effectInputElement.value}px)`;
    RANGEMIN = 0;
    RANGEMAX = 3;
    RANGESTART = 3;
    STEP = 0.1;
    createSlider(RANGEMIN, RANGEMAX, RANGESTART, STEP);

    const onUpdateSlider = (__, handle, unencoded) => {
      effectInputElement.value = unencoded[handle];
      setPictureEffect();
    }
    sliderElement.noUiSlider.on('update', onUpdateSlider);
    sliderElement.noUiSlider.set(RANGESTART);
    scaleControlBiggerElement.removeEventListener('click', onCklickValueUpper);
    scaleControlSmallerElement.removeEventListener('click', onCklickValueDowner);
    sepiaEffectInputElement.removeEventListener('change', onChangePhobosEffectSetter);
    noneEffectInputElement.addEventListener('change', onChangeNoneEffectSetter);
  };

  const onChangeHeatEffectSetter = () => {
    isSliderDestroy();
    picturePreviewElement.classList.add('effects__preview--heat');

    const setPictureEffect = () => picturePreviewElement.style.filter = `brightness(${effectInputElement.value})`;
    RANGEMIN = 1;
    RANGEMAX = 3;
    RANGESTART = 3;
    STEP = 0.1;
    createSlider(RANGEMIN, RANGEMAX, RANGESTART, STEP);

    const onUpdateSlider = (__, handle, unencoded) => {
      effectInputElement.value = unencoded[handle];
      setPictureEffect();
    }
    sliderElement.noUiSlider.on('update', onUpdateSlider);
    sliderElement.noUiSlider.set(RANGESTART);
    scaleControlBiggerElement.removeEventListener('click', onCklickValueUpper);
    scaleControlSmallerElement.removeEventListener('click', onCklickValueDowner);
    sepiaEffectInputElement.removeEventListener('change', onChangeHeatEffectSetter);
    noneEffectInputElement.addEventListener('change', onChangeNoneEffectSetter);
  };

  noneEffectInputElement.addEventListener('change', onChangeNoneEffectSetter);
  chromeEffectInputElement.addEventListener('change', onChangeChromeEffectSetter);
  sepiaEffectInputElement.addEventListener('change', onChangeSepiaEffectSetter);
  marvinEffectInputElement.addEventListener('change', onChangeMarvinEffectSetter);
  phobosEffectInputElement.addEventListener('change', onChangePhobosEffectSetter);
  heatEffectInputElement.addEventListener('change', onChangeHeatEffectSetter);
  scaleControlBiggerElement.addEventListener('click', onCklickValueUpper);
  scaleControlSmallerElement.addEventListener('click', onCklickValueDowner);
}
export {
  setEffect
};
