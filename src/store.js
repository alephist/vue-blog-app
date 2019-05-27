import Vue from 'vue';
import Vuex from 'vuex';
import user from './services/userService';
import auth from './services/authService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    async loginAfterRegister({ commit }, payload) {
      const response = await user.registerUser(payload);
      auth.loginWithJwt(response.headers['x-auth-token']);
      commit('setUser', auth.getCurrentUser());
    },
    async loginUser({ commit }, payload) {
      await auth.login(payload);
      commit('setUser', auth.getCurrentUser());
    },
    logoutUser({ commit }) {
      auth.logout();
      commit('setUser', null);
    }
  },
  getters: {
    currentUser(state) {
      return state.user;
    }
  }
});
