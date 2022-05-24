<template>
  <div class="navigation container">
    <button
      v-show="+this.$route.params.id !== 1"
      class="card-profile__link"
      v-on:click="changePage('prev')"
    >
      Предыдущий участник
    </button>
    <button
      v-show="+this.$route.params.id !== 10"
      class="navigation__next card-profile__link"
      v-on:click="changePage('next')"
    >
      Следующий участник
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    changePage(action) {
      this.$emit("changePage", action);
    },
  },
};
</script>
