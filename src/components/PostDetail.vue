<template>
  <section class="section" v-if="post">
    <div class="container">
      <b-loading :is-full-page="false" :active.sync="pageIsLoading"></b-loading>

      <h1 class="title">{{ post.title }}</h1>
      <h2 class="subtitle">Submitted by: {{ post.author.username }}</h2>

      <div class="content has-text-justified">{{ post.content }}</div>

      <div class="buttons are-small" v-if="currentUser && currentUser.id === post.author._id">
        <router-link
          :to="{ name: 'EditPost', params: { id: post._id } }"
          class="button is-warning"
        >Edit</router-link>
        <button class="button is-danger" @click="deletePost">Delete</button>
      </div>

      <AddComment :postId="postId" @fetchPost="fetchPost"/>

      <Comment
        v-for="comment in post.comments"
        :key="comment._id"
        :comment="comment"
        :postId="postId"
        @fetchPost="fetchPost"
      />
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import post from "../services/postService";
import AddComment from "./AddComment";
import Comment from "./Comment";

export default {
  name: "PostDetail",
  components: {
    AddComment,
    Comment
  },
  data() {
    return {
      postId: this.$route.params.id,
      post: null,
      pageIsLoading: false
    };
  },
  methods: {
    async fetchPost() {
      const { data } = await post.fetchPost(this.postId);
      this.post = data;
    },
    async deletePost() {
      try {
        await post.deletePost(this.postId);
        this.$router.push({ name: "Posts" });
      } catch (err) {
        alert(err.response.data);
      }
    }
  },
  computed: mapGetters(["currentUser"]),
  async created() {
    this.pageIsLoading = true;
    try {
      await this.fetchPost();
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
