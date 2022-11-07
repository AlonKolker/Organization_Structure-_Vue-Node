<template>
  <section v-if="currEmp" class="employee-info-conteiner">
    <employeeInfoCmp @report="onSendReport" :currEmp="currEmp" :key="currEmp._id" />
    <employeeTaskList :tasks="currEmp.tasks" />
    <div class="manager-subordinates-list">
      <managerSubordinatesList v-if="subordinates" @assignTask="onAssignTask" :subordinates="subordinates" />
    </div>
    <button class="go-back-btn" @click="onGoBack">Go back</button>
  </section>
</template>

<script>
import employeeInfoCmp from "../cmps/employee-info-cmp.vue"
import employeeTaskList from "../cmps/employee-task-list.vue"
import managerSubordinatesList from "../cmps/manager-subordinates-list.vue"

export default {
  name: "employee-info",
  data() {
    return {
      employees: [],
      currEmp: null,
    }
  },
  async created() {
    const { id } = this.$route.params
    this.employees = this.$store.getters.employees
    let currIdx = this.employees.findIndex((emp) => emp._id === id)
    this.currEmp = this.employees[currIdx]
  },
  methods: {
    onSendReport(reportInfo) {
      let { reportText, employeeId, managerId } = reportInfo
      let managerIdx = this.employees.findIndex((emp) => emp._id === managerId)
      let manager = JSON.parse(JSON.stringify(this.employees[managerIdx]))
      if (!this.validateSubordinate(employeeId, manager.employees)) return
      let date =
        " " +
        new Date(Date.now()).getDate() +
        "/" +
        (new Date(Date.now()).getMonth() + 1) +
        "/" +
        new Date(Date.now()).getFullYear()
      manager.reports.push({ text: reportText, date })
      reportInfo = {
        manager,
        employeeId,
      }
      this.$store.dispatch({ type: "addReport", reportInfo })
    },
    validateSubordinate(employeeId, employees) {
      return employees.includes(employeeId)
    },
    onAssignTask(taskInfo) {
      let { text, dueDate, employee } = taskInfo
      let currManager = this.currEmp
      if (!currManager.employees.includes(employee._id)) return
      taskInfo = {
        text,
        dueDate,
        employee,
        managerId: currManager._id,
      }
      this.$store.dispatch({ type: "assignTask", taskInfo })
    },
    onGoBack() {
      this.$router.push(`/`)
    },
  },
  computed: {
    subordinates() {
      if (!this.currEmp.employees) return []
      const allEmployees = this.$store.getters.employees
      let subordinates = allEmployees.filter((emp) => {
        if (this.currEmp.employees.includes(emp._id)) {
          return emp
        }
      })

      return subordinates
    },
  },

  components: {
    employeeInfoCmp,
    employeeTaskList,
    managerSubordinatesList,
  },
}
</script>
