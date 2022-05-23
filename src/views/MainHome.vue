<template>
  <HeroSlider/>
  <BuyTickets/>
  <AboutUs/>
  <AboutGroup/>
</template>



<script>
import HeroSlider from '@/components/HeroSlider.vue'
import BuyTickets from '@/components/BuyTickets.vue'
import AboutUs from '@/components/AboutUs.vue'
import AboutGroup from '@/components/AboutGroup.vue'

export default {
  components: {
    HeroSlider,
    BuyTickets,
    AboutUs,
    AboutGroup,
  },
  methods(){

  },
  async created(){
    await this.$store.dispatch('fetchUsers')
  }
}
</script>