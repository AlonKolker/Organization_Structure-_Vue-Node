<template>
  <section class="report-modal-conteiner">
    <div class="report-modal-content">
      <div><span class="report-to-header">Report to:</span> {{ employe.firstName }} {{ employe.lastName }}</div>
      <textarea class="report-text" v-model="reportText" placeholder="Note: text required"></textarea>
    </div>
    <div class="report-modal-btn-conteiner">
      <button class="send-report-btn" @click="emitReport">Send</button>
      <button class="cancel-report-btn" @click="emitCancel">Cancel</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "report-modal",
  props: {
    employe: {
      type: Object,
    },
  },
  data() {
    return {
      reportText: "",
    }
  },
  created() {},
  methods: {
    emitReport() {
      if (this.reportText.length < 5) return
      this.$emit("report", this.reportText)
      this.reportText = ""
    },
    emitCancel() {
      this.$emit("canelReport")
    },
  },
  computed: {},
  emits: ["report", "canelReport"],
  components: {},
}
</script>
