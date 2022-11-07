<template>
  <section v-if="employees" class="employee-list-conteiner">
    <h2 class="employee-list-header">Employee List</h2>
    <employeePreview v-for="employee in employees" :employee="employee" :key="employee._id" />
  </section>
</template>

<script>
import employeePreview from "./employee-preview.vue"
export default {
  name: "employee-list",
  props: {},
  data() {
    return {}
  },
  created() {},
  methods: {},
  computed: {
    employees() {
      return this.$store.getters.employees
    },
  },
  emits: [""],
  components: {
    employeePreview,
  },
}
</script>
