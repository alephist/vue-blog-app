<template>
  <section class="section">
    <div class="container">
      <h1 class="title has-text-centered">Login</h1>

      <form>
        <b-field label="Email">
          <b-input type="email" v-model.trim="user.email"></b-input>
        </b-field>

        <b-field label="Password">
          <b-input type="password" v-model.trim="user.password"></b-input>
        </b-field>

        <div class="buttons">
          <b-button type="is-info" :loading="buttonIsLoading" @click="login">Login</b-button>
          <b-button @click="$router.push({ name: 'Posts' })">Cancel</b-button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      buttonIsLoading: false
    };
  },
  methods: {
    async login() {
      this.buttonIsLoading = true;
      try {
        await this.$store.dispatch("loginUser", this.user);
        this.$router.push({ name: "Posts" });
      } catch (err) {
        alert(err.response.data);
      } finally {
        this.buttonIsLoading = false;
      }
    }
  }
};
</script>

<style>
</style>
