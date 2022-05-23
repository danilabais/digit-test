<template>
  <div class="card-profile">
                <h3 class="card-profile__title">
                    {{item.name}}
                </h3>
                <span class="card-profile__subtitle">
                    Санкт-Петербург
                </span>
                <router-link :to="`/user/${item.id}`" class="card-profile__link">
                    Смотреть профиль  
                </router-link>
            </div>
</template>

<script>
export default {
    props: {
        item:Object
    },
   
}
</script>

<style>

</style>