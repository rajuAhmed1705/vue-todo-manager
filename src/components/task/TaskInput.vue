<template>
  <div>
    <el-input placeholder="Works to do..." v-model="title" @keyup.enter="add"
      ><el-button @click="add" slot="append" type="success"
        >Add</el-button
      ></el-input
    >
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { v1 } from "uuid";
export default {
  name: "Task-Input",
  data() {
    return {
      title: "",
      isComplete: false,
    };
  },

  methods: {
    ...mapActions(["addTask"]),
    add() {
      if (this.title) {
        this.addTask({
          id: v1(),
          title: this.title,
          isComplete: this.isComplete,
        });
      }
      this.title = "";
    },
  },
};
</script>

<style></style>
