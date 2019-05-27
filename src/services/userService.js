import api from './api';

function registerUser(user) {
  return api.post('/api/users', { username: user.username, email: user.email, password: user.password });
}

export default {
  registerUser
};
