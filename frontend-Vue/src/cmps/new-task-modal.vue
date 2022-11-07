<template>
  <section v-if="employee" class="task-modal-conteiner">
    <div class="task-modal-content">
      <div><span class="add-task-header"> Add task to: </span>{{ employee.firstName }} {{ employee.lastName }}</div>
      <input class="task-date-input" v-model="dueDate" type="date" />
      <textarea class="task-text" v-model="taskText" title="Due date" placeholder="Note:text and Due date required"></textarea>
    </div>
    <div class="task-btn-conteiner">
      <button class="send-task-btn" @click="emitTask">Send</button>
      <button class="cancel-task-btn" @click="emitCancel">Cancel</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "new-task-modal",
  props: {
    employee: {
      type: Object,
    },
  },
  data() {
    return {
      taskText: null,
      dueDate: null,
    }
  },
  created() {},
  methods: {
    emitTask() {
      if (!this.taskText || !this.dueDate) return
      let taskInfo = {
        text: this.taskText,
        dueDate: this.dueDate,
      }
      this.$emit("assignTask", taskInfo)
      this.taskText = ""
      this.dueDate = ""
    },
    emitCancel() {
      this.$emit("cancelTask")
    },
  },
  computed: {},
  emits: ["assignTask", "cancelTask"],
  components: {},
}
</script>
