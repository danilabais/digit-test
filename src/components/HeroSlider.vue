<template>
    <Splide :options="options">
    <SplideSlide>
        <section class="hero">
            <div class="bg-radial">
                <h1 class="hero__title">
                Twenty One Pilots 
                <div class="bg-linear"></div>
                </h1>
                <span class="hero__subtitle">
                22.02.23 в 21:00 
                </span>
            </div>
            <div class="hero__controls container ">
                <button class=" hero__controls-prev hero__controls-arrow">
                    <ArrowIcon class="hero__controls-img"/>
                </button>
                <a href="#" class="hero__controls-buy nav__menu-link">Купить билет</a>
                <button class=" hero__controls-next hero__controls-arrow">
                    <ArrowIcon class="hero__controls-img"/>
                </button>
            </div>
            <div class="liner-grad"></div>
        </section>
    </SplideSlide>
    
  </Splide>
</template>








<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

import ArrowIcon from '@/components/icons/ArrowIcon.vue'

export default {
    components: { Splide, SplideSlide,ArrowIcon },
    data(){
      return {
          options: {
             arrows: false, 
             type  : 'fade',
          }
      }
  }
}
</script>
