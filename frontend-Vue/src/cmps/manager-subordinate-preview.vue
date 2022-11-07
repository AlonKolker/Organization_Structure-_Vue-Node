<template>
  <section v-if="subordinate" class="employee-report-preview">
    <div class="subordinate-name">{{ getFullName }}</div>
    <div class="subordinate-position">{{ subordinate.position }}</div>
    <button class="assign-task-btn" @click="toggleTaskModal()">Assign Task</button>
    <newTaskModal v-if="taskModal" @cancelTask="toggleTaskModal" @assignTask="onAssignTask" :employee="subordinate" />
  </section>
</template>
<script>
import newTaskModal from "../cmps/new-task-modal.vue"
export default {
  name: "manager-subordinate-preview",
  props: {
    subordinate: {
      type: Object,
    },
  },
  data() {
    return {
      taskModal: false,
    }
  },
  created() {},

  methods: {
    onAssignTask(taskInfo) {
      let { text, dueDate } = taskInfo
      taskInfo = {
        text,
        dueDate,
        employee: this.subordinate,
      }
      this.$emit("assignTask", taskInfo)
      this.taskModal = false
    },
    toggleTaskModal() {
      this.taskModal = !this.taskModal
    },
  },
  computed: {
    getFullName() {
      return this.subordinate.firstName + "  " + this.subordinate.lastName
    },
  },
  emits: ["assignTask"],
  components: { newTaskModal },
}
</script>
