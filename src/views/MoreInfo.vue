<template>
  <AllPosts :posts="posts" />
  <PostComments :comments="comments" />
  <AddComment />
</template>

<script>
import AllPosts from "@/components/AllPosts.vue";
import PostComments from "@/components/PostComments.vue";
import AddComment from "@/components/AddComment.vue";
import axios from "axios";

export default {
  mounted() {
    this.fetchComments(), this.fetchPost();
  },
  data() {
    return {
      comments: null,
      posts: null,
    };
  },
  methods: {
    async fetchComments() {
      const comments = (
        await axios.get(
          "https://jsonplaceholder.typicode.com/comments?postId=" +
            this.$route.params.id
        )
      ).data;
      this.comments = comments;
    },
    async fetchPost() {
      const posts = (
        await axios.get(
          "https://jsonplaceholder.typicode.com/posts/" + this.$route.params.id
        )
      ).data;
      this.posts = [posts];
    },
  },
  components: {
    AllPosts,
    PostComments,
    AddComment,
  },
};
</script>
