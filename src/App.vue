<template>
  <MainHeader />
  <router-view />
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import "@/assets/styles/style.scss";
export default {
  components: {
    MainHeader,
  },
};
</script>
