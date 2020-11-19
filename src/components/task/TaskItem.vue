<template>
  <div>
    <div v-if="!edit" @dblclick="editTask">
      <el-row>
        <el-col :span="24">
          <el-card shadow="hover" body-style="padding:15px;">
            <el-row>
              <el-col :span="22"
                ><div
                  class="grid-content"
                  :class="{ completed: task.isComplete }"
                >
                  <el-checkbox
                    :checked="task.isComplete"
                    @change="toggleComplete"
                  ></el-checkbox>
                  {{ task.title }}
                </div></el-col
              >
              <el-col :span="2"
                ><div class="grid-content">
                  <el-row class="justify">
                    <el-button
                      size="mini"
                      type="primary"
                      icon="el-icon-edit"
                      circle
                      @click="editTask"
                    ></el-button>
                    <el-button
                      size="mini"
                      type="danger"
                      icon="el-icon-delete"
                      circle
                      @click="removeTask(task.id)"
                    ></el-button>
                  </el-row></div
              ></el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div v-else @keyup.esc="cancelEdit">
      <el-row>
        <el-col :span="24">
          <el-card shadow="hover" body-style="padding:15px;">
            <el-row>
              <el-col :span="22"
                ><div class="grid-content">
                  <el-input
                    v-model="title"
                    @keyup.enter="saveEditData"
                    autofocus
                    placeholder="press esc to cancel"
                  ></el-input></div
              ></el-col>
              <el-col :span="2"
                ><div class="grid-content">
                  <el-row class="justify">
                    <el-button
                      size="mini"
                      type="success"
                      icon="el-icon-check"
                      circle
                      @click="saveEditData"
                    ></el-button>
                    <el-button
                      size="mini"
                      type="danger"
                      icon="el-icon-close"
                      circle
                      @click="cancelEdit"
                    ></el-button
                  ></el-row></div
              ></el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Task-Item",
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      edit: false,
      beforeEditCache: this.task,
      title: this.task.title,
    };
  },
  computed: {
    ...mapGetters(["tasks"]),
  },
  methods: {
    ...mapActions(["removeTask", "updateTask"]),
    deleteTask(id) {
      this.removeTask(id);
    },
    toggleComplete() {
      this.updateTask({
        id: this.task.id,
        title: this.task.title,
        isComplete: !this.task.isComplete,
      });
    },
    editTask() {
      this.edit = true;
    },
    cancelEdit() {
      this.edit = false;
    },
    saveEditData() {
      this.updateTask({
        id: this.task.id,
        title: this.title,
        isComplete: this.task.isComplete,
      });
      this.edit = false;
    },
  },
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
  color: gray;
}
.el-card body {
  padding-top: 15px;
  padding-bottom: 15px;
}
.justify {
  justify-content: space-between;
  display: flex;
}
</style>
