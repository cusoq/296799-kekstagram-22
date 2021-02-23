import {
  getSimilarPosts
} from './post-list.js';

const getGalleryPosts = getSimilarPosts();
const getCurrentPost = (element) =>  getGalleryPosts.find(obj => obj.id === element.id);

export {
  getGalleryPosts,
  getCurrentPost
}
