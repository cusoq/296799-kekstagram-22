const isValidLenght = function (currentString, maxLength) {
  return currentString.trim().length <= maxLength;
}

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
  showElement,
  closeElement,
  removeChildElements,
  setOverlay,
  removeOverlay,
  isValidLenght
};
