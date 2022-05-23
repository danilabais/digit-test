<template>
  <UserData :user="user"/>
  <UserPosts/>
  <UserPublication/>
</template>

<script>
import UserData from '@/components/UserData.vue'
import UserPosts from '@/components/UserPosts.vue'
import UserPublication from '@/components/UserPublication.vue'
import axios from 'axios'

export default {
  mounted() {
    this.fetchUser()
  },
  data(){
    return {
      user: null,
    }
  },
  methods: {
    async fetchUser() {
      const user = (await axios.get('https://jsonplaceholder.typicode.com/users/'+this.$route.params.id)).data
      this.user = user
    }
  },
  components: {
    UserData,UserPosts,UserPublication,
  },

}
</script>

<style>

</style>