import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
  },
  getters: {
    tasks: (state) => state.tasks,
  },
  actions: {
    async addTask({ commit }, task) {
      commit("ADD_TASK", task);
    },
    async removeTask({ commit }, id) {
      commit("REMOVE_TASK", id);
    },
    async updateTask({ commit }, task) {
      commit("UPDATE_TASK", task);
    },
    async clearCompleted({ commit }) {
      commit("CLEAR_COMPLETED");
    },
  },
  mutations: {
    ADD_TASK(state, payload) {
      state.tasks.push(payload);
    },
    REMOVE_TASK(state, payload) {
      state.tasks = state.tasks.filter((task) => task.id !== payload);
    },
    UPDATE_TASK(state, payload) {
      const task = state.tasks.find((task) => task.id == payload.id);
      const index = state.tasks.indexOf(task);
      state.tasks.splice(index, 1, payload);
    },
    CLEAR_COMPLETED(state) {
      state.tasks = state.tasks.filter((task) => task.isComplete !== true);
    },
  },
});
