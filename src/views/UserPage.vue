<template>
  <LoaderIcon v-if="loading" />
  <div v-if="!loading">
    <UserData :user="user" />
    <UserPosts :posts="posts" />
    <UserPublication />
    <NavigationControl @changePage="changePage" />
  </div>
</template>

<script>
import UserData from "@/components/UserData.vue";
import UserPosts from "@/components/UserPosts.vue";
import UserPublication from "@/components/UserPublication.vue";
import LoaderIcon from "@/components/icons/LoaderIcon.vue";
import NavigationControl from "@/components/NavigationControl.vue";
import axios from "axios";

export default {
  mounted() {
    this.fetchUser(), this.fetchUserPosts();
  },
  data() {
    return {
      user: null,
      posts: null,
      currentPage: +this.$route.params.id,
    };
  },
  methods: {
    async fetchUser() {
      this.user = (
        await axios.get(
          "https://jsonplaceholder.typicode.com/users/" + this.$route.params.id
        )
      ).data;
    },
    async fetchUserPosts() {
      this.posts = (
        await axios.get(
          "https://jsonplaceholder.typicode.com/posts?userId=" +
            this.$route.params.id
        )
      ).data;
    },
    async changePage(action) {
      this.currentPage = this.$route.params.id;
      if (action == "next") {
        await this.$router.push(`/user/${++this.currentPage}`);
      }
      if (action == "prev") {
        await this.$router.push(`/user/${--this.currentPage}`);
      }
      await this.fetchUserPosts();
      await this.fetchUser();
    },
  },
  computed: {
    loading() {
      return !this.user && !this.posts;
    },
  },
  components: {
    UserData,
    UserPosts,
    UserPublication,
    LoaderIcon,
    NavigationControl,
  },
};
</script>
