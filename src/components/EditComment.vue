<template>
  <section class="section">
    <div class="container">
      <b-loading :is-full-page="false" :active.sync="pageIsLoading"></b-loading>

      <h1 class="title has-text-centered">Edit Comment</h1>

      <form>
        <b-field label="Content">
          <b-input type="textarea" custom-class="has-fixed-size" v-model.trim="content"></b-input>
        </b-field>

        <div class="buttons">
          <b-button type="is-info" :loading="buttonIsLoading" @click="editComment">Submit</b-button>
          <b-button @click="$router.push({ name: 'PostDetail', params: { id: postId } })">Cancel</b-button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import comment from "../services/commentService";

export default {
  name: "EditComment",
  data() {
    return {
      postId: this.$route.params.id,
      commentId: this.$route.params.commentId,
      content: "",
      buttonIsLoading: false,
      pageIsLoading: false
    };
  },
  methods: {
    async editComment() {
      this.buttonIsLoading = true;
      try {
        await comment.updateComment(this.postId, this.commentId, this.content);
        this.$router.push({ name: "PostDetail", params: { id: this.postId } });
      } catch (err) {
        alert(err.response.data);
      } finally {
        this.buttonIsLoading = false;
      }
    }
  },
  async created() {
    this.pageIsLoading = true;
    try {
      const { data } = await comment.fetchComment(this.postId, this.commentId);
      this.content = data.content;
    } catch (err) {
      alert(err.response.data);
    } finally {
      this.pageIsLoading = false;
    }
  }
};
</script>

<style>
</style>
