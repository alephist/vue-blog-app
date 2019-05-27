import api from './api';

function fetchComment(postId, commentId) {
  return api.get(`/api/posts/${postId}/comments/${commentId}`);
}

function addComment(postId, content) {
  return api.post(`/api/posts/${postId}/comments`, { content });
}

function updateComment(postId, commentId, content) {
  return api.put(`/api/posts/${postId}/comments/${commentId}`, { content });
}

function deleteComment(postId, commentId) {
  return api.delete(`/api/posts/${postId}/comments/${commentId}`);
}

export default {
  fetchComment,
  addComment,
  updateComment,
  deleteComment
};
