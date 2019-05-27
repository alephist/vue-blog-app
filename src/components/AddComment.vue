<template>
  <article class="media">
    <div class="media-content">
      <b-field>
        <b-input type="textarea" custom-class="has-fixed-size" v-model.trim="content"></b-input>
      </b-field>

      <nav class="level">
        <div class="level-left">
          <div class="level-item">
            <b-button
              class="button is-info"
              @click="addComment"
              :loading="buttonIsLoading"
              :disabled="!currentUser"
            >Submit</b-button>
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
  name: "AddComment",
  props: ["postId"],
  data() {
    return {
      content: "",
      buttonIsLoading: false
    };
  },
  methods: {
    async addComment() {
      this.buttonIsLoading = true;
      try {
        await comment.addComment(this.postId, this.content);
        this.content = "";
        this.$emit("fetchPost");
      } catch (err) {
        alert(err.response.data);
      } finally {
        this.buttonIsLoading = false;
      }
    }
  },
  computed: mapGetters(["currentUser"])
};
</script>

<style>
</style>
