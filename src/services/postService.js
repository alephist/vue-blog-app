import api from './api';

function fetchPosts() {
  return api.get('/api/posts');
}

function fetchPost(id) {
  return api.get(`/api/posts/${id}`);
}

function addPost(post) {
  return api.post('/api/posts', { title: post.title, content: post.content });
}

function updatePost(id, post) {
  return api.put(`/api/posts/${id}`, { title: post.title, content: post.content });
}

function deletePost(id) {
  return api.delete(`/api/posts/${id}`);
}

export default {
  fetchPosts,
  fetchPost,
  addPost,
  updatePost,
  deletePost
};
