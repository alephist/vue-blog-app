<template>
  <article class="media">
    <div class="media-content">
      <div class="content">
        <p>
          <strong>{{ comment.author.username }}</strong>
          <br>
          {{ comment.content }}
        </p>
      </div>

      <nav class="level" v-if="currentUser && currentUser.id === comment.author._id">
        <div class="level-left">
          <div class="level-item">
            <router-link
              :to="{ name: 'EditComment', params: { id: postId, commentId: comment._id } }"
              class="button is-small is-warning"
            >Edit</router-link>
          </div>
          <div class="level-item">
            <button class="button is-small is-danger" @click="deleteComment">Delete</button>
          </div>
        </div>
      </nav>
    </div>
  </article>
</template>

<script>
import { mapGetters } from "vuex";
import comment from "../services/commentService";

export default {
  name: "Comment",
  props: ["comment", "postId"],
  methods: {
    async deleteComment() {
      try {
        await comment.deleteComment(this.postId, this.comment._id);
        this.$emit("fetchPost");
      } catch (err) {
        alert(err.response.data);
      }
    }
  },
  computed: mapGetters(["currentUser"])
};
</script>

<style>
</style>
