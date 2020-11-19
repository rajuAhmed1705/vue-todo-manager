<template>
  <div>
    <el-row>
      <el-col :span="4"
        ><div class="grid-content bg-purple">
          <p>{{ remaining }} item(s) left</p>
        </div></el-col
      >
      <el-col :span="16"
        ><div class="grid-content bg-purple-light">
          <el-row style="display:flex; justify-content:center;">
            <el-button
              size="mini"
              type="primary"
              :disabled="filter == 'all'"
              @click="changeFilter('all')"
              >All</el-button
            >
            <el-button
              size="mini"
              type="primary"
              :disabled="filter == 'active'"
              @click="changeFilter('active')"
              >Active</el-button
            >
            <el-button
              size="mini"
              type="primary"
              :disabled="filter == 'completed'"
              @click="changeFilter('completed')"
              >Completed</el-button
            >
          </el-row>
        </div></el-col
      >
      <el-col :span="4"
        ><div class="grid-content bg-purple">
          <el-row>
            <el-button
              style=" float: right;"
              size="mini"
              type="primary"
              v-if="completed"
              @click="removeCompleted"
              >Clear completed</el-button
            >
          </el-row>
        </div></el-col
      >
    </el-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { bus } from "../../main";
export default {
  data() {
    return {
      filter: "all",
    };
  },
  computed: {
    ...mapGetters(["tasks"]),
    remaining() {
      return this.tasks.filter((task) => !task.isComplete).length;
    },
    completed() {
      return this.tasks.filter((task) => task.isComplete).length;
    },
  },
  methods: {
    ...mapActions(["clearCompleted"]),
    changeFilter(filter) {
      this.filter = filter;
      bus.$emit("filterChanged", filter);
    },
    removeCompleted() {
      this.clearCompleted();
    },
  },
};
</script>

<style scoped>
.el-row {
  margin-top: 10px;
}
.p {
  margin-top: 0px;
}
</style>
