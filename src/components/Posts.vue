<template>
  <section class="section" v-if="posts.length">
    <div class="container">
      <b-loading :is-full-page="false" :active.sync="pageIsLoading"></b-loading>
      <PostCard v-for="post in posts" :key="post._id" :post="post"/>
    </div>
  </section>
</template>

<script>
import post from "../services/postService";
import PostCard from "./PostCard";

export default {
  name: "Posts",
  components: {
    PostCard
  },
  data() {
    return {
      posts: [],
      pageIsLoading: false
    };
  },
  async created() {
    this.pageIsLoading = true;
    try {
      const { data } = await post.fetchPosts();
      this.posts = data;
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
