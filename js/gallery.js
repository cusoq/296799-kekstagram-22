import {
  getSimilarPosts
} from './post-list.js';

const galleryPosts = getSimilarPosts();
const getPostById = (id) => galleryPosts.find(obj => obj.id === id);

export {
  galleryPosts,
  getPostById
}
