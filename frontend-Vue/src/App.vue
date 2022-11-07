<template>
  <section class="app-conteiner main-layout">
    <div class="app-box">
      <router-view />
    </div>
  </section>
</template>

<script>
import Employee from "./views/employee.vue"

export default {
  name: "app",
  components: {
    Employee,
  },
  created() {
    this.$store.dispatch({ type: "loadEmployees" })
  },
}
</script>
