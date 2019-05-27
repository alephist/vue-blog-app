<template>
  <nav class="navbar is-info">
    <div class="container">
      <div class="navbar-brand">
        <router-link
          :to="{ name: 'Posts' }"
          class="navbar-item has-text-weight-semibold is-size-5"
        >My Blog Site</router-link>

        <a
          class="navbar-burger"
          :class="{ 'is-active': menuIsActive }"
          @click="menuIsActive = !menuIsActive"
        >
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>

      <div class="navbar-menu" :class="{ 'is-active': menuIsActive }">
        <div class="navbar-end" v-if="currentUser">
          <router-link :to="{ name: 'Posts' }" class="navbar-item">Home</router-link>
          <router-link :to="{ name: 'AddPost' }" class="navbar-item">Add Post</router-link>
          <a class="navbar-item">Hello, {{ currentUser.username }}</a>
          <a class="navbar-item" @click="logout">Logout</a>
        </div>

        <div class="navbar-end" v-else>
          <router-link :to="{ name: 'Posts' }" class="navbar-item">Home</router-link>
          <router-link :to="{ name: 'Register' }" class="navbar-item">Register</router-link>
          <router-link :to="{ name: 'Login' }" class="navbar-item">Login</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Navbar",
  data() {
    return {
      menuIsActive: false
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("logoutUser");
      this.$router.push({ name: "Posts" });
    }
  },
  computed: mapGetters(["currentUser"])
};
</script>

<style>
</style>
