import api from './api';
import jwtDecode from 'jwt-decode';

function getJwt() {
  return localStorage.getItem('token');
}

async function login(user) {
  const response = await api.post('/auth', { email: user.email, password: user.password });
  localStorage.setItem('token', response.data);
  api.setJwt(getJwt());
}

function loginWithJwt(token) {
  localStorage.setItem('token', token);
  api.setJwt(getJwt());
}

function logout() {
  localStorage.removeItem('token');
}

function getCurrentUser() {
  try {
    const token = getJwt();
    return jwtDecode(token);
  } catch (err) {
    return null;
  }
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser
};
