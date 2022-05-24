<template>
  <section class="user-posts" v-if="posts">
    <div class="container">
      <h2 class="user-posts__title about__title">Посты</h2>
      <div class="user-posts__wrapper">
        <div
          class="user-posts__post"
          v-for="item in posts.slice(0, 2)"
          :key="item.id"
        >
          <div class="user-posts__posts-header">
            <h4 class="user-posts__posts-title">
              {{ item.title }}
            </h4>
            <span class="user-posts__post-date"> 12.01.22 </span>
          </div>
          <div class="user-posts__text">
            {{ item.body }}
          </div>
          <router-link
            :to="'/more-info/' + item.id"
            class="user-posts__all-posts card-profile__link"
          >
            Детальная страница
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    posts: Object,
  },
};
</script>

<style></style>
