<template>
  <section class="comments container" v-if="comments">
    <h2 class="comments__title about__title">Комментарии</h2>
    <div class="comments__wrap">
      <div class="comments__item" v-for="item in comments" :key="item.id">
        <div class="comments__header">
          <div class="comments__name">
            {{ item.name }}
          </div>
          <div>
            {{ item.email }}
          </div>
        </div>
        <div class="user-posts__text">
          {{ item.body }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    comments: Object,
  },
};
</script>
