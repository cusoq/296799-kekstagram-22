import {
  galleryPosts
} from './gallery.js';

const getPhotoList = () => {

  const photoList = document.querySelector('.pictures');
  const photoTemplate = document.querySelector('#picture').content;
  const photoListFragment = document.createDocumentFragment();

  galleryPosts.forEach(({url, likesCount, comments, id}) => {
    const element = photoTemplate.cloneNode(true);
    element.querySelector('.picture__img').src = url;
    element.querySelector('.picture').id = id;
    element.querySelector('.picture__likes').textContent = likesCount;
    element.querySelector('.picture__comments').textContent = comments.length;
    photoList.appendChild(element);
  });

  photoList.appendChild(photoListFragment);
};

export {
  getPhotoList
}
