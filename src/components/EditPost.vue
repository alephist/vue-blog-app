<template>
  <section class="section">
    <div class="container">
      <h1 class="title has-text-centered">Edit Post</h1>

      <form>
        <b-field label="Title">
          <b-input v-model.trim="post.title"></b-input>
        </b-field>

        <b-field label="Content">
          <b-input type="textarea" custom-class="has-fixed-size" v-model.trim="post.content"></b-input>
        </b-field>

        <div class="buttons">
          <b-button
            type="is-info"
            :loading="buttonIsLoading"
            @click="updatePost"
            @keyup.enter="updatePost"
          >Submit</b-button>
          <b-button @click="$router.push({ name: 'PostDetail', params: { id: postId } })">Cancel</b-button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import post from "../services/postService";

export default {
  name: "EditPost",
  data() {
    return {
      postId: this.$route.params.id,
      post: {
        title: "",
        content: ""
      },
      buttonIsLoading: false
    };
  },
  methods: {
    async updatePost() {
      this.buttonIsLoading = true;
      try {
        await post.updatePost(this.postId, this.post);
        this.$router.push({ name: "PostDetail", params: { id: this.postId } });
      } catch (err) {
        alert(err.response.data);
      } finally {
        this.buttonIsLoading = false;
      }
    }
  },
  async created() {
    try {
      const { data } = await post.fetchPost(this.postId);
      this.post.title = data.title;
      this.post.content = data.content;
    } catch (err) {
      alert(err.response.data);
    }
  }
};
</script>

<style>
</style>
