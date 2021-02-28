import {
  galleryPosts
} from './gallery.js';

const getPhotoList = () => {

  const photoListElement = document.querySelector('.pictures');
  const photoTemplateElement = document.querySelector('#picture').content;
  const photoListFragment = document.createDocumentFragment();

  galleryPosts.forEach(({url, likesCount, comments, id}) => {
    const element = photoTemplateElement.cloneNode(true);
    element.querySelector('.picture__img').src = url;
    element.querySelector('.picture__img').setAttribute('data-id', id);
    element.querySelector('.picture').setAttribute('data-id', id);
    element.querySelector('.picture__likes').textContent = likesCount;
    element.querySelector('.picture__comments').textContent = comments.length;
    photoListElement.appendChild(element);
  });

  photoListElement.appendChild(photoListFragment);
};

export {
  getPhotoList
}
