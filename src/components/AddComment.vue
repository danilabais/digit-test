<template>
  <section class="modal">
    <div class="container modal__btn-wrap">
      <button
        v-on:click="showModal"
        class="user-posts__all-posts card-profile__link"
      >
        Добавить комментарий
      </button>
    </div>
    <div
      class="modal__area"
      :class="{ active: modalActive }"
      v-on:click="showModal"
    >
      <form v-on:submit.prevent class="modal__wrap" v-on:click.stop>
        <h3 class="modal__title about__title">Добавить комментарий</h3>
        <div class="modal__who-wrap">
          <input
            v-model.trim="name"
            type="text"
            name="name"
            placeholder="Ник"
            class="modal__name"
          />
          <input
            v-model.trim="mail"
            type="mail"
            name="mail"
            placeholder="Почта"
            class="modal__mail"
          />
        </div>
        <textarea
          v-model.trim="comment"
          type="text"
          name="text"
          placeholder="Комментарий"
          class="modal__text about__form-textarea"
        />
        <div class="modal__btns-wrap">
          <button
            v-on:click="cancel"
            class="user-posts__all-posts card-profile__link"
          >
            Отмена
          </button>
          <button
            v-on:click="sendComment"
            class="user-posts__all-posts card-profile__link"
          >
            Отправить
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      modalActive: false,

      name: "",
      comment: "",
      mail: "",
    };
  },
  methods: {
    showModal() {
      this.cancel();
    },
    cancel() {
      this.modalActive = !this.modalActive;
      this.name = this.comment = this.mail = "";
    },
    sendComment() {
      this.$store.dispatch("sendComment", {
        postId: this.$route.params.id,
        id: Date.now(),
        name: this.name,
        email: this.mail,
        body: this.comment,
      });
      this.cancel();
    },
  },
  watch: {
    modalActive(el) {
      el
        ? document.body.classList.add("hidden")
        : document.body.classList.remove("hidden");
    },
  },
  unmounted() {
    document.body.classList.remove("hidden");
  },
};
</script>

<style></style>
