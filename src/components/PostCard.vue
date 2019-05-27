<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">{{ post.title }}</p>
    </header>

    <div class="card-content">
      <div class="content">
        {{ postContent }}...
        <router-link :to="{ name: 'PostDetail', params: { id: post._id } }">Read More</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostCard",
  props: ["post"],
  computed: {
    postContent() {
      return this.post.content.substring(0, 250);
    }
  }
};
</script>

<style scoped>
.card {
  margin-bottom: 20px;
}

.card:last-of-type {
  margin-bottom: 0;
}
</style>
