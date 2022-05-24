<template>
  <LoaderIcon v-if="loading" />
  <div v-if="!loading">
    <section class="user-posts" v-if="posts">
      <div class="container">
        <h2 class="user-posts__title about__title">Посты</h2>
        <div class="user-posts__wrapper">
          <div class="user-posts__post" v-for="post in posts" :key="post.id">
            <div class="user-posts__posts-header">
              <h4 class="user-posts__posts-title">
                {{ post.title }}
              </h4>
              <span class="user-posts__post-date"> 12.01.22 </span>
            </div>
            <div class="user-posts__text">
              {{ post.body }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import LoaderIcon from "@/components/icons/LoaderIcon.vue";
export default {
  props: {
    posts: Object,
  },
  computed: {
    loading() {
      return !this.posts;
    },
  },
  components: {
    LoaderIcon,
  },
};
</script>

<style></style>
