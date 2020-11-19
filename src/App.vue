<template>
  <div id="app">
    <el-row>
      <el-col :span="16" :offset="4"
        ><div class="grid-content bg-purple"><task-manager /></div
      ></el-col>
    </el-row>
  </div>
</template>

<script>
import TaskManager from "./components/TaskManager.vue";
export default {
  name: "App",
  components: {
    TaskManager,
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
