<template >
    <section class="buy-tickets container" >
    <div class="buy-tickets__wrapper">
        <h2 class="buy-tickets__title">
        Купили билеты  
        </h2>
        <span class="buy-tickets__page">
            {{users.length}}/ <span class="buy-tickets__page--silver">1000</span>
        </span>
    </div>
    <Splide :options="options">
        <SplideSlide  v-for="item in users" :key="item.id">
                    <CardProfile :item="item"/>
        </SplideSlide>
    </Splide>
    </section>
</template>




<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import { mapGetters } from 'vuex'
import CardProfile from '@/components/CardProfile.vue'
export default {
     components: { Splide, SplideSlide,CardProfile },
     data(){
      return {
          options: {
             arrows: false, 
             perPage: 4,
             gap:13,
             pagination: false,
          }
      }
  },
  computed: {
        ...mapGetters(['users'])
      
  },
}
</script>
