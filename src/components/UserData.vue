<template>
   <section class="user-data">
    <div class="container">
      <div class="user-data__wrapper" v-if="user">
        <div class="user-data__name" >
         {{user.name}}
        </div>
        <ul class="user-data__info">
          <li>
            {{user.address.city}}
          </li>
          <div class="user-data__hr"></div>
          <li>
            {{user.email}}
          </li>
          <div class="user-data__hr"></div>
          <li>
            {{user.phone.split(' ')[0]}}
          </li>
          <div class="user-data__btn-wrap">
            <button class="user-data__message card-profile__link">
              Написать сообщение
            </button>
            <div class="user-data__hr user-data__hr--white"></div>
            <button class="user-data__suggest card-profile__link">
              Предложить сходить на концерт
            </button>
          </div>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    props: {
      user:Object
    }
}
</script>

<style>

</style>