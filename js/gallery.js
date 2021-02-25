import {
  getSimilarPosts
} from './post-list.js';

const galleryPosts = getSimilarPosts();
const getCurrentPost = (element) =>  galleryPosts.find(obj => obj.id === element.id);

export {
  galleryPosts,
  getCurrentPost
}
