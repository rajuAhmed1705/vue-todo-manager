<template>
  <div>
    <task-header />
    <task-input style="margin-bottom:20px;" />
    <task-item v-for="task in todosFiltered" :key="task.id" :task="task" />
    <task-footer v-if="tasks.length" />
  </div>
</template>

<script>
import TaskHeader from "./task/TaskHeader";
import TaskInput from "./task/TaskInput";
import TaskItem from "./task/TaskItem";
import TaskFooter from "./task/TaskFooter.vue";
import { mapGetters } from "vuex";
import { bus } from "../main";

export default {
  name: "Task-Manager",
  components: {
    TaskHeader,
    TaskInput,
    TaskItem,
    TaskFooter,
  },
  data() {
    return {
      filter: "all",
    };
  },
  created() {
    bus.$on("filterChanged", (filter) => (this.filter = filter));
  },
  beforeDestroy() {
    bus.$off("filterChanged", (filter) => (this.filter = filter));
  },
  computed: {
    ...mapGetters(["tasks"]),
    todosFiltered() {
      if (this.filter == "all") {
        return this.tasks;
      } else if (this.filter == "active") {
        return this.tasks.filter((task) => !task.isComplete);
      } else if (this.filter == "completed") {
        return this.tasks.filter((task) => task.isComplete);
      }
      return this.tasks;
    },
  },
};
</script>

<style>
.p {
  color: #606266;
}
</style>
