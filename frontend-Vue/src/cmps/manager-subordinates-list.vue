<template>
  <h3 class="subordinates-header">My subordinates:</h3>
  <div class="manager-subordinates-list-conteiner">
    <section v-if="subordinates.length > 0" v-for="subordinate in subordinates" :key="subordinate._id">
      <managerSubordinatePreview @assignTask="onAssignTask" :subordinate="subordinate" />
    </section>
    <div v-else>There is no subordinates</div>
  </div>
</template>

<script>
import managerSubordinatePreview from "./manager-subordinate-preview.vue"
//
export default {
  name: "manager-subordinates-list.",
  props: {
    subordinates: {
      type: Array,
    },
  },
  data() {
    return {}
  },
  created() {},
  methods: {
    onAssignTask(taskInfo) {
      this.$emit("assignTask", taskInfo)
    },
  },
  computed: {},
  emits: ["assignTask"],
  components: {
    managerSubordinatePreview,
  },
}
</script>
