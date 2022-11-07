<template>
  <section class="employee-preview-conteiner flex">
    <div class="employee-first-name text">{{ fullName }}</div>
    <div class="employee-position text">{{ employee.position }}</div>
    <div class="view-employee-btn-conteiner">
      <button class="view-employee-btn" @click="goToInfoPage">View</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "employee-preview",
  props: { employee: Object },
  created() {},
  methods: {
    goToInfoPage() {
      this.$router.push(`/employee/${this.employee._id}`)
    },
  },
  computed: {
    fullName() {
      return this.employee.firstName + "   " + this.employee.lastName
    },
  },
  emits: ["employee"],
}
</script>
