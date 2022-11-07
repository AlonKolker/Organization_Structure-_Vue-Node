<template>
  <div class="report-list-conteiner">
    <reportPreview v-if="reports.length > 0" v-for="(report, idx) in reports" :report="report" :idx="idx" />
    <div v-else>
      <div class="no-report-msg">There is no report to show</div>
    </div>
    <div class="close-report-modal-conteiner">
      <button @click="this.$emit('closeReportModal')" class="close-report-modal-btn">Close</button>
    </div>
  </div>
</template>

<script>
import reportPreview from "./report-preview.vue"
export default {
  name: "report-list-modal",
  props: {
    reports: {
      type: Array,
    },
  },
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
  emits: ["closeReportModal"],
  components: {
    reportPreview,
  },
}
</script>
