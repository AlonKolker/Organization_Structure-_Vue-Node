<template>
  <section v-if="task" class="employee-task-preview-conteiner">
<div class="task-text">{{task.text}}</div> 
<div class="task-due-date">{{task.dueDate}}</div>
 </section>
</template>

<script>

export default {
  name: "employee-task-preview",
  props: {
    task: {
      type: Object
    },
  },
  data() {
    return {}
  },
  created() {},
  methods: {},
  computed: {
 
  },
  emits: [""],
  components: {},
}
</script>
