<template>
  <section class="section">
    <div class="container">
      <h1 class="title has-text-centered">Register</h1>

      <form>
        <b-field label="Username">
          <b-input v-model.trim="user.username"></b-input>
        </b-field>

        <b-field label="Email">
          <b-input type="email" v-model.trim="user.email"></b-input>
        </b-field>

        <b-field label="Password">
          <b-input type="password" v-model.trim="user.password"></b-input>
        </b-field>

        <div class="buttons">
          <b-button type="is-info" :loading="buttonIsLoading" @click="registerUser">Submit</b-button>
          <b-button @click="$router.push({ name: 'Posts' })">Cancel</b-button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      user: {
        username: "",
        email: "",
        password: ""
      },
      buttonIsLoading: false
    };
  },
  methods: {
    async registerUser() {
      this.buttonIsLoading = true;
      try {
        await this.$store.dispatch("loginAfterRegister", this.user);
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
