<template>
  <section class="">
    <!-- <filterCmp @onChangeFilter="onFilterChange" /> -->
    <employeeList />
  </section>
</template>

<script>
import employeeList from "../cmps/employee-list.vue"
export default {
  name: "employee",
  computed: {},
  methods: {},
  components: { employeeList },
}
</script>
