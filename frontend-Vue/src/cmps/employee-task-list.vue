<template>
  <div class="employee-task-conteiner">
    <h3 class="task-header">My tasks:</h3>
    <div class="task-list">
      <section v-if="tasks.length > 0" v-for="task in tasks">
        <employeeTaskPreview :task="task" />
      </section>
      <div v-else>There is no tasks</div>
    </div>
  </div>
</template>

<script>
import employeeTaskPreview from "./employee-task-prev.vue"
export default {
  name: "employee-task-list",
  props: {
    tasks: {
      type: Array,
    },
  },
  data() {
    return {}
  },
  created() {},
  methods: {},
  computed: {},
  emits: [""],
  components: {
    employeeTaskPreview,
  },
}
</script>
