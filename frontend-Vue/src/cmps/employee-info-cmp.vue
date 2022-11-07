<template>
  <section v-if="currEmp" class="employee-info-cmp-conteiner">
    <img :src="getAvatar" alt="" />
    <div class="employee-title">Name:</div>
    <div class="employee-name">{{ fullName }}</div>
    <div class="report-list-modal-btn">
      <button v-if="currEmp.position === 'manager'" class="report-list-modal-btn" @click="reportListModal = true">
        See Reports
      </button>
    </div>
    <div class="position-title">Position:</div>
    <div class="position-definition">{{ currEmp.position }}</div>
    <div class="manager-title">Manager:</div>
    <div class="line"></div>
    <div class="manager-name">{{ getManager }}</div>
    <div class="report-btn-conteiner">
      <button @click="toggleNewReportModal" title="Employee must have manager" class="report-btn">Report</button>
    </div>
    <newReportModal
      @report="onEmitReport"
      @canelReport="toggleNewReportModal"
      v-if="newReportModal"
      :employe="currEmp"
      :key="currEmp._id"
    />
    <reportListModal
      v-if="currEmp.reports && reportListModal"
      @closeReportModal="reportListModal = !reportListModal"
      :reports="currEmp.reports"
    />
  </section>
</template>

<script>
import newReportModal from "./new-report-Modal.vue"
import reportListModal from "./report-list-modal.vue"
export default {
  name: "employee-info-cmp",
  props: {
    currEmp: {
      type: Object,
    },
  },
  data() {
    return {
      newReportModal: false,
      reportListModal: false,
    }
  },
  created() {},
  methods: {
    toggleNewReportModal() {
      if (this.currEmp.manegerId === "null") return //In case of this manager dose not have is own mangaer
      this.newReportModal = !this.newReportModal
    },
    onEmitReport(reportText) {
      this.newReportModal = false
      let reportInfo = {
        reportText,
        employeeId: this.currEmp._id,
        managerId: this.currEmp.manegerId,
      }
      reportInfo = JSON.parse(JSON.stringify(reportInfo))
      this.$emit("report", reportInfo)
    },
  },
  computed: {
    fullName() {
      return this.currEmp.firstName + " " + this.currEmp.lastName
    },
    getManager() {
      let employees = this.$store.getters.employees
      console.log(employees.length)

      let managerIdx = employees.findIndex((emp) => emp._id === this.currEmp.manegerId)
      if (managerIdx === -1) return "None"
      else return employees[managerIdx].firstName + " " + employees[managerIdx].lastName
    },
    getAvatar() {
      return `https://i.pravatar.cc/150?u=${this.currEmp._id}`
    },
  },
  emits: ["report"],
  components: {
    newReportModal,
    reportListModal,
  },
}
</script>
