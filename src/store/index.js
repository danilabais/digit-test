import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    users: [],
  },
  getters: {
    users: (state) => state.users,
  },
  mutations: {
    SET_USERS(state, payload) {
      state.users = payload;
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      const users = (
        await axios.get("https://jsonplaceholder.typicode.com/users")
      ).data;
      commit("SET_USERS", users);
    },
    sendComment({ commit }, payload) {
      try {
        axios.post("https://jsonplaceholder.typicode.com/comments", payload);
        alert("Успешно отправлено");
      } catch (error) {
        console.log(error);
        console.log(commit);
      }
    },
  },
});
