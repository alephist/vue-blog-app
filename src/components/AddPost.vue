<template>
  <section class="section">
    <div class="container">
      <h1 class="title has-text-centered">Add Post</h1>

      <form>
        <b-field label="Title">
          <b-input v-model.trim="post.title"></b-input>
        </b-field>

        <b-field label="Content">
          <b-input type="textarea" v-model="post.content"></b-input>
        </b-field>

        <div class="buttons">
          <b-button type="is-info" :loading="buttonIsLoading" @click="addPost">Submit</b-button>
          <b-button @click="$router.push({ name: 'Posts' })">Cancel</b-button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import post from "../services/postService";

export default {
  name: "AddPost",
  data() {
    return {
      post: {
        title: "",
        content: ""
      },
      buttonIsLoading: false
    };
  },
  methods: {
    async addPost() {
      this.buttonIsLoading = true;
      try {
        await post.addPost(this.post);
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
